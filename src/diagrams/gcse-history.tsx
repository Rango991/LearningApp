import { C, Chain, Svg, T, Tiles, Timeline, TwoCol } from './kit';

// GCSE (AQA) History diagrams.

function UsaBoom() {
  return (
    <Tiles
      label="The 1920s boom: mass production, buying on credit, a share boom, and Prohibition"
      cols={2}
      h={200}
      items={[
        { e: '🚗', title: 'Mass production', sub: 'Ford’s assembly line', colour: C.blueSoft },
        { e: '💳', title: 'Buying on credit', sub: 'hire purchase', colour: C.greenSoft },
        { e: '📈', title: 'Share boom', sub: 'buying on the margin', colour: C.goldSoft },
        { e: '🚫', title: 'Prohibition', sub: 'alcohol banned 1920–33', colour: C.redSoft },
      ]}
    />
  );
}

function UsaUnemployment() {
  const data: [number, number][] = [[1929, 3.2], [1930, 8.7], [1931, 15.9], [1932, 23.6], [1933, 24.9], [1934, 21.7], [1935, 20.1], [1936, 16.9], [1937, 14.3], [1938, 19.0], [1939, 17.2], [1940, 14.6], [1941, 9.9]];
  const bw = 19;
  const base = 168;
  const k = 5.4;
  return (
    <Svg h={200} label="US unemployment from 1929 to 1941: about 3 percent in 1929, peaking at about 25 percent in 1933, falling under the New Deal, rising again in 1938, and dropping to about 10 percent by 1941 as war production began">
      <line x1={28} y1={base} x2={312} y2={base} stroke={C.muted} strokeWidth={1.5} />
      {[0, 10, 20].map((v) => (
        <g key={v}>
          <line x1={28} y1={base - v * k} x2={312} y2={base - v * k} stroke={C.line} strokeWidth={1} strokeDasharray="3 3" />
          <T x={22} y={base - v * k} size={9} weight={700} fill={C.muted} anchor="end">{v}%</T>
        </g>
      ))}
      {data.map(([year, v], i) => {
        const x = 34 + i * 21.5;
        return (
          <g key={year}>
            <rect x={x} y={base - v * k} width={bw} height={v * k} rx={3} fill={year === 1933 ? C.red : year >= 1933 ? C.blue : C.orange} />
            {i % 2 === 0 && <T x={x + bw / 2} y={base + 12} size={8.5} weight={700} fill={C.muted}>{`’${String(year).slice(2)}`}</T>}
          </g>
        );
      })}
      <T x={34 + 4 * 21.5 + bw / 2} y={base - 24.9 * k - 10} size={10} fill={C.red}>peak 1933</T>
      <T x={220} y={22} size={10} fill={C.blue}>New Deal years</T>
      <T x={160} y={194} size={9.5} weight={700} fill={C.muted}>US unemployment (% of workers)</T>
    </Svg>
  );
}

function CivilRightsTimeline() {
  return (
    <Timeline
      colour={C.purple}
      label="Civil rights timeline: Brown v Topeka 1954, Montgomery Bus Boycott 1955, Little Rock 1957, March on Washington 1963, Civil Rights Act 1964"
      events={[
        { date: '1954', text: 'Brown v. Topeka', e: '🏫' },
        { date: '1955', text: 'Montgomery Bus Boycott', e: '🚌' },
        { date: '1957', text: 'Little Rock Nine', e: '🎒' },
        { date: '1963', text: 'March on Washington', e: '✊' },
        { date: '1964', text: 'Civil Rights Act', e: '📜' },
      ]}
    />
  );
}

function ColdWarSides() {
  return (
    <TwoCol
      label="The Cold War superpowers: the USA was capitalist, democratic, and led NATO; the USSR was communist, a one-party state, and led the Warsaw Pact"
      left={{ title: 'USA', sub: 'the West', colour: C.blue, fill: C.blueSoft, items: [['💰', 'Capitalist'], ['🗳️', 'Democratic'], ['🛡️', 'Leads NATO']] }}
      right={{ title: 'USSR', sub: 'the East', colour: C.red, fill: C.redSoft, items: [['⚒️', 'Communist'], ['🚩', 'One-party state'], ['🤝', 'Leads Warsaw Pact']] }}
      footer="Rivals who never fought each other directly"
    />
  );
}

function ColdWar1950s() {
  return (
    <Timeline
      colour={C.blue}
      label="Cold War timeline: 1949 Soviet atomic bomb and NATO, 1950 Korean War begins, 1955 Warsaw Pact, 1956 Hungarian Uprising, 1957 Sputnik"
      events={[
        { date: '1949', text: 'Soviet A-bomb, NATO', e: '💣' },
        { date: '1950', text: 'Korean War', e: '🪖' },
        { date: '1955', text: 'Warsaw Pact', e: '🤝' },
        { date: '1956', text: 'Hungarian Uprising', e: '🚩' },
        { date: '1957', text: 'Sputnik', e: '🛰️' },
      ]}
    />
  );
}

function ColdWarCrises() {
  return (
    <Timeline
      colour={C.red}
      label="Cold War timeline: 1961 Berlin Wall, 1962 Cuban Missile Crisis, 1963 hotline and Test Ban Treaty, 1968 Prague Spring, 1972 SALT 1"
      events={[
        { date: '1961', text: 'Berlin Wall', e: '🧱' },
        { date: '1962', text: 'Cuban Missile Crisis', e: '🚀' },
        { date: '1963', text: 'Hotline, Test Ban', e: '📞' },
        { date: '1968', text: 'Prague Spring', e: '🌸' },
        { date: '1972', text: 'SALT 1', e: '✍️' },
      ]}
    />
  );
}

function FourHumours() {
  const q = [
    { t: 'Blood', s: 'hot and wet', x: 82, y: 54, fill: C.redSoft, ink: C.red },
    { t: 'Yellow bile', s: 'hot and dry', x: 238, y: 54, fill: C.goldSoft, ink: C.brown },
    { t: 'Phlegm', s: 'cold and wet', x: 82, y: 146, fill: C.blueSoft, ink: C.blue },
    { t: 'Black bile', s: 'cold and dry', x: 238, y: 146, fill: C.soft, ink: C.ink },
  ];
  return (
    <Svg h={200} label="The Four Humours: blood, hot and wet; yellow bile, hot and dry; phlegm, cold and wet; black bile, cold and dry. Health meant keeping them in balance">
      {q.map((h) => (
        <g key={h.t}>
          <rect x={h.x - 74} y={h.y - 42} width={148} height={84} rx={14} fill={h.fill} />
          <T x={h.x} y={h.y - 8} size={13} fill={h.ink}>{h.t}</T>
          <T x={h.x} y={h.y + 12} size={10} weight={700} fill={C.muted}>{h.s}</T>
        </g>
      ))}
      <circle cx={160} cy={100} r={30} fill="#fff" stroke={C.purple} strokeWidth={3} />
      <T x={160} y={95} size={10} fill={C.purple}>keep in</T>
      <T x={160} y={109} size={10} fill={C.purple}>balance</T>
    </Svg>
  );
}

function RenaissanceMedicine() {
  return (
    <Tiles
      label="Renaissance medicine: Vesalius corrected Galen’s anatomy in 1543; Paré used ligatures and ointment; Harvey proved the circulation of the blood in 1628"
      items={[
        { e: '🦴', title: 'Vesalius', sub: 'anatomy, 1543', colour: C.blueSoft },
        { e: '🩹', title: 'Paré', sub: 'ligatures and ointment', colour: C.greenSoft },
        { e: '🫀', title: 'Harvey', sub: 'circulation, 1628', colour: C.redSoft },
      ]}
      h={150}
    />
  );
}

function IndustrialMedicine() {
  return (
    <Timeline
      colour={C.green}
      label="Medical breakthroughs: 1796 Jenner’s vaccination, 1847 chloroform, 1854 John Snow and cholera, 1861 germ theory, 1867 Lister’s antiseptics"
      events={[
        { date: '1796', text: 'Jenner’s vaccine', e: '💉' },
        { date: '1847', text: 'Chloroform', e: '😴' },
        { date: '1854', text: 'Snow and cholera', e: '🚰' },
        { date: '1861', text: 'Germ theory', e: '🦠' },
        { date: '1867', text: 'Lister’s antiseptic', e: '🧴' },
      ]}
    />
  );
}

function PenicillinChain() {
  return (
    <Chain
      label="The story of penicillin: 1928 Fleming notices mould killing bacteria; around 1940 Florey and Chain make it into a drug; the Second World War brings US mass production; it saves wounded soldiers; antibiotics transform medicine"
      steps={[
        { t: '1928: Fleming sees mould kill bacteria', fill: C.greenSoft },
        { t: 'c1940: Florey and Chain make a drug', fill: C.blueSoft },
        { t: 'The war: the USA mass-produces it', fill: C.goldSoft },
        { t: 'Saves wounded soldiers (D-Day, 1944)', fill: C.orangeSoft },
        { t: 'The age of antibiotics begins', fill: C.purpleSoft },
      ]}
    />
  );
}

function NormanRevolts() {
  return (
    <Timeline
      colour={C.brown}
      label="Norman revolts: 1066 Battle of Hastings, 1068 Edwin and Morcar, 1069 to 1070 the Harrying of the North, 1070 to 1071 Hereward at Ely, 1075 Revolt of the Earls"
      events={[
        { date: '1066', text: 'Hastings', e: '⚔️' },
        { date: '1068', text: 'Edwin and Morcar', e: '🛡️' },
        { date: '1069–70', text: 'Harrying of the North', e: '🔥' },
        { date: '1070–71', text: 'Hereward at Ely', e: '🏞️' },
        { date: '1075', text: 'Revolt of the Earls', e: '👑' },
      ]}
    />
  );
}

function NormanLife() {
  return (
    <Tiles
      label="Changes under the Normans: the feudal system, forest laws, the Domesday Book, and Norman French"
      cols={2}
      h={200}
      items={[
        { e: '👑', title: 'Feudal system', sub: 'land for loyalty', colour: C.goldSoft },
        { e: '🌲', title: 'Forest laws', sub: 'royal hunting grounds', colour: C.greenSoft },
        { e: '📖', title: 'Domesday Book', sub: 'survey of 1086', colour: C.blueSoft },
        { e: '🗣️', title: 'Norman French', sub: 'language of rulers', colour: C.purpleSoft },
      ]}
    />
  );
}

function DurhamCathedral() {
  return (
    <Tiles
      label="Durham Cathedral: begun 1093, Romanesque round arches and huge pillars, early rib vaults, the shrine of St Cuthbert, and a position on a peninsula next to the castle"
      cols={2}
      h={200}
      items={[
        { e: '🏛️', title: 'Romanesque', sub: 'round arches, huge pillars', colour: C.goldSoft },
        { e: '⛪', title: 'Rib vaults', sub: 'among Europe’s earliest', colour: C.blueSoft },
        { e: '✝️', title: 'St Cuthbert', sub: 'shrine drew pilgrims', colour: C.purpleSoft },
        { e: '🏰', title: 'Location', sub: 'peninsula, next to castle', colour: C.greenSoft },
      ]}
    />
  );
}

export const gcseHistoryDiagrams: Record<string, () => JSX.Element> = {
  'usa-boom': UsaBoom,
  'usa-unemployment': UsaUnemployment,
  'civil-rights-timeline': CivilRightsTimeline,
  'cold-war-sides': ColdWarSides,
  'cold-war-1950s': ColdWar1950s,
  'cold-war-crises': ColdWarCrises,
  'four-humours': FourHumours,
  'renaissance-medicine': RenaissanceMedicine,
  'industrial-medicine': IndustrialMedicine,
  'penicillin-chain': PenicillinChain,
  'norman-revolts': NormanRevolts,
  'norman-life': NormanLife,
  'durham-cathedral': DurhamCathedral,
};
