import { Arrow, Box, C, CurveArrow, E, FormulaTriangle, Label, Svg, T, Tiles } from './kit';

// GCSE (AQA) Biology diagrams.

function CellTypes() {
  return (
    <Svg label="A eukaryotic animal cell with a nucleus, and a much smaller prokaryotic bacterial cell with a DNA loop and plasmids">
      <ellipse cx={80} cy={92} rx={68} ry={56} fill="#ffe3ec" stroke="#e8799c" strokeWidth={3} />
      <circle cx={72} cy={88} r={20} fill="#b59cff" stroke={C.purple} strokeWidth={2.5} />
      {[[118, 66], [40, 122], [118, 120]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={10} ry={5} fill="#ffb38a" stroke="#e8743b" strokeWidth={1.5} />)}
      <T x={80} y={166} size={12}>Eukaryotic</T>
      <T x={80} y={182} size={9.5} weight={700} fill={C.muted}>animal / plant: has a nucleus</T>
      <rect x={196} y={64} width={104} height={56} rx={28} fill="#e3f4ff" stroke="#3b7fb5" strokeWidth={3} />
      <path d="M220 92 C222 76 246 74 250 88 C254 104 278 104 276 90" fill="none" stroke={C.purple} strokeWidth={2.5} />
      <circle cx={232} cy={108} r={5} fill="none" stroke={C.pink} strokeWidth={2} />
      <circle cx={286} cy={78} r={4} fill="none" stroke={C.pink} strokeWidth={2} />
      <path d="M300 92 q14 -8 20 4" fill="none" stroke="#3b7fb5" strokeWidth={2} />
      <Label x={206} y={36} px={238} py={80}>DNA loop</Label>
      <Label x={250} y={146} px={232} py={112}>Plasmids</Label>
      <T x={248} y={166} size={12}>Prokaryotic</T>
      <T x={248} y={182} size={9.5} weight={700} fill={C.muted}>bacteria: no nucleus, smaller</T>
    </Svg>
  );
}

function MagTriangle() {
  return <FormulaTriangle top="I" left="A" right="M" label="Magnification triangle: image size equals actual size times magnification" notes={['M = image ÷ actual', 'image = A × M', 'actual = image ÷ M']} />;
}

function Mitosis() {
  const Cell = ({ x, chrom, split = false }: { x: number; chrom: 'single' | 'double' | 'split'; split?: boolean }) => (
    <g>
      {split ? (
        <>
          <ellipse cx={x} cy={80} rx={34} ry={40} fill="#ffe3ec" stroke="#e8799c" strokeWidth={2.5} />
        </>
      ) : <circle cx={x} cy={80} r={34} fill="#ffe3ec" stroke="#e8799c" strokeWidth={2.5} />}
      {chrom === 'single' && [[-8, -6, 20], [8, 8, -30]].map(([dx, dy, a], i) => <rect key={i} x={x + dx - 3} y={80 + dy - 10} width={6} height={20} rx={3} fill={C.purple} transform={`rotate(${a} ${x + dx} ${80 + dy})`} />)}
      {chrom === 'double' && [[-8, -6, 20], [8, 8, -30]].map(([dx, dy, a], i) => (
        <g key={i} transform={`rotate(${a} ${x + dx} ${80 + dy})`}>
          <rect x={x + dx - 6} y={80 + dy - 10} width={5} height={20} rx={2.5} fill={C.purple} />
          <rect x={x + dx + 1} y={80 + dy - 10} width={5} height={20} rx={2.5} fill={C.purple} />
        </g>
      ))}
      {chrom === 'split' && [-22, 22].map((d) => (
        <g key={d}>
          <rect x={x + d - 3} y={70} width={6} height={18} rx={3} fill={C.purple} />
          <rect x={x + d - 3 + (d < 0 ? 8 : -8)} y={74} width={6} height={18} rx={3} fill={C.purple} />
        </g>
      ))}
    </g>
  );
  return (
    <Svg w={334} label="Mitosis: the cell copies its DNA, chromosomes are pulled apart, and two identical cells form">
      <Cell x={42} chrom="single" />
      <Arrow x1={80} y1={80} x2={94} y2={80} color={C.muted} width={2} />
      <Cell x={132} chrom="double" />
      <Arrow x1={170} y1={80} x2={184} y2={80} color={C.muted} width={2} />
      <Cell x={224} chrom="split" split />
      <Arrow x1={262} y1={80} x2={274} y2={80} color={C.muted} width={2} />
      <circle cx={296} cy={58} r={18} fill="#ffe3ec" stroke="#e8799c" strokeWidth={2} />
      <circle cx={296} cy={104} r={18} fill="#ffe3ec" stroke="#e8799c" strokeWidth={2} />
      {[58, 104].map((y) => <rect key={y} x={293} y={y - 8} width={6} height={16} rx={3} fill={C.purple} />)}
      <T x={42} y={136} size={10}>1. Cell</T>
      <T x={132} y={136} size={10}>2. DNA copied</T>
      <T x={224} y={136} size={10}>3. Pulled apart</T>
      <T x={296} y={136} size={10}>4. Two cells</T>
      <T x={160} y={170} size={11}>two genetically identical cells</T>
      <T x={160} y={188} size={9.5} weight={700} fill={C.muted}>used for growth and repair</T>
    </Svg>
  );
}

function Osmosis() {
  const water = [[30, 50], [60, 80], [40, 120], [80, 140], [100, 60], [110, 110], [70, 40], [130, 150], [20, 160], [120, 30]];
  const waterR = [[200, 50], [240, 140], [280, 80]];
  const sugar = [[210, 100], [250, 60], [290, 130], [230, 170], [270, 30], [300, 170]];
  return (
    <Svg label="Osmosis: water moves through a partially permeable membrane from a dilute solution to a concentrated solution">
      <rect x={10} y={16} width={300} height={170} rx={12} fill="#f5fbff" stroke={C.line} strokeWidth={2} />
      <line x1={160} y1={16} x2={160} y2={186} stroke={C.ink} strokeWidth={3} strokeDasharray="10 6" />
      {water.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} fill={C.blue} />)}
      {waterR.map(([x, y], i) => <circle key={`r${i}`} cx={x} cy={y} r={6} fill={C.blue} />)}
      {sugar.map(([x, y], i) => <circle key={`s${i}`} cx={x} cy={y} r={11} fill={C.orange} />)}
      <Arrow x1={110} y1={88} x2={204} y2={88} color={C.green} width={4} />
      <T x={85} y={196} size={10}>dilute (lots of water)</T>
      <T x={240} y={196} size={10}>concentrated</T>
      <T x={160} y={8} size={9.5} weight={700} fill={C.muted}>partially permeable membrane: water passes, sugar can’t</T>
    </Svg>
  );
}

function TransportCompare() {
  return (
    <Svg h={170} label="Comparing diffusion, osmosis and active transport">
      {[
        { t: 'Diffusion', s: 'any particles', d: 'high → low', e: 'no energy', c: C.blueSoft },
        { t: 'Osmosis', s: 'water only', d: 'dilute → conc.', e: 'no energy', c: C.greenSoft },
        { t: 'Active transport', s: 'e.g. mineral ions', d: 'low → high', e: 'needs energy', c: C.orangeSoft },
      ].map((r, i) => {
        const x = 6 + i * 104;
        return (
          <g key={r.t}>
            <rect x={x} y={8} width={98} height={150} rx={12} fill={r.c} />
            <T x={x + 49} y={28} size={11}>{r.t}</T>
            <T x={x + 49} y={60} size={10} fill={C.muted}>{r.s}</T>
            <T x={x + 49} y={92} size={12}>{r.d}</T>
            <T x={x + 49} y={124} size={10.5} fill={i === 2 ? '#c0392b' : '#178a60'}>{r.e}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function LockKey() {
  return (
    <Svg h={170} label="Lock and key: the substrate fits the enzyme's active site and is broken into products">
      <path d="M20 120 L20 60 L60 60 L60 80 L80 80 L80 60 L120 60 L120 120 Z" fill={C.purple} />
      <T x={70} y={140} size={11}>Enzyme</T>
      <path d="M62 52 L62 34 L78 34 L78 52 Z" fill={C.gold} />
      <Arrow x1={70} y1={16} x2={70} y2={30} color={C.muted} width={2} />
      <T x={110} y={30} size={10} fill="#b38600" anchor="start">substrate</T>
      <Label x={10} y={160} px={70} py={82}>active site</Label>
      <Arrow x1={140} y1={90} x2={176} y2={90} color={C.muted} width={2.5} />
      <path d="M190 120 L190 60 L230 60 L230 80 L250 80 L250 60 L290 60 L290 120 Z" fill={C.purple} />
      <rect x={232} y={30} width={14} height={9} rx={2} fill={C.gold} />
      <rect x={254} y={42} width={14} height={9} rx={2} fill={C.gold} />
      <T x={240} y={140} size={11}>Products released</T>
      <T x={240} y={158} size={9.5} weight={700} fill={C.muted}>enzyme unchanged, ready again</T>
    </Svg>
  );
}

function EnzymeGraph() {
  return (
    <Svg label="Enzyme activity rises with temperature to an optimum, then falls quickly as the enzyme is denatured">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <path d="M40 160 C120 140 150 40 180 36 C200 34 210 90 236 166" fill="none" stroke={C.purple} strokeWidth={4} />
      <line x1={180} y1={36} x2={180} y2={170} stroke={C.muted} strokeWidth={1.5} strokeDasharray="4 3" />
      <T x={180} y={184} size={10.5}>optimum (~37 °C)</T>
      <T x={250} y={110} size={10.5} fill={C.red} anchor="start">denatured</T>
      <T x={170} y={196} size={9.5} fill={C.muted}>temperature</T>
      <g transform="rotate(-90 22 92)"><T x={22} y={92} size={9.5} fill={C.muted}>rate of reaction</T></g>
    </Svg>
  );
}

function Heart() {
  return (
    <Svg w={330} label="The heart: right side pumps deoxygenated blood to the lungs, left side pumps oxygenated blood to the body">
      {/* chambers: viewer's left is the heart's right side */}
      <rect x={60} y={50} width={80} height={52} rx={14} fill="#9ec5ff" stroke="#3b6fcc" strokeWidth={2.5} />
      <rect x={150} y={50} width={80} height={52} rx={14} fill="#ff9e9e" stroke="#c0392b" strokeWidth={2.5} />
      <path d="M60 108 L140 108 L140 170 Q100 190 60 150 Z" fill="#9ec5ff" stroke="#3b6fcc" strokeWidth={2.5} />
      <path d="M150 108 L230 108 L230 150 Q190 196 150 170 Z" fill="#ff9e9e" stroke="#c0392b" strokeWidth={4.5} />
      <T x={100} y={70} size={10}>Right</T>
      <T x={100} y={84} size={10}>atrium</T>
      <T x={190} y={70} size={10}>Left</T>
      <T x={190} y={84} size={10}>atrium</T>
      <T x={100} y={132} size={10}>Right</T>
      <T x={100} y={146} size={10}>ventricle</T>
      <T x={190} y={132} size={10}>Left</T>
      <T x={190} y={146} size={10}>ventricle</T>
      {/* blood in: from the body into the right atrium, from the lungs into the left atrium */}
      <Arrow x1={100} y1={10} x2={100} y2={46} color="#3b6fcc" width={3} />
      <T x={100} y={4} size={9.5} fill="#3b6fcc">from body</T>
      <Arrow x1={190} y1={10} x2={190} y2={46} color="#c0392b" width={3} />
      <T x={190} y={4} size={9.5} fill="#c0392b">from lungs</T>
      {/* blood out: right ventricle to the lungs, left ventricle to the body */}
      <path d="M62 150 Q30 140 30 60 L30 30" fill="none" stroke="#3b6fcc" strokeWidth={3} />
      <Arrow x1={30} y1={40} x2={30} y2={18} color="#3b6fcc" width={3} />
      <T x={30} y={10} size={9.5} fill="#3b6fcc">to lungs</T>
      <path d="M228 150 Q262 140 262 60 L262 30" fill="none" stroke="#c0392b" strokeWidth={3} />
      <Arrow x1={262} y1={40} x2={262} y2={18} color="#c0392b" width={3} />
      <T x={262} y={10} size={9.5} fill="#c0392b">to body</T>
      <T x={298} y={140} size={9.5} fill="#c0392b">thick wall</T>
      <T x={165} y={196} size={9.5} weight={700} fill={C.muted}>blue = deoxygenated · red = oxygenated · (drawn as if facing you)</T>
    </Svg>
  );
}

function Vessels() {
  return (
    <Svg h={170} label="Cross-sections of an artery (thick wall), a vein (thin wall, wide lumen, valves) and a capillary (one cell thick)">
      <circle cx={56} cy={66} r={44} fill="#f7c4c4" />
      <circle cx={56} cy={66} r={16} fill="#ff6b6b" />
      <T x={56} y={126} size={12}>Artery</T>
      <T x={56} y={142} size={9} weight={700} fill={C.muted}>thick, elastic walls</T>
      <T x={56} y={154} size={9} weight={700} fill={C.muted}>high pressure</T>
      <ellipse cx={162} cy={66} rx={46} ry={36} fill="#c9d8f7" />
      <ellipse cx={162} cy={66} rx={38} ry={28} fill="#7f9fe0" />
      <T x={162} y={126} size={12}>Vein</T>
      <T x={162} y={142} size={9} weight={700} fill={C.muted}>thin walls, wide lumen</T>
      <T x={162} y={154} size={9} weight={700} fill={C.muted}>valves</T>
      <circle cx={264} cy={66} r={12} fill="#ffd0d0" stroke="#e57373" strokeWidth={2} />
      <circle cx={264} cy={66} r={5} fill="#ff6b6b" />
      <T x={264} y={126} size={12}>Capillary</T>
      <T x={264} y={142} size={9} weight={700} fill={C.muted}>one cell thick</T>
      <T x={264} y={154} size={9} weight={700} fill={C.muted}>for diffusion</T>
    </Svg>
  );
}

function XylemPhloem() {
  return (
    <Svg label="Xylem carries water and minerals up from the roots; phloem carries dissolved sugars both ways">
      <rect x={70} y={14} width={40} height={160} fill="#e0f2ff" stroke="#3b7fb5" strokeWidth={2.5} />
      {[50, 90, 130].map((y) => <line key={y} x1={70} y1={y} x2={110} y2={y} stroke="#9cc9ec" strokeWidth={1.5} strokeDasharray="3 3" />)}
      <Arrow x1={90} y1={160} x2={90} y2={28} color={C.blue} width={4} />
      <T x={90} y={188} size={12} fill="#3b7fb5">Xylem</T>
      <T x={22} y={60} size={9.5} anchor="start" fill={C.muted}>dead cells,</T>
      <T x={22} y={73} size={9.5} anchor="start" fill={C.muted}>lignin</T>
      <rect x={180} y={14} width={40} height={160} fill="#fff1d6" stroke="#c99400" strokeWidth={2.5} />
      {[40, 80, 120, 160].map((y) => <line key={y} x1={180} y1={y} x2={220} y2={y} stroke="#c99400" strokeWidth={2} />)}
      <Arrow x1={200} y1={30} x2={200} y2={90} color={C.orange} width={4} />
      <Arrow x1={200} y1={150} x2={200} y2={100} color={C.orange} width={4} />
      <T x={200} y={188} size={12} fill="#b36b00">Phloem</T>
      <T x={240} y={60} size={9.5} anchor="start" fill={C.muted}>living cells</T>
      <T x={240} y={90} size={9.5} anchor="start" fill={C.muted}>sugars both</T>
      <T x={240} y={103} size={9.5} anchor="start" fill={C.muted}>ways</T>
      <T x={14} y={140} size={9.5} anchor="start" fill={C.blue}>water +</T>
      <T x={14} y={153} size={9.5} anchor="start" fill={C.blue}>minerals ↑</T>
    </Svg>
  );
}

function Pathogens() {
  return (
    <Tiles
      label="Four types of pathogen with examples: virus, bacterium, fungus, protist"
      cols={4}
      items={[
        { e: '🦠', title: 'Virus', sub: 'measles, HIV, TMV', colour: C.purpleSoft },
        { e: '🧫', title: 'Bacterium', sub: 'salmonella, gonorrhoea', colour: C.greenSoft },
        { e: '🍄', title: 'Fungus', sub: 'rose black spot', colour: C.orangeSoft },
        { e: '🦟', title: 'Protist', sub: 'malaria (mosquito)', colour: C.blueSoft },
      ]}
    />
  );
}

function AntibodyGraph() {
  return (
    <Svg label="After vaccination, a second exposure to the pathogen makes antibodies faster and in larger amounts">
      <line x1={40} y1={170} x2={306} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <path d="M50 168 C80 168 90 120 110 120 C130 120 140 160 170 164" fill="none" stroke={C.blue} strokeWidth={3.5} />
      <path d="M190 168 C200 168 205 34 222 30 C240 26 260 60 300 70" fill="none" stroke={C.green} strokeWidth={3.5} />
      <line x1={40} y1={110} x2={306} y2={110} stroke={C.red} strokeWidth={1.5} strokeDasharray="5 4" />
      <T x={300} y={102} size={9} fill={C.red} anchor="end">level needed for immunity</T>
      <T x={95} y={186} size={10}>vaccine</T>
      <T x={222} y={186} size={10}>real pathogen</T>
      <E e="💉" x={60} y={150} size={20} />
      <T x={110} y={106} size={9.5} fill={C.blue}>slow, small</T>
      <T x={250} y={20} size={9.5} fill={C.green}>fast, big: no illness</T>
      <g transform="rotate(-90 22 92)"><T x={22} y={92} size={9.5} fill={C.muted}>antibodies</T></g>
    </Svg>
  );
}

function DrugTrials() {
  const steps = [
    { e: '🧫', t: 'Cells and tissues', s: 'toxicity' },
    { e: '🐁', t: 'Live animals', s: 'preclinical' },
    { e: '🧑', t: 'Healthy volunteers', s: 'very low doses' },
    { e: '🏥', t: 'Patients', s: 'optimum dose; placebo' },
  ];
  return (
    <Svg h={190} label="Stages of drug testing: cells and tissues, animals, healthy volunteers, then patients">
      {steps.map((st, i) => {
        const y = 10 + i * 44;
        return (
          <g key={st.t}>
            <rect x={40} y={y} width={270} height={36} rx={10} fill={i < 2 ? C.soft : C.greenSoft} stroke={C.line} strokeWidth={1.5} />
            <E e={st.e} x={62} y={y + 18} size={24} />
            <T x={82} y={y + 18} size={11.5} anchor="start">{st.t}</T>
            <T x={300} y={y + 18} size={9.5} weight={700} fill={C.muted} anchor="end">{st.s}</T>
            {i < steps.length - 1 && <Arrow x1={22} y1={y + 18} x2={22} y2={y + 56} color={C.muted} width={2} />}
          </g>
        );
      })}
    </Svg>
  );
}

function LimitingFactors() {
  return (
    <Svg label="Rate of photosynthesis rises with light intensity until another factor such as CO2 or temperature limits it">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <path d="M40 170 L150 80 L300 80" fill="none" stroke={C.green} strokeWidth={4} strokeLinejoin="round" />
      <path d="M40 170 L120 104 L300 104" fill="none" stroke={C.blue} strokeWidth={3} strokeDasharray="6 4" strokeLinejoin="round" />
      <T x={230} y={70} size={10} fill={C.green}>high CO₂</T>
      <T x={230} y={118} size={10} fill={C.blue}>low CO₂</T>
      <T x={78} y={96} size={9.5} fill={C.muted}>light limits</T>
      <T x={220} y={46} size={9.5} fill={C.muted}>flat: something else limits</T>
      <T x={170} y={190} size={10} fill={C.muted}>light intensity</T>
      <g transform="rotate(-90 22 92)"><T x={22} y={92} size={9.5} fill={C.muted}>rate of photosynthesis</T></g>
    </Svg>
  );
}

function RespCompare() {
  return (
    <Svg h={170} label="Aerobic respiration releases more energy than anaerobic respiration">
      <rect x={6} y={8} width={308} height={48} rx={10} fill={C.greenSoft} />
      <T x={16} y={24} size={11} anchor="start">Aerobic (with oxygen)</T>
      <T x={16} y={42} size={11} anchor="start" fill={C.muted}>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</T>
      <T x={304} y={33} size={14} anchor="end">⚡⚡⚡</T>
      <rect x={6} y={62} width={308} height={48} rx={10} fill={C.redSoft} />
      <T x={16} y={78} size={11} anchor="start">Anaerobic in muscles</T>
      <T x={16} y={96} size={11} anchor="start" fill={C.muted}>glucose → lactic acid</T>
      <T x={304} y={87} size={14} anchor="end">⚡</T>
      <rect x={6} y={116} width={308} height={48} rx={10} fill={C.goldSoft} />
      <T x={16} y={132} size={11} anchor="start">Anaerobic in yeast and plants</T>
      <T x={16} y={150} size={11} anchor="start" fill={C.muted}>glucose → ethanol + carbon dioxide</T>
      <T x={304} y={141} size={14} anchor="end">⚡</T>
    </Svg>
  );
}

function ExerciseGraph() {
  return (
    <Svg label="Heart rate rises during exercise and stays high for a while afterwards to repay the oxygen debt">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <rect x={100} y={14} width={100} height={156} fill={C.orangeSoft} opacity={0.7} />
      <T x={150} y={26} size={10} fill="#c2410c">exercise</T>
      <path d="M40 140 L100 140 C120 140 120 50 150 50 L200 50 C230 50 240 120 300 138" fill="none" stroke={C.red} strokeWidth={4} />
      <T x={256} y={30} size={10} fill={C.muted}>recovery:</T>
      <T x={256} y={44} size={10} fill={C.muted}>oxygen debt</T>
      <T x={170} y={190} size={10} fill={C.muted}>time</T>
      <g transform="rotate(-90 22 92)"><T x={22} y={92} size={9.5} fill={C.muted}>heart rate</T></g>
    </Svg>
  );
}

function ReflexArc() {
  const steps = [
    { e: '🔥', t: 'Stimulus' },
    { e: '👆', t: 'Receptor' },
    { e: '➡️', t: 'Sensory neurone' },
    { e: '🦴', t: 'Relay (spinal cord)' },
    { e: '➡️', t: 'Motor neurone' },
    { e: '💪', t: 'Effector (muscle)' },
  ];
  return (
    <Svg h={190} label="Reflex arc: stimulus, receptor, sensory neurone, relay neurone in the spinal cord, motor neurone, effector, response">
      {steps.map((s, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = row === 0 ? 50 + col * 104 : 258 - col * 104;
        const y = 44 + row * 92;
        return (
          <g key={s.t}>
            <circle cx={x} cy={y} r={26} fill={i === 3 ? C.purpleSoft : C.soft} stroke={C.line} strokeWidth={2} />
            <E e={s.e} x={x} y={y} size={28} />
            <T x={x} y={y + 40} size={10}>{s.t}</T>
            {col < 2 && <Arrow x1={row === 0 ? x + 30 : x - 30} y1={y} x2={row === 0 ? x + 72 : x - 72} y2={y} color={C.green} width={2.5} />}
          </g>
        );
      })}
      <CurveArrow d="M288 66 Q312 100 288 120" color={C.green} width={2.5} />
    </Svg>
  );
}

function Glands() {
  return (
    <Tiles
      label="Endocrine glands and their hormones"
      cols={3}
      items={[
        { e: '🧠', title: 'Pituitary', sub: 'master gland: FSH, LH…' },
        { e: '🦋', title: 'Thyroid', sub: 'thyroxine' },
        { e: '⚡', title: 'Adrenal', sub: 'adrenaline' },
        { e: '🍬', title: 'Pancreas', sub: 'insulin, glucagon' },
        { e: '🥚', title: 'Ovaries', sub: 'oestrogen' },
        { e: '🧬', title: 'Testes', sub: 'testosterone' },
      ]}
    />
  );
}

function GlucoseControl() {
  return (
    <Svg label="Blood glucose control: too high, insulin is released and glucose is stored as glycogen; too low, glucagon releases glucose">
      <Box x={110} y={78} w={100} h={44} fill={C.goldSoft} stroke="#e8c64a" size={12}>Normal glucose</Box>
      <Box x={10} y={10} w={120} h={40} fill={C.redSoft} stroke="#f3a5a5" size={11}>Too high ↑</Box>
      <Box x={190} y={150} w={120} h={40} fill={C.blueSoft} stroke="#9cc9ec" size={11}>Too low ↓</Box>
      <Arrow x1={130} y1={40} x2={200} y2={40} color={C.ink} width={2} />
      <T x={250} y={30} size={11} fill={C.purple}>insulin</T>
      <T x={250} y={48} size={9} weight={700} fill={C.muted}>glucose → glycogen</T>
      <Arrow x1={250} y1={58} x2={190} y2={80} color={C.purple} width={2.5} />
      <Arrow x1={190} y1={170} x2={110} y2={170} color={C.ink} width={2} />
      <T x={70} y={162} size={11} fill={C.orange}>glucagon</T>
      <T x={70} y={180} size={9} weight={700} fill={C.muted}>glycogen → glucose</T>
      <Arrow x1={70} y1={150} x2={130} y2={120} color={C.orange} width={2.5} />
      <T x={160} y={140} size={9.5} weight={700} fill={C.muted}>both made by the pancreas</T>
    </Svg>
  );
}

function ReproHormones() {
  return (
    <Tiles
      label="Hormones in the menstrual cycle: FSH, LH, oestrogen, progesterone"
      cols={4}
      items={[
        { e: '🥚', title: 'FSH', sub: 'egg matures', colour: C.purpleSoft },
        { e: '🚀', title: 'LH', sub: 'ovulation', colour: C.blueSoft },
        { e: '🧱', title: 'Oestrogen', sub: 'builds lining', colour: C.redSoft },
        { e: '🛡️', title: 'Progesterone', sub: 'keeps lining', colour: C.goldSoft },
      ]}
    />
  );
}

function MitosisMeiosis() {
  return (
    <Svg label="Mitosis makes 2 identical cells with 46 chromosomes; meiosis makes 4 different gametes with 23 chromosomes">
      <rect x={6} y={6} width={150} height={188} rx={12} fill={C.greenSoft} />
      <rect x={164} y={6} width={150} height={188} rx={12} fill={C.purpleSoft} />
      <T x={81} y={24} size={12}>Mitosis</T>
      <T x={239} y={24} size={12}>Meiosis</T>
      <circle cx={81} cy={62} r={20} fill="#fff" stroke={C.green} strokeWidth={2} />
      <T x={81} y={62} size={11}>46</T>
      <Arrow x1={72} y1={84} x2={56} y2={104} color={C.muted} width={2} />
      <Arrow x1={90} y1={84} x2={106} y2={104} color={C.muted} width={2} />
      {[50, 112].map((x) => (
        <g key={x}>
          <circle cx={x} cy={124} r={18} fill="#fff" stroke={C.green} strokeWidth={2} />
          <T x={x} y={124} size={11}>46</T>
        </g>
      ))}
      <T x={81} y={162} size={10}>2 identical cells</T>
      <T x={81} y={178} size={9} weight={700} fill={C.muted}>growth, repair, cloning</T>
      <circle cx={239} cy={62} r={20} fill="#fff" stroke={C.purple} strokeWidth={2} />
      <T x={239} y={62} size={11}>46</T>
      {[190, 222, 256, 288].map((x, i) => (
        <g key={x}>
          <Arrow x1={239} y1={84} x2={x + (239 - x) * 0.2} y2={106} color={C.muted} width={1.5} />
          <circle cx={x} cy={124} r={14} fill={['#fff', '#f3eeff', '#e9e1ff', '#ddd1ff'][i]} stroke={C.purple} strokeWidth={2} />
          <T x={x} y={124} size={10}>23</T>
        </g>
      ))}
      <T x={239} y={162} size={10}>4 different gametes</T>
      <T x={239} y={178} size={9} weight={700} fill={C.muted}>sperm and egg cells</T>
    </Svg>
  );
}

function Punnett() {
  const cell = (x: number, y: number, t: string, rec = false) => (
    <g key={`${x}${y}`}>
      <rect x={x} y={y} width={60} height={50} fill={rec ? C.orangeSoft : C.purpleSoft} stroke={C.ink} strokeWidth={1.5} />
      <T x={x + 30} y={y + 25} size={16} fill={rec ? '#c2410c' : C.purple}>{t}</T>
    </g>
  );
  return (
    <Svg label="Punnett square for Bb crossed with Bb: BB, Bb, Bb, bb, a 3 to 1 ratio">
      <T x={110} y={20} size={16}>B</T>
      <T x={170} y={20} size={16}>b</T>
      <T x={62} y={60} size={16}>B</T>
      <T x={62} y={110} size={16}>b</T>
      <T x={22} y={86} size={10} fill={C.muted}>parent</T>
      <T x={140} y={6} size={9.5} fill={C.muted}>parent: Bb</T>
      {cell(80, 35, 'BB')}
      {cell(140, 35, 'Bb')}
      {cell(80, 85, 'Bb')}
      {cell(140, 85, 'bb', true)}
      <T x={262} y={60} size={12}>3 : 1</T>
      <T x={262} y={78} size={9.5} weight={700} fill={C.muted}>dominant : recessive</T>
      <T x={262} y={108} size={12} fill="#c2410c">bb = 1 in 4</T>
      <T x={262} y={126} size={9.5} weight={700} fill={C.muted}>25% chance</T>
      <T x={140} y={160} size={10} weight={700} fill={C.muted}>B = dominant allele · b = recessive allele</T>
    </Svg>
  );
}

function ThreeDomains() {
  return (
    <Svg h={170} label="Woese's three domains: Archaea, Bacteria and Eukaryota">
      <path d="M160 132 L160 104 M160 104 L60 60 M160 104 L160 60 M160 104 L260 60" stroke={C.muted} strokeWidth={3} fill="none" />
      <Box x={10} y={20} w={100} h={40} fill={C.orangeSoft} stroke={C.orange} size={12}>Archaea</Box>
      <Box x={110} y={20} w={100} h={40} fill={C.greenSoft} stroke={C.green} size={12}>Bacteria</Box>
      <Box x={210} y={20} w={100} h={40} fill={C.purpleSoft} stroke={C.purple} size={12}>Eukaryota</Box>
      <T x={160} y={148} size={9.5} weight={700} fill={C.muted}>Archaea: often extremophiles</T>
      <T x={160} y={162} size={9.5} weight={700} fill={C.muted}>Eukaryota: animals, plants, fungi, protists</T>
      <T x={160} y={14} size={9.5} weight={700} fill={C.muted}>Carl Woese, using chemical analysis</T>
    </Svg>
  );
}

function BioticAbiotic() {
  return (
    <Svg label="Abiotic (non-living) and biotic (living) factors">
      <rect x={6} y={6} width={150} height={188} rx={12} fill={C.blueSoft} />
      <rect x={164} y={6} width={150} height={188} rx={12} fill={C.greenSoft} />
      <T x={81} y={24} size={12}>Abiotic</T>
      <T x={239} y={24} size={12}>Biotic</T>
      {['☀️ light', '🌡️ temperature', '💧 moisture', '🧪 soil pH, minerals', '🌬️ wind', '💨 CO₂ / O₂'].map((r, i) => {
        const [e, ...t] = r.split(' ');
        return <g key={r}><E e={e} x={28} y={48 + i * 24} size={18} /><T x={42} y={48 + i * 24} size={10.5} anchor="start">{t.join(' ')}</T></g>;
      })}
      {['🍎 food', '🐺 predators', '🦠 pathogens', '🥊 competition'].map((r, i) => {
        const [e, ...t] = r.split(' ');
        return <g key={r}><E e={e} x={186} y={48 + i * 24} size={18} /><T x={200} y={48 + i * 24} size={10.5} anchor="start">{t.join(' ')}</T></g>;
      })}
    </Svg>
  );
}

function CarbonCycle() {
  return (
    <Svg label="The carbon cycle: photosynthesis takes CO2 from the air; respiration, decay and combustion return it">
      <Box x={110} y={6} w={100} h={36} fill={C.soft} size={11}>CO₂ in the air</Box>
      <E e="🌳" x={44} y={110} size={40} />
      <T x={44} y={140} size={10}>plants</T>
      <E e="🐄" x={160} y={150} size={36} />
      <T x={160} y={178} size={10}>animals</T>
      <E e="🍄" x={276} y={110} size={34} />
      <T x={276} y={140} size={10}>decomposers</T>
      <E e="🏭" x={282} y={40} size={30} />
      <Arrow x1={120} y1={36} x2={58} y2={90} color={C.green} width={3} />
      <T x={58} y={56} size={9.5} fill={C.green}>photosynthesis</T>
      <Arrow x1={66} y1={120} x2={140} y2={146} color={C.muted} width={2.5} />
      <T x={92} y={150} size={9} fill={C.muted}>eaten</T>
      <Arrow x1={180} y1={146} x2={258} y2={120} color={C.muted} width={2.5} />
      <T x={226} y={150} size={9} fill={C.muted}>death, waste</T>
      <Arrow x1={160} y1={130} x2={160} y2={46} color={C.red} width={2.5} />
      <Arrow x1={268} y1={92} x2={200} y2={42} color={C.red} width={2.5} />
      <Arrow x1={264} y1={36} x2={212} y2={26} color={C.red} width={2.5} />
      <T x={196} y={90} size={9.5} fill={C.red}>respiration</T>
      <T x={252} y={18} size={9} fill={C.red} anchor="start">combustion</T>
    </Svg>
  );
}

function HumanImpact() {
  return (
    <Tiles
      label="Human impact on the environment"
      cols={3}
      items={[
        { e: '🚰', title: 'Water pollution', sub: 'sewage, fertiliser' },
        { e: '🏭', title: 'Air pollution', sub: 'smoke, acid gases' },
        { e: '🗑️', title: 'Land pollution', sub: 'landfill, chemicals' },
        { e: '🪓', title: 'Deforestation', sub: 'less CO₂ absorbed' },
        { e: '🟫', title: 'Peat bogs', sub: 'burning releases CO₂' },
        { e: '🌡️', title: 'Global warming', sub: 'species move or die' },
      ]}
    />
  );
}

export const gcseBiologyDiagrams: Record<string, () => JSX.Element> = {
  'cell-types': CellTypes,
  'mag-triangle': MagTriangle,
  mitosis: Mitosis,
  osmosis: Osmosis,
  'transport-compare': TransportCompare,
  'lock-key': LockKey,
  'enzyme-graph': EnzymeGraph,
  heart: Heart,
  vessels: Vessels,
  'xylem-phloem': XylemPhloem,
  pathogens: Pathogens,
  'antibody-graph': AntibodyGraph,
  'drug-trials': DrugTrials,
  'limiting-factors': LimitingFactors,
  'resp-compare': RespCompare,
  'exercise-graph': ExerciseGraph,
  'reflex-arc': ReflexArc,
  glands: Glands,
  'glucose-control': GlucoseControl,
  'repro-hormones': ReproHormones,
  'mitosis-meiosis': MitosisMeiosis,
  punnett: Punnett,
  'three-domains': ThreeDomains,
  'biotic-abiotic': BioticAbiotic,
  'carbon-cycle': CarbonCycle,
  'human-impact': HumanImpact,
};
