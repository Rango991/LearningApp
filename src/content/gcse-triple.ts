import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// AQA GCSE Biology (8461), Chemistry (8462) and Physics (8463): the extra content
// that is only in the separate ("triple") sciences, on top of Combined Science Trilogy.
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE Triple Science (AQA)';

export const tripleBiology: Unit[] = [
  {
    id: 'g-bio-triple',
    title: 'Triple Biology extras',
    stage: STAGE,
    description: 'Microorganisms and monoclonal antibodies, plant disease, the brain and eye, kidneys and temperature, DNA and cloning.',
    colour: '#22b07d',
    lessons: [
      {
        id: 'gbt-microbes',
        title: 'Microbes & monoclonal antibodies',
        emoji: '🧫',
        learn: [
          card('🧫', 'Culturing bacteria', 'Bacteria divide by binary fission, as often as every 20 minutes. Grow them on agar using aseptic technique: sterilise loops in a flame, tape the lid on (but don’t seal it), and incubate at no more than 25 °C in school so harmful pathogens don’t grow. After n divisions, the number of bacteria = starting number × 2ⁿ.', ['binary fission', 'aseptic technique', 'agar']),
          card('🐭', 'Monoclonal antibodies', 'A mouse’s lymphocyte (which makes one specific antibody) is fused with a tumour cell (which divides quickly) to make a hybridoma cell. Cloning it gives lots of identical (monoclonal) antibodies. Uses: pregnancy tests, diagnosing disease, research, and carrying drugs to cancer cells.', ['monoclonal antibodies', 'hybridoma', 'lymphocyte'], 'hybridoma'),
        ],
        questions: [
          gap('q1', 'One bacterium divides 3 times. There are now ___ bacteria', ['8']),
          mcq('q2', 'Why are school cultures incubated at no more than 25 °C?', ['To stop harmful pathogens growing', 'To kill all bacteria', 'To make them grow faster', 'To save energy'], 0),
          mcq('q3', 'A hybridoma is a lymphocyte fused with a…', ['Tumour cell', 'Red blood cell', 'Plant cell', 'Virus'], 0),
          mcq('q4', 'Which is a use of monoclonal antibodies?', ['Pregnancy tests', 'Making bread', 'Killing all bacteria', 'Building muscle'], 0),
          mcq('q5', 'Bacteria reproduce by…', ['Binary fission', 'Meiosis', 'Pollination', 'Budding only'], 0),
          tf('q6', 'The Petri dish lid should be taped down but not fully sealed.', true, 'Sealing it could let harmful anaerobic bacteria grow.'),
        ],
      },
      {
        id: 'gbt-plants',
        title: 'Plant diseases & defences',
        emoji: '🥀',
        learn: [
          card('🥀', 'Diseases and deficiencies', 'Tobacco mosaic virus (TMV) makes a mosaic pattern on leaves, reducing photosynthesis. Rose black spot is a fungus that causes black spots and makes leaves fall; it spreads in water and wind and is treated with fungicides. Aphids are insect pests. A lack of nitrate ions causes stunted growth; a lack of magnesium causes yellow leaves (chlorosis).', ['tobacco mosaic virus', 'rose black spot', 'aphids', 'chlorosis']),
          card('🌵', 'Plant defences', 'Physical: cellulose cell walls, a waxy cuticle, and bark. Chemical: antibacterial chemicals and poisons that deter animals. Mechanical: thorns and hairs, leaves that droop when touched, and mimicry to trick animals.', ['physical', 'chemical', 'mechanical'], 'plant-defences'),
        ],
        questions: [
          mcq('q1', 'Rose black spot is caused by a…', ['Fungus', 'Virus', 'Bacterium', 'Insect'], 0),
          mcq('q2', 'TMV is a…', ['Virus', 'Fungus', 'Protist', 'Insect'], 0),
          mcq('q3', 'A lack of magnesium causes…', ['Chlorosis (yellow leaves)', 'Stunted growth', 'Black spots', 'Mosaic patterns'], 0),
          mcq('q4', 'A lack of nitrate ions causes…', ['Stunted growth', 'Chlorosis', 'Wilting only', 'Extra flowers'], 0),
          match('q5', 'Match the defence to its type', [
            ['Waxy cuticle', 'Physical'],
            ['Poisons', 'Chemical'],
            ['Thorns', 'Mechanical'],
          ]),
          mcq('q6', 'Aphids are…', ['Insect pests', 'Fungi', 'Viruses', 'Bacteria'], 0),
        ],
      },
      {
        id: 'gbt-brain-eye',
        title: 'The brain & the eye',
        emoji: '🧠',
        learn: [
          card('🧠', 'The brain', 'Cerebral cortex: consciousness, intelligence, memory and language. Cerebellum: balance and coordinating muscles. Medulla: unconscious actions like heartbeat and breathing. Scientists study the brain using MRI scans, electrical stimulation, and patients with brain damage. It is delicate and complex, so treating it is risky.', ['cerebral cortex', 'cerebellum', 'medulla'], 'brain-regions'),
          card('👁️', 'The eye', 'To focus on a near object, the ciliary muscles contract, the suspensory ligaments slacken, and the lens becomes fatter. For far objects, the opposite happens. Short sight (myopia) is corrected with a concave lens; long sight (hyperopia) with a convex lens.', ['accommodation', 'ciliary muscles', 'myopia', 'hyperopia']),
        ],
        questions: [
          mcq('q1', 'Which part of the brain controls balance?', ['Cerebellum', 'Medulla', 'Cerebral cortex', 'Retina'], 0),
          mcq('q2', 'Which part controls heartbeat and breathing?', ['Medulla', 'Cerebellum', 'Cerebral cortex', 'Lens'], 0),
          mcq('q3', 'Memory and language are controlled by the…', ['Cerebral cortex', 'Medulla', 'Cerebellum', 'Spinal cord'], 0),
          mcq('q4', 'Focusing on a near object, the lens becomes…', ['Fatter', 'Thinner', 'Flatter', 'Smaller'], 0),
          mcq('q5', 'Short sight is corrected with a…', ['Concave lens', 'Convex lens', 'Prism', 'Mirror'], 0),
          tf('q6', 'MRI scans help scientists study the brain.', true),
        ],
      },
      {
        id: 'gbt-kidneys',
        title: 'Temperature & the kidneys',
        emoji: '🌡️',
        learn: [
          card('🌡️', 'Controlling body temperature', 'The thermoregulatory centre in the brain monitors blood temperature. Too hot: you sweat, and blood vessels near the skin widen (vasodilation) to lose heat. Too cold: you shiver, sweating stops, and blood vessels near the skin narrow (vasoconstriction).', ['thermoregulatory centre', 'vasodilation', 'vasoconstriction'], 'thermoregulation'),
          card('🫘', 'The kidneys', 'Kidneys filter the blood, then reabsorb what the body needs: all the glucose, some ions, and as much water as needed. Urea and excess water leave as urine. ADH, released by the pituitary gland, makes the kidneys reabsorb more water. Kidney failure is treated by dialysis or a transplant.', ['filtration', 'selective reabsorption', 'ADH', 'dialysis']),
        ],
        questions: [
          mcq('q1', 'When you are too hot, blood vessels near the skin…', ['Widen (vasodilation)', 'Narrow (vasoconstriction)', 'Stay the same', 'Close completely'], 0),
          mcq('q2', 'Shivering happens when you are…', ['Too cold', 'Too hot', 'Dehydrated', 'Exercising'], 0),
          mcq('q3', 'Which hormone makes the kidneys reabsorb more water?', ['ADH', 'Insulin', 'Adrenaline', 'Oestrogen'], 0),
          mcq('q4', 'Which substance is completely reabsorbed by healthy kidneys?', ['Glucose', 'Urea', 'Excess water', 'Excess ions'], 0),
          mcq('q5', 'Where is ADH released from?', ['The pituitary gland', 'The pancreas', 'The adrenal gland', 'The thyroid'], 0),
          tf('q6', 'Kidney failure can be treated by dialysis or a transplant.', true),
        ],
      },
      {
        id: 'gbt-dna',
        title: 'DNA & cloning',
        emoji: '🧬',
        learn: [
          card('🧬', 'DNA structure', 'DNA is a polymer made of repeating nucleotides. Each nucleotide has a sugar, a phosphate and one of four bases: A, T, C or G. The bases pair up: A with T, and C with G. A sequence of three bases codes for one amino acid in a protein.', ['nucleotide', 'complementary base pairs'], 'dna-pairs'),
          card('🐑', 'Cloning', 'Plants can be cloned by cuttings or tissue culture. Animals can be cloned by splitting embryos (embryo transplants) or by adult cell cloning: the nucleus from a body cell goes into an egg with its nucleus removed, and an electric shock makes it divide. Dolly the sheep (1996) was cloned this way.', ['tissue culture', 'embryo transplant', 'adult cell cloning']),
        ],
        questions: [
          mcq('q1', 'Which base pairs with A?', ['T', 'C', 'G', 'A'], 0),
          mcq('q2', 'Which base pairs with C?', ['G', 'T', 'A', 'C'], 0),
          gap('q3', 'A sequence of ___ bases codes for one amino acid', ['3', 'three']),
          mcq('q4', 'A nucleotide contains a sugar, a phosphate and a…', ['Base', 'Protein', 'Fat', 'Gene'], 0),
          gap('q5', 'Dolly the sheep was cloned in ___', ['1996']),
          mcq('q6', 'Growing new plants from small groups of cells is…', ['Tissue culture', 'Embryo transplant', 'Adult cell cloning', 'Meiosis'], 0),
        ],
      },
    ],
  },
];

export const tripleChemistry: Unit[] = [
  {
    id: 'g-chem-triple',
    title: 'Triple Chemistry extras',
    stage: STAGE,
    description: 'Transition metals and nanoparticles, titrations and yield, cells, identifying ions, organic chemistry and the Haber process.',
    colour: '#8e5cf7',
    lessons: [
      {
        id: 'gct-transition',
        title: 'Transition metals & nanoparticles',
        emoji: '🔩',
        learn: [
          card('🔩', 'Transition metals', 'Compared with Group 1, transition metals (like iron, copper and nickel) have higher melting points and densities, are stronger and harder, and react much more slowly. They form coloured compounds, ions with different charges (Fe²⁺ and Fe³⁺), and are useful catalysts: iron in the Haber process, nickel for making margarine.', ['transition metals', 'catalyst'], 'transition-metals'),
          card('🔬', 'Nanoparticles', 'Nanoparticles are 1–100 nm across, only a few hundred atoms. They have a huge surface area to volume ratio, so they make good catalysts. They are used in sun creams, medicine and electronics, but their effects on health and the environment are not fully known.', ['nanoparticles', 'surface area to volume ratio']),
        ],
        questions: [
          mcq('q1', 'Compared with Group 1, transition metals…', ['Have higher melting points', 'Are softer', 'React more vigorously', 'Float on water'], 0),
          mcq('q2', 'Which catalyst is used in the Haber process?', ['Iron', 'Nickel', 'Platinum', 'Copper'], 0),
          tf('q3', 'Transition metals often form coloured compounds.', true),
          mcq('q4', 'Nanoparticles are between…', ['1 and 100 nm', '1 and 100 mm', '1 and 100 cm', '100 and 1,000 m'], 0),
          mcq('q5', 'Why are nanoparticles good catalysts?', ['Huge surface area to volume ratio', 'They are heavy', 'They are magnetic', 'They are coloured'], 0),
          mcq('q6', 'Iron can form ions with charges of…', ['2+ and 3+', '1+ only', '2− and 3−', '4+ only'], 0),
        ],
      },
      {
        id: 'gct-titration',
        title: 'Titrations, yield & atom economy',
        emoji: '⚗️',
        learn: [
          card('⚗️', 'Titrations', 'A titration finds the exact volume of acid that neutralises an alkali. Use a pipette to measure the alkali, add an indicator, and add acid from a burette until the colour changes (the end point). Repeat until results are concordant (within 0.10 cm³).', ['titration', 'burette', 'pipette', 'end point', 'concordant'], 'titration'),
          card('📊', 'Yield and atom economy', 'Percentage yield = actual mass ÷ theoretical mass × 100. Yield is below 100% because of side reactions, reversible reactions, and product lost in separation. Atom economy = Mr of the desired product ÷ total Mr of all reactants × 100. One mole of any gas takes up 24 dm³ at room temperature and pressure.', ['percentage yield', 'atom economy', 'molar volume']),
        ],
        questions: [
          gap('q1', 'Theoretical yield 20 g, actual yield 15 g. Percentage yield = ___%', ['75']),
          mcq('q2', 'What measures the acid added in a titration?', ['A burette', 'A pipette', 'A measuring cylinder', 'A balance'], 0),
          gap('q3', 'Concordant titres are within ___ cm³ of each other', ['0.10', '0.1']),
          gap('q4', '2 moles of gas at room temperature and pressure occupy ___ dm³', ['48']),
          mcq('q5', 'Atom economy compares the desired product with…', ['All the reactants', 'The catalyst', 'The water', 'The waste only'], 0),
          tf('q6', 'Product lost during separation lowers the percentage yield.', true),
        ],
      },
      {
        id: 'gct-cells',
        title: 'Chemical cells & fuel cells',
        emoji: '🔋',
        learn: [
          card('🔋', 'Cells and batteries', 'A cell has two different metals in an electrolyte. The bigger the difference in reactivity between the metals, the bigger the voltage. A battery is two or more cells joined. Non-rechargeable cells stop when a reactant runs out; rechargeable ones can be reversed by an external current.', ['cell', 'electrolyte', 'battery']),
          card('🚗', 'Hydrogen fuel cells', 'In a hydrogen fuel cell, hydrogen reacts with oxygen to make electricity, and the only product is water: 2H₂ + O₂ → 2H₂O. Advantages: no pollution at the point of use, and no slow recharging. Disadvantages: hydrogen is a flammable gas that is hard to store, and it is often made using fossil fuels.', ['fuel cell'], 'fuel-cell'),
        ],
        questions: [
          mcq('q1', 'What is the only product of a hydrogen fuel cell?', ['Water', 'Carbon dioxide', 'Oxygen', 'Methane'], 0),
          mcq('q2', 'Which pair of metals gives the biggest voltage?', ['Magnesium and copper', 'Zinc and iron', 'Copper and copper', 'Iron and tin'], 0, 'They have the biggest difference in reactivity.'),
          mcq('q3', 'Why do non-rechargeable cells stop working?', ['A reactant runs out', 'They get too cold', 'The metals melt', 'The voltage rises'], 0),
          mcq('q4', 'A disadvantage of hydrogen fuel cells is that hydrogen…', ['Is hard to store', 'Makes carbon dioxide', 'Is a solid', 'Is toxic'], 0),
          tf('q5', 'A battery is made of two or more cells.', true),
          mcq('q6', 'A cell needs two different metals and an…', ['Electrolyte', 'Insulator', 'Indicator', 'Catalyst'], 0),
        ],
      },
      {
        id: 'gct-ion-tests',
        title: 'Identifying ions',
        emoji: '🔥',
        learn: [
          card('🔥', 'Flame tests', 'Metal ions give coloured flames. Lithium: crimson. Sodium: yellow. Potassium: lilac. Calcium: orange-red. Copper: green. Flame emission spectroscopy, a machine, can identify ions more accurately, even in a mixture.', ['flame test', 'flame emission spectroscopy'], 'flame-tests'),
          card('🧪', 'Precipitate tests', 'Add sodium hydroxide: copper(II) gives a blue precipitate, iron(II) green, iron(III) brown, and aluminium, calcium and magnesium white (aluminium’s dissolves in excess). Halides: add nitric acid then silver nitrate: chloride white, bromide cream, iodide yellow. Sulfate: add hydrochloric acid then barium chloride: white. Carbonates fizz with acid, giving carbon dioxide that turns limewater milky.', ['precipitate', 'halide', 'sulfate', 'carbonate']),
        ],
        questions: [
          mcq('q1', 'What colour flame does potassium give?', ['Lilac', 'Yellow', 'Crimson', 'Green'], 0),
          mcq('q2', 'What colour flame does sodium give?', ['Yellow', 'Lilac', 'Green', 'Orange-red'], 0),
          match('q3', 'Match the ion to its hydroxide precipitate', [
            ['Copper(II)', 'Blue'],
            ['Iron(II)', 'Green'],
            ['Iron(III)', 'Brown'],
          ]),
          mcq('q4', 'Silver nitrate gives a yellow precipitate with…', ['Iodide', 'Chloride', 'Bromide', 'Sulfate'], 0),
          mcq('q5', 'Which test identifies sulfate ions?', ['Barium chloride', 'Silver nitrate', 'Limewater', 'A flame test'], 0),
          mcq('q6', 'Which metal ion gives a crimson flame?', ['Lithium', 'Copper', 'Calcium', 'Sodium'], 0),
        ],
      },
      {
        id: 'gct-organic',
        title: 'Alcohols, acids & polymers',
        emoji: '🧴',
        learn: [
          card('🍷', 'Alcohols, acids and esters', 'Alcohols contain the –OH group; ethanol is made by fermenting sugar with yeast and is used in drinks and as a fuel. Carboxylic acids contain –COOH; ethanoic acid is in vinegar. An alcohol and a carboxylic acid react, with an acid catalyst, to make an ester, such as ethyl ethanoate, used in perfumes and flavourings.', ['alcohol', 'carboxylic acid', 'ester', 'fermentation']),
          card('🔗', 'Polymers', 'Addition polymers form when alkenes join and nothing else is made. Condensation polymers form from two different monomers, each with two functional groups, and a small molecule such as water is lost each time they link (polyesters). Natural polymers include proteins (made from amino acids), DNA, starch and cellulose.', ['addition polymer', 'condensation polymer', 'amino acids'], 'polymer-types'),
        ],
        questions: [
          mcq('q1', 'Which group do alcohols contain?', ['–OH', '–COOH', 'C=C', '–NH₂'], 0),
          mcq('q2', 'Which acid is in vinegar?', ['Ethanoic acid', 'Hydrochloric acid', 'Sulfuric acid', 'Citric acid'], 0),
          mcq('q3', 'An alcohol + a carboxylic acid makes an…', ['Ester', 'Alkene', 'Alkane', 'Polymer'], 0),
          mcq('q4', 'In condensation polymerisation, what small molecule is often lost?', ['Water', 'Oxygen', 'Hydrogen', 'Carbon dioxide'], 0),
          mcq('q5', 'Proteins are polymers made from…', ['Amino acids', 'Glucose', 'Ethene', 'Nucleotides'], 0),
          tf('q6', 'Ethanol is made by fermenting sugar with yeast.', true),
        ],
      },
      {
        id: 'gct-haber',
        title: 'The Haber process & fertilisers',
        emoji: '🌾',
        learn: [
          card('🏭', 'Making ammonia', 'The Haber process makes ammonia: N₂ + 3H₂ ⇌ 2NH₃. Nitrogen comes from the air and hydrogen from natural gas. Conditions are a compromise: 450 °C, 200 atmospheres and an iron catalyst. The ammonia is cooled and liquefied, and unreacted gases are recycled.', ['Haber process', 'ammonia', 'compromise'], 'haber'),
          card('🌾', 'NPK fertilisers', 'Plants need nitrogen, phosphorus and potassium. NPK fertilisers contain compounds of all three. Ammonia is used to make ammonium nitrate and ammonium phosphate, which are soluble, so plants can absorb them.', ['NPK fertiliser']),
        ],
        questions: [
          gap('q1', 'The Haber process runs at about ___ °C', ['450']),
          gap('q2', 'The Haber process runs at about ___ atmospheres', ['200']),
          mcq('q3', 'Where does the nitrogen come from?', ['The air', 'Natural gas', 'Sea water', 'Rocks'], 0),
          mcq('q4', 'What happens to unreacted nitrogen and hydrogen?', ['They are recycled', 'They are released', 'They are burned', 'They are sold'], 0),
          mcq('q5', 'NPK stands for…', ['Nitrogen, phosphorus, potassium', 'Nickel, platinum, krypton', 'Neon, phosphorus, potassium', 'Nitrogen, potassium, krypton'], 0),
          tf('q6', 'The Haber process conditions are a compromise between rate, yield and cost.', true),
        ],
      },
    ],
  },
];

export const triplePhysics: Unit[] = [
  {
    id: 'g-phys-space',
    title: 'Space physics',
    stage: STAGE,
    description: 'The life cycle of stars, orbits, red-shift and the Big Bang.',
    colour: '#3d4a9e',
    lessons: [
      {
        id: 'gpt-stars',
        title: 'The life cycle of stars',
        emoji: '⭐',
        learn: [
          card('🌌', 'A star is born', 'A star forms from a nebula, a cloud of dust and gas, pulled together by gravity into a protostar. When it’s hot enough, nuclear fusion of hydrogen into helium starts. In a main sequence star like the Sun, the inward pull of gravity balances the outward pressure from fusion, so it stays stable for billions of years.', ['nebula', 'protostar', 'main sequence', 'fusion'], 'star-life'),
          card('💥', 'How stars end', 'A star about the size of the Sun becomes a red giant, then a white dwarf, then cools to a black dwarf. A much bigger star becomes a red supergiant, then explodes as a supernova, leaving a neutron star or a black hole. Elements heavier than iron are made in supernovae.', ['red giant', 'white dwarf', 'supernova', 'black hole']),
        ],
        questions: [
          order('q1', 'Put the Sun’s life cycle in order', ['Nebula', 'Protostar', 'Main sequence star', 'Red giant', 'White dwarf']),
          mcq('q2', 'In a main sequence star, gravity is balanced by…', ['Pressure from fusion', 'Magnetism', 'Friction', 'Air resistance'], 0),
          mcq('q3', 'A very massive star ends in a…', ['Supernova', 'White dwarf only', 'Nebula', 'Protostar'], 0),
          mcq('q4', 'Where are elements heavier than iron made?', ['In supernovae', 'In the Sun now', 'On Earth', 'In nebulae'], 0),
          mcq('q5', 'What does a supernova leave behind?', ['A neutron star or black hole', 'A red giant', 'A protostar', 'A planet'], 0),
          tf('q6', 'Main sequence stars fuse hydrogen into helium.', true),
        ],
      },
      {
        id: 'gpt-orbits',
        title: 'Orbits, red-shift & the Big Bang',
        emoji: '🪐',
        learn: [
          card('🪐', 'Orbits', 'Gravity keeps planets, moons and satellites in orbit. In a circular orbit the speed stays the same but the direction keeps changing, so the velocity changes: the object is accelerating towards the centre. A smaller orbit needs a higher speed.', ['orbit', 'velocity']),
          card('🔴', 'Red-shift', 'Light from distant galaxies is shifted towards the red end of the spectrum: red-shift. The further away a galaxy is, the bigger the red-shift, so the universe is expanding. This supports the Big Bang theory: the universe began from a tiny, extremely hot, dense point. Cosmic microwave background radiation is more evidence.', ['red-shift', 'Big Bang', 'cosmic microwave background radiation'], 'red-shift'),
        ],
        questions: [
          mcq('q1', 'In a circular orbit, which changes?', ['Velocity', 'Speed', 'Mass', 'Size'], 0),
          mcq('q2', 'Satellites in smaller orbits travel…', ['Faster', 'Slower', 'At the same speed', 'Backwards'], 0),
          mcq('q3', 'Light from distant galaxies is shifted towards…', ['Red', 'Blue', 'Green', 'Violet'], 0),
          mcq('q4', 'More distant galaxies show…', ['More red-shift', 'Less red-shift', 'No red-shift', 'Blue-shift'], 0),
          mcq('q5', 'Red-shift is evidence that the universe is…', ['Expanding', 'Shrinking', 'Not changing', 'Flat'], 0),
          tf('q6', 'Cosmic microwave background radiation supports the Big Bang theory.', true),
        ],
      },
    ],
  },
  {
    id: 'g-phys-triple',
    title: 'Triple Physics extras',
    stage: STAGE,
    description: 'Lenses and black bodies, moments and pressure in fluids, transformers, and seismic waves.',
    colour: '#1c9df6',
    lessons: [
      {
        id: 'gpt-lenses',
        title: 'Lenses, colour & black bodies',
        emoji: '🔍',
        learn: [
          card('🔍', 'Lenses', 'A convex (converging) lens bends parallel rays to meet at the principal focus. A concave (diverging) lens spreads them out. Magnification = image height ÷ object height. A real image can be projected onto a screen; a virtual image can’t.', ['convex', 'concave', 'principal focus', 'magnification'], 'convex-lens'),
          card('🌈', 'Colour and black bodies', 'Opaque objects look the colour of the light they reflect; the rest is absorbed. Colour filters let only certain colours through. All objects emit infrared. A perfect black body absorbs and emits all radiation; the hotter it is, the more radiation it gives out and the shorter the peak wavelength.', ['opaque', 'filter', 'black body']),
        ],
        questions: [
          mcq('q1', 'Which lens makes parallel rays meet at a point?', ['Convex (converging)', 'Concave (diverging)'], 0),
          gap('q2', 'Image height 6 cm, object height 2 cm. Magnification = ___', ['3']),
          mcq('q3', 'A red object looks red because it…', ['Reflects red light', 'Absorbs red light', 'Emits red light only', 'Lets red light through'], 0),
          mcq('q4', 'An image you can project onto a screen is…', ['Real', 'Virtual'], 0),
          tf('q5', 'A hotter object emits more radiation with a shorter peak wavelength.', true),
          mcq('q6', 'A perfect black body…', ['Absorbs all radiation', 'Reflects all radiation', 'Emits no radiation', 'Is always cold'], 0),
        ],
      },
      {
        id: 'gpt-moments',
        title: 'Moments & pressure in fluids',
        emoji: '⚖️',
        learn: [
          card('⚖️', 'Moments, levers and gears', 'Moment = force × perpendicular distance from the pivot (N m). When balanced, clockwise moments equal anticlockwise moments. Levers and gears are force multipliers: a long spanner turns a nut with a smaller force.', ['moment', 'principle of moments', 'lever', 'gears'], 'moments-balance'),
          card('🌊', 'Pressure in fluids', 'Pressure in a liquid increases with depth and density: p = h × ρ × g. This difference in pressure creates upthrust, which is why objects float. Atmospheric pressure decreases as you go higher, because there is less air above you.', ['pressure', 'upthrust', 'atmospheric pressure']),
        ],
        questions: [
          gap('q1', 'A 10 N force acts 0.5 m from a pivot. The moment is ___ N m', ['5']),
          gap('q2', 'A 20 N weight sits 1 m from the pivot. To balance it, a 40 N weight must sit ___ m away', ['0.5']),
          mcq('q3', 'Pressure in a liquid increases with…', ['Depth', 'Height above it', 'Temperature only', 'Colour'], 0),
          mcq('q4', 'Why does atmospheric pressure decrease with height?', ['There is less air above', 'It gets warmer', 'Gravity is stronger', 'The air is wetter'], 0),
          tf('q5', 'A longer spanner needs a smaller force to make the same moment.', true),
          gap('q6', 'Water: h = 2 m, ρ = 1,000 kg/m³, g = 9.8 N/kg. Pressure = ___ Pa', ['19600']),
        ],
      },
      {
        id: 'gpt-transformers',
        title: 'Static, generators & transformers',
        emoji: '🔌',
        learn: [
          card('🎈', 'Static electricity', 'Rubbing two insulators together transfers electrons. The material that gains electrons becomes negative; the one that loses them becomes positive. Like charges repel and opposite charges attract. A charged object has an electric field around it, which can cause sparks.', ['static', 'electrons', 'electric field']),
          card('🔌', 'Generators and transformers', 'Moving a wire in a magnetic field induces a potential difference: the generator effect. Alternators make AC; dynamos make DC. A transformer has two coils on an iron core: Vp ÷ Vs = np ÷ ns. Step-up transformers raise the voltage for the National Grid, so less energy is lost; step-down transformers lower it for homes.', ['generator effect', 'alternator', 'dynamo', 'transformer'], 'transformer'),
        ],
        questions: [
          mcq('q1', 'When a balloon is rubbed and becomes negative, it has…', ['Gained electrons', 'Lost electrons', 'Gained protons', 'Lost protons'], 0),
          mcq('q2', 'An alternator produces…', ['AC', 'DC', 'No current', 'Static'], 0),
          gap('q3', 'Primary 100 turns, secondary 500 turns, primary 10 V. Secondary voltage = ___ V', ['50']),
          mcq('q4', 'A step-up transformer has…', ['More turns on the secondary coil', 'Fewer turns on the secondary coil', 'No iron core', 'The same turns on both'], 0),
          mcq('q5', 'Why is electricity transmitted at a high voltage?', ['Less energy is lost', 'It is safer at home', 'It is cheaper to make', 'It travels faster'], 0),
          tf('q6', 'Opposite charges attract.', true),
        ],
      },
      {
        id: 'gpt-seismic',
        title: 'Ultrasound & seismic waves',
        emoji: '🌍',
        learn: [
          card('🔊', 'Ultrasound', 'Ultrasound is sound above 20,000 Hz. When it meets a boundary between materials, some is reflected. Timing the echoes lets us build images: scans of unborn babies, finding cracks in metal, and echo sounding to measure the depth of the sea.', ['ultrasound', 'echo sounding']),
          card('🌍', 'Seismic waves', 'Earthquakes send out P-waves (longitudinal, travel through solids and liquids) and S-waves (transverse, solids only). S-waves can’t pass through the outer core, leaving a shadow zone on the far side of the Earth. This is evidence that the outer core is liquid.', ['P-waves', 'S-waves', 'shadow zone'], 'seismic-waves'),
        ],
        questions: [
          mcq('q1', 'Ultrasound has a frequency above…', ['20,000 Hz', '20 Hz', '200 Hz', '2,000 Hz'], 0),
          mcq('q2', 'Which seismic waves are transverse?', ['S-waves', 'P-waves'], 0),
          mcq('q3', 'Which waves can travel through liquids?', ['P-waves', 'S-waves'], 0),
          mcq('q4', 'The S-wave shadow zone shows that the outer core is…', ['Liquid', 'Solid', 'Gas', 'Hollow'], 0),
          gap('q5', 'An ultrasound echo returns after 0.002 s. Sound in tissue travels at 1,500 m/s. The boundary is ___ m away', ['1.5']),
          mcq('q6', 'Measuring the depth of the sea with sound is…', ['Echo sounding', 'Radar', 'Seismology', 'X-ray imaging'], 0),
        ],
      },
    ],
  },
];
