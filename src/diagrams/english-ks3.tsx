import { Arrow, Box, C, E, Svg, T, Tiles, Timeline, TwoCol } from './kit';

// Diagrams for the extra KS3 English units (content/english-ks3.ts).

function EnglishTimeline() {
  return (
    <Timeline
      label="How English developed: Old English from 450, the Normans from 1066, Chaucer around 1400, the printing press in 1476, Shakespeare around 1600, and Johnson’s dictionary in 1755"
      events={[
        { date: '450', text: 'Old English arrives', e: '⚔️' },
        { date: '1066', text: 'Normans bring French', e: '🏰' },
        { date: '1400', text: 'Chaucer', e: '📜' },
        { date: '1476', text: 'Printing press', e: '🖨️' },
        { date: '1600', text: 'Shakespeare', e: '🎭' },
        { date: '1755', text: 'Johnson’s dictionary', e: '📖' },
      ]}
    />
  );
}

function LoanWords() {
  return (
    <Tiles
      label="Words English has borrowed: shampoo and pyjamas from Hindi and Urdu, chocolate from Nahuatl, tea from Chinese, sky from Old Norse, and judge from French"
      items={[
        { e: '🧴', title: 'shampoo', sub: 'Hindi', colour: C.blueSoft },
        { e: '🍫', title: 'chocolate', sub: 'Nahuatl', colour: C.orangeSoft },
        { e: '🍵', title: 'tea', sub: 'Chinese', colour: C.greenSoft },
        { e: '🌤️', title: 'sky', sub: 'Old Norse', colour: C.soft },
        { e: '⚖️', title: 'judge', sub: 'French', colour: C.purpleSoft },
        { e: '🤳', title: 'selfie', sub: 'brand new', colour: C.goldSoft },
      ]}
    />
  );
}

function Petal() {
  const parts = [
    ['P', 'Point', 'answer the question'],
    ['E', 'Evidence', 'a short quotation'],
    ['T', 'Technique', 'name the method'],
    ['A', 'Analysis', 'explain the effect'],
    ['L', 'Link', 'back to the question'],
  ];
  const colours = [C.pink, C.orange, C.gold, C.green, C.blue];
  return (
    <Svg label="PETAL: Point, Evidence, Technique, Analysis, Link">
      {parts.map(([l], i) => {
        const a = (i * 72 - 90) * (Math.PI / 180);
        const x = 82 + 46 * Math.cos(a);
        const y = 100 + 46 * Math.sin(a);
        return (
          <g key={l}>
            <ellipse cx={x} cy={y} rx={26} ry={20} transform={`rotate(${i * 72} ${x} ${y})`} fill={colours[i]} opacity={0.35} />
            <T x={x} y={y} size={16} fill={colours[i]}>{l}</T>
          </g>
        );
      })}
      <circle cx={82} cy={100} r={18} fill={C.gold} />
      {parts.map(([l, w, d], i) => (
        <g key={w}>
          <T x={164} y={34 + i * 32} size={12} anchor="start" fill={colours[i]}>{`${l}  ${w}`}</T>
          <T x={184} y={48 + i * 32} size={9.5} weight={700} anchor="start" fill={C.muted}>{d}</T>
        </g>
      ))}
    </Svg>
  );
}

function GothicFeatures() {
  return (
    <Tiles
      label="Features of Gothic fiction: gloomy settings, the supernatural, mystery and secrets, villains, isolation, and extreme emotions"
      items={[
        { e: '🏚️', title: 'Gloomy setting', sub: 'castles, ruins, storms', colour: C.soft },
        { e: '👻', title: 'Supernatural', sub: 'ghosts, monsters', colour: C.purpleSoft },
        { e: '🗝️', title: 'Mystery', sub: 'secrets, hidden pasts', colour: C.goldSoft },
        { e: '🧛', title: 'Villain', sub: 'powerful, sinister', colour: C.redSoft },
        { e: '🌑', title: 'Isolation', sub: 'alone, cut off', colour: C.blueSoft },
        { e: '😱', title: 'Extreme emotion', sub: 'terror, obsession', colour: C.orangeSoft },
      ]}
    />
  );
}

function Deduction() {
  const steps = [
    { e: '👀', t: 'Observe', s: 'notice details' },
    { e: '🧩', t: 'Clues', s: 'a muddy boot' },
    { e: '🧠', t: 'Deduce', s: 'reason it out' },
    { e: '💡', t: 'Reveal', s: 'at the end' },
  ];
  return (
    <Svg h={140} label="How Sherlock Holmes solves a case: observe tiny details, gather clues, deduce, then reveal the answer at the end">
      {steps.map((s, i) => {
        const x = 8 + i * 79;
        return (
          <g key={s.t}>
            <rect x={x} y={14} width={68} height={100} rx={12} fill={C.purpleSoft} />
            <E e={s.e} x={x + 34} y={44} size={30} />
            <T x={x + 34} y={78} size={11.5}>{s.t}</T>
            <T x={x + 34} y={96} size={8.5} weight={700} fill={C.muted}>{s.s}</T>
            {i < steps.length - 1 && <Arrow x1={x + 70} y1={64} x2={x + 78} y2={64} color={C.muted} width={2} />}
          </g>
        );
      })}
      <T x={160} y={132} size={9.5} weight={700} fill={C.muted}>Watson tells the story, so the reader works it out too</T>
    </Svg>
  );
}

function StoryArc() {
  return (
    <Svg label="Story structure: opening, rising action, climax, falling action, resolution">
      <path d="M20 160 L70 160 Q150 150 205 42 Q240 70 292 132" fill="none" stroke={C.purple} strokeWidth={4} strokeLinecap="round" />
      <circle cx={205} cy={42} r={6} fill={C.red} />
      <T x={44} y={176} size={11}>Opening</T>
      <T x={112} y={124} size={11} anchor="end">Rising action</T>
      <T x={205} y={24} size={12} fill={C.red}>Climax</T>
      <T x={240} y={110} size={11} anchor="end">Falling</T>
      <T x={240} y={124} size={11} anchor="end">action</T>
      <T x={280} y={152} size={11}>Resolution</T>
      <T x={160} y={194} size={9.5} weight={700} fill={C.muted}>tension builds to the climax, then eases</T>
    </Svg>
  );
}

function AllegoryMap() {
  const rows = [
    ['🐷', 'Old Major', 'Marx and Lenin'],
    ['🐷', 'Napoleon', 'Stalin'],
    ['🐷', 'Snowball', 'Trotsky'],
    ['🐷', 'Squealer', 'Propaganda'],
    ['🐴', 'Boxer', 'Ordinary workers'],
  ];
  return (
    <Svg label="Animal Farm as an allegory: Old Major stands for Marx and Lenin, Napoleon for Stalin, Snowball for Trotsky, Squealer for propaganda, Boxer for ordinary workers">
      <T x={80} y={12} size={11} fill={C.pink}>In the story</T>
      <T x={240} y={12} size={11} fill={C.red}>In real history</T>
      {rows.map(([e, a, b], i) => {
        const y = 24 + i * 34;
        return (
          <g key={a}>
            <Box x={20} y={y} w={120} h={28} fill="#fde7ef" stroke={C.line} />
            <E e={e} x={38} y={y + 14} size={20} />
            <T x={92} y={y + 14} size={11}>{a}</T>
            <Arrow x1={146} y1={y + 14} x2={176} y2={y + 14} color={C.muted} width={2} />
            <Box x={180} y={y} w={120} h={28} fill={C.redSoft} stroke={C.line}>{b}</Box>
          </g>
        );
      })}
    </Svg>
  );
}

function DepressionContext() {
  return (
    <Tiles
      label="Context of Of Mice and Men: the Great Depression, the Dust Bowl, travelling ranch workers, and the American Dream"
      items={[
        { e: '📉', title: 'Great Depression', sub: 'millions out of work', colour: C.soft },
        { e: '🌪️', title: 'Dust Bowl', sub: 'drought drove farmers out', colour: C.goldSoft },
        { e: '🤠', title: 'Itinerant workers', sub: 'ranch to ranch, alone', colour: C.orangeSoft },
        { e: '🏡', title: 'American Dream', sub: 'success through hard work', colour: C.greenSoft },
      ]}
      cols={2}
    />
  );
}

function CompareConnectives() {
  return (
    <TwoCol
      label="Connectives for comparing: similarly, likewise and both show similarities; whereas, however and in contrast show differences"
      left={{ title: 'Similarities', sub: 'how they’re alike', colour: C.green, fill: C.greenSoft, items: [['🤝', 'similarly'], ['🪞', 'likewise'], ['👯', 'both']] }}
      right={{ title: 'Differences', sub: 'how they’re not', colour: C.red, fill: C.redSoft, items: [['↔️', 'whereas'], ['🔀', 'however'], ['⚖️', 'in contrast']] }}
    />
  );
}

function ApostropheOwners() {
  const box = (x: number, y: number, w: number, h: number, fill: string, lines: [string, string, string?]) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={fill} />
      <T x={x + w / 2} y={y + 15} size={11}>{lines[0]}</T>
      <T x={x + w / 2} y={y + 32} size={12} fill={C.purple}>{lines[1]}</T>
      {lines[2] && <T x={x + w / 2} y={y + 50} size={10} weight={700} fill={C.muted}>{lines[2]}</T>}
    </g>
  );
  return (
    <Svg label="Apostrophes for belonging: count the owners. One owner, add apostrophe s: the girl’s bag. More than one owner ending in s, add just an apostrophe: the girls’ bag. A plural without s, add apostrophe s: the children’s toys">
      <Box x={90} y={4} w={140} h={28} fill={C.goldSoft} stroke={C.line} size={12}>How many owners?</Box>
      <Arrow x1={130} y1={34} x2={76} y2={60} color={C.muted} width={2} />
      <Arrow x1={190} y1={34} x2={236} y2={60} color={C.muted} width={2} />
      {box(8, 64, 136, 62, C.blueSoft, ['One owner', 'add ’s', 'the girl’s bag'])}
      <Box x={176} y={64} w={136} h={26} fill={C.pink + '33'} stroke={C.line} size={11}>More than one</Box>
      <Arrow x1={220} y1={92} x2={208} y2={108} color={C.muted} width={2} />
      <Arrow x1={268} y1={92} x2={280} y2={108} color={C.muted} width={2} />
      {box(160, 112, 76, 62, C.greenSoft, ['ends in s', 'add ’', 'girls’ bag'])}
      {box(240, 112, 76, 62, C.orangeSoft, ['no s', 'add ’s', 'children’s'])}
      <T x={76} y={150} size={10} weight={700} fill={C.muted}>Tip: its = belonging,</T>
      <T x={76} y={164} size={10} weight={700} fill={C.muted}>it’s = it is</T>
      <T x={160} y={192} size={9.5} weight={700} fill={C.muted}>count the owners, then add the apostrophe</T>
    </Svg>
  );
}

export const englishKs3Diagrams: Record<string, () => JSX.Element> = {
  'apostrophe-owners': ApostropheOwners,
  'english-timeline': EnglishTimeline,
  'loan-words': LoanWords,
  petal: Petal,
  'gothic-features': GothicFeatures,
  deduction: Deduction,
  'story-arc': StoryArc,
  'allegory-map': AllegoryMap,
  'depression-context': DepressionContext,
  'compare-connectives': CompareConnectives,
};
