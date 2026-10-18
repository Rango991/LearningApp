import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// More KS3 Physics for Years 8-9 (National Curriculum), building on the Year 7
// units in physics.ts and pitched to lead into AQA GCSE. KS3 uses g = 10 N/kg.
// Question ids are stored in progress data, so never change an existing id.

const Y89 = 'Years 8–9';

export const physicsY89: Unit[] = [
  {
    id: 'phys-matter',
    title: 'Matter & heating',
    stage: Y89,
    description: 'Density, changes of state, gas pressure and Brownian motion, and how heat moves.',
    colour: '#0fb5ae',
    lessons: [
      {
        id: 'pm-density',
        title: 'Density',
        emoji: '🧱',
        learn: [
          card('⚖️', 'What density is', 'Density is how much mass is packed into a space. Density = mass ÷ volume, in g/cm³ (or kg/m³). A 10 cm³ block with a mass of 80 g has a density of 8 g/cm³. Solids are usually densest because their particles are packed closest together. Water has a density of 1 g/cm³.', ['density', 'mass', 'volume'], 'density-blocks'),
          card('🛟', 'Floating and sinking', 'Anything less dense than water floats in it; anything denser sinks. Wood (about 0.7 g/cm³) floats and iron (7.9 g/cm³) sinks. Oil floats on water for the same reason. A steel ship floats because its hollow shape, full of air, makes it less dense overall than water.', ['float', 'sink']),
          card('🫗', 'Measuring volume', 'For a regular block, volume = length × width × height. For an odd shape, like a stone, use displacement: lower it into water and see how much the water level rises (or how much overflows from a eureka can). That rise is the stone’s volume.', ['displacement', 'eureka can'], 'displacement'),
        ],
        questions: [
          gap('q1', 'A block has a mass of 60 g and a volume of 20 cm³. Density = ___ g/cm³', ['3']),
          mcq('q2', 'Which would float in water (1 g/cm³)?', ['Cork, 0.24 g/cm³', 'Iron, 7.9 g/cm³', 'Glass, 2.5 g/cm³', 'Gold, 19.3 g/cm³'], 0),
          gap('q3', 'A measuring cylinder reads 50 cm³. A stone is dropped in and it reads 65 cm³. Volume of the stone = ___ cm³', ['15']),
          gap('q4', 'A box is 2 cm × 3 cm × 5 cm. Volume = ___ cm³', ['30']),
          tf('q5', 'A big log is denser than a small piece of the same wood.', false, 'Density depends on the material, not the size. Both float.'),
          mcq('q6', 'Why are solids usually denser than gases?', ['Their particles are packed much closer together', 'Their particles are bigger', 'They are colder', 'Gas particles have no mass'], 0),
          gap('q7', 'Density 2 g/cm³, volume 10 cm³. Mass = ___ g', ['20']),
        ],
      },
      {
        id: 'pm-states',
        title: 'Changes of state & energy',
        emoji: '🧊',
        learn: [
          card('🔥', 'Heating curve', 'Heat ice and its temperature rises until it reaches 0 °C. Then it stays at 0 °C while it melts, because the energy goes into breaking the forces between particles, not raising the temperature. Once it’s all water, the temperature rises again until it boils at 100 °C, and stays there until it has all turned to steam.', ['heating curve', 'melting point', 'boiling point'], 'ks3-heating-curve'),
          card('💧', 'Evaporation and boiling', 'Boiling happens all through a liquid, at its boiling point. Evaporation happens only at the surface, at any temperature: the fastest particles escape. That leaves the slower ones behind, so evaporation cools things down. That’s why sweating cools you.', ['evaporation', 'boiling']),
          card('🔄', 'Physical changes', 'Melting, freezing, evaporating, condensing and subliming (solid straight to gas, like dry ice) are physical changes. They are reversible and no new substance is made. Mass is conserved: 100 g of ice melts into 100 g of water. Water is unusual: ice is less dense than liquid water, so it floats.', ['sublimation', 'conservation of mass']),
        ],
        questions: [
          order('q1', 'Put the changes in order as ice is heated', ['Ice warms up', 'Ice melts at 0 °C', 'Water warms up', 'Water boils at 100 °C']),
          mcq('q2', 'While ice is melting, its temperature…', ['Stays at 0 °C', 'Keeps rising', 'Drops', 'Jumps to 100 °C'], 0, 'The energy is breaking the forces between particles.'),
          match('q3', 'Match the change of state', [
            ['Solid to liquid', 'Melting'],
            ['Gas to liquid', 'Condensing'],
            ['Liquid to solid', 'Freezing'],
            ['Solid to gas', 'Subliming'],
          ]),
          tf('q4', 'Evaporation only happens at a liquid’s boiling point.', false, 'It happens at any temperature, from the surface.'),
          mcq('q5', 'Why does sweating cool you down?', ['The fastest particles evaporate, leaving slower ones behind', 'Sweat is cold', 'It blocks the Sun', 'It makes you heavier'], 0),
          gap('q6', '200 g of ice melts. The water has a mass of ___ g', ['200']),
          mcq('q7', 'Why does ice float on water?', ['Ice is less dense than liquid water', 'Ice is lighter than air', 'Ice has no mass', 'Water pushes all solids up'], 0),
        ],
      },
      {
        id: 'pm-gas',
        title: 'Gas pressure & Brownian motion',
        emoji: '🎈',
        learn: [
          card('🎈', 'Gas pressure', 'Gas particles move fast in all directions and collide with the walls of their container. Each collision is a tiny push; all of them together make gas pressure. Heat the gas and the particles move faster, hitting the walls harder and more often, so the pressure rises. Squash the gas into a smaller space and they hit the walls more often too.', ['gas pressure', 'collisions'], 'gas-pressure'),
          card('🌫️', 'Brownian motion', 'Look at smoke through a microscope and the specks jiggle about randomly. They are being hit from all sides by air particles, which are far too small to see. This Brownian motion was early evidence that particles exist.', ['Brownian motion'], 'brownian'),
          card('💨', 'Diffusion', 'Particles spread out from where there are lots of them to where there are few: diffusion. It’s why you can smell perfume across a room. Diffusion is faster in gases than in liquids, faster when it’s hotter, and doesn’t happen in solids, because their particles can’t move around.', ['diffusion']),
        ],
        questions: [
          mcq('q1', 'What causes gas pressure?', ['Particles colliding with the walls', 'Particles sticking to the walls', 'The weight of the container', 'Particles standing still'], 0),
          mcq('q2', 'A sealed can of gas is heated. The pressure…', ['Increases', 'Decreases', 'Stays the same', 'Drops to zero'], 0, 'The particles move faster and hit the walls harder and more often.'),
          tf('q3', 'A balloon put in the freezer shrinks a little.', true, 'The air particles slow down, so they push less on the inside of the balloon.'),
          mcq('q4', 'Brownian motion of smoke specks is caused by…', ['Invisible air particles hitting them', 'Wind', 'The microscope light', 'Magnetism'], 0),
          gap('q5', 'Particles spreading from where there are lots to where there are few is called ___.', ['diffusion']),
          mcq('q6', 'Where is diffusion fastest?', ['In a hot gas', 'In a cold liquid', 'In a warm solid', 'In a cold solid'], 0),
          tf('q7', 'Pushing in a bike pump’s handle increases the air pressure inside.', true, 'The same particles are squashed into a smaller space, so they hit the walls more often.'),
        ],
      },
      {
        id: 'pm-heat',
        title: 'Keeping warm: heat transfer',
        emoji: '🧣',
        learn: [
          card('🥄', 'Conductors and insulators', 'Metals are good thermal conductors: their particles are close together and they have free electrons that carry energy quickly. Non-metals like wood and plastic are poor conductors, so they are insulators. Air is a very good insulator, so materials that trap air (wool, feathers, foam, loft insulation) keep things warm.', ['conductor', 'insulator', 'trapped air']),
          card('🌀', 'Convection currents', 'When a liquid or gas is heated, its particles spread out, so it becomes less dense and rises. Cooler, denser fluid sinks to take its place. This loop is a convection current. A radiator warms a whole room this way. Convection can’t happen in solids.', ['convection current'], 'convection-room'),
          card('🌡️', 'Radiation and surfaces', 'All objects give out infrared radiation; hotter ones give out more. Dark, matt surfaces are the best absorbers and emitters. Light, shiny surfaces are poor absorbers and emitters, and reflect it instead. A vacuum flask stops all three: the vacuum stops conduction and convection, and silvered walls reflect radiation.', ['infrared', 'matt', 'shiny', 'vacuum flask'], 'vacuum-flask'),
        ],
        questions: [
          mcq('q1', 'Why do pans have plastic or wooden handles?', ['They are insulators', 'They are conductors', 'They are shiny', 'They are dense'], 0),
          mcq('q2', 'Why does a woolly jumper keep you warm?', ['It traps air, a good insulator', 'Wool makes heat', 'It reflects all light', 'It is a good conductor'], 0),
          tf('q3', 'Convection can happen in solids.', false, 'The particles in a solid can’t move around, so there are no currents.'),
          mcq('q4', 'Hot air above a radiator rises because it is…', ['Less dense', 'More dense', 'Heavier', 'Shiny'], 0),
          mcq('q5', 'Which surface is the best absorber of infrared radiation?', ['Dull black', 'Shiny silver', 'Glossy white', 'Shiny white'], 0),
          match('q6', 'How a vacuum flask stops heat transfer', [
            ['Vacuum between the walls', 'Stops conduction and convection'],
            ['Silvered walls', 'Reflect radiation'],
            ['Stopper', 'Stops warm air escaping'],
          ]),
          tf('q7', 'Hotter objects give out more infrared radiation.', true),
        ],
      },
    ],
  },
  {
    id: 'phys-forces-2',
    title: 'Forces in action',
    stage: Y89,
    description: 'Pressure in liquids and gases, floating, moments and levers, stretching, and work done.',
    colour: '#e8505b',
    lessons: [
      {
        id: 'pfa-fluids',
        title: 'Pressure in liquids & gases',
        emoji: '🌊',
        learn: [
          card('🏔️', 'Atmospheric pressure', 'Air has weight, and the air above you presses on everything: atmospheric pressure. It’s about 100,000 Pa at sea level. The higher you go, the less air there is above you, so the pressure is lower. That’s why your ears pop on a plane and a sealed crisp packet puffs up in the mountains.', ['atmospheric pressure']),
          card('🤿', 'Pressure and depth', 'Liquid pressure increases with depth, because there is more liquid above pressing down. It pushes in all directions. Water spurts furthest from the lowest hole in a bottle, and dams are thicker at the bottom. Divers feel the pressure on their ears.', ['depth'], 'water-spurts'),
          card('🛳️', 'Upthrust', 'Water pushes up on anything in it: upthrust. Upthrust happens because the pressure on the bottom of an object is bigger than on its top. If the upthrust equals the object’s weight, it floats. If the weight is bigger, it sinks.', ['upthrust', 'float'], 'upthrust'),
        ],
        questions: [
          mcq('q1', 'Why is air pressure lower at the top of a mountain?', ['There is less air above pressing down', 'It is colder', 'The mountain pulls air down', 'There is more wind'], 0),
          tf('q2', 'Liquid pressure only pushes downwards.', false, 'It pushes in all directions.'),
          mcq('q3', 'Holes are made at the top, middle and bottom of a bottle of water. Which spurts furthest?', ['The bottom', 'The top', 'The middle', 'All the same'], 0),
          mcq('q4', 'Why are dams built thicker at the bottom?', ['Water pressure is greatest at the bottom', 'It looks better', 'The top is never wet', 'Fish live there'], 0),
          gap('q5', 'A floating boat weighs 5,000 N. The upthrust on it is ___ N', ['5000']),
          mcq('q6', 'An object sinks if…', ['Its weight is bigger than the upthrust', 'The upthrust is bigger than its weight', 'They are equal', 'It is hollow'], 0),
          tf('q7', 'A sealed crisp packet puffs up as a plane climbs.', true, 'The air pressure outside drops, so the air inside pushes the packet out.'),
        ],
      },
      {
        id: 'pfa-moments',
        title: 'Moments & levers',
        emoji: '⚖️',
        learn: [
          card('🔩', 'Recap: moments', 'Moment = force × distance from the pivot, in newton metres (N m). The distance is measured at right angles to the force. The same force has a bigger turning effect further from the pivot.', ['moment', 'pivot']),
          card('🎠', 'The principle of moments', 'When something is balanced, the total clockwise moment equals the total anticlockwise moment. On a seesaw, a 400 N child 1.5 m from the pivot (600 N m) balances a 600 N adult 1 m from the pivot (600 N m).', ['principle of moments', 'clockwise', 'anticlockwise'], 'seesaw'),
          card('🛠️', 'Levers', 'A lever lets a small force move a big load: push far from the pivot, with the load close to it. Crowbars, wheelbarrows, scissors, spanners and bottle openers are all levers. Your arm is a lever too, with your elbow as the pivot.', ['lever', 'load', 'effort'], 'lever'),
        ],
        questions: [
          gap('q1', 'A 20 N force acts 3 m from a pivot. Moment = ___ N m', ['60']),
          mcq('q2', 'A seesaw is balanced. Which is true?', ['Clockwise moments = anticlockwise moments', 'The two people must weigh the same', 'Nobody is on it', 'The pivot is moving'], 0),
          gap('q3', 'A 300 N child sits 2 m from the pivot. To balance, a 600 N adult sits ___ m from the pivot on the other side.', ['1']),
          gap('q4', 'A 500 N weight sits 0.4 m from a pivot. Its moment = ___ N m', ['200']),
          mcq('q5', 'To lift a heavy rock with a crowbar using the least force, you push…', ['As far from the pivot as possible', 'Right next to the pivot', 'On the rock', 'Anywhere: it makes no difference'], 0),
          match('q6', 'Name the part of a lever', [
            ['The point it turns about', 'Pivot'],
            ['The force you apply', 'Effort'],
            ['The weight being moved', 'Load'],
          ]),
          tf('q7', 'A longer spanner makes a tight nut easier to undo.', true),
        ],
      },
      {
        id: 'pfa-stretch',
        title: 'Stretching & squashing',
        emoji: '🪀',
        learn: [
          card('📈', 'Force–extension graphs', 'Hang weights on a spring and measure how much longer it gets: extension = new length − original length. Plot force against extension. For a spring, it’s a straight line through the origin: the extension is proportional to the force (Hooke’s law).', ['extension', 'proportional', 'Hooke’s law'], 'force-extension'),
          card('🧱', 'Elastic limit', 'Past the elastic limit, the line curves and the spring won’t go back to its original length. Stretching that springs back is elastic deformation; stretching that stays is plastic deformation. Rubber bands and springs are elastic; modelling clay is plastic.', ['elastic limit', 'elastic deformation', 'plastic deformation']),
          card('🏹', 'Stored energy', 'Stretching or squashing something takes work, and the energy is stored in its elastic store. Let go and it is transferred: a bow fires an arrow, a trampoline launches you up.', ['elastic store']),
        ],
        questions: [
          gap('q1', 'A spring is 10 cm long. With a weight on, it is 14 cm. Extension = ___ cm', ['4']),
          gap('q2', 'A 2 N weight stretches a spring by 3 cm. Within the elastic limit, 6 N stretches it by ___ cm', ['9']),
          mcq('q3', 'Within the elastic limit, a force–extension graph for a spring is…', ['A straight line through the origin', 'A curve', 'Flat', 'A straight line going down'], 0),
          tf('q4', 'Past its elastic limit, a spring goes back to its original length.', false),
          match('q5', 'Elastic or plastic?', [
            ['A spring after a small stretch', 'Elastic'],
            ['Squashed modelling clay', 'Plastic'],
          ]),
          mcq('q6', 'A stretched bow stores energy in which store?', ['Elastic', 'Chemical', 'Thermal', 'Nuclear'], 0),
          gap('q7', 'Extension = new length − ___ length', ['original']),
        ],
      },
      {
        id: 'pfa-work',
        title: 'Work done & machines',
        emoji: '🏗️',
        learn: [
          card('💪', 'Work done', 'Work is done when a force moves something. Work done = force × distance moved (in the direction of the force), in joules (J). Lifting a 50 N box up 2 m does 100 J of work. That 100 J is transferred to the box’s gravitational potential store.', ['work done', 'joule'], 'work-done'),
          card('🛝', 'Simple machines', 'Levers, ramps, pulleys and gears are simple machines. They let you use a smaller force, but you must move it a longer distance. Pushing a box up a long ramp takes less force than lifting it straight up, but you push it further. The work done is about the same: no machine gives you energy for free.', ['simple machine', 'ramp', 'pulley'], 'ramp'),
        ],
        questions: [
          gap('q1', 'A 50 N force pushes a box 4 m. Work done = ___ J', ['200']),
          mcq('q2', 'What is work done measured in?', ['Joules', 'Newtons', 'Watts', 'Metres'], 0),
          gap('q3', 'Lifting a 30 N bag up 2 m does ___ J of work.', ['60']),
          tf('q4', 'A ramp lets you use a smaller force, but over a longer distance.', true),
          mcq('q5', 'You push hard on a wall but it doesn’t move. The work done on the wall is…', ['Zero', 'Huge', 'Equal to your weight', '100 J'], 0, 'Nothing moved, so no work is done on the wall (though your muscles still get tired).'),
          mcq('q6', 'Which is NOT a simple machine?', ['A battery', 'A lever', 'A pulley', 'A ramp'], 0),
          gap('q7', '400 J of work is done pushing a trolley 10 m. Force = ___ N', ['40']),
        ],
      },
    ],
  },
  {
    id: 'phys-waves-2',
    title: 'Waves in depth',
    stage: Y89,
    description: 'Wave properties, sound technology and ultrasound, the eye and cameras, and lenses.',
    colour: '#5b6cf0',
    lessons: [
      {
        id: 'pwa-waves',
        title: 'Wave properties',
        emoji: '〰️',
        learn: [
          card('〰️', 'Parts of a wave', 'Waves carry energy from place to place, not matter: a duck on a pond bobs up and down as waves pass, but doesn’t travel with them. Amplitude is the height from the middle to a crest. Wavelength is the distance from one crest to the next. Frequency is how many waves pass each second, in hertz (Hz).', ['amplitude', 'wavelength', 'frequency', 'crest', 'trough'], 'wave-parts'),
          card('↔️', 'Transverse and longitudinal', 'In a transverse wave the vibrations are at right angles to the direction it travels: water waves, light, a rope flicked up and down. In a longitudinal wave they are along the direction it travels, making compressions and rarefactions: sound, or a slinky pushed in and out.', ['transverse', 'longitudinal', 'compression', 'rarefaction'], 'longitudinal'),
          card('➕', 'Superposition', 'When two waves meet, they add together. Two crests make a bigger crest. A crest meeting a trough of the same size cancels out. Noise-cancelling headphones make a sound wave that is the exact opposite of the outside noise, so the two cancel.', ['superposition'], 'superposition'),
        ],
        questions: [
          match('q1', 'Match the word to its meaning', [
            ['Amplitude', 'Height from the middle to a crest'],
            ['Wavelength', 'Distance from one crest to the next'],
            ['Frequency', 'Waves passing each second'],
          ]),
          mcq('q2', 'A duck floats on a pond as waves pass. It…', ['Bobs up and down in the same place', 'Moves along with the waves', 'Sinks', 'Moves backwards'], 0, 'Waves carry energy, not water.'),
          match('q3', 'Transverse or longitudinal?', [
            ['Light', 'Transverse'],
            ['Sound', 'Longitudinal'],
          ]),
          gap('q4', '10 waves pass a point every second. Frequency = ___ Hz', ['10']),
          mcq('q5', 'A crest meets a trough of the same size. The result is…', ['They cancel out', 'A wave twice as big', 'A faster wave', 'A louder sound'], 0),
          tf('q6', 'In a longitudinal wave, the vibrations are along the direction the wave travels.', true),
          gap('q7', 'In a sound wave, the regions where particles are squashed together are called ___.', ['compressions', 'compression']),
        ],
      },
      {
        id: 'pwa-sound',
        title: 'Sound at work',
        emoji: '🎤',
        learn: [
          card('🎤', 'Microphones and speakers', 'A microphone has a thin diaphragm that vibrates when sound hits it, and turns the vibrations into an electrical signal. A loudspeaker does the opposite: an electrical signal makes a cone vibrate, which pushes the air to make sound.', ['microphone', 'loudspeaker', 'diaphragm']),
          card('📺', 'Seeing sound', 'An oscilloscope shows a sound wave as a trace on a screen. Taller waves mean a bigger amplitude, so a louder sound. Waves closer together mean a higher frequency, so a higher pitch.', ['oscilloscope'], 'oscilloscope'),
          card('🐬', 'Ultrasound and sonar', 'Ultrasound is sound above 20,000 Hz. It’s used to scan unborn babies, clean jewellery and in physiotherapy, to help heal injuries. Ships use sonar: they send out a pulse and time the echo. Sound travels about 1,500 m/s in sea water, so an echo after 2 s means the seabed is 1,500 m down (the sound went down and back up).', ['ultrasound', 'sonar', 'echo'], 'sonar'),
        ],
        questions: [
          mcq('q1', 'What does a microphone do?', ['Turns sound vibrations into an electrical signal', 'Makes sound louder by itself', 'Turns electricity into light', 'Stores sound'], 0),
          match('q2', 'On an oscilloscope trace…', [
            ['Taller waves', 'Louder sound'],
            ['Waves closer together', 'Higher pitch'],
          ]),
          mcq('q3', 'Which is NOT a use of ultrasound?', ['Charging a phone', 'Scanning unborn babies', 'Cleaning jewellery', 'Physiotherapy for injuries'], 0),
          gap('q4', 'A sonar echo returns after 2 s. Sound travels 1,500 m/s in water. The seabed is ___ m down.', ['1500']),
          gap('q5', 'A sonar echo returns after 4 s at 1,500 m/s. The seabed is ___ m down.', ['3000']),
          tf('q6', 'A loudspeaker turns an electrical signal into vibrations.', true),
          mcq('q7', 'Ultrasound is sound with a frequency…', ['Above 20,000 Hz', 'Below 20 Hz', 'Of exactly 1,000 Hz', 'That is very loud'], 0),
        ],
      },
      {
        id: 'pwa-eye',
        title: 'The eye & cameras',
        emoji: '👁️',
        learn: [
          card('📷', 'Pinhole camera', 'A pinhole camera is a box with a tiny hole at one end and a screen at the other. Light travels in straight lines from the object, through the hole, onto the screen. The image is upside down and smaller. A bigger hole lets in more light, giving a brighter but blurrier image.', ['pinhole camera', 'image'], 'pinhole'),
          card('👁️', 'How the eye works', 'Light enters through the cornea and the pupil. The iris changes the size of the pupil to let in more or less light. The lens focuses the light onto the retina at the back, making an upside-down image. The retina absorbs the light and sends signals along the optic nerve to the brain, which turns the picture the right way up.', ['cornea', 'pupil', 'iris', 'lens', 'retina', 'optic nerve'], 'eye'),
          card('⚡', 'Light carries energy', 'Light transfers energy from a source to an absorber. In the retina, it causes chemical changes that make electrical signals. In a camera, the light is absorbed by a sensor (or, in old cameras, film), which records the image.', ['absorb', 'sensor']),
        ],
        questions: [
          mcq('q1', 'The image in a pinhole camera is…', ['Upside down', 'The right way up', 'Sideways', 'Bigger than the object'], 0),
          match('q2', 'Match the part of the eye to its job', [
            ['Iris', 'Changes the size of the pupil'],
            ['Lens', 'Focuses light'],
            ['Retina', 'Absorbs light and makes signals'],
            ['Optic nerve', 'Carries signals to the brain'],
          ]),
          tf('q3', 'The image on the retina is upside down.', true, 'Your brain turns it the right way up.'),
          mcq('q4', 'In bright light, the pupil gets…', ['Smaller', 'Bigger', 'Darker', 'Further away'], 0),
          mcq('q5', 'Making the pinhole bigger makes the image…', ['Brighter but blurrier', 'Darker and sharper', 'Bigger and sharper', 'Disappear'], 0),
          order('q6', 'Put the path of light through the eye in order', ['Cornea', 'Pupil', 'Lens', 'Retina']),
          gap('q7', 'A digital camera records light using a ___.', ['sensor']),
        ],
      },
      {
        id: 'pwa-lenses',
        title: 'Lenses',
        emoji: '🔍',
        learn: [
          card('🔍', 'Convex lenses', 'A convex (converging) lens is fatter in the middle. It bends parallel rays of light inwards so they meet at a point: the focal point. The distance from the lens to it is the focal length. A fatter lens bends light more, so it has a shorter focal length. Magnifying glasses, cameras and your eye use convex lenses.', ['convex', 'converging', 'focal point', 'focal length'], 'lenses'),
          card('↕️', 'Concave lenses', 'A concave (diverging) lens is thinner in the middle. It spreads parallel rays of light out, so they look as if they came from a point behind the lens.', ['concave', 'diverging']),
          card('👓', 'Fixing eyesight', 'Short-sighted people see near things clearly but far things blurred, because the image forms in front of the retina. A concave lens fixes it. Long-sighted people see far things clearly but near things blurred, because the image would form behind the retina. A convex lens fixes it.', ['short-sighted', 'long-sighted'], 'glasses'),
        ],
        questions: [
          mcq('q1', 'A convex lens makes parallel rays of light…', ['Meet at a focal point', 'Spread out', 'Stop', 'Turn back'], 0),
          match('q2', 'Match the lens', [
            ['Convex', 'Fatter in the middle, converging'],
            ['Concave', 'Thinner in the middle, diverging'],
          ]),
          tf('q3', 'A magnifying glass is a convex lens.', true),
          mcq('q4', 'Which lens has the shorter focal length?', ['A fatter convex lens', 'A thinner convex lens', 'They are always the same'], 0),
          mcq('q5', 'A short-sighted person needs glasses with…', ['Concave lenses', 'Convex lenses', 'Flat glass', 'Mirrors'], 0),
          mcq('q6', 'A long-sighted person can see clearly…', ['Things far away', 'Things close up', 'Nothing at all', 'Only colours'], 0),
          gap('q7', 'The point where a convex lens brings light together is the ___ point.', ['focal']),
        ],
      },
    ],
  },
  {
    id: 'phys-static-motors',
    title: 'Static & motors',
    stage: Y89,
    description: 'Static electricity, electric fields and sparks, and how electric motors work.',
    colour: '#f59e0b',
    lessons: [
      {
        id: 'pst-static',
        title: 'Static electricity',
        emoji: '⚡',
        learn: [
          card('🎈', 'Charging by rubbing', 'Rub a balloon on a jumper and electrons (tiny negative particles) rub off one material onto the other. The material that gains electrons becomes negatively charged; the one that loses them is left positively charged. Only the electrons move, never the positive charges.', ['static electricity', 'electrons', 'charge'], 'static-balloon'),
          card('🧲', 'Attract and repel', 'Like charges repel; opposite charges attract. A charged balloon sticks to a wall and makes your hair stand up. A charged object has an electric field around it, and other charges in the field feel a force without touching: it’s a non-contact force.', ['attract', 'repel', 'electric field'], 'charges'),
          card('🌩️', 'Sparks', 'When enough charge builds up, it can jump across a gap as a spark. Lightning is a giant spark from a charged cloud. Static can be dangerous when refuelling planes, so they are earthed with a wire that lets the charge flow away safely.', ['spark', 'earthing']),
        ],
        questions: [
          mcq('q1', 'When a balloon is rubbed on a jumper, what moves?', ['Electrons', 'Protons', 'Whole atoms', 'Positive charges'], 0),
          match('q2', 'Attract or repel?', [
            ['Two negative charges', 'Repel'],
            ['A positive and a negative charge', 'Attract'],
          ]),
          tf('q3', 'An object that gains electrons becomes negatively charged.', true),
          mcq('q4', 'A rod loses electrons when it is rubbed. Its charge is…', ['Positive', 'Negative', 'Neutral', 'Magnetic'], 0),
          gap('q5', 'The region around a charged object where other charges feel a force is its electric ___.', ['field']),
          mcq('q6', 'Why are planes earthed when they are refuelled?', ['So static charge flows away instead of making a spark', 'To make the fuel flow faster', 'To charge the battery', 'To keep the plane still'], 0),
          tf('q7', 'Static electricity is a contact force.', false, 'Charged objects push or pull without touching: a non-contact force.'),
        ],
      },
      {
        id: 'pst-motor',
        title: 'Electric motors',
        emoji: '⚙️',
        learn: [
          card('🧲', 'The motor effect', 'A wire carrying a current has its own magnetic field. Put it between the poles of a magnet and the two fields push on each other, so the wire feels a force and moves. Reverse the current, or swap the magnet’s poles, and the force reverses.', ['motor effect', 'magnetic field'], 'motor-effect'),
          card('🔄', 'DC motors', 'In a DC motor, a coil of wire sits between two magnets. The current flows one way along one side of the coil and the opposite way along the other side, so one side is pushed up and the other down, and the coil turns. A split-ring commutator swaps the current’s direction every half turn, so the coil keeps spinning the same way.', ['DC motor', 'coil', 'commutator'], 'dc-motor'),
          card('🚗', 'Faster and stronger', 'A motor spins faster with more current, a stronger magnet, or more turns on the coil. Motors are in fans, drills, washing machines, toy cars and electric cars.', ['motor']),
        ],
        questions: [
          mcq('q1', 'Why does a wire carrying a current move between the poles of a magnet?', ['Its magnetic field and the magnet’s field push on each other', 'It gets hot', 'Magnets attract copper', 'Static electricity'], 0),
          tf('q2', 'Reversing the current reverses the direction of the force.', true),
          mcq('q3', 'In a DC motor, what keeps the coil spinning the same way?', ['The split-ring commutator', 'The battery getting hotter', 'The magnet turning', 'Friction'], 0),
          mcq('q4', 'Which would make a motor spin faster?', ['More current', 'A weaker magnet', 'Fewer turns on the coil', 'Less current'], 0),
          gap('q5', 'A motor transfers energy by electricity to the ___ store of the moving coil.', ['kinetic']),
          mcq('q6', 'Which of these contains an electric motor?', ['A fan', 'A torch bulb', 'A solar panel', 'A kettle'], 0),
          gap('q7', 'The part of a motor that spins is a ___ of wire.', ['coil']),
        ],
      },
    ],
  },
];
