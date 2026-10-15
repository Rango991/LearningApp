import { C, Chain, E, Svg, T, Tiles, Timeline, TwoCol } from './kit';

// GCSE (AQA) English Language and Literature diagrams.

function Paper({ label, rows, caption }: { label: string; rows: { q: string; marks: number; t: string; section: 'A' | 'B' }[]; caption: string }) {
  return (
    <Svg h={200} label={label}>
      {rows.map((r, i) => {
        const y = 8 + i * 34;
        const colour = r.section === 'A' ? C.blue : C.pink;
        return (
          <g key={r.q}>
            <circle cx={22} cy={y + 14} r={13} fill={colour} />
            <T x={22} y={y + 15} size={10.5} fill="#fff">{r.q}</T>
            <T x={42} y={y + 14} size={10.5} anchor="start">{r.t}</T>
            <rect x={150} y={y + 6} width={r.marks * 3.2} height={16} rx={5} fill={colour} fillOpacity={0.35} />
            <T x={154 + r.marks * 3.2} y={y + 14} size={10.5} anchor="start" fill={colour}>{r.marks}</T>
          </g>
        );
      })}
      <T x={160} y={190} size={10} weight={700} fill={C.muted}>{caption}</T>
    </Svg>
  );
}

function LangPaper1() {
  return (
    <Paper
      label="English Language Paper 1: Q1 list four things, 4 marks; Q2 language, 8; Q3 structure, 8; Q4 evaluate, 20; Q5 creative writing, 40"
      caption="Reading (blue) then writing (pink): 1 h 45 min, 80 marks"
      rows={[
        { q: 'Q1', marks: 4, t: 'List four things', section: 'A' },
        { q: 'Q2', marks: 8, t: 'Language', section: 'A' },
        { q: 'Q3', marks: 8, t: 'Structure', section: 'A' },
        { q: 'Q4', marks: 20, t: 'Evaluate', section: 'A' },
        { q: 'Q5', marks: 40, t: 'Creative writing', section: 'B' },
      ]}
    />
  );
}

function LangPaper2() {
  return (
    <Paper
      label="English Language Paper 2: Q1 true statements, 4 marks; Q2 summary, 8; Q3 language, 12; Q4 compare viewpoints, 16; Q5 viewpoint writing, 40"
      caption="Two non-fiction sources, then your viewpoint: 1 h 45 min"
      rows={[
        { q: 'Q1', marks: 4, t: 'True statements', section: 'A' },
        { q: 'Q2', marks: 8, t: 'Summary', section: 'A' },
        { q: 'Q3', marks: 12, t: 'Language', section: 'A' },
        { q: 'Q4', marks: 16, t: 'Compare views', section: 'A' },
        { q: 'Q5', marks: 40, t: 'Viewpoint writing', section: 'B' },
      ]}
    />
  );
}

function MacbethPlot() {
  return (
    <Chain
      label="Macbeth plot: the witches’ prophecies; Duncan is murdered and Macbeth crowned; Banquo is murdered but Fleance escapes; Macduff’s family is killed; Macduff kills Macbeth and Malcolm becomes king"
      steps={[
        { t: 'The witches’ prophecies', fill: C.purpleSoft },
        { t: 'Duncan murdered, Macbeth crowned', fill: C.redSoft },
        { t: 'Banquo murdered, Fleance escapes', fill: C.orangeSoft },
        { t: 'Macduff’s family killed', fill: C.goldSoft },
        { t: 'Macduff kills Macbeth, Malcolm is king', fill: C.greenSoft },
      ]}
    />
  );
}

function MacbethThemes() {
  return (
    <Tiles
      label="Themes in Macbeth: ambition, guilt, the supernatural, and appearance versus reality"
      cols={2}
      h={200}
      items={[
        { e: '📈', title: 'Ambition', sub: '“vaulting ambition”', colour: C.goldSoft },
        { e: '🩸', title: 'Guilt', sub: '“Out, damned spot!”', colour: C.redSoft },
        { e: '🧙', title: 'Supernatural', sub: 'witches, dagger, ghost', colour: C.purpleSoft },
        { e: '🐍', title: 'Appearance vs reality', sub: '“the serpent under’t”', colour: C.greenSoft },
      ]}
    />
  );
}

function RomeoPlot() {
  return (
    <Chain
      label="Romeo and Juliet plot: they meet at the Capulet party; the balcony and secret marriage; Mercutio and Tybalt die and Romeo is banished; Juliet takes the Friar’s potion; the message fails and both die"
      steps={[
        { t: 'They meet at the Capulet party', fill: C.redSoft },
        { t: 'Balcony scene, secret marriage', fill: C.purpleSoft },
        { t: 'Mercutio and Tybalt die, Romeo banished', fill: C.orangeSoft },
        { t: 'Juliet takes the Friar’s potion', fill: C.blueSoft },
        { t: 'The message fails: both die', fill: C.soft },
      ]}
    />
  );
}

function RomeoThemes() {
  return (
    <Tiles
      label="Themes in Romeo and Juliet: love, conflict, fate, and youth versus age"
      cols={2}
      h={200}
      items={[
        { e: '❤️', title: 'Love', sub: 'sudden and passionate', colour: C.redSoft },
        { e: '⚔️', title: 'Conflict', sub: 'the families’ feud', colour: C.orangeSoft },
        { e: '⭐', title: 'Fate', sub: '“star-cross’d lovers”', colour: C.goldSoft },
        { e: '👴', title: 'Youth and age', sub: 'rash young, strict old', colour: C.blueSoft },
      ]}
    />
  );
}

function CarolStaves() {
  return (
    <Timeline
      colour={C.green}
      label="A Christmas Carol in five staves: 1 Marley’s ghost, 2 the Ghost of Christmas Past, 3 the Ghost of Christmas Present, 4 the Ghost of Christmas Yet to Come, 5 a changed man"
      events={[
        { date: 'Stave 1', text: 'Marley’s ghost', e: '⛓️' },
        { date: 'Stave 2', text: 'Christmas Past', e: '🕯️' },
        { date: 'Stave 3', text: 'Christmas Present', e: '🎄' },
        { date: 'Stave 4', text: 'Yet to Come', e: '🪦' },
        { date: 'Stave 5', text: 'A changed man', e: '🦃' },
      ]}
    />
  );
}

function CarolChange() {
  return (
    <TwoCol
      label="Scrooge’s transformation: at the start he is cold and alone, loves money and turns away charity; at the end he is generous, helps the Cratchits and loves Christmas"
      left={{ title: 'Stave 1', sub: 'the miser', colour: C.blue, fill: C.blueSoft, items: [['🦪', 'Cold and alone'], ['💰', 'Loves money'], ['🚪', 'Refuses charity']] }}
      right={{ title: 'Stave 5', sub: 'redeemed', colour: C.green, fill: C.greenSoft, items: [['🦃', 'Generous'], ['🤝', 'Helps the Cratchits'], ['🎄', 'Loves Christmas']] }}
      footer="Dickens’s message: we should all help the poor"
    />
  );
}

function FrankensteinFrame() {
  return (
    <Svg h={200} label="Frankenstein’s frame narrative: Walton’s letters to his sister contain Victor’s story, which contains the Creature’s story">
      <rect x={8} y={8} width={304} height={184} rx={16} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={20} y={26} size={12} anchor="start" fill={C.blue}>Walton’s letters</T>
      <T x={20} y={42} size={9.5} weight={700} anchor="start" fill={C.muted}>an explorer writes to his sister</T>
      <rect x={32} y={56} width={256} height={124} rx={14} fill={C.purpleSoft} stroke={C.purple} strokeWidth={2} />
      <T x={44} y={74} size={12} anchor="start" fill={C.purple}>Victor’s story</T>
      <T x={44} y={90} size={9.5} weight={700} anchor="start" fill={C.muted}>told to Walton in the Arctic</T>
      <rect x={58} y={104} width={204} height={64} rx={12} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
      <E e="⚡" x={84} y={136} size={30} />
      <T x={106} y={128} size={12} anchor="start" fill={C.green}>The Creature’s story</T>
      <T x={106} y={146} size={9.5} weight={700} anchor="start" fill={C.muted}>told to Victor</T>
    </Svg>
  );
}

function FrankensteinThemes() {
  return (
    <Tiles
      label="Themes in Frankenstein: dangerous knowledge, responsibility, isolation, and nature versus nurture"
      cols={2}
      h={200}
      items={[
        { e: '🧪', title: 'Dangerous knowledge', sub: 'Victor’s ambition', colour: C.purpleSoft },
        { e: '⚖️', title: 'Responsibility', sub: 'Victor abandons him', colour: C.goldSoft },
        { e: '🏔️', title: 'Isolation', sub: 'both end up alone', colour: C.blueSoft },
        { e: '🌱', title: 'Nature vs nurture', sub: '“misery made me a fiend”', colour: C.greenSoft },
      ]}
    />
  );
}

function InspectorChain() {
  return (
    <Chain
      label="What each character did to Eva Smith: Mr Birling sacked her for striking; Sheila had her sacked from Milwards; Gerald ended their affair; Eric got her pregnant; Mrs Birling refused her charity"
      steps={[
        { t: 'Mr Birling sacks her for striking', fill: C.blueSoft },
        { t: 'Sheila gets her sacked from Milwards', fill: C.redSoft },
        { t: 'Gerald ends their affair', fill: C.goldSoft },
        { t: 'Eric gets her pregnant', fill: C.orangeSoft },
        { t: 'Mrs Birling refuses her charity', fill: C.purpleSoft },
      ]}
    />
  );
}

function InspectorGenerations() {
  return (
    <TwoCol
      label="In An Inspector Calls, the older generation, Mr and Mrs Birling and mostly Gerald, refuse to change, while the younger generation, Sheila and Eric, accept the blame and learn"
      left={{ title: 'Older', sub: 'refuse to change', colour: C.muted, fill: C.soft, items: [['🎩', 'Mr Birling'], ['👒', 'Mrs Birling'], ['💼', 'Gerald (mostly)']] }}
      right={{ title: 'Younger', sub: 'learn and change', colour: C.green, fill: C.greenSoft, items: [['💍', 'Sheila'], ['🍷', 'Eric'], ['💡', 'Accept the blame']] }}
      footer="Priestley’s hope lies with the young"
    />
  );
}

function PoemGroups({ label, groups }: { label: string; groups: { title: string; colour: string; fill: string; poems: [string, string][] }[] }) {
  return (
    <Svg h={200} label={label}>
      {groups.map((g, gi) => {
        const x = 8 + gi * 156;
        const rowH = g.poems.length > 4 ? 29 : 36;
        return (
          <g key={g.title}>
            <rect x={x} y={8} width={148} height={184} rx={14} fill={g.fill} />
            <T x={x + 74} y={26} size={12} fill={g.colour}>{g.title}</T>
            {g.poems.map(([poem, poet], i) => (
              <g key={poem}>
                <T x={x + 12} y={50 + i * rowH} size={9.5} anchor="start">{poem}</T>
                <T x={x + 12} y={62 + i * rowH} size={8.5} weight={700} fill={C.muted} anchor="start">{poet}</T>
              </g>
            ))}
          </g>
        );
      })}
    </Svg>
  );
}

function PoemsPower() {
  return (
    <PoemGroups
      label="Power poems. Human power: Ozymandias by Shelley, London by Blake, My Last Duchess by Browning, Tissue by Dharker. Nature and identity: The Prelude by Wordsworth, Storm on the Island by Heaney, Checking Out Me History by Agard"
      groups={[
        { title: 'Human power', colour: C.purple, fill: C.purpleSoft, poems: [['Ozymandias', 'Percy Shelley'], ['London', 'William Blake'], ['My Last Duchess', 'Robert Browning'], ['Tissue', 'Imtiaz Dharker']] },
        { title: 'Nature & identity', colour: C.green, fill: C.greenSoft, poems: [['The Prelude (extract)', 'William Wordsworth'], ['Storm on the Island', 'Seamus Heaney'], ['Checking Out Me History', 'John Agard']] },
      ]}
    />
  );
}

function PoemsConflict() {
  return (
    <PoemGroups
      label="Conflict poems. Earlier wars: The Charge of the Light Brigade by Tennyson, Exposure by Owen, Bayonet Charge by Hughes. Modern conflict: Remains by Armitage, Poppies by Weir, War Photographer by Duffy, Kamikaze by Garland, The Emigrée by Rumens"
      groups={[
        { title: 'Earlier wars', colour: C.brown, fill: C.goldSoft, poems: [['Charge of the Light Brigade', 'Alfred Tennyson'], ['Exposure', 'Wilfred Owen'], ['Bayonet Charge', 'Ted Hughes']] },
        { title: 'Modern conflict', colour: C.red, fill: C.redSoft, poems: [['Remains', 'Simon Armitage'], ['Poppies', 'Jane Weir'], ['War Photographer', 'Carol Ann Duffy'], ['Kamikaze', 'Beatrice Garland'], ['The Emigrée', 'Carol Rumens']] },
      ]}
    />
  );
}

function CompareVenn() {
  return (
    <Svg h={200} label="Comparing two poems: list what is only in poem A, what both share, and what is only in poem B. Use connectives such as similarly, in contrast and whereas">
      <circle cx={118} cy={82} r={70} fill={C.purple} fillOpacity={0.16} stroke={C.purple} strokeWidth={2.5} />
      <circle cx={202} cy={82} r={70} fill={C.orange} fillOpacity={0.18} stroke={C.orange} strokeWidth={2.5} />
      <T x={92} y={70} size={12} fill={C.purple}>Poem A</T>
      <T x={92} y={88} size={9.5} weight={700} fill={C.muted}>differences</T>
      <T x={160} y={70} size={12}>Both</T>
      <T x={160} y={88} size={9.5} weight={700} fill={C.muted}>similarities</T>
      <T x={228} y={70} size={12} fill={C.orange}>Poem B</T>
      <T x={228} y={88} size={9.5} weight={700} fill={C.muted}>differences</T>
      <T x={160} y={170} size={11}>“Similarly…”  ·  “In contrast…”  ·  “Whereas…”</T>
      <T x={160} y={190} size={9.5} weight={700} fill={C.muted}>compare ideas, language, structure and form</T>
    </Svg>
  );
}

export const gcseEnglishDiagrams: Record<string, () => JSX.Element> = {
  'lang-paper1': LangPaper1,
  'lang-paper2': LangPaper2,
  'macbeth-plot': MacbethPlot,
  'macbeth-themes': MacbethThemes,
  'romeo-plot': RomeoPlot,
  'romeo-themes': RomeoThemes,
  'carol-staves': CarolStaves,
  'carol-change': CarolChange,
  'frankenstein-frame': FrankensteinFrame,
  'frankenstein-themes': FrankensteinThemes,
  'inspector-chain': InspectorChain,
  'inspector-generations': InspectorGenerations,
  'poems-power': PoemsPower,
  'poems-conflict': PoemsConflict,
  'compare-venn': CompareVenn,
};
