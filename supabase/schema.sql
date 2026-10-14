-- BrainBoost cloud sync. Run this once in Supabase: SQL Editor -> New query -> Run.
-- One row per family account holds the learner's whole progress as JSON.

create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

-- Each account can only see and change its own row.
drop policy if exists "read own progress" on public.progress;
create policy "read own progress" on public.progress
  for select using (auth.uid() = user_id);

drop policy if exists "insert own progress" on public.progress;
create policy "insert own progress" on public.progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "update own progress" on public.progress;
create policy "update own progress" on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Screen-time log: minutes used (negative) or added (positive), recorded by a parent.
create table if not exists public.screen_time_log (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  minutes integer not null,
  note text,
  created_at timestamptz not null default now()
);

alter table public.screen_time_log enable row level security;

drop policy if exists "read own screen log" on public.screen_time_log;
create policy "read own screen log" on public.screen_time_log
  for select using (auth.uid() = user_id);

drop policy if exists "insert own screen log" on public.screen_time_log;
create policy "insert own screen log" on public.screen_time_log
  for insert with check (auth.uid() = user_id);

drop policy if exists "delete own screen log" on public.screen_time_log;
create policy "delete own screen log" on public.screen_time_log
  for delete using (auth.uid() = user_id);
