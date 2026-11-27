-- Run this entire file once in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.game_sessions (
  id uuid primary key default gen_random_uuid(),
  admin_token_hash text not null,
  engineer_name text not null check (char_length(engineer_name) between 1 and 80),
  mode text not null check (mode in ('everyday', 'technical', 'customer', 'mixed')),
  difficulty text not null check (difficulty in ('beginner', 'intermediate', 'advanced')),
  timer_seconds integer not null default 60 check (timer_seconds between 0 and 600),
  status text not null default 'waiting' check (status in ('waiting', 'playing', 'paused', 'review', 'ended')),
  current_card jsonb,
  card_index integer not null default 0 check (card_index >= 0),
  score_correct integer not null default 0 check (score_correct >= 0),
  score_skipped integer not null default 0 check (score_skipped >= 0),
  score_taboo integer not null default 0 check (score_taboo >= 0),
  cards_attempted integer not null default 0 check (cards_attempted >= 0),
  timer_running boolean not null default false,
  time_remaining integer not null default 0 check (time_remaining >= 0),
  round_ends_at timestamptz,
  observations jsonb not null default '[]'::jsonb,
  feedback jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.game_sessions enable row level security;
revoke all on public.game_sessions from anon, authenticated;

create or replace function public.create_game_session(
  p_admin_token text,
  p_engineer_name text,
  p_mode text,
  p_difficulty text,
  p_timer_seconds integer
) returns uuid
language plpgsql
security definer
set search_path = public, extensions
as $$
declare new_id uuid;
begin
  if char_length(p_admin_token) < 32 then raise exception 'Invalid admin token'; end if;
  if p_mode not in ('everyday', 'technical', 'customer', 'mixed') then raise exception 'Invalid mode'; end if;
  if p_difficulty not in ('beginner', 'intermediate', 'advanced') then raise exception 'Invalid difficulty'; end if;
  if p_timer_seconds < 0 or p_timer_seconds > 600 then raise exception 'Invalid timer'; end if;
  insert into public.game_sessions(admin_token_hash, engineer_name, mode, difficulty, timer_seconds, time_remaining)
  values (encode(digest(p_admin_token, 'sha256'), 'hex'), trim(p_engineer_name), p_mode, p_difficulty, p_timer_seconds, p_timer_seconds)
  returning id into new_id;
  return new_id;
end;
$$;

create or replace function public.get_public_session_state(p_session_id uuid)
returns jsonb
language sql
security definer
set search_path = public
stable
as $$
  select jsonb_build_object(
    'id', id,
    'status', status,
    'current_card', current_card,
    'card_index', card_index,
    'timer_running', timer_running,
    'time_remaining', time_remaining,
    'round_ends_at', round_ends_at,
    'updated_at', updated_at
  )
  from public.game_sessions
  where id = p_session_id;
$$;

create or replace function public.admin_get_game_session(p_session_id uuid, p_admin_token text)
returns jsonb
language sql
security definer
set search_path = public, extensions
stable
as $$
  select to_jsonb(s) - 'admin_token_hash'
  from public.game_sessions s
  where id = p_session_id
    and admin_token_hash = encode(digest(p_admin_token, 'sha256'), 'hex');
$$;

create or replace function public.admin_patch_game_session(p_session_id uuid, p_admin_token text, p_patch jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare result jsonb;
begin
  if not exists (
    select 1 from public.game_sessions
    where id = p_session_id
      and admin_token_hash = encode(digest(p_admin_token, 'sha256'), 'hex')
  ) then
    raise exception 'Invalid session or admin key';
  end if;

  if p_patch ? 'status' and p_patch->>'status' not in ('waiting', 'playing', 'paused', 'review', 'ended') then raise exception 'Invalid status'; end if;

  update public.game_sessions set
    engineer_name = case when p_patch ? 'engineer_name' then left(trim(p_patch->>'engineer_name'), 80) else engineer_name end,
    status = case when p_patch ? 'status' then p_patch->>'status' else status end,
    current_card = case when p_patch ? 'current_card' then nullif(p_patch->'current_card', 'null'::jsonb) else current_card end,
    card_index = case when p_patch ? 'card_index' then greatest(0, (p_patch->>'card_index')::integer) else card_index end,
    score_correct = case when p_patch ? 'score_correct' then greatest(0, (p_patch->>'score_correct')::integer) else score_correct end,
    score_skipped = case when p_patch ? 'score_skipped' then greatest(0, (p_patch->>'score_skipped')::integer) else score_skipped end,
    score_taboo = case when p_patch ? 'score_taboo' then greatest(0, (p_patch->>'score_taboo')::integer) else score_taboo end,
    cards_attempted = case when p_patch ? 'cards_attempted' then greatest(0, (p_patch->>'cards_attempted')::integer) else cards_attempted end,
    timer_running = case when p_patch ? 'timer_running' then (p_patch->>'timer_running')::boolean else timer_running end,
    time_remaining = case when p_patch ? 'time_remaining' then greatest(0, (p_patch->>'time_remaining')::integer) else time_remaining end,
    round_ends_at = case when p_patch ? 'round_ends_at' then nullif(p_patch->>'round_ends_at', '')::timestamptz else round_ends_at end,
    observations = case when p_patch ? 'observations' and jsonb_typeof(p_patch->'observations') = 'array' then p_patch->'observations' else observations end,
    feedback = case when p_patch ? 'feedback' and jsonb_typeof(p_patch->'feedback') = 'object' then p_patch->'feedback' else feedback end,
    updated_at = now()
  where id = p_session_id;

  select to_jsonb(s) - 'admin_token_hash' into result from public.game_sessions s where id = p_session_id;
  return result;
end;
$$;

revoke all on function public.create_game_session(text,text,text,text,integer) from public;
revoke all on function public.get_public_session_state(uuid) from public;
revoke all on function public.admin_get_game_session(uuid,text) from public;
revoke all on function public.admin_patch_game_session(uuid,text,jsonb) from public;
grant execute on function public.create_game_session(text,text,text,text,integer) to anon, authenticated;
grant execute on function public.get_public_session_state(uuid) to anon, authenticated;
grant execute on function public.admin_get_game_session(uuid,text) to anon, authenticated;
grant execute on function public.admin_patch_game_session(uuid,text,jsonb) to anon, authenticated;
