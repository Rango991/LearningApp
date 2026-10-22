import { useEffect, useState } from 'react';
import { Confetti } from './components/Confetti';
import { Emoji } from './components/Emoji';
import { TopBar } from './components/Hud';
import { Mascot } from './components/Mascot';
import { applySession } from './game/engine';
import { BIRTHDAY_GEMS, accentFor, birthdayGift, mitoAccessory, resultLine } from './game/mito';
import type { Progress, RewardSummary, SessionKind, SessionResult } from './game/types';
import { SKINS } from './game/shop';
import { sfx } from './sound';
import { useStore } from './store';
import { AboutChat } from './screens/AboutChat';
import { Badges } from './screens/Badges';
import { Learn } from './screens/Learn';
import { Me } from './screens/Me';
import { ParentApp, ParentGate } from './screens/Parent';
import { Practice } from './screens/Practice';
import { Results } from './screens/Results';
import { Session, type SessionPlan } from './screens/Session';
import { Shop } from './screens/Shop';
import { StudentSetup, Welcome } from './screens/Welcome';

type Tab = 'learn' | 'practice' | 'badges' | 'shop' | 'me';

const TABS: { id: Tab; icon: string; label: string }[] = [
  { id: 'learn', icon: '🏠', label: 'Learn' },
  { id: 'practice', icon: '🎯', label: 'Practice' },
  { id: 'badges', icon: '🏅', label: 'Badges' },
  { id: 'shop', icon: '💎', label: 'Shop' },
  { id: 'me', icon: '🙂', label: 'Me' },
];

export function App() {
  const { ready, role, progress } = useStore();
  if (!ready) return null;
  if (!role) return <Welcome />;
  if (role === 'parent') return <ParentRoot />;
  if (!progress) return <StudentSetup />;
  return <StudentApp />;
}

/** The parent's phone: the dashboard, plus a read-only look at her side of the app. */
const VIEWING_KEY = 'brainboost:viewing';

function ParentRoot() {
  // Remembered for this browser tab, so a reload doesn't drop the parent out of the preview.
  const [viewing, setViewingState] = useState(() => {
    try { return sessionStorage.getItem(VIEWING_KEY) === '1'; } catch { return false; }
  });
  const setViewing = (v: boolean) => {
    setViewingState(v);
    try { if (v) sessionStorage.setItem(VIEWING_KEY, '1'); else sessionStorage.removeItem(VIEWING_KEY); } catch { /* not important */ }
    window.scrollTo(0, 0);
  };
  if (viewing) return <StudentApp readOnly onExit={() => setViewing(false)} />;
  return <ParentApp onViewHer={() => setViewing(true)} />;
}

/**
 * Her side of the app. With readOnly (a parent previewing it), everything works
 * but nothing is saved or uploaded.
 */
function StudentApp({ readOnly = false, onExit }: { readOnly?: boolean; onExit?: () => void }) {
  const store = useStore();
  const { progress, dismissStreakNotice } = store;
  const streakNotice = readOnly ? null : store.streakNotice;
  const setProgress = readOnly ? () => {} : store.setProgress;
  const [tab, setTab] = useState<Tab>('learn');
  const [plan, setPlan] = useState<SessionPlan | null>(null);
  const [results, setResults] = useState<{ summary: RewardSummary; kind: SessionKind; line: string; plan: SessionPlan } | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [birthdayNotice, setBirthdayNotice] = useState(false);
  const [parent, setParent] = useState(false);
  // In preview, show the results of a lesson against her data without saving them.
  const [previewProgress, setPreviewProgress] = useState<Progress | null>(null);
  const colour = progress?.profile.about?.colour;

  // Her favourite colour becomes the app's accent colour.
  useEffect(() => {
    const a = accentFor(progress?.profile.about);
    const root = document.documentElement.style;
    root.setProperty('--purple', a.main);
    root.setProperty('--purple-dark', a.dark);
    root.setProperty('--purple-soft', a.soft);
    return () => { root.removeProperty('--purple'); root.removeProperty('--purple-dark'); root.removeProperty('--purple-soft'); };
  }, [colour]);

  // Mito's colour from the shop.
  const skin = progress?.skin ?? 'default';
  useEffect(() => {
    const c = SKINS[skin] ?? SKINS.default;
    const root = document.documentElement.style;
    root.setProperty('--mito-body', c.body);
    root.setProperty('--mito-edge', c.edge);
    root.setProperty('--mito-belly', c.belly);
    return () => { root.removeProperty('--mito-body'); root.removeProperty('--mito-edge'); root.removeProperty('--mito-belly'); };
  }, [skin]);

  // Birthday gems, once a year.
  useEffect(() => {
    if (readOnly || !progress) return;
    const gifted = birthdayGift(progress);
    if (gifted) { setProgress(gifted); setBirthdayNotice(true); }
  }, []);

  if (!progress) return null;
  const about = progress.profile.about;
  const needsAbout = !readOnly && !about?.doneAt && !about?.skippedAt;
  const shown = (readOnly && results && previewProgress) || progress;

  function finish(result: SessionResult) {
    const { progress: next, summary } = applySession(progress!, result);
    setProgress(next);
    if (readOnly) setPreviewProgress(next);
    setResults({ summary, kind: result.kind, line: resultLine(next, summary, result.kind, result.unitId), plan: plan! });
    setPlan(null);
  }

  if (parent) return <ParentGate onClose={() => setParent(false)} />;
  if (aboutOpen || (needsAbout && !plan && !results)) {
    return <AboutChat progress={progress} setProgress={setProgress} editing={Boolean(about?.doneAt)} onClose={() => { setAboutOpen(false); window.scrollTo(0, 0); }} />;
  }
  if (results) {
    return <Results summary={results.summary} kind={results.kind} line={results.line} progress={shown}
      onDone={() => { setResults(null); setPreviewProgress(null); window.scrollTo(0, 0); }}
      onRetry={results.summary.needsRetry ? () => { setPlan(results.plan); setResults(null); window.scrollTo(0, 0); } : undefined} />;
  }
  if (plan) {
    return <Session plan={plan} accessory={mitoAccessory(progress)} buddy={{ name: progress.profile.name, animal: about?.animal }} onQuit={() => setPlan(null)} onFinish={finish} />;
  }

  return (
    <div className={`app ${readOnly ? 'previewing' : ''}`}>
      {readOnly && (
        <div className="preview-banner">
          <span>👀 Viewing {progress.profile.name}’s app · nothing you do here is saved</span>
          <button className="btn small-btn" onClick={onExit}>Exit</button>
        </div>
      )}
      <TopBar progress={progress} onStreak={() => setTab('me')} onBank={() => { setTab('learn'); window.scrollTo(0, 0); }} />
      <main className="content">
        {tab === 'learn' && <Learn progress={progress} onStart={setPlan} />}
        {tab === 'practice' && <Practice progress={progress} onStart={setPlan} />}
        {tab === 'badges' && <Badges progress={progress} />}
        {tab === 'shop' && <Shop progress={progress} setProgress={setProgress} />}
        {tab === 'me' && <Me progress={progress} setProgress={setProgress} onParent={() => (readOnly ? onExit?.() : setParent(true))} onAbout={() => setAboutOpen(true)} readOnly={readOnly} />}
      </main>
      <nav className="tabbar">
        {TABS.map((t) => (
          <button key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => { sfx.tap(); setTab(t.id); window.scrollTo(0, 0); }}>
            <Emoji e={t.icon} size={30} className="tab-icon" />
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </nav>

      {birthdayNotice && (
        <div className="modal-backdrop" onClick={() => setBirthdayNotice(false)}>
          <Confetti />
          <div className="modal pop-in" onClick={(e) => e.stopPropagation()}>
            <Mascot mood="cheer" accessory="party-hat" size={110} bounce />
            <h3>Happy birthday, {progress.profile.name}! 🎂</h3>
            <p>I got you a present: <b>{BIRTHDAY_GEMS} 💎</b>. Have an amazing day!</p>
            <button className="btn primary wide" onClick={() => setBirthdayNotice(false)}>Thanks, Mito!</button>
          </div>
        </div>
      )}

      {streakNotice && (
        <div className="modal-backdrop" onClick={dismissStreakNotice}>
          <div className="modal pop-in" onClick={(e) => e.stopPropagation()}>
            {streakNotice.frozeDays > 0 ? (
              <>
                <Emoji e="🧊" size={96} className="big-emoji" />
                <h3>Streak saved!</h3>
                <p>A streak freeze covered {streakNotice.frozeDays === 1 ? 'the day' : `${streakNotice.frozeDays} days`} you missed. Your {progress.streak.current}-day streak is safe. Do a lesson today to keep it going!</p>
              </>
            ) : (
              <>
                <Mascot mood="sad" accessory={mitoAccessory(progress)} size={90} />
                <h3>Your streak reset</h3>
                <p>You had a {streakNotice.lostStreak}-day streak. No worries, everyone misses a day! Start a new one today. Tip: streak freezes in the shop protect it next time.</p>
              </>
            )}
            <button className="btn primary wide" onClick={dismissStreakNotice}>Let’s go!</button>
          </div>
        </div>
      )}
    </div>
  );
}
