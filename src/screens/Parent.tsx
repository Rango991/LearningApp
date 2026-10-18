import { useState } from 'react';
import { CloudSignIn } from '../components/CloudSignIn';
import type { RewardsControl } from '../components/RewardsPanel';
import { touch } from '../game/engine';
import type { FamilyReward, Progress } from '../game/types';
import { useStore } from '../store';
import { cloudConfigured, signOut } from '../sync/cloud';
import { ParentDashboard } from './ParentDashboard';

/** Ids of claims already marked as given, from both her progress and the parent's own marks. */
function givenIds(progress: Progress, extra: string[] = []): string[] {
  return [...new Set([...extra, ...(progress.claims ?? []).filter((c) => c.givenAt).map((c) => c.id)])];
}

/** The parent's own phone: signs in to the family account and mirrors the tablet's progress. */
export function ParentApp({ onViewHer }: { onViewHer: () => void }) {
  const { progress, cloudEmail, sync, lastSynced, refresh, setRole, ready, inbox, saveInbox } = useStore();
  const [saveError, setSaveError] = useState(false);

  if (!cloudConfigured) {
    return (
      <div className="welcome">
        <h1>Parent view</h1>
        <p className="muted">Cloud sync isn’t set up yet, so there’s nothing to show on this phone. Follow docs/SETUP.md to connect Supabase (about 5 minutes).</p>
        <p className="muted">For now, you can see her progress on the tablet: Me → Parent area.</p>
        <button className="btn ghost" onClick={() => setRole(null)}>Back</button>
      </div>
    );
  }

  if (ready && !cloudEmail) {
    return (
      <div className="welcome">
        <h1>Parent sign in</h1>
        <p className="muted">Use the same family account that’s signed in on her tablet.</p>
        <CloudSignIn onDone={refresh} allowCreate />
        <button className="btn link" onClick={() => setRole(null)}>Back</button>
      </div>
    );
  }

  // The phone can't change her progress, so the reward list and "given" marks go via the family account.
  function phoneRewards(p: Progress): RewardsControl {
    const items = inbox?.rewards?.items ?? p.rewards?.items ?? [];
    const given = givenIds(p, inbox?.given);
    const save = async (nextItems: FamilyReward[], nextGiven: string[]) => {
      const ok = await saveInbox({ rewards: { items: nextItems, updatedAt: new Date().toISOString() }, given: nextGiven });
      setSaveError(!ok);
    };
    return {
      items,
      given,
      onSave: (nextItems) => void save(nextItems, given),
      onGiven: (id) => void saveInbox({ rewards: inbox?.rewards ?? p.rewards, given: [...given, id] }).then((ok) => setSaveError(!ok)),
      note: saveError ? 'Couldn’t save that. Check you’re online and try again.' : 'Changes reach her tablet next time it opens the app or comes online.',
    };
  }

  return (
    <div className="parent-shell">
      <header className="parent-bar">
        <span className="brand small-brand">BrainBoost · Parent</span>
        <span className="muted small">{sync === 'syncing' ? 'Updating…' : sync === 'error' ? '⚠️ Offline' : lastSynced ? `Updated ${lastSynced.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}` : ''}</span>
        <button className="btn ghost small-btn" onClick={() => void refresh()}>↻ Refresh</button>
      </header>
      {progress && (
        <div className="view-her">
          <button className="btn primary wide" onClick={onViewHer}>👀 See {progress.profile.name}’s app</button>
        </div>
      )}
      {progress ? <ParentDashboard progress={progress} rewards={phoneRewards(progress)} /> : (
        <div className="welcome">
          <p className="muted">No progress has been uploaded yet. Sign in to <b>{cloudEmail}</b> on her tablet (Me → Cloud sync) and it’ll appear here.</p>
        </div>
      )}
      <footer className="parent-foot">
        <button className="btn link" onClick={async () => { await signOut(); setRole(null); }}>Sign out</button>
      </footer>
    </div>
  );
}

/** The parent area on her tablet, behind a PIN. */
export function ParentGate({ onClose }: { onClose: () => void }) {
  const { progress, setProgress, resetDevice, saveInbox } = useStore();
  const pin = progress?.settings.parentPin ?? null;
  const [entry, setEntry] = useState('');
  const [first, setFirst] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  if (!progress) return null;

  if (!unlocked) {
    const setting = pin === null;
    const title = setting ? (first ? 'Type the PIN again' : 'Create a 4-digit parent PIN') : 'Parent PIN';
    const submit = () => {
      if (entry.length !== 4) return;
      if (!setting) {
        if (entry === pin) setUnlocked(true);
        else { setError('Wrong PIN'); setEntry(''); }
      } else if (!first) {
        setFirst(entry); setEntry(''); setError('');
      } else if (entry === first) {
        setProgress(touch({ ...progress, settings: { ...progress.settings, parentPin: entry } }));
        setUnlocked(true);
      } else {
        setFirst(null); setEntry(''); setError('PINs didn’t match. Try again.');
      }
    };
    return (
      <div className="welcome">
        <h1>👪 {title}</h1>
        {setting && !first && <p className="muted">This stops the parent area being opened by accident.</p>}
        <input
          className="big-input pin" inputMode="numeric" pattern="[0-9]*" maxLength={4} autoFocus value={entry} type="password"
          onChange={(e) => setEntry(e.target.value.replace(/\D/g, ''))}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          aria-label="PIN"
        />
        {error && <p className="form-message">{error}</p>}
        <button className="btn primary wide" disabled={entry.length !== 4} onClick={submit}>OK</button>
        <button className="btn link" onClick={onClose}>Back</button>
      </div>
    );
  }

  // On her tablet the parent area changes her progress directly, and keeps the family account in step.
  function tabletRewards(p: Progress): RewardsControl {
    const given = givenIds(p);
    return {
      items: p.rewards?.items ?? [],
      given,
      onSave: (items) => {
        const rewards = { items, updatedAt: new Date().toISOString() };
        setProgress(touch({ ...p, rewards }));
        void saveInbox({ rewards, given });
      },
      onGiven: (id) => {
        const at = new Date().toISOString();
        setProgress(touch({ ...p, claims: (p.claims ?? []).map((c) => (c.id === id ? { ...c, givenAt: at } : c)) }));
        void saveInbox({ rewards: p.rewards, given: [...given, id] });
      },
    };
  }

  return (
    <div className="parent-shell">
      <header className="parent-bar">
        <button className="btn ghost small-btn" onClick={onClose}>← Back</button>
        <span className="brand small-brand">Parent area</span>
        <span />
      </header>
      <ParentDashboard progress={progress} rewards={tabletRewards(progress)} />
      <section className="panel danger-zone">
        <h2>Device</h2>
        <button className="btn ghost" onClick={() => setProgress(touch({ ...progress, settings: { ...progress.settings, parentPin: null } }))}>Change PIN</button>
        {!confirmReset ? (
          <button className="btn ghost" onClick={() => setConfirmReset(true)}>Remove progress from this device…</button>
        ) : (
          <>
            <p className="small">This deletes progress saved on this tablet. If cloud sync is on, the copy in the cloud stays and comes back when you sign in again.</p>
            <button className="btn danger" onClick={resetDevice}>Yes, remove it</button>
            <button className="btn ghost" onClick={() => setConfirmReset(false)}>Cancel</button>
          </>
        )}
      </section>
    </div>
  );
}
