import { Arrow, Box, C, CurveArrow, E, Label, Svg, T, Tiles } from './kit';

// Chemistry lesson diagrams.

function Particles() {
  const solid = Array.from({ length: 16 }, (_, i) => [24 + (i % 4) * 16, 70 + Math.floor(i / 4) * 16]);
  const liquid = [[124, 118], [140, 116], [156, 120], [172, 117], [128, 102], [146, 101], [163, 104], [178, 100], [134, 86], [152, 88], [170, 85], [186, 112]];
  const gas = [[244, 50], [286, 60], [258, 92], [290, 112], [240, 118], [272, 80]];
  return (
    <Svg label="Particles in a solid vibrate in a fixed pattern, in a liquid slide past each other, in a gas move fast and far apart">
      {[{ x: 8, t: 'Solid' }, { x: 112, t: 'Liquid' }, { x: 216, t: 'Gas' }].map((b) => (
        <g key={b.t}>
          <rect x={b.x} y={24} width={96} height={112} rx={8} fill="#fbfaff" stroke={C.line} strokeWidth={2} />
          <T x={b.x + 48} y={150} size={13}>{b.t}</T>
        </g>
      ))}
      {solid.map(([x, y], i) => <circle key={i} className="p-vibrate" cx={x + 8} cy={y} r={7.5} fill={C.blue} style={{ animationDelay: `${(i % 5) * -0.13}s` }} />)}
      {liquid.map(([x, y], i) => <circle key={i} className="p-slide" cx={x} cy={y} r={7.5} fill={C.purple} style={{ animationDelay: `${i * -0.37}s` }} />)}
      {gas.map(([x, y], i) => <circle key={i} className="p-fly" cx={x} cy={y} r={7.5} fill={C.orange} style={{ animationDelay: `${i * -0.6}s` }} />)}
      <T x={56} y={170} size={9.5} weight={700} fill={C.muted}>fixed shape</T>
      <T x={56} y={183} size={9.5} weight={700} fill={C.muted}>vibrate on the spot</T>
      <T x={160} y={170} size={9.5} weight={700} fill={C.muted}>flows</T>
      <T x={160} y={183} size={9.5} weight={700} fill={C.muted}>slide past each other</T>
      <T x={264} y={170} size={9.5} weight={700} fill={C.muted}>fills any space</T>
      <T x={264} y={183} size={9.5} weight={700} fill={C.muted}>fast, far apart</T>
    </Svg>
  );
}

function StateChanges() {
  return (
    <Svg label="Changes of state: melting, freezing, evaporating, condensing and sublimation">
      <Box x={10} y={130} w={80} h={42} fill={C.blueSoft} stroke={C.blue}>Solid</Box>
      <Box x={120} y={20} w={80} h={42} fill={C.purpleSoft} stroke={C.purple}>Liquid</Box>
      <Box x={230} y={130} w={80} h={42} fill={C.orangeSoft} stroke={C.orange}>Gas</Box>
      <Arrow x1={60} y1={126} x2={120} y2={62} color={C.red} />
      <Arrow x1={130} y1={66} x2={70} y2={128} color={C.blue} />
      <T x={58} y={84} size={11} fill={C.red}>melting</T>
      <T x={118} y={110} size={11} fill={C.blue}>freezing</T>
      <Arrow x1={200} y1={62} x2={258} y2={126} color={C.red} />
      <Arrow x1={248} y1={128} x2={190} y2={66} color={C.blue} />
      <T x={262} y={84} size={11} fill={C.red}>evaporating</T>
      <T x={192} y={114} size={11} fill={C.blue}>condensing</T>
      <Arrow x1={94} y1={151} x2={226} y2={151} color={C.red} />
      <T x={160} y={142} size={11} fill={C.red}>sublimation</T>
      <T x={160} y={190} size={10} weight={700} fill={C.muted}>red = heating · blue = cooling</T>
    </Svg>
  );
}

function Dissolving() {
  return (
    <Svg h={170} label="Dissolving: solute plus solvent makes a solution, and mass is conserved">
      <Box x={6} y={16} w={80} h={88} fill={C.soft} />
      <E e="🧂" x={46} y={50} size={36} />
      <T x={46} y={82} size={11}>Solute</T>
      <T x={46} y={96} size={9.5} weight={700} fill={C.muted}>10 g salt</T>
      <T x={98} y={60} size={20} fill={C.muted}>+</T>
      <Box x={110} y={16} w={80} h={88} fill={C.blueSoft} />
      <E e="💧" x={150} y={50} size={36} />
      <T x={150} y={82} size={11}>Solvent</T>
      <T x={150} y={96} size={9.5} weight={700} fill={C.muted}>100 g water</T>
      <T x={202} y={60} size={20} fill={C.muted}>→</T>
      <Box x={214} y={16} w={100} h={88} fill={C.purpleSoft} />
      <E e="🫗" x={264} y={50} size={36} />
      <T x={264} y={82} size={11}>Solution</T>
      <T x={264} y={96} size={9.5} weight={700} fill={C.muted}>110 g</T>
      <rect x={30} y={122} width={260} height={36} rx={10} fill={C.greenSoft} stroke="#9ad9bf" strokeWidth={1.5} />
      <T x={160} y={140} size={11.5} fill="#178a60">The mass stays the same: nothing disappears!</T>
    </Svg>
  );
}

function Filtration() {
  return (
    <Svg label="Filtration: the insoluble solid stays in the filter paper and the liquid passes through">
      <path d="M90 40 L230 40 L170 110 L170 140 L150 140 L150 110 Z" fill="#fff" stroke={C.muted} strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M102 46 L218 46 L160 108 Z" fill="#f7f3ea" stroke="#cbbf9e" strokeWidth={1.5} />
      {[[140, 70], [152, 76], [165, 72], [178, 68], [158, 86], [146, 62], [170, 82]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={C.brown} />)}
      <path d="M118 150 L118 192 L202 192 L202 150" fill="none" stroke={C.muted} strokeWidth={2.5} />
      <rect x={120} y={166} width={80} height={24} fill={C.blueSoft} />
      {[150, 156, 162].map((y) => <circle key={y} cx={160} cy={y} r={2.5} fill={C.blue} />)}
      <Label x={232} y={56} px={190} py={70}>Residue</Label>
      <T x={235} y={69} size={9} weight={700} fill={C.muted} anchor="start">sand stays</T>
      <Label x={232} y={100} px={190} py={92}>Filter paper</Label>
      <Label x={232} y={172} px={196} py={176}>Filtrate</Label>
      <T x={235} y={185} size={9} weight={700} fill={C.muted} anchor="start">water through</T>
      <T x={56} y={20} size={10} weight={700} fill={C.muted}>sand + water poured in</T>
      <Arrow x1={56} y1={30} x2={100} y2={50} color={C.muted} width={2} />
    </Svg>
  );
}

function Chromatography() {
  return (
    <Svg label="Chromatography: dyes separate as the solvent moves up the paper; a pure substance makes one spot">
      <rect x={60} y={10} width={150} height={170} rx={4} fill="#fff" stroke={C.line} strokeWidth={2} />
      <rect x={60} y={150} width={150} height={30} fill={C.blueSoft} opacity={0.7} />
      <line x1={60} y1={140} x2={210} y2={140} stroke={C.muted} strokeWidth={1.5} strokeDasharray="4 3" />
      <line x1={60} y1={30} x2={210} y2={30} stroke={C.blue} strokeWidth={1.5} strokeDasharray="4 3" />
      {/* ink A: mixture (3 spots) */}
      <circle cx={100} cy={52} r={7} fill="#3b82f6" />
      <circle cx={100} cy={86} r={7} fill="#ef4444" />
      <circle cx={100} cy={116} r={7} fill="#eab308" />
      {/* ink B: pure (1 spot) */}
      <circle cx={170} cy={70} r={7} fill="#22c55e" />
      <T x={100} y={194} size={10}>mixture</T>
      <T x={170} y={194} size={10}>pure</T>
      <Label x={218} y={30} px={210} py={30}>Solvent front</Label>
      <Label x={218} y={140} px={210} py={140}>Pencil start line</Label>
      <Label x={218} y={166} px={206} py={166}>Solvent</Label>
      <Arrow x1={30} y1={150} x2={30} y2={40} color={C.blue} width={2} />
      <T x={30} y={30} size={9.5} fill={C.blue}>solvent</T>
      <T x={30} y={160} size={9.5} fill={C.blue}>rises</T>
    </Svg>
  );
}

function ElementTiles() {
  const els = [
    { s: 'H', n: 'Hydrogen', z: 1 }, { s: 'C', n: 'Carbon', z: 6 }, { s: 'O', n: 'Oxygen', z: 8 },
    { s: 'Na', n: 'Sodium', z: 11, latin: true }, { s: 'Fe', n: 'Iron', z: 26, latin: true }, { s: 'Cu', n: 'Copper', z: 29, latin: true },
    { s: 'Ag', n: 'Silver', z: 47, latin: true }, { s: 'Au', n: 'Gold', z: 79, latin: true },
  ];
  return (
    <Svg h={190} label="Element symbols: one or two letters, the first a capital; some come from Latin names">
      {els.map((e, i) => {
        const x = 8 + (i % 4) * 78;
        const y = 8 + Math.floor(i / 4) * 82;
        return (
          <g key={e.s}>
            <rect x={x} y={y} width={70} height={74} rx={10} fill={e.latin ? C.goldSoft : C.blueSoft} stroke={e.latin ? '#e8c64a' : '#9cc9ec'} strokeWidth={2} />
            <T x={x + 10} y={y + 12} size={9.5} weight={700} fill={C.muted} anchor="start">{e.z}</T>
            <T x={x + 35} y={y + 36} size={24}>{e.s}</T>
            <T x={x + 35} y={y + 62} size={10}>{e.n}</T>
          </g>
        );
      })}
      <rect x={8} y={176} width={10} height={10} rx={2} fill={C.goldSoft} stroke="#e8c64a" />
      <T x={22} y={182} size={9.5} weight={700} fill={C.muted} anchor="start">symbol comes from a Latin name (e.g. Fe = ferrum)</T>
    </Svg>
  );
}

function ParticleBoxes() {
  const boxes: { t: string; draw: (x: number) => JSX.Element }[] = [
    { t: 'Element', draw: (x) => <>{[[20, 30], [44, 30], [20, 54], [44, 54], [32, 78]].map(([a, b], i) => <circle key={i} cx={x + a} cy={b + 16} r={8} fill={C.blue} />)}</> },
    { t: 'Element (molecules)', draw: (x) => <>{[[16, 34], [40, 62], [18, 86]].map(([a, b], i) => <g key={i}><circle cx={x + a} cy={b} r={8} fill={C.red} /><circle cx={x + a + 14} cy={b} r={8} fill={C.red} /></g>)}</> },
    { t: 'Compound', draw: (x) => <>{[[14, 34], [36, 66], [14, 90]].map(([a, b], i) => <g key={i}><circle cx={x + a} cy={b} r={8} fill={C.red} /><circle cx={x + a + 15} cy={b} r={10} fill={C.ink} /><circle cx={x + a + 30} cy={b} r={8} fill={C.red} /></g>)}</> },
    { t: 'Mixture', draw: (x) => <>{[[18, 36], [46, 50], [24, 82]].map(([a, b], i) => <circle key={i} cx={x + a} cy={b} r={8} fill={C.blue} />)}{[[40, 86], [56, 26]].map(([a, b], i) => <g key={`m${i}`}><circle cx={x + a - 6} cy={b} r={7} fill={C.green} /><circle cx={x + a + 7} cy={b} r={7} fill={C.green} /></g>)}</> },
  ];
  return (
    <Svg h={150} label="Elements have one type of atom; compounds have different atoms joined; mixtures are not joined">
      {boxes.map((b, i) => {
        const x = 6 + i * 78;
        return (
          <g key={b.t}>
            <rect x={x} y={14} width={72} height={94} rx={10} fill="#fbfaff" stroke={C.line} strokeWidth={2} />
            {b.draw(x)}
            {b.t.split(' (').map((line, j) => <T key={j} x={x + 36} y={124 + j * 13} size={j ? 9 : 11} weight={j ? 700 : 800} fill={j ? C.muted : C.ink}>{j ? `(${line}` : line}</T>)}
          </g>
        );
      })}
    </Svg>
  );
}

function Molecules() {
  return (
    <Svg h={170} label="Molecules: water H2O has 2 hydrogen and 1 oxygen; carbon dioxide CO2 has 1 carbon and 2 oxygen">
      <circle cx={70} cy={70} r={22} fill={C.red} />
      <T x={70} y={70} size={13} fill="#fff">O</T>
      <circle cx={42} cy={96} r={14} fill="#e5e7eb" stroke="#9ca3af" />
      <T x={42} y={96} size={11}>H</T>
      <circle cx={98} cy={96} r={14} fill="#e5e7eb" stroke="#9ca3af" />
      <T x={98} y={96} size={11}>H</T>
      <T x={70} y={130} size={16}>H₂O</T>
      <T x={70} y={150} size={9.5} weight={700} fill={C.muted}>2 hydrogen + 1 oxygen</T>
      <circle cx={208} cy={74} r={18} fill={C.ink} />
      <T x={208} y={74} size={13} fill="#fff">C</T>
      <circle cx={174} cy={74} r={18} fill={C.red} />
      <T x={174} y={74} size={13} fill="#fff">O</T>
      <circle cx={242} cy={74} r={18} fill={C.red} />
      <T x={242} y={74} size={13} fill="#fff">O</T>
      <T x={208} y={130} size={16}>CO₂</T>
      <T x={208} y={150} size={9.5} weight={700} fill={C.muted}>1 carbon + 2 oxygen</T>
      <T x={160} y={14} size={10} weight={700} fill={C.muted}>the small number tells you how many of the atom before it</T>
    </Svg>
  );
}

function PeriodicTable() {
  // A simplified table: 18 columns × 4 rows, with key groups coloured.
  const cell = 16;
  const ox = 16;
  const oy = 28;
  const rows = [
    [1, 18],
    [1, 2, 13, 14, 15, 16, 17, 18],
    [1, 2, 13, 14, 15, 16, 17, 18],
    Array.from({ length: 18 }, (_, i) => i + 1),
  ];
  const colour = (g: number, r: number) => {
    if (g === 1 && r > 0) return '#ff9b9b';
    if (g === 17) return '#ffd36b';
    if (g === 18) return '#b9a6ff';
    const metal = g <= 12 || (g === 13 && r >= 2) || (g === 14 && r >= 3) || (g === 15 && r >= 3) || (g === 16 && r >= 3);
    return metal ? '#cfe3f7' : '#d9f5e9';
  };
  return (
    <Svg h={190} label="The periodic table: groups are columns, periods are rows, metals on the left, non-metals on the right">
      {rows.map((cols, r) => cols.map((g) => (
        <rect key={`${r}-${g}`} x={ox + (g - 1) * cell} y={oy + r * cell} width={cell - 2} height={cell - 2} rx={2} fill={colour(g, r)} />
      )))}
      <T x={ox + 7} y={18} size={9} fill="#d14b4b">1</T>
      <T x={ox + 16 * cell + 7} y={18} size={9} fill="#b38600">7</T>
      <T x={ox + 17 * cell + 7} y={18} size={9} fill="#6b4fd8">0</T>
      <Arrow x1={ox} y1={oy + 4 * cell + 10} x2={ox + 60} y2={oy + 4 * cell + 10} color={C.muted} width={1.8} />
      <T x={ox + 90} y={oy + 4 * cell + 10} size={9.5} weight={700} fill={C.muted}>period (row)</T>
      <Arrow x1={ox - 8} y1={oy} x2={ox - 8} y2={oy + 50} color={C.muted} width={1.8} />
      {[
        { c: '#ff9b9b', t: 'Group 1: alkali metals (reactive)' },
        { c: '#ffd36b', t: 'Group 7: halogens' },
        { c: '#b9a6ff', t: 'Group 0: noble gases (unreactive)' },
        { c: '#cfe3f7', t: 'Other metals' },
        { c: '#d9f5e9', t: 'Non-metals' },
      ].map((k, i) => (
        <g key={k.t}>
          <rect x={16} y={110 + i * 16} width={12} height={12} rx={2} fill={k.c} />
          <T x={32} y={116 + i * 16} size={9.5} anchor="start">{k.t}</T>
        </g>
      ))}
    </Svg>
  );
}

function MetalProps() {
  return (
    <Tiles
      label="Properties of metals"
      cols={4}
      items={[
        { e: '✨', title: 'Shiny', sub: 'lustrous' },
        { e: '🔨', title: 'Malleable', sub: 'hammered into shape' },
        { e: '🧵', title: 'Ductile', sub: 'pulled into wires' },
        { e: '⚡', title: 'Conductors', sub: 'heat and electricity' },
      ]}
    />
  );
}

function ReactionSigns() {
  return (
    <Tiles
      label="Signs of a chemical reaction"
      cols={4}
      items={[
        { e: '🎨', title: 'Colour', sub: 'changes' },
        { e: '🫧', title: 'Fizzing', sub: 'a gas is made' },
        { e: '🌡️', title: 'Temperature', sub: 'gets hot or cold' },
        { e: '🧱', title: 'Precipitate', sub: 'a solid appears' },
      ]}
    />
  );
}

function Conservation() {
  return (
    <Svg h={170} label="Conservation of mass: the mass of the reactants equals the mass of the products">
      <path d="M160 40 L160 140" stroke={C.muted} strokeWidth={5} />
      <path d="M130 150 L190 150 L160 132 Z" fill={C.muted} />
      <line x1={50} y1={52} x2={270} y2={52} stroke={C.ink} strokeWidth={5} strokeLinecap="round" />
      <path d="M60 52 L40 92 L120 92 L100 52" fill="none" stroke={C.muted} strokeWidth={2} />
      <path d="M220 52 L200 92 L280 92 L260 52" fill="none" stroke={C.muted} strokeWidth={2} />
      <rect x={42} y={92} width={76} height={26} rx={6} fill={C.blueSoft} stroke="#9cc9ec" />
      <T x={80} y={105} size={10}>Mg + O₂: 40 g</T>
      <rect x={202} y={92} width={76} height={26} rx={6} fill={C.greenSoft} stroke="#9ad9bf" />
      <T x={240} y={105} size={10}>MgO: 40 g</T>
      <T x={80} y={136} size={10} weight={700} fill={C.muted}>reactants</T>
      <T x={240} y={136} size={10} weight={700} fill={C.muted}>products</T>
      <T x={160} y={18} size={11}>Atoms are rearranged, never lost</T>
    </Svg>
  );
}

function FireTriangle() {
  return (
    <Svg h={190} label="The fire triangle: fuel, heat and oxygen; remove one and the fire goes out">
      <path d="M160 18 L270 170 L50 170 Z" fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} strokeLinejoin="round" />
      <E e="🔥" x={160} y={116} size={54} />
      <T x={84} y={84} size={13} fill={C.ink}>Heat</T>
      <T x={238} y={84} size={13} fill={C.ink}>Oxygen</T>
      <T x={160} y={182} size={13} fill={C.ink}>Fuel</T>
      <T x={160} y={154} size={9.5} weight={700} fill={C.muted}>remove one and it goes out</T>
    </Svg>
  );
}

function ExoEndo() {
  const Thermo = ({ x, up }: { x: number; up: boolean }) => (
    <g>
      <rect x={x - 7} y={30} width={14} height={100} rx={7} fill="#fff" stroke={C.line} strokeWidth={2} />
      <rect x={x - 4} y={up ? 46 : 96} width={8} height={up ? 84 : 34} rx={4} fill={up ? C.red : C.blue} />
      <circle cx={x} cy={136} r={12} fill={up ? C.red : C.blue} />
      {up ? <Arrow x1={x + 22} y1={110} x2={x + 22} y2={50} color={C.red} /> : <Arrow x1={x + 22} y1={50} x2={x + 22} y2={110} color={C.blue} />}
    </g>
  );
  return (
    <Svg label="Exothermic reactions give out energy and the temperature rises; endothermic reactions take in energy and it falls">
      <Thermo x={60} up />
      <T x={80} y={170} size={13} fill={C.red}>Exothermic</T>
      <T x={80} y={186} size={9.5} weight={700} fill={C.muted}>gives out energy: burning</T>
      <Thermo x={220} up={false} />
      <T x={240} y={170} size={13} fill={C.blue}>Endothermic</T>
      <T x={240} y={186} size={9.5} weight={700} fill={C.muted}>takes in energy: ice packs</T>
    </Svg>
  );
}

function PhScale() {
  const colours = ['#e11d48', '#ef4444', '#f97316', '#fb923c', '#facc15', '#a3e635', '#84cc16', '#22c55e', '#14b8a6', '#06b6d4', '#3b82f6', '#4f46e5', '#6d28d9', '#7e22ce', '#581c87'];
  return (
    <Svg h={160} label="The pH scale from 0 to 14: acids below 7, neutral at 7, alkalis above 7, with universal indicator colours">
      {colours.map((c, i) => (
        <g key={i}>
          <rect x={10 + i * 20} y={50} width={20} height={34} fill={c} />
          <T x={20 + i * 20} y={96} size={10} weight={700} fill={C.muted}>{i}</T>
        </g>
      ))}
      <T x={70} y={28} size={12} fill="#e11d48">Acid</T>
      <T x={160} y={28} size={12} fill="#16a34a">Neutral</T>
      <T x={250} y={28} size={12} fill="#6d28d9">Alkali</T>
      <Arrow x1={160} y1={36} x2={160} y2={48} color="#16a34a" width={2} />
      {[{ e: '🍋', x: 50, t: 'lemon' }, { e: '💧', x: 160, t: 'water' }, { e: '🧼', x: 260, t: 'soap' }].map((it) => (
        <g key={it.t}>
          <E e={it.e} x={it.x} y={122} size={26} />
          <T x={it.x} y={146} size={9.5} weight={700} fill={C.muted}>{it.t}</T>
        </g>
      ))}
    </Svg>
  );
}

function Neutralisation() {
  return (
    <Svg h={150} label="Neutralisation: acid plus alkali gives a salt plus water">
      <Box x={4} y={14} w={72} h={60} fill={C.redSoft} stroke="#f3a5a5" size={13}>acid</Box>
      <T x={86} y={44} size={18} fill={C.muted}>+</T>
      <Box x={96} y={14} w={72} h={60} fill={C.purpleSoft} stroke="#c4b2ff" size={13}>alkali</Box>
      <T x={178} y={44} size={18} fill={C.green}>→</T>
      <Box x={188} y={14} w={58} h={60} fill={C.soft} size={13}>salt</Box>
      <T x={254} y={44} size={18} fill={C.muted}>+</T>
      <Box x={262} y={14} w={54} h={60} fill={C.blueSoft} size={12}>water</Box>
      <T x={160} y={96} size={10.5}>hydrochloric acid → …chloride</T>
      <T x={160} y={114} size={10.5}>sulfuric acid → …sulfate</T>
      <T x={160} y={132} size={10.5}>nitric acid → …nitrate</T>
    </Svg>
  );
}

function GasTests() {
  return (
    <Tiles
      label="Gas tests: hydrogen squeaky pop, carbon dioxide turns limewater cloudy, oxygen relights a glowing splint"
      cols={3}
      h={150}
      items={[
        { e: '💥', title: 'Hydrogen', sub: 'lit splint: squeaky pop', colour: C.goldSoft },
        { e: '🥛', title: 'Carbon dioxide', sub: 'limewater goes cloudy', colour: C.soft },
        { e: '🔥', title: 'Oxygen', sub: 'relights a glowing splint', colour: C.orangeSoft },
      ]}
    />
  );
}

function Reactivity() {
  const metals = ['Potassium', 'Sodium', 'Calcium', 'Magnesium', 'Aluminium', '(Carbon)', 'Zinc', 'Iron', 'Lead', '(Hydrogen)', 'Copper', 'Silver', 'Gold'];
  return (
    <Svg w={320} h={220} label="The reactivity series from potassium (most reactive) to gold (least reactive)">
      {metals.map((m, i) => {
        const y = 10 + i * 15.5;
        const ref = m.startsWith('(');
        const w = 200 - i * 9;
        return (
          <g key={m}>
            <rect x={60} y={y} width={w} height={13} rx={4} fill={ref ? '#e5e7eb' : `hsl(${12 + i * 4} 90% ${58 + i * 2.2}%)`} />
            <T x={66} y={y + 7} size={9.5} anchor="start" fill={ref ? C.muted : C.ink}>{m}</T>
          </g>
        );
      })}
      <Arrow x1={30} y1={196} x2={30} y2={14} color={C.red} width={3} />
      <T x={30} y={208} size={9} weight={700} fill={C.muted}>more reactive</T>
      <T x={290} y={150} size={9} weight={700} fill={C.muted} anchor="end">a metal displaces any</T>
      <T x={290} y={162} size={9} weight={700} fill={C.muted} anchor="end">metal below it</T>
    </Svg>
  );
}

function RockCycle() {
  return (
    <Svg label="The rock cycle linking igneous, sedimentary and metamorphic rocks">
      <Box x={110} y={10} w={100} h={40} fill={C.orangeSoft} stroke={C.orange} size={12}>Igneous</Box>
      <Box x={10} y={140} w={110} h={40} fill={C.goldSoft} stroke="#e8c64a" size={12}>Sedimentary</Box>
      <Box x={200} y={140} w={110} h={40} fill={C.purpleSoft} stroke={C.purple} size={12}>Metamorphic</Box>
      <CurveArrow d="M110 36 Q40 60 56 134" color={C.muted} />
      <T x={66} y={74} size={9.5} fill={C.muted} anchor="start">weathering,</T>
      <T x={66} y={86} size={9.5} fill={C.muted} anchor="start">erosion,</T>
      <T x={66} y={98} size={9.5} fill={C.muted} anchor="start">layers</T>
      <Arrow x1={124} y1={160} x2={196} y2={160} color={C.muted} />
      <T x={160} y={150} size={9.5} fill={C.muted}>heat + pressure</T>
      <CurveArrow d="M262 134 Q284 70 214 36" color={C.red} />
      <T x={262} y={80} size={9.5} fill={C.red} anchor="end">melts,</T>
      <T x={262} y={92} size={9.5} fill={C.red} anchor="end">then magma</T>
      <T x={262} y={104} size={9.5} fill={C.red} anchor="end">cools</T>
      <E e="🌋" x={160} y={92} size={46} />
    </Svg>
  );
}

function Atmosphere() {
  // Pie: 78% nitrogen, 21% oxygen, 1% argon and others.
  const cx = 90;
  const cy = 100;
  const r = 70;
  const arc = (a0: number, a1: number) => {
    const p = (a: number) => [cx + r * Math.cos(a * 2 * Math.PI - Math.PI / 2), cy + r * Math.sin(a * 2 * Math.PI - Math.PI / 2)];
    const [x0, y0] = p(a0);
    const [x1, y1] = p(a1);
    return `M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 0.5 ? 1 : 0} 1 ${x1} ${y1} Z`;
  };
  return (
    <Svg label="Air is about 78% nitrogen, 21% oxygen and 1% argon, with 0.04% carbon dioxide">
      <path d={arc(0, 0.78)} fill={C.blue} stroke="#fff" strokeWidth={2} />
      <path d={arc(0.78, 0.99)} fill={C.green} stroke="#fff" strokeWidth={2} />
      <path d={arc(0.99, 1)} fill={C.gold} stroke="#fff" strokeWidth={1} />
      <T x={70} y={120} size={14} fill="#fff">78%</T>
      <T x={62} y={64} size={11} fill="#fff">21%</T>
      {[
        { c: C.blue, t: 'Nitrogen', v: '78%' },
        { c: C.green, t: 'Oxygen', v: '21%' },
        { c: C.gold, t: 'Argon', v: '~1%' },
        { c: C.muted, t: 'Carbon dioxide', v: '0.04%' },
      ].map((k, i) => (
        <g key={k.t}>
          <rect x={182} y={44 + i * 30} width={14} height={14} rx={3} fill={k.c} />
          <T x={202} y={51 + i * 30} size={11} anchor="start">{k.t}</T>
          <T x={316} y={51 + i * 30} size={11} anchor="end" fill={C.muted}>{k.v}</T>
        </g>
      ))}
    </Svg>
  );
}

function Greenhouse() {
  return (
    <Svg label="The greenhouse effect: greenhouse gases trap heat in the atmosphere">
      <E e="☀️" x={36} y={34} size={44} />
      <path d="M0 150 Q160 120 320 150 L320 200 L0 200 Z" fill="#9fd98e" />
      <path d="M10 70 Q160 30 310 70" fill="none" stroke={C.purple} strokeWidth={6} opacity={0.35} />
      <T x={250} y={40} size={10} fill={C.purple}>CO₂ + methane layer</T>
      <Arrow x1={58} y1={52} x2={140} y2={138} color={C.gold} width={3} />
      <Arrow x1={160} y1={136} x2={196} y2={62} color={C.red} width={3} dashed />
      <Arrow x1={200} y1={62} x2={238} y2={132} color={C.red} width={3} dashed />
      <T x={90} y={110} size={9.5} fill={C.gold} anchor="end">sunlight in</T>
      <T x={250} y={104} size={9.5} fill={C.red} anchor="start">heat trapped</T>
      <E e="🏭" x={280} y={160} size={34} />
      <T x={110} y={180} size={10} weight={700} fill="#2f6b26">more CO₂ → more heat trapped → warming</T>
    </Svg>
  );
}

function Extraction() {
  return (
    <Svg h={150} label="Metals less reactive than carbon are extracted by heating with carbon; more reactive ones need electrolysis">
      <rect x={10} y={10} width={300} height={34} rx={8} fill={C.redSoft} />
      <T x={20} y={27} size={10.5} anchor="start">K, Na, Ca, Mg, Al</T>
      <T x={300} y={27} size={10} anchor="end" fill="#c0392b">electrolysis ⚡</T>
      <rect x={10} y={50} width={300} height={22} rx={6} fill="#e5e7eb" />
      <T x={160} y={61} size={10.5} fill={C.muted}>— carbon —</T>
      <rect x={10} y={78} width={300} height={34} rx={8} fill={C.goldSoft} />
      <T x={20} y={95} size={10.5} anchor="start">Zn, Fe, Pb, Cu</T>
      <T x={300} y={95} size={10} anchor="end" fill="#9a6b00">heat with carbon 🔥</T>
      <T x={160} y={134} size={10.5}>iron oxide + carbon → iron + carbon dioxide</T>
    </Svg>
  );
}

export const chemistryDiagrams: Record<string, () => JSX.Element> = {
  particles: Particles,
  'state-changes': StateChanges,
  dissolving: Dissolving,
  filtration: Filtration,
  chromatography: Chromatography,
  'element-tiles': ElementTiles,
  'particle-boxes': ParticleBoxes,
  molecules: Molecules,
  'periodic-table': PeriodicTable,
  'metal-props': MetalProps,
  'reaction-signs': ReactionSigns,
  conservation: Conservation,
  'fire-triangle': FireTriangle,
  'exo-endo': ExoEndo,
  'ph-scale': PhScale,
  neutralisation: Neutralisation,
  'gas-tests': GasTests,
  reactivity: Reactivity,
  'rock-cycle': RockCycle,
  atmosphere: Atmosphere,
  greenhouse: Greenhouse,
  extraction: Extraction,
};
