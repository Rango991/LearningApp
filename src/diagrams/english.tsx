import { C, Svg, T, Tiles } from './kit';

// KS3 English diagrams.

const CLASS_COLOURS: Record<string, [string, string]> = {
  noun: [C.blueSoft, C.blue],
  verb: [C.redSoft, C.red],
  adjective: [C.greenSoft, C.green],
  adverb: [C.orangeSoft, C.orange],
  pronoun: [C.purpleSoft, C.purple],
  preposition: [C.goldSoft, C.brown],
};

/** A sentence with each word in a chip coloured and labelled by its word class. */
function ChipRow({ y, words }: { y: number; words: [string, string?][] }) {
  const widths = words.map(([w, k]) => (k ? w.length * 6.8 + 12 : w.length * 6.8 + 4));
  const total = widths.reduce((a, b) => a + b, 0) + (words.length - 1) * 5;
  let x = 160 - total / 2;
  return (
    <g>
      {words.map(([w, k], i) => {
        const bx = x;
        x += widths[i] + 5;
        const [fill, ink] = k ? CLASS_COLOURS[k] : ['none', C.muted];
        return (
          <g key={i}>
            {k && <rect x={bx} y={y} width={widths[i]} height={30} rx={8} fill={fill} stroke={ink} strokeWidth={1.5} />}
            <T x={bx + widths[i] / 2} y={y + 15} size={12.5} fill={k ? C.ink : C.muted}>{w}</T>
            {k && <T x={bx + widths[i] / 2} y={y + 42} size={8.5} fill={ink}>{k}</T>}
          </g>
        );
      })}
    </g>
  );
}

function WordClasses() {
  return (
    <Svg h={150} label="Word classes in two sentences. The hungry dog quickly ate the bone: hungry is an adjective, dog and bone are nouns, quickly is an adverb, ate is a verb. She ran under the bridge: she is a pronoun, ran is a verb, under is a preposition, bridge is a noun">
      <ChipRow y={14} words={[['The'], ['hungry', 'adjective'], ['dog', 'noun'], ['quickly', 'adverb'], ['ate', 'verb'], ['the'], ['bone', 'noun']]} />
      <ChipRow y={86} words={[['She', 'pronoun'], ['ran', 'verb'], ['under', 'preposition'], ['the'], ['bridge', 'noun']]} />
    </Svg>
  );
}

function SentenceTypes() {
  const Clause = ({ x, y, w, t, sub }: { x: number; y: number; w: number; t: string; sub?: boolean }) => (
    <g>
      <rect x={x} y={y} width={w} height={30} rx={8} fill={sub ? C.orangeSoft : C.blueSoft} stroke={sub ? C.orange : C.blue} strokeWidth={1.8} strokeDasharray={sub ? '5 3' : undefined} />
      <T x={x + w / 2} y={y + 15} size={11}>{t}</T>
    </g>
  );
  const Conj = ({ x, y, t }: { x: number; y: number; t: string }) => (
    <g>
      <circle cx={x} cy={y + 15} r={14} fill={C.goldSoft} stroke={C.gold} strokeWidth={1.5} />
      <T x={x} y={y + 15} size={10.5}>{t}</T>
    </g>
  );
  return (
    <Svg h={196} label="Sentence types. Simple: one main clause, the rain fell. Compound: two main clauses joined by so. Complex: a subordinate clause, although it rained, plus a main clause, we went out">
      <T x={8} y={30} size={11.5} anchor="start">Simple</T>
      <Clause x={92} y={15} w={120} t="The rain fell." />
      <T x={8} y={80} size={11.5} anchor="start">Compound</T>
      <Clause x={92} y={65} w={96} t="The rain fell," />
      <Conj x={206} y={65} t="so" />
      <Clause x={224} y={65} w={90} t="we stayed in." />
      <T x={8} y={130} size={11.5} anchor="start">Complex</T>
      <Clause x={92} y={115} w={126} t="Although it rained," sub />
      <Clause x={224} y={115} w={90} t="we went out." />
      <rect x={60} y={166} width={16} height={12} rx={3} fill={C.blueSoft} stroke={C.blue} strokeWidth={1.5} />
      <T x={82} y={172} size={9.5} anchor="start" weight={700} fill={C.muted}>main clause</T>
      <rect x={170} y={166} width={16} height={12} rx={3} fill={C.orangeSoft} stroke={C.orange} strokeWidth={1.5} strokeDasharray="4 2" />
      <T x={192} y={172} size={9.5} anchor="start" weight={700} fill={C.muted}>subordinate clause</T>
    </Svg>
  );
}

function Apostrophes() {
  const Row = ({ x, y, a, b }: { x: number; y: number; a: string; b: string }) => (
    <g>
      <T x={x} y={y} size={11} weight={700} fill={C.muted} anchor="start">{a}</T>
      <T x={x + 140} y={y} size={12} anchor="end">{b}</T>
    </g>
  );
  return (
    <Svg h={200} label="Apostrophes for missing letters: do not becomes don’t, it is becomes it’s, I am becomes I’m. Apostrophes for belonging: one dog, the dog’s bone; two dogs, the dogs’ bowls. Its with no apostrophe means belonging to it">
      <rect x={8} y={8} width={148} height={134} rx={12} fill={C.purpleSoft} />
      <rect x={164} y={8} width={148} height={134} rx={12} fill={C.greenSoft} />
      <T x={82} y={26} size={12} fill={C.purple}>Missing letters</T>
      <Row x={12} y={58} a="do not →" b="don’t" />
      <Row x={12} y={86} a="it is →" b="it’s" />
      <Row x={12} y={114} a="I am →" b="I’m" />
      <T x={238} y={26} size={12} fill={C.green}>Belonging</T>
      <T x={238} y={56} size={9.5} weight={700} fill={C.muted}>one dog</T>
      <T x={238} y={74} size={13}>the dog’s bone</T>
      <T x={238} y={102} size={9.5} weight={700} fill={C.muted}>two dogs</T>
      <T x={238} y={120} size={13}>the dogs’ bowls</T>
      <rect x={8} y={150} width={304} height={42} rx={12} fill={C.goldSoft} />
      <T x={160} y={164} size={11.5}>its = belonging to it (no apostrophe)</T>
      <T x={160} y={181} size={10} weight={700} fill={C.muted}>The cat licked its paw. It’s (it is) sunny.</T>
    </Svg>
  );
}

function Homophones() {
  return (
    <Tiles
      label="Homophones: their means belonging to them, there means a place, they’re means they are"
      items={[
        { e: '🎒', title: 'their', sub: 'belonging to them', colour: C.purpleSoft },
        { e: '📍', title: 'there', sub: 'a place', colour: C.blueSoft },
        { e: '👫', title: 'they’re', sub: 'they are', colour: C.greenSoft },
      ]}
      h={150}
    />
  );
}

function WordBuilding() {
  const Part = ({ x, y, w, t, kind, fill, ink }: { x: number; y: number; w: number; t: string; kind: string; fill: string; ink: string }) => (
    <g>
      <rect x={x} y={y} width={w} height={36} rx={10} fill={fill} stroke={ink} strokeWidth={1.8} />
      <T x={x + w / 2} y={y + 18} size={15}>{t}</T>
      <T x={x + w / 2} y={y + 48} size={9} fill={ink}>{kind}</T>
    </g>
  );
  return (
    <Svg h={190} label="Building words: the prefix un plus the root help plus the suffix ful makes unhelpful. The root kind plus the suffix ness makes kindness">
      <Part x={8} y={14} w={50} t="un" kind="prefix" fill={C.purpleSoft} ink={C.purple} />
      <T x={68} y={32} size={18} fill={C.muted}>+</T>
      <Part x={78} y={14} w={64} t="help" kind="root" fill={C.goldSoft} ink={C.brown} />
      <T x={152} y={32} size={18} fill={C.muted}>+</T>
      <Part x={162} y={14} w={50} t="ful" kind="suffix" fill={C.greenSoft} ink={C.green} />
      <T x={222} y={32} size={18} fill={C.muted}>=</T>
      <T x={270} y={32} size={15}>unhelpful</T>
      <Part x={78} y={104} w={64} t="kind" kind="root (adjective)" fill={C.goldSoft} ink={C.brown} />
      <T x={152} y={122} size={18} fill={C.muted}>+</T>
      <Part x={162} y={104} w={50} t="ness" kind="suffix" fill={C.greenSoft} ink={C.green} />
      <T x={222} y={122} size={18} fill={C.muted}>=</T>
      <T x={270} y={122} size={15}>kindness</T>
      <T x={270} y={144} size={9} fill={C.muted}>(noun)</T>
    </Svg>
  );
}

function WordLadder() {
  const words = ['tiny', 'small', 'big', 'huge', 'enormous'];
  return (
    <Svg h={200} label="Shades of meaning: tiny, small, big, huge, enormous, getting bigger each step">
      {words.map((w, i) => {
        const y = 10 + i * 37;
        const width = 30 + i * 40;
        return (
          <g key={w}>
            <rect x={8} y={y} width={width} height={28} rx={8} fill={C.purple} fillOpacity={0.18 + i * 0.16} />
            <T x={width + 18} y={y + 14} size={11 + i * 2} anchor="start">{w}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function Figurative() {
  return (
    <Tiles
      label="Figurative language: a simile, as brave as a lion; a metaphor, the class was a zoo; personification, the wind howled; hyperbole, I’ve told you a million times"
      cols={2}
      h={200}
      items={[
        { e: '🦁', title: 'Simile', sub: '“as brave as a lion”', colour: C.goldSoft },
        { e: '🐒', title: 'Metaphor', sub: '“the class was a zoo”', colour: C.greenSoft },
        { e: '🌬️', title: 'Personification', sub: '“the wind howled”', colour: C.blueSoft },
        { e: '🎈', title: 'Hyperbole', sub: '“a million times”', colour: C.redSoft },
      ]}
    />
  );
}

function SoundDevices() {
  return (
    <Tiles
      label="Sound devices: alliteration, slippery slimy snake; onomatopoeia, buzz, crash, sizzle; rhyme, cat and hat; repetition, never, never, never"
      cols={2}
      h={200}
      items={[
        { e: '🐍', title: 'Alliteration', sub: 'slippery, slimy snake', colour: C.greenSoft },
        { e: '💥', title: 'Onomatopoeia', sub: 'buzz, crash, sizzle', colour: C.orangeSoft },
        { e: '🎩', title: 'Rhyme', sub: 'the cat in the hat', colour: C.purpleSoft },
        { e: '🔁', title: 'Repetition', sub: 'never, never, never', colour: C.blueSoft },
      ]}
    />
  );
}

function PeeParagraph() {
  const rows = [
    { l: 'P', t: 'Point', ex: 'The writer shows she is angry.', c: C.purple, f: C.purpleSoft },
    { l: 'E', t: 'Evidence', ex: '“She slammed the door.”', c: C.orange, f: C.orangeSoft },
    { l: 'E', t: 'Explain', ex: 'The verb “slammed” suggests fury.', c: C.green, f: C.greenSoft },
  ];
  return (
    <Svg h={190} label="A PEE paragraph: Point, the writer shows she is angry; Evidence, she slammed the door; Explain, the verb slammed suggests fury">
      {rows.map((r, i) => {
        const y = 8 + i * 60;
        return (
          <g key={r.t}>
            <rect x={8} y={y} width={304} height={52} rx={12} fill={r.f} />
            <circle cx={34} cy={y + 26} r={17} fill={r.c} />
            <T x={34} y={y + 27} size={17} fill="#fff">{r.l}</T>
            <T x={60} y={y + 16} size={12} anchor="start" fill={r.c}>{r.t}</T>
            <T x={60} y={y + 35} size={11} weight={700} anchor="start">{r.ex}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function RhymeScheme() {
  const lines: [string, string, string][] = [
    ['Twinkle, twinkle, little ', 'star', 'A'],
    ['How I wonder what you ', 'are', 'A'],
    ['Up above the world so ', 'high', 'B'],
    ['Like a diamond in the ', 'sky', 'B'],
  ];
  return (
    <Svg h={180} label="Rhyme scheme of Twinkle Twinkle Little Star: star and are rhyme, A A; high and sky rhyme, B B. So the rhyme scheme is A A B B">
      {lines.map(([start, end, letter], i) => {
        const y = 22 + i * 34;
        const colour = letter === 'A' ? C.purple : C.orange;
        return (
          <g key={i}>
            <text x={20} y={y} fontSize={14} fontWeight={700} fill={C.ink} dominantBaseline="middle">
              {start}
              <tspan fill={colour} fontWeight={900}>{end}</tspan>
            </text>
            <circle cx={286} cy={y} r={14} fill={colour} />
            <T x={286} y={y + 1} size={13} fill="#fff">{letter}</T>
          </g>
        );
      })}
      <T x={160} y={162} size={12}>Rhyme scheme: AABB</T>
    </Svg>
  );
}

function Iambic() {
  const syl: [string, boolean][] = [['but', false], ['SOFT', true], ['what', false], ['LIGHT', true], ['through', false], ['YON', true], ['der', false], ['WIN', true], ['dow', false], ['BREAKS', true]];
  const widths = syl.map(([s]) => s.length * 4.8 + 7);
  let x = (320 - widths.reduce((a, b) => a + b, 0) - 9 * 2) / 2;
  return (
    <Svg h={160} label="Iambic pentameter: ten syllables in a da-DUM rhythm. But SOFT, what LIGHT through YON-der WIN-dow BREAKS">
      <T x={160} y={16} size={12}>10 syllables: da-DUM × 5</T>
      {syl.map(([s, stressed], i) => {
        const bx = x;
        x += widths[i] + 2;
        const h = stressed ? 56 : 32;
        return (
          <g key={i}>
            <rect x={bx} y={110 - h} width={widths[i]} height={h} rx={6} fill={stressed ? C.purple : C.purpleSoft} />
            <T x={bx + widths[i] / 2} y={98} size={8.5} fill={stressed ? '#fff' : C.ink}>{s}</T>
            <T x={bx + widths[i] / 2} y={124} size={8.5} weight={700} fill={stressed ? C.purple : C.muted}>{stressed ? 'DUM' : 'da'}</T>
          </g>
        );
      })}
      <T x={160} y={148} size={10} weight={700} fill={C.muted}>Romeo and Juliet, Act 2 Scene 2</T>
    </Svg>
  );
}

function Aforest() {
  return (
    <Tiles
      label="Persuasive techniques, AFOREST: alliteration, facts, opinions, rhetorical questions, emotive language, statistics, triples"
      cols={4}
      h={200}
      items={[
        { e: '🔤', title: 'Alliteration', colour: C.purpleSoft },
        { e: '📌', title: 'Facts', colour: C.blueSoft },
        { e: '💭', title: 'Opinions', colour: C.greenSoft },
        { e: '❓', title: 'Rhetorical Q', colour: C.goldSoft },
        { e: '😢', title: 'Emotive', colour: C.redSoft },
        { e: '📊', title: 'Statistics', colour: C.orangeSoft },
        { e: '📚', title: 'Triples', colour: C.soft },
      ]}
    />
  );
}

function FiveSenses() {
  return (
    <Tiles
      label="Use all five senses: sight, grey clouds; hearing, gulls screeching; smell, salty air; touch, rough sand; taste, salt on your lips"
      items={[
        { e: '👀', title: 'Sight', sub: 'grey clouds', colour: C.blueSoft },
        { e: '👂', title: 'Hearing', sub: 'gulls screeching', colour: C.purpleSoft },
        { e: '👃', title: 'Smell', sub: 'salty air', colour: C.greenSoft },
        { e: '✋', title: 'Touch', sub: 'rough sand', colour: C.goldSoft },
        { e: '👅', title: 'Taste', sub: 'salt on lips', colour: C.redSoft },
      ]}
    />
  );
}

export const englishDiagrams: Record<string, () => JSX.Element> = {
  'word-classes': WordClasses,
  'sentence-types': SentenceTypes,
  apostrophes: Apostrophes,
  homophones: Homophones,
  'word-building': WordBuilding,
  'word-ladder': WordLadder,
  figurative: Figurative,
  'sound-devices': SoundDevices,
  'pee-paragraph': PeeParagraph,
  'rhyme-scheme': RhymeScheme,
  iambic: Iambic,
  aforest: Aforest,
  'five-senses': FiveSenses,
};

