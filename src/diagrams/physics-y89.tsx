import { Arrow, C, E, Label, Svg, T } from './kit';

// Diagrams for the extra Years 8-9 Physics units (content/physics-y89.ts).

// ---------- matter & heating ----------

function DensityBlocks() {
  const blocks = [
    { t: 'Cork', d: '0.24 g/cm³', n: 3, fill: C.goldSoft, dot: C.brown, note: 'floats', noteFill: C.green },
    { t: 'Water', d: '1 g/cm³', n: 4, fill: C.blueSoft, dot: C.blue, note: '', noteFill: C.muted },
    { t: 'Iron', d: '7.9 g/cm³', n: 7, fill: '#e5e7eb', dot: C.ink, note: 'sinks', noteFill: C.red },
  ];
  return (
    <Svg label="Three blocks of the same volume: cork has little mass packed in and floats, water is 1 gram per cubic centimetre, iron has lots of mass packed in and sinks">
      <T x={160} y={16} size={11}>Same volume, different mass</T>
      {blocks.map((b, i) => {
        const x = 24 + i * 100;
        const step = 72 / b.n;
        return (
          <g key={b.t}>
            <rect x={x} y={32} width={80} height={80} rx={8} fill={b.fill} stroke={C.line} strokeWidth={2} />
            {Array.from({ length: b.n * b.n }, (_, k) => (
              <circle key={k} cx={x + 4 + step / 2 + (k % b.n) * step} cy={36 + step / 2 + Math.floor(k / b.n) * step} r={Math.min(4.5, step * 0.32)} fill={b.dot} />
            ))}
            <T x={x + 40} y={128} size={12}>{b.t}</T>
            <T x={x + 40} y={144} size={10.5} weight={700} fill={C.muted}>{b.d}</T>
            {b.note && <T x={x + 40} y={160} size={10.5} fill={b.noteFill}>{b.note}</T>}
          </g>
        );
      })}
      <T x={160} y={188} size={11} fill={C.purple}>density = mass ÷ volume</T>
    </Svg>
  );
}

function Displacement() {
  const cyl = (x: number, level: number, stone: boolean) => {
    const y = 170 - level * 1.3;
    return (
      <g>
        <rect x={x} y={y} width={50} height={170 - y} fill={C.blueSoft} />
        <path d={`M${x} 30 L${x} 170 L${x + 50} 170 L${x + 50} 30`} fill="none" stroke={C.ink} strokeWidth={2.5} />
        {[20, 40, 60, 80].map((v) => <line key={v} x1={x} y1={170 - v * 1.3} x2={x + 10} y2={170 - v * 1.3} stroke={C.muted} strokeWidth={1.5} />)}
        <line x1={x} y1={y} x2={x + 50} y2={y} stroke={C.blue} strokeWidth={2.5} />
        {stone && <E e="🪨" x={x + 25} y={154} size={26} />}
        <T x={x + 25} y={186} size={11.5}>{level} cm³</T>
      </g>
    );
  };
  return (
    <Svg label="Displacement: water reads 50 cubic centimetres, a stone is added and it reads 65, so the stone's volume is 15 cubic centimetres">
      {cyl(50, 50, false)}
      {cyl(210, 65, true)}
      <Arrow x1={116} y1={100} x2={196} y2={100} color={C.purple} />
      <T x={156} y={86} size={10.5} fill={C.purple}>add stone</T>
      <T x={156} y={124} size={10} weight={700} fill={C.muted}>volume of stone</T>
      <T x={156} y={138} size={10.5} fill={C.purple}>65 − 50 = 15 cm³</T>
    </Svg>
  );
}

function Ks3HeatingCurve() {
  return (
    <Svg label="Heating curve for water: the temperature rises, stays flat at 0 degrees while melting, rises again, and stays flat at 100 degrees while boiling">
      <line x1={44} y1={170} x2={304} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={44} y1={170} x2={44} y2={14} stroke={C.ink} strokeWidth={2} />
      <line x1={44} y1={130} x2={300} y2={130} stroke={C.line} strokeWidth={1} strokeDasharray="4 4" />
      <line x1={44} y1={64} x2={300} y2={64} stroke={C.line} strokeWidth={1} strokeDasharray="4 4" />
      <polyline points="44,162 84,130 144,130 194,64 264,64 300,36" fill="none" stroke={C.red} strokeWidth={4} strokeLinejoin="round" />
      <T x={40} y={130} size={9.5} anchor="end" fill={C.muted}>0 °C</T>
      <T x={40} y={64} size={9.5} anchor="end" fill={C.muted}>100 °C</T>
      <T x={114} y={118} size={10} fill={C.blue}>melting</T>
      <T x={229} y={52} size={10} fill={C.red}>boiling</T>
      <T x={72} y={156} size={9} weight={700} fill={C.muted} anchor="start">ice</T>
      <T x={176} y={104} size={9} weight={700} fill={C.muted} anchor="start">water</T>
      <T x={290} y={24} size={9} weight={700} fill={C.muted}>steam</T>
      <T x={240} y={110} size={10} fill={C.purple}>flat parts:</T>
      <T x={240} y={124} size={9.5} weight={700} fill={C.muted}>changing state,</T>
      <T x={240} y={137} size={9.5} weight={700} fill={C.muted}>temperature stays put</T>
      <T x={48} y={14} size={9.5} weight={700} fill={C.muted} anchor="start">temperature</T>
      <T x={174} y={188} size={9.5} weight={700} fill={C.muted}>time heating →</T>
    </Svg>
  );
}

function GasPressure() {
  const ps = [[60, 60], [110, 50], [160, 70], [80, 110], [140, 120], [170, 150], [60, 150], [110, 90], [150, 40], [100, 145]];
  const hits = [[30, 75, 1, 0], [190, 120, -1, 0], [120, 30, 0, 1], [70, 170, 0, -1]];
  return (
    <Svg label="Gas particles move fast and hit the walls of their container; each hit is a push, and together they make gas pressure">
      <rect x={30} y={30} width={160} height={140} rx={6} fill={C.soft} stroke={C.ink} strokeWidth={3} />
      {ps.map(([x, y], i) => (
        <circle key={i} className="p-fly" cx={x} cy={y} r={6} fill={C.blue} style={{ animationDelay: `${i * -0.37}s` }} />
      ))}
      {hits.map(([x, y, dx, dy], i) => (
        <Arrow key={i} x1={x + dx * 22} y1={y + dy * 22} x2={x + dx * 4} y2={y + dy * 4} color={C.red} width={2.5} />
      ))}
      <T x={204} y={44} size={11} anchor="start">Particles hit</T>
      <T x={204} y={58} size={11} anchor="start">the walls:</T>
      <T x={204} y={72} size={11} anchor="start" fill={C.red}>that’s pressure</T>
      <T x={204} y={104} size={10.5} anchor="start" fill={C.purple}>Hotter:</T>
      <T x={204} y={118} size={9.5} weight={700} anchor="start" fill={C.muted}>faster, harder hits</T>
      <T x={204} y={146} size={10.5} anchor="start" fill={C.purple}>Smaller space:</T>
      <T x={204} y={160} size={9.5} weight={700} anchor="start" fill={C.muted}>more hits</T>
      <T x={110} y={188} size={9.5} weight={700} fill={C.muted}>more or harder hits = more pressure</T>
    </Svg>
  );
}

function Brownian() {
  const air = [[40, 40], [90, 30], [250, 40], [290, 80], [270, 150], [210, 170], [60, 160], [30, 110], [130, 160], [180, 30], [120, 60], [230, 110], [80, 120]];
  return (
    <Svg label="Brownian motion: a smoke speck moves in a random zigzag because it is hit from all sides by tiny air particles">
      {air.map(([x, y], i) => (
        <circle key={i} className="p-fly" cx={x} cy={y} r={3.5} fill={C.blue} style={{ animationDelay: `${i * -0.29}s` }} />
      ))}
      <polyline points="110,110 132,82 150,104 176,90 166,128 196,118 214,140 230,98" fill="none" stroke={C.purple} strokeWidth={2.5} strokeDasharray="5 4" strokeLinejoin="round" />
      <circle cx={230} cy={98} r={11} fill="#9ca3af" stroke={C.ink} strokeWidth={1.5} />
      <circle cx={110} cy={110} r={4} fill={C.purple} />
      <Label x={270} y={140} px={236} py={104} anchor="middle">smoke speck</Label>
      <Label x={36} y={84} px={30} py={108} anchor="middle">air particles</Label>
      <T x={160} y={190} size={9.5} weight={700} fill={C.muted}>knocked about by air particles too small to see</T>
    </Svg>
  );
}

function ConvectionRoom() {
  return (
    <Svg label="Convection current in a room: air warmed by the radiator rises, moves across the ceiling, cools and sinks on the far side, then flows back along the floor">
      <rect x={20} y={14} width={280} height={160} rx={6} fill={C.soft} stroke={C.ink} strokeWidth={2.5} />
      <rect x={28} y={112} width={16} height={56} rx={3} fill={C.redSoft} stroke={C.red} strokeWidth={2} />
      {[120, 132, 144, 156].map((y) => <line key={y} x1={30} y1={y} x2={42} y2={y} stroke={C.red} strokeWidth={1.5} />)}
      <rect x={286} y={40} width={10} height={50} fill={C.blueSoft} stroke={C.blue} strokeWidth={1.5} />
      <Arrow x1={64} y1={150} x2={64} y2={48} color={C.red} width={3} />
      <Arrow x1={76} y1={36} x2={244} y2={36} color={C.orange} width={3} />
      <Arrow x1={260} y1={48} x2={260} y2={150} color={C.blue} width={3} />
      <Arrow x1={244} y1={162} x2={80} y2={162} color={C.blue} width={3} />
      <T x={74} y={92} size={10.5} anchor="start" fill={C.red}>warm air</T>
      <T x={74} y={106} size={10.5} anchor="start" fill={C.red}>rises</T>
      <T x={250} y={92} size={10.5} anchor="end" fill={C.blue}>cool air</T>
      <T x={250} y={106} size={10.5} anchor="end" fill={C.blue}>sinks</T>
      <T x={160} y={100} size={11} fill={C.purple}>convection</T>
      <T x={160} y={114} size={11} fill={C.purple}>current</T>
      <T x={36} y={188} size={10} fill={C.muted}>radiator</T>
    </Svg>
  );
}

function VacuumFlask() {
  return (
    <Svg h={212} label="Vacuum flask: a stopper on top, a vacuum between double walls, and silvered walls; the vacuum stops conduction and convection and the silver reflects infrared radiation">
      <rect x={110} y={34} width={100} height={146} rx={16} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <rect x={122} y={46} width={76} height={122} rx={10} fill={C.orangeSoft} stroke="#b8bcc8" strokeWidth={4} />
      <rect x={122} y={46} width={76} height={34} fill="#fff" />
      <rect x={126} y={18} width={68} height={32} rx={6} fill={C.brown} />
      {[150, 130, 110].map((y, i) => <path key={y} d={`M${140 + i * 14} ${y} q4 -6 0 -12 q-4 -6 0 -12`} fill="none" stroke={C.red} strokeWidth={2} />)}
      <Label x={66} y={30} px={128} py={30} anchor="end">stopper</Label>
      <Label x={66} y={100} px={116} py={100} anchor="end">vacuum</Label>
      <Label x={244} y={70} px={198} py={92}>silvered</Label>
      <T x={247} y={84} size={11.5} anchor="start">walls</T>
      <Label x={244} y={140} px={186} py={140}>hot drink</Label>
      <T x={160} y={194} size={9.5} weight={700} fill={C.muted}>vacuum: no conduction or convection</T>
      <T x={160} y={206} size={9.5} weight={700} fill={C.muted}>silver: reflects infrared radiation</T>
    </Svg>
  );
}

// ---------- forces in action ----------

function WaterSpurts() {
  const holes = [[60, 150], [105, 194], [150, 248]];
  return (
    <Svg label="A bottle of water with three holes: water spurts furthest from the lowest hole, because pressure increases with depth">
      <rect x={60} y={24} width={60} height={152} fill={C.blueSoft} />
      <path d="M60 14 L60 176 M120 14 L120 176" stroke={C.ink} strokeWidth={2.5} />
      <line x1={8} y1={176} x2={312} y2={176} stroke={C.brown} strokeWidth={3} />
      {holes.map(([y, land]) => (
        <path key={y} d={`M120 ${y} Q${120 + (land - 120) * 0.45} ${y} ${land} 176`} fill="none" stroke={C.blue} strokeWidth={3} strokeLinecap="round" />
      ))}
      <Arrow x1={40} y1={30} x2={40} y2={166} color={C.purple} />
      <g transform="rotate(-90 26 98)"><T x={26} y={98} size={10.5} fill={C.purple}>deeper</T></g>
      <T x={232} y={40} size={11} anchor="middle">more depth</T>
      <T x={232} y={54} size={11} anchor="middle" fill={C.red}>= more pressure</T>
      <T x={250} y={192} size={10} fill={C.muted}>spurts furthest</T>
    </Svg>
  );
}

function Upthrust() {
  return (
    <Svg h={208} label="Upthrust: a floating block has upthrust equal to its weight; a sinking stone has weight bigger than the upthrust">
      <rect x={20} y={80} width={280} height={106} fill={C.blueSoft} />
      <line x1={20} y1={80} x2={300} y2={80} stroke={C.blue} strokeWidth={2.5} />
      {/* floating */}
      <rect x={60} y={64} width={60} height={32} rx={4} fill={C.goldSoft} stroke={C.brown} strokeWidth={2} />
      <Arrow x1={90} y1={22} x2={90} y2={60} color={C.red} width={3} />
      <Arrow x1={90} y1={138} x2={90} y2={100} color={C.blue} width={3} />
      <T x={98} y={30} size={10.5} anchor="start" fill={C.red}>weight 20 N</T>
      <T x={98} y={132} size={10.5} anchor="start" fill={C.blue}>upthrust 20 N</T>
      <T x={90} y={198} size={10.5} fill={C.green}>floats: upthrust = weight</T>
      {/* sinking */}
      <rect x={200} y={104} width={50} height={34} rx={6} fill="#9ca3af" stroke={C.ink} strokeWidth={2} />
      <Arrow x1={225} y1={30} x2={225} y2={100} color={C.red} width={3} />
      <Arrow x1={225} y1={176} x2={225} y2={142} color={C.blue} width={3} />
      <T x={233} y={36} size={10.5} anchor="start" fill={C.red}>weight 50 N</T>
      <T x={233} y={170} size={10.5} anchor="start" fill={C.blue}>upthrust 20 N</T>
      <T x={232} y={198} size={10.5} fill={C.red}>sinks: weight &gt; upthrust</T>
    </Svg>
  );
}

function Seesaw() {
  return (
    <Svg label="A balanced seesaw: a 400 newton child 1.5 metres from the pivot makes 600 newton metres anticlockwise, and a 600 newton adult 1 metre from the pivot makes 600 newton metres clockwise">
      <rect x={28} y={104} width={264} height={8} rx={4} fill={C.brown} />
      <polygon points="160,112 146,138 174,138" fill={C.muted} />
      <E e="🧒" x={40} y={82} size={36} />
      <E e="🧑" x={240} y={80} size={40} />
      <T x={40} y={52} size={11} fill={C.red}>400 N</T>
      <T x={240} y={48} size={11} fill={C.red}>600 N</T>
      <line x1={40} y1={124} x2={150} y2={124} stroke={C.purple} strokeWidth={1.5} />
      <line x1={170} y1={124} x2={240} y2={124} stroke={C.purple} strokeWidth={1.5} />
      <T x={95} y={134} size={10} fill={C.purple}>1.5 m</T>
      <T x={205} y={134} size={10} fill={C.purple}>1 m</T>
      <T x={92} y={156} size={10.5}>400 × 1.5 = 600 N m</T>
      <T x={232} y={156} size={10.5}>600 × 1 = 600 N m</T>
      <T x={92} y={170} size={9.5} weight={700} fill={C.muted}>anticlockwise</T>
      <T x={232} y={170} size={9.5} weight={700} fill={C.muted}>clockwise</T>
      <T x={160} y={192} size={10.5} fill={C.green}>balanced: clockwise = anticlockwise</T>
    </Svg>
  );
}

function Lever() {
  return (
    <Svg label="A crowbar is a lever: a small effort far from the pivot lifts a big load close to the pivot">
      <line x1={8} y1={160} x2={312} y2={160} stroke={C.line} strokeWidth={3} />
      <line x1={26} y1={146} x2={296} y2={92} stroke={C.ink} strokeWidth={6} strokeLinecap="round" />
      <polygon points="95,134 82,160 108,160" fill={C.muted} />
      <E e="🪨" x={46} y={118} size={42} />
      <T x={46} y={86} size={11} fill={C.red}>big load</T>
      <Arrow x1={290} y1={40} x2={290} y2={86} color={C.purple} width={3} />
      <T x={290} y={28} size={11} fill={C.purple}>small effort</T>
      <T x={95} y={176} size={10.5}>pivot</T>
      <T x={52} y={176} size={9.5} weight={700} fill={C.muted}>short</T>
      <T x={196} y={144} size={9.5} weight={700} fill={C.muted}>long distance from pivot</T>
      <T x={160} y={194} size={10} fill={C.muted}>push far from the pivot to lift a heavy load</T>
    </Svg>
  );
}

function ForceExtension() {
  return (
    <Svg label="Force–extension graph for a spring: a straight line through the origin up to the elastic limit, then a curve">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={200} y2={70} stroke={C.purple} strokeWidth={4} strokeLinecap="round" />
      <path d="M200 70 Q240 52 292 46" fill="none" stroke={C.red} strokeWidth={4} strokeLinecap="round" />
      <circle cx={200} cy={70} r={5} fill={C.ink} />
      <Label x={154} y={34} px={200} py={70} anchor="end">elastic limit</Label>
      <T x={150} y={140} size={10.5} anchor="start" fill={C.purple}>straight line:</T>
      <T x={150} y={154} size={9.5} weight={700} anchor="start" fill={C.muted}>extension ∝ force</T>
      <T x={262} y={70} size={9.5} weight={700} fill={C.red}>won’t spring back</T>
      <T x={44} y={14} size={9.5} weight={700} fill={C.muted} anchor="start">force (N)</T>
      <T x={170} y={188} size={9.5} weight={700} fill={C.muted}>extension (cm)</T>
    </Svg>
  );
}

function WorkDone() {
  return (
    <Svg label="Work done: lifting a 50 newton box up 2 metres does 50 times 2 equals 100 joules of work">
      <line x1={20} y1={170} x2={150} y2={170} stroke={C.brown} strokeWidth={3} />
      <rect x={50} y={140} width={44} height={30} rx={4} fill={C.goldSoft} stroke={C.line} strokeWidth={2} strokeDasharray="4 3" />
      <rect x={50} y={54} width={44} height={30} rx={4} fill={C.gold} stroke={C.brown} strokeWidth={2} />
      <Arrow x1={72} y1={136} x2={72} y2={90} color={C.muted} width={2} dashed />
      <T x={84} y={114} size={11} anchor="start" fill={C.muted}>2 m</T>
      <Arrow x1={72} y1={50} x2={72} y2={18} color={C.purple} width={3} />
      <T x={82} y={26} size={11} anchor="start" fill={C.purple}>50 N</T>
      <T x={232} y={66} size={11.5}>work done =</T>
      <T x={232} y={84} size={11.5}>force × distance</T>
      <T x={232} y={110} size={11.5}>= 50 N × 2 m</T>
      <T x={232} y={136} size={15} fill={C.purple}>= 100 J</T>
    </Svg>
  );
}

function Ramp() {
  const angle = (-Math.atan2(90, 240) * 180) / Math.PI;
  return (
    <Svg label="A ramp: lifting a 100 newton box straight up 1 metre does 100 joules; pushing it 4 metres up a ramp needs only 25 newtons but does the same 100 joules">
      <polygon points="40,170 280,170 280,80" fill={C.soft} stroke={C.ink} strokeWidth={2.5} strokeLinejoin="round" />
      <g transform={`rotate(${angle} 150 128.75)`}>
        <rect x={135} y={106.75} width={30} height={22} rx={3} fill={C.gold} stroke={C.brown} strokeWidth={2} />
      </g>
      <Arrow x1={78} y1={138} x2={124} y2={121} color={C.purple} width={3} />
      <Arrow x1={298} y1={168} x2={298} y2={84} color={C.orange} width={3} />
      <T x={270} y={148} size={10} anchor="end" fill={C.orange}>1 m</T>
      <T x={160} y={20} size={10.5} fill={C.orange}>Lift straight up: 100 N × 1 m = 100 J</T>
      <T x={160} y={188} size={10.5} fill={C.purple}>Push up the ramp: 25 N × 4 m = 100 J</T>
      <T x={110} y={66} size={9.5} weight={700} fill={C.muted}>smaller force,</T>
      <T x={110} y={79} size={9.5} weight={700} fill={C.muted}>longer distance,</T>
      <T x={110} y={92} size={9.5} weight={700} fill={C.muted}>same work</T>
    </Svg>
  );
}

// ---------- waves in depth ----------

function wavePath(x0: number, x1: number, yc: number, amp: number, wavelength: number, phase = 0) {
  const pts: string[] = [];
  for (let x = x0; x <= x1; x += 2) {
    pts.push(`${x},${(yc - amp * Math.cos((2 * Math.PI * (x - x0)) / wavelength + phase)).toFixed(1)}`);
  }
  return pts.join(' ');
}

function WaveParts() {
  return (
    <Svg label="A transverse wave: amplitude is the height from the middle to a crest, wavelength is the distance from one crest to the next">
      <line x1={80} y1={100} x2={304} y2={100} stroke={C.line} strokeWidth={1.5} strokeDasharray="5 4" />
      <polyline points={wavePath(80, 300, 100, 46, 110)} fill="none" stroke={C.blue} strokeWidth={3.5} strokeLinejoin="round" />
      <Arrow x1={80} y1={100} x2={80} y2={58} color={C.red} width={2.5} />
      <T x={72} y={80} size={10.5} anchor="end" fill={C.red}>amplitude</T>
      <Arrow x1={135} y1={32} x2={84} y2={32} color={C.purple} width={2} />
      <Arrow x1={135} y1={32} x2={186} y2={32} color={C.purple} width={2} />
      <T x={135} y={20} size={10.5} fill={C.purple}>wavelength</T>
      <T x={310} y={42} size={10} anchor="end" fill={C.muted}>crest</T>
      <T x={135} y={162} size={10} fill={C.muted}>trough</T>
      <T x={160} y={188} size={10} weight={700} fill={C.muted}>frequency = waves passing each second (Hz)</T>
    </Svg>
  );
}

function Superposition() {
  const col = (x0: number, inverted: boolean, title: string, colour: string) => (
    <g>
      <T x={x0 + 70} y={14} size={11} fill={colour}>{title}</T>
      <polyline points={wavePath(x0, x0 + 140, 44, 12, 70)} fill="none" stroke={C.blue} strokeWidth={2.5} />
      <T x={x0 + 70} y={70} size={14} fill={C.muted}>+</T>
      <polyline points={wavePath(x0, x0 + 140, 96, 12, 70, inverted ? Math.PI : 0)} fill="none" stroke={inverted ? C.orange : C.blue} strokeWidth={2.5} />
      <T x={x0 + 70} y={122} size={14} fill={C.muted}>=</T>
      {inverted ? (
        <line x1={x0} y1={154} x2={x0 + 140} y2={154} stroke={colour} strokeWidth={3} />
      ) : (
        <polyline points={wavePath(x0, x0 + 140, 154, 24, 70)} fill="none" stroke={colour} strokeWidth={3} />
      )}
    </g>
  );
  return (
    <Svg h={200} label="Superposition: two waves in step add up to a bigger wave; a wave and its opposite cancel out to a flat line">
      {col(10, false, 'In step: bigger wave', C.purple)}
      {col(170, true, 'Opposite: cancel out', C.red)}
      <line x1={160} y1={24} x2={160} y2={180} stroke={C.line} strokeWidth={1.5} />
      <T x={160} y={194} size={9.5} weight={700} fill={C.muted}>noise-cancelling headphones use this</T>
    </Svg>
  );
}

function Oscilloscope() {
  const screens = [
    { t: 'Quiet, low', sub: 'small, spread out', amp: 10, wl: 48 },
    { t: 'Louder', sub: 'taller waves', amp: 26, wl: 48 },
    { t: 'Higher pitch', sub: 'waves closer together', amp: 10, wl: 20 },
  ];
  return (
    <Svg h={140} label="Oscilloscope traces: a quiet low sound has small spread-out waves, a louder sound has taller waves, a higher pitch has waves closer together">
      {screens.map((s, i) => {
        const x = 8 + i * 104;
        return (
          <g key={s.t}>
            <rect x={x} y={8} width={96} height={80} rx={8} fill="#0f2e22" />
            {[28, 48, 68].map((y) => <line key={y} x1={x + 4} y1={y} x2={x + 92} y2={y} stroke="#1f5641" strokeWidth={1} />)}
            {[32, 64].map((dx) => <line key={dx} x1={x + dx} y1={12} x2={x + dx} y2={84} stroke="#1f5641" strokeWidth={1} />)}
            <polyline points={wavePath(x + 6, x + 90, 48, s.amp, s.wl)} fill="none" stroke="#4ade80" strokeWidth={2.5} />
            <T x={x + 48} y={106} size={11}>{s.t}</T>
            <T x={x + 48} y={122} size={9} weight={700} fill={C.muted}>{s.sub}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function Sonar() {
  return (
    <Svg label="Sonar: a ship sends a pulse of sound down; the echo returns after 2 seconds; sound travels 3,000 metres down and back, so the sea is 1,500 metres deep">
      <rect x={10} y={50} width={300} height={122} fill={C.blueSoft} />
      <path d="M10 172 Q80 160 150 172 T310 168 L310 196 L10 196 Z" fill={C.brown} opacity={0.6} />
      <E e="🚢" x={80} y={38} size={44} />
      <Arrow x1={72} y1={62} x2={72} y2={162} color={C.purple} width={3} />
      <Arrow x1={92} y1={162} x2={92} y2={62} color={C.orange} width={3} dashed />
      <T x={64} y={112} size={9.5} anchor="end" fill={C.purple}>pulse</T>
      <T x={100} y={140} size={9.5} anchor="start" fill={C.orange}>echo</T>
      <T x={136} y={76} size={10.5} anchor="start">Echo after 2 s</T>
      <T x={136} y={94} size={10.5} anchor="start">Sound in water: 1,500 m/s</T>
      <T x={136} y={112} size={10.5} anchor="start">Down and back: 3,000 m</T>
      <T x={136} y={136} size={12} anchor="start" fill={C.purple}>Depth = 1,500 m</T>
    </Svg>
  );
}

function Pinhole() {
  return (
    <Svg h={190} label="Pinhole camera: light from the object travels in straight lines through a tiny hole and makes a smaller, upside-down image on the screen">
      <rect x={190} y={60} width={92} height={100} fill={C.soft} stroke={C.ink} strokeWidth={2.5} />
      <rect x={186} y={104} width={8} height={12} fill="#fff" />
      <line x1={282} y1={62} x2={282} y2={158} stroke={C.purple} strokeWidth={4} />
      <line x1={40} y1={72} x2={280} y2={132.8} stroke={C.gold} strokeWidth={2} />
      <line x1={40} y1={150} x2={280} y2={86} stroke={C.gold} strokeWidth={2} />
      <Arrow x1={40} y1={150} x2={40} y2={74} color={C.orange} width={4} />
      <Arrow x1={270} y1={88} x2={270} y2={130} color={C.orange} width={4} />
      <T x={40} y={168} size={10.5}>object</T>
      <Label x={176} y={40} px={190} py={110} anchor="end">pinhole</Label>
      <T x={236} y={176} size={10} fill={C.muted}>image: upside down, smaller</T>
      <T x={300} y={110} size={9.5} weight={700} fill={C.purple}>screen</T>
    </Svg>
  );
}

function Eye() {
  return (
    <Svg label="The eye: light passes through the cornea and pupil, the lens focuses it onto the retina, and the optic nerve carries signals to the brain">
      <rect x={250} y={92} width={56} height={16} rx={4} fill={C.goldSoft} stroke={C.gold} strokeWidth={2} />
      <circle cx={180} cy={100} r={70} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <path d="M213 38 A70 70 0 0 1 213 162" fill="none" stroke={C.red} strokeWidth={5} />
      <path d="M118 66 Q88 100 118 134" fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <line x1={124} y1={70} x2={124} y2={90} stroke={C.brown} strokeWidth={5} />
      <line x1={124} y1={110} x2={124} y2={130} stroke={C.brown} strokeWidth={5} />
      <ellipse cx={138} cy={100} rx={9} ry={22} fill={C.purpleSoft} stroke={C.purple} strokeWidth={2} />
      <polyline points="20,82 138,90 248,112" fill="none" stroke={C.gold} strokeWidth={2} />
      <polyline points="20,118 138,110 248,88" fill="none" stroke={C.gold} strokeWidth={2} />
      <Label x={60} y={40} px={100} py={86} anchor="end">cornea</Label>
      <Label x={60} y={60} px={124} py={100} anchor="end">pupil</Label>
      <Label x={60} y={160} px={124} py={124} anchor="end">iris</Label>
      <Label x={152} y={20} px={140} py={80}>lens</Label>
      <Label x={256} y={34} px={230} py={52}>retina</Label>
      <Label x={314} y={150} px={282} py={108} anchor="end">optic nerve</Label>
      <T x={160} y={190} size={9.5} weight={700} fill={C.muted}>the image on the retina is upside down</T>
    </Svg>
  );
}

function Lenses() {
  return (
    <Svg label="A convex lens bends parallel rays inwards to meet at the focal point; a concave lens spreads them out as if from a point behind it">
      <line x1={160} y1={14} x2={160} y2={168} stroke={C.line} strokeWidth={1.5} />
      {/* convex */}
      <ellipse cx={80} cy={90} rx={10} ry={52} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      {[60, 90, 120].map((y) => (
        <g key={y}>
          <line x1={10} y1={y} x2={80} y2={y} stroke={C.orange} strokeWidth={2.5} />
          <Arrow x1={80} y1={y} x2={138} y2={90 + (90 - y) * -0.03} color={C.orange} width={2.5} />
        </g>
      ))}
      <circle cx={140} cy={90} r={4} fill={C.ink} />
      <T x={140} y={108} size={11}>F</T>
      <T x={80} y={162} size={11}>Convex</T>
      <T x={80} y={178} size={9.5} weight={700} fill={C.muted}>fatter middle: converging</T>
      {/* concave */}
      <path d="M228 38 Q240 90 228 142 L252 142 Q240 90 252 38 Z" fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      {[60, 90, 120].map((y) => (
        <g key={y}>
          <line x1={172} y1={y} x2={240} y2={y} stroke={C.orange} strokeWidth={2.5} />
          <Arrow x1={240} y1={y} x2={300} y2={y + (y - 90) * 1.5} color={C.orange} width={2.5} />
          {y !== 90 && <line x1={240} y1={y} x2={200} y2={90} stroke={C.orange} strokeWidth={1.5} strokeDasharray="4 4" />}
        </g>
      ))}
      <circle cx={200} cy={90} r={4} fill={C.ink} />
      <T x={200} y={108} size={11}>F</T>
      <T x={240} y={162} size={11}>Concave</T>
      <T x={240} y={178} size={9.5} weight={700} fill={C.muted}>thinner middle: diverging</T>
    </Svg>
  );
}

function Glasses() {
  const eye = (cy: number) => (
    <g>
      <circle cx={200} cy={cy} r={36} fill="#fff" stroke={C.ink} strokeWidth={2} />
      <path d={`M223 ${cy - 27.6} A36 36 0 0 1 223 ${cy + 27.6}`} fill="none" stroke={C.red} strokeWidth={4} />
      <ellipse cx={172} cy={cy} rx={5} ry={14} fill={C.purpleSoft} stroke={C.purple} strokeWidth={1.5} />
    </g>
  );
  return (
    <Svg label="Short sight: the image forms in front of the retina, fixed with a concave lens. Long sight: the image would form behind the retina, fixed with a convex lens">
      {eye(52)}
      <polyline points="140,40 172,40 210,52 234,60" fill="none" stroke={C.gold} strokeWidth={2} />
      <polyline points="140,64 172,64 210,52 234,44" fill="none" stroke={C.gold} strokeWidth={2} />
      <circle cx={210} cy={52} r={3} fill={C.ink} />
      <T x={8} y={34} size={11.5} anchor="start">Short sight</T>
      <T x={8} y={50} size={9.5} weight={700} anchor="start" fill={C.muted}>focus in front of retina</T>
      <T x={8} y={66} size={10} anchor="start" fill={C.blue}>fix: concave lens</T>
      <T x={256} y={40} size={9} weight={700} anchor="start" fill={C.muted}>far things</T>
      <T x={256} y={52} size={9} weight={700} anchor="start" fill={C.muted}>blurred</T>
      {eye(146)}
      <polyline points="140,132 172,132 234,141.5" fill="none" stroke={C.gold} strokeWidth={2} />
      <polyline points="140,160 172,160 234,150.5" fill="none" stroke={C.gold} strokeWidth={2} />
      <line x1={234} y1={141.5} x2={256} y2={146} stroke={C.gold} strokeWidth={1.5} strokeDasharray="3 3" />
      <line x1={234} y1={150.5} x2={256} y2={146} stroke={C.gold} strokeWidth={1.5} strokeDasharray="3 3" />
      <circle cx={256} cy={146} r={3} fill={C.ink} />
      <T x={8} y={128} size={11.5} anchor="start">Long sight</T>
      <T x={8} y={144} size={9.5} weight={700} anchor="start" fill={C.muted}>focus behind retina</T>
      <T x={8} y={160} size={10} anchor="start" fill={C.blue}>fix: convex lens</T>
      <T x={266} y={134} size={9} weight={700} anchor="start" fill={C.muted}>near things</T>
      <T x={266} y={160} size={9} weight={700} anchor="start" fill={C.muted}>blurred</T>
      <T x={160} y={194} size={9.5} weight={700} fill={C.muted}>glasses move the focus back onto the retina</T>
    </Svg>
  );
}

// ---------- static & motors ----------

function Charge({ x, y, sign, r = 13 }: { x: number; y: number; sign: '+' | '−'; r?: number }) {
  const pos = sign === '+';
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={pos ? C.redSoft : C.blueSoft} stroke={pos ? C.red : C.blue} strokeWidth={2} />
      <T x={x} y={y + 1} size={r * 1.3} fill={pos ? C.red : C.blue}>{sign}</T>
    </g>
  );
}

function StaticBalloon() {
  return (
    <Svg label="Rubbing a balloon on a jumper: electrons move from the jumper to the balloon, so the balloon becomes negative and the jumper is left positive">
      <rect x={14} y={30} width={110} height={120} rx={14} fill={C.purpleSoft} stroke={C.purple} strokeWidth={2} />
      {[[44, 60], [94, 60], [44, 100], [94, 100], [69, 80], [69, 125]].map(([x, y], i) => <T key={i} x={x} y={y} size={20} fill={C.red}>+</T>)}
      <ellipse cx={240} cy={86} rx={50} ry={60} fill={C.redSoft} stroke={C.red} strokeWidth={2} />
      <path d="M240 146 l-6 10 h12 z" fill={C.red} />
      <path d="M240 156 q-6 16 4 30" fill="none" stroke={C.muted} strokeWidth={1.5} />
      {[[220, 60], [260, 60], [212, 96], [268, 96], [240, 78], [240, 116]].map(([x, y], i) => <T key={i} x={x} y={y} size={22} fill={C.blue}>−</T>)}
      <Arrow x1={130} y1={70} x2={184} y2={70} color={C.blue} width={2.5} />
      <Arrow x1={130} y1={100} x2={184} y2={100} color={C.blue} width={2.5} />
      <T x={157} y={56} size={9.5} fill={C.blue}>electrons</T>
      <T x={69} y={166} size={10.5}>Jumper</T>
      <T x={69} y={180} size={9.5} weight={700} fill={C.red}>loses electrons: +</T>
      <T x={240} y={14} size={10.5}>Balloon</T>
      <T x={160} y={194} size={9.5} weight={700} fill={C.blue}>balloon gains electrons: −</T>
    </Svg>
  );
}

function Charges() {
  const rows: { a: '+' | '−'; b: '+' | '−'; attract: boolean }[] = [
    { a: '−', b: '−', attract: false },
    { a: '+', b: '−', attract: true },
    { a: '+', b: '+', attract: false },
  ];
  return (
    <Svg h={180} label="Like charges repel, opposite charges attract">
      {rows.map((r, i) => {
        const y = 32 + i * 52;
        return (
          <g key={i}>
            <Charge x={90} y={y} sign={r.a} />
            <Charge x={170} y={y} sign={r.b} />
            {r.attract ? (
              <>
                <Arrow x1={108} y1={y} x2={124} y2={y} color={C.green} width={2.5} />
                <Arrow x1={152} y1={y} x2={136} y2={y} color={C.green} width={2.5} />
              </>
            ) : (
              <>
                <Arrow x1={72} y1={y} x2={46} y2={y} color={C.red} width={2.5} />
                <Arrow x1={188} y1={y} x2={214} y2={y} color={C.red} width={2.5} />
              </>
            )}
            <T x={236} y={y} size={11.5} anchor="start" fill={r.attract ? C.green : C.red}>{r.attract ? 'attract' : 'repel'}</T>
          </g>
        );
      })}
      <T x={160} y={170} size={10} weight={700} fill={C.muted}>like charges repel · opposite charges attract</T>
    </Svg>
  );
}

function MotorEffect() {
  return (
    <Svg label="The motor effect: a wire carrying current between the north and south poles of a magnet feels a force at right angles to the field">
      <rect x={14} y={50} width={70} height={90} rx={6} fill={C.red} />
      <rect x={236} y={50} width={70} height={90} rx={6} fill={C.blue} />
      <T x={49} y={95} size={22} fill="#fff">N</T>
      <T x={271} y={95} size={22} fill="#fff">S</T>
      {[62, 95, 128].map((y) => <Arrow key={y} x1={88} y1={y} x2={230} y2={y} color={C.muted} width={1.5} />)}
      <circle cx={160} cy={95} r={14} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <circle cx={160} cy={95} r={4} fill={C.ink} />
      <Arrow x1={160} y1={78} x2={160} y2={24} color={C.purple} width={3.5} />
      <T x={172} y={34} size={11} anchor="start" fill={C.purple}>force</T>
      <T x={160} y={148} size={9.5} weight={700}>wire: current out of the page</T>
      <T x={160} y={166} size={9.5} weight={700} fill={C.muted}>magnetic field: N → S</T>
      <T x={160} y={188} size={10} fill={C.muted}>reverse the current and the force reverses</T>
    </Svg>
  );
}

function DcMotor() {
  return (
    <Svg label="A DC motor: a coil between two magnets; current flows in opposite directions along its two sides, so one side is pushed up and the other down, and a split-ring commutator keeps it turning the same way">
      <rect x={10} y={40} width={50} height={90} rx={6} fill={C.red} />
      <rect x={260} y={40} width={50} height={90} rx={6} fill={C.blue} />
      <T x={35} y={85} size={20} fill="#fff">N</T>
      <T x={285} y={85} size={20} fill="#fff">S</T>
      <polygon points="100,60 220,60 200,110 120,110" fill="none" stroke={C.orange} strokeWidth={4} strokeLinejoin="round" />
      <Arrow x1={126} y1={64} x2={194} y2={64} color={C.orange} width={2} />
      <Arrow x1={184} y1={106} x2={136} y2={106} color={C.orange} width={2} />
      <Arrow x1={100} y1={60} x2={100} y2={20} color={C.purple} width={3} />
      <Arrow x1={220} y1={60} x2={220} y2={100} color={C.purple} width={3} />
      <T x={92} y={24} size={10} anchor="end" fill={C.purple}>up</T>
      <T x={228} y={100} size={10} anchor="start" fill={C.purple}>down</T>
      <line x1={150} y1={110} x2={150} y2={136} stroke={C.orange} strokeWidth={3} />
      <line x1={170} y1={110} x2={170} y2={136} stroke={C.orange} strokeWidth={3} />
      <path d="M146 150 A14 14 0 0 1 158 136" fill="none" stroke={C.brown} strokeWidth={5} />
      <path d="M162 136 A14 14 0 0 1 174 150" fill="none" stroke={C.brown} strokeWidth={5} />
      <Label x={194} y={158} px={174} py={146}>split-ring commutator</Label>
      <T x={160} y={176} size={10} weight={700} fill={C.muted}>one side pushed up, the other down:</T>
      <T x={160} y={190} size={10} fill={C.purple}>the coil spins</T>
    </Svg>
  );
}

export const physicsY89Diagrams: Record<string, () => JSX.Element> = {
  'static-balloon': StaticBalloon,
  charges: Charges,
  'motor-effect': MotorEffect,
  'dc-motor': DcMotor,
  'density-blocks': DensityBlocks,
  displacement: Displacement,
  'ks3-heating-curve': Ks3HeatingCurve,
  'gas-pressure': GasPressure,
  brownian: Brownian,
  'convection-room': ConvectionRoom,
  'vacuum-flask': VacuumFlask,
  'water-spurts': WaterSpurts,
  upthrust: Upthrust,
  seesaw: Seesaw,
  lever: Lever,
  'force-extension': ForceExtension,
  'work-done': WorkDone,
  ramp: Ramp,
  'wave-parts': WaveParts,
  superposition: Superposition,
  oscilloscope: Oscilloscope,
  sonar: Sonar,
  pinhole: Pinhole,
  eye: Eye,
  lenses: Lenses,
  glasses: Glasses,
};
