import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Progress } from '../game/types';

// Optional cloud sync through Supabase. The tablet and the parent's phone sign
// in to the same family account; the tablet writes progress, the phone reads it.

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const cloudConfigured = Boolean(url && key);

let client: SupabaseClient | null = null;
function db(): SupabaseClient {
  if (!cloudConfigured) throw new Error('Cloud sync is not set up');
  client ??= createClient(url!, key!, { auth: { persistSession: true, autoRefreshToken: true } });
  return client;
}

export async function currentEmail(): Promise<string | null> {
  if (!cloudConfigured) return null;
  const { data } = await db().auth.getSession();
  return data.session?.user.email ?? null;
}

export async function signIn(email: string, password: string): Promise<string | null> {
  const { error } = await db().auth.signInWithPassword({ email, password });
  return error ? error.message : null;
}

export async function signUp(email: string, password: string): Promise<string | null> {
  const { data, error } = await db().auth.signUp({ email, password });
  if (error) return error.message;
  if (!data.session) return 'Account created. Check your email to confirm it, then sign in.';
  return null;
}

export async function signOut(): Promise<void> {
  if (cloudConfigured) await db().auth.signOut();
}

export async function pullProgress(): Promise<Progress | null> {
  const { data: session } = await db().auth.getSession();
  const userId = session.session?.user.id;
  if (!userId) return null;
  const { data, error } = await db().from('progress').select('data').eq('user_id', userId).maybeSingle();
  if (error) throw error;
  return (data?.data as Progress | undefined) ?? null;
}

export async function pushProgress(p: Progress): Promise<void> {
  const { data: session } = await db().auth.getSession();
  const userId = session.session?.user.id;
  if (!userId) return;
  const { error } = await db().from('progress').upsert({ user_id: userId, data: p, updated_at: p.updatedAt });
  if (error) throw error;
}
