-- Updates existing v2 sessions without replacing the table or deleting rows.
alter table public.game_sessions add column if not exists pending_mentee_action text;

create or replace function public.submit_mentee_action(
  p_session_id uuid, p_card_index integer, p_action text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_action is null or p_action not in ('correct', 'taboo') then
    raise exception 'Invalid mentee action';
  end if;
  update public.game_sessions
  set pending_mentee_action = p_action
  where id = p_session_id and status = 'active' and phase = 'active'
    and card_index = p_card_index and pending_mentee_action is null;
  if not found then
    raise exception 'The card changed or an action is already pending. Refresh and try again.';
  end if;
end;
$$;

create or replace function public.admin_advance_game_session(
  p_session_id uuid, p_admin_token text, p_card_index integer,
  p_next_card jsonb, p_outcome text, p_mode text, p_difficulty text
) returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_session public.game_sessions;
  v_outcome text;
begin
  if auth.uid() is null then raise exception 'Mentor sign-in required'; end if;
  if p_outcome is not null and p_outcome not in ('correct', 'skip', 'taboo') then
    raise exception 'Invalid card outcome';
  end if;
  if p_mode is null or p_mode not in ('everyday', 'technical', 'customer', 'mixed') then raise exception 'Invalid theme'; end if;
  if p_difficulty is null or p_difficulty not in ('beginner', 'intermediate', 'advanced') then raise exception 'Invalid difficulty'; end if;
  if jsonb_typeof(p_next_card) is distinct from 'object' or nullif(p_next_card->>'target', '') is null then
    raise exception 'Invalid next card';
  end if;

  select * into v_session from public.game_sessions
  where id = p_session_id and mentor_id = auth.uid()
    and admin_token_hash = encode(extensions.digest(p_admin_token, 'sha256'), 'hex')
  for update;
  if not found then raise exception 'Session not found or access denied'; end if;
  if v_session.status <> 'active' or v_session.phase not in ('waiting', 'active')
      or v_session.card_index is distinct from p_card_index then
    raise exception 'The card changed or the session has ended. Refresh and try again.';
  end if;
  if v_session.phase = 'waiting' and p_outcome is not null then
    raise exception 'Start the session before scoring a card';
  end if;

  v_outcome := coalesce(v_session.pending_mentee_action, p_outcome);
  update public.game_sessions set
    mode = p_mode, difficulty = p_difficulty, current_card = p_next_card,
    card_index = card_index + 1, phase = 'active',
    timer_remaining = timer_seconds, timer_running = false,
    score_correct = coalesce(score_correct, 0) + case when v_outcome = 'correct' then 1 else 0 end,
    score_skip = coalesce(score_skip, 0) + case when v_outcome = 'skip' then 1 else 0 end,
    score_taboo = coalesce(score_taboo, 0) + case when v_outcome = 'taboo' then 1 else 0 end,
    pending_mentee_action = null
  where id = p_session_id
  returning * into v_session;
  return to_jsonb(v_session) - 'admin_token_hash';
end;
$$;

create or replace function public.get_public_session_state(p_session_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_session public.game_sessions;
  v_public_card jsonb;
begin
  select * into v_session from public.game_sessions where id = p_session_id;
  if not found then return null; end if;
  v_public_card := case
    when v_session.phase = 'active' then jsonb_build_object(
      'target', v_session.current_card->'target',
      'forbidden', coalesce(v_session.current_card->'forbidden', '[]'::jsonb),
      'category', v_session.current_card->'category',
      'clue', case
        when coalesce((v_session.current_card->>'clue_shown')::boolean, false) then v_session.current_card->'explanation'
        else 'null'::jsonb
      end,
      'timer_visible', coalesce((v_session.current_card->>'timer_visible')::boolean, false)
    )
    else '{}'::jsonb
  end;
  return jsonb_build_object(
    'id', v_session.id, 'engineer_name', v_session.engineer_name,
    'mode', v_session.mode, 'difficulty', v_session.difficulty,
    'timer_seconds', v_session.timer_seconds, 'timer_remaining', v_session.timer_remaining,
    'timer_running', v_session.timer_running, 'phase', v_session.phase,
    'status', v_session.status, 'current_card', v_public_card,
    'card_index', v_session.card_index, 'score_correct', v_session.score_correct,
    'pending_mentee_action', v_session.pending_mentee_action,
    'updated_at', v_session.updated_at
  );
end;
$$;

revoke all on function public.submit_mentee_action(uuid, integer, text) from public;
revoke all on function public.admin_advance_game_session(uuid, text, integer, jsonb, text, text, text) from public, anon;
revoke all on function public.get_public_session_state(uuid) from public;
grant execute on function public.submit_mentee_action(uuid, integer, text) to anon, authenticated;
grant execute on function public.admin_advance_game_session(uuid, text, integer, jsonb, text, text, text) to authenticated;
grant execute on function public.get_public_session_state(uuid) to anon, authenticated;
notify pgrst, 'reload schema';
