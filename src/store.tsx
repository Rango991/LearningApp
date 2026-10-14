import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { ensureQuests, reconcileStreak } from './game/engine';
import type { Progress } from './game/types';
import { setSoundEnabled } from './sound';
import { cloudConfigured, currentEmail, pullProgress, pushProgress } from './sync/cloud';
import { loadProgress, loadRole, requestPersistentStorage, saveProgress, saveRole, type Role } from './sync/local';

export type SyncState = 'off' | 'signed-out' | 'syncing' | 'synced' | 'error';

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
  const check = reconcileStreak(p);
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

  const refresh = useCallback(async (): Promise<Progress | null> => {
    const email = await currentEmail();
    setCloudEmail(email);
    if (!email) {
      setSync(cloudConfigured ? 'signed-out' : 'off');
      return loadProgress();
    }
    setSync('syncing');
    try {
      const remote = await pullProgress();
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
  }, [push]);

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
      setProgressState(local);
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
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
