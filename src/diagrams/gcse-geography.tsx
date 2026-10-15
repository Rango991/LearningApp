import { Arrow, C, Chain, CurveArrow, E, Svg, T, TwoCol } from './kit';

// GCSE (Edexcel B) Geography diagrams.

function AtmosCells() {
  const x = (lat: number) => 20 + (lat / 90) * 280;
  const cells = [
    { name: 'Hadley', from: 0, to: 30, clockwise: true },
    { name: 'Ferrel', from: 30, to: 60, clockwise: false },
    { name: 'Polar', from: 60, to: 90, clockwise: true },
  ];
  const marks = [
    { lat: 0, p: 'Low', w: 'rain', e: '🌧️' },
    { lat: 30, p: 'High', w: 'dry', e: '☀️' },
    { lat: 60, p: 'Low', w: 'rain', e: '🌧️' },
    { lat: 90, p: 'High', w: 'cold, dry', e: '❄️' },
  ];
  return (
    <Svg h={200} label="Global atmospheric circulation from the equator to the North Pole: the Hadley, Ferrel and Polar cells. Air rises at the equator and 60 degrees, giving low pressure and rain; it sinks at 30 degrees and the pole, giving high pressure and dry weather">
      <line x1={14} y1={158} x2={306} y2={158} stroke={C.brown} strokeWidth={3} />
      {cells.map((c) => {
        const l = x(c.from) + 8;
        const r = x(c.to) - 8;
        const cx = (l + r) / 2;
        const rx = (r - l) / 2;
        const s = c.clockwise ? 1 : 0;
        const top = c.clockwise ? `M ${l} 112 A ${rx} 40 0 0 ${s} ${r} 110` : `M ${r} 112 A ${rx} 40 0 0 ${s} ${l} 110`;
        const bottom = c.clockwise ? `M ${r} 114 A ${rx} 40 0 0 ${s} ${l} 112` : `M ${l} 114 A ${rx} 40 0 0 ${s} ${r} 112`;
        return (
          <g key={c.name}>
            <CurveArrow d={top} color={C.blue} width={2.5} />
            <CurveArrow d={bottom} color={C.blue} width={2.5} />
            <T x={cx} y={112} size={11}>{c.name}</T>
          </g>
        );
      })}
      {marks.map((m) => (
        <g key={m.lat}>
          <E e={m.e} x={x(m.lat)} y={24} size={24} />
          <T x={x(m.lat)} y={46} size={9.5} fill={m.p === 'Low' ? C.blue : C.orange}>{m.p}</T>
          <T x={x(m.lat)} y={170} size={10}>{m.lat}°</T>
        </g>
      ))}
      <T x={160} y={190} size={9.5} weight={700} fill={C.muted}>equator → North Pole (the same again to the south)</T>
    </Svg>
  );
}

function Cyclone() {
  return (
    <Svg h={200} label="Cross-section of a tropical cyclone: warm moist air rises in the eye wall, where winds are strongest, and spreads out at the top. In the calm eye, air sinks. It forms over a warm sea of at least 26.5 degrees">
      <rect x={0} y={168} width={320} height={32} fill={C.blueSoft} />
      <T x={160} y={186} size={10} fill={C.blue}>warm sea, at least 26.5 °C</T>
      <path d="M 30 166 C 30 120 50 70 136 52 L 140 166 Z" fill="#d7d3e3" />
      <path d="M 290 166 C 290 120 270 70 184 52 L 180 166 Z" fill="#d7d3e3" />
      <Arrow x1={120} y1={150} x2={124} y2={74} color={C.red} width={3} />
      <Arrow x1={200} y1={150} x2={196} y2={74} color={C.red} width={3} />
      <Arrow x1={160} y1={60} x2={160} y2={140} color={C.green} width={2.5} dashed />
      <CurveArrow d="M 128 46 C 100 30 70 30 40 40" color={C.muted} width={2} />
      <CurveArrow d="M 192 46 C 220 30 250 30 280 40" color={C.muted} width={2} />
      <T x={160} y={30} size={11} fill={C.green}>Eye</T>
      <T x={160} y={150} size={8.5} weight={700} fill={C.green}>calm</T>
      <T x={78} y={120} size={10} anchor="middle">eye wall:</T>
      <T x={78} y={134} size={9} weight={700} fill={C.red}>strongest winds</T>
      <T x={242} y={120} size={10}>rising air</T>
      <T x={242} y={134} size={9} weight={700} fill={C.muted}>cools, condenses</T>
    </Svg>
  );
}

function VolcanoTypes() {
  return (
    <Svg h={200} label="Two types of volcano. A shield volcano has gentle slopes from runny lava and forms at constructive boundaries and hotspots. A composite volcano is steep and layered with ash and lava, forms at destructive boundaries and erupts explosively">
      <path d="M 8 160 Q 80 112 152 160 Z" fill="#c9a77c" stroke={C.brown} strokeWidth={2} />
      <T x={80} y={176} size={12}>Shield</T>
      <T x={80} y={192} size={9} weight={700} fill={C.muted}>runny lava, gentle</T>
      <polygon points="172,160 232,60 248,60 308,160" fill="#a89a8a" stroke={C.ink} strokeWidth={2} strokeLinejoin="round" />
      {[80, 100, 120, 140].map((y) => {
        const half = ((y - 60) / 100) * 60 + 8;
        return <line key={y} x1={240 - half} y1={y} x2={240 + half} y2={y} stroke="#ffffff" strokeOpacity={0.5} strokeWidth={2} />;
      })}
      <E e="🌋" x={240} y={34} size={36} />
      <T x={240} y={176} size={12}>Composite</T>
      <T x={240} y={192} size={9} weight={700} fill={C.muted}>sticky lava, explosive</T>
      <T x={80} y={80} size={9.5} fill={C.green}>constructive</T>
      <T x={80} y={93} size={9.5} fill={C.green}>and hotspots</T>
      <T x={314} y={66} size={9.5} fill={C.red} anchor="end">destructive</T>
    </Svg>
  );
}

function Rostow() {
  const steps = [['Traditional', 'society'], ['Preconditions', 'for take-off'], ['Take-off'], ['Drive to', 'maturity'], ['High mass', 'consumption']];
  const fills = [C.soft, C.blueSoft, C.greenSoft, C.goldSoft, C.orangeSoft];
  return (
    <Svg h={200} label="Rostow’s model of development: five steps rising from traditional society, preconditions for take-off, take-off, drive to maturity, to the age of high mass consumption">
      {steps.map((lines, i) => {
        const x = 8 + i * 61;
        const top = 150 - i * 28;
        return (
          <g key={i}>
            <rect x={x} y={top} width={60} height={182 - top} fill={fills[i]} stroke="#fff" strokeWidth={2} />
            <T x={x + 30} y={top + 14} size={13} fill={C.purple}>{i + 1}</T>
            {lines.map((l, li) => <T key={l} x={x + 30} y={top - 26 + li * 11 - (lines.length === 1 ? -6 : 0)} size={8} weight={800}>{l}</T>)}
          </g>
        );
      })}
      <Arrow x1={20} y1={192} x2={306} y2={192} color={C.muted} width={2} />
    </Svg>
  );
}

function Dependency() {
  return (
    <Svg h={200} label="Dependency theory: periphery countries sell raw materials cheaply to the core, and the core sells manufactured goods back at high prices, so the gap between them widens">
      <rect x={8} y={60} width={84} height={70} rx={14} fill={C.goldSoft} stroke={C.gold} strokeWidth={2} />
      <E e="🏙️" x={50} y={84} size={30} />
      <T x={50} y={112} size={12}>Core</T>
      <T x={50} y={144} size={9} weight={700} fill={C.muted}>rich countries</T>
      <rect x={228} y={60} width={84} height={70} rx={14} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
      <E e="🌾" x={270} y={84} size={30} />
      <T x={270} y={112} size={12}>Periphery</T>
      <T x={270} y={144} size={9} weight={700} fill={C.muted}>poorer countries</T>
      <Arrow x1={224} y1={78} x2={96} y2={78} color={C.green} width={3} />
      <T x={160} y={64} size={9} fill={C.green}>raw materials, cheap</T>
      <Arrow x1={96} y1={112} x2={224} y2={112} color={C.orange} width={3} />
      <T x={160} y={128} size={9} fill={C.orange}>manufactured goods, dear</T>
      <T x={160} y={180} size={11}>The gap between them widens</T>
    </Svg>
  );
}

function TopDownBottomUp() {
  return (
    <TwoCol
      label="Top-down development: large projects like dams, run by governments, with big budgets. Bottom-up development: small projects like village water pumps, run with local people, small and cheap"
      left={{ title: 'Top-down', sub: 'big projects from above', colour: C.blue, fill: C.blueSoft, items: [['🏗️', 'Large dams'], ['🏛️', 'Run by government'], ['💰', 'Big budgets']] }}
      right={{ title: 'Bottom-up', sub: 'local, small-scale', colour: C.green, fill: C.greenSoft, items: [['🚰', 'Water pumps'], ['🤝', 'Run by locals'], ['🪙', 'Small and cheap']] }}
    />
  );
}

function UrbanGrowth() {
  const data = [
    { y: '1950', v: 30, proj: false },
    { y: '2007', v: 50, proj: false },
    { y: '2050', v: 68, proj: true },
  ];
  return (
    <Svg h={200} label="Share of the world’s people living in towns and cities: about 30 percent in 1950, 50 percent in 2007, and a projected 68 percent in 2050">
      <line x1={30} y1={170} x2={300} y2={170} stroke={C.muted} strokeWidth={1.5} />
      {data.map((d, i) => {
        const x = 60 + i * 84;
        const h = d.v * 2;
        return (
          <g key={d.y}>
            <rect x={x} y={170 - h} width={56} height={h} rx={6} fill={C.orange} fillOpacity={d.proj ? 0.4 : 1} stroke={C.orange} strokeWidth={2} strokeDasharray={d.proj ? '5 3' : undefined} />
            <T x={x + 28} y={160 - h} size={13} fill={C.orange}>{d.v}%</T>
            <T x={x + 28} y={184} size={11}>{d.y}</T>
          </g>
        );
      })}
      <T x={256} y={196} size={8.5} weight={700} fill={C.muted}>(UN projection)</T>
    </Svg>
  );
}

function Megacity() {
  return (
    <TwoCol
      label="Life in a megacity such as Mumbai. Opportunities: jobs, Bollywood, schools and hospitals. Challenges: squatter settlements, poor sanitation, traffic and pollution"
      left={{ title: 'Opportunities', sub: 'why people come', colour: C.green, fill: C.greenSoft, items: [['💼', 'Jobs'], ['🎬', 'Bollywood'], ['🏥', 'Schools, hospitals']] }}
      right={{ title: 'Challenges', sub: 'growing too fast', colour: C.red, fill: C.redSoft, items: [['🏚️', 'Squatter homes'], ['🚽', 'Poor sanitation'], ['🚗', 'Traffic, pollution']] }}
    />
  );
}

function CoastLandforms() {
  const rock = '#b9a58a';
  const stages = ['Crack', 'Cave', 'Arch', 'Stack', 'Stump'];
  return (
    <Svg h={170} label="Erosion of a headland: a crack becomes a cave, the cave becomes an arch, the arch collapses to leave a stack, and the stack erodes to a stump">
      <rect x={0} y={118} width={320} height={52} fill={C.blueSoft} />
      {stages.map((s, i) => {
        const x = 10 + i * 62;
        return (
          <g key={s}>
            {i === 0 && <g><rect x={x} y={40} width={52} height={86} fill={rock} /><line x1={x + 26} y1={126} x2={x + 22} y2={90} stroke={C.ink} strokeWidth={2} /></g>}
            {i === 1 && <g><rect x={x} y={40} width={52} height={86} fill={rock} /><path d={`M ${x + 14} 126 Q ${x + 26} 92 ${x + 38} 126 Z`} fill="#5c4a36" /></g>}
            {i === 2 && <path d={`M ${x} 40 H ${x + 52} V 126 H ${x + 40} Q ${x + 26} 76 ${x + 12} 126 H ${x} Z`} fill={rock} />}
            {i === 3 && <g><rect x={x} y={40} width={14} height={86} fill={rock} /><rect x={x + 30} y={52} width={20} height={74} fill={rock} /></g>}
            {i === 4 && <g><rect x={x} y={40} width={14} height={86} fill={rock} /><rect x={x + 30} y={106} width={20} height={20} fill={rock} /></g>}
            <T x={x + 26} y={148} size={11}>{s}</T>
            {i < 4 && <T x={x + 58} y={84} size={12} fill={C.muted}>›</T>}
          </g>
        );
      })}
      <T x={160} y={20} size={10.5} weight={700} fill={C.muted}>Waves erode weak points in a headland</T>
    </Svg>
  );
}

function Hydrograph() {
  return (
    <Svg h={200} label="A storm hydrograph: rainfall bars, then river discharge rising to a peak and falling. Lag time is the gap between peak rainfall and peak discharge">
      <line x1={36} y1={170} x2={306} y2={170} stroke={C.muted} strokeWidth={1.5} />
      <line x1={36} y1={170} x2={36} y2={20} stroke={C.muted} strokeWidth={1.5} />
      {[[54, 14], [70, 30], [86, 46], [102, 22], [118, 8]].map(([x, h]) => <rect key={x} x={x} y={170 - h} width={14} height={h} fill={C.blue} fillOpacity={0.5} />)}
      <path d="M 36 150 C 90 150 110 148 140 120 C 160 90 170 56 186 54 C 210 54 230 100 260 130 C 280 145 295 148 306 149" fill="none" stroke={C.purple} strokeWidth={3.5} />
      <line x1={93} y1={32} x2={93} y2={124} stroke={C.blue} strokeWidth={1} strokeDasharray="3 3" />
      <line x1={186} y1={32} x2={186} y2={54} stroke={C.purple} strokeWidth={1} strokeDasharray="3 3" />
      <Arrow x1={95} y1={36} x2={184} y2={36} color={C.red} width={2} />
      <T x={140} y={24} size={10.5} fill={C.red}>lag time</T>
      <T x={93} y={110} size={9} weight={700} fill={C.blue}>peak rain</T>
      <T x={232} y={56} size={10} anchor="start" fill={C.purple}>peak</T>
      <T x={232} y={68} size={10} anchor="start" fill={C.purple}>discharge</T>
      <T x={124} y={88} size={9} weight={700} fill={C.muted} anchor="end">rising limb</T>
      <T x={252} y={104} size={9} weight={700} fill={C.muted} anchor="start">falling limb</T>
      <T x={170} y={186} size={9.5} weight={700} fill={C.muted}>time (hours)</T>
    </Svg>
  );
}

function CorePeriphery() {
  return (
    <TwoCol
      label="The UK’s core, London and the South East, has dense population, high wages and good transport. The periphery has sparse population, has lost old industries, and is more remote"
      left={{ title: 'Core', sub: 'London and the South East', colour: C.purple, fill: C.purpleSoft, items: [['🏙️', 'Dense population'], ['💷', 'High wages'], ['🚄', 'Good transport']] }}
      right={{ title: 'Periphery', sub: 'e.g. Highlands, rural Wales', colour: C.green, fill: C.greenSoft, items: [['🏞️', 'Sparse population'], ['🏭', 'Lost old industry'], ['🛣️', 'More remote']] }}
    />
  );
}

function FieldworkEnquiry() {
  return (
    <Chain
      label="The fieldwork enquiry process: question or hypothesis, collect data, present data, analyse, conclude, evaluate"
      steps={[
        { t: '1. Question or hypothesis', fill: C.purpleSoft },
        { t: '2. Collect data', fill: C.blueSoft },
        { t: '3. Present data', fill: C.greenSoft },
        { t: '4. Analyse', fill: C.goldSoft },
        { t: '5. Conclude', fill: C.orangeSoft },
        { t: '6. Evaluate', fill: C.redSoft },
      ]}
    />
  );
}

function GoodsServices() {
  return (
    <TwoCol
      label="The biosphere provides goods such as food, timber and medicines, and services such as regulating the climate, cleaning water and making soil"
      left={{ title: 'Goods', sub: 'things we take', colour: C.orange, fill: C.orangeSoft, items: [['🍎', 'Food'], ['🪵', 'Timber'], ['💊', 'Medicines']] }}
      right={{ title: 'Services', sub: 'jobs nature does', colour: C.green, fill: C.greenSoft, items: [['🌡️', 'Regulates climate'], ['💧', 'Cleans water'], ['🌱', 'Makes soil']] }}
    />
  );
}

function ForestCompare() {
  return (
    <TwoCol
      label="Tropical rainforest: hot and wet all year, huge biodiversity, nutrients stored in the plants. Taiga: cold with long winters, mostly conifers, nutrients stored in the leaf litter"
      left={{ title: 'Rainforest', sub: 'near the equator', colour: C.green, fill: C.greenSoft, items: [['☀️', 'Hot, wet all year'], ['🦜', 'Huge biodiversity'], ['🌿', 'Nutrients in plants']] }}
      right={{ title: 'Taiga', sub: 'Canada, Russia', colour: C.blue, fill: C.blueSoft, items: [['❄️', 'Long cold winters'], ['🌲', 'Mostly conifers'], ['🍂', 'Nutrients in litter']] }}
    />
  );
}

function EnergyMix() {
  return (
    <TwoCol
      label="Non-renewable energy: oil, coal and nuclear. Renewable energy: wind, solar and hydroelectric"
      left={{ title: 'Non-renewable', sub: 'will run out', colour: C.muted, fill: C.soft, items: [['🛢️', 'Oil and gas'], ['⛏️', 'Coal'], ['☢️', 'Nuclear']] }}
      right={{ title: 'Renewable', sub: 'won’t run out', colour: C.green, fill: C.greenSoft, items: [['🌬️', 'Wind'], ['☀️', 'Solar'], ['💧', 'Hydroelectric']] }}
    />
  );
}

export const gcseGeographyDiagrams: Record<string, () => JSX.Element> = {
  'atmos-cells': AtmosCells,
  cyclone: Cyclone,
  'volcano-types': VolcanoTypes,
  rostow: Rostow,
  dependency: Dependency,
  'top-down-bottom-up': TopDownBottomUp,
  'urban-growth': UrbanGrowth,
  megacity: Megacity,
  'coast-landforms': CoastLandforms,
  hydrograph: Hydrograph,
  'core-periphery': CorePeriphery,
  'fieldwork-enquiry': FieldworkEnquiry,
  'goods-services': GoodsServices,
  'forest-compare': ForestCompare,
  'energy-mix': EnergyMix,
};
