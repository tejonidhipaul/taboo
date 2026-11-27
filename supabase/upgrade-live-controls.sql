-- Adds mentor-controlled clue and timer visibility to the public session state.
-- Safe to run on an existing v2.1 project; this replaces only the read-only RPC.
-- If using mentee scoring, run upgrade-mentee-controls.sql after this file.
create or replace function public.get_public_session_state(
  p_session_id uuid
) returns jsonb
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
        when coalesce((v_session.current_card->>'clue_shown')::boolean, false) then coalesce(nullif(v_session.current_card->'hint', 'null'::jsonb), v_session.current_card->'explanation')
        else 'null'::jsonb
      end,
      'timer_visible', coalesce((v_session.current_card->>'timer_visible')::boolean, false)
    )
    else '{}'::jsonb
  end;

  return jsonb_build_object(
    'id', v_session.id,
    'engineer_name', v_session.engineer_name,
    'mode', v_session.mode,
    'timer_seconds', v_session.timer_seconds,
    'timer_remaining', v_session.timer_remaining,
    'timer_running', v_session.timer_running,
    'phase', v_session.phase,
    'status', v_session.status,
    'current_card', v_public_card,
    'card_index', v_session.card_index,
    'score_correct', v_session.score_correct,
    'updated_at', v_session.updated_at
  );
end;
$$;

grant execute on function public.get_public_session_state(uuid) to anon, authenticated;
notify pgrst, 'reload schema';
