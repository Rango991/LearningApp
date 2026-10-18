import { Arrow, C, Label, Svg, T } from './kit';

// Diagrams for the extra Years 8-9 Biology units (content/biology-y89.ts).

function CirculationLoop() {
  return (
    <Svg label="Double circulation: the right side of the heart pumps oxygen-poor blood to the lungs; the left side pumps oxygen-rich blood to the body">
      <rect x={110} y={8} width={100} height={36} rx={10} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={160} y={26} size={12}>Lungs</T>
      <rect x={110} y={158} width={100} height={36} rx={10} fill={C.soft} stroke={C.line} strokeWidth={2} />
      <T x={160} y={176} size={12}>Body</T>
      <rect x={118} y={76} width={40} height={50} rx={8} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <rect x={162} y={76} width={40} height={50} rx={8} fill={C.redSoft} stroke={C.red} strokeWidth={2} />
      <T x={138} y={101} size={9.5} fill={C.blue}>right</T>
      <T x={182} y={101} size={9.5} fill={C.red}>left</T>
      <T x={160} y={138} size={10} weight={700} fill={C.muted}>heart</T>
      {/* body to right side, right side to lungs */}
      <path d="M110 176 L66 176 L66 101" fill="none" stroke={C.blue} strokeWidth={3} />
      <Arrow x1={66} y1={101} x2={114} y2={101} color={C.blue} width={3} />
      <Arrow x1={138} y1={74} x2={138} y2={48} color={C.blue} width={3} />
      {/* lungs to left side, left side to body */}
      <Arrow x1={182} y1={46} x2={182} y2={72} color={C.red} width={3} />
      <path d="M204 101 L254 101 L254 176" fill="none" stroke={C.red} strokeWidth={3} />
      <Arrow x1={254} y1={176} x2={214} y2={176} color={C.red} width={3} />
      <T x={58} y={70} size={9.5} anchor="end" fill={C.blue}>oxygen-</T>
      <T x={58} y={82} size={9.5} anchor="end" fill={C.blue}>poor</T>
      <T x={262} y={70} size={9.5} anchor="start" fill={C.red}>oxygen-</T>
      <T x={262} y={82} size={9.5} anchor="start" fill={C.red}>rich</T>
    </Svg>
  );
}

function VesselTypes() {
  return (
    <Svg label="Cross-sections of blood vessels: an artery has a thick muscular wall and a narrow space; a vein has a thin wall and a wide space; a capillary has a wall one cell thick">
      <circle cx={60} cy={70} r={36} fill={C.redSoft} stroke={C.red} strokeWidth={4} />
      <circle cx={60} cy={70} r={12} fill={C.red} />
      <circle cx={160} cy={70} r={36} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <circle cx={160} cy={70} r={28} fill={C.blue} opacity={0.75} />
      <circle cx={260} cy={70} r={10} fill={C.red} opacity={0.75} stroke={C.ink} strokeWidth={1.2} />
      <T x={60} y={124} size={12} fill={C.red}>Artery</T>
      <T x={160} y={124} size={12} fill={C.blue}>Vein</T>
      <T x={260} y={124} size={12} fill={C.purple}>Capillary</T>
      <T x={60} y={142} size={9.5} weight={700} fill={C.muted}>away from heart</T>
      <T x={60} y={156} size={9.5} weight={700} fill={C.muted}>thick, muscular wall</T>
      <T x={60} y={170} size={9.5} weight={700} fill={C.muted}>high pressure</T>
      <T x={160} y={142} size={9.5} weight={700} fill={C.muted}>back to heart</T>
      <T x={160} y={156} size={9.5} weight={700} fill={C.muted}>thin wall, valves</T>
      <T x={160} y={170} size={9.5} weight={700} fill={C.muted}>low pressure</T>
      <T x={260} y={142} size={9.5} weight={700} fill={C.muted}>tiny</T>
      <T x={260} y={156} size={9.5} weight={700} fill={C.muted}>wall one cell thick</T>
      <T x={260} y={170} size={9.5} weight={700} fill={C.muted}>swaps substances</T>
      <T x={160} y={192} size={9.5} weight={700} fill={C.muted}>not to scale</T>
    </Svg>
  );
}

function BloodCells() {
  const reds = [[60, 60], [110, 40], [100, 100], [170, 70], [60, 130], [140, 140], [220, 120], [240, 50]];
  return (
    <Svg label="Blood: red blood cells carry oxygen, a white blood cell fights infection, and platelets help clotting, all in yellowish plasma">
      <rect x={14} y={14} width={292} height={150} rx={16} fill={C.goldSoft} />
      {reds.map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx={17} ry={15} fill={C.red} />
          <ellipse cx={x} cy={y} rx={8} ry={7} fill="#f87171" />
        </g>
      ))}
      <circle cx={190} cy={110} r={22} fill="#e9e1ff" stroke={C.purple} strokeWidth={2} />
      <path d="M180 104 q6 -10 12 0 q6 10 12 0 q2 10 -8 14 q-10 4 -16 -2 z" fill={C.purple} />
      {[[140, 96], [80, 96], [200, 40], [270, 90]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={5} ry={3} fill={C.orange} />)}
      <Label x={36} y={182} px={60} py={145} anchor="middle">red blood cell</Label>
      <Label x={230} y={182} px={200} py={130} anchor="middle">white blood cell</Label>
      <Label x={300} y={30} px={272} py={88} anchor="end">platelet</Label>
      <T x={128} y={182} size={11} fill={C.brown}>plasma</T>
    </Svg>
  );
}

function BreathingModel() {
  const panel = (x0: number, inhale: boolean) => {
    const rx = inhale ? 25 : 20;
    const ry = inhale ? 42 : 34;
    return (
      <g>
        <line x1={x0 + 75} y1={30} x2={x0 + 75} y2={56} stroke={C.ink} strokeWidth={4} />
        <path d={`M${x0 + 75} 56 L${x0 + 56} 66 M${x0 + 75} 56 L${x0 + 94} 66`} stroke={C.ink} strokeWidth={3} />
        <ellipse cx={x0 + 50} cy={inhale ? 104 : 98} rx={rx} ry={ry} fill={C.pink} opacity={0.55} />
        <ellipse cx={x0 + 100} cy={inhale ? 104 : 98} rx={rx} ry={ry} fill={C.pink} opacity={0.55} />
        <path d={`M${x0 + 18} 56 Q${x0 + (inhale ? 2 : 10)} 108 ${x0 + 18} 152 M${x0 + 132} 56 Q${x0 + (inhale ? 148 : 140)} 108 ${x0 + 132} 152`} fill="none" stroke={C.brown} strokeWidth={4} />
        <path d={inhale ? `M${x0 + 18} 152 L${x0 + 132} 152` : `M${x0 + 18} 152 Q${x0 + 75} 116 ${x0 + 132} 152`} fill="none" stroke={C.red} strokeWidth={4} />
        {inhale
          ? <Arrow x1={x0 + 75} y1={4} x2={x0 + 75} y2={28} color={C.blue} width={3} />
          : <Arrow x1={x0 + 75} y1={28} x2={x0 + 75} y2={4} color={C.blue} width={3} />}
        <T x={x0 + 75} y={172} size={11.5}>{inhale ? 'Breathing in' : 'Breathing out'}</T>
        <T x={x0 + 75} y={188} size={9} weight={700} fill={C.muted}>{inhale ? 'diaphragm flat, chest bigger' : 'diaphragm domed, chest smaller'}</T>
      </g>
    );
  };
  return (
    <Svg label="Breathing in: the ribs move out, the diaphragm flattens, the chest gets bigger and air rushes in. Breathing out: the ribs move in, the diaphragm domes upwards and air is pushed out">
      {panel(6, true)}
      {panel(164, false)}
      <T x={160} y={140} size={9} weight={700} fill={C.red}>diaphragm</T>
    </Svg>
  );
}

export const biologyY89Diagrams: Record<string, () => JSX.Element> = {
  'circulation-loop': CirculationLoop,
  'vessel-types': VesselTypes,
  'blood-cells': BloodCells,
  'breathing-model': BreathingModel,
};
