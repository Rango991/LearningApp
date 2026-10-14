import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { ensureQuests, migrate, reconcileStreak } from './game/engine';
import type { ScreenLogEntry } from './game/screenTime';
import type { Progress } from './game/types';
import { setSoundEnabled } from './sound';
import { addScreenLog, cloudConfigured, currentEmail, deleteScreenLog, pullProgress, pullScreenLog, pushProgress } from './sync/cloud';
import {
  loadProgress, loadRole, loadScreenLog, requestPersistentStorage, saveProgress, saveRole, saveScreenLog, type Role,
} from './sync/local';

export type SyncState = 'off' | 'signed-out' | 'syncing' | 'synced' | 'error';

/** 'missing' means the screen_time_log table hasn't been created in Supabase yet. */
export type ScreenLogState = 'ok' | 'missing' | 'error';

export interface StreakNotice {
  frozeDays: number;
  lostStreak: number;
}

interface Store {
  ready: boolean;
  role: Role | null;
  progress: Progress | null;
  cloudEmail: string | null;
  sync: SyncState;
  lastSynced: Date | null;
  streakNotice: StreakNotice | null;
  dismissStreakNotice: () => void;
  setRole: (r: Role | null) => void;
  /** Replace progress (learner device only). Saves locally and to the cloud. */
  setProgress: (p: Progress) => void;
  /** Re-check the cloud account and pull the latest data. Resolves to the progress now in use. */
  refresh: () => Promise<Progress | null>;
  resetDevice: () => void;
  /** Screen time used or added by a parent (needs cloud sync). */
  screenLog: ScreenLogEntry[];
  screenLogState: ScreenLogState;
  recordScreenTime: (minutes: number, note: string | null) => Promise<string | null>;
  removeScreenTime: (id: ScreenLogEntry['id']) => Promise<string | null>;
}

const Ctx = createContext<Store | null>(null);

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore outside StoreProvider');
  return s;
}

/** Progress is guaranteed once the learner has set up. */
export function useProgress(): [Progress, (p: Progress) => void] {
  const { progress, setProgress } = useStore();
  if (!progress) throw new Error('No progress yet');
  return [progress, setProgress];
}

/** Daily housekeeping when the app opens: streak freezes and today's quests. */
function prepare(p: Progress): { progress: Progress; notice: StreakNotice | null } {
  const check = reconcileStreak(migrate(p));
  const notice = check.frozeDays || check.lostStreak ? { frozeDays: check.frozeDays, lostStreak: check.lostStreak } : null;
  return { progress: ensureQuests(check.progress), notice };
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [role, setRoleState] = useState<Role | null>(loadRole);
  const [progress, setProgressState] = useState<Progress | null>(null);
  const [cloudEmail, setCloudEmail] = useState<string | null>(null);
  const [sync, setSync] = useState<SyncState>(cloudConfigured ? 'signed-out' : 'off');
  const [lastSynced, setLastSynced] = useState<Date | null>(null);
  const [streakNotice, setStreakNotice] = useState<StreakNotice | null>(null);
  const [screenLog, setScreenLog] = useState<ScreenLogEntry[]>(loadScreenLog);
  const [screenLogState, setScreenLogState] = useState<ScreenLogState>('ok');
  const pushTimer = useRef<number | undefined>(undefined);
  const roleRef = useRef(role);
  roleRef.current = role;

  const push = useCallback((p: Progress) => {
    if (!cloudConfigured || roleRef.current !== 'student') return;
    window.clearTimeout(pushTimer.current);
    pushTimer.current = window.setTimeout(async () => {
      if (!(await currentEmail())) return;
      setSync('syncing');
      try {
        await pushProgress(p);
        setSync('synced');
        setLastSynced(new Date());
      } catch {
        setSync('error');
      }
    }, 1500);
  }, []);

  const setProgress = useCallback((p: Progress) => {
    setProgressState(p);
    saveProgress(p);
    push(p);
  }, [push]);

  const refreshScreenLog = useCallback(async () => {
    try {
      const log = await pullScreenLog();
      setScreenLog(log);
      saveScreenLog(log);
      setScreenLogState('ok');
    } catch (e) {
      const code = (e as { code?: string }).code;
      setScreenLogState(code === '42P01' || code === 'PGRST205' ? 'missing' : 'error');
    }
  }, []);

  const refresh = useCallback(async (): Promise<Progress | null> => {
    const email = await currentEmail();
    setCloudEmail(email);
    if (!email) {
      setSync(cloudConfigured ? 'signed-out' : 'off');
      return loadProgress();
    }
    setSync('syncing');
    void refreshScreenLog();
    try {
      const fetched = await pullProgress();
      const remote = fetched && migrate(fetched);
      const local = loadProgress();
      setSync('synced');
      setLastSynced(new Date());
      if (roleRef.current === 'parent') {
        // The parent's phone just mirrors whatever the tablet last uploaded.
        setProgressState(remote);
        saveProgress(remote);
        return remote;
      }
      // Prefer the cloud copy if it's newer, or if this device only has a brand-new empty profile.
      const localIsBlank = local && local.xp === 0 && local.sessions.length === 0;
      if (remote && (!local || localIsBlank || remote.updatedAt > local.updatedAt)) {
        window.clearTimeout(pushTimer.current);
        const { progress: prepared, notice } = prepare(remote);
        setProgressState(prepared);
        saveProgress(prepared);
        if (notice) setStreakNotice(notice);
        return prepared;
      }
      if (local) push(local);
      return local;
    } catch {
      setSync('error');
      return loadProgress();
    }
  }, [push, refreshScreenLog]);

  // First load
  useEffect(() => {
    requestPersistentStorage();
    const local = loadProgress();
    if (local && loadRole() === 'student') {
      const { progress: prepared, notice } = prepare(local);
      setProgressState(prepared);
      saveProgress(prepared);
      setStreakNotice(notice);
    } else {
      setProgressState(local && migrate(local));
    }
    setReady(true);
    void refresh();
  }, [refresh]);

  // Re-sync when coming back online or reopening the app
  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState !== 'visible') return;
      if (roleRef.current === 'student') {
        const local = loadProgress();
        if (local) {
          const { progress: prepared, notice } = prepare(local);
          if (prepared !== local) {
            setProgressState(prepared);
            saveProgress(prepared);
          }
          if (notice) setStreakNotice(notice);
        }
      }
      void refresh();
    };
    window.addEventListener('online', onVisible);
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      window.removeEventListener('online', onVisible);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [refresh]);

  useEffect(() => {
    setSoundEnabled(progress?.settings.sound ?? true);
  }, [progress?.settings.sound]);

  const setRole = useCallback((r: Role | null) => {
    roleRef.current = r;
    setRoleState(r);
    saveRole(r);
  }, []);

  const recordScreenTime = useCallback(async (minutes: number, note: string | null) => {
    try {
      await addScreenLog(minutes, note);
      await refreshScreenLog();
      return null;
    } catch (e) {
      return (e as { message?: string }).message ?? 'Couldn’t save. Are you online?';
    }
  }, [refreshScreenLog]);

  const removeScreenTime = useCallback(async (id: ScreenLogEntry['id']) => {
    try {
      await deleteScreenLog(id);
      await refreshScreenLog();
      return null;
    } catch (e) {
      return (e as { message?: string }).message ?? 'Couldn’t remove it. Are you online?';
    }
  }, [refreshScreenLog]);

  const resetDevice = useCallback(() => {
    saveProgress(null);
    saveRole(null);
    setProgressState(null);
    setRoleState(null);
  }, []);

  return (
    <Ctx.Provider
      value={{
        ready, role, progress, cloudEmail, sync, lastSynced, streakNotice,
        dismissStreakNotice: () => setStreakNotice(null),
        setRole, setProgress, refresh, resetDevice,
        screenLog, screenLogState, recordScreenTime, removeScreenTime,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
