# BrainBoost

A Duolingo-style revision app for KS3 (and later GCSE) science and maths. It's
built as an installable web app (PWA): it goes on an Android tablet like a
normal app, works offline, and has a parent dashboard that works on any phone.

**Right now:** Year 7 Biology, with 3 units, 13 lessons and about 100 questions.

## What's in it

**For the learner**
- A lesson path with units, lessons that unlock in order, stars and a unit test (trophy) for each unit
- Each lesson has short "learn" cards, then a quiz: multiple choice, true/false, fill-the-gap (forgives small typos), match the pairs, and put-in-order
- Wrong answers come back at the end of the lesson, so she always leaves having got them right
- XP, levels, a daily XP goal, daily streak, streak freezes, 3 daily quests plus a bonus chest, 20+ badges and gems
- A gem shop with streak freezes and outfits for Mito, the mitochondrion mascot
- Practice tab: spaced repetition (Leitner boxes). Mistakes come back until fixed, and older questions resurface after 1, 3, 7, 14 and 30 days
- Sounds, haptics, confetti, combos ("5 in a row! 🔥")

**For the parent**
- Streak, active days, time studied and accuracy over the last 7 days
- Minutes studied per day for the last 14 days
- Topic mastery for every lesson (Strong / Getting there / Needs work)
- "Needs attention": the questions she gets wrong most, with her answer next to the right one
- A log of every recent mistake, and a log of recent sessions

## Design notes (the "psychology" bit)

- **Small wins, often:** lessons take about 3 minutes, and every one ends in a sequence of reward screens.
- **Streaks with a safety net:** loss aversion keeps the habit going, but streak freezes and a kind "no worries" message stop one missed day from feeling like failure. Streak anxiety is a known downside of streak apps.
- **No lives or hearts:** Duolingo's hearts system punishes mistakes. Here, mistakes come back as practice, which earns XP, so getting things wrong is part of learning rather than something to fear.
- **Variety:** daily quests change every day, and the question types are mixed.
- **Competence you can see:** stars, badges with progress bars, mastery levels and a level bar.
- **No leaderboards against strangers:** competition helps some learners and stresses others. The parent dashboard is the "social" bit.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # game-logic tests
npm run build      # production build in dist/
```

See **[docs/SETUP.md](docs/SETUP.md)** to put it online, install it on the
tablet, and turn on the parent dashboard for your phone.

## Adding content

Content lives in `src/content/`. Each subject is a typed TypeScript file, so
the editor catches mistakes. To add a subject, copy `biology-y7.ts`, then add
it to the `subjects` list in `src/content/index.ts`. Never change an existing
question `id`: her progress is stored against it.

## Project layout

```
src/content/    lessons and questions
src/game/       XP, streaks, quests, badges, spaced repetition (pure functions, tested)
src/screens/    Learn path, Session (lesson), Results, Practice, Badges, Shop, Me, Parent dashboard
src/components/ Mascot, question types, confetti, HUD
src/sync/       saving on the device and optional Supabase cloud sync
supabase/       database schema for cloud sync
```
