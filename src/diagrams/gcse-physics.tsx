import type { ReactNode } from 'react';
import { Arrow, C, E, FormulaTriangle, Svg, T, Tiles } from './kit';

// GCSE (AQA) Physics diagrams.

function EnergyEquations() {
  return (
    <Svg h={190} label="Energy store equations: kinetic energy one half m v squared, gravitational potential energy m g h, elastic potential energy one half k e squared">
      {[
        { e: '🏎️', t: 'Kinetic', f: 'Eₖ = ½ m v²', c: C.orangeSoft },
        { e: '🏔️', t: 'Gravitational', f: 'Eₚ = m g h', c: C.blueSoft },
        { e: '🏹', t: 'Elastic', f: 'Eₑ = ½ k e²', c: C.greenSoft },
      ].map((r, i) => {
        const y = 8 + i * 60;
        return (
          <g key={r.t}>
            <rect x={8} y={y} width={304} height={52} rx={12} fill={r.c} />
            <E e={r.e} x={34} y={y + 26} size={30} />
            <T x={58} y={y + 26} size={12} anchor="start">{r.t}</T>
            <T x={300} y={y + 26} size={17} anchor="end">{r.f}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function Shc() {
  return (
    <Svg h={170} label="Specific heat capacity: energy = mass × specific heat capacity × temperature change">
      <rect x={20} y={20} width={280} height={56} rx={14} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      <T x={160} y={48} size={20}>ΔE = m × c × Δθ</T>
      <T x={60} y={96} size={10.5} fill={C.muted}>energy (J)</T>
      <T x={128} y={96} size={10.5} fill={C.muted}>mass (kg)</T>
      <T x={196} y={96} size={10.5} fill={C.muted}>J/kg °C</T>
      <T x={262} y={96} size={10.5} fill={C.muted}>change (°C)</T>
      <E e="🫖" x={44} y={138} size={34} />
      <T x={72} y={130} size={11} anchor="start">2 kg of water, warmed by 10 °C</T>
      <T x={72} y={148} size={11} anchor="start" fill={C.green}>2 × 4,200 × 10 = 84,000 J</T>
    </Svg>
  );
}

function IvGraphs() {
  const Axes = ({ x, title, children }: { x: number; title: string; children: ReactNode }) => (
    <g>
      <line x1={x} y1={90} x2={x + 90} y2={90} stroke={C.muted} strokeWidth={1.5} />
      <line x1={x + 45} y1={20} x2={x + 45} y2={160} stroke={C.muted} strokeWidth={1.5} />
      {children}
      <T x={x + 45} y={180} size={11}>{title}</T>
      <T x={x + 86} y={100} size={8.5} fill={C.muted}>V</T>
      <T x={x + 52} y={24} size={8.5} fill={C.muted}>I</T>
    </g>
  );
  return (
    <Svg label="Current-potential difference graphs: a resistor is a straight line, a filament lamp is an S-shaped curve, a diode only conducts one way">
      <Axes x={10} title="Resistor"><line x1={14} y1={150} x2={96} y2={30} stroke={C.purple} strokeWidth={3} /></Axes>
      <Axes x={115} title="Filament lamp"><path d="M119 140 C140 140 150 110 160 90 C170 70 180 40 201 40" fill="none" stroke={C.orange} strokeWidth={3} /></Axes>
      <Axes x={220} title="Diode"><path d="M224 90 L276 90 C286 90 292 60 300 24" fill="none" stroke={C.green} strokeWidth={3} /></Axes>
      <T x={160} y={196} size={9.5} weight={700} fill={C.muted}>straight line through the origin = ohmic (constant resistance)</T>
    </Svg>
  );
}

function ResistanceRules() {
  return (
    <Svg h={180} label="Series: resistances add up. Parallel: total resistance is less than the smallest one">
      <rect x={6} y={6} width={150} height={168} rx={12} fill={C.blueSoft} />
      <rect x={164} y={6} width={150} height={168} rx={12} fill={C.purpleSoft} />
      <T x={81} y={24} size={12}>Series</T>
      <line x1={20} y1={66} x2={142} y2={66} stroke={C.ink} strokeWidth={2.5} />
      <rect x={34} y={58} width={34} height={16} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <rect x={94} y={58} width={34} height={16} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <T x={51} y={92} size={10}>4 Ω</T>
      <T x={111} y={92} size={10}>6 Ω</T>
      <T x={81} y={120} size={13}>R = 4 + 6 = 10 Ω</T>
      <T x={81} y={146} size={9} weight={700} fill={C.muted}>same current everywhere</T>
      <T x={81} y={160} size={9} weight={700} fill={C.muted}>p.d. is shared</T>
      <T x={239} y={24} size={12}>Parallel</T>
      <path d="M178 66 L196 66 L196 48 L282 48 L282 66 L300 66 M196 66 L196 84 L282 84 L282 66" fill="none" stroke={C.ink} strokeWidth={2.5} />
      <rect x={222} y={40} width={34} height={16} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <rect x={222} y={76} width={34} height={16} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <T x={239} y={120} size={12}>R total {'<'} smallest R</T>
      <T x={239} y={146} size={9} weight={700} fill={C.muted}>same p.d. on each branch</T>
      <T x={239} y={160} size={9} weight={700} fill={C.muted}>currents add up</T>
    </Svg>
  );
}

function Plug() {
  return (
    <Svg label="A UK three-pin plug: live wire brown, neutral wire blue, earth wire green and yellow">
      <rect x={60} y={20} width={150} height={150} rx={18} fill="#f8fafc" stroke={C.ink} strokeWidth={2.5} />
      <rect x={124} y={34} width={22} height={34} rx={3} fill="#d1d5db" stroke={C.ink} strokeWidth={1.5} />
      <rect x={80} y={100} width={22} height={34} rx={3} fill="#d1d5db" stroke={C.ink} strokeWidth={1.5} />
      <rect x={168} y={100} width={22} height={34} rx={3} fill="#d1d5db" stroke={C.ink} strokeWidth={1.5} />
      <rect x={150} y={84} width={14} height={30} rx={4} fill="#fde68a" stroke="#b45309" />
      <path d="M135 168 L135 140 Q135 100 135 70" fill="none" stroke="#16a34a" strokeWidth={6} strokeDasharray="8 6" />
      <path d="M135 168 L135 140 Q135 100 135 70" fill="none" stroke="#facc15" strokeWidth={6} strokeDasharray="8 6" strokeDashoffset={7} />
      <path d="M120 168 Q100 150 92 134" fill="none" stroke="#2563eb" strokeWidth={6} />
      <path d="M150 168 Q170 150 178 134" fill="none" stroke="#92400e" strokeWidth={6} />
      <T x={250} y={44} size={11} fill="#16a34a">Earth</T>
      <T x={250} y={58} size={9} weight={700} fill={C.muted}>green and yellow</T>
      <T x={250} y={96} size={11} fill="#92400e">Live</T>
      <T x={250} y={110} size={9} weight={700} fill={C.muted}>brown, 230 V</T>
      <T x={30} y={96} size={11} fill="#2563eb">Neutral</T>
      <T x={30} y={110} size={9} weight={700} fill={C.muted}>blue, ~0 V</T>
      <T x={250} y={150} size={9} weight={700} fill="#b45309">fuse</T>
      <T x={160} y={192} size={9.5} weight={700} fill={C.muted}>UK mains: 230 V a.c., 50 Hz</T>
    </Svg>
  );
}

function NationalGrid() {
  return (
    <Svg h={150} label="The National Grid: power station, step-up transformer to high voltage, transmission cables, step-down transformer, homes">
      {[
        { e: '🏭', t: 'Power station', s: '' },
        { e: '⬆️', t: 'Step-up', s: 'high p.d., low current' },
        { e: '🗼', t: 'Cables', s: 'less energy lost' },
        { e: '⬇️', t: 'Step-down', s: 'safe 230 V' },
        { e: '🏠', t: 'Homes', s: '' },
      ].map((st, i) => {
        const x = 32 + i * 64;
        return (
          <g key={st.t}>
            <circle cx={x} cy={52} r={24} fill={i === 1 || i === 3 ? C.goldSoft : C.soft} stroke={C.line} strokeWidth={2} />
            <E e={st.e} x={x} y={52} size={28} />
            <T x={x} y={92} size={10}>{st.t}</T>
            {st.s && st.s.split(', ').map((l, j) => <T key={j} x={x} y={106 + j * 11} size={8.5} weight={700} fill={C.muted}>{l}</T>)}
            {i < 4 && <Arrow x1={x + 26} y1={52} x2={x + 37} y2={52} color={C.muted} width={2} />}
          </g>
        );
      })}
    </Svg>
  );
}

function DensityTriangle() {
  return <FormulaTriangle top="m" left="ρ" right="V" label="Density triangle: mass equals density times volume" notes={['ρ = m ÷ V', 'm = ρ × V', 'V = m ÷ ρ']} />;
}

function HeatingCurve() {
  return (
    <Svg label="Heating curve for water: temperature rises, stays flat while melting, rises, stays flat while boiling">
      <line x1={40} y1={174} x2={304} y2={174} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={174} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <polyline points="40,160 80,126 140,126 190,60 260,60 300,30" fill="none" stroke={C.red} strokeWidth={4} strokeLinejoin="round" />
      <T x={110} y={116} size={10} fill={C.blue}>melting (0 °C)</T>
      <T x={225} y={50} size={10} fill={C.red}>boiling (100 °C)</T>
      <T x={70} y={156} size={9} fill={C.muted} anchor="start">solid</T>
      <T x={170} y={110} size={9} fill={C.muted}>liquid</T>
      <T x={290} y={50} size={9} fill={C.muted}>gas</T>
      <T x={150} y={18} size={9.5} weight={700} fill={C.muted}>flat = changing state: energy breaks bonds, E = mL</T>
      <T x={172} y={190} size={9.5} fill={C.muted}>time (energy supplied)</T>
      <g transform="rotate(-90 22 94)"><T x={22} y={94} size={9.5} fill={C.muted}>temperature</T></g>
    </Svg>
  );
}

function RadiationPenetration() {
  return (
    <Svg label="Penetration: alpha is stopped by paper, beta by a few millimetres of aluminium, gamma reduced by thick lead">
      <rect x={110} y={20} width={8} height={150} fill="#f5f5f4" stroke={C.muted} />
      <rect x={180} y={20} width={14} height={150} fill="#cbd5e1" stroke={C.muted} />
      <rect x={250} y={20} width={30} height={150} fill="#64748b" />
      <T x={114} y={186} size={10}>paper</T>
      <T x={187} y={186} size={10}>aluminium</T>
      <T x={265} y={186} size={10}>lead</T>
      <E e="☢️" x={30} y={95} size={34} />
      <Arrow x1={52} y1={50} x2={106} y2={50} color={C.red} width={4} />
      <T x={78} y={38} size={11} fill={C.red}>α</T>
      <Arrow x1={52} y1={95} x2={176} y2={95} color={C.blue} width={4} />
      <T x={78} y={83} size={11} fill={C.blue}>β</T>
      <Arrow x1={52} y1={140} x2={300} y2={140} color={C.green} width={3} dashed />
      <T x={78} y={128} size={11} fill={C.green}>γ</T>
      <T x={265} y={120} size={8.5} weight={700} fill="#fff">reduces</T>
    </Svg>
  );
}

function HalfLifeGraph() {
  const pts = Array.from({ length: 61 }, (_, i) => `${40 + i * 4.2},${170 - 140 * Math.pow(0.5, i / 15)}`).join(' ');
  return (
    <Svg label="Half-life graph: activity halves every half-life, from 800 to 400 to 200 to 100 becquerels">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <polyline points={pts} fill="none" stroke={C.green} strokeWidth={3.5} />
      {[{ t: 1, v: '400' }, { t: 2, v: '200' }, { t: 3, v: '100' }].map(({ t, v }) => {
        const x = 40 + t * 63;
        const y = 170 - 140 * Math.pow(0.5, t);
        return (
          <g key={t}>
            <line x1={40} y1={y} x2={x} y2={y} stroke={C.muted} strokeDasharray="4 3" />
            <line x1={x} y1={y} x2={x} y2={170} stroke={C.muted} strokeDasharray="4 3" />
            <T x={30} y={y} size={9} fill={C.muted} anchor="end">{v}</T>
            <T x={x} y={182} size={9} fill={C.muted}>{t * 2} h</T>
          </g>
        );
      })}
      <T x={30} y={30} size={9} fill={C.muted} anchor="end">800</T>
      <T x={220} y={60} size={10.5} fill={C.green}>half-life = 2 hours</T>
      <T x={172} y={196} size={9.5} fill={C.muted}>time</T>
    </Svg>
  );
}

function FreeBody() {
  return (
    <Svg label="Free body diagram of a car: driving force forwards, drag backwards, weight down, reaction force up">
      <rect x={120} y={80} width={80} height={40} rx={10} fill={C.purpleSoft} stroke={C.purple} strokeWidth={2} />
      <E e="🚗" x={160} y={100} size={32} />
      <Arrow x1={200} y1={100} x2={290} y2={100} color={C.green} width={4} />
      <T x={256} y={86} size={10.5} fill={C.green}>driving force</T>
      <Arrow x1={120} y1={100} x2={60} y2={100} color={C.red} width={4} />
      <T x={80} y={86} size={10.5} fill={C.red}>drag</T>
      <Arrow x1={160} y1={120} x2={160} y2={182} color={C.ink} width={4} />
      <T x={196} y={168} size={10.5}>weight</T>
      <Arrow x1={160} y1={80} x2={160} y2={18} color={C.blue} width={4} />
      <T x={210} y={30} size={10.5} fill={C.blue}>reaction force</T>
      <T x={56} y={160} size={9.5} weight={700} fill={C.muted} anchor="start">vectors: size</T>
      <T x={56} y={173} size={9.5} weight={700} fill={C.muted} anchor="start">and direction</T>
    </Svg>
  );
}

function VtGraph() {
  return (
    <Svg label="Velocity-time graph: gradient is acceleration, a flat line is constant velocity, area under the line is distance">
      <line x1={40} y1={170} x2={304} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <path d="M40 170 L120 60 L220 60 L290 170 Z" fill={C.blue} opacity={0.15} />
      <polyline points="40,170 120,60 220,60 290,170" fill="none" stroke={C.blue} strokeWidth={4} strokeLinejoin="round" />
      <T x={98} y={100} size={10} fill={C.green} anchor="start">speeding up</T>
      <T x={170} y={50} size={10} fill={C.purple}>constant velocity</T>
      <T x={270} y={104} size={10} fill={C.red} anchor="start">slowing</T>
      <T x={165} y={124} size={11}>area = distance</T>
      <T x={165} y={140} size={9.5} weight={700} fill={C.muted}>gradient = acceleration</T>
      <T x={172} y={190} size={9.5} fill={C.muted}>time (s)</T>
      <g transform="rotate(-90 22 92)"><T x={22} y={92} size={9.5} fill={C.muted}>velocity (m/s)</T></g>
    </Svg>
  );
}

function StoppingDistance() {
  return (
    <Svg h={170} label="Stopping distance = thinking distance + braking distance; both increase with speed">
      {[{ s: '20 mph', t: 6, b: 6 }, { s: '40 mph', t: 12, b: 24 }, { s: '60 mph', t: 18, b: 55 }].map((r, i) => {
        const y = 22 + i * 40;
        const k = 2.9;
        return (
          <g key={r.s}>
            <T x={8} y={y + 10} size={10.5} anchor="start">{r.s}</T>
            <rect x={62} y={y} width={r.t * k} height={20} rx={4} fill={C.orange} />
            <rect x={62 + r.t * k} y={y} width={r.b * k} height={20} rx={4} fill={C.red} />
            <T x={66 + (r.t + r.b) * k} y={y + 10} size={9.5} anchor="start" fill={C.muted}>{r.t + r.b} m</T>
          </g>
        );
      })}
      <rect x={62} y={146} width={12} height={10} rx={2} fill={C.orange} />
      <T x={78} y={151} size={9.5} anchor="start">thinking (tired, drunk, distracted)</T>
      <rect x={62} y={160} width={12} height={10} rx={2} fill={C.red} />
      <T x={78} y={165} size={9.5} anchor="start">braking (wet/icy roads, worn tyres)</T>
    </Svg>
  );
}

function WaveAnatomy() {
  const pts = Array.from({ length: 111 }, (_, i) => `${60 + i * 2.2},${90 - 40 * Math.sin((i / 60) * Math.PI * 2)}`).join(' ');
  return (
    <Svg label="A transverse wave showing amplitude and wavelength; wave speed = frequency × wavelength">
      <line x1={56} y1={90} x2={306} y2={90} stroke={C.line} strokeWidth={1.5} strokeDasharray="4 3" />
      <polyline points={pts} fill="none" stroke={C.blue} strokeWidth={3.5} />
      <line x1={93} y1={50} x2={225} y2={50} stroke={C.purple} strokeWidth={2} />
      <T x={159} y={40} size={10.5} fill={C.purple}>wavelength λ</T>
      <line x1={93} y1={50} x2={93} y2={90} stroke={C.orange} strokeWidth={2.5} />
      <T x={8} y={30} size={10} fill={C.orange} anchor="start">amplitude ↘</T>
      <rect x={40} y={150} width={240} height={38} rx={10} fill={C.soft} />
      <T x={160} y={169} size={15}>v = f × λ    ·    T = 1 ÷ f</T>
    </Svg>
  );
}

function EmSpectrum() {
  const bands = ['Radio', 'Micro', 'Infrared', 'Visible', 'UV', 'X-ray', 'Gamma'];
  const colours = ['#c7d2fe', '#a5b4fc', '#fca5a5', 'url(#rainbow)', '#c4b5fd', '#a78bfa', '#7c3aed'];
  return (
    <Svg h={160} label="The electromagnetic spectrum from radio waves to gamma rays: frequency increases, wavelength decreases">
      <defs>
        <linearGradient id="rainbow" x1="0" x2="1">
          {['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'].map((c, i) => <stop key={c} offset={i / 5} stopColor={c} />)}
        </linearGradient>
      </defs>
      {bands.map((b, i) => (
        <g key={b}>
          <rect x={6 + i * 44} y={36} width={44} height={40} fill={colours[i]} stroke="#fff" strokeWidth={1.5} />
          <T x={28 + i * 44} y={56} size={9.5} fill={i >= 5 ? '#fff' : C.ink}>{b}</T>
        </g>
      ))}
      <Arrow x1={20} y1={96} x2={300} y2={96} color={C.red} width={2.5} />
      <T x={160} y={110} size={10} fill={C.red}>frequency and energy increase →</T>
      <Arrow x1={300} y1={126} x2={20} y2={126} color={C.blue} width={2.5} />
      <T x={160} y={140} size={10} fill={C.blue}>← wavelength increases</T>
      <T x={160} y={18} size={10} weight={700} fill={C.muted}>all travel at 3 × 10⁸ m/s in a vacuum</T>
    </Svg>
  );
}

function Solenoid() {
  return (
    <Svg h={170} label="A solenoid: a coil of wire whose magnetic field is strong and uniform inside; an iron core makes it an electromagnet">
      <rect x={70} y={60} width={180} height={36} rx={4} fill="#9ca3af" opacity={0.6} />
      {Array.from({ length: 10 }, (_, i) => <ellipse key={i} cx={80 + i * 18} cy={78} rx={7} ry={26} fill="none" stroke="#c2410c" strokeWidth={3} />)}
      {[66, 78, 90].map((y) => <Arrow key={y} x1={90} y1={y} x2={240} y2={y} color={C.blue} width={1.8} />)}
      <T x={40} y={78} size={14} fill={C.blue}>S</T>
      <T x={280} y={78} size={14} fill={C.red}>N</T>
      <T x={160} y={124} size={10.5}>field inside: strong and uniform</T>
      <T x={160} y={144} size={9.5} weight={700} fill={C.muted}>iron core → electromagnet (switch on and off)</T>
    </Svg>
  );
}

function LeftHandRule() {
  return (
    <Tiles
      label="Fleming's left-hand rule: thumb for motion, first finger for field, second finger for current"
      cols={3}
      items={[
        { e: '👍', title: 'Thumb', sub: 'Motion (force)', colour: C.greenSoft },
        { e: '☝️', title: 'First finger', sub: 'Field (N → S)', colour: C.blueSoft },
        { e: '✌️', title: 'Second finger', sub: 'Current (+ → −)', colour: C.redSoft },
      ]}
    />
  );
}

export const gcsePhysicsDiagrams: Record<string, () => JSX.Element> = {
  'energy-equations': EnergyEquations,
  shc: Shc,
  'iv-graphs': IvGraphs,
  'resistance-rules': ResistanceRules,
  plug: Plug,
  'national-grid': NationalGrid,
  'density-triangle': DensityTriangle,
  'heating-curve': HeatingCurve,
  'radiation-penetration': RadiationPenetration,
  'half-life-graph': HalfLifeGraph,
  'free-body': FreeBody,
  'vt-graph': VtGraph,
  'stopping-distance': StoppingDistance,
  'wave-anatomy': WaveAnatomy,
  'em-spectrum': EmSpectrum,
  solenoid: Solenoid,
  'left-hand-rule': LeftHandRule,
};

