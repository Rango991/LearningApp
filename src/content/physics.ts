import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// KS3 Physics (Year 7, then Years 8-9, National Curriculum), pitched to lead into AQA GCSE.
// KS3 uses g = 10 N/kg on Earth. Question ids are stored in progress data,
// so never change an existing id.

const Y7 = 'Year 7';
const Y89 = 'Years 8–9';

export const physics: Unit[] = [
  {
    id: 'phys-forces',
    title: 'Forces & motion',
    stage: Y7,
    description: 'Forces, mass and weight, balanced and unbalanced forces, and speed.',
    colour: '#1c9df6',
    lessons: [
      {
        id: 'pf-forces',
        title: 'Forces, mass & weight',
        emoji: '🏋️',
        learn: [
          card('👉', 'What forces are', 'A force is a push or a pull, measured in newtons (N) with a newtonmeter. Contact forces need touching: friction, air resistance, upthrust, tension. Non-contact forces act at a distance: gravity, magnetism, electrostatic.', ['newton', 'contact', 'non-contact'], 'force-types'),
          card('🌍', 'Mass vs weight', 'Mass is the amount of stuff in something, in kilograms (kg). It’s the same everywhere. Weight is the force of gravity on it, in newtons. Weight = mass × gravitational field strength. On Earth g = 10 N/kg, so a 50 kg person weighs 500 N. On the Moon g is about 1.6 N/kg.', ['mass', 'weight', 'gravitational field strength'], 'mass-weight'),
        ],
        questions: [
          mcq('q1', 'What unit are forces measured in?', ['Kilograms', 'Newtons', 'Joules', 'Metres'], 1),
          match('q2', 'Contact or non-contact?', [
            ['Friction', 'Contact'],
            ['Gravity', 'Non-contact'],
          ]),
          gap('q3', 'A 50 kg person on Earth (g = 10 N/kg) weighs ___ N.', ['500']),
          gap('q4', 'A 3 kg bag on Earth weighs ___ N.', ['30']),
          tf('q5', 'Your mass is smaller on the Moon.', false, 'Your mass stays the same. Your weight is smaller, because gravity is weaker.'),
          mcq('q6', 'Which of these is a non-contact force?', ['Air resistance', 'Magnetism', 'Friction', 'Upthrust'], 1),
          gap('q7', 'An astronaut weighs 800 N on Earth. Their mass is ___ kg.', ['80']),
        ],
      },
      {
        id: 'pf-balanced',
        title: 'Balanced & unbalanced forces',
        emoji: '🪂',
        learn: [
          card('⚖️', 'Resultant force', 'Add forces in the same direction; subtract opposite ones. The answer is the resultant force. If forces are balanced (resultant = 0), an object stays still or keeps moving at a steady speed. If they’re unbalanced, it speeds up, slows down or changes direction.', ['resultant force', 'balanced'], 'resultant'),
          card('🛝', 'Friction and drag', 'Friction acts between surfaces and opposes motion. Air resistance and water resistance (drag) increase as you go faster. A skydiver speeds up until drag equals weight, then falls at a steady terminal velocity. Opening the parachute increases drag, slowing them down.', ['friction', 'drag', 'terminal velocity'], 'skydiver'),
        ],
        questions: [
          gap('q1', 'A 20 N push right and a 5 N push left. Resultant force = ___ N to the right.', ['15']),
          mcq('q2', 'A car moves at a steady speed. The forces on it are…', ['Balanced', 'Unbalanced', 'Zero', 'Only forwards'], 0),
          tf('q3', 'If forces are balanced, an object must be still.', false, 'It could also be moving at a steady speed in a straight line.'),
          mcq('q4', 'A skydiver opens their parachute. What happens?', ['Drag increases and they slow down', 'Weight increases', 'They speed up', 'Gravity stops'], 0),
          gap('q5', 'The steady top speed of a falling object is its terminal ___.', ['velocity']),
          mcq('q6', 'What happens to air resistance as you go faster?', ['It increases', 'It decreases', 'It stays the same', 'It disappears'], 0),
          gap('q7', 'Forces of 30 N and 30 N pull in opposite directions. Resultant = ___ N', ['0']),
        ],
      },
      {
        id: 'pf-speed',
        title: 'Speed & graphs',
        emoji: '🏎️',
        learn: [
          card('📐', 'Speed', 'Speed = distance ÷ time. In metres and seconds, speed is in metres per second (m/s). Walk 100 m in 50 s and your speed is 2 m/s. Rearranged: distance = speed × time.', ['speed', 'm/s'], 'speed-triangle'),
          card('📈', 'Distance–time graphs', 'On a distance–time graph, a flat line means stationary. A straight sloping line means a steady speed. A steeper line means faster. The gradient (slope) is the speed.', ['distance–time graph', 'gradient'], 'dt-graph'),
          card('🚆', 'Relative motion', 'Relative motion is how fast something moves compared to something else. Two cars going 60 mph in opposite directions approach each other at 120 mph.', ['relative motion']),
        ],
        questions: [
          gap('q1', '100 m in 20 s. Speed = ___ m/s', ['5']),
          gap('q2', 'A cyclist goes 6 m/s for 50 s. Distance = ___ m', ['300']),
          gap('q3', 'A train travels 240 km in 2 hours. Average speed = ___ km/h', ['120']),
          mcq('q4', 'On a distance–time graph, a flat horizontal line means…', ['Stationary', 'Steady speed', 'Speeding up', 'Going backwards'], 0),
          mcq('q5', 'On a distance–time graph, a steeper line means…', ['Slower', 'Faster', 'Stopped', 'Heavier'], 1),
          gap('q6', 'How long to walk 600 m at 2 m/s? ___ s', ['300']),
          mcq('q7', 'Two cars drive towards each other, each at 50 mph. How fast are they approaching each other?', ['0 mph', '50 mph', '100 mph', '2,500 mph'], 2),
        ],
      },
    ],
  },
  {
    id: 'phys-energy',
    title: 'Energy',
    stage: Y7,
    description: 'Energy stores and transfers, conservation of energy and efficiency.',
    colour: '#f5a524',
    lessons: [
      {
        id: 'pe-stores',
        title: 'Energy stores & transfers',
        emoji: '🔋',
        learn: [
          card('📦', 'Energy stores', 'Energy is measured in joules (J). It is stored in different ways: kinetic (moving), gravitational potential (raised up), elastic (stretched or squashed), thermal (hot), chemical (food, fuels, batteries), nuclear, magnetic and electrostatic.', ['joule', 'kinetic', 'gravitational potential'], 'energy-stores'),
          card('🔀', 'Transfers', 'Energy is transferred between stores by heating, by forces (mechanical work), by electricity, or by radiation (light and sound). A falling ball transfers energy from its gravitational potential store to its kinetic store.', ['transfer']),
        ],
        questions: [
          mcq('q1', 'What is energy measured in?', ['Newtons', 'Joules', 'Watts', 'Volts'], 1),
          match('q2', 'Match the object to its main energy store', [
            ['A stretched elastic band', 'Elastic'],
            ['A battery', 'Chemical'],
            ['A moving car', 'Kinetic'],
            ['A book on a high shelf', 'Gravitational potential'],
          ]),
          mcq('q3', 'A ball falls. Energy moves from which store to which?', ['Gravitational potential to kinetic', 'Kinetic to chemical', 'Thermal to elastic', 'Chemical to nuclear'], 0),
          tf('q4', 'Food is a store of chemical energy.', true),
          mcq('q5', 'A cup of tea cools down. Energy is transferred by…', ['Heating', 'Electricity', 'Forces', 'Magnetism'], 0),
          gap('q6', 'The energy store of a moving object is called ___ energy.', ['kinetic']),
        ],
      },
      {
        id: 'pe-efficiency',
        title: 'Conservation & efficiency',
        emoji: '💡',
        learn: [
          card('♾️', 'Conservation of energy', 'Energy can’t be created or destroyed, only transferred. The total stays the same. But some energy is always wasted, usually spreading out (dissipating) as heat to the surroundings.', ['conservation of energy', 'dissipated']),
          card('📊', 'Efficiency', 'Efficiency = useful energy out ÷ total energy in. A bulb that turns 100 J into 20 J of light is 0.2, or 20%, efficient. Nothing can be more than 100% efficient.', ['efficiency'], 'sankey'),
        ],
        questions: [
          tf('q1', 'Energy can be destroyed.', false),
          gap('q2', 'A bulb uses 100 J and gives out 30 J of light. Efficiency = ___%', ['30']),
          gap('q3', 'A motor uses 200 J and wastes 50 J. Useful energy = ___ J', ['150']),
          gap('q4', 'So its efficiency is ___%', ['75']),
          mcq('q5', 'Where does most wasted energy usually end up?', ['As thermal energy in the surroundings', 'It disappears', 'Back in the battery', 'As nuclear energy'], 0),
          tf('q6', 'A machine can be 120% efficient.', false),
          mcq('q7', 'An LED bulb is more efficient than an old filament bulb because…', ['It wastes less energy as heat', 'It is brighter', 'It is smaller', 'It uses more energy'], 0),
        ],
      },
    ],
  },
  {
    id: 'phys-waves',
    title: 'Waves: sound & light',
    stage: Y7,
    description: 'How sound travels, reflection, refraction and colour.',
    colour: '#9b5de5',
    lessons: [
      {
        id: 'pw-sound',
        title: 'Sound',
        emoji: '🔊',
        learn: [
          card('〰️', 'Vibrations', 'Sound is made by vibrations. It travels as a longitudinal wave: particles vibrate back and forth in the same direction the wave travels. Sound needs a medium (solid, liquid or gas), so it can’t travel through a vacuum like space. It travels about 340 m/s in air, and faster in liquids and solids.', ['longitudinal', 'medium', 'vacuum']),
          card('🎵', 'Loudness and pitch', 'A bigger amplitude means a louder sound. A higher frequency means a higher pitch. Frequency is measured in hertz (Hz). Humans hear roughly 20 Hz to 20,000 Hz. Sound above that is ultrasound, used for scanning babies and by bats.', ['amplitude', 'frequency', 'hertz', 'ultrasound'], 'sound-waves'),
        ],
        questions: [
          match('q1', 'Match the wave property to what you hear', [
            ['Amplitude', 'Loudness'],
            ['Frequency', 'Pitch'],
          ]),
          tf('q2', 'Sound can travel through space.', false, 'Space is a vacuum: there are no particles to vibrate.'),
          mcq('q3', 'Sound travels fastest through…', ['Air', 'Water', 'Steel', 'A vacuum'], 2),
          gap('q4', 'Frequency is measured in ___.', ['hertz', 'Hz']),
          mcq('q5', 'Roughly what range can humans hear?', ['20 Hz to 20,000 Hz', '0 Hz to 100 Hz', '1,000 Hz to 1 million Hz', 'All frequencies'], 0),
          gap('q6', 'Sound above the range of human hearing is ___.', ['ultrasound']),
          mcq('q7', 'You see lightning before you hear thunder because…', ['Light travels much faster than sound', 'Thunder happens later', 'Sound travels faster', 'Your ears are slow'], 0),
        ],
      },
      {
        id: 'pw-light',
        title: 'Light & reflection',
        emoji: '🪞',
        learn: [
          card('⚡', 'Light', 'Light travels in straight lines at 300,000 km/s, the fastest anything can go. It doesn’t need a medium, so it travels through space. It’s a transverse wave. We see objects when light from them enters our eyes. Luminous objects (like the Sun) give out their own light.', ['luminous', 'transverse']),
          card('🪞', 'Reflection', 'The law of reflection: the angle of incidence equals the angle of reflection. Both are measured from the normal, a line at 90° to the mirror. Smooth surfaces give clear reflections; rough surfaces scatter light (diffuse reflection).', ['angle of incidence', 'normal'], 'reflection'),
        ],
        questions: [
          gap('q1', 'Light hits a mirror at 30° to the normal. Angle of reflection = ___°', ['30']),
          mcq('q2', 'What is the normal?', ['A line at 90° to the surface', 'The mirror itself', 'The reflected ray', 'Any straight line'], 0),
          tf('q3', 'Light needs a medium to travel through.', false),
          mcq('q4', 'Which object is luminous?', ['The Moon', 'The Sun', 'A mirror', 'A book'], 1, 'The Moon only reflects sunlight.'),
          mcq('q5', 'Why can’t you see your reflection in a piece of paper?', ['Its rough surface scatters the light', 'It absorbs all light', 'It’s too thin', 'Paper is luminous'], 0),
          tf('q6', 'Light is a transverse wave.', true),
        ],
      },
      {
        id: 'pw-colour',
        title: 'Refraction & colour',
        emoji: '🌈',
        learn: [
          card('🥤', 'Refraction', 'Light changes speed when it goes into a different material, which makes it bend: refraction. Going into a denser material (air → glass) it slows down and bends towards the normal. That’s why a straw looks bent in water. Lenses use refraction to focus light.', ['refraction']),
          card('🌈', 'Colour', 'A prism splits white light into a spectrum: red, orange, yellow, green, blue, indigo, violet. This is dispersion. A red object reflects red light and absorbs the others. A red filter lets only red light through.', ['spectrum', 'dispersion', 'filter'], 'prism'),
        ],
        questions: [
          mcq('q1', 'Light goes from air into glass. It bends…', ['Towards the normal', 'Away from the normal', 'It doesn’t bend', 'Backwards'], 0),
          order('q2', 'Put the colours of the spectrum in order', ['Red', 'Orange', 'Yellow', 'Green', 'Blue']),
          mcq('q3', 'Why does a green apple look green?', ['It reflects green light', 'It absorbs green light', 'It makes green light', 'It refracts red light'], 0),
          gap('q4', 'A prism splitting white light into colours is called ___.', ['dispersion']),
          mcq('q5', 'A white T-shirt is seen through a red filter. It looks…', ['Red', 'White', 'Blue', 'Green'], 0),
          tf('q6', 'A straw looks bent in a glass of water because of refraction.', true),
          mcq('q7', 'A blue object under only red light looks…', ['Blue', 'Red', 'Black', 'Purple'], 2, 'It can only reflect blue light, and there is none, so it looks black.'),
        ],
      },
    ],
  },
  {
    id: 'phys-space',
    title: 'Space',
    stage: Y7,
    description: 'Days, years and seasons, the Solar System and beyond.',
    colour: '#3d4a9e',
    lessons: [
      {
        id: 'ps-earth',
        title: 'Days, years & seasons',
        emoji: '🌍',
        learn: [
          card('🔄', 'Day and year', 'Earth spins on its axis once every 24 hours, giving day and night. It orbits the Sun once every 365¼ days: one year. The extra quarter day is why we have leap years.', ['axis', 'orbit']),
          card('☀️', 'Seasons', 'Seasons happen because Earth’s axis is tilted. In UK summer, the northern hemisphere is tilted towards the Sun: the Sun is higher in the sky, days are longer, and sunlight is more concentrated. Seasons are NOT caused by how close Earth is to the Sun.', ['tilt', 'seasons'], 'seasons'),
        ],
        questions: [
          mcq('q1', 'What causes day and night?', ['Earth spinning on its axis', 'Earth orbiting the Sun', 'The Moon blocking the Sun', 'The Sun moving round Earth'], 0),
          gap('q2', 'Earth takes ___ hours to spin once.', ['24']),
          mcq('q3', 'What causes the seasons?', ['The tilt of Earth’s axis', 'Earth getting closer to the Sun', 'The Moon', 'Clouds'], 0),
          tf('q4', 'In UK summer, the northern hemisphere is tilted towards the Sun.', true),
          gap('q5', 'Earth takes about ___ days to orbit the Sun.', ['365', '365.25', '365 1/4']),
          mcq('q6', 'Why do we have leap years?', ['A year is about 365¼ days', 'Earth slows down', 'To fix the clocks', 'The Moon changes'], 0),
        ],
      },
      {
        id: 'ps-solar',
        title: 'The Solar System & beyond',
        emoji: '🪐',
        learn: [
          card('🪐', 'The planets', 'In order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune (“My Very Easy Method Just Speeds Up Naming”). The inner four are rocky; the outer four are gas giants. Gravity keeps the planets in orbit around the Sun.', ['planets', 'orbit'], 'solar-system'),
          card('🌙', 'The Moon', 'The Moon orbits Earth about once a month. We see phases (new moon, crescent, half, gibbous, full) because we see different amounts of its sunlit half. Gravity on the Moon is about 1.6 N/kg, much weaker than Earth’s 10 N/kg.', ['phases'], 'moon-phases'),
          card('🌌', 'Beyond', 'The Sun is a star. Our Solar System is in the Milky Way galaxy, which has billions of stars. A light year is the distance light travels in a year, used for huge distances in space.', ['star', 'galaxy', 'light year']),
        ],
        questions: [
          order('q1', 'Order these planets, starting nearest the Sun', ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']),
          mcq('q2', 'What keeps planets in orbit around the Sun?', ['Gravity', 'Magnetism', 'Friction', 'Air resistance'], 0),
          mcq('q3', 'Which is the largest planet?', ['Earth', 'Saturn', 'Jupiter', 'Neptune'], 2),
          tf('q4', 'A light year is a measure of time.', false, 'It’s a distance: how far light travels in one year.'),
          mcq('q5', 'Why does the Moon have phases?', ['We see different amounts of its sunlit half', 'Earth’s shadow covers it', 'It changes shape', 'Clouds block it'], 0),
          gap('q6', 'Our galaxy is called the Milky ___.', ['way']),
          gap('q7', 'A 60 kg astronaut on the Moon (g = 1.6 N/kg) weighs ___ N.', ['96']),
        ],
      },
    ],
  },
  {
    id: 'phys-electricity',
    title: 'Electricity & magnetism',
    stage: Y89,
    description: 'Circuits and current, series and parallel, resistance, and electromagnets.',
    colour: '#f7b500',
    lessons: [
      {
        id: 'pel-circuits',
        title: 'Circuits & current',
        emoji: '💡',
        learn: [
          card('🔌', 'Circuits', 'Current only flows around a complete circuit. Current is the flow of charge, measured in amps (A) with an ammeter, which is connected in series. Voltage (potential difference) is the “push”, measured in volts (V) with a voltmeter, which is connected in parallel across a component.', ['current', 'amps', 'voltage', 'ammeter', 'voltmeter'], 'meter-circuit'),
          card('✏️', 'Symbols', 'Circuit diagrams use symbols: a cell (a long and a short line), a battery (two or more cells), a lamp (a circle with a cross), a switch (a break with a lever), a resistor (a rectangle), and ammeter and voltmeter (circles with A and V).', ['circuit symbol'], 'circuit-symbols'),
        ],
        questions: [
          match('q1', 'Match the quantity to its unit', [
            ['Current', 'Amps (A)'],
            ['Voltage', 'Volts (V)'],
            ['Resistance', 'Ohms (Ω)'],
          ]),
          mcq('q2', 'How is an ammeter connected?', ['In series', 'In parallel', 'Either way', 'Outside the circuit'], 0),
          mcq('q3', 'How is a voltmeter connected?', ['In series', 'In parallel across a component', 'To the switch only', 'It isn’t connected'], 1),
          tf('q4', 'A current can flow if there is a gap in the circuit.', false),
          mcq('q5', 'What is current?', ['The flow of charge', 'The push of the battery', 'The resistance of a wire', 'The power of a bulb'], 0),
          gap('q6', 'Two or more cells joined together make a ___.', ['battery']),
        ],
      },
      {
        id: 'pel-series',
        title: 'Series & parallel',
        emoji: '🔀',
        learn: [
          card('➡️', 'Series circuits', 'In a series circuit, everything is on one loop. The current is the same everywhere. The voltage from the battery is shared between the components. If one bulb breaks, they all go out. Adding more bulbs makes each one dimmer.', ['series'], 'series-circuit'),
          card('🔱', 'Parallel circuits', 'A parallel circuit has branches. The current splits between them and adds back up where they rejoin. Each branch gets the full battery voltage. If one bulb breaks, the others stay on, which is why houses are wired in parallel.', ['parallel'], 'parallel-circuit'),
        ],
        questions: [
          match('q1', 'Series or parallel?', [
            ['Current is the same everywhere', 'Series'],
            ['Current splits between branches', 'Parallel'],
          ]),
          tf('q2', 'In a series circuit, if one bulb breaks, the others stay lit.', false),
          gap('q3', 'Parallel branches carry 2 A and 3 A. Current from the battery = ___ A', ['5']),
          gap('q4', 'A 6 V battery and two identical bulbs in series. Voltage across each bulb = ___ V', ['3']),
          mcq('q5', 'Why are homes wired in parallel?', ['Each device can be switched on and off separately', 'It uses less wire', 'It makes lights dimmer', 'It’s cheaper'], 0),
          tf('q6', 'Each branch of a parallel circuit gets the full battery voltage.', true),
          mcq('q7', 'An ammeter reads 0.5 A before a bulb in a series circuit. What does it read after the bulb?', ['0.5 A', '0.25 A', '1 A', '0 A'], 0),
        ],
      },
      {
        id: 'pel-resistance',
        title: 'Resistance',
        emoji: '🧮',
        learn: [
          card('🚧', 'Resistance', 'Resistance is how much a component opposes the current, measured in ohms (Ω). For the same voltage, more resistance means less current. Long, thin wires have more resistance than short, thick ones.', ['resistance', 'ohm']),
          card('📐', 'V = I × R', 'Voltage = current × resistance. Rearranged: R = V ÷ I, and I = V ÷ R. With 12 V across a 4 Ω resistor, the current is 12 ÷ 4 = 3 A.', ['V = IR'], 'vir-triangle'),
        ],
        questions: [
          gap('q1', '12 V across a 4 Ω resistor. Current = ___ A', ['3']),
          gap('q2', 'A current of 2 A flows through 5 Ω. Voltage = ___ V', ['10']),
          gap('q3', '6 V gives a current of 0.5 A. Resistance = ___ Ω', ['12']),
          mcq('q4', 'What is resistance measured in?', ['Amps', 'Volts', 'Ohms', 'Watts'], 2),
          tf('q5', 'A longer wire has more resistance.', true),
          mcq('q6', 'If resistance goes up and voltage stays the same, the current…', ['Goes down', 'Goes up', 'Stays the same', 'Reverses'], 0),
        ],
      },
      {
        id: 'pel-magnets',
        title: 'Magnets & electromagnets',
        emoji: '🧲',
        learn: [
          card('🧲', 'Magnets', 'Magnets have a north and a south pole. Like poles repel; opposite poles attract. Iron, nickel and cobalt (and steel) are magnetic materials. Field lines go from north to south, and are closest together where the field is strongest. A compass points along the field lines.', ['poles', 'repel', 'attract', 'magnetic field'], 'magnet-field'),
          card('🔁', 'Electromagnets', 'A current in a wire makes a magnetic field. A coil of wire around an iron core makes an electromagnet, which can be switched on and off. Make it stronger with more turns on the coil, more current, or an iron core. Used in scrapyard cranes, door locks and speakers.', ['electromagnet', 'coil', 'core']),
        ],
        questions: [
          mcq('q1', 'Two north poles are brought together. They…', ['Attract', 'Repel', 'Do nothing', 'Swap poles'], 1),
          mcq('q2', 'Which of these is magnetic?', ['Aluminium', 'Copper', 'Nickel', 'Plastic'], 2),
          mcq('q3', 'Which way do magnetic field lines point?', ['From north to south', 'From south to north', 'In circles only', 'Downwards'], 0),
          tf('q4', 'An electromagnet can be switched off.', true),
          mcq('q5', 'Which would make an electromagnet stronger?', ['More turns of wire', 'Less current', 'A plastic core', 'Fewer turns of wire'], 0),
          gap('q6', 'Iron, nickel and ___ are magnetic elements.', ['cobalt']),
          tf('q7', 'Earth behaves like a giant magnet.', true, 'That’s why a compass works.'),
        ],
      },
    ],
  },
  {
    id: 'phys-power',
    title: 'Power, pressure & resources',
    stage: Y89,
    description: 'Pressure, springs and moments, power and energy bills, and energy resources.',
    colour: '#ef7d2d',
    lessons: [
      {
        id: 'pf-pressure',
        title: 'Pressure, springs & moments',
        emoji: '🔧',
        learn: [
          card('🪡', 'Pressure', 'Pressure = force ÷ area, in N/m² (also called pascals, Pa). A small area gives a big pressure (a sharp knife cuts well); a big area spreads the force out (snowshoes stop you sinking). Pressure in liquids increases with depth.', ['pressure', 'pascal']),
          card('🌀', 'Hooke’s law', 'For a spring, the extension is proportional to the force: double the force, double the stretch, until the elastic limit. Past that, it won’t go back to its original shape.', ['extension', 'Hooke’s law', 'elastic limit'], 'springs'),
          card('🔩', 'Moments', 'A moment is the turning effect of a force: moment = force × distance from the pivot (N m). Long spanners make turning easier. A seesaw balances when the clockwise and anticlockwise moments are equal.', ['moment', 'pivot'], 'moments'),
        ],
        questions: [
          gap('q1', 'A 100 N force on 2 m². Pressure = ___ N/m²', ['50']),
          mcq('q2', 'Why do snowshoes stop you sinking?', ['Bigger area, so less pressure', 'Less weight', 'More friction', 'They are lighter'], 0),
          tf('q3', 'Water pressure increases the deeper you go.', true),
          gap('q4', '2 N stretches a spring 4 cm. Following Hooke’s law, 4 N stretches it ___ cm.', ['8']),
          gap('q5', 'A 10 N force, 0.5 m from a pivot. Moment = ___ N m', ['5']),
          mcq('q6', 'Why is it easier to open a door by pushing far from the hinge?', ['Bigger distance gives a bigger moment', 'Less friction', 'Less pressure', 'The door is lighter there'], 0),
          tf('q7', 'A spring stretched past its elastic limit returns to its original length.', false),
        ],
      },
      {
        id: 'pe-power',
        title: 'Power & energy bills',
        emoji: '🧾',
        learn: [
          card('⚡', 'Power', 'Power is how fast energy is transferred. Power = energy ÷ time, measured in watts (W). 1 W = 1 joule per second. A 2,000 W kettle transfers 2,000 J every second. 1 kilowatt (kW) = 1,000 W.', ['power', 'watt', 'kilowatt']),
          card('💷', 'Paying for energy', 'Energy companies charge per kilowatt-hour (kWh). Energy in kWh = power in kW × time in hours. Cost = kWh × price per kWh. A 2 kW heater on for 3 hours uses 6 kWh. At 30p per kWh that costs £1.80.', ['kWh'], 'energy-bill'),
        ],
        questions: [
          gap('q1', '1 kW = ___ W', ['1000']),
          gap('q2', 'A 60 W bulb is on for 10 s. Energy = ___ J', ['600']),
          gap('q3', 'A 3 kW kettle used for 2 hours uses ___ kWh.', ['6']),
          gap('q4', '5 kWh at 30p per kWh costs ___p', ['150']),
          mcq('q5', 'What does power measure?', ['How fast energy is transferred', 'Total energy', 'Force', 'Voltage'], 0),
          mcq('q6', 'Which uses the most energy?', ['A 2 kW heater for 1 hour', 'A 1 kW heater for 1 hour', 'A 100 W lamp for 2 hours', 'A 10 W phone charger for 5 hours'], 0, '2 kWh beats 1 kWh, 0.2 kWh and 0.05 kWh.'),
          gap('q7', 'A device transfers 500 J in 10 s. Power = ___ W', ['50']),
        ],
      },
      {
        id: 'pe-resources',
        title: 'Energy resources & heating',
        emoji: '🌬️',
        learn: [
          card('🌞', 'Renewable', 'Renewable resources won’t run out: solar, wind, hydroelectric, tidal, wave, geothermal and biomass. They don’t release much carbon dioxide, but some depend on the weather.', ['renewable'], 'resources'),
          card('🛢️', 'Non-renewable', 'Fossil fuels (coal, oil and gas) and nuclear fuel will run out. Burning fossil fuels releases carbon dioxide, which adds to climate change.', ['non-renewable', 'fossil fuels']),
          card('🔥', 'Heat transfer', 'Conduction: through solids, as particles vibrate and pass energy on (metals are good conductors). Convection: in liquids and gases, warm fluid rises and cool fluid sinks. Radiation: infrared waves, which can travel through a vacuum. Insulators like trapped air reduce heat loss.', ['conduction', 'convection', 'radiation', 'insulator'], 'heat-transfer'),
        ],
        questions: [
          match('q1', 'Renewable or non-renewable?', [
            ['Wind', 'Renewable'],
            ['Coal', 'Non-renewable'],
          ]),
          mcq('q2', 'Which resource depends on the weather?', ['Solar', 'Nuclear', 'Gas', 'Coal'], 0),
          match('q3', 'Match the heat transfer to how it works', [
            ['Conduction', 'Vibrating particles in solids'],
            ['Convection', 'Warm fluid rises, cool fluid sinks'],
            ['Radiation', 'Infrared waves'],
          ]),
          tf('q4', 'Radiation can travel through a vacuum.', true, 'That’s how heat from the Sun reaches Earth through space.'),
          mcq('q5', 'Why does double glazing reduce heat loss?', ['The gap between panes is a good insulator', 'Glass conducts heat well', 'It reflects all light', 'It lets more heat out'], 0),
          tf('q6', 'Burning fossil fuels releases carbon dioxide.', true),
          gap('q7', 'Heat moving through a metal spoon is ___.', ['conduction']),
        ],
      },
    ],
  },
];
