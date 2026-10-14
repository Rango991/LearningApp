import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// AQA GCSE Combined Science: Trilogy (8464), Chemistry topics 5.1-5.10.
// These are also the core of AQA GCSE Chemistry (8462).
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE (AQA)';

export const gcseChemistry: Unit[] = [
  {
    id: 'g-chem-atoms',
    title: 'Atomic structure & the periodic table',
    stage: STAGE,
    description: 'Protons, neutrons and electrons, isotopes, how the atomic model developed, and group trends.',
    colour: '#6d4ce6',
    lessons: [
      {
        id: 'gc-atom',
        title: 'Inside the atom',
        emoji: '⚛️',
        learn: [
          card('🎯', 'Subatomic particles', 'An atom has a tiny nucleus containing protons and neutrons, surrounded by electrons in shells. Proton: charge +1, mass 1. Neutron: charge 0, mass 1. Electron: charge −1, very small mass. Atoms have no overall charge because protons and electrons are equal in number. Atoms have a radius of about 0.1 nm.', ['proton', 'neutron', 'electron', 'nucleus'], 'atom-structure'),
          card('🔢', 'Atomic and mass numbers', 'Atomic number = number of protons (which is also the number of electrons). Mass number = protons + neutrons. So neutrons = mass number − atomic number. Sodium has atomic number 11 and mass number 23, so it has 11 protons, 11 electrons and 12 neutrons.', ['atomic number', 'mass number']),
          card('🔁', 'Isotopes and shells', 'Isotopes are atoms of the same element with different numbers of neutrons. Electrons fill shells in order: 2 in the first, then up to 8 in the second and third. Sodium is 2,8,1. Elements in the same group have the same number of outer-shell electrons.', ['isotopes', 'electron configuration']),
        ],
        questions: [
          match('q1', 'Match the particle to its charge', [
            ['Proton', '+1'],
            ['Neutron', '0'],
            ['Electron', '−1'],
          ]),
          gap('q2', 'Sodium: atomic number 11, mass number 23. Number of neutrons = ___', ['12']),
          mcq('q3', 'What does the atomic number tell you?', ['Number of protons', 'Number of neutrons', 'Protons + neutrons', 'Number of shells'], 0),
          gap('q4', 'Atoms of the same element with different numbers of neutrons are ___.', ['isotopes', 'isotope']),
          mcq('q5', 'The electron configuration of sodium (11 electrons) is…', ['2,8,1', '2,9', '8,2,1', '2,8,8'], 0),
          tf('q6', 'Most of the mass of an atom is in the nucleus.', true),
          gap('q7', 'Chlorine has 17 electrons. Its configuration is 2,8,___', ['7']),
          mcq('q8', 'Why do atoms have no overall charge?', ['Equal numbers of protons and electrons', 'Neutrons cancel the charge', 'Electrons have no charge', 'The nucleus is neutral'], 0),
        ],
      },
      {
        id: 'gc-history',
        title: 'Developing the atomic model',
        emoji: '📜',
        learn: [
          card('🕰️', 'From spheres to shells', 'Early on, atoms were thought to be tiny solid spheres. Thomson discovered the electron and proposed the plum pudding model: a ball of positive charge with electrons embedded in it. Rutherford’s alpha particle scattering experiment showed that the mass is concentrated in a tiny positive nucleus: the nuclear model. Bohr suggested electrons orbit in fixed shells. Later, Chadwick discovered the neutron.', ['plum pudding', 'alpha scattering', 'nuclear model', 'Bohr', 'Chadwick'], 'atom-models'),
          card('🎱', 'The alpha scattering experiment', 'Alpha particles were fired at thin gold foil. Most went straight through (so the atom is mostly empty space). A few were deflected, and a very small number bounced back (so there is a tiny, dense, positively charged nucleus).', ['alpha particles']),
        ],
        questions: [
          order('q1', 'Put the models in order, oldest first', ['Solid sphere', 'Plum pudding', 'Nuclear model', 'Electron shells (Bohr)']),
          mcq('q2', 'In the alpha scattering experiment, why did most alpha particles pass straight through?', ['The atom is mostly empty space', 'Gold is very thin', 'Alpha particles have no mass', 'The nucleus is negative'], 0),
          mcq('q3', 'Who discovered the neutron?', ['Chadwick', 'Thomson', 'Rutherford', 'Dalton'], 0),
          tf('q4', 'The plum pudding model has a positive nucleus at the centre.', false, 'In the plum pudding model, positive charge is spread through a ball with electrons dotted in it. The nucleus came later.'),
          mcq('q5', 'What did the few bounced-back alpha particles show?', ['A tiny, dense, positive nucleus', 'Electrons are in shells', 'Neutrons exist', 'Atoms are solid'], 0),
          gap('q6', 'The scientist who discovered the electron was ___.', ['Thomson', 'JJ Thomson', 'J.J. Thomson']),
        ],
      },
      {
        id: 'gc-groups',
        title: 'Groups 1, 7 and 0',
        emoji: '🧪',
        learn: [
          card('🧨', 'Group 1: alkali metals', 'They have 1 outer electron and react with water to form a metal hydroxide and hydrogen: sodium + water → sodium hydroxide + hydrogen. Reactivity increases down the group because the outer electron is further from the nucleus, so it is lost more easily.', ['alkali metals', 'hydroxide'], 'group-trends'),
          card('🟡', 'Group 7: halogens', 'They have 7 outer electrons and exist as diatomic molecules (F₂, Cl₂, Br₂, I₂). Going down: melting and boiling points increase and reactivity decreases. A more reactive halogen displaces a less reactive one from a solution of its salt: chlorine + potassium bromide → potassium chloride + bromine.', ['halogens', 'diatomic', 'displacement']),
          card('🎈', 'Group 0: noble gases', 'They have full outer shells (helium has 2; the others have 8), so they are very unreactive. Boiling points increase down the group.', ['noble gases', 'full outer shell']),
        ],
        questions: [
          gap('q1', 'potassium + water → potassium hydroxide + ___', ['hydrogen']),
          mcq('q2', 'Why does reactivity increase down group 1?', ['The outer electron is further from the nucleus', 'Atoms get lighter', 'They gain more electrons', 'They have more protons in the outer shell'], 0),
          mcq('q3', 'Which halogen is most reactive?', ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'], 0),
          tf('q4', 'Bromine will displace chlorine from sodium chloride solution.', false, 'Bromine is less reactive than chlorine, so no reaction.'),
          mcq('q5', 'Why are noble gases unreactive?', ['They have full outer shells', 'They are gases', 'They are very heavy', 'They have no electrons'], 0),
          match('q6', 'Trend going DOWN the group', [
            ['Group 1 reactivity', 'Increases'],
            ['Group 7 reactivity', 'Decreases'],
          ]),
          gap('q7', 'Halogens exist as molecules made of ___ atoms.', ['2', 'two']),
        ],
      },
    ],
  },
  {
    id: 'g-chem-bonding',
    title: 'Bonding, structure & properties',
    stage: STAGE,
    description: 'Ionic, covalent and metallic bonding, and how structure explains properties.',
    colour: '#0e8fd6',
    lessons: [
      {
        id: 'gc-ionic',
        title: 'Ionic bonding',
        emoji: '🧂',
        learn: [
          card('🔄', 'Transferring electrons', 'Ionic bonding happens between a metal and a non-metal. The metal atom loses electrons to become a positive ion; the non-metal gains electrons to become a negative ion. Both end up with full outer shells. Sodium (2,8,1) loses 1 electron to become Na⁺; chlorine (2,8,7) gains 1 to become Cl⁻.', ['ion', 'ionic bond'], 'ionic-bond'),
          card('🧱', 'Giant ionic lattices', 'Ionic compounds form giant lattices held together by strong electrostatic forces between oppositely charged ions. So they have high melting and boiling points. They conduct electricity when melted or dissolved in water, because the ions can then move, but not when solid.', ['giant ionic lattice', 'electrostatic forces']),
        ],
        questions: [
          mcq('q1', 'Ionic bonding happens between…', ['A metal and a non-metal', 'Two non-metals', 'Two metals', 'Noble gases'], 0),
          mcq('q2', 'A sodium atom becomes a sodium ion by…', ['Losing 1 electron', 'Gaining 1 electron', 'Losing a proton', 'Sharing electrons'], 0),
          mcq('q3', 'What is the charge on a chloride ion?', ['−1', '+1', '−2', '0'], 0),
          tf('q4', 'Solid sodium chloride conducts electricity.', false, 'The ions are fixed in place. It conducts when melted or dissolved.'),
          mcq('q5', 'Why do ionic compounds have high melting points?', ['Strong electrostatic forces between ions', 'Weak forces between molecules', 'Delocalised electrons', 'They are small molecules'], 0),
          mcq('q6', 'Magnesium is in group 2. What is the charge on its ion?', ['+2', '−2', '+1', '−6'], 0),
          mcq('q7', 'Oxygen is in group 6. Its ion is…', ['O²⁻', 'O⁺', 'O²⁺', 'O⁻'], 0),
        ],
      },
      {
        id: 'gc-covalent',
        title: 'Covalent structures',
        emoji: '💎',
        learn: [
          card('🤝', 'Sharing electrons', 'A covalent bond is a shared pair of electrons between two non-metal atoms. Small molecules like H₂O, CH₄ and Cl₂ have strong covalent bonds but weak intermolecular forces, so they have low melting and boiling points (often gases or liquids) and don’t conduct electricity.', ['covalent bond', 'intermolecular forces']),
          card('💎', 'Giant covalent structures', 'Diamond: each carbon makes 4 covalent bonds, so it is very hard with a very high melting point, and doesn’t conduct. Graphite: each carbon makes 3 bonds in layers; layers slide (soft, slippery) and it has delocalised electrons, so it conducts. Graphene is a single layer of graphite. Silicon dioxide is also giant covalent. Fullerenes like C₆₀ are hollow cages; nanotubes are cylinders.', ['diamond', 'graphite', 'graphene', 'fullerenes'], 'carbon-structures'),
        ],
        questions: [
          gap('q1', 'A covalent bond is a shared ___ of electrons.', ['pair']),
          mcq('q2', 'Why does water have a low boiling point?', ['Weak intermolecular forces', 'Weak covalent bonds', 'It has ions', 'It is a giant structure'], 0),
          match('q3', 'Match the form of carbon to its property', [
            ['Diamond', 'Very hard, doesn’t conduct'],
            ['Graphite', 'Soft and conducts'],
            ['Graphene', 'A single layer of graphite'],
          ]),
          mcq('q4', 'Why does graphite conduct electricity?', ['It has delocalised electrons', 'It has ions', 'It is a metal', 'Its layers slide'], 0),
          gap('q5', 'In diamond, each carbon atom forms ___ covalent bonds.', ['4', 'four']),
          tf('q6', 'Small covalent molecules conduct electricity.', false),
          mcq('q7', 'C₆₀ is an example of a…', ['Fullerene', 'Giant ionic lattice', 'Metal', 'Alloy'], 0),
        ],
      },
      {
        id: 'gc-metallic',
        title: 'Metals, alloys & states',
        emoji: '🔩',
        learn: [
          card('🌊', 'Metallic bonding', 'Metals are giant structures of positive ions in a “sea” of delocalised electrons. The strong attraction gives high melting points. The delocalised electrons carry charge and heat, so metals conduct well. Layers of ions can slide over each other, so pure metals can be bent and shaped.', ['metallic bonding', 'delocalised electrons'], 'metallic-bonding'),
          card('🪙', 'Alloys', 'An alloy is a mixture of a metal with other elements. The different-sized atoms distort the layers so they can’t slide as easily, making alloys harder than pure metals. Steel is iron with carbon.', ['alloy']),
          card('🔣', 'State symbols', 'In equations, (s) means solid, (l) liquid, (g) gas and (aq) aqueous: dissolved in water.', ['state symbols', 'aqueous']),
        ],
        questions: [
          mcq('q1', 'Why do metals conduct electricity?', ['Delocalised electrons can move', 'They contain ions that move', 'They are shiny', 'Their atoms are small'], 0),
          mcq('q2', 'Why are alloys harder than pure metals?', ['Different-sized atoms stop layers sliding', 'They have no electrons', 'They are giant covalent', 'They are cooled faster'], 0),
          match('q3', 'Match the state symbol', [
            ['(s)', 'Solid'],
            ['(l)', 'Liquid'],
            ['(g)', 'Gas'],
            ['(aq)', 'Dissolved in water'],
          ]),
          gap('q4', 'Steel is an alloy of iron and ___.', ['carbon']),
          tf('q5', 'Pure metals can be bent because layers of atoms slide over each other.', true),
          mcq('q6', 'What does “aqueous” mean?', ['Dissolved in water', 'A liquid metal', 'A gas', 'Frozen'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-chem-quant',
    title: 'Quantitative chemistry',
    stage: STAGE,
    description: 'Balancing equations, relative formula mass, moles and concentration.',
    colour: '#d4533b',
    lessons: [
      {
        id: 'gc-mr',
        title: 'Equations & relative formula mass',
        emoji: '⚖️',
        learn: [
          card('⚖️', 'Balancing equations', 'Mass is conserved, so a balanced equation has the same number of each type of atom on both sides. Only change the big numbers in front, never the small ones. Example: 2H₂ + O₂ → 2H₂O. Methane burning: CH₄ + 2O₂ → CO₂ + 2H₂O.', ['balanced equation']),
          card('🧮', 'Relative formula mass (Mr)', 'Add up the relative atomic masses (Ar) of all the atoms in the formula. H = 1, C = 12, O = 16, Na = 23, Mg = 24, S = 32, Ca = 40. H₂O: 1 + 1 + 16 = 18. CO₂: 12 + 16 + 16 = 44. CaCO₃: 40 + 12 + 48 = 100.', ['relative formula mass', 'Mr', 'Ar'], 'mr-calc'),
        ],
        questions: [
          gap('q1', 'Mr of H₂O = ___', ['18']),
          gap('q2', 'Mr of CO₂ = ___', ['44']),
          gap('q3', 'Mr of CaCO₃ = ___', ['100']),
          gap('q4', 'Mr of MgO = ___', ['40']),
          gap('q5', 'Balance it: 2Mg + O₂ → ___MgO', ['2']),
          gap('q6', 'Balance it: CH₄ + ___O₂ → CO₂ + 2H₂O', ['2']),
          tf('q7', 'To balance an equation you can change the small numbers in a formula.', false, 'That would change the substance. Only change the big numbers in front.'),
          gap('q8', 'Mr of H₂SO₄ = ___', ['98']),
        ],
      },
      {
        id: 'gc-moles',
        title: 'Moles & concentration',
        emoji: '🧮',
        learn: [
          card('🔢', 'The mole', 'A mole of any substance contains 6.02 × 10²³ particles (the Avogadro constant). The mass of one mole is its Mr in grams. Moles = mass ÷ Mr. So 36 g of water (Mr 18) is 2 moles.', ['mole', 'Avogadro constant'], 'moles-triangle'),
          card('🧴', 'Concentration', 'Concentration in g/dm³ = mass of solute (g) ÷ volume (dm³). 1 dm³ = 1,000 cm³, so 250 cm³ = 0.25 dm³. 10 g dissolved in 0.5 dm³ has a concentration of 20 g/dm³.', ['concentration', 'dm³']),
          card('🎚️', 'Limiting reactants', 'In a reaction, the reactant that is used up first is the limiting reactant; it limits how much product forms. The other reactant is in excess.', ['limiting reactant', 'excess']),
        ],
        questions: [
          gap('q1', 'Moles in 36 g of water (Mr 18) = ___', ['2']),
          gap('q2', 'Moles in 4.4 g of CO₂ (Mr 44) = ___', ['0.1']),
          gap('q3', 'Mass of 3 moles of MgO (Mr 40) = ___ g', ['120']),
          gap('q4', '250 cm³ = ___ dm³', ['0.25']),
          gap('q5', '20 g dissolved in 0.5 dm³. Concentration = ___ g/dm³', ['40']),
          mcq('q6', 'One mole contains how many particles?', ['6.02 × 10²³', '6.02 × 10²³ grams', '1,000', '12'], 0),
          mcq('q7', 'The reactant that is used up first is the…', ['Limiting reactant', 'Excess reactant', 'Catalyst', 'Product'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-chem-changes',
    title: 'Chemical changes',
    stage: STAGE,
    description: 'Reactivity, oxidation and reduction, acids and making salts, and electrolysis.',
    colour: '#e0890b',
    lessons: [
      {
        id: 'gc-redox',
        title: 'Reactivity & extraction',
        emoji: '⛏️',
        learn: [
          card('🏁', 'Reactivity series', 'Metals react to form positive ions. The more easily a metal forms ions, the more reactive it is. Order: potassium, sodium, lithium, calcium, magnesium, (carbon), zinc, iron, (hydrogen), copper. A more reactive metal displaces a less reactive one from its compounds.', ['reactivity series', 'displacement'], 'reactivity'),
          card('🔥', 'Oxidation and reduction', 'Oxidation is gain of oxygen; reduction is loss of oxygen. Metals less reactive than carbon are extracted by reduction with carbon: iron oxide + carbon → iron + carbon dioxide (the iron oxide is reduced). In terms of electrons (OIL RIG): Oxidation Is Loss, Reduction Is Gain of electrons.', ['oxidation', 'reduction', 'OIL RIG']),
        ],
        questions: [
          mcq('q1', 'Which metal is most reactive?', ['Potassium', 'Magnesium', 'Iron', 'Copper'], 0),
          mcq('q2', 'In iron oxide + carbon → iron + carbon dioxide, which is reduced?', ['Iron oxide', 'Carbon', 'Iron', 'Carbon dioxide'], 0),
          gap('q3', 'OIL RIG: Oxidation Is ___ of electrons.', ['loss']),
          tf('q4', 'Copper can be extracted by heating its oxide with carbon.', true, 'Copper is less reactive than carbon.'),
          mcq('q5', 'Magnesium + copper sulfate → ?', ['Magnesium sulfate + copper', 'No reaction', 'Copper oxide + magnesium', 'Magnesium oxide + sulfur'], 0),
          match('q6', 'Oxidation or reduction?', [
            ['Gain of oxygen', 'Oxidation'],
            ['Gain of electrons', 'Reduction'],
          ]),
        ],
      },
      {
        id: 'gc-acids',
        title: 'Acids & making salts',
        emoji: '🧪',
        learn: [
          card('⚗️', 'Acid reactions', 'Acids react with metals (→ salt + hydrogen), metal oxides and hydroxides (→ salt + water), and carbonates (→ salt + water + carbon dioxide). Hydrochloric acid makes chlorides, sulfuric acid makes sulfates, nitric acid makes nitrates.', ['salt']),
          card('🧂', 'Making a soluble salt', 'Add an insoluble base (e.g. copper oxide) to warm acid until no more dissolves (excess). Filter off the excess solid. Heat the solution to evaporate some water, then leave it to crystallise. Copper oxide + sulfuric acid → copper sulfate + water.', ['crystallise', 'excess'], 'making-salts'),
          card('🔬', 'Ions and strength', 'Acids produce H⁺ ions in water; alkalis produce OH⁻ ions. Neutralisation: H⁺ + OH⁻ → H₂O. Strong acids (hydrochloric, nitric, sulfuric) fully ionise; weak acids (ethanoic, citric, carbonic) only partly ionise. Each fall of 1 pH unit means 10× more H⁺ ions.', ['H⁺', 'OH⁻', 'strong acid', 'weak acid']),
        ],
        questions: [
          gap('q1', 'acid + metal carbonate → salt + water + ___', ['carbon dioxide', 'CO2', 'CO₂']),
          mcq('q2', 'Zinc + hydrochloric acid → ?', ['Zinc chloride + hydrogen', 'Zinc sulfate + water', 'Zinc oxide + chlorine', 'Zinc chloride + water'], 0),
          order('q3', 'Put the steps for making copper sulfate in order', ['Add copper oxide to warm acid until in excess', 'Filter off the excess solid', 'Heat to evaporate some water', 'Leave to crystallise']),
          mcq('q4', 'Why is the copper oxide added in excess?', ['To make sure all the acid reacts', 'To make it faster', 'To make it colourful', 'To lower the pH'], 0),
          gap('q5', 'Acids produce ___ ions in water.', ['H+', 'H⁺', 'hydrogen']),
          mcq('q6', 'Which is a weak acid?', ['Ethanoic acid', 'Hydrochloric acid', 'Sulfuric acid', 'Nitric acid'], 0),
          mcq('q7', 'pH 3 to pH 2: the H⁺ concentration becomes…', ['10 times greater', '2 times greater', '10 times smaller', 'The same'], 0),
        ],
      },
      {
        id: 'gc-electrolysis',
        title: 'Electrolysis',
        emoji: '🔌',
        learn: [
          card('⚡', 'How it works', 'Electrolysis splits an ionic compound using electricity. The compound must be molten or dissolved so ions can move. Positive ions move to the negative electrode (cathode); negative ions move to the positive electrode (anode). Molten lead bromide → lead at the cathode, bromine at the anode.', ['electrolysis', 'cathode', 'anode', 'electrolyte'], 'electrolysis'),
          card('💧', 'Solutions in water', 'In aqueous solutions, at the cathode hydrogen is produced if the metal is more reactive than hydrogen. At the anode, oxygen is produced unless the solution contains halide ions, in which case the halogen is produced. Brine (sodium chloride solution) gives hydrogen, chlorine and sodium hydroxide.', ['brine']),
          card('🥫', 'Extracting aluminium', 'Aluminium is extracted by electrolysis of aluminium oxide dissolved in molten cryolite, which lowers the melting point and saves energy. Aluminium forms at the cathode; oxygen forms at the carbon anode, which reacts to make CO₂, so the anodes must be replaced.', ['cryolite']),
        ],
        questions: [
          mcq('q1', 'Why must an ionic compound be molten or dissolved for electrolysis?', ['So the ions can move', 'So it is hot', 'So electrons can flow through it', 'To make it a metal'], 0),
          match('q2', 'Where do the ions go?', [
            ['Positive ions', 'Cathode (−)'],
            ['Negative ions', 'Anode (+)'],
          ]),
          mcq('q3', 'Molten lead bromide: what forms at the cathode?', ['Lead', 'Bromine', 'Hydrogen', 'Oxygen'], 0),
          mcq('q4', 'Electrolysis of brine produces…', ['Hydrogen, chlorine and sodium hydroxide', 'Sodium and chlorine only', 'Oxygen and sodium', 'Water and salt'], 0),
          gap('q5', 'Aluminium oxide is dissolved in molten ___ to lower its melting point.', ['cryolite']),
          tf('q6', 'The carbon anodes in aluminium extraction must be replaced because they react with oxygen.', true),
          mcq('q7', 'Copper sulfate solution: what forms at the cathode?', ['Copper', 'Hydrogen', 'Oxygen', 'Sulfur'], 0, 'Copper is less reactive than hydrogen, so copper is deposited.'),
        ],
      },
    ],
  },
  {
    id: 'g-chem-energy',
    title: 'Energy changes',
    stage: STAGE,
    description: 'Exothermic and endothermic reactions, reaction profiles and bond energies.',
    colour: '#c2410c',
    lessons: [
      {
        id: 'gc-profiles',
        title: 'Reaction profiles',
        emoji: '📉',
        learn: [
          card('🌡️', 'Exo and endo', 'Exothermic reactions transfer energy to the surroundings (temperature rises): combustion, neutralisation, most oxidation; used in hand warmers and self-heating cans. Endothermic reactions take energy in (temperature falls): thermal decomposition, citric acid + sodium hydrogencarbonate; used in sports injury packs.', ['exothermic', 'endothermic']),
          card('⛰️', 'Reaction profiles', 'A reaction profile shows the energy of reactants and products. In an exothermic reaction the products are lower in energy than the reactants. Activation energy is the minimum energy particles need to react: the “hill” on the profile.', ['reaction profile', 'activation energy'], 'reaction-profile'),
        ],
        questions: [
          mcq('q1', 'On an exothermic reaction profile, the products are…', ['Lower than the reactants', 'Higher than the reactants', 'At the same level', 'At the top of the hill'], 0),
          gap('q2', 'The minimum energy particles need to react is the ___ energy.', ['activation']),
          match('q3', 'Exo or endo?', [
            ['Combustion', 'Exothermic'],
            ['Thermal decomposition', 'Endothermic'],
          ]),
          mcq('q4', 'A sports injury pack gets cold. The reaction is…', ['Endothermic', 'Exothermic'], 0),
          tf('q5', 'Neutralisation reactions are exothermic.', true),
          mcq('q6', 'Which is used in a hand warmer?', ['An exothermic reaction', 'An endothermic reaction', 'Electrolysis', 'Distillation'], 0),
        ],
      },
      {
        id: 'gc-bonds',
        title: 'Bond energies',
        emoji: '🔗',
        learn: [
          card('🔨', 'Breaking and making', 'Breaking bonds takes in energy (endothermic). Making bonds releases energy (exothermic). If more energy is released making new bonds than is used breaking old ones, the reaction is exothermic overall.', ['bond energy']),
          card('🧮', 'Calculating it', 'Overall energy change = energy to break bonds − energy released making bonds. A negative answer means exothermic; positive means endothermic. If breaking takes 2,000 kJ and making releases 2,500 kJ, the change is −500 kJ: exothermic.', ['energy change'], 'bond-energy'),
        ],
        questions: [
          mcq('q1', 'Breaking bonds is…', ['Endothermic', 'Exothermic'], 0),
          gap('q2', 'Breaking bonds: 1,000 kJ. Making bonds: 1,400 kJ. Overall energy change = ___ kJ', ['-400'], 'Break − make = 1,000 − 1,400 = −400 kJ (exothermic).'),
          mcq('q3', 'A negative overall energy change means the reaction is…', ['Exothermic', 'Endothermic'], 0),
          gap('q4', 'Breaking bonds: 800 kJ. Making bonds: 600 kJ. Overall energy change = ___ kJ', ['200'], '800 − 600 = +200 kJ (endothermic).'),
          tf('q5', 'Making bonds releases energy.', true),
          mcq('q6', 'A reaction is exothermic when…', ['More energy is released making bonds than is used breaking them', 'More energy is used breaking bonds', 'No bonds are broken', 'It needs heating'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-chem-rates',
    title: 'Rates & equilibrium',
    stage: STAGE,
    description: 'Measuring rates, collision theory, catalysts, reversible reactions and equilibrium.',
    colour: '#0f8b8d',
    lessons: [
      {
        id: 'gc-rates',
        title: 'Rates of reaction',
        emoji: '⏱️',
        learn: [
          card('📈', 'Measuring rate', 'Mean rate = quantity of reactant used or product formed ÷ time. You can measure gas given off (gas syringe), mass lost (balance) or how long a solution takes to go cloudy. On a graph, a steeper line means a faster rate; the line levels off when the reaction stops.', ['rate of reaction'], 'rate-graph'),
          card('🎛️', 'Factors that speed it up', 'Higher concentration (or gas pressure), larger surface area (smaller pieces), higher temperature, and adding a catalyst all increase the rate.', ['concentration', 'surface area', 'catalyst']),
        ],
        questions: [
          gap('q1', '60 cm³ of gas in 30 s. Mean rate = ___ cm³/s', ['2']),
          mcq('q2', 'Which increases the rate of reaction?', ['Using powder instead of lumps', 'Cooling the mixture', 'Diluting the acid', 'Using bigger lumps'], 0),
          mcq('q3', 'On a graph of gas produced against time, a steeper line means…', ['A faster reaction', 'A slower reaction', 'The reaction has stopped', 'More reactant'], 0),
          tf('q4', 'A catalyst is used up in the reaction.', false),
          mcq('q5', 'Why does the line on a rate graph eventually go flat?', ['A reactant has been used up', 'The catalyst stops working', 'The gas escapes', 'It gets too hot'], 0),
          gap('q6', 'Gas volume can be measured with a gas ___.', ['syringe']),
        ],
      },
      {
        id: 'gc-collisions',
        title: 'Collision theory & catalysts',
        emoji: '💥',
        learn: [
          card('💥', 'Collision theory', 'Reactions happen when particles collide with enough energy (at least the activation energy). Higher concentration, pressure or surface area increase the frequency of collisions. Higher temperature makes particles move faster, so they collide more often AND with more energy.', ['collision theory', 'frequency'], 'collisions'),
          card('🛤️', 'Catalysts', 'A catalyst speeds up a reaction without being used up. It provides a different reaction pathway with a lower activation energy. Enzymes are biological catalysts.', ['catalyst', 'activation energy']),
        ],
        questions: [
          mcq('q1', 'For particles to react they must collide…', ['With enough energy', 'Slowly', 'With a catalyst', 'In a gas'], 0),
          mcq('q2', 'How does increasing temperature increase rate?', ['Particles collide more often and with more energy', 'Particles get bigger', 'It lowers the activation energy', 'It adds more particles'], 0),
          mcq('q3', 'How does a catalyst work?', ['Provides a pathway with lower activation energy', 'Gives particles more energy', 'Increases concentration', 'Makes more product'], 0),
          tf('q4', 'Increasing surface area increases the frequency of collisions.', true),
          gap('q5', 'Biological catalysts are called ___.', ['enzymes', 'enzyme']),
          tf('q6', 'A catalyst increases the energy of the particles.', false, 'It lowers the activation energy instead.'),
        ],
      },
      {
        id: 'gc-equilibrium',
        title: 'Reversible reactions',
        emoji: '⇄',
        learn: [
          card('🔄', 'Reversible reactions', 'Some reactions can go both ways (⇌). Heating blue hydrated copper sulfate makes white anhydrous copper sulfate and water (endothermic); adding water turns it blue again (exothermic): the same amount of energy is transferred each way. Ammonium chloride ⇌ ammonia + hydrogen chloride.', ['reversible', '⇌'], 'copper-sulfate'),
          card('⚖️', 'Equilibrium', 'In a closed system, a reversible reaction reaches equilibrium when the forward and reverse reactions happen at exactly the same rate. If conditions change, the equilibrium shifts to counteract the change (Le Chatelier). Raising the temperature favours the endothermic direction; raising the pressure favours the side with fewer gas molecules.', ['equilibrium', 'closed system', 'Le Chatelier']),
        ],
        questions: [
          mcq('q1', 'Which symbol shows a reversible reaction?', ['⇌', '→', '=', '+'], 0),
          mcq('q2', 'What colour is anhydrous copper sulfate?', ['White', 'Blue', 'Green', 'Black'], 0),
          mcq('q3', 'At equilibrium…', ['Forward and reverse rates are equal', 'The reaction has stopped', 'Only products remain', 'There are no reactants'], 0),
          tf('q4', 'Equilibrium can only be reached in a closed system.', true),
          mcq('q5', 'Raising the temperature favours the…', ['Endothermic direction', 'Exothermic direction', 'Neither'], 0),
          mcq('q6', 'N₂ + 3H₂ ⇌ 2NH₃. Increasing pressure shifts the equilibrium…', ['To the right (fewer gas molecules)', 'To the left', 'Nowhere'], 0, '4 gas molecules on the left, 2 on the right.'),
        ],
      },
    ],
  },
  {
    id: 'g-chem-organic',
    title: 'Organic chemistry',
    stage: STAGE,
    description: 'Crude oil, alkanes, fractional distillation, cracking and alkenes.',
    colour: '#3d3d3d',
    lessons: [
      {
        id: 'gc-crude',
        title: 'Crude oil & fractions',
        emoji: '🛢️',
        learn: [
          card('🛢️', 'Crude oil and alkanes', 'Crude oil is a finite resource formed from the remains of ancient biomass, mainly plankton, buried in mud. It is a mixture of hydrocarbons, mostly alkanes. Alkanes have the general formula CₙH₂ₙ₊₂: methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀. They are saturated (only single bonds).', ['hydrocarbon', 'alkanes', 'CₙH₂ₙ₊₂']),
          card('🏭', 'Fractional distillation', 'Crude oil is heated until it evaporates. The vapour rises up a column that is hot at the bottom and cooler at the top. Each fraction condenses at a different height depending on its boiling point. Fractions include LPG, petrol, kerosene, diesel, heavy fuel oil and bitumen.', ['fractional distillation', 'fractions'], 'fractionating'),
          card('🔥', 'Chain length matters', 'Shorter hydrocarbon chains have lower boiling points, are less viscous (runnier) and more flammable. Complete combustion of a hydrocarbon gives carbon dioxide and water.', ['viscosity', 'flammability']),
        ],
        questions: [
          gap('q1', 'The general formula of the alkanes is ___', ['CnH2n+2', 'CₙH₂ₙ₊₂']),
          gap('q2', 'Propane has 3 carbons. Its formula is C₃H___', ['8']),
          mcq('q3', 'In the fractionating column, where do short-chain hydrocarbons condense?', ['Near the top', 'Near the bottom', 'In the middle', 'They don’t condense'], 0),
          match('q4', 'Short or long chains?', [
            ['Low boiling point, very flammable', 'Short chains'],
            ['Thick and viscous', 'Long chains'],
          ]),
          tf('q5', 'Crude oil is a renewable resource.', false),
          mcq('q6', 'Complete combustion of a hydrocarbon produces…', ['Carbon dioxide and water', 'Carbon monoxide and water', 'Hydrogen and oxygen', 'Carbon and steam'], 0),
          gap('q7', 'Crude oil formed mainly from ancient ___ buried in mud.', ['plankton']),
        ],
      },
      {
        id: 'gc-cracking',
        title: 'Cracking & alkenes',
        emoji: '✂️',
        learn: [
          card('✂️', 'Cracking', 'Cracking breaks long, less useful hydrocarbons into shorter, more useful ones (like petrol) and alkenes. Catalytic cracking uses heat and a catalyst; steam cracking uses a high temperature with steam. Example: decane → octane + ethene.', ['cracking']),
          card('🟠', 'Alkenes', 'Alkenes contain a carbon–carbon double bond (C=C), so they are unsaturated and more reactive than alkanes. They are used to make polymers. Test: bromine water turns from orange to colourless with an alkene; with an alkane it stays orange.', ['alkenes', 'unsaturated', 'bromine water'], 'bromine-test'),
        ],
        questions: [
          mcq('q1', 'Why is cracking useful?', ['Turns long chains into more useful shorter ones', 'Makes crude oil', 'Removes sulfur', 'Makes alkanes longer'], 0),
          mcq('q2', 'Bromine water + an alkene goes…', ['Orange to colourless', 'Colourless to orange', 'Blue to white', 'Stays orange'], 0),
          tf('q3', 'Alkenes contain a C=C double bond.', true),
          gap('q4', 'Alkenes are used to make ___.', ['polymers', 'plastics', 'polymer']),
          mcq('q5', 'Which conditions are used in catalytic cracking?', ['Heat and a catalyst', 'Cold and pressure', 'Water only', 'Light'], 0),
          gap('q6', 'decane (C₁₀H₂₂) → octane (C₈H₁₈) + ethene (C₂H___)', ['4']),
        ],
      },
    ],
  },
  {
    id: 'g-chem-analysis',
    title: 'Chemical analysis',
    stage: STAGE,
    description: 'Purity, formulations, chromatography and Rf values, and tests for gases.',
    colour: '#a14fd0',
    lessons: [
      {
        id: 'gc-purity',
        title: 'Purity & chromatography',
        emoji: '🧫',
        learn: [
          card('💯', 'Pure substances and formulations', 'In chemistry a pure substance is a single element or compound. It melts and boils at exact temperatures; impurities lower the melting point and widen its range. A formulation is a mixture designed as a useful product, like paint, medicines, fuels or alloys.', ['pure substance', 'formulation']),
          card('📏', 'Rf values', 'In chromatography there is a stationary phase (the paper) and a mobile phase (the solvent). Rf = distance moved by the substance ÷ distance moved by the solvent. Rf is always between 0 and 1, and can identify a substance. A pure compound gives one spot in every solvent.', ['Rf', 'stationary phase', 'mobile phase'], 'rf-calc'),
        ],
        questions: [
          gap('q1', 'A spot moves 3 cm and the solvent moves 6 cm. Rf = ___', ['0.5']),
          gap('q2', 'A spot moves 2 cm and the solvent moves 8 cm. Rf = ___', ['0.25']),
          mcq('q3', 'In paper chromatography, the paper is the…', ['Stationary phase', 'Mobile phase', 'Solvent front', 'Solute'], 0),
          tf('q4', 'An Rf value can be greater than 1.', false),
          mcq('q5', 'What does an impurity do to a melting point?', ['Lowers it and widens the range', 'Raises it', 'Has no effect', 'Makes it exact'], 0),
          mcq('q6', 'Which is a formulation?', ['Paint', 'Pure water', 'Oxygen gas', 'Gold'], 0),
        ],
      },
      {
        id: 'gc-gas-tests',
        title: 'Tests for gases',
        emoji: '🔥',
        learn: [
          card('🧪', 'Four gas tests', 'Hydrogen: a burning splint makes a squeaky pop. Oxygen: relights a glowing splint. Carbon dioxide: turns limewater milky (cloudy). Chlorine: bleaches damp litmus paper white.', ['squeaky pop', 'glowing splint', 'limewater', 'damp litmus'], 'gas-tests-4'),
        ],
        questions: [
          match('q1', 'Match the gas to its test', [
            ['Hydrogen', 'Squeaky pop'],
            ['Oxygen', 'Relights a glowing splint'],
            ['Carbon dioxide', 'Limewater goes milky'],
            ['Chlorine', 'Bleaches damp litmus paper'],
          ]),
          mcq('q2', 'A gas relights a glowing splint. It is…', ['Oxygen', 'Hydrogen', 'Chlorine', 'Carbon dioxide'], 0),
          mcq('q3', 'A gas turns limewater milky. It is…', ['Carbon dioxide', 'Oxygen', 'Hydrogen', 'Nitrogen'], 0),
          tf('q4', 'Chlorine bleaches damp litmus paper.', true),
          gap('q5', 'Hydrogen burns with a squeaky ___.', ['pop']),
          mcq('q6', 'A gas bleaches damp litmus paper. It is…', ['Chlorine', 'Oxygen', 'Hydrogen', 'Carbon dioxide'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-chem-atmosphere',
    title: 'Chemistry of the atmosphere',
    stage: STAGE,
    description: 'How the atmosphere evolved, greenhouse gases, climate change and air pollution.',
    colour: '#2b8fd6',
    lessons: [
      {
        id: 'gc-early-atmos',
        title: 'The evolving atmosphere',
        emoji: '🌋',
        learn: [
          card('🌋', 'Early atmosphere', 'Billions of years ago, intense volcanic activity released gases that formed the early atmosphere: mainly carbon dioxide, with little or no oxygen, plus water vapour and nitrogen. As Earth cooled, water vapour condensed to form the oceans, and lots of carbon dioxide dissolved in them.', ['early atmosphere', 'volcanic activity'], 'atmosphere-history'),
          card('🌿', 'Oxygen arrives', 'Algae and later plants produced oxygen by photosynthesis, gradually increasing it until animals could evolve. Carbon dioxide decreased as it was used in photosynthesis and locked up in sedimentary rocks (limestone) and fossil fuels. Today the air is about four-fifths nitrogen and one-fifth oxygen.', ['photosynthesis', 'sedimentary rocks']),
        ],
        questions: [
          mcq('q1', 'The early atmosphere was mainly…', ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Argon'], 0),
          mcq('q2', 'Where did the oxygen in the atmosphere come from?', ['Photosynthesis by algae and plants', 'Volcanoes', 'The oceans', 'Meteorites'], 0),
          tf('q3', 'The oceans formed when water vapour condensed.', true),
          mcq('q4', 'Which helped remove CO₂ from the early atmosphere?', ['Forming sedimentary rocks and fossil fuels', 'Volcanoes', 'Combustion', 'Respiration'], 0),
          gap('q5', 'Today, about four-fifths of the air is ___.', ['nitrogen']),
          mcq('q6', 'What did early volcanic activity mostly release?', ['Carbon dioxide and water vapour', 'Oxygen', 'Methane only', 'Argon'], 0),
        ],
      },
      {
        id: 'gc-climate',
        title: 'Climate change & pollution',
        emoji: '🏭',
        learn: [
          card('🌡️', 'Greenhouse gases', 'Water vapour, carbon dioxide and methane trap heat, keeping Earth warm enough for life. Human activities add more: burning fossil fuels and deforestation (CO₂), cattle farming and landfill (methane). This is causing global climate change: rising sea levels, extreme weather, and changes to habitats and food production. A carbon footprint is the total greenhouse gases emitted over the life of a product, service or event.', ['greenhouse gases', 'carbon footprint']),
          card('😷', 'Pollutants from fuels', 'Carbon monoxide (from incomplete combustion) is toxic and colourless. Sulfur dioxide and nitrogen oxides cause respiratory problems and acid rain. Particulates (soot) cause global dimming and lung damage.', ['carbon monoxide', 'sulfur dioxide', 'acid rain', 'particulates'], 'pollutants'),
        ],
        questions: [
          mcq('q1', 'Which is a greenhouse gas?', ['Methane', 'Nitrogen', 'Oxygen', 'Argon'], 0),
          match('q2', 'Match the pollutant to its effect', [
            ['Carbon monoxide', 'Toxic, colourless'],
            ['Sulfur dioxide', 'Acid rain'],
            ['Particulates', 'Global dimming'],
          ]),
          mcq('q3', 'Which human activity releases methane?', ['Cattle farming', 'Wind power', 'Planting trees', 'Solar panels'], 0),
          gap('q4', 'Carbon monoxide comes from ___ combustion.', ['incomplete']),
          tf('q5', 'A carbon footprint counts greenhouse gases over a product’s whole life.', true),
          mcq('q6', 'Which is an effect of climate change?', ['Rising sea levels', 'More ozone', 'Less rainfall everywhere', 'Shorter days'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-chem-resources',
    title: 'Using resources',
    stage: STAGE,
    description: 'Safe drinking water, treating waste water, life cycle assessments and recycling.',
    colour: '#3c9d2f',
    lessons: [
      {
        id: 'gc-water',
        title: 'Potable water',
        emoji: '🚰',
        learn: [
          card('🚰', 'Making water safe', 'Potable water is safe to drink (not pure: it contains dissolved substances). In the UK, rainwater from lakes, rivers or underground is filtered (wire mesh, sand beds) and sterilised with chlorine, ozone or ultraviolet light.', ['potable', 'sterilise'], 'water-treatment'),
          card('🌊', 'Desalination and waste water', 'Where fresh water is scarce, sea water is desalinated by distillation or reverse osmosis, both of which need lots of energy. Sewage is treated by screening, sedimentation (producing sludge and effluent), anaerobic digestion of sludge, and aerobic biological treatment of effluent.', ['desalination', 'reverse osmosis', 'sedimentation']),
        ],
        questions: [
          tf('q1', 'Potable water is pure water.', false, 'It is safe to drink, but contains dissolved substances.'),
          order('q2', 'Put the stages of treating fresh water in order', ['Choose a water source', 'Filter through mesh and sand', 'Sterilise']),
          mcq('q3', 'Which is used to sterilise water?', ['Chlorine', 'Sand', 'Salt', 'Carbon dioxide'], 0),
          gap('q4', 'Making drinking water from sea water is called ___.', ['desalination']),
          mcq('q5', 'Why is desalination expensive?', ['It needs a lot of energy', 'Sea water is rare', 'It uses rare metals', 'It is very slow to build'], 0),
          mcq('q6', 'In sewage treatment, sludge is broken down by…', ['Anaerobic digestion', 'Chlorine', 'Distillation', 'Burning'], 0),
        ],
      },
      {
        id: 'gc-lca',
        title: 'Life cycle assessment',
        emoji: '♻️',
        learn: [
          card('🔁', 'Life cycle assessment', 'A life cycle assessment (LCA) looks at the environmental impact of a product at each stage: extracting and processing raw materials, manufacturing and packaging, use, and disposal at the end of its life. Some values, like pollution effects, are hard to measure, so LCAs can be biased.', ['life cycle assessment'], 'lca'),
          card('♻️', 'Reduce, reuse, recycle', 'Reducing use, reusing and recycling materials saves energy and limited resources and reduces waste. Glass bottles can be reused or melted to make new glass; metals can be melted and recast. New ways to extract copper from low-grade ores include phytomining (plants) and bioleaching (bacteria).', ['recycle', 'phytomining', 'bioleaching']),
        ],
        questions: [
          order('q1', 'Put the stages of a life cycle assessment in order', ['Extracting raw materials', 'Manufacturing and packaging', 'Using the product', 'Disposal']),
          mcq('q2', 'Why can LCAs be biased?', ['Some effects are hard to measure', 'They are always too short', 'They ignore raw materials', 'They only use one material'], 0),
          tf('q3', 'Recycling metals usually uses less energy than extracting new metal.', true),
          match('q4', 'Match the method to how it extracts copper', [
            ['Phytomining', 'Uses plants'],
            ['Bioleaching', 'Uses bacteria'],
          ]),
          mcq('q5', 'Which is the best for the environment, in order of preference?', ['Reduce, reuse, recycle', 'Recycle, reuse, reduce', 'Landfill, recycle, reuse', 'Burn, bury, recycle'], 0),
          gap('q6', 'Using bacteria to extract metals from low-grade ores is ___.', ['bioleaching']),
        ],
      },
    ],
  },
];
