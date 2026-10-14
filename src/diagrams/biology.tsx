import { Arrow, Box, C, E, Equation, Label, Svg, T, Tiles } from './kit';

// Biology lesson diagrams.

function AnimalCell() {
  return (
    <Svg label="An animal cell with nucleus, cytoplasm, cell membrane and mitochondria">
      <ellipse cx={120} cy={100} rx={95} ry={72} fill="#ffe3ec" stroke="#e8799c" strokeWidth={4} />
      <circle cx={110} cy={95} r={26} fill="#b59cff" stroke="#7c4dff" strokeWidth={3} />
      <circle cx={104} cy={90} r={7} fill="#7c4dff" opacity={0.6} />
      {[[165, 70], [70, 140], [170, 135]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${i * 50 - 20})`}>
          <ellipse rx={15} ry={8} fill="#ffb38a" stroke="#e8743b" strokeWidth={2} />
          <path d="M-9 0 q3 -5 6 0 q3 5 6 0 q3 -5 6 0" fill="none" stroke="#e8743b" strokeWidth={1.5} />
        </g>
      ))}
      <Label x={232} y={40} px={128} py={86}>Nucleus</Label>
      <Label x={232} y={78} px={175} py={62}>Mitochondria</Label>
      <Label x={232} y={118} px={150} py={110}>Cytoplasm</Label>
      <Label x={232} y={160} px={196} py={148}>Cell membrane</Label>
    </Svg>
  );
}

function PlantCell() {
  return (
    <Svg label="A plant cell with cell wall, cell membrane, vacuole, chloroplasts, nucleus and cytoplasm">
      <rect x={22} y={22} width={190} height={156} rx={10} fill="#d7f2c8" stroke="#3f9a45" strokeWidth={7} />
      <rect x={30} y={30} width={174} height={140} rx={6} fill="#eefbe6" stroke="#7cc46a" strokeWidth={2} />
      <rect x={70} y={58} width={95} height={84} rx={22} fill="#cfe9ff" stroke="#6fb6ea" strokeWidth={2.5} />
      <circle cx={180} cy={52} r={15} fill="#b59cff" stroke="#7c4dff" strokeWidth={2.5} />
      {[[50, 140], [55, 46], [185, 150], [120, 158], [50, 100], [188, 104]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx={10} ry={6} fill="#4caf50" stroke="#2e7d32" strokeWidth={1.5} />
      ))}
      <Label x={232} y={22} px={212} py={30}>Cell wall</Label>
      <Label x={232} y={54} px={192} py={54}>Nucleus</Label>
      <Label x={232} y={86} px={204} py={84}>Cell membrane</Label>
      <Label x={232} y={118} px={160} py={116}>Vacuole</Label>
      <Label x={232} y={152} px={190} py={150}>Chloroplast</Label>
      <T x={117} y={100} size={10} fill="#3b7fb5">cell sap</T>
    </Svg>
  );
}

function Microscope() {
  return (
    <Svg label="A labelled light microscope">
      {/* base and arm */}
      <rect x={60} y={170} width={110} height={16} rx={6} fill="#5b4a7a" />
      <path d="M140 170 L140 120 Q140 70 112 52" fill="none" stroke="#5b4a7a" strokeWidth={14} strokeLinecap="round" />
      {/* body tube */}
      <rect x={80} y={36} width={26} height={60} rx={4} fill="#8a7aa8" transform="rotate(-18 93 66)" />
      {/* eyepiece */}
      <rect x={70} y={14} width={22} height={26} rx={4} fill="#3b2a4a" transform="rotate(-18 81 27)" />
      {/* objective lenses */}
      <rect x={96} y={96} width={10} height={20} rx={3} fill="#3b2a4a" />
      <rect x={108} y={94} width={8} height={16} rx={3} fill="#6c5c8a" />
      {/* stage */}
      <rect x={70} y={124} width={80} height={8} rx={2} fill="#3b2a4a" />
      <rect x={88} y={119} width={40} height={5} rx={1} fill="#cfe9ff" stroke="#6fb6ea" />
      {/* light */}
      <circle cx={102} cy={154} r={9} fill={C.gold} stroke="#d9a700" strokeWidth={2} />
      {/* focus knobs */}
      <circle cx={148} cy={102} r={11} fill="#3b2a4a" />
      <circle cx={148} cy={128} r={7} fill="#6c5c8a" />
      <Label x={190} y={20} px={84} py={22}>Eyepiece lens</Label>
      <Label x={190} y={48} px={150} py={102}>Coarse focus</Label>
      <Label x={190} y={76} px={150} py={128}>Fine focus</Label>
      <Label x={190} y={104} px={106} py={112}>Objective lenses</Label>
      <Label x={190} y={132} px={140} py={128}>Stage (slide sits here)</Label>
      <Label x={190} y={160} px={110} py={154}>Light source</Label>
    </Svg>
  );
}

function Magnification() {
  return (
    <Svg w={320} h={210} label="Total magnification equals eyepiece magnification times objective magnification: 10 times 40 is 400">
      <Box x={8} y={14} w={86} h={58} fill={C.purpleSoft} stroke={C.purple} />
      <T x={51} y={30} size={12}>Eyepiece</T>
      <T x={51} y={56} size={18} fill={C.purple}>×10</T>
      <T x={108} y={43} size={22} fill={C.muted}>×</T>
      <Box x={122} y={14} w={86} h={58} fill={C.blueSoft} stroke={C.blue} />
      <T x={165} y={30} size={12}>Objective</T>
      <T x={165} y={56} size={18} fill={C.blue}>×40</T>
      <T x={222} y={43} size={22} fill={C.muted}>=</T>
      <Box x={236} y={14} w={78} h={58} fill={C.greenSoft} stroke={C.green} />
      <T x={275} y={30} size={12}>Total</T>
      <T x={275} y={56} size={20} fill={C.green}>×400</T>
      {/* the same cell at three magnifications */}
      <T x={160} y={92} size={11} weight={700} fill={C.muted}>The same onion cell, bigger and bigger:</T>
      {[{ x: 40, s: 0.25, t: '×40' }, { x: 120, s: 0.55, t: '×100' }, { x: 240, s: 1, t: '×400' }].map(({ x, s, t }) => (
        <g key={t}>
          <rect x={x - 46 * s} y={150 - 32 * s} width={92 * s} height={64 * s} rx={4 * s} fill="#eefbe6" stroke="#3f9a45" strokeWidth={Math.max(1, 3 * s)} />
          <circle cx={x - 18 * s} cy={150 - 8 * s} r={10 * s} fill="#b59cff" />
          <T x={x} y={196} size={12} fill={C.muted}>{t}</T>
        </g>
      ))}
    </Svg>
  );
}

function SlidePrep() {
  return (
    <Svg h={150} label="Lower the cover slip at an angle with a needle to avoid air bubbles">
      <rect x={30} y={110} width={260} height={14} rx={3} fill="#e6f4ff" stroke="#9cc9ec" strokeWidth={2} />
      <ellipse cx={160} cy={108} rx={34} ry={6} fill="#ffcf8a" opacity={0.9} />
      <T x={160} y={140} size={11} fill={C.muted}>sample + stain (iodine or methylene blue)</T>
      <g transform="rotate(-28 128 100)">
        <rect x={128} y={96} width={90} height={5} rx={2} fill="#dff1ff" stroke="#7ab7e3" strokeWidth={1.5} />
      </g>
      <line x1={210} y1={36} x2={160} y2={84} stroke="#5b4a7a" strokeWidth={4} strokeLinecap="round" />
      <Label x={228} y={30} px={206} py={40}>Needle</Label>
      <Label x={14} y={60} px={140} py={88}>Cover slip</Label>
      <T x={160} y={14} size={11} fill={C.muted}>lower it at an angle so no air bubbles get trapped</T>
    </Svg>
  );
}

function MrsGren() {
  return (
    <Tiles
      label="MRS GREN: the seven life processes"
      cols={4}
      items={[
        { e: '🏃', title: 'Movement', sub: 'M' },
        { e: '⚡', title: 'Respiration', sub: 'R' },
        { e: '👀', title: 'Sensitivity', sub: 'S' },
        { e: '🌱', title: 'Growth', sub: 'G' },
        { e: '🐣', title: 'Reproduction', sub: 'R' },
        { e: '🚽', title: 'Excretion', sub: 'E' },
        { e: '🍎', title: 'Nutrition', sub: 'N' },
      ]}
    />
  );
}

function SpecialisedCells() {
  return (
    <Svg label="Specialised cells: red blood cell, nerve cell, sperm cell and root hair cell">
      {/* red blood cell */}
      <ellipse cx={45} cy={60} rx={30} ry={22} fill="#ff6b6b" stroke="#c0392b" strokeWidth={2} />
      <ellipse cx={45} cy={60} rx={14} ry={9} fill="#ff9b9b" />
      <T x={45} y={98} size={11}>Red blood cell</T>
      <T x={45} y={112} size={9.5} weight={700} fill={C.muted}>no nucleus</T>
      {/* nerve cell */}
      <circle cx={130} cy={60} r={13} fill="#ffd36b" stroke="#d9a700" strokeWidth={2} />
      <circle cx={130} cy={60} r={5} fill="#b59cff" />
      <path d="M143 60 L205 60" stroke="#d9a700" strokeWidth={4} />
      {[-1, 1].map((d) => <path key={d} d={`M205 60 l12 ${d * 10} M205 60 l14 ${d * 3}`} stroke="#d9a700" strokeWidth={2.5} />)}
      {[-1, 1].map((d) => <path key={`l${d}`} d={`M120 ${60 + d * 8} l-12 ${d * 10}`} stroke="#d9a700" strokeWidth={2.5} />)}
      <T x={165} y={98} size={11}>Nerve cell</T>
      <T x={165} y={112} size={9.5} weight={700} fill={C.muted}>long, carries impulses</T>
      {/* sperm */}
      <ellipse cx={270} cy={60} rx={12} ry={9} fill="#cfe9ff" stroke="#3b7fb5" strokeWidth={2} />
      <path d="M258 60 q-10 -8 -18 0 q-8 8 -16 0 q-8 -8 -14 0" fill="none" stroke="#3b7fb5" strokeWidth={2} />
      <T x={262} y={98} size={11}>Sperm cell</T>
      <T x={262} y={112} size={9.5} weight={700} fill={C.muted}>tail to swim</T>
      {/* root hair */}
      <rect x={70} y={136} width={70} height={36} rx={6} fill="#f2e3c8" stroke="#a0703c" strokeWidth={2} />
      <path d="M140 150 L184 150 Q194 150 194 158 L194 160 Q194 166 184 166 L140 166" fill="#f2e3c8" stroke="#a0703c" strokeWidth={2} />
      <circle cx={92} cy={154} r={7} fill="#b59cff" />
      <T x={256} y={148} size={11}>Root hair cell</T>
      <T x={256} y={164} size={9.5} weight={700} fill={C.muted}>big surface area</T>
    </Svg>
  );
}

function Diffusion() {
  const left = [[30, 50], [55, 40], [44, 75], [70, 66], [28, 110], [60, 100], [80, 128], [40, 142], [88, 90], [70, 150], [50, 160], [92, 52]];
  const right = [[220, 60], [262, 120], [240, 150]];
  return (
    <Svg label="Diffusion: particles spread from high concentration to low concentration">
      <rect x={10} y={20} width={300} height={160} rx={14} fill={C.soft} stroke={C.line} strokeWidth={2} />
      <line x1={160} y1={20} x2={160} y2={180} stroke={C.line} strokeWidth={2} strokeDasharray="6 5" />
      {left.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={7} fill={C.purple} />)}
      {right.map(([x, y], i) => <circle key={`r${i}`} cx={x} cy={y} r={7} fill={C.purple} />)}
      <Arrow x1={110} y1={100} x2={205} y2={100} color={C.green} width={5} />
      <T x={70} y={192} size={11}>High concentration</T>
      <T x={240} y={192} size={11}>Low concentration</T>
    </Svg>
  );
}

function Organisation() {
  const steps = [
    { e: '🦠', t: 'Cell', sub: 'muscle cell' },
    { e: '🧱', t: 'Tissue', sub: 'muscle tissue' },
    { e: '🫀', t: 'Organ', sub: 'heart' },
    { e: '🩸', t: 'Organ system', sub: 'circulatory' },
    { e: '🧍', t: 'Organism', sub: 'you!' },
  ];
  return (
    <Svg w={350} h={140} label="Levels of organisation: cell, tissue, organ, organ system, organism">
      {steps.map((s, i) => {
        const x = 34 + i * 70;
        return (
          <g key={s.t}>
            <circle cx={x} cy={52} r={26} fill={C.soft} stroke={C.line} strokeWidth={2} />
            <E e={s.e} x={x} y={52} size={32} />
            <T x={x} y={96} size={11}>{s.t}</T>
            <T x={x} y={112} size={9} weight={700} fill={C.muted}>{s.sub}</T>
            {i < steps.length - 1 && <Arrow x1={x + 29} y1={52} x2={x + 41} y2={52} width={2} color={C.muted} />}
          </g>
        );
      })}
      <T x={175} y={132} size={10} weight={700} fill={C.muted}>small → big</T>
    </Svg>
  );
}

function SkeletonJobs() {
  return (
    <Tiles
      label="Four jobs of the skeleton: support, protection, movement, making blood cells"
      items={[
        { e: '🏛️', title: 'Support', sub: 'holds you up' },
        { e: '🛡️', title: 'Protection', sub: 'skull, ribs' },
        { e: '🤸', title: 'Movement', sub: 'with muscles' },
        { e: '🩸', title: 'Blood cells', sub: 'bone marrow' },
      ]}
    />
  );
}

function Antagonistic() {
  // Upper arm hangs from the shoulder; biceps on the front, triceps on the back.
  const Arm = ({ ox, bent }: { ox: number; bent: boolean }) => {
    const sh = { x: ox + 50, y: 24 };
    const el = { x: ox + 50, y: 112 };
    const hand = bent ? { x: ox + 118, y: 52 } : { x: ox + 66, y: 168 };
    return (
      <g>
        <circle cx={sh.x} cy={sh.y} r={10} fill="#e8e0cc" />
        <line x1={sh.x} y1={sh.y} x2={el.x} y2={el.y} stroke="#e8e0cc" strokeWidth={11} strokeLinecap="round" />
        <line x1={el.x} y1={el.y} x2={hand.x} y2={hand.y} stroke="#e8e0cc" strokeWidth={10} strokeLinecap="round" />
        {/* biceps: front of upper arm to just past the elbow on the forearm */}
        <path
          d={bent ? `M${sh.x + 8} 34 Q${sh.x + 34} 70 ${el.x + 20} ${el.y - 12}` : `M${sh.x + 8} 34 Q${sh.x + 14} 74 ${el.x + 6} ${el.y + 16}`}
          fill="none" stroke={bent ? C.red : '#f4b4b4'} strokeWidth={bent ? 17 : 8} strokeLinecap="round"
        />
        {/* triceps: back of upper arm to the tip of the elbow */}
        <path
          d={bent ? `M${sh.x - 8} 34 Q${sh.x - 14} 74 ${el.x - 6} ${el.y + 6}` : `M${sh.x - 8} 34 Q${sh.x - 28} 72 ${el.x - 7} ${el.y + 6}`}
          fill="none" stroke={bent ? '#a9d6f5' : C.blue} strokeWidth={bent ? 8 : 16} strokeLinecap="round"
        />
        <T x={ox + 80} y={186} size={11.5}>{bent ? 'Bending the arm' : 'Straightening the arm'}</T>
      </g>
    );
  };
  return (
    <Svg label="Antagonistic muscles: to bend the arm the biceps contracts and the triceps relaxes; to straighten it, the opposite">
      <Arm ox={0} bent />
      <Arm ox={170} bent={false} />
      <T x={124} y={100} size={10} fill={C.red} anchor="start">biceps</T>
      <T x={124} y={113} size={9} weight={700} fill={C.muted} anchor="start">contracts</T>
      <T x={6} y={64} size={10} fill={C.blue} anchor="start">triceps</T>
      <T x={6} y={77} size={9} weight={700} fill={C.muted} anchor="start">relaxes</T>
      <T x={252} y={60} size={10} fill={C.red} anchor="start">biceps</T>
      <T x={252} y={73} size={9} weight={700} fill={C.muted} anchor="start">relaxes</T>
      <T x={170} y={136} size={10} fill={C.blue} anchor="start">triceps</T>
      <T x={170} y={149} size={9} weight={700} fill={C.muted} anchor="start">contracts</T>
    </Svg>
  );
}

function Joints() {
  return (
    <Svg h={160} label="Hinge joints move one way; ball and socket joints move in many directions">
      <rect x={10} y={10} width={145} height={140} rx={12} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      <rect x={165} y={10} width={145} height={140} rx={12} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      {/* hinge */}
      <line x1={40} y1={95} x2={82} y2={95} stroke="#d8cfb6" strokeWidth={12} strokeLinecap="round" />
      <line x1={82} y1={95} x2={118} y2={62} stroke="#d8cfb6" strokeWidth={12} strokeLinecap="round" />
      <circle cx={82} cy={95} r={8} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <path d="M110 92 A30 30 0 0 0 112 54" fill="none" stroke={C.green} strokeWidth={2.5} strokeDasharray="4 3" />
      <T x={82} y={26} size={12}>Hinge</T>
      <T x={82} y={128} size={10} weight={700} fill={C.muted}>elbow, knee</T>
      <T x={82} y={142} size={10} weight={700} fill={C.muted}>one direction</T>
      {/* ball and socket */}
      <path d="M210 70 A28 28 0 0 1 210 120" fill="none" stroke="#d8cfb6" strokeWidth={10} />
      <circle cx={232} cy={95} r={18} fill="#e8e0cc" stroke="#cbbf9e" strokeWidth={2} />
      <line x1={248} y1={95} x2={290} y2={95} stroke="#e8e0cc" strokeWidth={12} strokeLinecap="round" />
      {[-40, 0, 40].map((a) => <path key={a} d={`M282 95 l0 0`} transform={`rotate(${a} 232 95)`} />)}
      <path d="M278 70 A50 50 0 0 1 278 120" fill="none" stroke={C.green} strokeWidth={2.5} strokeDasharray="4 3" />
      <T x={237} y={26} size={12}>Ball and socket</T>
      <T x={237} y={128} size={10} weight={700} fill={C.muted}>hip, shoulder</T>
      <T x={237} y={142} size={10} weight={700} fill={C.muted}>many directions</T>
    </Svg>
  );
}

function Airways() {
  return (
    <Svg label="The airways: trachea, bronchi, bronchioles and alveoli">
      <rect x={112} y={10} width={16} height={60} rx={6} fill="#ffd0d8" stroke="#e8799c" strokeWidth={2} />
      {[22, 34, 46, 58].map((y) => <line key={y} x1={113} y1={y} x2={127} y2={y} stroke="#e8799c" strokeWidth={2} />)}
      <path d="M120 70 L80 100 M120 70 L160 100" stroke="#e8799c" strokeWidth={10} strokeLinecap="round" />
      <path d="M80 100 L56 130 M80 100 L92 136 M160 100 L184 130 M160 100 L148 136" stroke="#f09cb4" strokeWidth={5} strokeLinecap="round" />
      {[[56, 130], [92, 136], [184, 130], [148, 136]].map(([x, y], i) => (
        <g key={i}>
          {[[0, 0], [-7, 7], [7, 7], [0, 12]].map(([dx, dy], j) => <circle key={j} cx={x + dx} cy={y + dy + 4} r={5} fill="#ffe1e8" stroke="#e8799c" strokeWidth={1.5} />)}
        </g>
      ))}
      <Label x={196} y={26} px={128} py={34}>Trachea (windpipe)</Label>
      <Label x={196} y={66} px={150} py={92}>Bronchi</Label>
      <Label x={196} y={100} px={176} py={122}>Bronchioles</Label>
      <Label x={196} y={160} px={154} py={146}>Alveoli: gas exchange</Label>
      <T x={160} y={190} size={10} weight={700} fill={C.muted}>alveoli: O₂ into the blood, CO₂ out of it</T>
    </Svg>
  );
}

function Breathing() {
  const Chest = ({ x, inhale }: { x: number; inhale: boolean }) => (
    <g>
      <path d={inhale ? `M${x} 50 Q${x + 70} 20 ${x + 140} 50 L${x + 136} 140 L${x + 4} 140 Z` : `M${x + 8} 56 Q${x + 70} 34 ${x + 132} 56 L${x + 128} 140 L${x + 12} 140 Z`} fill="#fff3f5" stroke="#e8799c" strokeWidth={2.5} />
      <path d={inhale ? `M${x + 6} 140 L${x + 134} 140` : `M${x + 14} 140 Q${x + 70} 100 ${x + 126} 140`} fill="none" stroke={C.purple} strokeWidth={5} strokeLinecap="round" />
      {inhale ? <Arrow x1={x + 70} y1={8} x2={x + 70} y2={42} color={C.blue} /> : <Arrow x1={x + 70} y1={42} x2={x + 70} y2={8} color={C.muted} />}
      <T x={x + 70} y={162} size={12}>{inhale ? 'Breathing in' : 'Breathing out'}</T>
      <T x={x + 70} y={177} size={9.5} weight={700} fill={C.muted}>{inhale ? 'diaphragm flattens' : 'diaphragm domes up'}</T>
      <T x={x + 70} y={190} size={9.5} weight={700} fill={C.muted}>{inhale ? 'ribs up and out → air in' : 'ribs down and in → air out'}</T>
    </g>
  );
  return (
    <Svg label="Breathing in and out: the diaphragm and ribs change the volume of the chest">
      <Chest x={10} inhale />
      <Chest x={170} inhale={false} />
      <T x={84} y={120} size={10} fill={C.purple}>diaphragm</T>
    </Svg>
  );
}

function ReproOrgans() {
  const col = (x: number, title: string, colour: string, soft: string, rows: [string, string][]) => (
    <g>
      <rect x={x} y={6} width={150} height={188} rx={12} fill={soft} />
      <T x={x + 75} y={24} size={12} fill={colour}>{title}</T>
      {rows.map(([organ, job], i) => (
        <g key={organ}>
          <T x={x + 10} y={50 + i * 30} size={11} anchor="start">{organ}</T>
          <T x={x + 10} y={63 + i * 30} size={9} weight={700} anchor="start" fill={C.muted}>{job}</T>
        </g>
      ))}
    </g>
  );
  return (
    <Svg label="Male and female reproductive organs and their jobs">
      {col(6, 'Male', C.blue, C.blueSoft, [
        ['Testes', 'make sperm and testosterone'],
        ['Scrotum', 'holds the testes'],
        ['Sperm duct', 'carries sperm'],
        ['Glands', 'add fluid → semen'],
        ['Urethra / penis', 'carries semen out'],
      ])}
      {col(164, 'Female', C.pink, '#ffe3ef', [
        ['Ovaries', 'release an egg a month'],
        ['Oviduct', 'fertilisation happens here'],
        ['Uterus (womb)', 'where a baby develops'],
        ['Cervix', 'muscle ring at the entrance'],
        ['Vagina', 'leads to outside the body'],
      ])}
    </Svg>
  );
}

function MenstrualCycle() {
  const cx = 106;
  const cy = 100;
  const r = 62;
  const seg = (d0: number, d1: number) => {
    const a0 = (d0 / 28) * Math.PI * 2 - Math.PI / 2;
    const a1 = (d1 / 28) * Math.PI * 2 - Math.PI / 2;
    return `M${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} A${r} ${r} 0 ${d1 - d0 > 14 ? 1 : 0} 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)}`;
  };
  const at = (d: number, rr = r) => {
    const a = (d / 28) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + rr * Math.cos(a), y: cy + rr * Math.sin(a) };
  };
  const ov = at(14);
  return (
    <Svg w={345} label="The 28-day menstrual cycle: period days 1 to 5, lining builds up, ovulation around day 14">
      <path d={seg(0, 5)} fill="none" stroke={C.red} strokeWidth={18} />
      <path d={seg(5, 28)} fill="none" stroke="#f7c6d4" strokeWidth={18} />
      <circle cx={ov.x} cy={ov.y} r={11} fill={C.purple} stroke="#fff" strokeWidth={3} />
      {[1, 7, 14, 21].map((d) => {
        const p = at(d - 0.5, r + 20);
        return <T key={d} x={p.x} y={p.y} size={10} fill={C.muted}>day {d}</T>;
      })}
      <T x={cx} y={cy - 6} size={22}>28</T>
      <T x={cx} y={cy + 14} size={10} fill={C.muted}>days</T>
      <circle cx={218} cy={50} r={8} fill={C.red} />
      <T x={232} y={46} size={11} anchor="start">Period</T>
      <T x={232} y={60} size={9.5} weight={700} anchor="start" fill={C.muted}>days 1–5</T>
      <circle cx={218} cy={96} r={8} fill="#f7c6d4" />
      <T x={232} y={92} size={11} anchor="start">Lining builds up</T>
      <T x={232} y={106} size={9.5} weight={700} anchor="start" fill={C.muted}>ready for an embryo</T>
      <circle cx={218} cy={142} r={8} fill={C.purple} />
      <T x={232} y={138} size={11} anchor="start">Ovulation</T>
      <T x={232} y={152} size={9.5} weight={700} anchor="start" fill={C.muted}>~day 14, egg released</T>
    </Svg>
  );
}

function Pregnancy() {
  return (
    <Tiles
      label="What supports a developing baby: placenta, umbilical cord and amniotic fluid"
      cols={3}
      items={[
        { e: '🔁', title: 'Placenta', sub: 'O₂ and food in, waste out', colour: C.redSoft },
        { e: '🪢', title: 'Umbilical cord', sub: 'links baby to placenta', colour: C.purpleSoft },
        { e: '💧', title: 'Amniotic fluid', sub: 'cushions and protects', colour: C.blueSoft },
      ]}
      h={130}
    />
  );
}

function Flower() {
  return (
    <Svg label="Parts of a flower: petal, sepal, anther, filament, stigma, style and ovary">
      <g transform="translate(-6 8)">
      {/* stem */}
      <path d="M120 200 L120 140" stroke="#3f9a45" strokeWidth={8} />
      {/* sepals */}
      <path d="M120 142 L92 160 L112 136 Z M120 142 L148 160 L128 136 Z" fill="#4caf50" />
      {/* petals */}
      <ellipse cx={74} cy={100} rx={40} ry={20} fill="#ff9ec7" transform="rotate(-25 74 100)" />
      <ellipse cx={166} cy={100} rx={40} ry={20} fill="#ff9ec7" transform="rotate(25 166 100)" />
      {/* ovary, style, stigma */}
      <ellipse cx={120} cy={128} rx={18} ry={13} fill="#a8e6a1" stroke="#3f9a45" strokeWidth={2} />
      <circle cx={114} cy={128} r={3.5} fill="#fff7c2" />
      <circle cx={126} cy={128} r={3.5} fill="#fff7c2" />
      <rect x={117} y={62} width={6} height={56} fill="#a8e6a1" stroke="#3f9a45" strokeWidth={1.5} />
      <ellipse cx={120} cy={58} rx={12} ry={6} fill="#7cc46a" stroke="#3f9a45" strokeWidth={1.5} />
      {/* stamens */}
      {[-1, 1].map((d) => (
        <g key={d}>
          <line x1={120 + d * 10} y1={124} x2={120 + d * 34} y2={74} stroke="#d9a700" strokeWidth={2.5} />
          <ellipse cx={120 + d * 36} cy={70} rx={8} ry={5} fill="#f5b800" stroke="#c99400" />
        </g>
      ))}
      </g>
      <Label x={192} y={30} px={122} py={66}>Stigma: catches pollen</Label>
      <Label x={192} y={52} px={152} py={78}>Anther: makes pollen</Label>
      <Label x={192} y={74} px={134} py={104}>Filament</Label>
      <Label x={192} y={96} px={117} py={100}>Style</Label>
      <Label x={192} y={118} px={184} py={120}>Petal</Label>
      <Label x={192} y={140} px={127} py={138}>Ovary: has ovules</Label>
      <Label x={192} y={162} px={136} py={160}>Sepal</Label>
      <T x={6} y={10} size={9.5} weight={800} fill={C.orange} anchor="start">♂ stamen = anther + filament</T>
      <T x={6} y={22} size={9.5} weight={800} fill={C.green} anchor="start">♀ carpel = stigma + style + ovary</T>
    </Svg>
  );
}

function SeedDispersal() {
  return (
    <Tiles
      label="Ways seeds are dispersed: wind, animals, water and exploding pods"
      items={[
        { e: '🌬️', title: 'Wind', sub: 'dandelion, sycamore' },
        { e: '🐿️', title: 'Animals', sub: 'berries, burrs' },
        { e: '🥥', title: 'Water', sub: 'coconut' },
        { e: '💥', title: 'Explosion', sub: 'pea pods' },
      ]}
      h={130}
    />
  );
}

// ---------- Years 8-9 ----------

function Nutrients() {
  return (
    <Tiles
      label="The seven nutrients and their jobs"
      cols={4}
      items={[
        { e: '🍞', title: 'Carbohydrate', sub: 'energy' },
        { e: '🧈', title: 'Lipids', sub: 'store energy' },
        { e: '🍗', title: 'Protein', sub: 'growth, repair' },
        { e: '🍊', title: 'Vitamins', sub: 'stay healthy' },
        { e: '🥛', title: 'Minerals', sub: 'calcium, iron' },
        { e: '🌾', title: 'Fibre', sub: 'keeps food moving' },
        { e: '💧', title: 'Water', sub: 'every cell' },
      ]}
    />
  );
}

function FoodTests() {
  const tests = [
    { t: 'Iodine', f: 'Starch', from: '#d98b2b', to: '#1f1a3a' },
    { t: 'Benedict’s + heat', f: 'Sugar', from: '#3b82f6', to: '#c2410c' },
    { t: 'Biuret', f: 'Protein', from: '#3b82f6', to: '#7e22ce' },
    { t: 'Ethanol + water', f: 'Fat', from: '#e0f2fe', to: '#f8fafc' },
  ];
  return (
    <Svg label="Food tests: iodine for starch, Benedict's for sugar, biuret for protein, ethanol for fat">
      {tests.map((x, i) => {
        const cx = 42 + i * 78;
        const Tube = ({ dx, colour }: { dx: number; colour: string }) => (
          <g>
            <path d={`M${cx + dx - 9} 40 L${cx + dx - 9} 112 Q${cx + dx} 124 ${cx + dx + 9} 112 L${cx + dx + 9} 40`} fill="#fff" stroke={C.line} strokeWidth={2} />
            <path d={`M${cx + dx - 8} 76 L${cx + dx - 8} 111 Q${cx + dx} 122 ${cx + dx + 8} 111 L${cx + dx + 8} 76 Z`} fill={colour} stroke={x.f === 'Fat' && dx > 0 ? '#cbd5e1' : 'none'} />
          </g>
        );
        return (
          <g key={x.t}>
            <Tube dx={-14} colour={x.from} />
            <T x={cx} y={84} size={12} fill={C.muted}>→</T>
            <Tube dx={14} colour={x.to} />
            <T x={cx} y={20} size={12}>{x.f}</T>
            <T x={cx} y={142} size={9.5} weight={700} fill={C.muted}>{x.t}</T>
            <T x={cx} y={162} size={9.5} weight={800} fill={C.ink}>{['blue-black', 'brick red', 'purple', 'cloudy white'][i]}</T>
          </g>
        );
      })}
      <T x={160} y={188} size={10} weight={700} fill={C.muted}>before → positive result</T>
    </Svg>
  );
}

function Digestive() {
  const steps = [
    { e: '👄', t: 'Mouth', s: 'chew + saliva' },
    { e: '⬇️', t: 'Oesophagus', s: 'tube to stomach' },
    { e: '🧪', t: 'Stomach', s: 'acid kills bacteria' },
    { e: '🧬', t: 'Small intestine', s: 'nutrients absorbed' },
    { e: '💧', t: 'Large intestine', s: 'water absorbed' },
  ];
  return (
    <Svg h={190} label="The digestive system in order: mouth, oesophagus, stomach, small intestine, large intestine">
      {steps.map((s, i) => {
        const y = 22 + i * 36;
        return (
          <g key={s.t}>
            <rect x={40} y={y - 15} width={240} height={30} rx={10} fill={i === 3 ? C.greenSoft : C.soft} stroke={C.line} strokeWidth={1.5} />
            <E e={s.e} x={60} y={y} size={22} />
            <T x={78} y={y} size={12} anchor="start">{s.t}</T>
            <T x={270} y={y} size={10} weight={700} fill={C.muted} anchor="end">{s.s}</T>
            {i < steps.length - 1 && <Arrow x1={24} y1={y} x2={24} y2={y + 30} color={C.muted} width={2} />}
          </g>
        );
      })}
    </Svg>
  );
}

function Enzymes() {
  return (
    <Svg h={170} label="Enzymes break large molecules into small ones">
      {[0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={30 + i * 18} cy={50} r={8} fill={C.gold} stroke="#c99400" strokeWidth={1.5} />)}
      <T x={75} y={22} size={11}>Starch (big)</T>
      <Arrow x1={140} y1={50} x2={190} y2={50} color={C.green} width={3} />
      <E e="✂️" x={165} y={30} size={22} />
      <T x={165} y={70} size={10} fill={C.green}>amylase</T>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={214 + i * 34} cy={44} r={8} fill={C.gold} stroke="#c99400" strokeWidth={1.5} />
          <circle cx={226 + i * 34} cy={58} r={8} fill={C.gold} stroke="#c99400" strokeWidth={1.5} />
        </g>
      ))}
      <T x={262} y={22} size={11}>Sugars (small)</T>
      <rect x={20} y={96} width={280} height={66} rx={12} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      <T x={160} y={112} size={11}>Carbohydrase (amylase): starch → sugars</T>
      <T x={160} y={130} size={11}>Protease: protein → amino acids</T>
      <T x={160} y={148} size={11}>Lipase: fat → fatty acids + glycerol</T>
    </Svg>
  );
}

function Villi() {
  return (
    <Svg h={170} label="Villi in the small intestine give a huge surface area">
      <rect x={10} y={120} width={300} height={34} fill="#ffd6dc" stroke="#e8799c" strokeWidth={2} />
      {Array.from({ length: 8 }, (_, i) => {
        const x = 30 + i * 36;
        return (
          <g key={i}>
            <path d={`M${x - 12} 122 L${x - 12} 50 Q${x} 30 ${x + 12} 50 L${x + 12} 122`} fill="#ffe6ea" stroke="#e8799c" strokeWidth={2} />
            <path d={`M${x - 5} 120 L${x - 5} 56 Q${x} 46 ${x + 5} 56 L${x + 5} 120`} fill="none" stroke={C.red} strokeWidth={1.8} />
          </g>
        );
      })}
      <E e="🍬" x={30} y={18} size={18} />
      <Arrow x1={44} y1={24} x2={64} y2={46} color={C.green} width={2} />
      <Label x={190} y={18} px={140} py={60}>blood capillaries</Label>
      <T x={160} y={164} size={10} weight={700} fill={C.muted}>huge surface area · thin walls · good blood supply</T>
    </Svg>
  );
}

function Smoking() {
  return (
    <Tiles
      label="Harmful chemicals in cigarette smoke"
      cols={3}
      h={130}
      items={[
        { e: '🔗', title: 'Nicotine', sub: 'addictive', colour: C.purpleSoft },
        { e: '⚫', title: 'Tar', sub: 'causes cancer', colour: '#e5e5e5' },
        { e: '💨', title: 'Carbon monoxide', sub: 'less oxygen in blood', colour: C.redSoft },
      ]}
    />
  );
}

function AerobicEq() {
  return (
    <Equation
      label="Aerobic respiration: glucose plus oxygen gives carbon dioxide plus water, releasing energy"
      h={100}
      parts={[{ text: 'glucose', e: '🍬' }, '+', { text: 'oxygen', e: '🫁', fill: C.blueSoft }, '→', { text: 'carbon dioxide', e: '💨' }, '+', { text: 'water', e: '💧', fill: C.blueSoft }]}
      sizes={[11, 0, 11, 0, 9.5, 0, 11]}
    />
  );
}

function AnaerobicEq() {
  return (
    <Svg h={150} label="Anaerobic respiration in muscles and in yeast">
      <Box x={8} y={10} w={304} h={58} fill={C.redSoft} stroke="#f3a5a5" />
      <E e="💪" x={34} y={39} size={30} />
      <T x={170} y={30} size={11} fill={C.muted}>In muscles</T>
      <T x={170} y={50} size={14}>glucose → lactic acid</T>
      <Box x={8} y={80} w={304} h={58} fill={C.goldSoft} stroke="#f0d36a" />
      <E e="🍞" x={34} y={109} size={30} />
      <T x={170} y={100} size={11} fill={C.muted}>In yeast (fermentation)</T>
      <T x={170} y={120} size={14}>glucose → ethanol + carbon dioxide</T>
    </Svg>
  );
}

function PhotosynthesisEq() {
  return (
    <Svg h={140} label="Photosynthesis: carbon dioxide plus water gives glucose plus oxygen, using light">
      <E e="☀️" x={160} y={24} size={36} />
      <T x={160} y={50} size={10} fill={C.gold}>light energy, absorbed by chlorophyll</T>
      <Box x={6} y={64} w={70} h={60} fill={C.soft}>CO₂</Box>
      <T x={86} y={94} size={18} fill={C.muted}>+</T>
      <Box x={96} y={64} w={60} h={60} fill={C.blueSoft}>water</Box>
      <T x={170} y={94} size={18} fill={C.green}>→</T>
      <Box x={184} y={64} w={62} h={60} fill={C.goldSoft}>glucose</Box>
      <T x={256} y={94} size={18} fill={C.muted}>+</T>
      <Box x={266} y={64} w={50} h={60} fill={C.greenSoft} size={11}>oxygen</Box>
    </Svg>
  );
}

function Leaf() {
  return (
    <Svg w={350} label="Cross-section of a leaf showing palisade cells, spongy layer, stomata and guard cells">
      <T x={130} y={10} size={10} fill={C.gold}>☀ light from above</T>
      <rect x={10} y={20} width={240} height={9} rx={3} fill="#c8eec0" stroke="#3f9a45" />
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={13 + i * 24} y={32} width={19} height={46} rx={8} fill="#7cc46a" stroke="#3f9a45" strokeWidth={1.5} />
      ))}
      {Array.from({ length: 10 }, (_, i) => [0, 1, 2].map((j) => <circle key={`${i}${j}`} cx={22.5 + i * 24} cy={42 + j * 13} r={3} fill="#2e7d32" />))}
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse key={i} cx={24 + i * 30} cy={102 + (i % 2) * 14} rx={12} ry={9} fill="#bfe8b5" stroke="#3f9a45" strokeWidth={1.5} />
      ))}
      <rect x={10} y={138} width={240} height={9} rx={3} fill="#c8eec0" stroke="#3f9a45" />
      <ellipse cx={120} cy={142.5} rx={7} ry={6} fill="#7cc46a" stroke="#2e7d32" />
      <ellipse cx={140} cy={142.5} rx={7} ry={6} fill="#7cc46a" stroke="#2e7d32" />
      <rect x={127} y={137} width={6} height={11} fill="#fff" />
      <Arrow x1={112} y1={186} x2={124} y2={154} color={C.muted} width={2} />
      <T x={100} y={194} size={9.5} fill={C.muted}>CO₂ in</T>
      <Arrow x1={136} y1={154} x2={148} y2={186} color={C.blue} width={2} />
      <T x={162} y={194} size={9.5} fill={C.blue}>O₂ out</T>
      <Label x={262} y={24} px={248} py={24}>Waxy layer</Label>
      <Label x={262} y={56} px={244} py={56}>Palisade</Label>
      <T x={265} y={69} size={9} weight={700} fill={C.muted} anchor="start">lots of chloroplasts</T>
      <Label x={262} y={108} px={244} py={110}>Spongy layer</Label>
      <T x={265} y={121} size={9} weight={700} fill={C.muted} anchor="start">air spaces</T>
      <Label x={262} y={160} px={147} py={144}>Stoma +</Label>
      <T x={265} y={173} size={11.5} weight={800} anchor="start">guard cells</T>
    </Svg>
  );
}

function VariationGraphs() {
  const hist = [6, 14, 26, 32, 22, 11, 4];
  const bars = [{ t: 'A', v: 42 }, { t: 'B', v: 10 }, { t: 'AB', v: 4 }, { t: 'O', v: 44 }];
  return (
    <Svg label="Continuous data in a histogram (height); discontinuous data in a bar chart (blood group)">
      <T x={80} y={14} size={11}>Continuous: height</T>
      <line x1={14} y1={160} x2={150} y2={160} stroke={C.muted} strokeWidth={1.5} />
      {hist.map((v, i) => <rect key={i} x={18 + i * 18} y={160 - v * 4} width={18} height={v * 4} fill={C.purple} stroke="#fff" strokeWidth={1} />)}
      <T x={80} y={176} size={9.5} weight={700} fill={C.muted}>histogram (bars touch)</T>
      <T x={240} y={14} size={11}>Discontinuous: blood group</T>
      <line x1={174} y1={160} x2={310} y2={160} stroke={C.muted} strokeWidth={1.5} />
      {bars.map((b, i) => (
        <g key={b.t}>
          <rect x={184 + i * 32} y={160 - b.v * 3} width={22} height={b.v * 3} rx={3} fill={C.orange} />
          <T x={195 + i * 32} y={168} size={9.5} weight={700} fill={C.muted}>{b.t}</T>
        </g>
      ))}
      <T x={240} y={184} size={9.5} weight={700} fill={C.muted}>bar chart (gaps between)</T>
    </Svg>
  );
}

function DnaZoom() {
  return (
    <Svg h={170} label="Zooming in: cell, nucleus, chromosome, DNA, gene">
      <circle cx={42} cy={70} r={34} fill="#ffe3ec" stroke="#e8799c" strokeWidth={2.5} />
      <circle cx={42} cy={70} r={14} fill="#b59cff" stroke={C.purple} strokeWidth={2} />
      <T x={42} y={124} size={11}>Cell</T>
      <Arrow x1={80} y1={70} x2={100} y2={70} color={C.muted} width={2} />
      <circle cx={136} cy={70} r={30} fill="#e9e1ff" stroke={C.purple} strokeWidth={2.5} />
      {[[-12, -8, 20], [8, 6, -25], [-4, 12, 60]].map(([dx, dy, a], i) => (
        <g key={i} transform={`translate(${136 + dx} ${70 + dy}) rotate(${a})`}>
          <rect x={-3} y={-10} width={6} height={20} rx={3} fill={C.purple} />
          <rect x={-10} y={-3} width={20} height={6} rx={3} fill={C.purple} opacity={0.6} />
        </g>
      ))}
      <T x={136} y={124} size={11}>Nucleus</T>
      <T x={136} y={138} size={9.5} weight={700} fill={C.muted}>46 chromosomes</T>
      <Arrow x1={170} y1={70} x2={190} y2={70} color={C.muted} width={2} />
      <path d="M210 30 C230 50 230 90 210 110 M240 30 C220 50 220 90 240 110" fill="none" stroke={C.blue} strokeWidth={3} />
      {[40, 54, 70, 86, 100].map((y) => <line key={y} x1={214 + Math.abs(70 - y) * 0.12} y1={y} x2={236 - Math.abs(70 - y) * 0.12} y2={y} stroke={C.pink} strokeWidth={2} />)}
      <rect x={205} y={62} width={40} height={18} rx={4} fill="none" stroke={C.gold} strokeWidth={2.5} />
      <T x={225} y={124} size={11}>DNA</T>
      <T x={225} y={138} size={9.5} weight={700} fill={C.muted}>double helix</T>
      <Label x={256} y={52} px={245} py={66}>Gene</Label>
      <T x={290} y={86} size={9.5} weight={700} fill={C.muted}>section</T>
      <T x={290} y={98} size={9.5} weight={700} fill={C.muted}>of DNA</T>
    </Svg>
  );
}

function NaturalSelection() {
  return (
    <Svg h={190} label="Natural selection in four steps">
      {[
        { e: '🦒', t: '1. Variation', s: 'necks differ in length' },
        { e: '🌳', t: '2. Competition', s: 'not enough food for all' },
        { e: '✅', t: '3. Survival', s: 'best adapted live and breed' },
        { e: '🧬', t: '4. Inheritance', s: 'genes passed on' },
      ].map((st, i) => {
        const x = 8 + (i % 2) * 156;
        const y = 8 + Math.floor(i / 2) * 90;
        return (
          <g key={st.t}>
            <rect x={x} y={y} width={148} height={82} rx={12} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
            <E e={st.e} x={x + 28} y={y + 41} size={34} />
            <T x={x + 52} y={y + 32} size={11.5} anchor="start">{st.t}</T>
            <T x={x + 52} y={y + 52} size={9.5} weight={700} fill={C.muted} anchor="start">{st.s.split(' ').slice(0, 3).join(' ')}</T>
            <T x={x + 52} y={y + 65} size={9.5} weight={700} fill={C.muted} anchor="start">{st.s.split(' ').slice(3).join(' ')}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function FoodChain() {
  const items = [{ e: '☀️', t: 'Sun' }, { e: '🌿', t: 'Grass', s: 'producer' }, { e: '🐇', t: 'Rabbit', s: 'primary consumer' }, { e: '🦊', t: 'Fox', s: 'secondary consumer' }];
  return (
    <Svg h={140} label="Food chain: grass to rabbit to fox; arrows show energy transfer">
      {items.map((it, i) => {
        const x = 36 + i * 82;
        return (
          <g key={it.t}>
            <E e={it.e} x={x} y={52} size={46} />
            <T x={x} y={92} size={12}>{it.t}</T>
            {it.s && it.s.split(' ').map((w, j) => <T key={j} x={x} y={106 + j * 11} size={9} weight={700} fill={C.muted}>{w}</T>)}
            {i < items.length - 1 && <Arrow x1={x + 28} y1={52} x2={x + 54} y2={52} color={C.green} width={3} />}
          </g>
        );
      })}
      <T x={160} y={14} size={10} weight={700} fill={C.green}>arrows show the direction energy flows</T>
    </Svg>
  );
}

function Adaptations() {
  return (
    <Tiles
      label="Adaptations: polar bear, camel, cactus"
      cols={3}
      h={150}
      items={[
        { e: '🐻‍❄️', title: 'Polar bear', sub: 'thick fur, fat, small ears' },
        { e: '🐫', title: 'Camel', sub: 'wide feet, stores fat' },
        { e: '🌵', title: 'Cactus', sub: 'spines, deep roots' },
      ]}
    />
  );
}

function Quadrat() {
  const squares = [[30, 30], [120, 90], [210, 40], [70, 120], [250, 120], [160, 30]];
  const daisies = [[40, 40], [52, 50], [130, 100], [140, 112], [128, 116], [220, 50], [82, 128], [262, 128], [270, 140], [168, 40], [178, 50], [100, 60], [200, 140], [290, 70], [30, 150]];
  return (
    <Svg h={190} label="Random sampling with quadrats in a field">
      <rect x={10} y={10} width={300} height={160} rx={12} fill="#d6f2c8" stroke="#7cc46a" strokeWidth={2} />
      {daisies.map(([x, y], i) => <E key={i} e="🌼" x={x} y={y} size={14} />)}
      {squares.map(([x, y], i) => <rect key={i} x={x} y={y} width={36} height={36} fill="none" stroke={C.ink} strokeWidth={2.5} />)}
      <T x={160} y={182} size={10} weight={700} fill={C.muted}>place quadrats randomly → count → average × number that fit</T>
    </Svg>
  );
}

function Decomposers() {
  return (
    <Tiles
      label="Decomposers recycle nutrients; pollinators help plants make seeds"
      cols={3}
      h={130}
      items={[
        { e: '🍄', title: 'Fungi', sub: 'decomposer' },
        { e: '🦠', title: 'Bacteria', sub: 'decomposer' },
        { e: '🐝', title: 'Bees', sub: 'pollinator' },
      ]}
    />
  );
}

export const biologyDiagrams: Record<string, () => JSX.Element> = {
  'mrs-gren': MrsGren,
  'animal-cell': AnimalCell,
  'plant-cell': PlantCell,
  microscope: Microscope,
  magnification: Magnification,
  'slide-prep': SlidePrep,
  'specialised-cells': SpecialisedCells,
  diffusion: Diffusion,
  organisation: Organisation,
  'skeleton-jobs': SkeletonJobs,
  antagonistic: Antagonistic,
  joints: Joints,
  airways: Airways,
  breathing: Breathing,
  'repro-organs': ReproOrgans,
  'menstrual-cycle': MenstrualCycle,
  pregnancy: Pregnancy,
  flower: Flower,
  'seed-dispersal': SeedDispersal,
  nutrients: Nutrients,
  'food-tests': FoodTests,
  digestive: Digestive,
  enzymes: Enzymes,
  villi: Villi,
  smoking: Smoking,
  'aerobic-eq': AerobicEq,
  'anaerobic-eq': AnaerobicEq,
  'photosynthesis-eq': PhotosynthesisEq,
  leaf: Leaf,
  'variation-graphs': VariationGraphs,
  'dna-zoom': DnaZoom,
  'natural-selection': NaturalSelection,
  'food-chain': FoodChain,
  adaptations: Adaptations,
  quadrat: Quadrat,
  decomposers: Decomposers,
};
