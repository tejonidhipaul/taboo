-- Say It! v2.0 — fresh install AND safe in-place upgrade
-- Run this entire file in Supabase SQL Editor. It keeps existing session rows.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.game_sessions (
  id uuid primary key default gen_random_uuid(),
  mentor_id uuid references auth.users(id) on delete cascade,
  admin_token_hash text not null,
  engineer_name text not null,
  mode text not null default 'everyday',
  difficulty text not null default 'intermediate',
  timer_seconds integer not null default 90,
  timer_remaining integer not null default 90,
  timer_running boolean not null default false,
  phase text not null default 'waiting',
  status text not null default 'active',
  current_card jsonb not null default '{}'::jsonb,
  card_index integer not null default 0,
  score_correct integer not null default 0,
  score_skip integer not null default 0,
  score_taboo integer not null default 0,
  observations jsonb not null default '[]'::jsonb,
  review jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- These statements add v2 fields when upgrading an earlier Say It! project.
alter table public.game_sessions add column if not exists mentor_id uuid references auth.users(id) on delete cascade;
alter table public.game_sessions add column if not exists admin_token_hash text;
alter table public.game_sessions add column if not exists engineer_name text default 'Engineer';
alter table public.game_sessions add column if not exists mode text default 'everyday';
alter table public.game_sessions add column if not exists difficulty text default 'intermediate';
alter table public.game_sessions add column if not exists timer_seconds integer default 90;
alter table public.game_sessions add column if not exists timer_remaining integer default 90;
alter table public.game_sessions add column if not exists timer_running boolean default false;
alter table public.game_sessions add column if not exists phase text default 'waiting';
alter table public.game_sessions add column if not exists status text default 'active';
alter table public.game_sessions add column if not exists current_card jsonb default '{}'::jsonb;
alter table public.game_sessions add column if not exists card_index integer default 0;
alter table public.game_sessions add column if not exists score_correct integer default 0;
alter table public.game_sessions add column if not exists score_skip integer default 0;
alter table public.game_sessions add column if not exists score_taboo integer default 0;
alter table public.game_sessions add column if not exists observations jsonb default '[]'::jsonb;
alter table public.game_sessions add column if not exists review jsonb default '{}'::jsonb;
alter table public.game_sessions add column if not exists created_at timestamptz default now();
alter table public.game_sessions add column if not exists updated_at timestamptz default now();

alter table public.game_sessions enable row level security;
revoke all on table public.game_sessions from anon, authenticated;

-- Table access stays private. Clients use the four narrowly scoped RPC functions below.
drop function if exists public.create_game_session(text, text, text, text, integer);
drop function if exists public.admin_get_game_session(uuid, text);
drop function if exists public.admin_patch_game_session(uuid, text, jsonb);
drop function if exists public.get_public_session_state(uuid);

create function public.create_game_session(
  p_admin_token text,
  p_difficulty text,
  p_engineer_name text,
  p_mode text,
  p_timer_seconds integer
) returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_user uuid := auth.uid();
  v_session public.game_sessions;
begin
  if v_user is null then
    raise exception 'Mentor sign-in required';
  end if;
  if p_mode not in ('everyday', 'technical', 'customer', 'mixed') then
    raise exception 'Invalid theme';
  end if;
  if p_difficulty not in ('beginner', 'intermediate', 'advanced') then
    raise exception 'Invalid difficulty';
  end if;
  if p_timer_seconds not in (0, 60, 90, 120) then
    raise exception 'Invalid timer';
  end if;
  if nullif(trim(p_engineer_name), '') is null then
    raise exception 'Engineer name is required';
  end if;
  if length(p_admin_token) < 32 then
    raise exception 'Invalid control token';
  end if;

  insert into public.game_sessions (
    mentor_id, admin_token_hash, engineer_name, mode, difficulty,
    timer_seconds, timer_remaining, timer_running, phase, status
  ) values (
    v_user,
    encode(extensions.digest(p_admin_token, 'sha256'), 'hex'),
    left(trim(p_engineer_name), 80),
    p_mode,
    p_difficulty,
    p_timer_seconds,
    p_timer_seconds,
    false,
    'waiting',
    'active'
  ) returning * into v_session;

  return to_jsonb(v_session) - 'admin_token_hash';
end;
$$;

create function public.admin_get_game_session(
  p_session_id uuid,
  p_admin_token text
) returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_session public.game_sessions;
begin
  if auth.uid() is null then raise exception 'Mentor sign-in required'; end if;

  select * into v_session
  from public.game_sessions
  where id = p_session_id
    and mentor_id = auth.uid()
    and admin_token_hash = encode(extensions.digest(p_admin_token, 'sha256'), 'hex');

  if not found then raise exception 'Session not found or access denied'; end if;
  return to_jsonb(v_session) - 'admin_token_hash';
end;
$$;

create function public.admin_patch_game_session(
  p_session_id uuid,
  p_admin_token text,
  p_patch jsonb
) returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_session public.game_sessions;
  v_hash text := encode(extensions.digest(p_admin_token, 'sha256'), 'hex');
begin
  if auth.uid() is null then raise exception 'Mentor sign-in required'; end if;
  if p_patch ? 'mode' and (p_patch->>'mode') not in ('everyday', 'technical', 'customer', 'mixed') then raise exception 'Invalid theme'; end if;
  if p_patch ? 'difficulty' and (p_patch->>'difficulty') not in ('beginner', 'intermediate', 'advanced') then raise exception 'Invalid difficulty'; end if;
  if p_patch ? 'phase' and (p_patch->>'phase') not in ('waiting', 'active', 'ended') then raise exception 'Invalid phase'; end if;
  if p_patch ? 'status' and (p_patch->>'status') not in ('active', 'ended') then raise exception 'Invalid status'; end if;

  update public.game_sessions set
    engineer_name = case when p_patch ? 'engineer_name' then left(trim(p_patch->>'engineer_name'), 80) else engineer_name end,
    mode = case when p_patch ? 'mode' then p_patch->>'mode' else mode end,
    difficulty = case when p_patch ? 'difficulty' then p_patch->>'difficulty' else difficulty end,
    timer_seconds = case when p_patch ? 'timer_seconds' then greatest(0, (p_patch->>'timer_seconds')::integer) else timer_seconds end,
    timer_remaining = case when p_patch ? 'timer_remaining' then greatest(0, (p_patch->>'timer_remaining')::integer) else timer_remaining end,
    timer_running = case when p_patch ? 'timer_running' then (p_patch->>'timer_running')::boolean else timer_running end,
    phase = case when p_patch ? 'phase' then p_patch->>'phase' else phase end,
    status = case when p_patch ? 'status' then p_patch->>'status' else status end,
    current_card = case when p_patch ? 'current_card' then coalesce(p_patch->'current_card', '{}'::jsonb) else current_card end,
    card_index = case when p_patch ? 'card_index' then greatest(0, (p_patch->>'card_index')::integer) else card_index end,
    score_correct = case when p_patch ? 'score_correct' then greatest(0, (p_patch->>'score_correct')::integer) else score_correct end,
    score_skip = case when p_patch ? 'score_skip' then greatest(0, (p_patch->>'score_skip')::integer) else score_skip end,
    score_taboo = case when p_patch ? 'score_taboo' then greatest(0, (p_patch->>'score_taboo')::integer) else score_taboo end,
    observations = case when p_patch ? 'observations' then coalesce(p_patch->'observations', '[]'::jsonb) else observations end,
    review = case when p_patch ? 'review' then coalesce(p_patch->'review', '{}'::jsonb) else review end,
    updated_at = now()
  where id = p_session_id
    and mentor_id = auth.uid()
    and admin_token_hash = v_hash
  returning * into v_session;

  if not found then raise exception 'Session not found or access denied'; end if;
  return to_jsonb(v_session) - 'admin_token_hash';
end;
$$;

create function public.get_public_session_state(
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
        when coalesce((v_session.current_card->>'clue_shown')::boolean, false) then v_session.current_card->'explanation'
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
    'difficulty', v_session.difficulty,
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

-- Keep timestamps current and send a payload-free public Realtime nudge.
create or replace function public.say_it_touch_session()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists say_it_touch_session on public.game_sessions;
create trigger say_it_touch_session
before update on public.game_sessions
for each row execute function public.say_it_touch_session();

create or replace function public.say_it_broadcast_session()
returns trigger
language plpgsql
security definer
set search_path = public, realtime
as $$
begin
  begin
    perform realtime.send(
      jsonb_build_object('session_id', new.id),
      'session_changed',
      'session:' || new.id::text,
      false
    );
  exception when others then
    -- Polling remains the fallback if Realtime is unavailable.
    null;
  end;
  return new;
end;
$$;

drop trigger if exists say_it_broadcast_session on public.game_sessions;
create trigger say_it_broadcast_session
after insert or update on public.game_sessions
for each row execute function public.say_it_broadcast_session();

revoke all on function public.create_game_session(text, text, text, text, integer) from public, anon;
revoke all on function public.admin_get_game_session(uuid, text) from public, anon;
revoke all on function public.admin_patch_game_session(uuid, text, jsonb) from public, anon;
revoke all on function public.get_public_session_state(uuid) from public;

grant execute on function public.create_game_session(text, text, text, text, integer) to authenticated;
grant execute on function public.admin_get_game_session(uuid, text) to authenticated;
grant execute on function public.admin_patch_game_session(uuid, text, jsonb) to authenticated;
grant execute on function public.get_public_session_state(uuid) to anon, authenticated;

notify pgrst, 'reload schema';
