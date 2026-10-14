import { Arrow, Box, C, E, FormulaTriangle, Svg, T, Tiles } from './kit';

// GCSE (AQA) Chemistry diagrams.

function AtomStructure() {
  return (
    <Svg label="An atom: protons and neutrons in the nucleus, electrons in shells; sodium is 2,8,1">
      {[30, 52, 74].map((r) => <circle key={r} cx={92} cy={100} r={r} fill="none" stroke={C.line} strokeWidth={2} />)}
      {[[86, 96, 'p'], [98, 96, 'n'], [92, 106, 'p'], [86, 108, 'n'], [98, 106, 'p']].map(([x, y, t], i) => (
        <circle key={i} cx={x as number} cy={y as number} r={6} fill={t === 'p' ? C.red : '#9ca3af'} />
      ))}
      {[[92, 70], [92, 130]].map(([x, y], i) => <circle key={`a${i}`} cx={x} cy={y} r={5} fill={C.blue} />)}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return <circle key={`b${i}`} cx={92 + 52 * Math.cos(a)} cy={100 + 52 * Math.sin(a)} r={5} fill={C.blue} />;
      })}
      <circle cx={166} cy={100} r={5} fill={C.blue} />
      <T x={92} y={192} size={11}>sodium: 2,8,1</T>
      <rect x={186} y={30} width={130} height={112} rx={10} fill={C.soft} />
      <T x={194} y={46} size={10} anchor="start" fill={C.muted}>particle</T>
      <T x={270} y={46} size={10} fill={C.muted}>charge</T>
      <T x={304} y={46} size={10} fill={C.muted}>mass</T>
      {[[C.red, 'proton', '+1', '1'], ['#9ca3af', 'neutron', '0', '1'], [C.blue, 'electron', '−1', 'tiny']].map(([c, n, q, m], i) => (
        <g key={n}>
          <circle cx={198} cy={72 + i * 26} r={5} fill={c} />
          <T x={208} y={72 + i * 26} size={11} anchor="start">{n}</T>
          <T x={270} y={72 + i * 26} size={11}>{q}</T>
          <T x={304} y={72 + i * 26} size={11}>{m}</T>
        </g>
      ))}
      <T x={251} y={160} size={9.5} weight={700} fill={C.muted}>neutrons =</T>
      <T x={251} y={173} size={9.5} weight={700} fill={C.muted}>mass no. − atomic no.</T>
    </Svg>
  );
}

function AtomModels() {
  const steps = [
    { t: 'Solid sphere', s: 'Dalton', d: <circle cx={0} cy={0} r={18} fill="#9ca3af" /> },
    { t: 'Plum pudding', s: 'Thomson', d: <g><circle cx={0} cy={0} r={18} fill="#ffc9c9" />{[[-8, -6], [6, -8], [-4, 8], [9, 5]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={3} fill={C.blue} />)}</g> },
    { t: 'Nuclear model', s: 'Rutherford', d: <g><circle cx={0} cy={0} r={18} fill="none" stroke={C.line} strokeDasharray="3 3" /><circle cx={0} cy={0} r={4} fill={C.red} /><circle cx={12} cy={-10} r={3} fill={C.blue} /><circle cx={-13} cy={9} r={3} fill={C.blue} /></g> },
    { t: 'Electron shells', s: 'Bohr', d: <g><circle cx={0} cy={0} r={10} fill="none" stroke={C.line} /><circle cx={0} cy={0} r={18} fill="none" stroke={C.line} /><circle cx={0} cy={0} r={4} fill={C.red} /><circle cx={10} cy={0} r={3} fill={C.blue} /><circle cx={0} cy={-18} r={3} fill={C.blue} /></g> },
  ];
  return (
    <Svg w={344} h={170} label="How the atomic model developed: solid sphere, plum pudding, nuclear model, electron shells; Chadwick later found the neutron">
      {steps.map((st, i) => {
        const x = 42 + i * 86;
        return (
          <g key={st.t}>
            <g transform={`translate(${x} 56)`}>{st.d}</g>
            <T x={x} y={96} size={10.5}>{st.t}</T>
            <T x={x} y={112} size={9.5} weight={700} fill={C.muted}>{st.s}</T>
            {i < 3 && <Arrow x1={x + 24} y1={56} x2={x + 60} y2={56} color={C.muted} width={2} />}
          </g>
        );
      })}
      <T x={172} y={146} size={10} weight={700} fill={C.muted}>alpha scattering → nucleus · Chadwick → neutrons</T>
    </Svg>
  );
}

function GroupTrends() {
  return (
    <Svg label="Group trends: group 1 gets more reactive down the group, group 7 less reactive, group 0 boiling points increase">
      {[
        { x: 6, t: 'Group 1', els: ['Li', 'Na', 'K'], c: '#ff9b9b', trend: 'reactivity ↑', tc: C.red },
        { x: 112, t: 'Group 7', els: ['F', 'Cl', 'Br', 'I'], c: '#ffd36b', trend: 'reactivity ↓', tc: C.blue },
        { x: 218, t: 'Group 0', els: ['He', 'Ne', 'Ar'], c: '#b9a6ff', trend: 'boiling pt ↑', tc: C.purple },
      ].map((g) => (
        <g key={g.t}>
          <T x={g.x + 48} y={14} size={11}>{g.t}</T>
          {g.els.map((e, i) => (
            <g key={e}>
              <rect x={g.x + 26} y={26 + i * 34} width={44} height={30} rx={6} fill={g.c} />
              <T x={g.x + 48} y={41 + i * 34} size={13}>{e}</T>
            </g>
          ))}
          <Arrow x1={g.x + 84} y1={30} x2={g.x + 84} y2={150} color={g.tc} width={2.5} />
          <T x={g.x + 48} y={176} size={10} fill={g.tc}>{g.trend}</T>
          <T x={g.x + 48} y={190} size={9} weight={700} fill={C.muted}>going down</T>
        </g>
      ))}
    </Svg>
  );
}

function IonicBond() {
  const Shell = ({ cx, n, outer, colour }: { cx: number; n: string; outer: number; colour: string }) => (
    <g>
      <circle cx={cx} cy={70} r={14} fill={colour} />
      <T x={cx} y={70} size={11} fill="#fff">{n}</T>
      <circle cx={cx} cy={70} r={30} fill="none" stroke={C.line} strokeWidth={1.5} />
      <circle cx={cx} cy={70} r={44} fill="none" stroke={C.line} strokeWidth={1.5} />
      {Array.from({ length: outer }, (_, i) => {
        const a = (i / Math.max(outer, 1)) * Math.PI * 2 - Math.PI / 2;
        return <circle key={i} cx={cx + 44 * Math.cos(a)} cy={70 + 44 * Math.sin(a)} r={4} fill={C.blue} />;
      })}
    </g>
  );
  return (
    <Svg label="Ionic bonding: sodium gives its outer electron to chlorine, forming Na+ and Cl- ions">
      <Shell cx={66} n="Na" outer={1} colour={C.purple} />
      <Shell cx={238} n="Cl" outer={7} colour={C.green} />
      <path d="M70 26 Q150 -6 216 36" fill="none" stroke={C.red} strokeWidth={2.5} strokeDasharray="5 4" />
      <Arrow x1={200} y1={26} x2={216} y2={36} color={C.red} width={2.5} />
      <T x={152} y={74} size={10} fill={C.red}>1 electron</T>
      <T x={152} y={88} size={10} fill={C.red}>moves →</T>
      <T x={66} y={138} size={11}>Na (2,8,1)</T>
      <T x={238} y={138} size={11}>Cl (2,8,7)</T>
      <rect x={30} y={154} width={260} height={38} rx={10} fill={C.soft} />
      <T x={95} y={173} size={14} fill={C.purple}>Na⁺ (2,8)</T>
      <T x={160} y={173} size={12} fill={C.muted}>+</T>
      <T x={225} y={173} size={14} fill={C.green}>Cl⁻ (2,8,8)</T>
    </Svg>
  );
}

function CarbonStructures() {
  const hex = (cx: number, cy: number, r: number) => Array.from({ length: 6 }, (_, i) => `${cx + r * Math.cos((i * Math.PI) / 3)},${cy + r * Math.sin((i * Math.PI) / 3)}`).join(' ');
  return (
    <Svg label="Giant covalent carbon: diamond (4 bonds each), graphite (layers of hexagons), and a C60 fullerene">
      {/* diamond: a tetrahedral-ish network */}
      {[[50, 50], [30, 80], [70, 80], [50, 110], [20, 120], [80, 120], [50, 150]].map(([x, y], i, arr) => (
        <g key={i}>
          {arr.slice(i + 1).filter(([x2, y2]) => Math.hypot(x2 - x, y2 - y) < 45).map(([x2, y2], j) => <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke={C.muted} strokeWidth={2} />)}
          <circle cx={x} cy={y} r={6} fill={C.ink} />
        </g>
      ))}
      <T x={50} y={178} size={11}>Diamond</T>
      <T x={50} y={192} size={9} weight={700} fill={C.muted}>4 bonds, very hard</T>
      {/* graphite: layers */}
      {[60, 110].map((y) => (
        <g key={y}>
          {[0, 1, 2].map((i) => <polygon key={i} points={hex(126 + i * 26, y, 15)} fill="none" stroke={C.ink} strokeWidth={2} />)}
        </g>
      ))}
      <line x1={110} y1={86} x2={200} y2={86} stroke={C.blue} strokeWidth={1.5} strokeDasharray="4 3" />
      <T x={156} y={140} size={9} fill={C.blue}>layers slide · free electrons</T>
      <T x={156} y={178} size={11}>Graphite</T>
      <T x={156} y={192} size={9} weight={700} fill={C.muted}>3 bonds, conducts</T>
      {/* fullerene */}
      <circle cx={270} cy={86} r={34} fill="#f3f0fb" stroke={C.ink} strokeWidth={2} />
      {[0, 1, 2, 3, 4].map((i) => <polygon key={i} points={hex(270 + 18 * Math.cos((i * 2 * Math.PI) / 5), 86 + 18 * Math.sin((i * 2 * Math.PI) / 5), 9)} fill="none" stroke={C.ink} strokeWidth={1.5} />)}
      <T x={270} y={178} size={11}>Fullerene C₆₀</T>
      <T x={270} y={192} size={9} weight={700} fill={C.muted}>hollow cage</T>
    </Svg>
  );
}

function MetallicBonding() {
  return (
    <Svg h={170} label="Metallic bonding: a lattice of positive metal ions in a sea of delocalised electrons">
      <rect x={20} y={14} width={280} height={120} rx={12} fill={C.blueSoft} />
      {Array.from({ length: 15 }, (_, i) => {
        const x = 50 + (i % 5) * 55;
        const y = 36 + Math.floor(i / 5) * 38;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={14} fill="#b8bcc8" stroke="#8b90a0" strokeWidth={1.5} />
            <T x={x} y={y} size={13} fill={C.ink}>+</T>
          </g>
        );
      })}
      {Array.from({ length: 16 }, (_, i) => <circle key={i} className="p-slide" cx={36 + ((i * 37) % 260)} cy={26 + ((i * 53) % 100)} r={3.5} fill={C.blue} style={{ animationDelay: `${i * -0.3}s` }} />)}
      <T x={160} y={152} size={11}>positive ions + “sea” of delocalised electrons</T>
      <T x={160} y={166} size={9.5} weight={700} fill={C.muted}>electrons carry charge → metals conduct</T>
    </Svg>
  );
}

function MrCalc() {
  return (
    <Svg h={170} label="Relative formula mass of CO2: 12 + 16 + 16 = 44">
      <T x={160} y={18} size={13}>Mr of CO₂</T>
      <Box x={40} y={36} w={70} h={56} fill={C.soft} size={18}>C</Box>
      <T x={75} y={106} size={12} fill={C.muted}>12</T>
      <T x={124} y={64} size={18} fill={C.muted}>+</T>
      <Box x={138} y={36} w={70} h={56} fill={C.redSoft} size={18}>O</Box>
      <T x={173} y={106} size={12} fill={C.muted}>16</T>
      <T x={222} y={64} size={18} fill={C.muted}>+</T>
      <Box x={236} y={36} w={70} h={56} fill={C.redSoft} size={18}>O</Box>
      <T x={271} y={106} size={12} fill={C.muted}>16</T>
      <T x={160} y={140} size={18} fill={C.green}>= 44</T>
      <T x={160} y={162} size={9.5} weight={700} fill={C.muted}>H 1 · C 12 · O 16 · Na 23 · Mg 24 · S 32 · Ca 40</T>
    </Svg>
  );
}

function MolesTriangle() {
  return <FormulaTriangle top="m" left="n" right="Mr" label="Moles triangle: mass equals moles times Mr" notes={['moles = m ÷ Mr', 'mass = n × Mr', 'Mr = m ÷ n']} />;
}

function MakingSalts() {
  const steps = [
    { e: '🔥', t: 'Warm the acid' },
    { e: '🥄', t: 'Add base until in excess' },
    { e: '⏬', t: 'Filter off the excess' },
    { e: '♨️', t: 'Evaporate some water' },
    { e: '💎', t: 'Leave to crystallise' },
  ];
  return (
    <Svg h={200} label="Making a soluble salt: warm acid, add excess insoluble base, filter, evaporate, crystallise">
      {steps.map((st, i) => {
        const y = 8 + i * 38;
        return (
          <g key={st.t}>
            <rect x={40} y={y} width={270} height={32} rx={10} fill={i === 4 ? C.blueSoft : C.soft} stroke={C.line} strokeWidth={1.5} />
            <E e={st.e} x={60} y={y + 16} size={22} />
            <T x={80} y={y + 16} size={11.5} anchor="start">{i + 1}. {st.t}</T>
            {i < steps.length - 1 && <Arrow x1={20} y1={y + 16} x2={20} y2={y + 50} color={C.muted} width={2} />}
          </g>
        );
      })}
    </Svg>
  );
}

function Electrolysis() {
  return (
    <Svg label="Electrolysis: positive ions move to the cathode (negative electrode), negative ions to the anode (positive electrode)">
      <rect x={60} y={70} width={200} height={110} rx={8} fill={C.blueSoft} stroke="#9cc9ec" strokeWidth={2} />
      <rect x={96} y={40} width={14} height={110} fill="#4b5563" />
      <rect x={210} y={40} width={14} height={110} fill="#4b5563" />
      <path d="M103 40 L103 20 L217 20 L217 40" fill="none" stroke={C.ink} strokeWidth={2.5} />
      <rect x={146} y={12} width={6} height={16} fill={C.ink} />
      <rect x={156} y={15} width={6} height={10} fill={C.ink} />
      <T x={60} y={50} size={11} fill={C.blue}>cathode (−)</T>
      <T x={262} y={50} size={11} fill={C.red}>anode (+)</T>
      {[[150, 100], [170, 140], [140, 160]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={9} fill={C.purple} />
          <T x={x} y={y} size={10} fill="#fff">+</T>
        </g>
      ))}
      {[[180, 96], [160, 124], [190, 160]].map(([x, y], i) => (
        <g key={`n${i}`}>
          <circle cx={x} cy={y} r={9} fill={C.green} />
          <T x={x} y={y} size={11} fill="#fff">−</T>
        </g>
      ))}
      <Arrow x1={134} y1={112} x2={116} y2={112} color={C.purple} width={2} />
      <Arrow x1={196} y1={128} x2={206} y2={128} color={C.green} width={2} />
      <T x={160} y={194} size={10} weight={700} fill={C.muted}>metal / hydrogen at cathode · non-metal / oxygen at anode</T>
    </Svg>
  );
}

function ReactionProfile() {
  return (
    <Svg label="Reaction profile for an exothermic reaction: products lower than reactants; activation energy is the hill">
      <line x1={40} y1={180} x2={300} y2={180} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={180} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <path d="M50 110 L100 110 C140 110 140 40 170 40 C200 40 200 150 240 150 L296 150" fill="none" stroke={C.purple} strokeWidth={4} />
      <T x={76} y={100} size={10.5}>reactants</T>
      <T x={270} y={164} size={10.5}>products</T>
      <Arrow x1={170} y1={110} x2={170} y2={44} color={C.orange} width={2} />
      <T x={184} y={34} size={9.5} fill={C.orange} anchor="start">← activation energy</T>
      <Arrow x1={262} y1={110} x2={262} y2={146} color={C.red} width={2} />
      <line x1={100} y1={110} x2={290} y2={110} stroke={C.muted} strokeDasharray="4 3" />
      <T x={268} y={124} size={9.5} fill={C.red} anchor="start">energy</T>
      <T x={268} y={136} size={9.5} fill={C.red} anchor="start">given out</T>
      <T x={170} y={194} size={10} fill={C.muted}>progress of reaction</T>
      <g transform="rotate(-90 22 98)"><T x={22} y={98} size={9.5} fill={C.muted}>energy</T></g>
    </Svg>
  );
}

function BondEnergy() {
  return (
    <Svg h={160} label="Bond energy calculation: energy to break bonds minus energy released making bonds">
      <Box x={10} y={14} w={140} h={60} fill={C.blueSoft} stroke="#9cc9ec" />
      <T x={80} y={32} size={11}>Breaking bonds</T>
      <T x={80} y={56} size={14} fill={C.blue}>takes in 2,000 kJ</T>
      <Box x={170} y={14} w={140} h={60} fill={C.redSoft} stroke="#f3a5a5" />
      <T x={240} y={32} size={11}>Making bonds</T>
      <T x={240} y={56} size={14} fill={C.red}>gives out 2,500 kJ</T>
      <T x={160} y={98} size={13}>2,000 − 2,500 = −500 kJ</T>
      <T x={160} y={124} size={12} fill={C.red}>negative → exothermic</T>
      <T x={160} y={146} size={9.5} weight={700} fill={C.muted}>energy change = bonds broken − bonds made</T>
    </Svg>
  );
}

function RateGraph() {
  return (
    <Svg label="Volume of gas against time: a steeper curve means a faster reaction; it levels off when finished">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={14} stroke={C.ink} strokeWidth={2} />
      <path d="M40 170 C70 60 110 40 300 36" fill="none" stroke={C.red} strokeWidth={3.5} />
      <path d="M40 170 C110 100 170 60 300 50" fill="none" stroke={C.blue} strokeWidth={3.5} />
      <rect x={170} y={122} width={12} height={4} fill={C.red} />
      <T x={188} y={124} size={9.5} anchor="start" fill={C.red}>hotter, more concentrated,</T>
      <T x={188} y={136} size={9.5} anchor="start" fill={C.red}>or powdered: faster</T>
      <rect x={170} y={150} width={12} height={4} fill={C.blue} />
      <T x={188} y={152} size={9.5} anchor="start" fill={C.blue}>slower</T>
      <T x={250} y={26} size={9.5} fill={C.muted}>flat = finished</T>
      <T x={170} y={188} size={10} fill={C.muted}>time (s)</T>
      <g transform="rotate(-90 22 92)"><T x={22} y={92} size={9.5} fill={C.muted}>gas made (cm³)</T></g>
    </Svg>
  );
}

function Collisions() {
  return (
    <Svg label="Collision theory: more particles or faster particles mean more successful collisions">
      <rect x={8} y={20} width={146} height={130} rx={12} fill={C.soft} />
      <rect x={166} y={20} width={146} height={130} rx={12} fill={C.orangeSoft} />
      <T x={81} y={12} size={11}>Low concentration</T>
      <T x={239} y={12} size={11}>High concentration</T>
      {[[40, 60], [110, 100], [70, 120], [120, 50]].map(([x, y], i) => <circle key={i} className="p-fly" cx={x} cy={y} r={7} fill={C.blue} style={{ animationDelay: `${i * -0.7}s` }} />)}
      {[[190, 50], [220, 80], [260, 60], [290, 100], [200, 120], [240, 130], [280, 40], [250, 100], [210, 40], [290, 130]].map(([x, y], i) => <circle key={i} className="p-fly" cx={x} cy={y} r={7} fill={i % 2 ? C.red : C.blue} style={{ animationDelay: `${i * -0.4}s` }} />)}
      <T x={81} y={168} size={10} fill={C.muted}>few collisions</T>
      <T x={239} y={168} size={10} fill={C.muted}>more frequent collisions</T>
      <T x={160} y={190} size={10} weight={700} fill={C.muted}>hotter → faster particles → more, harder collisions</T>
    </Svg>
  );
}

function CopperSulfate() {
  return (
    <Svg h={150} label="Reversible reaction: blue hydrated copper sulfate turns white when heated; adding water turns it blue again">
      <Box x={4} y={30} w={96} h={60} fill="#3b82f6" stroke="#1d4ed8" color="#fff" size={10.5}>hydrated (blue)</Box>
      <Box x={220} y={30} w={96} h={60} fill="#f8fafc" stroke="#cbd5e1" size={10.5}>anhydrous (white)</Box>
      <Arrow x1={106} y1={48} x2={214} y2={48} color={C.red} width={3} />
      <Arrow x1={214} y1={74} x2={106} y2={74} color={C.blue} width={3} />
      <T x={160} y={36} size={9.5} fill={C.red}>heat (endothermic)</T>
      <T x={160} y={90} size={9.5} fill={C.blue}>+ water (exothermic)</T>
      <T x={160} y={124} size={12}>⇌ the same energy is transferred each way</T>
    </Svg>
  );
}

function Fractionating() {
  const fr = [
    { t: 'LPG (gases)', u: 'bottled gas' },
    { t: 'Petrol', u: 'cars' },
    { t: 'Kerosene', u: 'jet fuel' },
    { t: 'Diesel', u: 'lorries, trains' },
    { t: 'Heavy fuel oil', u: 'ships' },
    { t: 'Bitumen', u: 'roads' },
  ];
  return (
    <Svg h={210} label="Fractional distillation: crude oil vapour rises up a column, cooler at the top; short chains condense near the top">
      <rect x={70} y={10} width={70} height={180} rx={8} fill="url(#fgrad)" stroke={C.ink} strokeWidth={2} />
      <defs>
        <linearGradient id="fgrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="1" stopColor="#fecaca" />
        </linearGradient>
      </defs>
      {fr.map((f, i) => {
        const y = 22 + i * 28;
        return (
          <g key={f.t}>
            <line x1={140} y1={y} x2={170} y2={y} stroke={C.ink} strokeWidth={2.5} />
            <T x={176} y={y - 5} size={10.5} anchor="start">{f.t}</T>
            <T x={176} y={y + 8} size={9} weight={700} anchor="start" fill={C.muted}>{f.u}</T>
          </g>
        );
      })}
      <Arrow x1={20} y1={196} x2={66} y2={176} color={C.brown} width={3} />
      <T x={6} y={205} size={9.5} fill={C.brown} anchor="start">heated crude oil</T>
      <T x={40} y={22} size={9.5} fill={C.blue}>cool</T>
      <T x={40} y={160} size={9.5} fill={C.red}>hot</T>
      <T x={40} y={60} size={8.5} weight={700} fill={C.muted}>short</T>
      <T x={40} y={72} size={8.5} weight={700} fill={C.muted}>chains</T>
      <T x={40} y={120} size={8.5} weight={700} fill={C.muted}>long</T>
      <T x={40} y={132} size={8.5} weight={700} fill={C.muted}>chains</T>
    </Svg>
  );
}

function BromineTest() {
  const Tube = ({ x, colour, label, sub }: { x: number; colour: string; label: string; sub: string }) => (
    <g>
      <path d={`M${x - 16} 20 L${x - 16} 120 Q${x} 140 ${x + 16} 120 L${x + 16} 20`} fill="#fff" stroke={C.line} strokeWidth={2.5} />
      <path d={`M${x - 15} 60 L${x - 15} 119 Q${x} 138 ${x + 15} 119 L${x + 15} 60 Z`} fill={colour} stroke={colour === '#fff' ? '#e5e7eb' : 'none'} />
      <T x={x} y={156} size={11}>{label}</T>
      <T x={x} y={172} size={9.5} weight={700} fill={C.muted}>{sub}</T>
    </g>
  );
  return (
    <Svg h={190} label="Bromine water test: stays orange with an alkane, turns colourless with an alkene">
      <Tube x={70} colour="#f59e0b" label="Alkane" sub="stays orange" />
      <Tube x={230} colour="#fff" label="Alkene (C=C)" sub="orange → colourless" />
      <T x={150} y={80} size={12} fill={C.muted}>bromine water</T>
    </Svg>
  );
}

function RfCalc() {
  return (
    <Svg label="Rf value = distance moved by substance divided by distance moved by solvent: 3 cm ÷ 6 cm = 0.5">
      <rect x={40} y={14} width={110} height={172} rx={4} fill="#fff" stroke={C.line} strokeWidth={2} />
      <line x1={40} y1={160} x2={150} y2={160} stroke={C.muted} strokeDasharray="4 3" />
      <line x1={40} y1={40} x2={150} y2={40} stroke={C.blue} strokeDasharray="4 3" />
      <circle cx={95} cy={100} r={8} fill={C.red} />
      <line x1={164} y1={160} x2={164} y2={100} stroke={C.red} strokeWidth={2.5} />
      <T x={170} y={124} size={10.5} anchor="start" fill={C.red}>substance</T>
      <T x={170} y={138} size={10.5} anchor="start" fill={C.red}>3 cm</T>
      <line x1={236} y1={160} x2={236} y2={40} stroke={C.blue} strokeWidth={2.5} />
      <T x={242} y={64} size={10.5} anchor="start" fill={C.blue}>solvent</T>
      <T x={242} y={78} size={10.5} anchor="start" fill={C.blue}>6 cm</T>
      <rect x={244} y={130} width={72} height={54} rx={8} fill={C.soft} />
      <T x={280} y={146} size={10.5}>Rf = 3 ÷ 6</T>
      <T x={280} y={168} size={14} fill={C.green}>= 0.5</T>
      <T x={95} y={172} size={9} fill={C.muted}>start line</T>
    </Svg>
  );
}

function GasTests4() {
  return (
    <Tiles
      label="Four gas tests: hydrogen, oxygen, carbon dioxide, chlorine"
      cols={4}
      items={[
        { e: '💥', title: 'Hydrogen', sub: 'squeaky pop', colour: C.goldSoft },
        { e: '🔥', title: 'Oxygen', sub: 'relights glowing splint', colour: C.orangeSoft },
        { e: '🥛', title: 'CO₂', sub: 'limewater milky', colour: C.soft },
        { e: '🧻', title: 'Chlorine', sub: 'bleaches damp litmus', colour: C.greenSoft },
      ]}
    />
  );
}

function AtmosphereHistory() {
  return (
    <Svg label="How the atmosphere changed: volcanoes gave CO2 and water vapour; oceans formed; algae and plants made oxygen; CO2 was locked into rocks and fossil fuels">
      {[
        { e: '🌋', t: 'Volcanoes', s: 'CO₂, water vapour, N₂' },
        { e: '🌊', t: 'Oceans form', s: 'CO₂ dissolves' },
        { e: '🌿', t: 'Algae, plants', s: 'photosynthesis → O₂' },
        { e: '🪨', t: 'Locked away', s: 'CO₂ into rocks, fuels' },
      ].map((st, i) => {
        const x = 8 + (i % 2) * 156;
        const y = 8 + Math.floor(i / 2) * 92;
        return (
          <g key={st.t}>
            <rect x={x} y={y} width={148} height={84} rx={12} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
            <E e={st.e} x={x + 28} y={y + 42} size={34} />
            <T x={x + 54} y={y + 32} size={11} anchor="start">{i + 1}. {st.t}</T>
            <T x={x + 54} y={y + 52} size={8.8} weight={700} anchor="start" fill={C.muted}>{st.s}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function Pollutants() {
  return (
    <Tiles
      label="Pollutants from burning fuels and their effects"
      cols={4}
      items={[
        { e: '☠️', title: 'CO', sub: 'toxic, colourless', colour: C.redSoft },
        { e: '🌧️', title: 'SO₂', sub: 'acid rain', colour: C.blueSoft },
        { e: '🚗', title: 'NOₓ', sub: 'acid rain, lungs', colour: C.orangeSoft },
        { e: '🌫️', title: 'Particulates', sub: 'global dimming', colour: C.soft },
      ]}
    />
  );
}

function WaterTreatment() {
  return (
    <Svg h={150} label="Treating fresh water: choose a source, filter through mesh and sand, sterilise with chlorine, ozone or UV">
      {[
        { e: '🏞️', t: 'Source', s: 'rivers, lakes' },
        { e: '🕸️', t: 'Filter', s: 'mesh, sand' },
        { e: '🧪', t: 'Sterilise', s: 'chlorine, UV' },
        { e: '🚰', t: 'Potable', s: 'safe to drink' },
      ].map((st, i) => {
        const x = 40 + i * 80;
        return (
          <g key={st.t}>
            <circle cx={x} cy={50} r={28} fill={i === 3 ? C.blueSoft : C.soft} stroke={C.line} strokeWidth={2} />
            <E e={st.e} x={x} y={50} size={32} />
            <T x={x} y={96} size={11}>{st.t}</T>
            <T x={x} y={112} size={8.8} weight={700} fill={C.muted}>{st.s}</T>
            {i < 3 && <Arrow x1={x + 31} y1={50} x2={x + 48} y2={50} color={C.muted} width={2} />}
          </g>
        );
      })}
      <T x={160} y={140} size={9.5} weight={700} fill={C.muted}>no fresh water? desalination: distillation or reverse osmosis</T>
    </Svg>
  );
}

function Lca() {
  return (
    <Svg h={150} label="Life cycle assessment stages: raw materials, manufacture and packaging, use, disposal">
      {[
        { e: '⛏️', t: 'Raw materials' },
        { e: '🏭', t: 'Manufacture' },
        { e: '🛒', t: 'Use' },
        { e: '🗑️', t: 'Disposal' },
      ].map((st, i) => {
        const x = 40 + i * 80;
        return (
          <g key={st.t}>
            <circle cx={x} cy={56} r={28} fill={C.soft} stroke={C.line} strokeWidth={2} />
            <E e={st.e} x={x} y={56} size={32} />
            <T x={x} y={102} size={10.5}>{st.t}</T>
            {i < 3 && <Arrow x1={x + 31} y1={56} x2={x + 48} y2={56} color={C.muted} width={2} />}
          </g>
        );
      })}
      <T x={160} y={132} size={10} weight={700} fill={C.muted}>energy, water, resources and waste at every stage</T>
    </Svg>
  );
}

export const gcseChemistryDiagrams: Record<string, () => JSX.Element> = {
  'atom-structure': AtomStructure,
  'atom-models': AtomModels,
  'group-trends': GroupTrends,
  'ionic-bond': IonicBond,
  'carbon-structures': CarbonStructures,
  'metallic-bonding': MetallicBonding,
  'mr-calc': MrCalc,
  'moles-triangle': MolesTriangle,
  'making-salts': MakingSalts,
  electrolysis: Electrolysis,
  'reaction-profile': ReactionProfile,
  'bond-energy': BondEnergy,
  'rate-graph': RateGraph,
  collisions: Collisions,
  'copper-sulfate': CopperSulfate,
  fractionating: Fractionating,
  'bromine-test': BromineTest,
  'rf-calc': RfCalc,
  'gas-tests-4': GasTests4,
  'atmosphere-history': AtmosphereHistory,
  pollutants: Pollutants,
  'water-treatment': WaterTreatment,
  lca: Lca,
};

