import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// AQA GCSE Combined Science: Trilogy (8464), Physics topics 6.1-6.7.
// These are also the core of AQA GCSE Physics (8463). AQA uses g = 9.8 N/kg.
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE (AQA)';

export const gcsePhysics: Unit[] = [
  {
    id: 'g-phys-energy',
    title: 'Energy',
    stage: STAGE,
    description: 'Kinetic, gravitational and elastic energy, specific heat capacity, power, efficiency and resources.',
    colour: '#e0890b',
    lessons: [
      {
        id: 'gp-stores',
        title: 'Energy store equations',
        emoji: '🎢',
        learn: [
          card('🏎️', 'Kinetic energy', 'Kinetic energy = ½ × mass × speed²: Eₖ = ½mv². Mass in kg, speed in m/s, energy in joules (J). A 2 kg ball at 3 m/s has ½ × 2 × 3² = 9 J. Doubling the speed quadruples the kinetic energy.', ['kinetic energy', 'Eₖ = ½mv²'], 'energy-equations'),
          card('🏔️', 'Gravitational potential energy', 'GPE = mass × gravitational field strength × height: Eₚ = mgh. On Earth g = 9.8 N/kg. Lifting a 2 kg box up 5 m stores 2 × 9.8 × 5 = 98 J.', ['gravitational potential energy', 'Eₚ = mgh']),
          card('🏹', 'Elastic potential energy', 'Elastic energy = ½ × spring constant × extension²: Eₑ = ½ke² (as long as the limit of proportionality isn’t exceeded). A spring with k = 200 N/m stretched 0.1 m stores ½ × 200 × 0.1² = 1 J.', ['elastic potential energy', 'spring constant']),
        ],
        questions: [
          gap('q1', 'Eₖ of a 2 kg ball at 3 m/s = ___ J', ['9']),
          gap('q2', 'Eₖ of a 1,000 kg car at 10 m/s = ___ J', ['50000']),
          gap('q3', 'Eₚ of a 2 kg box lifted 5 m (g = 9.8 N/kg) = ___ J', ['98']),
          gap('q4', 'Eₑ of a spring, k = 200 N/m, stretched 0.1 m = ___ J', ['1']),
          mcq('q5', 'If an object’s speed doubles, its kinetic energy…', ['Quadruples', 'Doubles', 'Halves', 'Stays the same'], 0),
          mcq('q6', 'A ball falls. Ignoring air resistance, its…', ['GPE is transferred to KE', 'KE is transferred to GPE', 'Mass increases', 'Energy is destroyed'], 0),
          gap('q7', 'On Earth, g = ___ N/kg', ['9.8']),
        ],
      },
      {
        id: 'gp-heat-power',
        title: 'Heating, power & efficiency',
        emoji: '♨️',
        learn: [
          card('🌡️', 'Specific heat capacity', 'Specific heat capacity is the energy needed to raise 1 kg of a substance by 1 °C. ΔE = m × c × Δθ. Water has c = 4,200 J/kg °C, so heating 2 kg of water by 10 °C needs 2 × 4,200 × 10 = 84,000 J.', ['specific heat capacity', 'ΔE = mcΔθ'], 'shc'),
          card('⚡', 'Power', 'Power is the rate of energy transfer, or the rate of doing work: P = E ÷ t, measured in watts (1 W = 1 J/s). A motor transferring 600 J in 30 s has a power of 20 W.', ['power', 'watt']),
          card('📊', 'Efficiency and insulation', 'Efficiency = useful output energy ÷ total input energy (or useful power out ÷ total power in). Wasted energy is dissipated, usually as heat. Lubrication reduces friction; thermal insulation reduces heat loss. Materials with low thermal conductivity are good insulators.', ['efficiency', 'thermal conductivity']),
        ],
        questions: [
          gap('q1', 'Energy to heat 2 kg of water by 10 °C (c = 4,200 J/kg °C) = ___ J', ['84000']),
          gap('q2', '600 J transferred in 30 s. Power = ___ W', ['20']),
          gap('q3', 'Useful output 300 J, input 400 J. Efficiency = ___', ['0.75', '75%']),
          mcq('q4', 'What does a high specific heat capacity mean?', ['It takes lots of energy to warm up', 'It heats up very quickly', 'It is a good conductor', 'It is very dense'], 0),
          tf('q5', 'Lubrication reduces wasted energy by reducing friction.', true),
          gap('q6', 'A 2,000 W kettle runs for 60 s. Energy transferred = ___ J', ['120000']),
          mcq('q7', 'Which makes a better house insulator?', ['A material with low thermal conductivity', 'A material with high thermal conductivity', 'Thin metal sheets', 'Glass only'], 0),
        ],
      },
      {
        id: 'gp-resources',
        title: 'National & global energy',
        emoji: '🌍',
        learn: [
          card('⚖️', 'Pros and cons', 'Fossil fuels are reliable and can respond quickly to demand, but they release CO₂ and will run out. Nuclear is reliable with no CO₂ but produces radioactive waste. Wind and solar have low running costs and no CO₂ but depend on the weather. Hydroelectric is reliable but floods valleys. Tidal is reliable and predictable. Biofuels are renewable and can be “carbon neutral”.', ['reliable', 'renewable'], 'resources'),
          card('📈', 'Changing use', 'Over the last century, electricity demand has grown and the UK has moved away from coal towards gas, nuclear and renewables to reduce carbon dioxide emissions, though building new plants is expensive and some people object to them.', ['carbon dioxide emissions']),
        ],
        questions: [
          mcq('q1', 'Which resource is renewable?', ['Tidal', 'Coal', 'Natural gas', 'Uranium'], 0),
          mcq('q2', 'What is the main problem with nuclear power?', ['Radioactive waste', 'CO₂ emissions', 'It depends on the weather', 'It isn’t reliable'], 0),
          tf('q3', 'Solar power is unreliable because it depends on the weather and time of day.', true),
          mcq('q4', 'Which is a disadvantage of hydroelectric power?', ['Flooding valleys destroys habitats', 'It produces lots of CO₂', 'It is very unreliable', 'It runs out'], 0),
          match('q5', 'Match the resource to an advantage', [
            ['Fossil fuels', 'Can respond quickly to demand'],
            ['Wind', 'No CO₂ while running'],
            ['Tidal', 'Predictable'],
          ]),
          mcq('q6', 'Why has the UK reduced its use of coal?', ['To reduce CO₂ emissions', 'Coal ran out completely', 'Coal is renewable', 'It was too cheap'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-phys-electricity',
    title: 'Electricity',
    stage: STAGE,
    description: 'Charge, current, resistance, I–V graphs, series and parallel circuits, mains and the National Grid.',
    colour: '#f5b800',
    lessons: [
      {
        id: 'gp-circuits',
        title: 'Current, resistance & I–V graphs',
        emoji: '🔌',
        learn: [
          card('⚡', 'Charge and current', 'Current is the rate of flow of charge: Q = I × t (charge in coulombs, current in amps, time in seconds). A current of 2 A for 10 s moves 20 C. Potential difference V = I × R.', ['charge', 'coulomb', 'Q = It', 'V = IR']),
          card('📈', 'I–V characteristics', 'For a fixed resistor at constant temperature, current is directly proportional to p.d.: a straight line through the origin (an ohmic conductor). A filament lamp’s resistance increases as it heats up, so its graph curves. A diode only lets current flow one way.', ['ohmic conductor', 'filament lamp', 'diode'], 'iv-graphs'),
          card('🌡️', 'Thermistors and LDRs', 'A thermistor’s resistance decreases as temperature increases (used in thermostats). An LDR’s (light-dependent resistor’s) resistance decreases as light intensity increases (used in automatic night lights).', ['thermistor', 'LDR']),
        ],
        questions: [
          gap('q1', '2 A flows for 10 s. Charge = ___ C', ['20']),
          gap('q2', 'I = 0.5 A, R = 12 Ω. V = ___ V', ['6']),
          match('q3', 'Match the component to its I–V graph', [
            ['Fixed resistor', 'Straight line through the origin'],
            ['Filament lamp', 'Curve that flattens'],
            ['Diode', 'Current flows one way only'],
          ]),
          mcq('q4', 'What happens to a thermistor’s resistance as it gets hotter?', ['It decreases', 'It increases', 'It stays the same'], 0),
          mcq('q5', 'An LDR is in the dark. Its resistance is…', ['High', 'Low', 'Zero'], 0),
          tf('q6', 'A filament lamp’s resistance increases as its temperature rises.', true),
          gap('q7', '12 C passes in 4 s. Current = ___ A', ['3']),
        ],
      },
      {
        id: 'gp-series-parallel',
        title: 'Series & parallel',
        emoji: '🔀',
        learn: [
          card('➡️', 'Series rules', 'In series, the same current flows through every component, the total p.d. from the supply is shared between components, and the total resistance is the sum: R = R₁ + R₂. A 4 Ω and 6 Ω resistor in series make 10 Ω.', ['series', 'R = R₁ + R₂'], 'resistance-rules'),
          card('🔱', 'Parallel rules', 'In parallel, each branch has the same p.d. as the supply, the currents in the branches add up to the total current, and the total resistance is less than the smallest individual resistance. Adding more resistors in parallel reduces the total resistance.', ['parallel']),
        ],
        questions: [
          gap('q1', '4 Ω and 6 Ω in series. Total resistance = ___ Ω', ['10']),
          mcq('q2', 'Two 10 Ω resistors in parallel have a total resistance of…', ['Less than 10 Ω', '20 Ω', '10 Ω', 'More than 20 Ω'], 0),
          tf('q3', 'In a series circuit, the current is the same everywhere.', true),
          mcq('q4', 'In parallel, each branch has…', ['The same p.d. as the supply', 'Half the p.d.', 'The same current', 'No current'], 0),
          gap('q5', 'A 12 V supply and resistors of 2 Ω and 4 Ω in series. Current = ___ A', ['2'], 'Total R = 6 Ω, so I = 12 ÷ 6 = 2 A.'),
          mcq('q6', 'Adding another resistor in parallel makes the total resistance…', ['Smaller', 'Bigger', 'Stay the same'], 0),
        ],
      },
      {
        id: 'gp-mains',
        title: 'Mains electricity & power',
        emoji: '🏠',
        learn: [
          card('🔌', 'Mains electricity', 'UK mains is alternating current (a.c.) at 230 V and 50 Hz. Batteries give direct current (d.c.). A three-core cable has a live wire (brown, 230 V), a neutral wire (blue, near 0 V) and an earth wire (green and yellow), which is a safety wire that only carries current if there is a fault. Touching the live wire is dangerous even if the switch is off.', ['alternating current', 'live', 'neutral', 'earth'], 'plug'),
          card('💡', 'Power equations', 'P = V × I and P = I² × R. Energy transferred E = P × t, or E = Q × V. A 230 V appliance drawing 2 A has a power of 460 W.', ['P = VI', 'P = I²R', 'E = QV']),
          card('🗼', 'The National Grid', 'Step-up transformers increase the p.d. to very high values for transmission, which makes the current low, so less energy is lost heating the cables. Step-down transformers then reduce the p.d. to a safe level for homes.', ['National Grid', 'transformer'], 'national-grid'),
        ],
        questions: [
          match('q1', 'Match the wire to its colour', [
            ['Live', 'Brown'],
            ['Neutral', 'Blue'],
            ['Earth', 'Green and yellow'],
          ]),
          gap('q2', 'UK mains is ___ V', ['230']),
          gap('q3', 'UK mains frequency is ___ Hz', ['50']),
          gap('q4', 'P = VI: 230 V and 2 A gives ___ W', ['460']),
          gap('q5', 'P = I²R: 3 A through 10 Ω gives ___ W', ['90']),
          mcq('q6', 'Why does the National Grid transmit at very high p.d.?', ['Low current means less energy lost as heat', 'It is safer for homes', 'It makes electricity flow faster', 'It is cheaper to make'], 0),
          gap('q7', 'E = QV: 5 C through 12 V transfers ___ J', ['60']),
          tf('q8', 'The earth wire normally carries current.', false, 'It only carries current if there is a fault.'),
        ],
      },
    ],
  },
  {
    id: 'g-phys-particles',
    title: 'Particle model of matter',
    stage: STAGE,
    description: 'Density, changes of state, internal energy, specific latent heat and gas pressure.',
    colour: '#8b5cf6',
    lessons: [
      {
        id: 'gp-density',
        title: 'Density & states',
        emoji: '🧊',
        learn: [
          card('⚖️', 'Density', 'Density = mass ÷ volume: ρ = m ÷ V, in kg/m³. Solids are usually densest because their particles are packed closest; gases are least dense. A 2 kg block with a volume of 0.001 m³ has a density of 2,000 kg/m³.', ['density', 'ρ = m ÷ V'], 'density-triangle'),
          card('🔁', 'Changes of state', 'Changes of state are physical changes: the material recovers its original properties if the change is reversed, and mass is conserved. Melting, freezing, boiling, evaporating, condensing and sublimating.', ['physical change']),
        ],
        questions: [
          gap('q1', 'Mass 2 kg, volume 0.001 m³. Density = ___ kg/m³', ['2000']),
          gap('q2', 'Density 1,000 kg/m³, volume 0.5 m³. Mass = ___ kg', ['500']),
          mcq('q3', 'Which state is usually least dense?', ['Gas', 'Liquid', 'Solid'], 0),
          tf('q4', 'Mass is conserved when ice melts.', true),
          mcq('q5', 'To find the volume of an irregular stone you could…', ['Use a displacement can or measuring cylinder of water', 'Weigh it', 'Measure one side', 'Heat it'], 0),
          gap('q6', 'The unit of density is kg/m___', ['3', '³']),
        ],
      },
      {
        id: 'gp-internal',
        title: 'Internal energy & latent heat',
        emoji: '♨️',
        learn: [
          card('🔋', 'Internal energy', 'Internal energy is the total kinetic and potential energy of all the particles in a system. Heating increases it: either the temperature rises, or the state changes.', ['internal energy'], 'heating-curve'),
          card('🧪', 'Specific latent heat', 'Specific latent heat is the energy needed to change the state of 1 kg of a substance with no change in temperature: E = m × L. Latent heat of fusion is for melting/freezing; latent heat of vaporisation is for boiling/condensing. On a heating graph, the flat parts are where the state is changing.', ['specific latent heat', 'fusion', 'vaporisation']),
          card('🎈', 'Gas pressure', 'Gas particles move randomly. Heating a gas in a sealed container makes the particles move faster, so they hit the walls harder and more often: the pressure increases.', ['gas pressure']),
        ],
        questions: [
          mcq('q1', 'Internal energy is the total of the particles’…', ['Kinetic and potential energy', 'Kinetic energy only', 'Mass', 'Temperature'], 0),
          gap('q2', 'E = mL: 0.5 kg with L = 334,000 J/kg needs ___ J', ['167000']),
          mcq('q3', 'On a heating graph, what is happening on a flat section?', ['A change of state', 'Cooling', 'Nothing', 'The temperature rises fastest'], 0),
          match('q4', 'Match the latent heat to the change', [
            ['Fusion', 'Melting or freezing'],
            ['Vaporisation', 'Boiling or condensing'],
          ]),
          mcq('q5', 'Why does heating a sealed gas increase its pressure?', ['Particles move faster and hit the walls more', 'Particles get bigger', 'More particles appear', 'The walls shrink'], 0),
          tf('q6', 'During melting, temperature stays the same even though energy is supplied.', true),
        ],
      },
    ],
  },
  {
    id: 'g-phys-atomic',
    title: 'Atomic structure & radiation',
    stage: STAGE,
    description: 'Alpha, beta and gamma radiation, nuclear equations, half-life and safety.',
    colour: '#16a34a',
    lessons: [
      {
        id: 'gp-radiation',
        title: 'Nuclear radiation',
        emoji: '☢️',
        learn: [
          card('☢️', 'Three types', 'Unstable nuclei give out radiation at random. Alpha (α): 2 protons and 2 neutrons (a helium nucleus); highly ionising; stopped by paper or a few cm of air. Beta (β): a fast electron from the nucleus; stopped by a few mm of aluminium. Gamma (γ): an electromagnetic wave; weakly ionising; reduced by thick lead or concrete.', ['alpha', 'beta', 'gamma', 'ionising'], 'radiation-penetration'),
          card('🧮', 'Nuclear equations', 'Alpha decay: the mass number goes down by 4 and the atomic number by 2. Beta decay: a neutron becomes a proton, so the mass number stays the same and the atomic number goes up by 1. Gamma emission doesn’t change either number.', ['nuclear equation', 'decay']),
        ],
        questions: [
          match('q1', 'Match the radiation to what stops it', [
            ['Alpha', 'Paper'],
            ['Beta', 'A few mm of aluminium'],
            ['Gamma', 'Thick lead or concrete'],
          ]),
          mcq('q2', 'Which radiation is most ionising?', ['Alpha', 'Beta', 'Gamma'], 0),
          mcq('q3', 'What is an alpha particle?', ['2 protons and 2 neutrons', 'A fast electron', 'An electromagnetic wave', 'A single neutron'], 0),
          gap('q4', 'Uranium-238 (atomic number 92) emits an alpha particle. The new mass number is ___', ['234']),
          gap('q5', 'In beta decay, the atomic number goes up by ___', ['1']),
          tf('q6', 'Gamma radiation changes the mass number of a nucleus.', false),
          mcq('q7', 'Radioactive decay is…', ['Random', 'Predictable for each atom', 'Caused by heating', 'Only in man-made materials'], 0),
        ],
      },
      {
        id: 'gp-halflife',
        title: 'Half-life & safety',
        emoji: '⏳',
        learn: [
          card('⏳', 'Half-life', 'Activity is the rate at which nuclei decay, in becquerels (Bq). Half-life is the time for the number of unstable nuclei (or the activity) to halve. If the activity is 800 Bq and the half-life is 2 hours, after 6 hours (3 half-lives) it is 800 → 400 → 200 → 100 Bq.', ['half-life', 'activity', 'becquerel'], 'half-life-graph'),
          card('🧤', 'Contamination and irradiation', 'Irradiation is being exposed to radiation from outside; the object does not become radioactive. Contamination is when radioactive atoms get onto or into something, so it stays exposed until they are removed. Protect yourself with shielding, distance, gloves and less time near sources.', ['irradiation', 'contamination']),
        ],
        questions: [
          gap('q1', '800 Bq, half-life 2 hours. Activity after 6 hours = ___ Bq', ['100']),
          gap('q2', 'After 2 half-lives, the fraction of nuclei left is ___', ['1/4', '0.25']),
          mcq('q3', 'Half-life is the time for…', ['The activity to halve', 'All the atoms to decay', 'The activity to double', 'One atom to decay'], 0),
          match('q4', 'Irradiation or contamination?', [
            ['Radioactive dust lands on your skin', 'Contamination'],
            ['Having an X-ray', 'Irradiation'],
          ]),
          tf('q5', 'An irradiated object becomes radioactive.', false),
          mcq('q6', 'What is the unit of activity?', ['Becquerel (Bq)', 'Joule', 'Hertz', 'Sievert only'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-phys-forces',
    title: 'Forces & motion',
    stage: STAGE,
    description: 'Scalars and vectors, work done, acceleration, motion graphs, Newton’s laws, stopping distance and momentum.',
    colour: '#1c9df6',
    lessons: [
      {
        id: 'gp-forces',
        title: 'Forces & work done',
        emoji: '🏗️',
        learn: [
          card('➡️', 'Scalars and vectors', 'Scalars have size (magnitude) only: speed, distance, mass, energy, time. Vectors have size and direction: velocity, displacement, force, acceleration, momentum. Forces are shown as arrows on a free body diagram.', ['scalar', 'vector', 'free body diagram'], 'free-body'),
          card('🏋️', 'Weight and work', 'Weight = mass × gravitational field strength: W = mg. A 5 kg mass weighs 5 × 9.8 = 49 N. Work done = force × distance moved along the line of the force: W = F × s. Pushing with 20 N for 3 m does 60 J of work (1 J = 1 N m).', ['weight', 'work done']),
          card('🌀', 'Springs', 'The extension of an elastic object is proportional to the force applied, up to the limit of proportionality: F = k × e. A spring with k = 50 N/m stretched by 0.2 m needs a force of 10 N.', ['F = ke', 'limit of proportionality']),
        ],
        questions: [
          match('q1', 'Scalar or vector?', [
            ['Speed', 'Scalar'],
            ['Velocity', 'Vector'],
          ]),
          gap('q2', 'Weight of a 5 kg mass (g = 9.8 N/kg) = ___ N', ['49']),
          gap('q3', 'A 20 N force pushes a box 3 m. Work done = ___ J', ['60']),
          gap('q4', 'F = ke: k = 50 N/m, e = 0.2 m. Force = ___ N', ['10']),
          mcq('q5', 'Which is a vector?', ['Force', 'Mass', 'Energy', 'Time'], 0),
          tf('q6', '1 joule is the same as 1 newton metre.', true),
        ],
      },
      {
        id: 'gp-motion',
        title: 'Acceleration & motion graphs',
        emoji: '📈',
        learn: [
          card('🚀', 'Acceleration', 'Acceleration = change in velocity ÷ time: a = Δv ÷ t, in m/s². A car going from 0 to 20 m/s in 5 s accelerates at 4 m/s². For uniform acceleration, v² − u² = 2as. Objects falling near Earth’s surface accelerate at about 9.8 m/s².', ['acceleration', 'a = Δv ÷ t', 'v² − u² = 2as']),
          card('📉', 'Velocity–time graphs', 'On a velocity–time graph the gradient is the acceleration and the area under the line is the distance travelled. A horizontal line means constant velocity. On a distance–time graph, the gradient is the speed.', ['velocity–time graph', 'gradient', 'area'], 'vt-graph'),
          card('🚶', 'Typical speeds', 'Walking ≈ 1.5 m/s, running ≈ 3 m/s, cycling ≈ 6 m/s, cars 13–30 m/s, sound in air ≈ 330 m/s.', ['typical speeds']),
        ],
        questions: [
          gap('q1', '0 to 20 m/s in 5 s. Acceleration = ___ m/s²', ['4']),
          gap('q2', 'u = 0, a = 2 m/s², s = 25 m. Final velocity v = ___ m/s', ['10'], 'v² = 0 + 2 × 2 × 25 = 100, so v = 10.'),
          mcq('q3', 'On a velocity–time graph, the area under the line is…', ['The distance travelled', 'The acceleration', 'The speed', 'The force'], 0),
          mcq('q4', 'On a velocity–time graph, the gradient is…', ['The acceleration', 'The distance', 'The time', 'The mass'], 0),
          mcq('q5', 'A typical walking speed is about…', ['1.5 m/s', '15 m/s', '0.1 m/s', '30 m/s'], 0),
          gap('q6', 'A car slows from 30 m/s to 10 m/s in 4 s. Acceleration = ___ m/s²', ['-5']),
          tf('q7', 'A horizontal line on a velocity–time graph means the object is stationary.', false, 'It means constant velocity. A horizontal line on a distance–time graph means stationary.'),
        ],
      },
      {
        id: 'gp-newton',
        title: 'Newton’s laws & stopping',
        emoji: '🍎',
        learn: [
          card('🍎', 'Newton’s three laws', 'First law: if the resultant force is zero, an object stays still or keeps moving at a constant velocity. Second law: F = m × a (resultant force = mass × acceleration). Third law: when two objects interact, they exert equal and opposite forces on each other. Inertia is the tendency of an object to stay at rest or keep moving uniformly.', ['Newton’s laws', 'F = ma', 'inertia']),
          card('🛑', 'Stopping distance', 'Stopping distance = thinking distance + braking distance. Thinking distance increases with speed and slower reactions (tiredness, drugs, alcohol, distractions); typical reaction times are 0.2–0.9 s. Braking distance increases with speed, wet or icy roads, and worn brakes or tyres.', ['stopping distance', 'thinking distance', 'braking distance'], 'stopping-distance'),
          card('🎱', 'Momentum', 'Momentum = mass × velocity: p = mv, in kg m/s. In a closed system, total momentum before an event equals total momentum after: momentum is conserved.', ['momentum', 'p = mv']),
        ],
        questions: [
          gap('q1', 'F = ma: 1,000 kg accelerating at 2 m/s² needs ___ N', ['2000']),
          gap('q2', 'A 20 N resultant force acts on a 4 kg mass. Acceleration = ___ m/s²', ['5']),
          match('q3', 'Thinking or braking distance?', [
            ['Driver is tired', 'Thinking distance'],
            ['Icy road', 'Braking distance'],
          ]),
          gap('q4', 'Momentum of a 50 kg runner at 4 m/s = ___ kg m/s', ['200']),
          mcq('q5', 'Which law says forces come in equal and opposite pairs?', ['Third law', 'First law', 'Second law'], 0),
          tf('q6', 'Stopping distance = thinking distance + braking distance.', true),
          mcq('q7', 'If the resultant force on a moving object is zero, it…', ['Keeps moving at constant velocity', 'Stops immediately', 'Speeds up', 'Slows down'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-phys-waves',
    title: 'Waves',
    stage: STAGE,
    description: 'Transverse and longitudinal waves, the wave equation and the electromagnetic spectrum.',
    colour: '#0e8fd6',
    lessons: [
      {
        id: 'gp-wave-props',
        title: 'Wave properties',
        emoji: '🌊',
        learn: [
          card('〰️', 'Transverse and longitudinal', 'Waves transfer energy, not matter. In transverse waves (light, water ripples) the oscillations are at right angles to the direction of travel. In longitudinal waves (sound) they are parallel, with compressions and rarefactions.', ['transverse', 'longitudinal', 'compressions', 'rarefactions']),
          card('📏', 'Describing waves', 'Amplitude: the maximum displacement from the rest position. Wavelength (λ): the distance from one point to the same point on the next wave. Frequency (f): waves per second, in hertz. Period T = 1 ÷ f. Wave speed v = f × λ. A wave with frequency 50 Hz and wavelength 2 m travels at 100 m/s.', ['amplitude', 'wavelength', 'frequency', 'v = fλ'], 'wave-anatomy'),
        ],
        questions: [
          gap('q1', 'v = fλ: f = 50 Hz, λ = 2 m. v = ___ m/s', ['100']),
          gap('q2', 'A wave has frequency 50 Hz. Its period is ___ s', ['0.02']),
          match('q3', 'Transverse or longitudinal?', [
            ['Sound', 'Longitudinal'],
            ['Light', 'Transverse'],
          ]),
          mcq('q4', 'What do waves transfer?', ['Energy', 'Matter', 'Water', 'Particles'], 0),
          gap('q5', 'Sound: v = 330 m/s, f = 110 Hz. Wavelength = ___ m', ['3']),
          mcq('q6', 'The maximum displacement from the rest position is the…', ['Amplitude', 'Wavelength', 'Frequency', 'Period'], 0),
        ],
      },
      {
        id: 'gp-em',
        title: 'Electromagnetic spectrum',
        emoji: '🌈',
        learn: [
          card('🌈', 'The spectrum', 'Electromagnetic waves are transverse and all travel at the same speed in a vacuum (3 × 10⁸ m/s). In order of increasing frequency (decreasing wavelength): radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.', ['electromagnetic spectrum'], 'em-spectrum'),
          card('📡', 'Uses and dangers', 'Radio: TV and radio. Microwaves: satellites and cooking. Infrared: heaters, cooking, thermal cameras. Visible: fibre optics. Ultraviolet: tanning and energy-efficient lamps. X-rays and gamma: medical imaging and treatments. UV can age skin and cause skin cancer; X-rays and gamma are ionising and can cause mutations and cancer.', ['ionising']),
        ],
        questions: [
          order('q1', 'Order from lowest to highest frequency', ['Radio waves', 'Microwaves', 'Infrared', 'Visible light', 'Ultraviolet', 'X-rays', 'Gamma rays']),
          match('q2', 'Match the wave to a use', [
            ['Microwaves', 'Satellite communication'],
            ['Infrared', 'Thermal cameras'],
            ['X-rays', 'Medical imaging'],
          ]),
          mcq('q3', 'Which EM wave has the longest wavelength?', ['Radio waves', 'Gamma rays', 'Visible light', 'X-rays'], 0),
          tf('q4', 'All electromagnetic waves travel at the same speed in a vacuum.', true),
          mcq('q5', 'Which can cause skin cancer?', ['Ultraviolet', 'Radio waves', 'Microwaves only', 'Visible light'], 0),
          mcq('q6', 'Are EM waves transverse or longitudinal?', ['Transverse', 'Longitudinal'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-phys-magnetism',
    title: 'Magnetism & electromagnetism',
    stage: STAGE,
    description: 'Permanent and induced magnets, fields, solenoids, the motor effect and F = BIL.',
    colour: '#d4533b',
    lessons: [
      {
        id: 'gp-magnets',
        title: 'Magnets & fields',
        emoji: '🧲',
        learn: [
          card('🧲', 'Permanent and induced', 'A permanent magnet produces its own magnetic field. An induced magnet becomes a magnet only when it is placed in a magnetic field, and the force between them is always attraction. Magnetic materials: iron, steel, nickel and cobalt.', ['permanent magnet', 'induced magnet'], 'magnet-field'),
          card('🧭', 'Magnetic fields', 'The field is strongest at the poles. Field lines go from north to south. A compass contains a small bar magnet that points along the field; it points north because of the Earth’s magnetic field, caused by its core.', ['magnetic field', 'compass']),
        ],
        questions: [
          mcq('q1', 'An induced magnet…', ['Only becomes magnetic in a magnetic field', 'Always repels', 'Makes its own field all the time', 'Is made of copper'], 0),
          mcq('q2', 'Where is a magnetic field strongest?', ['At the poles', 'In the middle', 'Far away', 'It is the same everywhere'], 0),
          tf('q3', 'The force between a permanent magnet and an induced magnet is always attraction.', true),
          mcq('q4', 'Why does a compass point north?', ['Earth has a magnetic field', 'The Sun attracts it', 'Gravity', 'Static electricity'], 0),
          match('q5', 'Magnetic or not?', [
            ['Nickel', 'Magnetic'],
            ['Copper', 'Not magnetic'],
          ]),
          mcq('q6', 'Which way do field lines point outside a magnet?', ['North to south', 'South to north', 'In circles around the middle'], 0),
        ],
      },
      {
        id: 'gp-motor',
        title: 'Electromagnets & the motor effect',
        emoji: '⚙️',
        learn: [
          card('🌀', 'Solenoids', 'A current in a wire creates a magnetic field around it. Coiling the wire into a solenoid makes the field inside strong and uniform. Adding an iron core makes it an electromagnet, which is even stronger and can be switched on and off.', ['solenoid', 'electromagnet'], 'solenoid'),
          card('🖐️', 'The motor effect', 'A current-carrying wire in a magnetic field experiences a force: the motor effect. Force = magnetic flux density × current × length: F = B × I × L (B in tesla). Fleming’s left-hand rule: thumb = motion (force), first finger = field, second finger = current. Electric motors use this to make a coil spin.', ['motor effect', 'F = BIL', 'Fleming’s left-hand rule'], 'left-hand-rule'),
        ],
        questions: [
          gap('q1', 'F = BIL: B = 0.2 T, I = 3 A, L = 0.5 m. F = ___ N', ['0.3']),
          match('q2', 'Fleming’s left-hand rule', [
            ['Thumb', 'Motion (force)'],
            ['First finger', 'Field'],
            ['Second finger', 'Current'],
          ]),
          mcq('q3', 'What makes a solenoid into a stronger electromagnet?', ['An iron core', 'A plastic core', 'Less current', 'Fewer turns'], 0),
          tf('q4', 'The magnetic field inside a solenoid is strong and uniform.', true),
          mcq('q5', 'What is the unit of magnetic flux density?', ['Tesla', 'Newton', 'Ampere', 'Volt'], 0),
          mcq('q6', 'The force on the wire is largest when the wire is…', ['At right angles to the field', 'Parallel to the field', 'Outside the field'], 0),
        ],
      },
    ],
  },
];
