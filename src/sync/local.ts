import type { ScreenLogEntry } from '../game/screenTime';
import type { Progress } from '../game/types';

const PROGRESS_KEY = 'brainboost:progress';
const ROLE_KEY = 'brainboost:role';

export type Role = 'student' | 'parent';

function read(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function write(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch { /* storage full or blocked; progress still syncs to the cloud if set up */ }
}

export function loadProgress(): Progress | null {
  const raw = read(PROGRESS_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw) as Progress; } catch { return null; }
}

export function saveProgress(p: Progress | null) {
  write(PROGRESS_KEY, p ? JSON.stringify(p) : null);
}

export function loadRole(): Role | null {
  const r = read(ROLE_KEY);
  return r === 'student' || r === 'parent' ? r : null;
}

export function saveRole(r: Role | null) {
  write(ROLE_KEY, r);
}

/** Ask the browser not to clear our storage when space is low. */
export function requestPersistentStorage() {
  navigator.storage?.persist?.().catch(() => {});
}

const SCREEN_LOG_KEY = 'brainboost:screenlog';

/** Last copy of the screen-time log fetched from the cloud, for offline use. */
export function loadScreenLog(): ScreenLogEntry[] {
  const raw = read(SCREEN_LOG_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw) as ScreenLogEntry[]; } catch { return []; }
}

export function saveScreenLog(log: ScreenLogEntry[]) {
  write(SCREEN_LOG_KEY, JSON.stringify(log));
}
