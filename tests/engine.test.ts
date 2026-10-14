import { describe, expect, it } from 'vitest';
import { subjects } from '../src/content';
import { markGap } from '../src/game/answers';
import {
  applySession, buildReview, buyItem, createProgress, ensureQuests, mistakeKeys, reconcileStreak,
} from '../src/game/engine';
import { levelFor } from '../src/game/levels';
import type { AnswerRecord, Progress } from '../src/game/types';

const at = (day: string, hour = 17) => new Date(`${day}T${String(hour).padStart(2, '0')}:00:00`);
const lesson = subjects[0].units[0].lessons[0];
const answers = (correct: boolean[]): AnswerRecord[] =>
  correct.map((c, i) => ({ key: `${lesson.id}/${lesson.questions[i].id}`, correct: c, given: c ? 'right' : 'oops' }));

function play(p: Progress, day: string, correct: boolean[] = [true, true, true]) {
  return applySession(p, { kind: 'lesson', lessonId: lesson.id, answers: answers(correct), maxCombo: 3, seconds: 60 }, at(day));
}

describe('content', () => {
  it('has valid questions', () => {
    for (const u of subjects[0].units) for (const l of u.lessons) {
      expect(l.questions.length).toBeGreaterThanOrEqual(6);
      for (const q of l.questions) {
        if (q.type === 'mcq') expect(q.answer).toBeLessThan(q.options.length);
        if (q.type === 'match') expect(new Set(q.pairs.map((x) => x[1])).size).toBe(q.pairs.length);
      }
    }
  });
});

describe('typed answers', () => {
  it('accepts exact, case-insensitive answers', () => {
    expect(markGap(' Cellulose ', ['cellulose'])).toBe('correct');
  });
  it('treats a small typo as close', () => {
    expect(markGap('celulose', ['cellulose'])).toBe('close');
    expect(markGap('chlorophyl', ['chlorophyll'])).toBe('close');
  });
  it('rejects wrong words and wrong numbers', () => {
    expect(markGap('nucleus', ['cellulose'])).toBe('wrong');
    expect(markGap('40', ['400'])).toBe('wrong');
    expect(markGap('', ['seed'])).toBe('wrong');
  });
});

describe('levels', () => {
  it('starts at level 1 and levels up at 50 XP', () => {
    expect(levelFor(0).level).toBe(1);
    expect(levelFor(49).level).toBe(1);
    expect(levelFor(50).level).toBe(2);
    expect(levelFor(150).level).toBe(3);
  });
});

describe('sessions and streaks', () => {
  it('awards XP, starts a streak and unlocks first achievement', () => {
    const { progress, summary } = play(createProgress('Test'), '2026-10-01');
    expect(summary.xpGained).toBe(5 + 3 * 2 + 5); // complete + correct + perfect
    expect(summary.streak).toBe(1);
    expect(summary.newAchievements).toContain('first-lesson');
    expect(progress.lessons[lesson.id].completions).toBe(1);
  });

  it('extends the streak on consecutive days but only once per day', () => {
    let p = play(createProgress('Test'), '2026-10-01').progress;
    p = play(p, '2026-10-02').progress;
    const r = play(p, '2026-10-02');
    expect(r.summary.streakExtended).toBe(false);
    expect(r.progress.streak.current).toBe(2);
  });

  it('uses a freeze to cover one missed day', () => {
    let p = play(createProgress('Test'), '2026-10-01').progress;
    p = play(p, '2026-10-02').progress;
    const check = reconcileStreak(p, '2026-10-04');
    expect(check.frozeDays).toBe(1);
    expect(check.progress.streak.freezes).toBe(0);
    const next = play(check.progress, '2026-10-04');
    expect(next.progress.streak.current).toBe(3);
  });

  it('resets the streak when there are not enough freezes', () => {
    let p = play(createProgress('Test'), '2026-10-01').progress;
    const check = reconcileStreak(p, '2026-10-05');
    expect(check.lostStreak).toBe(1);
    p = play(check.progress, '2026-10-05').progress;
    expect(p.streak.current).toBe(1);
    expect(p.streak.longest).toBe(1);
  });
});

describe('mistakes and review', () => {
  it('logs mistakes and counts them as fixed when answered right later', () => {
    let p = play(createProgress('Test'), '2026-10-01', [true, false, true]).progress;
    expect(p.mistakes).toHaveLength(1);
    expect(p.mistakes[0].given).toBe('oops');
    const keys = mistakeKeys(p);
    expect(keys).toEqual([`${lesson.id}/${lesson.questions[1].id}`]);
    expect(buildReview(p, '2026-10-01')[0]).toBe(keys[0]);
    const r = applySession(p, { kind: 'review', answers: [{ key: keys[0], correct: true, given: 'x' }], maxCombo: 1, seconds: 10 }, at('2026-10-01', 18));
    expect(r.progress.totals.fixed).toBe(1);
    expect(mistakeKeys(r.progress)).toEqual([]);
  });
});

describe('quests', () => {
  it('creates three quests a day and completes them', () => {
    let p = ensureQuests(createProgress('Test'), '2026-10-01');
    expect(p.quests.items).toHaveLength(3);
    expect(ensureQuests(p, '2026-10-01')).toBe(p);
    for (let i = 0; i < 3; i++) p = play(p, '2026-10-01').progress;
    const lessonsQuest = p.quests.items.find((q) => q.kind === 'lessons');
    if (lessonsQuest) expect(lessonsQuest.done).toBe(true);
  });
});

describe('shop', () => {
  it('buys accessories and limits freezes', () => {
    const p = { ...createProgress('Test'), gems: 500 };
    const a = buyItem(p, 'party-hat');
    expect(a.ok && a.progress.equipped).toBe('party-hat');
    const f = buyItem(p, 'freeze');
    expect(f.ok).toBe(true);
    const f2 = f.ok ? buyItem(f.progress, 'freeze') : f;
    expect(f2.ok).toBe(false);
  });
});
