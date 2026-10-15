import { accentFor, formatBirthday, subjectName } from '../game/mito';
import type { About } from '../game/types';
import { Emoji } from './Emoji';

/** The things she has told Mito, as a simple list. Used on the Me tab and the parent dashboard. */
export function AboutList({ about }: { about?: About }) {
  if (!about?.doneAt) return null;
  const accent = accentFor(about);
  const rows: [string, string, string | null][] = [
    [about.animal?.e ?? '🐾', 'Favourite animal', about.animal?.label ?? null],
    ['🎨', 'Favourite colour', about.colour ? accent.name : null],
    [about.food?.e ?? '🍽️', 'Favourite food', about.food?.label ?? null],
    [about.hobby?.e ?? '⭐', 'Loves', about.hobby?.label ?? null],
    ['🎂', 'Birthday', formatBirthday(about.birthday)],
    ['🧩', 'Trickiest subject', about.hardest === 'none' ? 'none!' : subjectName(about.hardest)],
    ['🎯', 'Goal', about.goal ?? null],
  ];
  return (
    <ul className="about-list">
      {rows.filter(([, , v]) => v).map(([e, label, value]) => (
        <li key={label}>
          <Emoji e={e} size={28} />
          <span className="muted small">{label}</span>
          <b>{label === 'Favourite colour' ? <><i className="dot" style={{ background: accent.main }} /> {value}</> : value}</b>
        </li>
      ))}
    </ul>
  );
}
