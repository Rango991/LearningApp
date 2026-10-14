import { addDays, dayKey, parseDay } from '../game/dates';
import type { Progress } from '../game/types';

const LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

/** This week, Monday to Sunday, with a flame on each day she studied. */
export function StreakWeek({ progress }: { progress: Progress }) {
  const today = dayKey();
  const offset = (parseDay(today).getDay() + 6) % 7; // Monday = 0
  const monday = addDays(today, -offset);
  return (
    <div className="streak-week">
      {LETTERS.map((letter, i) => {
        const day = addDays(monday, i);
        const done = (progress.daily[day]?.lessons ?? 0) > 0;
        const frozen = progress.streak.frozenDays.includes(day);
        const state = done ? 'done' : frozen ? 'frozen' : day === today ? 'today' : day > today ? 'future' : 'missed';
        return (
          <div key={day} className={`streak-day ${state}`}>
            <span className="streak-dot">{done ? '🔥' : frozen ? '🧊' : ''}</span>
            <span className="streak-letter">{letter}</span>
          </div>
        );
      })}
    </div>
  );
}
