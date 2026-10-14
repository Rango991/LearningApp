import { Arrow, C, E, Svg, T, Tiles, wrap } from './kit';

// KS3 History diagrams.

/** Events spaced evenly along a line, with labels alternating above and below. Not to scale. */
function Timeline({ events, label, colour = C.purple }: { events: { date: string; text: string; e: string }[]; label: string; colour?: string }) {
  const n = events.length;
  const step = 224 / (n - 1);
  const maxChars = 15;
  return (
    <Svg h={210} label={label}>
      <line x1={14} y1={105} x2={306} y2={105} stroke={C.line} strokeWidth={6} strokeLinecap="round" />
      {events.map((ev, i) => {
        const x = 48 + i * step;
        const up = i % 2 === 0;
        const lines = wrap(ev.text, maxChars);
        return (
          <g key={ev.date + ev.text}>
            <line x1={x} y1={105} x2={x} y2={up ? 88 : 122} stroke={colour} strokeWidth={2} />
            <circle cx={x} cy={105} r={6} fill={colour} />
            <T x={x} y={up ? 78 : 132} size={12} fill={colour}>{ev.date}</T>
            {lines.map((l, li) => (
              <T key={li} x={x} y={up ? 62 - (lines.length - 1 - li) * 12 : 148 + li * 12} size={9.5} weight={700}>{l}</T>
            ))}
            <E e={ev.e} x={x} y={up ? 62 - lines.length * 12 - 8 : 148 + lines.length * 12 + 10} size={24} />
          </g>
        );
      })}
    </Svg>
  );
}

function HistoryTimeline() {
  return (
    <Timeline
      label="Timeline of key dates: Romans invade Britain AD 43, Battle of Hastings 1066, Magna Carta 1215, Spanish Armada 1588, First World War begins 1914"
      events={[
        { date: 'AD 43', text: 'Romans invade', e: '🏛️' },
        { date: '1066', text: 'Battle of Hastings', e: '⚔️' },
        { date: '1215', text: 'Magna Carta', e: '📜' },
        { date: '1588', text: 'Spanish Armada', e: '⛵' },
        { date: '1914', text: 'First World War', e: '🎖️' },
      ]}
    />
  );
}

function MedievalTimeline() {
  return (
    <Timeline
      colour={C.brown}
      label="Medieval timeline: Battle of Hastings 1066, Domesday Book 1086, Becket murdered 1170, Magna Carta 1215, Black Death 1348, Peasants’ Revolt 1381"
      events={[
        { date: '1066', text: 'Hastings', e: '⚔️' },
        { date: '1086', text: 'Domesday Book', e: '📖' },
        { date: '1170', text: 'Becket murdered', e: '⛪' },
        { date: '1215', text: 'Magna Carta', e: '📜' },
        { date: '1348', text: 'Black Death', e: '🐀' },
        { date: '1381', text: 'Peasants’ Revolt', e: '🔥' },
      ]}
    />
  );
}

function SuffrageTimeline() {
  return (
    <Timeline
      colour={C.green}
      label="Votes for women timeline: suffragists unite 1897, suffragettes formed 1903, Emily Davison dies at the Derby 1913, some women over 30 get the vote 1918, equal votes with men 1928"
      events={[
        { date: '1897', text: 'Suffragists unite', e: '✉️' },
        { date: '1903', text: 'Suffragettes formed', e: '📣' },
        { date: '1913', text: 'Emily Davison dies', e: '🐎' },
        { date: '1918', text: 'Some women over 30 vote', e: '🗳️' },
        { date: '1928', text: 'Equal votes at 21', e: '⚖️' },
      ]}
    />
  );
}

function Ww2Timeline() {
  return (
    <Timeline
      colour={C.blue}
      label="Second World War timeline: Germany invades Poland 1939, Dunkirk and the Battle of Britain 1940, the Blitz 1940 to 1941, D-Day 1944, VE Day 1945"
      events={[
        { date: '1939', text: 'Germany invades Poland', e: '🪖' },
        { date: '1940', text: 'Dunkirk, Battle of Britain', e: '✈️' },
        { date: '1940–41', text: 'The Blitz', e: '💥' },
        { date: '1944', text: 'D-Day landings', e: '🚢' },
        { date: '1945', text: 'VE Day', e: '🎉' },
      ]}
    />
  );
}

function Claimants() {
  return (
    <Tiles
      label="The three claimants to the throne in 1066: Harold Godwinson, English earl crowned king; Harald Hardrada, King of Norway; William, Duke of Normandy"
      items={[
        { e: '🛡️', title: 'Harold', sub: 'English earl, crowned king', colour: C.redSoft },
        { e: '🪓', title: 'Hardrada', sub: 'King of Norway', colour: C.blueSoft },
        { e: '⚔️', title: 'William', sub: 'Duke of Normandy', colour: C.goldSoft },
      ]}
      h={150}
    />
  );
}

function FeudalPyramid() {
  const half = (y: number) => ((y - 10) / 180) * 100;
  const band = (y1: number, y2: number) => `${110 - half(y1)},${y1} ${110 + half(y1)},${y1} ${110 + half(y2)},${y2} ${110 - half(y2)},${y2}`;
  const bands = [
    { y1: 10, y2: 55, t: 'King', fill: C.gold },
    { y1: 55, y2: 100, t: 'Barons', fill: '#f2c94c' },
    { y1: 100, y2: 145, t: 'Knights', fill: '#f8de8f' },
    { y1: 145, y2: 190, t: 'Peasants', fill: C.goldSoft },
  ];
  return (
    <Svg h={200} label="The feudal system: the king at the top, then barons, knights and peasants. Land is given down the pyramid; loyalty, soldiers, taxes and work go back up">
      {bands.map((b) => (
        <g key={b.t}>
          <polygon points={band(b.y1, b.y2)} fill={b.fill} stroke="#fff" strokeWidth={2} />
          <T x={110} y={(b.y1 + b.y2) / 2 + (b.t === 'King' ? 8 : 0)} size={12}>{b.t}</T>
        </g>
      ))}
      <Arrow x1={226} y1={30} x2={226} y2={170} color={C.green} width={3} />
      <T x={226} y={186} size={10} fill={C.green}>land</T>
      <Arrow x1={282} y1={170} x2={282} y2={30} color={C.orange} width={3} />
      <T x={282} y={186} size={10} fill={C.orange}>loyalty, work</T>
    </Svg>
  );
}

function ChurchPower() {
  return (
    <Tiles
      label="The power of the medieval Church: the tithe, monasteries, pilgrimages and fear of hell"
      cols={2}
      h={200}
      items={[
        { e: '💰', title: 'Tithe', sub: 'a tenth to the Church', colour: C.goldSoft },
        { e: '📖', title: 'Monasteries', sub: 'cared for the sick, copied books', colour: C.blueSoft },
        { e: '🚶', title: 'Pilgrimage', sub: 'journeys to holy places', colour: C.greenSoft },
        { e: '🔥', title: 'Fear of hell', sub: 'paintings warned of sin', colour: C.redSoft },
      ]}
    />
  );
}

function Chain({ steps, label }: { steps: { t: string; fill: string }[]; label: string }) {
  return (
    <Svg h={8 + steps.length * 38} label={label}>
      {steps.map((s, i) => {
        const y = 6 + i * 38;
        return (
          <g key={s.t}>
            <rect x={20} y={y} width={280} height={28} rx={10} fill={s.fill} />
            <T x={160} y={y + 14} size={11.5}>{s.t}</T>
            {i < steps.length - 1 && <Arrow x1={160} y1={y + 29} x2={160} y2={y + 37} width={2} color={C.muted} />}
          </g>
        );
      })}
    </Svg>
  );
}

function BlackDeathChain() {
  return (
    <Chain
      label="Consequences of the Black Death: it killed a third to a half of people, so there was a shortage of workers, peasants demanded higher wages, the Statute of Labourers capped wages in 1351, and anger led to the Peasants’ Revolt in 1381"
      steps={[
        { t: 'Black Death kills ⅓ to ½ of people', fill: C.redSoft },
        { t: 'Not enough workers', fill: C.orangeSoft },
        { t: 'Peasants demand higher wages', fill: C.goldSoft },
        { t: 'Statute of Labourers caps wages (1351)', fill: C.blueSoft },
        { t: 'Anger → Peasants’ Revolt (1381)', fill: C.purpleSoft },
      ]}
    />
  );
}

function ArmadaChain() {
  return (
    <Chain
      label="The Spanish Armada, 1588: about 130 Spanish ships sail for England, English fireships scatter them off Calais, the English win the Battle of Gravelines, storms wreck ships sailing home round Scotland and Ireland, and many never return"
      steps={[
        { t: 'About 130 Spanish ships sail (1588)', fill: C.goldSoft },
        { t: 'English fireships scatter them off Calais', fill: C.orangeSoft },
        { t: 'English win at Gravelines', fill: C.greenSoft },
        { t: 'Storms off Scotland and Ireland', fill: C.blueSoft },
        { t: 'Many ships never return to Spain', fill: C.purpleSoft },
      ]}
    />
  );
}

function TudorTree() {
  const Box = ({ x, y, w, t, s, fill }: { x: number; y: number; w: number; t: string; s: string; fill: string }) => (
    <g>
      <rect x={x - w / 2} y={y} width={w} height={40} rx={10} fill={fill} stroke={C.line} strokeWidth={1.5} />
      <T x={x} y={y + 14} size={11.5}>{t}</T>
      <T x={x} y={y + 29} size={9} weight={700} fill={C.muted}>{s}</T>
    </g>
  );
  return (
    <Svg h={200} label="Tudor family tree: Henry VII, then his son Henry VIII, whose three children ruled in turn: Edward VI, Mary I and Elizabeth I">
      <Box x={160} y={6} w={130} t="Henry VII" s="1485–1509" fill={C.redSoft} />
      <line x1={160} y1={46} x2={160} y2={64} stroke={C.muted} strokeWidth={2} />
      <Box x={160} y={64} w={130} t="Henry VIII" s="1509–1547" fill={C.redSoft} />
      <line x1={160} y1={104} x2={160} y2={120} stroke={C.muted} strokeWidth={2} />
      <line x1={58} y1={120} x2={262} y2={120} stroke={C.muted} strokeWidth={2} />
      {[58, 160, 262].map((x) => <line key={x} x1={x} y1={120} x2={x} y2={134} stroke={C.muted} strokeWidth={2} />)}
      <Box x={58} y={134} w={98} t="Edward VI" s="1547–1553" fill={C.blueSoft} />
      <Box x={160} y={134} w={98} t="Mary I" s="1553–1558" fill={C.purpleSoft} />
      <Box x={262} y={134} w={98} t="Elizabeth I" s="1558–1603" fill={C.goldSoft} />
      <T x={58} y={188} size={8.5} weight={700} fill={C.muted}>mum: Jane Seymour</T>
      <T x={160} y={188} size={8.5} weight={700} fill={C.muted}>mum: Catherine of Aragon</T>
      <T x={262} y={188} size={8.5} weight={700} fill={C.muted}>mum: Anne Boleyn</T>
    </Svg>
  );
}

function SixWives() {
  return (
    <Tiles
      label="Henry VIII’s six wives: Catherine of Aragon divorced, Anne Boleyn beheaded, Jane Seymour died, Anne of Cleves divorced, Catherine Howard beheaded, Catherine Parr survived"
      cols={3}
      h={200}
      items={[
        { e: '💔', title: 'Divorced', sub: 'Catherine of Aragon', colour: C.blueSoft },
        { e: '🪓', title: 'Beheaded', sub: 'Anne Boleyn', colour: C.redSoft },
        { e: '🕯️', title: 'Died', sub: 'Jane Seymour', colour: C.soft },
        { e: '💔', title: 'Divorced', sub: 'Anne of Cleves', colour: C.blueSoft },
        { e: '🪓', title: 'Beheaded', sub: 'Catherine Howard', colour: C.redSoft },
        { e: '🌟', title: 'Survived', sub: 'Catherine Parr', colour: C.goldSoft },
      ]}
    />
  );
}

/** Two side-by-side panels, each with a title and a list of emoji items. */
function TwoCol({ label, left, right, footer }: { label: string; left: { title: string; sub: string; colour: string; fill: string; items: [string, string][] }; right: { title: string; sub: string; colour: string; fill: string; items: [string, string][] }; footer?: string }) {
  const h = footer ? 200 : 186;
  return (
    <Svg h={h} label={label}>
      {[left, right].map((p, pi) => {
        const x = 8 + pi * 156;
        return (
          <g key={p.title}>
            <rect x={x} y={8} width={148} height={170} rx={14} fill={p.fill} />
            <T x={x + 74} y={28} size={13} fill={p.colour}>{p.title}</T>
            <T x={x + 74} y={46} size={9.5} weight={700} fill={C.muted}>{p.sub}</T>
            {p.items.map(([e, t], i) => (
              <g key={t}>
                <E e={e} x={x + 24} y={76 + i * 36} size={26} />
                <T x={x + 44} y={76 + i * 36} size={10.5} anchor="start">{t}</T>
              </g>
            ))}
          </g>
        );
      })}
      {footer && <T x={160} y={192} size={10.5} weight={700} fill={C.muted}>{footer}</T>}
    </Svg>
  );
}

function CivilWarSides() {
  return (
    <TwoCol
      label="The English Civil War: Royalists, called Cavaliers, supported King Charles I; Parliamentarians, called Roundheads, were led by Oliver Cromwell. They argued over money, religion and power"
      left={{ title: 'Royalists', sub: '“Cavaliers”', colour: C.purple, fill: C.purpleSoft, items: [['👑', 'For Charles I'], ['🐎', 'Strong cavalry'], ['🏰', 'North and west']] }}
      right={{ title: 'Parliament', sub: '“Roundheads”', colour: C.red, fill: C.redSoft, items: [['🏛️', 'For Parliament'], ['🛡️', 'New Model Army'], ['💷', 'London’s money']] }}
      footer="They argued over money, religion and power"
    />
  );
}

function IndustrialChanges() {
  return (
    <TwoCol
      label="Britain before and after the Industrial Revolution: from farms, handmade goods and horses to factories, machines and railways"
      left={{ title: 'Before', sub: 'around 1750', colour: C.green, fill: C.greenSoft, items: [['🐄', 'Farms, villages'], ['🧵', 'Made by hand'], ['🐎', 'Horses, carts']] }}
      right={{ title: 'After', sub: 'around 1900', colour: C.muted, fill: C.soft, items: [['🏭', 'Factories, cities'], ['⚙️', 'Made by machine'], ['🚂', 'Railways']] }}
    />
  );
}

function TriangularTrade() {
  return (
    <Svg h={200} label="The triangular trade: goods went from Britain to West Africa; enslaved Africans were forced across the Atlantic to the Americas on the Middle Passage; sugar, cotton and tobacco were shipped back to Britain">
      <rect x={0} y={0} width={320} height={200} fill={C.blueSoft} />
      <circle cx={186} cy={30} r={7} fill={C.ink} />
      <circle cx={262} cy={150} r={7} fill={C.ink} />
      <circle cx={52} cy={126} r={7} fill={C.ink} />
      <T x={186} y={14} size={12}>Britain</T>
      <T x={282} y={174} size={12}>West Africa</T>
      <T x={52} y={150} size={12}>Americas</T>
      <Arrow x1={194} y1={40} x2={254} y2={138} color={C.ink} width={3} />
      <Arrow x1={250} y1={150} x2={66} y2={128} color={C.red} width={3} />
      <Arrow x1={60} y1={114} x2={174} y2={36} color={C.green} width={3} />
      <T x={236} y={72} size={10} anchor="start">goods: cloth,</T>
      <T x={236} y={86} size={10} anchor="start">guns, metal</T>
      <T x={156} y={160} size={10} fill={C.red}>enslaved Africans</T>
      <T x={156} y={174} size={9} weight={700} fill={C.red}>the Middle Passage</T>
      <T x={98} y={58} size={10} fill={C.green} anchor="end">sugar, cotton,</T>
      <T x={98} y={72} size={10} fill={C.green} anchor="end">tobacco</T>
    </Svg>
  );
}

function MainCauses() {
  return (
    <Tiles
      label="Causes of the First World War, MAIN: militarism, alliances, imperialism and nationalism"
      cols={2}
      h={200}
      items={[
        { e: '🪖', title: 'Militarism', sub: 'building up armies', colour: C.redSoft },
        { e: '🤝', title: 'Alliances', sub: 'promises to defend each other', colour: C.blueSoft },
        { e: '🌐', title: 'Imperialism', sub: 'rivalry over empires', colour: C.goldSoft },
        { e: '🚩', title: 'Nationalism', sub: 'pride in your country', colour: C.greenSoft },
      ]}
    />
  );
}

export const historyDiagrams: Record<string, () => JSX.Element> = {
  'history-timeline': HistoryTimeline,
  claimants: Claimants,
  'feudal-pyramid': FeudalPyramid,
  'church-power': ChurchPower,
  'black-death-chain': BlackDeathChain,
  'medieval-timeline': MedievalTimeline,
  'tudor-tree': TudorTree,
  'six-wives': SixWives,
  armada: ArmadaChain,
  'civil-war-sides': CivilWarSides,
  'industrial-changes': IndustrialChanges,
  'triangular-trade': TriangularTrade,
  'main-causes': MainCauses,
  'suffrage-timeline': SuffrageTimeline,
  'ww2-timeline': Ww2Timeline,
};
