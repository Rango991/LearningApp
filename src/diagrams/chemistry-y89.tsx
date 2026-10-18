import { C, Label, Svg, T, Tiles } from './kit';

// Diagrams for the extra Years 8-9 Chemistry units (content/chemistry-y89.ts).

function DisplacementNail() {
  const beaker = (x: number, liquid: string, coated: boolean) => (
    <g>
      <rect x={x + 6} y={70} width={88} height={100} fill={liquid} />
      <path d={`M${x} 40 L${x + 6} 170 Q${x + 50} 178 ${x + 94} 170 L${x + 100} 40`} fill="none" stroke={C.ink} strokeWidth={2.5} />
      <rect x={x + 44} y={30} width={12} height={130} rx={3} fill="#9ca3af" stroke={C.ink} strokeWidth={1.5} />
      <rect x={x + 38} y={26} width={24} height={8} rx={3} fill="#9ca3af" stroke={C.ink} strokeWidth={1.5} />
      {coated && <rect x={x + 43} y={72} width={14} height={88} rx={3} fill="#c2703d" opacity={0.85} />}
    </g>
  );
  return (
    <Svg label="An iron nail in blue copper sulfate solution: afterwards the nail is coated in pink-brown copper and the solution has turned pale green">
      {beaker(20, '#7cc3f5', false)}
      {beaker(196, '#bfe6c4', true)}
      <T x={160} y={110} size={22} fill={C.muted}>→</T>
      <T x={70} y={192} size={10.5}>Start: blue solution</T>
      <T x={246} y={192} size={10.5}>After: pale green</T>
      <Label x={316} y={20} px={256} py={90} anchor="end">copper coating</Label>
      <T x={70} y={16} size={10} fill={C.muted}>iron nail</T>
    </Svg>
  );
}

function RateFactors() {
  return (
    <Tiles
      label="Four ways to speed up a reaction: higher temperature, higher concentration, bigger surface area, and a catalyst"
      items={[
        { e: '🔥', title: 'Temperature', sub: 'hotter = faster particles', colour: C.redSoft },
        { e: '🧪', title: 'Concentration', sub: 'more particles crowded in', colour: C.blueSoft },
        { e: '🧂', title: 'Surface area', sub: 'powder beats lumps', colour: C.goldSoft },
        { e: '🧩', title: 'Catalyst', sub: 'speeds up, not used up', colour: C.greenSoft },
      ]}
      cols={2}
    />
  );
}

export const chemistryY89Diagrams: Record<string, () => JSX.Element> = {
  'displacement-nail': DisplacementNail,
  'rate-factors': RateFactors,
};
