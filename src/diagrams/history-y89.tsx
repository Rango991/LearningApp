import { C, Svg, T, Tiles, Timeline } from './kit';

// Diagrams for the in-depth Years 8-9 History units (content/history-y89.ts).

function EmpireGoods() {
  return (
    <Tiles
      label="What Britain took from its empire: sugar and rum from the Caribbean, cotton from America and India, tea from India, spices from Asia, and timber and furs from Canada"
      items={[
        { e: '🍬', title: 'Sugar & rum', sub: 'the Caribbean', colour: C.goldSoft },
        { e: '☁️', title: 'Cotton', sub: 'America & India', colour: C.soft },
        { e: '🍵', title: 'Tea', sub: 'India', colour: C.greenSoft },
        { e: '🌶️', title: 'Spices', sub: 'South & East Asia', colour: C.redSoft },
        { e: '🪵', title: 'Timber & furs', sub: 'Canada', colour: C.orangeSoft },
        { e: '💎', title: 'Gold & diamonds', sub: 'southern Africa', colour: C.blueSoft },
      ]}
    />
  );
}

function AbolitionTimeline() {
  return (
    <Timeline
      label="Resistance and abolition: Equiano’s book in 1789, the Haitian Revolution from 1791, the slave trade abolished in 1807, slavery abolished in 1833, and Douglass freed with help from Newcastle in 1846"
      colour={C.brown}
      events={[
        { date: '1789', text: 'Equiano’s life story', e: '📖' },
        { date: '1791', text: 'Haitian Revolution', e: '✊' },
        { date: '1807', text: 'Slave trade abolished', e: '⚖️' },
        { date: '1833', text: 'Slavery abolished', e: '🕊️' },
        { date: '1846', text: 'Douglass freed', e: '🤝' },
      ]}
    />
  );
}

function IndustryTimeline() {
  return (
    <Timeline
      label="Industrial Revolution timeline: spinning jenny 1764, Cromford Mill 1771, Watt’s steam engine 1776, Stockton and Darlington Railway 1825, Factory Act 1833"
      colour="#64748b"
      events={[
        { date: '1764', text: 'Spinning jenny', e: '🧵' },
        { date: '1771', text: 'Cromford Mill', e: '🏭' },
        { date: '1776', text: 'Watt’s steam engine', e: '⚙️' },
        { date: '1825', text: 'First public railway', e: '🚂' },
        { date: '1833', text: 'Factory Act', e: '📜' },
      ]}
    />
  );
}

function TownProblems() {
  return (
    <Tiles
      label="Problems in industrial towns: overcrowded back-to-back houses, shared privies, dirty water, smoke and pollution, cholera, and long working hours"
      items={[
        { e: '🏘️', title: 'Overcrowding', sub: 'back-to-back houses', colour: C.soft },
        { e: '🚽', title: 'Shared privies', sub: 'sewage in the streets', colour: C.goldSoft },
        { e: '💧', title: 'Dirty water', sub: 'from polluted rivers', colour: C.blueSoft },
        { e: '🏭', title: 'Smoke', sub: 'from coal fires', colour: '#e5e7eb' },
        { e: '🦠', title: 'Cholera', sub: 'spread by water', colour: C.greenSoft },
        { e: '⏰', title: 'Long hours', sub: '12–14 a day', colour: C.redSoft },
      ]}
    />
  );
}

function RailwayTimeline() {
  return (
    <Timeline
      label="North East railways: George Stephenson born in Wylam in 1781, Stockton and Darlington Railway 1825, Rocket wins the Rainhill Trials in 1829, Liverpool and Manchester Railway 1830, Hartley Pit disaster 1862"
      colour={C.green}
      events={[
        { date: '1781', text: 'Stephenson born, Wylam', e: '👶' },
        { date: '1825', text: 'Stockton & Darlington', e: '🚂' },
        { date: '1829', text: 'Rocket wins Rainhill', e: '🏆' },
        { date: '1830', text: 'Liverpool & Manchester', e: '🛤️' },
        { date: '1862', text: 'Hartley Pit disaster', e: '⛏️' },
      ]}
    />
  );
}

function TrenchSection() {
  const wire = (x: number) => (
    <path d={`M${x} 104 l6 -10 l6 10 l6 -10 l6 10 l6 -10 l6 10`} fill="none" stroke={C.muted} strokeWidth={1.5} />
  );
  return (
    <Svg label="A cross-section of the Western Front: British and German trenches facing each other, with barbed wire and shell craters in no man’s land between them">
      <rect x={0} y={104} width={320} height={96} fill="#c8a97e" />
      <rect x={0} y={0} width={320} height={104} fill={C.blueSoft} />
      {/* British trench */}
      <path d="M20 104 L20 156 L66 156 L66 104 Z" fill="#7a5c3a" />
      <rect x={58} y={92} width={22} height={12} rx={3} fill="#d6c08f" stroke={C.brown} />
      <rect x={66} y={82} width={18} height={10} rx={3} fill="#d6c08f" stroke={C.brown} />
      <line x1={22} y1={150} x2={64} y2={150} stroke={C.brown} strokeWidth={3} />
      {/* German trench */}
      <path d="M254 104 L254 156 L300 156 L300 104 Z" fill="#7a5c3a" />
      <rect x={240} y={92} width={22} height={12} rx={3} fill="#d6c08f" stroke={C.brown} />
      <rect x={236} y={82} width={18} height={10} rx={3} fill="#d6c08f" stroke={C.brown} />
      {/* no man's land */}
      {wire(100)}{wire(184)}
      <ellipse cx={150} cy={106} rx={18} ry={6} fill="#8c6a43" />
      <ellipse cx={204} cy={106} rx={12} ry={5} fill="#8c6a43" />
      <T x={160} y={70} size={12} fill={C.red}>No man’s land</T>
      <T x={160} y={86} size={9.5} weight={700} fill={C.muted}>barbed wire and shell craters</T>
      <T x={43} y={176} size={11}>British</T>
      <T x={43} y={190} size={11}>trench</T>
      <T x={277} y={176} size={11}>German</T>
      <T x={277} y={190} size={11}>trench</T>
      <T x={43} y={140} size={8.5} fill="#fff">duckboards</T>
      <T x={160} y={150} size={9.5} weight={700} fill={C.ink}>mud, rats, lice, water</T>
      <T x={74} y={72} size={9} weight={700} fill={C.muted}>sandbags</T>
    </Svg>
  );
}

function Ww1Timeline() {
  return (
    <Timeline
      label="First World War timeline: war declared 1914, poison gas 1915, the Somme and conscription 1916, the USA joins 1917, armistice 1918, Treaty of Versailles 1919"
      colour="#7a6a3a"
      events={[
        { date: '1914', text: 'War declared', e: '📣' },
        { date: '1915', text: 'Poison gas used', e: '☁️' },
        { date: '1916', text: 'The Somme', e: '🪖' },
        { date: '1917', text: 'USA joins', e: '🗽' },
        { date: '1918', text: 'Armistice', e: '🕊️' },
        { date: '1919', text: 'Treaty of Versailles', e: '📜' },
      ]}
    />
  );
}

export const historyY89Diagrams: Record<string, () => JSX.Element> = {
  'empire-goods': EmpireGoods,
  'abolition-timeline': AbolitionTimeline,
  'industry-timeline': IndustryTimeline,
  'town-problems': TownProblems,
  'railway-timeline': RailwayTimeline,
  'trench-section': TrenchSection,
  'ww1-timeline': Ww1Timeline,
};
