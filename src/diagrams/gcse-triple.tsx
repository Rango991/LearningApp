import { Arrow, C, Chain, E, Label, Svg, T, Tiles, TwoCol } from './kit';

// GCSE Triple Science (AQA) diagrams: the separate-science-only topics.

function Hybridoma() {
  return (
    <Chain
      label="Making monoclonal antibodies: a mouse makes lymphocytes that produce one antibody; a lymphocyte is fused with a tumour cell to make a hybridoma; the hybridoma divides quickly; its clones make identical antibodies; these are used in tests and treatments"
      steps={[
        { t: 'Mouse lymphocyte: makes one antibody', fill: C.blueSoft },
        { t: 'Fused with a tumour cell', fill: C.purpleSoft },
        { t: 'Hybridoma cell divides quickly', fill: C.greenSoft },
        { t: 'Clones make identical antibodies', fill: C.goldSoft },
        { t: 'Used in tests and treatments', fill: C.orangeSoft },
      ]}
    />
  );
}

function PlantDefences() {
  return (
    <Tiles
      label="Plant defences: physical, such as cell walls, a waxy cuticle and bark; chemical, such as poisons and antibacterial chemicals; mechanical, such as thorns and drooping leaves"
      items={[
        { e: '🧱', title: 'Physical', sub: 'cell walls, waxy cuticle, bark', colour: C.goldSoft },
        { e: '🧪', title: 'Chemical', sub: 'poisons, antibacterials', colour: C.purpleSoft },
        { e: '🌵', title: 'Mechanical', sub: 'thorns, drooping leaves', colour: C.greenSoft },
      ]}
      h={150}
    />
  );
}

function BrainRegions() {
  return (
    <Svg h={200} label="Regions of the brain: the cerebral cortex controls thinking, memory and language; the cerebellum controls balance and coordination; the medulla controls heartbeat and breathing">
      <ellipse cx={120} cy={80} rx={104} ry={64} fill="#ffc9d6" stroke={C.pink} strokeWidth={2.5} />
      <path d="M 60 60 C 80 40 100 70 120 50 C 140 30 160 70 180 52" fill="none" stroke={C.pink} strokeWidth={1.5} />
      <path d="M 50 95 C 75 80 95 110 125 92 C 150 78 170 108 195 92" fill="none" stroke={C.pink} strokeWidth={1.5} />
      <ellipse cx={176} cy={146} rx={36} ry={20} fill={C.purpleSoft} stroke={C.purple} strokeWidth={2.5} />
      <rect x={124} y={132} width={20} height={58} rx={8} fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <Label x={222} y={22} px={190} py={48}>Cerebral cortex</Label>
      <T x={226} y={37} size={9} weight={700} fill={C.muted} anchor="start">thinking, memory</T>
      <Label x={236} y={138} px={200} py={146}>Cerebellum</Label>
      <T x={240} y={153} size={9} weight={700} fill={C.muted} anchor="start">balance</T>
      <Label x={160} y={180} px={140} py={176}>Medulla</Label>
      <T x={164} y={195} size={9} weight={700} fill={C.muted} anchor="start">heartbeat, breathing</T>
    </Svg>
  );
}

function Thermoregulation() {
  return (
    <TwoCol
      label="Controlling body temperature. Too hot: sweating, vasodilation, more heat lost. Too cold: shivering, vasoconstriction, sweating stops"
      left={{ title: 'Too hot', sub: 'lose heat', colour: C.red, fill: C.redSoft, items: [['💦', 'Sweat'], ['🔴', 'Vasodilation'], ['🌡️', 'More heat lost']] }}
      right={{ title: 'Too cold', sub: 'keep heat', colour: C.blue, fill: C.blueSoft, items: [['🥶', 'Shiver'], ['🔵', 'Vasoconstriction'], ['🚫', 'Sweating stops']] }}
      footer="Controlled by the thermoregulatory centre in the brain"
    />
  );
}

function DnaPairs() {
  const pairs: [string, string][] = [['A', 'T'], ['C', 'G'], ['G', 'C'], ['T', 'A'], ['A', 'T']];
  const colour: Record<string, string> = { A: C.red, T: C.blue, C: C.green, G: C.gold };
  return (
    <Svg h={200} label="DNA is a double strand: two sugar-phosphate backbones joined by base pairs. A always pairs with T, and C always pairs with G">
      <line x1={70} y1={14} x2={70} y2={186} stroke={C.purple} strokeWidth={6} strokeLinecap="round" />
      <line x1={190} y1={14} x2={190} y2={186} stroke={C.purple} strokeWidth={6} strokeLinecap="round" />
      {pairs.map(([a, b], i) => {
        const y = 30 + i * 35;
        return (
          <g key={i}>
            <rect x={74} y={y - 11} width={54} height={22} rx={5} fill={colour[a]} />
            <rect x={132} y={y - 11} width={54} height={22} rx={5} fill={colour[b]} />
            <T x={101} y={y} size={13} fill="#fff">{a}</T>
            <T x={159} y={y} size={13} fill="#fff">{b}</T>
          </g>
        );
      })}
      <T x={256} y={60} size={11}>A pairs with T</T>
      <T x={256} y={84} size={11}>C pairs with G</T>
      <T x={256} y={130} size={9.5} weight={700} fill={C.purple}>sugar-phosphate</T>
      <T x={256} y={143} size={9.5} weight={700} fill={C.purple}>backbone</T>
    </Svg>
  );
}

function TransitionMetals() {
  return (
    <Tiles
      label="Transition metals: high melting points, coloured compounds, useful catalysts such as iron and nickel, and ions with different charges such as Fe 2+ and Fe 3+"
      cols={2}
      h={200}
      items={[
        { e: '🌡️', title: 'High melting points', sub: 'strong and dense', colour: C.redSoft },
        { e: '🎨', title: 'Coloured compounds', sub: 'e.g. blue copper sulfate', colour: C.blueSoft },
        { e: '⚙️', title: 'Catalysts', sub: 'iron, nickel', colour: C.goldSoft },
        { e: '➕', title: 'Different ions', sub: 'Fe²⁺ and Fe³⁺', colour: C.purpleSoft },
      ]}
    />
  );
}

function Titration() {
  return (
    <Svg h={200} label="Titration: acid is added from a burette into a conical flask containing alkali, measured with a pipette, and an indicator, on a white tile, until the indicator changes colour">
      <rect x={150} y={8} width={14} height={112} fill={C.blueSoft} stroke={C.muted} strokeWidth={1.5} />
      {[24, 44, 64, 84, 104].map((y) => <line key={y} x1={150} y1={y} x2={157} y2={y} stroke={C.muted} strokeWidth={1} />)}
      <rect x={146} y={120} width={22} height={6} fill={C.muted} />
      <line x1={157} y1={126} x2={157} y2={140} stroke={C.muted} strokeWidth={3} />
      <path d="M 148 146 L 148 156 L 120 186 L 194 186 L 166 156 L 166 146 Z" fill="#fff" stroke={C.muted} strokeWidth={2} />
      <path d="M 129 176 L 185 176 L 194 186 L 120 186 Z" fill={C.pink} fillOpacity={0.6} />
      <rect x={100} y={186} width={114} height={8} fill="#fff" stroke={C.line} strokeWidth={1.5} />
      <Label x={196} y={30} px={164} py={40}>Burette: acid</Label>
      <Label x={206} y={150} px={180} py={170}>Alkali + indicator</Label>
      <T x={210} y={166} size={9} weight={700} fill={C.muted} anchor="start">(measured by pipette)</T>
      <Label x={94} y={190} px={104} py={190} anchor="end">White tile</Label>
      <T x={22} y={60} size={10} anchor="start" fill={C.purple}>Add acid drop by</T>
      <T x={22} y={74} size={10} anchor="start" fill={C.purple}>drop until the colour</T>
      <T x={22} y={88} size={10} anchor="start" fill={C.purple}>changes: the end point</T>
    </Svg>
  );
}

function FuelCell() {
  return (
    <Svg h={190} label="A hydrogen fuel cell: hydrogen and oxygen go in, electricity comes out, and the only waste product is water">
      <rect x={110} y={60} width={100} height={70} rx={14} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <T x={160} y={88} size={12}>Fuel cell</T>
      <T x={160} y={106} size={9.5} weight={700} fill={C.muted}>2H₂ + O₂ → 2H₂O</T>
      <Arrow x1={30} y1={95} x2={106} y2={95} color={C.ink} width={3} />
      <T x={52} y={80} size={11}>hydrogen</T>
      <Arrow x1={290} y1={95} x2={214} y2={95} color={C.ink} width={3} />
      <T x={268} y={80} size={11}>oxygen</T>
      <Arrow x1={160} y1={56} x2={160} y2={18} color={C.gold} width={3} />
      <E e="⚡" x={186} y={30} size={26} />
      <T x={132} y={30} size={11} anchor="end" fill={C.brown}>electricity</T>
      <Arrow x1={160} y1={134} x2={160} y2={168} color={C.blue} width={3} />
      <E e="💧" x={186} y={162} size={24} />
      <T x={132} y={162} size={11} anchor="end" fill={C.blue}>only water</T>
    </Svg>
  );
}

function FlameTests() {
  const flames = [
    { ion: 'Lithium', c: '#d7263d', t: 'crimson' },
    { ion: 'Sodium', c: '#ffcc00', t: 'yellow' },
    { ion: 'Potassium', c: '#c39bd3', t: 'lilac' },
    { ion: 'Calcium', c: '#ff6b2c', t: 'orange-red' },
    { ion: 'Copper', c: '#27ae60', t: 'green' },
  ];
  return (
    <Svg h={190} label="Flame test colours: lithium crimson, sodium yellow, potassium lilac, calcium orange-red, copper green">
      {flames.map((f, i) => {
        const x = 34 + i * 63;
        return (
          <g key={f.ion}>
            <path d={`M ${x - 18} 120 C ${x - 26} 80, ${x - 6} 60, ${x} 24 C ${x + 6} 60, ${x + 26} 80, ${x + 18} 120 Z`} fill={f.c} />
            <path d={`M ${x - 8} 120 C ${x - 12} 100, ${x - 2} 90, ${x} 74 C ${x + 2} 90, ${x + 12} 100, ${x + 8} 120 Z`} fill="#fff" fillOpacity={0.45} />
            <rect x={x - 8} y={120} width={16} height={16} fill={C.muted} />
            <T x={x} y={154} size={11}>{f.ion}</T>
            <T x={x} y={170} size={9.5} weight={700} fill={C.muted}>{f.t}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function PolymerTypes() {
  return (
    <TwoCol
      label="Addition polymers form from alkene monomers with only one product, for example poly(ethene). Condensation polymers form from two different monomers, losing water, for example polyester"
      left={{ title: 'Addition', sub: 'alkenes join', colour: C.blue, fill: C.blueSoft, items: [['🔗', 'Alkene monomers'], ['➕', 'One product only'], ['🛍️', 'e.g. poly(ethene)']] }}
      right={{ title: 'Condensation', sub: 'two kinds of monomer', colour: C.green, fill: C.greenSoft, items: [['🧩', 'Two monomers'], ['💧', 'Water lost'], ['👕', 'e.g. polyester']] }}
    />
  );
}

function Haber() {
  return (
    <Chain
      label="The Haber process: nitrogen from the air and hydrogen from natural gas are compressed to 200 atmospheres, heated to 450 degrees over an iron catalyst, cooled so ammonia liquefies and is removed, and unreacted gases are recycled"
      steps={[
        { t: 'N₂ (from air) + H₂ (from natural gas)', fill: C.blueSoft },
        { t: 'Compressed to 200 atmospheres', fill: C.purpleSoft },
        { t: '450 °C over an iron catalyst', fill: C.orangeSoft },
        { t: 'Cooled: liquid ammonia removed', fill: C.greenSoft },
        { t: 'Unreacted gases recycled', fill: C.goldSoft },
      ]}
    />
  );
}

function StarLife() {
  const Pill = ({ x, y, t, fill }: { x: number; y: number; t: string; fill: string }) => (
    <g>
      <rect x={x - 70} y={y - 12} width={140} height={24} rx={12} fill={fill} />
      <T x={x} y={y} size={t.length > 18 ? 9.5 : 10.5}>{t}</T>
    </g>
  );
  return (
    <Svg h={226} label="Life cycle of stars: nebula, protostar, main sequence star. A star like the Sun then becomes a red giant, white dwarf and black dwarf. A much bigger star becomes a red supergiant, then a supernova, leaving a neutron star or black hole">
      <Pill x={160} y={16} t="Nebula" fill={C.purpleSoft} />
      <Pill x={160} y={50} t="Protostar" fill={C.orangeSoft} />
      <Pill x={160} y={84} t="Main sequence" fill={C.goldSoft} />
      <line x1={160} y1={28} x2={160} y2={38} stroke={C.muted} strokeWidth={2} />
      <line x1={160} y1={62} x2={160} y2={72} stroke={C.muted} strokeWidth={2} />
      <line x1={160} y1={96} x2={80} y2={128} stroke={C.muted} strokeWidth={2} />
      <line x1={160} y1={96} x2={240} y2={128} stroke={C.muted} strokeWidth={2} />
      <T x={92} y={108} size={9} weight={700} fill={C.muted}>like the Sun</T>
      <T x={232} y={108} size={9} weight={700} fill={C.muted}>much bigger</T>
      <Pill x={80} y={140} t="Red giant" fill={C.redSoft} />
      <Pill x={80} y={174} t="White dwarf" fill={C.soft} />
      <Pill x={80} y={208} t="Black dwarf" fill="#d6d2df" />
      <Pill x={240} y={140} t="Red supergiant" fill={C.redSoft} />
      <Pill x={240} y={174} t="Supernova" fill={C.orangeSoft} />
      <Pill x={240} y={208} t="Neutron star / black hole" fill="#d6d2df" />
      {[152, 186].map((y) => (
        <g key={y}>
          <line x1={80} y1={y} x2={80} y2={y + 10} stroke={C.muted} strokeWidth={2} />
          <line x1={240} y1={y} x2={240} y2={y + 10} stroke={C.muted} strokeWidth={2} />
        </g>
      ))}
    </Svg>
  );
}

function RedShift() {
  const lines = [70, 125, 150, 205];
  const Spectrum = ({ y, shift, label }: { y: number; shift: number; label: string }) => (
    <g>
      <T x={20} y={y - 12} size={11} anchor="start">{label}</T>
      <rect x={20} y={y} width={280} height={34} rx={4} fill="url(#rs-spectrum)" />
      {lines.map((x) => <line key={x} x1={x + shift} y1={y} x2={x + shift} y2={y + 34} stroke={C.ink} strokeWidth={3} />)}
    </g>
  );
  return (
    <Svg h={190} label="Red-shift: the dark lines in light from a distant galaxy are shifted towards the red end of the spectrum, compared with the same lines from the Sun">
      <defs>
        <linearGradient id="rs-spectrum" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8a2be2" />
          <stop offset="0.2" stopColor="#3f6ad8" />
          <stop offset="0.4" stopColor="#27ae60" />
          <stop offset="0.6" stopColor="#ffd000" />
          <stop offset="0.8" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#d7263d" />
        </linearGradient>
      </defs>
      <Spectrum y={30} shift={0} label="Light from the Sun" />
      <Spectrum y={108} shift={34} label="Light from a distant galaxy" />
      <Arrow x1={150} y1={164} x2={260} y2={164} color={C.red} width={2.5} />
      <T x={120} y={164} size={10.5} fill={C.red} anchor="end">shifted to red</T>
      <T x={20} y={182} size={9} weight={700} fill={C.muted} anchor="start">violet</T>
      <T x={300} y={182} size={9} weight={700} fill={C.muted} anchor="end">red</T>
    </Svg>
  );
}

function ConvexLens() {
  return (
    <Svg h={180} label="A convex lens: parallel rays of light are refracted and meet at the principal focus, F">
      <line x1={10} y1={90} x2={310} y2={90} stroke={C.line} strokeWidth={1.5} strokeDasharray="5 4" />
      <ellipse cx={150} cy={90} rx={14} ry={72} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      {[40, 90, 140].map((y) => (
        <g key={y}>
          <line x1={20} y1={y} x2={150} y2={y} stroke={C.orange} strokeWidth={2.5} />
          <Arrow x1={150} y1={y} x2={238} y2={90} color={C.orange} width={2.5} />
        </g>
      ))}
      <circle cx={240} cy={90} r={4} fill={C.ink} />
      <T x={240} y={108} size={12}>F</T>
      <circle cx={60} cy={90} r={4} fill={C.ink} />
      <T x={60} y={108} size={12}>F</T>
      <T x={150} y={172} size={10.5} weight={700} fill={C.muted}>convex (converging) lens</T>
      <T x={272} y={70} size={9.5} weight={700} fill={C.muted}>principal</T>
      <T x={272} y={82} size={9.5} weight={700} fill={C.muted}>focus</T>
    </Svg>
  );
}

function MomentsBalance() {
  return (
    <Svg h={180} label="A balanced see-saw: 20 newtons at 1 metre on the left makes 20 newton metres anticlockwise; 40 newtons at 0.5 metres on the right makes 20 newton metres clockwise">
      <polygon points="160,140 146,170 174,170" fill={C.muted} />
      <rect x={30} y={132} width={260} height={8} rx={3} fill={C.brown} />
      <rect x={42} y={104} width={36} height={28} rx={4} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={60} y={118} size={11}>20 N</T>
      <rect x={192} y={98} width={36} height={34} rx={4} fill={C.orangeSoft} stroke={C.orange} strokeWidth={2} />
      <T x={210} y={115} size={11}>40 N</T>
      <line x1={60} y1={150} x2={160} y2={150} stroke={C.blue} strokeWidth={1.5} />
      <T x={110} y={160} size={9.5} fill={C.blue}>1 m</T>
      <line x1={160} y1={150} x2={210} y2={150} stroke={C.orange} strokeWidth={1.5} />
      <T x={185} y={160} size={9.5} fill={C.orange}>0.5 m</T>
      <T x={76} y={28} size={11} fill={C.blue}>20 N × 1 m</T>
      <T x={76} y={44} size={11} fill={C.blue}>= 20 N m</T>
      <T x={244} y={28} size={11} fill={C.orange}>40 N × 0.5 m</T>
      <T x={244} y={44} size={11} fill={C.orange}>= 20 N m</T>
      <T x={160} y={74} size={12} fill={C.green}>balanced</T>
    </Svg>
  );
}

function Transformer() {
  const coil = (x: number, turns: number) =>
    Array.from({ length: turns }, (_, i) => {
      const y = 62 + (i * 76) / (turns - 1);
      return <ellipse key={i} cx={x} cy={y} rx={20} ry={4} fill="none" stroke={C.orange} strokeWidth={2.5} />;
    });
  return (
    <Svg h={200} label="A transformer: a primary coil and a secondary coil wound on an iron core. The voltage ratio equals the turns ratio: Vp over Vs equals np over ns. More turns on the secondary steps the voltage up">
      <path d="M 100 40 H 220 V 160 H 100 Z M 128 68 V 132 H 192 V 68 Z" fill="#b9b3c9" fillRule="evenodd" />
      {coil(114, 4)}
      {coil(206, 8)}
      <T x={160} y={20} size={13}>Vp ÷ Vs = np ÷ ns</T>
      <T x={52} y={86} size={10.5}>Primary</T>
      <T x={52} y={102} size={9} weight={700} fill={C.muted}>fewer turns</T>
      <T x={268} y={86} size={10.5}>Secondary</T>
      <T x={268} y={102} size={9} weight={700} fill={C.muted}>more turns</T>
      <T x={160} y={178} size={10} weight={700} fill={C.muted}>iron core</T>
      <T x={160} y={194} size={9.5} fill={C.purple}>this one steps the voltage up</T>
    </Svg>
  );
}

function SeismicWaves() {
  const cx = 108;
  const cy = 104;
  const r = 84;
  const at = (deg: number, rad = r) => [cx + rad * Math.sin((deg * Math.PI) / 180), cy - rad * Math.cos((deg * Math.PI) / 180)];
  const arc = (from: number, to: number) => {
    const a = at(from);
    const b = at(to);
    return `M ${a[0].toFixed(1)} ${a[1].toFixed(1)} A ${r} ${r} 0 0 1 ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  };
  const q = at(0);
  return (
    <Svg h={200} label="Seismic waves from an earthquake: P-waves travel through the whole Earth, including the liquid outer core. S-waves cannot travel through liquid, so there is an S-wave shadow zone on the far side">
      <circle cx={cx} cy={cy} r={r} fill="#e8d8c2" stroke={C.brown} strokeWidth={2} />
      <circle cx={cx} cy={cy} r={42} fill={C.orange} fillOpacity={0.55} />
      <circle cx={cx} cy={cy} r={18} fill={C.gold} />
      <path d={arc(105, 255)} fill="none" stroke={C.red} strokeOpacity={0.35} strokeWidth={10} />
      {[45, 80, -45, -80].map((d) => {
        const p = at(d);
        return <line key={d} x1={q[0]} y1={q[1]} x2={p[0]} y2={p[1]} stroke={C.red} strokeWidth={2} />;
      })}
      {[160, 200, 180].map((d) => {
        const p = at(d);
        return <line key={d} x1={q[0]} y1={q[1]} x2={p[0]} y2={p[1]} stroke={C.blue} strokeWidth={2} strokeDasharray="5 3" />;
      })}
      <polygon points={`${q[0]},${q[1] - 9} ${q[0] + 3},${q[1] - 3} ${q[0] + 9},${q[1] - 3} ${q[0] + 4},${q[1] + 1} ${q[0] + 6},${q[1] + 8} ${q[0]},${q[1] + 4} ${q[0] - 6},${q[1] + 8} ${q[0] - 4},${q[1] + 1} ${q[0] - 9},${q[1] - 3} ${q[0] - 3},${q[1] - 3}`} fill={C.red} />
      <T x={cx} y={8} size={10} fill={C.red}>earthquake</T>
      <line x1={204} y1={40} x2={224} y2={40} stroke={C.blue} strokeWidth={2} strokeDasharray="5 3" />
      <T x={230} y={40} size={10} anchor="start">P-waves</T>
      <T x={230} y={53} size={8.5} weight={700} fill={C.muted} anchor="start">through liquids too</T>
      <line x1={204} y1={78} x2={224} y2={78} stroke={C.red} strokeWidth={2} />
      <T x={230} y={78} size={10} anchor="start">S-waves</T>
      <T x={230} y={91} size={8.5} weight={700} fill={C.muted} anchor="start">solids only</T>
      <Label x={190} y={184} px={160} py={176}>S-wave shadow zone</Label>
      <T x={cx} y={cy + 2} size={8} weight={700}>liquid outer core</T>
    </Svg>
  );
}

export const tripleDiagrams: Record<string, () => JSX.Element> = {
  hybridoma: Hybridoma,
  'plant-defences': PlantDefences,
  'brain-regions': BrainRegions,
  thermoregulation: Thermoregulation,
  'dna-pairs': DnaPairs,
  'transition-metals': TransitionMetals,
  titration: Titration,
  'fuel-cell': FuelCell,
  'flame-tests': FlameTests,
  'polymer-types': PolymerTypes,
  haber: Haber,
  'star-life': StarLife,
  'red-shift': RedShift,
  'convex-lens': ConvexLens,
  'moments-balance': MomentsBalance,
  transformer: Transformer,
  'seismic-waves': SeismicWaves,
};
