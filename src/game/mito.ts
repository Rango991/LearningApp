import { findSubject, findUnit } from '../content';
import { dayKey } from './dates';
import { reviewAvailable, streakAtRisk } from './engine';
import type { About, Pick, Progress, RewardSummary, SessionKind } from './types';

// Everything Mito says. Lines use what she has told Mito about herself (see About),
// and fall back to friendly general lines for anything she skipped.

// ------------------------------------------------------------ choices

export const ANIMALS: Pick[] = [
  { e: '🐶', label: 'dog' }, { e: '🐱', label: 'cat' }, { e: '🐼', label: 'panda' }, { e: '🦊', label: 'fox' },
  { e: '🐴', label: 'horse' }, { e: '🐬', label: 'dolphin' }, { e: '🦉', label: 'owl' }, { e: '🐢', label: 'turtle' },
];

export const FOODS: Pick[] = [
  { e: '🍕', label: 'pizza' }, { e: '🍝', label: 'pasta' }, { e: '🍣', label: 'sushi' }, { e: '🍔', label: 'burgers' },
  { e: '🌮', label: 'tacos' }, { e: '🍫', label: 'chocolate' }, { e: '🍓', label: 'strawberries' }, { e: '🍜', label: 'noodles' },
];

export const HOBBIES: Pick[] = [
  { e: '⚽', label: 'football' }, { e: '🎨', label: 'drawing' }, { e: '🎮', label: 'gaming' }, { e: '📚', label: 'reading' },
  { e: '🎵', label: 'music' }, { e: '💃', label: 'dancing' }, { e: '🏊', label: 'swimming' }, { e: '🎬', label: 'films and TV' },
];

/** Accent colours for the app. `main` replaces the app's purple. */
export const ACCENTS = [
  { id: 'purple', name: 'purple', main: '#7c4dff', dark: '#5b2bd6', soft: '#efe9ff' },
  { id: 'blue', name: 'blue', main: '#1c8ef6', dark: '#0f6fc4', soft: '#e3f1ff' },
  { id: 'teal', name: 'teal', main: '#14a89a', dark: '#0d8075', soft: '#ddf6f3' },
  { id: 'green', name: 'green', main: '#22a06b', dark: '#177a50', soft: '#ddf4e9' },
  { id: 'pink', name: 'pink', main: '#f0478f', dark: '#c92c6f', soft: '#ffe6f1' },
  { id: 'red', name: 'red', main: '#e5484d', dark: '#bb3035', soft: '#ffe4e4' },
  { id: 'orange', name: 'orange', main: '#f27a24', dark: '#c75c12', soft: '#ffeddf' },
  { id: 'gold', name: 'gold', main: '#d39b00', dark: '#a87b00', soft: '#fff4cf' },
];

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const BIRTHDAY_GEMS = 50;

// ------------------------------------------------------------ helpers

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Picks a line that stays the same for a while (so it doesn't flicker on every render). */
function pick<T>(items: T[], seed: string): T {
  return items[hash(seed) % items.length];
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const article = (s: string) => (/^[aeiou]/i.test(s) ? `an ${s}` : `a ${s}`);

export function accentFor(about?: About) {
  return ACCENTS.find((a) => a.id === about?.colour) ?? ACCENTS[0];
}

export function subjectName(id?: string): string | null {
  if (!id || id === 'none') return null;
  return findSubject(id).id === id ? findSubject(id).title : null;
}

export function formatBirthday(mmdd?: string): string | null {
  if (!mmdd) return null;
  const [m, d] = mmdd.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]}`;
}

export function isBirthday(about: About | undefined, today = dayKey()): boolean {
  return Boolean(about?.birthday && today.slice(5) === about.birthday);
}

/** On her birthday Mito wears a party hat, whatever she has equipped. */
export function mitoAccessory(p: Progress, today = dayKey()): string | null {
  return isBirthday(p.profile.about, today) ? 'party-hat' : p.equipped;
}

/** Gives her birthday gems once a year. Returns null if there is nothing to give. */
export function birthdayGift(p: Progress, today = dayKey()): Progress | null {
  const about = p.profile.about;
  const year = today.slice(0, 4);
  if (!about || !isBirthday(about, today) || about.birthdayGifts?.includes(year)) return null;
  return {
    ...p,
    gems: p.gems + BIRTHDAY_GEMS,
    updatedAt: new Date().toISOString(),
    profile: { ...p.profile, about: { ...about, birthdayGifts: [...(about.birthdayGifts ?? []), year] } },
  };
}

export const FUN_FACTS = [
  'Your brain uses about 20% of your body’s energy, even though it’s only about 2% of your weight.',
  'Octopuses have three hearts.',
  'A day on Venus is longer than its year.',
  'Bananas are very slightly radioactive, because they contain potassium.',
  'Your body has about 37 trillion cells, and loads of them are full of mitochondria like me!',
  'Light from the Sun takes about 8 minutes to reach Earth.',
  'Sharks have been around for longer than trees.',
  'Ice floats because water expands when it freezes.',
  'The Eiffel Tower is about 15 cm taller in summer, because metal expands when it’s hot.',
  'Butterflies taste with their feet.',
  'A group of flamingos is called a flamboyance.',
  'Wombat poo is cube-shaped.',
  'Sleep helps your brain store what you’ve learned that day.',
  'There are more possible games of chess than atoms in the observable universe.',
];

// ------------------------------------------------------------ home screen

/** What Mito says on the Learn screen. */
export function greeting(p: Progress, now = new Date()): string {
  const name = p.profile.name;
  const a = p.profile.about ?? {};
  const today = dayKey(now);
  const hour = now.getHours();
  const seed = `${today}:${Math.floor(hour / 3)}`;

  if (isBirthday(a, today)) return `Happy birthday, ${name}! 🎂 I’m wearing my party hat just for you. Have the best day!`;
  if (p.totals.lessons === 0) return `Hi ${name}! I’m Mito, the powerhouse of the cell. Pick a subject and tap a lesson to start!`;
  if (hour >= 21 || hour < 5) return `It’s getting late, ${name}. Bedtime soon? Your brain stores memories while you sleep 😴`;
  if (streakAtRisk(p)) {
    return a.animal
      ? `Your ${p.streak.current}-day streak is waiting, ${name}! Quick as ${article(a.animal.label)} ${a.animal.e}, one lesson keeps it alive 🔥`
      : `Your ${p.streak.current}-day streak is waiting, ${name}! One lesson keeps it alive 🔥`;
  }
  const last = p.sessions[p.sessions.length - 1];
  if (last && (now.getTime() - new Date(last.at).getTime()) / 86400000 >= 3) return `I missed you, ${name}! Let’s get that brain warmed up again 🧠`;
  if ((p.daily[today]?.xp ?? 0) >= p.dailyGoal) return `Goal smashed today, ${name}! Anything extra is a bonus ⭐`;
  if (reviewAvailable(p) >= 3) return `You’ve got ${reviewAvailable(p)} questions ready in Practice, ${name}. Fixing mistakes is how brains grow 🧠`;

  const hard = subjectName(a.hardest);
  const timeHello = hour < 12 ? `Morning, ${name}!` : hour < 18 ? `Hey ${name}!` : `Evening, ${name}!`;
  const lines = [
    `${timeHello} Ready to learn something new?`,
    `${timeHello} Fancy a quick lesson?`,
    `Fun fact: ${pick(FUN_FACTS, `${seed}:fact`)}`,
    ...(a.animal ? [`${timeHello} You’re as clever as ${article(a.animal.label)} ${a.animal.e}. Cleverer, actually. Let’s prove it!`] : []),
    ...(a.food ? [`Brain food time, ${name}! Not quite as tasty as ${a.food.label} ${a.food.e}, but nearly.`] : []),
    ...(a.hobby ? [`Learning is like ${a.hobby.label} ${a.hobby.e}, ${name}: the more you practise, the better you get!`] : []),
    ...(a.goal ? [`Every lesson gets you closer to your goal: “${a.goal}” 🎯`] : []),
    ...(hard ? [`How about a little ${hard} today, ${name}? Every lesson makes it easier 💪`] : []),
  ];
  return pick(lines, seed);
}

// ------------------------------------------------------------ lessons

const PRAISE = ['Nice one!', 'Brilliant!', 'Spot on!', 'Nailed it!', 'Correct!', 'Great job!', 'Yes!', 'Amazing!'];

/** Praise for a right answer. Sometimes personal. `roll` is a random number from 0 to 1. */
export function praise(p: Pick | undefined, name: string | undefined, roll = Math.random()): string {
  const personal = [
    ...(name ? [`Nailed it, ${name}!`, `${name} for the win!`, `Go on, ${name}!`] : []),
    ...(p ? [`${cap(p.label)}-level genius! ${p.e}`] : []),
  ];
  if (personal.length && roll < 0.3) return personal[Math.floor((roll / 0.3) * personal.length)];
  return PRAISE[Math.floor(roll * PRAISE.length)];
}

/** A kind word after a wrong answer, shown now and then. */
export function encourage(name: string | undefined, roll = Math.random()): string | null {
  if (roll > 0.35) return null;
  const lines = [
    `Mistakes help your brain grow${name ? `, ${name}` : ''}. You’ll see it again soon.`,
    'Good try! You’ll get it next time 💪',
    'Tricky one! It’ll come back later so you can nail it.',
  ];
  return lines[Math.floor((roll / 0.35) * lines.length)];
}

/** Mito’s words of encouragement before a unit test. */
export function testPep(p: Progress): string {
  const a = p.profile.about ?? {};
  return a.goal
    ? `You’ve got this, ${p.profile.name}! One step closer to “${a.goal}”.`
    : `You’ve got this, ${p.profile.name}! Take your time and read each question carefully.`;
}

/** What Mito says on the results screen. */
export function resultLine(p: Progress, summary: RewardSummary, kind: SessionKind, unitId?: string, now = new Date()): string {
  const name = p.profile.name;
  const a = p.profile.about ?? {};
  const seed = `${now.toISOString().slice(0, 16)}:${summary.xpGained}`;
  if (kind === 'checkpoint') {
    if (!summary.passedCheckpoint) return `Don’t worry, ${name}. Practise a little and you’ll smash it next time 💪`;
    return a.goal ? `Unit conquered! One step closer to “${a.goal}” 🏆` : `Unit conquered, ${name}! 🏆`;
  }
  if (summary.perfect) {
    return a.animal ? `Flawless! Even ${article(a.animal.label)} couldn’t do better ${a.animal.e}` : `Flawless, ${name}! Not a single slip.`;
  }
  const hardId = a.hardest && a.hardest !== 'none' ? a.hardest : null;
  if (hardId && unitId && findUnit(unitId)?.subject.id === hardId) {
    return `${findSubject(hardId).title} is getting easier, ${name}. Look at you go! 💪`;
  }
  return pick(
    [
      `Great work, ${name}! Your brain just got a little bit stronger 🧠`,
      `That’s another one done, ${name}. I’m proud of you!`,
      ...(a.food ? [`You’ve earned a ${a.food.label} break ${a.food.e}. Well, nearly!`] : []),
      ...(a.goal ? [`Closer to “${a.goal}” with every lesson 🎯`] : []),
      ...(a.hobby ? [`Practice makes progress, just like ${a.hobby.label} ${a.hobby.e}`] : []),
    ],
    seed,
  );
}

// ------------------------------------------------------------ the "all about me" chat

/** Mito’s reaction to each answer. */
export const react = {
  animal: (x: Pick) => `${cap(x.label)}? Great choice! ${x.e}`,
  colour: (name: string) => `Ooh, ${name}! I’ve painted the app for you ✨`,
  food: (x: Pick) => `Mmm, ${x.label} ${x.e}. Now I’m hungry, and I don’t even have a stomach.`,
  hobby: (x: Pick) => `${cap(x.label)} ${x.e}? That’s so cool!`,
  birthday: (mmdd: string) => `${formatBirthday(mmdd)}! I’ve saved the date. Expect a surprise 🎁`,
  hardest: (subject: string | null) => (subject ? `Got it. We’ll make ${subject} feel easy, one lesson at a time 💪` : 'No tricky subjects? Impressive 😎'),
  goal: (goal: string) => `“${goal}”. I love that. I’ll help you get there!`,
};
