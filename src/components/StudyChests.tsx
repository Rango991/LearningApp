import { Emoji } from './Emoji';
import { formatMinutes } from './ScreenTime';
import { dayKey } from '../game/dates';
import { studyMinutes } from '../game/screenTime';
import { STUDY_CHESTS, WEEKLY_GOAL, nextChest, weeklyStatus } from '../game/studyChests';
import type { Progress } from '../game/types';

const LAST = STUDY_CHESTS[STUDY_CHESTS.length - 1].minutes;

/** Today's study chests and the beat-last-week goal, on the Learn screen. */
export function StudyChestsCard({ progress }: { progress: Progress }) {
  const today = dayKey();
  const mins = studyMinutes(progress, today);
  const coming = nextChest(mins);
  const opened = STUDY_CHESTS.filter((c) => mins >= c.minutes).reduce((s, c) => s + c.gems, 0);
  const week = weeklyStatus(progress, today);
  return (
    <section className="card chests-card">
      <h3>Study chests</h3>
      <p className="small">
        {coming
          ? <><b className="chests-next">{Math.ceil(coming.minutes - mins)} more min</b> opens a <b>{coming.gems}-gem</b> chest!</>
          : <>All {STUDY_CHESTS.length} chests opened today. Amazing!</>}
      </p>
      <div className="chests-track"><div className="chests-fill" style={{ width: `${Math.min(100, (mins / LAST) * 100)}%` }} /></div>
      <ul className="chests-row">
        {STUDY_CHESTS.map((c) => {
          const open = mins >= c.minutes;
          return (
            <li key={c.minutes} className={open ? 'open' : ''}>
              <Emoji e={open ? '✅' : '🎁'} size={30} />
              <b>{c.gems} 💎</b>
              <span>{c.minutes} min</span>
            </li>
          );
        })}
      </ul>
      <p className="small muted">From chests today: <b>{opened} 💎</b>. Chests open when you finish a lesson.</p>

      <h3 className="chests-week-title">Beat last week</h3>
      <p className="small">
        {week.won
          ? <>You beat last week! <b>+{WEEKLY_GOAL.gems} 💎</b> won. 🏆</>
          : <>Study <b>{formatMinutes(week.target)}</b> this week to win <b>{WEEKLY_GOAL.gems} 💎</b>. Last week: {formatMinutes(week.lastWeek)}.</>}
      </p>
      <div className="chests-track"><div className="chests-fill week" style={{ width: `${Math.min(100, (week.thisWeek / week.target) * 100)}%` }} /></div>
      <p className="small muted">
        {formatMinutes(Math.floor(week.thisWeek))} so far{week.won ? '' : ` · ${formatMinutes(Math.ceil(week.target - week.thisWeek))} to go`}
      </p>
    </section>
  );
}
