import { describe, expect, it } from 'vitest';
import { subjects } from '../src/content';
import { markGap } from '../src/game/answers';
import {
  applyFamilyRewards, applySession, buildReview, buyItem, claimReward, createProgress, ensureQuests, mistakeKeys, reconcileStreak,
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
  const all = subjects.flatMap((s) => s.units.flatMap((u) => u.lessons.map((l) => ({ s, u, l }))));

  it('has unique unit and lesson ids', () => {
    const units = subjects.flatMap((s) => s.units.map((u) => u.id));
    expect(new Set(units).size).toBe(units.length);
    const lessons = all.map(({ l }) => l.id);
    expect(new Set(lessons).size).toBe(lessons.length);
  });

  it('has well-formed lessons and questions', () => {
    for (const { l } of all) {
      expect(l.learn.length, l.id).toBeGreaterThan(0);
      expect(l.questions.length, l.id).toBeGreaterThanOrEqual(6);
      const ids = l.questions.map((q) => q.id);
      expect(new Set(ids).size, l.id).toBe(ids.length);
      for (const q of l.questions) {
        const where = `${l.id}/${q.id}`;
        if (q.type === 'mcq') {
          expect(q.answer, where).toBeLessThan(q.options.length);
          expect(new Set(q.options).size, where).toBe(q.options.length);
        }
        if (q.type === 'match') {
          expect(new Set(q.pairs.map((x) => x[0])).size, where).toBe(q.pairs.length);
          expect(new Set(q.pairs.map((x) => x[1])).size, where).toBe(q.pairs.length);
        }
        if (q.type === 'order') expect(new Set(q.items).size, where).toBe(q.items.length);
        if (q.type === 'gap') {
          expect(q.prompt, where).toContain('___');
          // The first accepted answer must mark as correct.
          expect(markGap(q.accept[0], q.accept), where).toBe('correct');
        }
      }
    }
  });

  it('covers every subject', () => {
    expect(subjects.map((s) => s.id)).toEqual(['biology', 'chemistry', 'physics', 'maths', 'english', 'history', 'geography']);
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

describe('number answers', () => {
  it('compares numbers by value', () => {
    expect(markGap('.75', ['0.75'])).toBe('correct');
    expect(markGap('3/4', ['0.75'])).toBe('correct');
    expect(markGap('-3', ['-3'])).toBe('correct');
    expect(markGap('3', ['-3'])).toBe('wrong');
    expect(markGap('1,200', ['1200'])).toBe('correct');
    expect(markGap('£12.50', ['12.5'])).toBe('correct');
    expect(markGap('1 1/2', ['1.5'])).toBe('correct');
    expect(markGap('40%', ['40'])).toBe('correct');
    expect(markGap('400', ['40'])).toBe('wrong');
    expect(markGap('forty', ['40'])).toBe('wrong');
  });
  it('still marks word answers as words', () => {
    expect(markGap('seven', ['7', 'seven'])).toBe('correct');
  });
});

describe('fractions', () => {
  it('reads improper and mixed fractions correctly', () => {
    expect(markGap('12/4', ['3'])).toBe('correct');
    expect(markGap('2 1/4', ['2.25'])).toBe('correct');
    expect(markGap('-1/2', ['-0.5'])).toBe('correct');
    expect(markGap('365 1/4', ['365.25'])).toBe('correct');
  });
});

describe('signed numbers', () => {
  it('accepts a leading plus and a typographic minus', () => {
    expect(markGap('+200', ['200'])).toBe('correct');
    expect(markGap('−400', ['-400'])).toBe('correct');
    expect(markGap('400', ['-400'])).toBe('wrong');
  });
});

describe('skins and real rewards', () => {
  const rich = (): Progress => ({ ...createProgress('Test'), gems: 2000 });

  it('buys a skin and puts it on Mito', () => {
    const r = buyItem(rich(), 'skin-gold');
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.progress.skin).toBe('skin-gold');
      expect(r.progress.gems).toBe(500);
      expect(r.progress.equipped).toBeNull();
    }
  });

  it('claims a parent reward and takes the gems', () => {
    const p = { ...rich(), rewards: { items: [{ id: 'film', title: 'Pick the film', emoji: '🎬', price: 400 }], updatedAt: '2026-10-01T00:00:00Z' } };
    const r = claimReward(p, 'film', new Date('2026-10-02T10:00:00Z'));
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.progress.gems).toBe(1600);
      expect(r.progress.claims).toHaveLength(1);
      expect(r.progress.claims![0].givenAt).toBeUndefined();
    }
    expect(claimReward({ ...p, gems: 10 }, 'film').ok).toBe(false);
    expect(claimReward(p, 'missing').ok).toBe(false);
  });

  it('takes the parent’s newer reward list and given marks, but not an older list', () => {
    const base = { ...rich(), rewards: { items: [], updatedAt: '2026-10-05T00:00:00Z' } };
    const claimed = claimReward({ ...base, rewards: { items: [{ id: 'x', title: 'X', emoji: '🎬', price: 10 }], updatedAt: base.rewards.updatedAt } }, 'x');
    if (!claimed.ok) throw new Error('claim failed');
    const id = claimed.progress.claims![0].id;
    const older = applyFamilyRewards(claimed.progress, { rewards: { items: [], updatedAt: '2026-10-01T00:00:00Z' }, given: [id] });
    expect(older.rewards!.items).toHaveLength(1);
    expect(older.claims![0].givenAt).toBeDefined();
    const newer = applyFamilyRewards(claimed.progress, { rewards: { items: [], updatedAt: '2026-10-09T00:00:00Z' }, given: [] });
    expect(newer.rewards!.items).toHaveLength(0);
    const same = applyFamilyRewards(claimed.progress, { rewards: claimed.progress.rewards, given: [] });
    expect(same).toBe(claimed.progress);
  });
});

describe('tested-out units', () => {
  it('gives bonus gems the first time she does a lesson in a unit she tested out of', () => {
    const unit = subjects[0].units[0];
    const l = unit.lessons[1];
    const p = { ...createProgress('Test'), checkpoints: { [unit.id]: 0.9 } };
    const run = (prog: Progress) => applySession(prog, {
      kind: 'lesson', lessonId: l.id, maxCombo: 1, seconds: 60,
      answers: [{ key: `${l.id}/${l.questions[0].id}`, correct: false, given: 'x' }],
    }, at('2026-10-03'));
    const first = run(p);
    const plain = run(createProgress('Test'));
    expect(first.summary.gemsGained - plain.summary.gemsGained).toBe(10);
    expect(run(first.progress).summary.gemsGained).toBeLessThan(first.summary.gemsGained);
  });
});
