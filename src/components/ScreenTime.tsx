import { useState } from 'react';
import { Emoji } from './Emoji';
import { dayKey, parseDay } from '../game/dates';
import { SCREEN_RULES, earnedHistory, earnedToday, isWeekend, nextBoostHint, studyMinutes } from '../game/screenTime';
import type { Progress } from '../game/types';

export function formatMinutes(mins: number): string {
  const m = Math.round(mins);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  return `${h}h${rest ? ` ${rest}m` : ''}`;
}

/** Compact "earned today" shown in the top bar. */
export function ScreenPill({ progress, onClick }: { progress: Progress; onClick?: () => void }) {
  const earned = earnedToday(progress);
  return (
    <button className="hud-item bank" onClick={onClick} aria-label={`${earned} minutes of screen time earned today`}>
      <Emoji e="🎮" size={24} className="hud-icon" />{formatMinutes(earned)}
    </button>
  );
}

function RulesText() {
  const { baseMinutes, boostRate, weekendMultiplier, unitTestBonusPerLesson, unitTestBonusMax } = SCREEN_RULES;
  return (
    <ul className="rules small">
      <li>First {baseMinutes} min of study each day = {baseMinutes} min screen time</li>
      <li>Every minute after that = {boostRate} min</li>
      <li>Weekends: everything ×{weekendMultiplier} 🎉</li>
      <li>Finish every lesson in a unit, then pass its test (80%+): +{unitTestBonusPerLesson} min per lesson, up to {unitTestBonusMax} min 🏆</li>
      <li>Only active time counts: no leaving lessons open!</li>
    </ul>
  );
}

/** Her screen time earned today, on the Learn screen. */
export function ScreenCard({ progress }: { progress: Progress }) {
  const [showRules, setShowRules] = useState(false);
  const today = dayKey();
  return (
    <section className="card bank-card">
      <div className="bank-head">
        <Emoji e="🎮" size={52} className="bank-icon" />
        <div>
          <p className="bank-label">Screen time earned today</p>
          <p className="bank-value">{formatMinutes(earnedToday(progress, today))}</p>
        </div>
        {isWeekend(today) && <span className="weekend-badge">Weekend ×2</span>}
      </div>
      <p className="small">You’ve studied <b>{Math.floor(studyMinutes(progress, today))} min</b> today</p>
      <p className="bank-hint small">⚡ {nextBoostHint(progress, today)}</p>
      <button className="btn link small" onClick={() => setShowRules(!showRules)}>{showRules ? 'Hide the rules' : 'How do I earn it?'}</button>
      {showRules && <RulesText />}
    </section>
  );
}

/** Parent's screen-time panel: what she's earned today and this week. */
export function ScreenTimePanel({ progress }: { progress: Progress }) {
  const today = dayKey();
  const history = earnedHistory(progress, 7, today);
  return (
    <section className="panel screen-panel">
      <h2>🎮 Screen time earned</h2>
      <div className="screen-balance">
        <span className="kpi-label">Today{isWeekend(today) ? ' (weekend ×2)' : ''}</span>
        <span className="screen-balance-value">{formatMinutes(earnedToday(progress, today))}</span>
        <span className="small muted">from {Math.round(studyMinutes(progress, today))} min of study</span>
      </div>
      <p className="small muted">Earned each day (study minutes underneath)</p>
      <div className="earned-week">
        {history.map((h) => (
          <div key={h.day} className={`earned-day ${h.day === today ? 'today' : ''}`}>
            <span className="small muted">{parseDay(h.day).toLocaleDateString('en-GB', { weekday: 'short' })}{h.weekend ? ' ×2' : ''}</span>
            <b>{h.earned}</b>
            <span className="small muted">{h.studied}m</span>
          </div>
        ))}
      </div>
      <details className="small">
        <summary>The rules</summary>
        <RulesText />
      </details>
    </section>
  );
}
