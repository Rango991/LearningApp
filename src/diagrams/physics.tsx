import { Arrow, C, E, FormulaTriangle, Svg, T, Tiles } from './kit';

// Physics lesson diagrams.

// ---------- circuit symbols ----------
const W = { stroke: C.ink, strokeWidth: 2.5, fill: 'none' } as const;

function Cell({ x, y, vertical = false }: { x: number; y: number; vertical?: boolean }) {
  // centred at (x, y); long line = positive terminal
  return vertical ? (
    <g>
      <line x1={x - 12} y1={y - 4} x2={x + 12} y2={y - 4} stroke={C.ink} strokeWidth={2.5} />
      <line x1={x - 6} y1={y + 4} x2={x + 6} y2={y + 4} stroke={C.ink} strokeWidth={5} />
    </g>
  ) : (
    <g>
      <rect x={x - 6} y={y - 14} width={12} height={28} fill="#fff" />
      <line x1={x - 4} y1={y - 13} x2={x - 4} y2={y + 13} stroke={C.ink} strokeWidth={2.5} />
      <line x1={x + 4} y1={y - 7} x2={x + 4} y2={y + 7} stroke={C.ink} strokeWidth={5} />
    </g>
  );
}

function Lamp({ x, y, on = true }: { x: number; y: number; on?: boolean }) {
  return (
    <g>
      {on && <circle cx={x} cy={y} r={15} fill={C.gold} opacity={0.35} />}
      <circle cx={x} cy={y} r={10} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <path d={`M${x - 7} ${y - 7} L${x + 7} ${y + 7} M${x + 7} ${y - 7} L${x - 7} ${y + 7}`} stroke={C.ink} strokeWidth={2} />
    </g>
  );
}

function Meter({ x, y, letter, colour }: { x: number; y: number; letter: string; colour: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={11} fill="#fff" stroke={colour} strokeWidth={2.5} />
      <T x={x} y={y + 0.5} size={12} fill={colour}>{letter}</T>
    </g>
  );
}

function Resistor({ x, y }: { x: number; y: number }) {
  return <rect x={x - 14} y={y - 6} width={28} height={12} fill="#fff" stroke={C.ink} strokeWidth={2.5} />;
}

function Switch({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 14} y={y - 6} width={28} height={10} fill="#fff" />
      <circle cx={x - 12} cy={y} r={2.5} fill={C.ink} />
      <circle cx={x + 12} cy={y} r={2.5} fill={C.ink} />
      <line x1={x - 12} y1={y} x2={x + 10} y2={y - 10} stroke={C.ink} strokeWidth={2.5} />
    </g>
  );
}

// ---------- forces ----------

function ForceTypes() {
  return (
    <Svg label="Contact forces need touching; non-contact forces act at a distance">
      <rect x={6} y={6} width={150} height={188} rx={12} fill={C.orangeSoft} />
      <rect x={164} y={6} width={150} height={188} rx={12} fill={C.blueSoft} />
      <T x={81} y={24} size={12}>Contact</T>
      <T x={239} y={24} size={12}>Non-contact</T>
      {[{ e: '🛷', t: 'Friction' }, { e: '🪂', t: 'Air resistance' }, { e: '🛟', t: 'Upthrust' }, { e: '🪢', t: 'Tension' }].map((f, i) => (
        <g key={f.t}>
          <E e={f.e} x={34} y={52 + i * 38} size={26} />
          <T x={54} y={52 + i * 38} size={11} anchor="start">{f.t}</T>
        </g>
      ))}
      {[{ e: '🌍', t: 'Gravity' }, { e: '🧲', t: 'Magnetism' }, { e: '⚡', t: 'Electrostatic' }].map((f, i) => (
        <g key={f.t}>
          <E e={f.e} x={192} y={52 + i * 38} size={26} />
          <T x={212} y={52 + i * 38} size={11} anchor="start">{f.t}</T>
        </g>
      ))}
      <T x={239} y={178} size={9.5} weight={700} fill={C.muted}>all measured in newtons (N)</T>
    </Svg>
  );
}

function MassWeight() {
  return (
    <Svg label="Weight equals mass times gravitational field strength: a 50 kg person weighs 500 N on Earth but 80 N on the Moon">
      <rect x={8} y={8} width={148} height={130} rx={12} fill={C.blueSoft} />
      <rect x={164} y={8} width={148} height={130} rx={12} fill="#ececf3" />
      <E e="🌍" x={40} y={38} size={34} />
      <E e="🌕" x={196} y={38} size={34} />
      <T x={100} y={30} size={11}>Earth</T>
      <T x={100} y={46} size={9.5} weight={700} fill={C.muted}>g = 10 N/kg</T>
      <T x={256} y={30} size={11}>Moon</T>
      <T x={256} y={46} size={9.5} weight={700} fill={C.muted}>g = 1.6 N/kg</T>
      <T x={82} y={84} size={11} fill={C.muted}>mass 50 kg</T>
      <T x={82} y={110} size={18} fill={C.blue}>500 N</T>
      <T x={238} y={84} size={11} fill={C.muted}>mass 50 kg</T>
      <T x={238} y={110} size={18} fill={C.purple}>80 N</T>
      <rect x={50} y={150} width={220} height={40} rx={10} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      <T x={160} y={170} size={13}>weight = mass × g</T>
    </Svg>
  );
}

function Resultant() {
  return (
    <Svg h={170} label="Resultant force: 20 N right and 5 N left give 15 N to the right">
      <rect x={130} y={40} width={60} height={44} rx={8} fill={C.purpleSoft} stroke={C.purple} strokeWidth={2} />
      <E e="📦" x={160} y={62} size={30} />
      <Arrow x1={190} y1={62} x2={300} y2={62} color={C.green} width={5} />
      <T x={248} y={46} size={12} fill={C.green}>20 N</T>
      <Arrow x1={130} y1={62} x2={98} y2={62} color={C.red} width={5} />
      <T x={110} y={46} size={12} fill={C.red}>5 N</T>
      <rect x={30} y={106} width={260} height={52} rx={12} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      <T x={160} y={122} size={11} fill={C.muted}>opposite directions: subtract</T>
      <T x={160} y={142} size={14}>20 − 5 = 15 N to the right →</T>
    </Svg>
  );
}

function Skydiver() {
  const stages = [
    { t: 'Jumps', s: 'weight > drag', w: 50, d: 12, note: 'speeds up' },
    { t: 'Terminal velocity', s: 'weight = drag', w: 50, d: 50, note: 'steady speed' },
    { t: 'Parachute opens', s: 'drag > weight', w: 50, d: 80, note: 'slows down' },
  ];
  return (
    <Svg label="A skydiver: drag increases until it balances weight (terminal velocity); a parachute increases drag">
      {stages.map((st, i) => {
        const x = 54 + i * 106;
        return (
          <g key={st.t}>
            <E e={i === 2 ? '🪂' : '🧍'} x={x} y={92} size={34} />
            <Arrow x1={x} y1={110} x2={x} y2={110 + st.w * 0.8} color={C.red} width={4} />
            <Arrow x1={x} y1={74} x2={x} y2={74 - st.d * 0.6} color={C.blue} width={4} />
            <T x={x} y={176} size={10.5}>{st.t}</T>
            <T x={x} y={190} size={9} weight={700} fill={C.muted}>{st.note}</T>
          </g>
        );
      })}
      <T x={20} y={14} size={9.5} fill={C.blue} anchor="start">↑ drag (air resistance)</T>
      <T x={300} y={14} size={9.5} fill={C.red} anchor="end">↓ weight</T>
    </Svg>
  );
}

function SpeedTriangle() {
  return <FormulaTriangle top="d" left="s" right="t" label="Speed triangle: distance equals speed times time" notes={['speed = d ÷ t', 'time = d ÷ s', 'distance = s × t']} />;
}

function DtGraph() {
  return (
    <Svg label="Distance-time graph: a steep line is fast, a flat line is stationary">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <T x={170} y={190} size={10} fill={C.muted}>time (s)</T>
      <g transform="rotate(-90 18 92)"><T x={18} y={92} size={10} fill={C.muted}>distance (m)</T></g>
      <polyline points="40,170 120,80 190,80 290,40" fill="none" stroke={C.purple} strokeWidth={4} strokeLinejoin="round" />
      <T x={66} y={110} size={10.5} fill={C.purple} anchor="end">steep:</T>
      <T x={66} y={123} size={10.5} fill={C.purple} anchor="end">fast</T>
      <T x={155} y={68} size={10.5} fill={C.orange}>flat: stopped</T>
      <T x={250} y={80} size={10.5} fill={C.green}>gentle: slower</T>
    </Svg>
  );
}

function Pressure() {
  return (
    <Svg h={170} label="Pressure equals force divided by area: a small area gives high pressure, a big area low pressure">
      <rect x={8} y={8} width={148} height={120} rx={12} fill={C.redSoft} />
      <rect x={164} y={8} width={148} height={120} rx={12} fill={C.greenSoft} />
      <E e="📌" x={82} y={56} size={44} />
      <T x={82} y={96} size={11}>small area</T>
      <T x={82} y={112} size={11} fill={C.red}>HIGH pressure</T>
      <E e="🎿" x={238} y={56} size={44} />
      <T x={238} y={96} size={11}>big area</T>
      <T x={238} y={112} size={11} fill="#178a60">LOW pressure</T>
      <rect x={40} y={136} width={240} height={30} rx={10} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      <T x={160} y={151} size={13}>pressure = force ÷ area</T>
    </Svg>
  );
}

function Springs() {
  const Spring = ({ x, len, mass }: { x: number; len: number; mass: string }) => {
    const coils = 7;
    const pts = Array.from({ length: coils * 2 + 1 }, (_, i) => `${x + (i === 0 || i === coils * 2 ? 0 : i % 2 ? 10 : -10)},${20 + (i * len) / (coils * 2)}`).join(' ');
    return (
      <g>
        <polyline points={pts} fill="none" stroke={C.muted} strokeWidth={2.5} />
        <rect x={x - 14} y={20 + len} width={28} height={20} rx={3} fill={C.purple} />
        <T x={x} y={30 + len} size={10} fill="#fff">{mass}</T>
      </g>
    );
  };
  return (
    <Svg label="Hooke's law: the extension of a spring is proportional to the force, up to the elastic limit">
      <line x1={20} y1={20} x2={170} y2={20} stroke={C.ink} strokeWidth={4} />
      <Spring x={40} len={50} mass="0 N" />
      <Spring x={95} len={80} mass="2 N" />
      <Spring x={150} len={110} mass="4 N" />
      <T x={95} y={170} size={9.5} weight={700} fill={C.muted}>double the force,</T>
      <T x={95} y={183} size={9.5} weight={700} fill={C.muted}>double the stretch</T>
      <line x1={200} y1={170} x2={312} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={200} y1={170} x2={200} y2={40} stroke={C.ink} strokeWidth={2} />
      <line x1={200} y1={170} x2={272} y2={86} stroke={C.green} strokeWidth={3.5} />
      <path d="M272 86 Q288 60 306 56" fill="none" stroke={C.red} strokeWidth={3.5} />
      <T x={256} y={190} size={9.5} fill={C.muted}>extension</T>
      <T x={232} y={48} size={9.5} fill={C.muted}>force</T>
      <T x={290} y={102} size={9} fill={C.red}>elastic limit</T>
    </Svg>
  );
}

function Moments() {
  return (
    <Svg h={170} label="Moments: force times distance from the pivot; a seesaw balances when moments are equal">
      <path d="M160 120 L176 150 L144 150 Z" fill={C.muted} />
      <line x1={20} y1={118} x2={300} y2={118} stroke={C.brown} strokeWidth={8} strokeLinecap="round" />
      <E e="🧒" x={60} y={92} size={40} />
      <E e="🧑" x={240} y={86} size={48} />
      <T x={60} y={60} size={10.5}>300 N</T>
      <T x={240} y={52} size={10.5}>600 N</T>
      <line x1={60} y1={132} x2={160} y2={132} stroke={C.blue} strokeWidth={2} />
      <T x={110} y={142} size={10} fill={C.blue}>2 m</T>
      <line x1={160} y1={132} x2={210} y2={132} stroke={C.blue} strokeWidth={2} />
      <T x={185} y={142} size={10} fill={C.blue}>1 m</T>
      <T x={160} y={164} size={11}>300 × 2 = 600 × 1 → balanced</T>
      <T x={160} y={14} size={11}>moment = force × distance from pivot</T>
    </Svg>
  );
}

// ---------- energy ----------

function EnergyStores() {
  return (
    <Tiles
      label="Energy stores"
      cols={4}
      items={[
        { e: '🏎️', title: 'Kinetic', sub: 'moving' },
        { e: '🏔️', title: 'Gravitational', sub: 'raised up' },
        { e: '🏹', title: 'Elastic', sub: 'stretched' },
        { e: '🔥', title: 'Thermal', sub: 'hot' },
        { e: '🔋', title: 'Chemical', sub: 'food, fuel, batteries' },
        { e: '☢️', title: 'Nuclear', sub: 'atoms' },
        { e: '🧲', title: 'Magnetic', sub: 'magnets' },
        { e: '⚡', title: 'Electrostatic', sub: 'charges' },
      ]}
    />
  );
}

function Sankey() {
  return (
    <Svg h={170} label="Sankey diagram for a bulb: 100 J in, 20 J useful light, 80 J wasted as heat; efficiency 20%">
      <rect x={10} y={30} width={130} height={100} fill={C.purple} />
      <T x={70} y={80} size={13} fill="#fff">100 J in</T>
      <path d="M140 30 L300 30 L300 50 L140 50 Z" fill={C.gold} />
      <T x={230} y={40} size={11}>20 J light (useful)</T>
      <path d="M140 50 L140 130 Q200 130 220 160 L262 160 Q230 100 190 50 Z" fill="#f4a4a4" />
      <T x={230} y={110} size={11} fill="#a12a2a" anchor="start">80 J</T>
      <T x={230} y={124} size={10} fill="#a12a2a" anchor="start">heat (wasted)</T>
      <rect x={10} y={140} width={120} height={26} rx={8} fill={C.greenSoft} />
      <T x={70} y={153} size={11} fill="#178a60">20 ÷ 100 = 20%</T>
    </Svg>
  );
}

function EnergyBill() {
  return (
    <Svg h={160} label="Energy in kilowatt-hours equals power in kilowatts times hours; cost equals kilowatt-hours times price">
      <E e="♨️" x={36} y={44} size={44} />
      <T x={80} y={34} size={12} anchor="start">2 kW heater for 3 hours</T>
      <T x={80} y={54} size={12} anchor="start" fill={C.muted}>2 × 3 = 6 kWh</T>
      <E e="💷" x={36} y={110} size={40} />
      <T x={80} y={100} size={12} anchor="start">at 30p per kWh</T>
      <T x={80} y={120} size={12} anchor="start" fill={C.muted}>6 × 30p = £1.80</T>
      <T x={160} y={152} size={10} weight={700} fill={C.muted}>kWh = kW × hours · cost = kWh × price</T>
    </Svg>
  );
}

function Resources() {
  return (
    <Svg label="Renewable energy resources won't run out; non-renewable resources will">
      <rect x={6} y={6} width={150} height={188} rx={12} fill={C.greenSoft} />
      <rect x={164} y={6} width={150} height={188} rx={12} fill="#ececf3" />
      <T x={81} y={24} size={12} fill="#178a60">Renewable</T>
      <T x={239} y={24} size={12} fill={C.muted}>Non-renewable</T>
      {['☀️ Solar', '🌬️ Wind', '💧 Hydro', '🌊 Tidal', '🌋 Geothermal', '🌳 Biomass'].map((r, i) => {
        const [e, t] = r.split(' ');
        return (
          <g key={t}>
            <E e={e} x={30} y={48 + i * 24} size={20} />
            <T x={46} y={48 + i * 24} size={11} anchor="start">{t}</T>
          </g>
        );
      })}
      {['🪨 Coal', '🛢️ Oil', '🔥 Gas', '☢️ Nuclear'].map((r, i) => {
        const [e, t] = r.split(' ');
        return (
          <g key={t}>
            <E e={e} x={188} y={48 + i * 24} size={20} />
            <T x={204} y={48 + i * 24} size={11} anchor="start">{t}</T>
          </g>
        );
      })}
      <T x={239} y={160} size={9.5} weight={700} fill={C.muted}>will run out;</T>
      <T x={239} y={173} size={9.5} weight={700} fill={C.muted}>fossil fuels release CO₂</T>
    </Svg>
  );
}

function HeatTransfer() {
  return (
    <Svg label="Heat transfer by conduction, convection and radiation">
      {/* conduction */}
      <rect x={8} y={20} width={96} height={120} rx={10} fill={C.soft} />
      <rect x={20} y={70} width={72} height={14} rx={4} fill="#b8bcc8" />
      <E e="🔥" x={24} y={104} size={24} />
      {[0, 1, 2, 3].map((i) => <circle key={i} className="p-vibrate" cx={34 + i * 16} cy={77} r={4} fill={C.red} style={{ opacity: 1 - i * 0.2, animationDelay: `${i * -0.1}s` }} />)}
      <Arrow x1={40} y1={56} x2={86} y2={56} color={C.red} width={2.5} />
      <T x={56} y={160} size={11}>Conduction</T>
      <T x={56} y={174} size={9} weight={700} fill={C.muted}>solids: particles</T>
      <T x={56} y={186} size={9} weight={700} fill={C.muted}>pass on vibrations</T>
      {/* convection */}
      <rect x={112} y={20} width={96} height={120} rx={10} fill={C.blueSoft} />
      <path d="M140 120 L140 40 Q160 26 180 40 L180 120 Q160 134 140 120" fill="none" stroke={C.red} strokeWidth={3} />
      <Arrow x1={140} y1={90} x2={140} y2={50} color={C.red} width={2.5} />
      <Arrow x1={180} y1={56} x2={180} y2={100} color={C.blue} width={2.5} />
      <E e="🔥" x={140} y={130} size={22} />
      <T x={160} y={160} size={11}>Convection</T>
      <T x={160} y={174} size={9} weight={700} fill={C.muted}>liquids and gases:</T>
      <T x={160} y={186} size={9} weight={700} fill={C.muted}>warm rises, cool sinks</T>
      {/* radiation */}
      <rect x={216} y={20} width={96} height={120} rx={10} fill={C.orangeSoft} />
      <E e="☀️" x={240} y={48} size={30} />
      {[0, 1, 2].map((i) => <path key={i} d={`M${252 + i * 4} ${66 + i * 14} q8 -6 14 0 q6 6 14 0 q6 -6 14 0`} fill="none" stroke={C.red} strokeWidth={2} />)}
      <T x={264} y={160} size={11}>Radiation</T>
      <T x={264} y={174} size={9} weight={700} fill={C.muted}>infrared waves,</T>
      <T x={264} y={186} size={9} weight={700} fill={C.muted}>even through space</T>
    </Svg>
  );
}

// ---------- electricity ----------

function CircuitSymbols() {
  const items = [
    { t: 'Cell', d: (x: number, y: number) => <><line x1={x - 22} y1={y} x2={x + 22} y2={y} {...W} /><Cell x={x} y={y} /></> },
    { t: 'Lamp', d: (x: number, y: number) => <><line x1={x - 22} y1={y} x2={x + 22} y2={y} {...W} /><Lamp x={x} y={y} on={false} /></> },
    { t: 'Switch (open)', d: (x: number, y: number) => <><line x1={x - 22} y1={y} x2={x - 12} y2={y} {...W} /><line x1={x + 12} y1={y} x2={x + 22} y2={y} {...W} /><Switch x={x} y={y} /></> },
    { t: 'Resistor', d: (x: number, y: number) => <><line x1={x - 22} y1={y} x2={x + 22} y2={y} {...W} /><Resistor x={x} y={y} /></> },
    { t: 'Ammeter', d: (x: number, y: number) => <><line x1={x - 22} y1={y} x2={x + 22} y2={y} {...W} /><Meter x={x} y={y} letter="A" colour={C.blue} /></> },
    { t: 'Voltmeter', d: (x: number, y: number) => <><line x1={x - 22} y1={y} x2={x + 22} y2={y} {...W} /><Meter x={x} y={y} letter="V" colour={C.purple} /></> },
  ];
  return (
    <Svg h={170} label="Circuit symbols: cell, lamp, switch, resistor, ammeter, voltmeter">
      {items.map((it, i) => {
        const x = 56 + (i % 3) * 104;
        const y = 40 + Math.floor(i / 3) * 76;
        return (
          <g key={it.t}>
            <rect x={x - 48} y={y - 30} width={96} height={68} rx={10} fill={C.soft} />
            {it.d(x, y)}
            <T x={x} y={y + 26} size={10.5}>{it.t}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function MeterCircuit() {
  return (
    <Svg label="An ammeter goes in series in the loop; a voltmeter goes in parallel across a component">
      <rect x={50} y={56} width={170} height={110} fill="none" stroke={C.ink} strokeWidth={2.5} />
      <Cell x={50} y={111} />
      <Meter x={135} y={166} letter="A" colour={C.blue} />
      <Lamp x={135} y={56} />
      <path d="M105 56 L105 22 L165 22 L165 56" fill="none" stroke={C.purple} strokeWidth={2.5} />
      <Meter x={135} y={22} letter="V" colour={C.purple} />
      <T x={135} y={190} size={10.5} fill={C.blue}>ammeter: in series (in the loop)</T>
      <T x={232} y={16} size={10} fill={C.purple} anchor="start">voltmeter:</T>
      <T x={232} y={30} size={10} fill={C.purple} anchor="start">in parallel,</T>
      <T x={232} y={44} size={10} fill={C.purple} anchor="start">across the lamp</T>
      <T x={26} y={111} size={10} fill={C.muted}>cell</T>
    </Svg>
  );
}

function SeriesCircuit() {
  return (
    <Svg label="Series circuit: one loop, the current is the same everywhere and the voltage is shared">
      <rect x={50} y={30} width={220} height={120} fill="none" stroke={C.ink} strokeWidth={2.5} />
      <Cell x={50} y={90} />
      <Lamp x={125} y={30} />
      <Lamp x={195} y={30} />
      <Meter x={160} y={150} letter="A" colour={C.blue} />
      <T x={160} y={128} size={10} fill={C.blue}>2 A everywhere</T>
      <T x={20} y={90} size={10} fill={C.muted}>6 V</T>
      <T x={125} y={58} size={10} fill={C.purple}>3 V</T>
      <T x={195} y={58} size={10} fill={C.purple}>3 V</T>
      <T x={160} y={180} size={10} weight={700} fill={C.muted}>one loop · current the same · voltage shared</T>
    </Svg>
  );
}

function ParallelCircuit() {
  return (
    <Svg label="Parallel circuit: branches; the current splits and each branch gets the full voltage">
      <path d="M60 40 L260 40 L260 160 L60 160 Z" fill="none" stroke={C.ink} strokeWidth={2.5} />
      <path d="M60 100 L260 100" fill="none" stroke={C.ink} strokeWidth={2.5} />
      <Cell x={60} y={130} />
      <Lamp x={160} y={40} />
      <Lamp x={160} y={100} />
      <Meter x={160} y={160} letter="A" colour={C.blue} />
      <T x={210} y={28} size={10} fill={C.blue}>2 A</T>
      <T x={210} y={88} size={10} fill={C.blue}>3 A</T>
      <T x={210} y={150} size={10} fill={C.blue}>5 A</T>
      <T x={110} y={28} size={10} fill={C.purple}>6 V</T>
      <T x={110} y={88} size={10} fill={C.purple}>6 V</T>
      <T x={30} y={130} size={10} fill={C.muted}>6 V</T>
      <T x={160} y={186} size={10} weight={700} fill={C.muted}>current splits · each branch gets the full voltage</T>
    </Svg>
  );
}

function VirTriangle() {
  return <FormulaTriangle top="V" left="I" right="R" label="V equals I times R" notes={['V = I × R', 'I = V ÷ R', 'R = V ÷ I']} />;
}

function MagnetField() {
  return (
    <Svg label="Magnetic field lines go from north to south around a bar magnet">
      {[30, 52, 74].map((r, i) => (
        <g key={r} fill="none" stroke={C.blue} strokeWidth={1.8} opacity={1 - i * 0.2}>
          <path d={`M120 ${100 - 8} C120 ${100 - 30 - r} 200 ${100 - 30 - r} 200 ${100 - 8}`} />
          <path d={`M120 ${100 + 8} C120 ${100 + 30 + r} 200 ${100 + 30 + r} 200 ${100 + 8}`} />
        </g>
      ))}
      <rect x={100} y={86} width={60} height={28} fill={C.red} />
      <rect x={160} y={86} width={60} height={28} fill={C.blue} />
      <T x={130} y={100} size={14} fill="#fff">N</T>
      <T x={190} y={100} size={14} fill="#fff">S</T>
      <Arrow x1={152} y1={37} x2={170} y2={37} color={C.blue} width={2} />
      <Arrow x1={152} y1={163} x2={170} y2={163} color={C.blue} width={2} />
      <T x={46} y={36} size={10} weight={700} fill={C.muted}>N → S outside</T>
      <T x={278} y={70} size={10.5}>like poles</T>
      <T x={278} y={84} size={10.5} fill={C.red}>repel</T>
      <T x={278} y={118} size={10.5}>opposite</T>
      <T x={278} y={132} size={10.5} fill={C.green}>attract</T>
    </Svg>
  );
}

function Electromagnet() {
  return (
    <Svg label="An electromagnet: a coil of wire around an iron core; more turns, more current or an iron core make it stronger">
      <rect x={70} y={70} width={160} height={30} rx={4} fill="#9ca3af" />
      <T x={150} y={124} size={10} fill={C.muted}>iron core</T>
      {Array.from({ length: 9 }, (_, i) => <ellipse key={i} cx={86 + i * 16} cy={85} rx={6} ry={20} fill="none" stroke="#c2410c" strokeWidth={3} />)}
      <path d="M86 105 L86 160 L130 160 M170 160 L214 160 L214 105" fill="none" stroke="#c2410c" strokeWidth={2.5} />
      <Cell x={150} y={160} vertical={false} />
      <E e="📎" x={268} y={86} size={28} />
      <T x={150} y={20} size={11}>Make it stronger:</T>
      <T x={150} y={38} size={10} weight={700} fill={C.muted}>more turns · more current · iron core</T>
    </Svg>
  );
}

// ---------- waves ----------

function Longitudinal() {
  const xs = [20, 26, 32, 38, 56, 74, 92, 98, 104, 110, 128, 146, 164, 170, 176, 182, 200, 218, 236, 242, 248, 254, 272, 290, 308];
  return (
    <Svg h={150} label="Sound is a longitudinal wave: particles vibrate back and forth in the direction the wave travels">
      <E e="🔊" x={14} y={20} size={24} />
      {xs.map((x) => <line key={x} x1={x} y1={44} x2={x} y2={100} stroke={C.purple} strokeWidth={2.5} />)}
      <T x={35} y={116} size={9.5} fill={C.muted}>squashed</T>
      <T x={74} y={116} size={9.5} fill={C.muted}>spread</T>
      <Arrow x1={110} y1={130} x2={240} y2={130} color={C.green} width={2.5} />
      <T x={175} y={144} size={9.5} fill={C.green}>wave travels this way</T>
      <T x={180} y={22} size={10} weight={700} fill={C.muted}>needs particles, so no sound in space</T>
    </Svg>
  );
}

function SoundWaves() {
  const wave = (amp: number, cycles: number, y: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= 120; i++) {
      const x = 20 + i * 1.15;
      pts.push(`${x},${y - amp * Math.sin((i / 120) * cycles * Math.PI * 2)}`);
    }
    return pts.join(' ');
  };
  return (
    <Svg label="Bigger amplitude means louder; higher frequency means higher pitch">
      <T x={80} y={12} size={11}>Quiet</T>
      <polyline points={wave(10, 2, 48)} fill="none" stroke={C.blue} strokeWidth={2.5} />
      <T x={240} y={12} size={11}>Loud</T>
      <g transform="translate(160 0)"><polyline points={wave(30, 2, 48)} fill="none" stroke={C.red} strokeWidth={2.5} /></g>
      <T x={80} y={108} size={11}>Low pitch</T>
      <polyline points={wave(20, 1.5, 148)} fill="none" stroke={C.blue} strokeWidth={2.5} />
      <T x={240} y={108} size={11}>High pitch</T>
      <g transform="translate(160 0)"><polyline points={wave(20, 5, 148)} fill="none" stroke={C.purple} strokeWidth={2.5} /></g>
      <T x={160} y={92} size={9.5} weight={700} fill={C.muted}>bigger amplitude → louder</T>
      <T x={160} y={190} size={9.5} weight={700} fill={C.muted}>higher frequency (Hz) → higher pitch</T>
    </Svg>
  );
}

function Reflection() {
  return (
    <Svg label="Law of reflection: the angle of incidence equals the angle of reflection, measured from the normal">
      <rect x={30} y={150} width={260} height={10} fill="#cfe9ff" stroke="#6fb6ea" />
      {Array.from({ length: 13 }, (_, i) => <line key={i} x1={36 + i * 20} y1={160} x2={28 + i * 20} y2={170} stroke="#6fb6ea" strokeWidth={1.5} />)}
      <line x1={160} y1={150} x2={160} y2={20} stroke={C.muted} strokeWidth={1.5} strokeDasharray="5 4" />
      <T x={160} y={12} size={10} fill={C.muted}>normal</T>
      <Arrow x1={70} y1={40} x2={158} y2={148} color={C.gold} width={3.5} />
      <Arrow x1={162} y1={148} x2={250} y2={40} color={C.gold} width={3.5} />
      <path d="M160 110 A40 40 0 0 0 134 118" fill="none" stroke={C.red} strokeWidth={2} />
      <path d="M160 110 A40 40 0 0 1 186 118" fill="none" stroke={C.blue} strokeWidth={2} />
      <T x={138} y={100} size={11} fill={C.red}>i</T>
      <T x={182} y={100} size={11} fill={C.blue}>r</T>
      <T x={160} y={186} size={11}>angle i = angle r</T>
      <T x={56} y={30} size={9.5} fill={C.muted}>incident ray</T>
      <T x={268} y={30} size={9.5} fill={C.muted}>reflected ray</T>
    </Svg>
  );
}

function Refraction() {
  return (
    <Svg label="Refraction: light slows down and bends towards the normal when it enters glass">
      <rect x={90} y={70} width={140} height={90} fill="#dcf0ff" stroke="#6fb6ea" strokeWidth={2} opacity={0.9} />
      <T x={210} y={150} size={10} fill="#3b7fb5">glass</T>
      <line x1={130} y1={20} x2={130} y2={130} stroke={C.muted} strokeWidth={1.5} strokeDasharray="5 4" />
      <Arrow x1={70} y1={20} x2={129} y2={69} color={C.gold} width={3.5} />
      <line x1={130} y1={70} x2={160} y2={158} stroke={C.gold} strokeWidth={3.5} />
      <Arrow x1={160} y1={160} x2={220} y2={196} color={C.gold} width={3.5} />
      <T x={250} y={50} size={10.5} anchor="middle">air → glass:</T>
      <T x={250} y={64} size={10.5} anchor="middle" fill={C.blue}>slows down,</T>
      <T x={250} y={78} size={10.5} anchor="middle" fill={C.blue}>bends towards</T>
      <T x={250} y={92} size={10.5} anchor="middle" fill={C.blue}>the normal</T>
      <T x={150} y={14} size={10} fill={C.muted}>normal</T>
    </Svg>
  );
}

function Prism() {
  const colours = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#4f46e5', '#8b5cf6'];
  const names = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
  return (
    <Svg label="A prism splits white light into a spectrum: red, orange, yellow, green, blue, indigo, violet">
      <line x1={10} y1={110} x2={110} y2={100} stroke="#fff" strokeWidth={6} />
      <line x1={10} y1={110} x2={110} y2={100} stroke={C.muted} strokeWidth={1} />
      <T x={40} y={92} size={10} fill={C.muted}>white light</T>
      <path d="M150 30 L210 150 L90 150 Z" fill="#e8f4ff" stroke="#6fb6ea" strokeWidth={2.5} opacity={0.9} />
      {colours.map((c, i) => (
        <g key={c}>
          <line x1={176} y1={98 + i * 2} x2={300} y2={60 + i * 16} stroke={c} strokeWidth={4} />
          <T x={304} y={60 + i * 16} size={9} anchor="start" fill={C.ink}>{''}</T>
        </g>
      ))}
      <T x={200} y={180} size={10} weight={800} fill={C.ink}>{names.map((n) => n[0]).join(' ')}</T>
      <T x={200} y={194} size={9} weight={700} fill={C.muted}>Richard Of York Gave Battle In Vain</T>
    </Svg>
  );
}

// ---------- space ----------

function Seasons() {
  const Earth = ({ x }: { x: number }) => (
    <g>
      <circle cx={x} cy={100} r={26} fill="#5aa9e6" />
      {/* the axis always points the same way in space */}
      <line x1={x - 12} y1={64} x2={x + 12} y2={136} stroke={C.ink} strokeWidth={2.5} />
      <circle cx={x - 9} cy={82} r={4} fill={C.red} />
    </g>
  );
  return (
    <Svg label="Seasons happen because Earth's axis is tilted: in UK summer the northern hemisphere tilts towards the Sun">
      <ellipse cx={160} cy={100} rx={130} ry={40} fill="none" stroke={C.line} strokeWidth={2} strokeDasharray="5 4" />
      <E e="☀️" x={160} y={100} size={50} />
      <Earth x={40} />
      <Earth x={280} />
      <T x={40} y={160} size={11}>UK winter</T>
      <T x={40} y={174} size={9} weight={700} fill={C.muted}>tilted away</T>
      <T x={280} y={160} size={11}>UK summer</T>
      <T x={280} y={174} size={9} weight={700} fill={C.muted}>tilted towards</T>
      <T x={160} y={190} size={9.5} weight={700} fill={C.muted}>● = UK · it’s the tilt, not the distance</T>
    </Svg>
  );
}

function SolarSystem() {
  const planets = [
    { n: 'Mercury', r: 4, c: '#a8a29e' },
    { n: 'Venus', r: 6, c: '#fbbf24' },
    { n: 'Earth', r: 6.5, c: '#3b82f6' },
    { n: 'Mars', r: 5, c: '#ef4444' },
    { n: 'Jupiter', r: 15, c: '#d6a77a' },
    { n: 'Saturn', r: 12, c: '#e8cf8f' },
    { n: 'Uranus', r: 9, c: '#7dd3fc' },
    { n: 'Neptune', r: 9, c: '#4f46e5' },
  ];
  let x = 44;
  return (
    <Svg w={340} h={150} label="The planets in order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune">
      <circle cx={-10} cy={70} r={42} fill="#fcd34d" />
      {planets.map((p, i) => {
        x += i === 0 ? 0 : planets[i - 1].r + p.r + 16;
        const cx = x;
        return (
          <g key={p.n}>
            {p.n === 'Saturn' && <ellipse cx={cx} cy={70} rx={20} ry={5} fill="none" stroke="#b9975b" strokeWidth={2} />}
            <circle cx={cx} cy={70} r={p.r} fill={p.c} />
            <T x={cx} y={i % 2 ? 108 : 40} size={9.5}>{p.n}</T>
          </g>
        );
      })}
      <T x={170} y={132} size={9.5} weight={700} fill={C.muted}>My Very Easy Method Just Speeds Up Naming</T>
      <T x={100} y={146} size={9} weight={700} fill={C.muted}>rocky</T>
      <T x={260} y={146} size={9} weight={700} fill={C.muted}>gas giants</T>
    </Svg>
  );
}

function MoonPhases() {
  const phases = [
    { t: 'New', lit: 0 },
    { t: 'Crescent', lit: 0.25 },
    { t: 'Half', lit: 0.5 },
    { t: 'Gibbous', lit: 0.75 },
    { t: 'Full', lit: 1 },
  ];
  return (
    <Svg h={110} label="Moon phases: new, crescent, half, gibbous, full">
      {phases.map((p, i) => {
        const x = 36 + i * 62;
        const r = 20;
        // lit part on the right: draw dark disc, then lit shape
        const k = Math.abs(1 - 2 * p.lit) * r;
        const lit = p.lit === 0 ? null : p.lit === 1 ? <circle cx={x} cy={44} r={r} fill="#fef3c7" /> : (
          <path d={`M${x} ${44 - r} A${r} ${r} 0 0 1 ${x} ${44 + r} A${k} ${r} 0 0 ${p.lit > 0.5 ? 1 : 0} ${x} ${44 - r}`} fill="#fef3c7" />
        );
        return (
          <g key={p.t}>
            <circle cx={x} cy={44} r={r} fill="#374151" />
            {lit}
            <T x={x} y={82} size={10}>{p.t}</T>
          </g>
        );
      })}
      <T x={160} y={102} size={9.5} weight={700} fill={C.muted}>we see different amounts of the Moon’s sunlit half</T>
    </Svg>
  );
}

export const physicsDiagrams: Record<string, () => JSX.Element> = {
  'force-types': ForceTypes,
  'mass-weight': MassWeight,
  resultant: Resultant,
  skydiver: Skydiver,
  'speed-triangle': SpeedTriangle,
  'dt-graph': DtGraph,
  pressure: Pressure,
  springs: Springs,
  moments: Moments,
  'energy-stores': EnergyStores,
  sankey: Sankey,
  'energy-bill': EnergyBill,
  resources: Resources,
  'heat-transfer': HeatTransfer,
  'circuit-symbols': CircuitSymbols,
  'meter-circuit': MeterCircuit,
  'series-circuit': SeriesCircuit,
  'parallel-circuit': ParallelCircuit,
  'vir-triangle': VirTriangle,
  'magnet-field': MagnetField,
  electromagnet: Electromagnet,
  longitudinal: Longitudinal,
  'sound-waves': SoundWaves,
  reflection: Reflection,
  refraction: Refraction,
  prism: Prism,
  seasons: Seasons,
  'solar-system': SolarSystem,
  'moon-phases': MoonPhases,
};

