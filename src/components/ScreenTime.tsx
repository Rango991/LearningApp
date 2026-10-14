import { useState } from 'react';
import { dayKey, parseDay } from '../game/dates';
import {
  SCREEN_RULES, balance, bonusesOnDay, earnedHistory, earnedOnDay, isWeekend, nextBoostHint, studyMinutes,
} from '../game/screenTime';
import type { Progress } from '../game/types';
import { useStore } from '../store';

export function formatMinutes(mins: number): string {
  const sign = mins < 0 ? '−' : '';
  const m = Math.abs(Math.round(mins));
  if (m < 60) return `${sign}${m} min`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  return `${sign}${h}h${rest ? ` ${rest}m` : ''}`;
}

export function useBalance(progress: Progress): number {
  const { screenLog } = useStore();
  return balance(progress, screenLog);
}

/** Compact balance shown in the top bar. */
export function BankPill({ progress, onClick }: { progress: Progress; onClick?: () => void }) {
  const bal = useBalance(progress);
  return (
    <button className="hud-item bank" onClick={onClick} aria-label={`${bal} minutes of screen time banked`}>
      <span className="hud-icon">🎮</span>{formatMinutes(bal)}
    </button>
  );
}

function RulesText() {
  const { baseMinutes, boostRate, weekendMultiplier, unitTestBonus } = SCREEN_RULES;
  return (
    <ul className="rules small">
      <li>First {baseMinutes} min of study each day = {baseMinutes} min screen time</li>
      <li>Every minute after that = {boostRate} min</li>
      <li>Weekends: everything ×{weekendMultiplier} 🎉</li>
      <li>Pass a unit test (80%+): +{unitTestBonus} min bonus 🏆</li>
      <li>Only active time counts: no leaving lessons open!</li>
    </ul>
  );
}

/** Her screen-time bank on the Learn screen. */
export function BankCard({ progress }: { progress: Progress }) {
  const bal = useBalance(progress);
  const [showRules, setShowRules] = useState(false);
  const today = dayKey();
  const studied = Math.floor(studyMinutes(progress, today));
  const earned = earnedOnDay(progress, today) + bonusesOnDay(progress, today);
  return (
    <section className="card bank-card">
      <div className="bank-head">
        <span className="bank-icon">🎮</span>
        <div>
          <p className="bank-label">Screen time banked</p>
          <p className="bank-value">{formatMinutes(bal)}</p>
        </div>
        {isWeekend(today) && <span className="weekend-badge">Weekend ×2</span>}
      </div>
      <p className="small">Today: studied <b>{studied} min</b> → earned <b>{formatMinutes(earned)}</b></p>
      <p className="bank-hint small">⚡ {nextBoostHint(progress, today)}</p>
      <button className="btn link small" onClick={() => setShowRules(!showRules)}>{showRules ? 'Hide the rules' : 'How do I earn it?'}</button>
      {showRules && <RulesText />}
    </section>
  );
}

const QUICK_SPENDS = [15, 30, 60];

/** Parent's screen-time panel: balance, recording time used, and the log. */
export function ScreenTimePanel({ progress }: { progress: Progress }) {
  const { screenLog, screenLogState, recordScreenTime, removeScreenTime, cloudEmail } = useStore();
  const bal = balance(progress, screenLog);
  const [custom, setCustom] = useState('');
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const history = earnedHistory(progress, 7);

  async function record(minutes: number) {
    if (!minutes) return;
    setBusy(true);
    setMessage(null);
    const err = await recordScreenTime(minutes, note.trim() || null);
    setBusy(false);
    if (err) setMessage(err);
    else {
      setMessage(minutes < 0 ? `Recorded ${formatMinutes(-minutes)} used ✓` : `Added ${formatMinutes(minutes)} ✓`);
      setCustom('');
      setNote('');
    }
  }

  const customMins = parseInt(custom, 10);
  return (
    <section className="panel screen-panel">
      <h2>🎮 Screen time</h2>
      <div className="screen-balance">
        <span className="kpi-label">Banked now</span>
        <span className={`screen-balance-value ${bal < 0 ? 'neg' : ''}`}>{formatMinutes(bal)}</span>
      </div>

      <p className="small muted">Minutes earned each day (study minutes underneath)</p>
      <div className="earned-week">
        {history.map((h) => (
          <div key={h.day} className={`earned-day ${h.day === dayKey() ? 'today' : ''}`}>
            <span className="small muted">{parseDay(h.day).toLocaleDateString('en-GB', { weekday: 'short' })}{h.weekend ? ' ×2' : ''}</span>
            <b>+{h.earned}</b>
            <span className="small muted">{h.studied}m</span>
          </div>
        ))}
      </div>

      {screenLogState === 'missing' ? (
        <p className="form-message">To record time used, run the latest <code>supabase/schema.sql</code> in Supabase’s SQL Editor once.</p>
      ) : !cloudEmail ? (
        <p className="muted small">Connect cloud sync to record time used.</p>
      ) : (
        <div className="spend">
          <p className="small"><b>Record time used</b></p>
          <div className="spend-row">
            {QUICK_SPENDS.map((m) => (
              <button key={m} className="btn ghost small-btn" disabled={busy} onClick={() => void record(-m)}>−{m} min</button>
            ))}
          </div>
          <div className="spend-row">
            <input className="spend-input" inputMode="numeric" placeholder="Minutes" value={custom} onChange={(e) => setCustom(e.target.value.replace(/\D/g, ''))} aria-label="Minutes" />
            <input className="spend-input grow" placeholder="Note (optional)" value={note} maxLength={60} onChange={(e) => setNote(e.target.value)} aria-label="Note" />
          </div>
          <div className="spend-row">
            <button className="btn danger small-btn" disabled={busy || !customMins} onClick={() => void record(-customMins)}>Used</button>
            <button className="btn success small-btn" disabled={busy || !customMins} onClick={() => void record(customMins)}>Add as bonus</button>
          </div>
          {message && <p className="small">{message}</p>}
        </div>
      )}

      {screenLog.length > 0 && (
        <ul className="screen-log">
          {screenLog.slice(0, 15).map((e) => (
            <li key={e.id}>
              <span className={e.minutes < 0 ? 'bad-text' : 'good-text'}>{e.minutes < 0 ? '' : '+'}{formatMinutes(e.minutes)}</span>
              <span className="small muted grow">
                {new Date(e.created_at).toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                {e.note ? ` · ${e.note}` : ''}
              </span>
              <button className="btn link small" onClick={() => void removeScreenTime(e.id)}>Undo</button>
            </li>
          ))}
        </ul>
      )}
      <details className="small">
        <summary>The rules</summary>
        <RulesText />
      </details>
    </section>
  );
}
