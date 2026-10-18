import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// More KS3 Chemistry for Years 8-9 (National Curriculum), filling gaps found by
// checking the app against Gosforth East Middle School's Year 7-8 science plans.
// Question ids are stored in progress data, so never change an existing id.

const Y89 = 'Years 8–9';

export const chemistryY89: Unit[] = [
  {
    id: 'chem-atoms-rates',
    title: 'Atoms, displacement & rates',
    stage: Y89,
    description: 'How the model of the atom developed, displacement reactions and oxides, and what makes reactions faster.',
    colour: '#6d5bd0',
    lessons: [
      {
        id: 'ca-atoms',
        title: 'Inside the atom',
        emoji: '⚛️',
        learn: [
          card('🎱', 'Dalton’s atoms', 'In 1803 John Dalton said everything is made of tiny atoms that can’t be split. Atoms of the same element are identical, different elements have different atoms, and in reactions atoms are rearranged, not made or destroyed. He pictured atoms as tiny solid balls.', ['Dalton', 'atomic model'], 'atom-models'),
          card('🔬', 'Better models', 'New evidence changed the model. In 1897 J.J. Thomson discovered electrons and suggested the “plum pudding” model: negative electrons dotted through a ball of positive charge. In 1911 Ernest Rutherford’s team fired tiny particles at gold foil and found that atoms are mostly empty space, with a tiny, dense nucleus in the middle.', ['electron', 'nucleus', 'plum pudding']),
          card('⚛️', 'Protons, neutrons and electrons', 'The nucleus contains protons (positive) and neutrons (no charge). Electrons (negative, and much lighter) move around the nucleus in shells. An atom has equal numbers of protons and electrons, so overall it has no charge. The number of protons, the atomic number, decides which element it is.', ['proton', 'neutron', 'electron', 'atomic number'], 'atom-structure'),
        ],
        questions: [
          order('q1', 'Put the models of the atom in the order they were suggested', ['Dalton’s solid balls', 'Thomson’s plum pudding', 'Rutherford’s nuclear model']),
          match('q2', 'Match the particle to its charge', [
            ['Proton', 'Positive'],
            ['Neutron', 'No charge'],
            ['Electron', 'Negative'],
          ]),
          mcq('q3', 'Where are protons and neutrons found?', ['In the nucleus', 'In shells around the nucleus', 'Outside the atom', 'Only in metals'], 0),
          tf('q4', 'Most of an atom is empty space.', true, 'That’s what Rutherford’s gold foil experiment showed.'),
          mcq('q5', 'What decides which element an atom is?', ['Its number of protons', 'Its number of neutrons', 'Its size', 'Its colour'], 0),
          gap('q6', 'An atom has 6 protons. It has ___ electrons.', ['6', 'six']),
          mcq('q7', 'Why do scientific models change over time?', ['New evidence shows the old model doesn’t fit', 'Scientists get bored', 'The atoms themselves change', 'To make them simpler'], 0),
        ],
      },
      {
        id: 'ca-displacement',
        title: 'Displacement reactions',
        emoji: '🔄',
        learn: [
          card('🥊', 'More reactive wins', 'A more reactive metal can push a less reactive metal out of its compound: a displacement reaction. Put an iron nail in blue copper sulfate solution and the iron displaces the copper. The nail gets coated in pink-brown copper and the solution turns pale green: iron + copper sulfate → iron sulfate + copper.', ['displacement', 'reactivity series'], 'displacement-nail'),
          card('📋', 'Using the reactivity series', 'If the metal is less reactive than the one in the compound, nothing happens. Copper in magnesium sulfate: no reaction, because copper is less reactive than magnesium. The reactivity series (potassium, sodium, calcium, magnesium, aluminium, carbon, zinc, iron, lead, copper, silver, gold) tells you which way it goes.', ['reactivity series']),
          card('🧪', 'Oxides: acid or base?', 'Metal oxides are bases: they neutralise acids, and the ones that dissolve make alkaline solutions. Non-metal oxides, like carbon dioxide and sulfur dioxide, dissolve in water to make acidic solutions. Sulfur dioxide from burning fuels causes acid rain.', ['metal oxide', 'non-metal oxide', 'acid rain']),
        ],
        questions: [
          mcq('q1', 'Iron is added to copper sulfate solution. What forms?', ['Iron sulfate + copper', 'Copper sulfate + iron', 'Iron oxide + sulfur', 'Nothing'], 0),
          tf('q2', 'Copper can displace magnesium from magnesium sulfate.', false, 'Copper is less reactive than magnesium, so no reaction happens.'),
          mcq('q3', 'Which metal could displace iron from iron sulfate?', ['Zinc', 'Copper', 'Silver', 'Gold'], 0),
          gap('q4', 'Magnesium + copper sulfate → magnesium sulfate + ___', ['copper']),
          match('q5', 'Acidic or basic oxide?', [
            ['Sulfur dioxide', 'Acidic'],
            ['Magnesium oxide', 'Basic'],
          ]),
          mcq('q6', 'What colour coating forms on an iron nail in copper sulfate?', ['Pink-brown', 'Silver', 'Blue', 'White'], 0),
          tf('q7', 'Sulfur dioxide from burning fuels can cause acid rain.', true),
        ],
      },
      {
        id: 'ca-rates',
        title: 'Rates of reaction & catalysts',
        emoji: '⏱️',
        learn: [
          card('💥', 'Collisions', 'For particles to react, they must collide with enough energy. Anything that makes collisions happen more often, or with more energy, speeds up the reaction. The rate of a reaction is how fast the reactants are used up or the products are made.', ['rate of reaction', 'collision']),
          card('🚀', 'Speeding up reactions', 'Four things make reactions faster: a higher temperature (particles move faster), a higher concentration (more particles crowded in), a bigger surface area (powder instead of lumps), and a catalyst. You can measure the rate by timing how fast a gas is given off, or how fast the mass goes down.', ['temperature', 'concentration', 'surface area'], 'rate-factors'),
          card('🧩', 'Catalysts', 'A catalyst speeds up a reaction without being used up, so it can be used again and again. Enzymes are biological catalysts: amylase in your saliva speeds up breaking down starch. Catalytic converters in cars turn harmful exhaust gases into less harmful ones.', ['catalyst', 'enzyme'], 'rate-graph'),
        ],
        questions: [
          mcq('q1', 'Why does heating a reaction speed it up?', ['Particles move faster and collide more often and harder', 'The reactants get bigger', 'It adds more reactants', 'It removes the products'], 0),
          mcq('q2', 'Which reacts fastest with acid?', ['Powdered marble', 'One big lump of marble', 'A few large chips', 'They are all the same'], 0, 'Powder has the biggest surface area.'),
          match('q3', 'Faster or slower?', [
            ['Higher temperature', 'Faster'],
            ['Lower concentration', 'Slower'],
          ]),
          tf('q4', 'A catalyst is used up in the reaction.', false, 'It’s unchanged at the end, so it can be used again.'),
          gap('q5', 'Enzymes are biological ___.', ['catalysts', 'catalyst']),
          mcq('q6', 'How could you measure the rate of a reaction that gives off a gas?', ['Time how fast the gas is collected', 'Measure the colour of the flask', 'Count the atoms', 'Weigh the catalyst'], 0),
          mcq('q7', 'On a graph of gas made over time, a steeper line means…', ['A faster reaction', 'A slower reaction', 'The reaction has stopped', 'No gas is made'], 0),
        ],
      },
    ],
  },
];
