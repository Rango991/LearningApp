import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// Extra GCSE units that fill gaps in the main GCSE files: Maths Higher topics,
// AQA English Language papers question by question, AQA science required
// practicals, AQA History exam skills, and Edexcel B Geography skills.
// Question ids are stored in progress data, so never change an existing id.

const AQA = 'GCSE (AQA)';
const EDEXCEL_B = 'GCSE (Edexcel B)';

export const gcseMathsExtra: Unit[] = [
  {
    id: 'g-maths-higher',
    title: 'Higher extras',
    stage: AQA,
    description: 'Higher-tier topics: the sine and cosine rules, vectors and proof, functions and harder sequences, and histograms.',
    colour: '#c2410c',
    lessons: [
      {
        id: 'gmh-trig',
        title: 'Sine & cosine rules',
        emoji: '📐',
        learn: [
          card('📐', 'Triangles without a right angle', 'Label the sides a, b and c opposite angles A, B and C. The sine rule, a/sin A = b/sin B, links pairs of sides and their opposite angles. The cosine rule, a² = b² + c² − 2bc cos A, finds a side when you know two sides and the angle between them.', ['sine rule', 'cosine rule'], 'sine-cosine'),
          card('🔺', 'Area of any triangle', 'Area = ½ab sin C, using two sides and the angle between them. Sides of 5 cm and 8 cm with 30° between them: ½ × 5 × 8 × 0.5 = 10 cm².', ['area']),
        ],
        questions: [
          mcq('q1', 'You know two sides and the angle between them. To find the third side, use…', ['The cosine rule', 'The sine rule', 'Pythagoras only', 'SOHCAHTOA only'], 0),
          gap('q2', 'A triangle has sides of 6 and 10 with 30° between them. Area = ___', ['15']),
          mcq('q3', 'Which rule links pairs of sides and their opposite angles?', ['The sine rule', 'The cosine rule', 'Pythagoras', 'The area rule'], 0),
          tf('q4', 'The sine and cosine rules work in triangles without a right angle.', true),
          gap('q5', 'sin 30° = ___', ['0.5']),
          mcq('q6', 'In the cosine rule a² = b² + c² − 2bc cos A, angle A is…', ['The angle opposite side a', 'Any angle', 'The right angle', 'The smallest angle'], 0),
        ],
      },
      {
        id: 'gmh-vectors',
        title: 'Vectors & proof',
        emoji: '➡️',
        learn: [
          card('➡️', 'Vectors', 'A vector has size and direction. Add vectors nose to tail: going from A to C via B, AC = AB + BC. Going the opposite way flips the sign: BA = −AB. If one vector is a multiple of another, they are parallel.', ['vector', 'parallel'], 'vector-path'),
          card('🧾', 'Algebraic proof', 'To prove something is always true, use algebra, not examples. An even number is 2n and an odd number is 2n + 1. (2n + 1) + (2m + 1) = 2(n + m + 1), which is even, so two odd numbers always add to an even number.', ['proof', '2n + 1']),
        ],
        questions: [
          mcq('q1', 'AB = a and BC = b. Then AC = …', ['a + b', 'a − b', 'b − a', 'ab'], 0),
          mcq('q2', 'If AB = a, then BA = …', ['−a', 'a', '2a', '0'], 0),
          tf('q3', 'The vectors 2a and 6a are parallel.', true),
          mcq('q4', 'How do you write any odd number in algebra?', ['2n + 1', '2n', 'n + 1', 'n²'], 0),
          tf('q5', 'Checking three examples proves a statement is always true.', false, 'Examples can show it’s false, but only algebra proves it is always true.'),
          mcq('q6', '(2n + 1) + (2m + 1) simplifies to…', ['2(n + m + 1)', '2n + 2m', '4nm', '2(n + m) + 1'], 0),
        ],
      },
      {
        id: 'gmh-functions',
        title: 'Functions & sequences',
        emoji: '🔁',
        learn: [
          card('🔁', 'Functions', 'f(x) = 3x + 2 means multiply by 3, then add 2, so f(4) = 14. The inverse f⁻¹(x) undoes it: subtract 2, then divide by 3. A composite function fg(x) means do g first, then f.', ['function', 'inverse', 'composite'], 'function-machine'),
          card('🔢', 'Harder sequences', 'In a geometric sequence you multiply by the same number each time: 3, 6, 12, 24 (× 2). In a quadratic sequence the second differences are the same: 2, 5, 10, 17 has first differences 3, 5, 7 and second differences 2, so its nth term is n² + 1.', ['geometric sequence', 'quadratic sequence']),
        ],
        questions: [
          gap('q1', 'f(x) = 3x + 2. f(4) = ___', ['14']),
          mcq('q2', 'f(x) = 3x + 2. The inverse f⁻¹(x) = …', ['(x − 2) ÷ 3', '3x − 2', 'x ÷ 3 + 2', '2x + 3'], 0),
          mcq('q3', 'In fg(x), which function do you do first?', ['g', 'f', 'Either', 'Both at once'], 0),
          gap('q4', 'Next term of the geometric sequence 3, 6, 12, 24: ___', ['48']),
          mcq('q5', '2, 5, 10, 17… The nth term is…', ['n² + 1', '3n − 1', 'n² − 1', '2n + 1'], 0),
          tf('q6', 'In a quadratic sequence the second differences are the same.', true),
        ],
      },
      {
        id: 'gmh-data',
        title: 'Histograms & cumulative frequency',
        emoji: '📊',
        learn: [
          card('📊', 'Histograms', 'In a histogram the bars can have different widths, and the area of each bar shows the frequency. Frequency density = frequency ÷ class width. A class from 10 to 30 (width 20) with frequency 40 has a frequency density of 2.', ['histogram', 'frequency density'], 'histogram'),
          card('📈', 'Cumulative frequency', 'Keep a running total of the frequencies and plot it at the end of each class. Read the median at half the total, and the quartiles at a quarter and three-quarters. Interquartile range = upper quartile − lower quartile.', ['cumulative frequency', 'median', 'interquartile range']),
        ],
        questions: [
          gap('q1', 'Frequency 40, class width 20. Frequency density = ___', ['2']),
          mcq('q2', 'In a histogram, frequency is shown by a bar’s…', ['Area', 'Height only', 'Colour', 'Width only'], 0),
          gap('q3', 'Frequency density 3, class width 10. Frequency = ___', ['30']),
          mcq('q4', 'On a cumulative frequency graph for 80 people, you read the median at…', ['40', '20', '60', '80'], 0),
          gap('q5', 'Upper quartile 34, lower quartile 22. IQR = ___', ['12']),
          tf('q6', 'Cumulative frequency is plotted at the end of each class.', true),
        ],
      },
    ],
  },
];

export const gcseEnglishExtra: Unit[] = [
  {
    id: 'g-eng-paper1',
    title: 'Language Paper 1, question by question',
    stage: AQA,
    description: 'AQA English Language Paper 1 (fiction): what each question asks, how many marks, and how to answer it.',
    colour: '#b83280',
    lessons: [
      {
        id: 'gp1-q1q2',
        title: 'Q1 & Q2: finding and language',
        emoji: '🔎',
        learn: [
          card('🔎', 'Question 1 (4 marks)', 'List four things from a set part of the source. Stick to the lines given, write short, separate points, and copy or paraphrase straight from the text. Don’t analyse: it’s just finding information. Spend about 5 minutes.', ['retrieval'], 'lang-paper1'),
          card('🗣️', 'Question 2 (8 marks)', 'How does the writer use language to describe…? Pick 2 or 3 short quotations, name techniques where they help (simile, verb choice, personification), and explain the effect of specific words on the reader. Spend about 10 minutes.', ['language analysis', 'effect']),
        ],
        questions: [
          mcq('q1', 'How many marks is Paper 1 Question 1 worth?', ['4', '8', '20', '40'], 0),
          mcq('q2', 'What does Question 1 ask you to do?', ['List four things from a set part of the text', 'Analyse structure', 'Write a story', 'Compare two texts'], 0),
          mcq('q3', 'For Question 2, the best quotations are…', ['Short ones you can zoom in on', 'Whole paragraphs', 'From outside the given lines', 'Ones you make up'], 0),
          tf('q4', 'In Question 1 you should explain the writer’s methods.', false, 'It’s just finding information: list four things.'),
          mcq('q5', 'Which is the strongest Question 2 sentence?', ['The verb “clawed” makes the wind sound violent, like an animal attacking.', 'The writer uses lots of good words.', 'There is a simile.', 'The text is about the weather.'], 0),
          gap('q6', 'Question 2 is about how the writer uses ___.', ['language']),
        ],
      },
      {
        id: 'gp1-q3',
        title: 'Q3: structure',
        emoji: '🏗️',
        learn: [
          card('🏗️', 'What structure means', 'Structure is how the text is put together: what the writer focuses your attention on at the start, how that focus shifts, and how it ends. Look at openings, shifts in focus (wide to close-up, outside to inside), flashbacks, changes of pace and repeated ideas.', ['structure', 'focus', 'shift'], 'structure-zoom'),
          card('📝', 'Answering Question 3 (8 marks)', 'Track the text from beginning to middle to end. Say what the focus is at each point and why the writer moves it: to build tension, introduce a character or create a contrast. Use phrases like “at first”, “then the focus shifts to” and “finally”.', ['beginning, middle, end']),
        ],
        questions: [
          mcq('q1', 'Paper 1 Question 3 is about…', ['How the text is structured', 'Language features', 'Your own opinion', 'Finding information'], 0),
          mcq('q2', 'Which is a structural feature?', ['A shift in focus from the town to one person', 'A simile', 'An adjective', 'A metaphor'], 0),
          tf('q3', 'A flashback is a structural choice.', true),
          mcq('q4', 'Which phrase fits a Question 3 answer?', ['Then the focus shifts to…', 'The adjective “dark”…', 'I agree with the writer…', 'In my story…'], 0),
          mcq('q5', 'Why might a writer zoom in from a wide view to one character?', ['To draw the reader’s attention to that character', 'To confuse the reader', 'To end the story', 'To list facts'], 0),
          gap('q6', 'Question 3 is worth ___ marks.', ['8']),
        ],
      },
      {
        id: 'gp1-q4',
        title: 'Q4: evaluating',
        emoji: '⚖️',
        learn: [
          card('⚖️', 'Question 4 (20 marks)', 'You get a statement, like “This part of the story shows how dangerous the storm is”, and are asked how far you agree. Give your view, then back it up with evidence and analysis of the writer’s methods. It’s worth 20 marks, so spend about 25 minutes.', ['evaluate', 'statement'], 'q4-steps'),
          card('🧭', 'Make it evaluative', 'Use evaluative words: “convincingly”, “effectively”, “the writer successfully…”. Comment on the effect on the reader and keep linking back to the statement. You can partly agree, as long as you explain why.', ['evaluative language']),
        ],
        questions: [
          gap('q1', 'Question 4 is worth ___ marks.', ['20']),
          mcq('q2', 'What does Question 4 ask?', ['How far you agree with a statement about the text', 'To list four things', 'To write a story', 'To compare two sources'], 0),
          tf('q3', 'You can partly agree with the statement in Question 4.', true),
          mcq('q4', 'Which is an evaluative phrase?', ['The writer effectively creates…', 'The text has words.', 'It is in paragraphs.', 'It is fiction.'], 0),
          mcq('q5', 'About how long should you spend on Question 4?', ['25 minutes', '5 minutes', '1 hour', '2 minutes'], 0),
          tf('q6', 'In Question 4 you should still analyse the writer’s methods.', true),
        ],
      },
      {
        id: 'gp1-q5',
        title: 'Q5: descriptive & narrative writing',
        emoji: '✍️',
        learn: [
          card('✍️', 'Question 5 (40 marks)', 'You choose to write a description (often of a picture) or a story. 24 marks are for content and organisation and 16 for technical accuracy: spelling, punctuation and grammar. Plan for 5 minutes and write for about 40.', ['content', 'technical accuracy'], 'q5-marks'),
          card('🌟', 'Top tips', 'Zoom in on small details instead of describing everything. Use the senses. Vary sentence lengths and openings. Use a range of punctuation (; : – …). Give it a clear shape, like a cyclical ending that returns to the opening image. Save 5 minutes to proofread.', ['senses', 'sentence variety', 'cyclical structure']),
        ],
        questions: [
          gap('q1', 'Question 5 is worth ___ marks.', ['40']),
          mcq('q2', 'How many of the 40 marks are for spelling, punctuation and grammar?', ['16', '24', '40', '4'], 0),
          mcq('q3', 'Which is a good way to end a description?', ['Return to the opening image (a cyclical ending)', 'Stop mid-sentence', 'Write “The end”', 'Start a new story'], 0),
          tf('q4', 'You should plan before writing Question 5.', true),
          mcq('q5', 'Which sentence uses the senses best?', ['The bitter smell of burnt toast clung to the kitchen walls.', 'The kitchen was nice.', 'There was a kitchen.', 'I went in.'], 0),
          mcq('q6', 'Why vary sentence length?', ['To control the pace and keep the reader interested', 'To use more words', 'Because it’s a rule', 'To fill the page'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-eng-paper2',
    title: 'Language Paper 2, question by question',
    stage: AQA,
    description: 'AQA English Language Paper 2 (non-fiction): true statements, summaries, language, comparing perspectives, and writing your view.',
    colour: '#2563a8',
    lessons: [
      {
        id: 'gp2-q1q2',
        title: 'Q1 & Q2: true statements & summary',
        emoji: '✅',
        learn: [
          card('✅', 'Question 1 (4 marks)', 'Read a set part of Source A and choose the four true statements out of eight. Check each one carefully against the lines: words like “always” and “never” often make a statement false.', ['true statements'], 'lang-paper2'),
          card('🔀', 'Question 2 (8 marks)', 'Write a summary of the differences (or similarities) between something in both sources, such as the two writers’ homes. Make inferences about what the details suggest. Use connectives like “whereas” and “similarly”, with a quotation from each source.', ['summary', 'inference']),
        ],
        questions: [
          mcq('q1', 'In Paper 2 Question 1, how many statements do you choose?', ['4', '2', '8', '6'], 0),
          mcq('q2', 'Question 2 asks you to…', ['Summarise differences or similarities between the sources', 'Analyse language', 'Write a speech', 'List four things'], 0),
          tf('q3', 'Question 2 needs inferences, not just facts copied out.', true),
          mcq('q4', 'Which word helps you compare in Question 2?', ['Whereas', 'Because', 'Therefore', 'Firstly'], 0),
          mcq('q5', 'In Question 2, how many sources do you use?', ['Both', 'Just Source A', 'Just Source B', 'None'], 0),
          gap('q6', 'Paper 2 Question 2 is worth ___ marks.', ['8']),
        ],
      },
      {
        id: 'gp2-q3',
        title: 'Q3: language in non-fiction',
        emoji: '🗞️',
        learn: [
          card('🗞️', 'Question 3 (12 marks)', 'How does the writer use language to…? It’s about one source, usually Source B. It works like Paper 1 Question 2 but is worth more, so go into more depth: word choice, tone, rhetorical features and their effect.', ['language', 'tone']),
          card('📣', 'Non-fiction devices', 'Look for direct address (“you”), rhetorical questions, lists of three, facts and statistics, emotive language, hyperbole and anecdotes. Always explain why the writer uses them and their effect on the reader.', ['direct address', 'rhetorical question', 'emotive language'], 'nonfiction-devices'),
        ],
        questions: [
          gap('q1', 'Paper 2 Question 3 is worth ___ marks.', ['12']),
          match('q2', 'Match the example to the device', [
            ['“Wouldn’t you want to help?”', 'Rhetorical question'],
            ['“You can make a difference.”', 'Direct address'],
            ['“Brave, bold and brilliant”', 'List of three'],
          ]),
          mcq('q3', 'Question 3 usually focuses on…', ['One source', 'Both sources', 'Your own writing', 'Pictures'], 0),
          tf('q4', 'Naming a technique is enough for top marks.', false, 'You must explain its effect.'),
          mcq('q5', 'Hyperbole is…', ['Deliberate exaggeration', 'A true statistic', 'A short story', 'A question'], 0),
          mcq('q6', 'Why might a writer include a personal anecdote?', ['To help the reader relate to them', 'To confuse the reader', 'To list facts', 'To end the article'], 0),
        ],
      },
      {
        id: 'gp2-q4',
        title: 'Q4: comparing perspectives',
        emoji: '🔍',
        learn: [
          card('🔍', 'Question 4 (16 marks)', 'Compare how the two writers convey their different perspectives (views and feelings) on a topic. You need what they think and how they show it: compare their methods (tone, language, structure), with quotations from both sources.', ['perspective', 'compare', 'methods']),
          card('🔗', 'A comparison paragraph', 'In Source A, the writer is fearful of…, shown by… . Whereas in Source B, the writer feels excited, using… . Both writers…, but… . Keep switching between the sources rather than writing about one and then the other.', ['comparison'], 'compare-connectives'),
        ],
        questions: [
          gap('q1', 'Paper 2 Question 4 is worth ___ marks.', ['16']),
          mcq('q2', 'Question 4 compares the writers’…', ['Perspectives and methods', 'Spelling', 'Word counts', 'Dates'], 0),
          tf('q3', 'It’s best to write all about Source A, then all about Source B.', false, 'Compare as you go.'),
          mcq('q4', 'What is a perspective?', ['A writer’s views and feelings about a topic', 'The number of paragraphs', 'A type of punctuation', 'The title'], 0),
          mcq('q5', 'Which is a comparative sentence?', ['Whereas Source A is angry, Source B is calm and reflective.', 'Source A is about trains.', 'I liked Source B.', 'Source B was written in 1850.'], 0),
          tf('q6', 'Question 4 needs quotations from both sources.', true),
        ],
      },
      {
        id: 'gp2-q5',
        title: 'Q5: writing your viewpoint',
        emoji: '📢',
        learn: [
          card('📢', 'Question 5 (40 marks)', 'You’re given a statement and a task: an article, letter, speech or essay giving your point of view. Match the form, audience and purpose. 24 marks are for content and organisation, 16 for technical accuracy.', ['viewpoint', 'form', 'audience', 'purpose']),
          card('🧱', 'Build an argument', 'Open with a hook and give a clear opinion. Each paragraph makes one point, with evidence or an example. Answer the other side (a counter-argument) and knock it down. Use rhetorical devices, but don’t overdo them. End with a strong call to action.', ['counter-argument', 'call to action'], 'argument-structure'),
        ],
        questions: [
          gap('q1', 'Paper 2 Question 5 is worth ___ marks.', ['40']),
          match('q2', 'Match the form to a feature', [
            ['Letter', 'Dear… and Yours sincerely'],
            ['Speech', 'Speaks directly to listeners'],
            ['Article', 'Headline and subheadings'],
          ]),
          mcq('q3', 'What is a counter-argument?', ['The opposite view, which you then answer', 'Your main point', 'Your conclusion', 'A statistic'], 0),
          tf('q4', 'You should match your writing to its audience.', true),
          mcq('q5', 'Which is a call to action?', ['Join us today and make your voice heard.', 'Once upon a time…', 'Firstly, there are cats.', 'The end.'], 0),
          mcq('q6', 'What does “purpose” mean?', ['What the writing is meant to do, e.g. persuade', 'Who reads it', 'How long it is', 'The title'], 0),
        ],
      },
    ],
  },
];

export const gcseBiologyExtra: Unit[] = [
  {
    id: 'g-bio-practicals',
    title: 'Biology required practicals',
    stage: AQA,
    description: 'The AQA Combined Science biology practicals: microscopy, osmosis, food tests, enzymes, photosynthesis, reaction time and quadrats.',
    colour: '#2e9e74',
    lessons: [
      {
        id: 'gbp-cells',
        title: 'Microscopy & osmosis',
        emoji: '🔬',
        learn: [
          card('🔬', 'Microscopy', 'Put a thin specimen on a slide, add a stain (iodine for plant cells) and lower a cover slip. Start with the lowest-power objective lens and focus with the coarse, then fine, focus. Magnification = image size ÷ real size.', ['magnification', 'stain'], 'microscope'),
          card('🥔', 'Osmosis', 'Cut equal potato cylinders, weigh them, and put each in a different sugar concentration. Reweigh them after a set time and work out the percentage change in mass. In weak solutions the potato gains mass, as water moves in by osmosis; in strong ones it loses mass.', ['osmosis', 'percentage change'], 'osmosis'),
        ],
        questions: [
          mcq('q1', 'Which objective lens do you start with?', ['The lowest power', 'The highest power', 'Any of them', 'None'], 0),
          gap('q2', 'Magnification = image size ÷ ___ size', ['real', 'actual']),
          mcq('q3', 'Why work out the percentage change in mass, not just the change?', ['The potato pieces may start at different masses', 'It’s quicker', 'It gives bigger numbers', 'Percentages are always positive'], 0),
          tf('q4', 'A potato cylinder in pure water gains mass.', true),
          mcq('q5', 'In a very strong sugar solution, the potato…', ['Loses mass', 'Gains mass', 'Stays the same', 'Dissolves'], 0),
          gap('q6', 'Image size 5 mm, real size 0.05 mm. Magnification = × ___', ['100']),
        ],
      },
      {
        id: 'gbp-tests',
        title: 'Food tests & enzymes',
        emoji: '🧪',
        learn: [
          card('🧪', 'Food tests', 'Starch: iodine turns blue-black. Sugars: Benedict’s solution, heated in a water bath, turns green, yellow or brick red. Protein: biuret turns purple. Lipids: ethanol, then water, gives a cloudy white layer.', ['iodine', 'Benedict’s', 'biuret'], 'food-tests'),
          card('⏱️', 'Enzymes and pH', 'Mix amylase and starch at different pHs. Every 30 seconds, put a drop onto iodine in a spotting tile. When it stays orange, all the starch has been digested. The fastest time shows the optimum pH. Keep the temperature the same with a water bath.', ['amylase', 'optimum pH', 'control variable']),
        ],
        questions: [
          match('q1', 'Match the test to what it finds', [
            ['Iodine', 'Starch'],
            ['Benedict’s', 'Sugar'],
            ['Biuret', 'Protein'],
            ['Ethanol', 'Lipids'],
          ]),
          mcq('q2', 'Starch with iodine turns…', ['Blue-black', 'Purple', 'Brick red', 'Cloudy white'], 0),
          tf('q3', 'The Benedict’s test needs heating.', true),
          mcq('q4', 'In the amylase practical, iodine staying orange means…', ['All the starch has been digested', 'The enzyme is dead', 'There is protein', 'It’s too cold'], 0),
          mcq('q5', 'Why use a water bath in the enzyme practical?', ['To keep the temperature the same', 'To add water', 'To heat the iodine', 'To clean the tubes'], 0),
          mcq('q6', 'The independent variable in the amylase practical is…', ['pH', 'Time', 'Iodine colour', 'Temperature'], 0),
        ],
      },
      {
        id: 'gbp-field',
        title: 'Photosynthesis, reaction time & quadrats',
        emoji: '🌿',
        learn: [
          card('💡', 'Light and photosynthesis', 'Put pondweed at different distances from a lamp and count the oxygen bubbles per minute. Closer means more light and faster photosynthesis. Light intensity follows the inverse square law: halve the distance and the light is four times as strong.', ['light intensity', 'inverse square law']),
          card('📏', 'Reaction time', 'One person drops a ruler and the other catches it as fast as they can. The distance it falls shows the reaction time. Repeat it and take a mean, and test a factor like caffeine or practice.', ['reaction time', 'mean']),
          card('🟩', 'Quadrats', 'Place quadrats at random (using random coordinates) and count the plants in each to estimate a population. To see how a species changes across a habitat, place quadrats at regular points along a line: a transect.', ['quadrat', 'random sampling', 'transect'], 'quadrat'),
        ],
        questions: [
          mcq('q1', 'Moving the lamp closer to the pondweed makes photosynthesis…', ['Faster', 'Slower', 'Stop', 'Unchanged'], 0),
          mcq('q2', 'Halve the distance from the lamp. The light intensity is…', ['4 times stronger', '2 times stronger', 'Halved', 'The same'], 0),
          mcq('q3', 'Why place quadrats at random?', ['To avoid bias', 'To save time', 'To find rare plants', 'Because it’s easier'], 0),
          gap('q4', 'Quadrats placed at regular points along a line make a ___.', ['transect']),
          tf('q5', 'You should repeat the ruler-drop test and find a mean.', true),
          mcq('q6', 'In the pondweed practical, what do you count?', ['Oxygen bubbles', 'Leaves', 'Roots', 'Carbon dioxide bubbles'], 0),
        ],
      },
    ],
  },
];

export const gcseChemistryExtra: Unit[] = [
  {
    id: 'g-chem-practicals',
    title: 'Chemistry required practicals',
    stage: AQA,
    description: 'The AQA Combined Science chemistry practicals: making salts, electrolysis, temperature changes, rates, chromatography and water.',
    colour: '#7c3aed',
    lessons: [
      {
        id: 'gcp-salts',
        title: 'Making salts & electrolysis',
        emoji: '🧂',
        learn: [
          card('🧂', 'Making a soluble salt', 'Warm some acid. Add an insoluble base, like copper oxide, until no more dissolves, so all the acid is used up. Filter off the extra solid. Gently heat the solution to evaporate some water, then leave it to crystallise.', ['excess', 'filter', 'crystallise'], 'making-salts'),
          card('⚡', 'Electrolysis', 'Pass a current through a solution using inert electrodes. At the negative electrode you get the metal, or hydrogen if the metal is more reactive than hydrogen. At the positive electrode you get oxygen, or a halogen like chlorine if halide ions are present.', ['electrolysis', 'electrode']),
        ],
        questions: [
          order('q1', 'Put the steps for making copper sulfate crystals in order', ['Warm the acid', 'Add copper oxide until no more dissolves', 'Filter off the extra solid', 'Evaporate and leave to crystallise']),
          mcq('q2', 'Why add the base in excess?', ['So all the acid reacts', 'To make it faster', 'To change the colour', 'To cool it down'], 0),
          mcq('q3', 'In the electrolysis of copper chloride solution, what forms at the negative electrode?', ['Copper', 'Chlorine', 'Oxygen', 'Hydrogen'], 0),
          mcq('q4', 'In the electrolysis of sodium chloride solution, what forms at the negative electrode?', ['Hydrogen', 'Sodium', 'Chlorine', 'Oxygen'], 0, 'Sodium is more reactive than hydrogen.'),
          tf('q5', 'Inert electrodes don’t react during electrolysis.', true),
          gap('q6', 'Removing an insoluble solid from a liquid is called ___.', ['filtration', 'filtering']),
        ],
      },
      {
        id: 'gcp-energy-rates',
        title: 'Temperature changes & rates',
        emoji: '🌡️',
        learn: [
          card('🌡️', 'Temperature changes', 'Mix the reactants in a polystyrene cup with a lid, to reduce heat loss, and record the biggest temperature change. A rise means exothermic; a fall means endothermic. Vary one thing, like the mass of metal or the volume of acid.', ['exothermic', 'endothermic', 'insulation']),
          card('⏱️', 'Rates of reaction', 'Two methods: collect the gas given off over time in a gas syringe, or time how long it takes for a cross to disappear under a cloudy solution (sodium thiosulfate and acid). Vary the concentration and keep everything else the same.', ['gas syringe', 'disappearing cross'], 'rate-graph'),
        ],
        questions: [
          mcq('q1', 'Why use a polystyrene cup with a lid?', ['To reduce heat loss', 'To make it faster', 'To see inside', 'It’s cheaper'], 0),
          tf('q2', 'A temperature rise means the reaction is endothermic.', false, 'A rise means exothermic.'),
          mcq('q3', 'In the disappearing cross practical, you time until…', ['The cross can’t be seen', 'The bubbles stop', 'It turns blue', 'It boils'], 0),
          mcq('q4', 'Which measures the volume of gas given off?', ['A gas syringe', 'A thermometer', 'A pH probe', 'A balance only'], 0),
          mcq('q5', 'If you vary the concentration, what must stay the same?', ['The temperature and volumes', 'The concentration', 'Nothing', 'The time taken'], 0),
          tf('q6', 'A higher concentration gives a faster reaction.', true),
        ],
      },
      {
        id: 'gcp-chrom-water',
        title: 'Chromatography & water',
        emoji: '💧',
        learn: [
          card('🎨', 'Chromatography', 'Draw the start line in pencil, which won’t run. Spot the inks on it and stand the paper in solvent below the line. Rf = distance moved by the spot ÷ distance moved by the solvent. A pure substance gives one spot.', ['Rf value', 'solvent front'], 'chromatography'),
          card('💧', 'Testing and purifying water', 'Test a water sample’s pH, then evaporate some to see how much dissolved solid it contains. To purify it, distil it: boil the water, cool the steam in a condenser, and collect the pure water.', ['potable', 'distillation']),
        ],
        questions: [
          mcq('q1', 'Why draw the start line in pencil?', ['Pencil doesn’t dissolve in the solvent', 'It’s neater', 'Pen is too dark', 'It’s quicker'], 0),
          gap('q2', 'A spot moves 3 cm and the solvent moves 6 cm. Rf = ___', ['0.5']),
          tf('q3', 'A pure substance gives one spot.', true),
          mcq('q4', 'Why must the start line be above the solvent?', ['So the spots don’t wash off into the solvent', 'To make it faster', 'To see it better', 'It doesn’t matter'], 0),
          mcq('q5', 'How do you get pure water from salty water?', ['Distillation', 'Filtration', 'Chromatography', 'Crystallisation'], 0),
          mcq('q6', 'Water that is safe to drink is called…', ['Potable', 'Pure', 'Distilled', 'Fresh'], 0),
        ],
      },
    ],
  },
];

export const gcsePhysicsExtra: Unit[] = [
  {
    id: 'g-phys-practicals',
    title: 'Physics required practicals',
    stage: AQA,
    description: 'The AQA Combined Science physics practicals: specific heat capacity, density, resistance, I–V graphs, springs, acceleration and waves.',
    colour: '#0e7490',
    lessons: [
      {
        id: 'gpp-heat-density',
        title: 'Specific heat capacity & density',
        emoji: '🔥',
        learn: [
          card('🔥', 'Specific heat capacity', 'Heat a metal block with an electric heater, measuring the energy supplied (with a joulemeter, or power × time) and the temperature rise. c = energy ÷ (mass × temperature change). Insulate the block to reduce heat loss.', ['specific heat capacity', 'joulemeter']),
          card('🧊', 'Density', 'Regular object: measure length × width × height for the volume, and weigh it. Irregular object: use a eureka (displacement) can. Liquid: measure 50 cm³ in a measuring cylinder and weigh it. Density = mass ÷ volume.', ['density', 'displacement'], 'displacement'),
        ],
        questions: [
          mcq('q1', 'Why insulate the metal block?', ['To reduce heat loss to the surroundings', 'To heat it faster', 'To weigh it', 'To measure the temperature'], 0),
          gap('q2', 'Density = mass ÷ ___', ['volume']),
          mcq('q3', 'How do you find the volume of a stone?', ['Displacement in a eureka can', 'A ruler only', 'Weighing it', 'Heating it'], 0),
          gap('q4', 'Energy 5,000 J, mass 1 kg, temperature rise 10 °C. c = ___ J/kg °C', ['500']),
          tf('q5', 'You should read a measuring cylinder at eye level.', true),
          mcq('q6', 'The energy supplied can be found from…', ['Power × time', 'Mass × volume', 'Speed × distance', 'Current ÷ time'], 0),
        ],
      },
      {
        id: 'gpp-circuits',
        title: 'Resistance & I–V graphs',
        emoji: '🔌',
        learn: [
          card('📏', 'Resistance of a wire', 'Attach crocodile clips at different lengths of wire, and measure the current (ammeter in series) and potential difference (voltmeter in parallel). R = V ÷ I. Resistance is proportional to length. Keep the current low so the wire doesn’t heat up.', ['resistance', 'length'], 'meter-circuit'),
          card('📈', 'I–V characteristics', 'Use a variable resistor to change the current through a component, record V and I, then reverse the power supply. A resistor gives a straight line; a filament lamp curves, because it gets hotter and its resistance rises; a diode only lets current through one way.', ['I–V graph', 'filament lamp', 'diode'], 'iv-graphs'),
        ],
        questions: [
          mcq('q1', 'How is the voltmeter connected?', ['In parallel across the wire', 'In series', 'Not at all', 'To the ammeter only'], 0),
          mcq('q2', 'Doubling the length of the wire makes its resistance…', ['Double', 'Halve', 'Stay the same', 'Zero'], 0),
          gap('q3', 'V = 6 V and I = 2 A. R = ___ Ω', ['3']),
          match('q4', 'Match the component to its I–V graph', [
            ['Resistor', 'Straight line through the origin'],
            ['Filament lamp', 'Curve that flattens out'],
            ['Diode', 'Current flows only one way'],
          ]),
          mcq('q5', 'Why keep the current low?', ['So the wire doesn’t heat up and change resistance', 'To save the battery', 'To read the meters', 'It’s safer to touch'], 0),
          tf('q6', 'A variable resistor changes the current in the circuit.', true),
        ],
      },
      {
        id: 'gpp-forces-waves',
        title: 'Springs, acceleration & waves',
        emoji: '🪀',
        learn: [
          card('🪀', 'Force and extension', 'Hang masses on a spring and measure the extension each time with a ruler held vertically beside it. Plot force against extension: a straight line through the origin up to the limit of proportionality. F = k × e.', ['extension', 'spring constant'], 'force-extension'),
          card('🚗', 'Acceleration', 'Pull a trolley with a falling mass and measure its acceleration with light gates. Vary the force by moving masses from the trolley to the hanger, so the total mass stays the same, or vary the mass. a = F ÷ m.', ['light gate', 'F = ma']),
          card('〰️', 'Waves', 'In a ripple tank, measure the wavelength by measuring across several waves and dividing, and the frequency by counting the waves passing a point in 10 seconds. Wave speed = frequency × wavelength.', ['ripple tank', 'wave speed'], 'wave-parts'),
        ],
        questions: [
          gap('q1', 'Force 4 N, extension 0.02 m. k = ___ N/m', ['200']),
          mcq('q2', 'What measures the trolley’s acceleration?', ['Light gates', 'A thermometer', 'A voltmeter', 'A balance'], 0),
          gap('q3', 'Frequency 5 Hz, wavelength 2 m. Wave speed = ___ m/s', ['10']),
          mcq('q4', 'Why measure across several waves and divide?', ['To make the measurement more accurate', 'To make it faster', 'To change the frequency', 'It looks better'], 0),
          tf('q5', 'Increasing the force on the trolley increases its acceleration.', true),
          mcq('q6', 'Why hold the ruler vertically next to the spring?', ['To measure the extension accurately', 'To stop it moving', 'To add weight', 'To keep it warm'], 0),
        ],
      },
    ],
  },
];

export const gcseHistoryExtra: Unit[] = [
  {
    id: 'g-hist-skills',
    title: 'History exam skills',
    stage: AQA,
    description: 'How to answer AQA History questions: how useful a source is, comparing interpretations, accounts, and “how far do you agree” essays.',
    colour: '#92400e',
    lessons: [
      {
        id: 'ghs-sources',
        title: 'How useful is a source?',
        emoji: '📜',
        learn: [
          card('📜', 'Content and provenance', 'For “How useful is Source A to a historian studying…?”, judge both what it says (content) and where it comes from (provenance): who made it, when, why and for whom. A biased source can still be useful, because it shows what that person or group thought.', ['content', 'provenance', 'bias'], 'nop-source'),
          card('🧠', 'Use your own knowledge', 'Back up your judgement with what you know about the period: does the source fit the facts? What does it leave out? Always finish with a judgement about how useful it is.', ['contextual knowledge']),
        ],
        questions: [
          mcq('q1', 'What is the provenance of a source?', ['Who made it, when and why', 'What it says', 'How long it is', 'Its colour'], 0),
          tf('q2', 'A biased source is completely useless.', false, 'It shows what that person or group believed.'),
          mcq('q3', 'A government poster from 1940 is useful for showing…', ['What the government wanted people to think', 'Exactly how everyone felt', 'Nothing', 'The weather'], 0),
          mcq('q4', 'Which is a good way to test a source’s content?', ['Compare it with your own knowledge', 'Count the words', 'Check the font', 'Ignore it'], 0),
          match('q5', 'Match N.O.P.', [
            ['Nature', 'What type of source it is'],
            ['Origin', 'Who made it and when'],
            ['Purpose', 'Why it was made'],
          ]),
          tf('q6', 'You should finish with a judgement.', true),
        ],
      },
      {
        id: 'ghs-interpretations',
        title: 'Interpretations',
        emoji: '🗣️',
        learn: [
          card('🗣️', 'Comparing interpretations', 'An interpretation is a historian’s or writer’s view of the past. You may be asked how two interpretations differ, why they differ (different sources, focus, time or purpose), and which is more convincing, using your own knowledge.', ['interpretation', 'convincing'], 'interpretations-compare'),
          card('⚖️', 'Which is more convincing?', 'Test each interpretation against what you know. Is it supported by evidence? Does it miss anything important? Explain which you find more convincing and why, referring to both.', ['judgement']),
        ],
        questions: [
          mcq('q1', 'What is an interpretation?', ['A historian’s view of the past', 'A primary source', 'A date', 'A map'], 0),
          mcq('q2', 'Why might two historians disagree?', ['They used different sources or focused on different things', 'One of them is lying', 'History never changes', 'They went to different schools'], 0),
          tf('q3', 'To judge which is more convincing, use your own knowledge.', true),
          mcq('q4', 'Which is a good reason two interpretations might differ?', ['They were written at different times', 'One has more pages', 'One is in colour', 'One is shorter'], 0),
          mcq('q5', 'In your answer, you should refer to…', ['Both interpretations', 'Only one', 'Neither', 'Only your opinion'], 0),
          gap('q6', 'You judge which interpretation is more ___.', ['convincing']),
        ],
      },
      {
        id: 'ghs-essays',
        title: 'Accounts & “how far” essays',
        emoji: '✍️',
        learn: [
          card('🧩', 'Account and importance questions', '“Write an account of…” wants a clear story of how events led to an outcome, linked with phrases like “this led to” and “as a result”. “Explain what was important about…” wants the significance: what changed because of it.', ['account', 'significance', 'consequence'], 'history-essay'),
          card('⚖️', '“How far do you agree?” essays', 'Plan both sides. Write a paragraph agreeing with the statement and one or two about other factors, each with specific evidence (dates, names, numbers). End with a clear judgement that weighs the factors: which mattered most, and why?', ['judgement', 'factors']),
        ],
        questions: [
          mcq('q1', '“Write an account” questions want…', ['A clear explanation of how events led to an outcome', 'A list of dates', 'Your opinion only', 'A description of a picture'], 0),
          mcq('q2', 'Which phrase shows a consequence?', ['As a result,', 'On the other hand,', 'In 1066,', 'I think'], 0),
          tf('q3', 'In a “how far” essay you should look at other factors too.', true),
          mcq('q4', 'What makes evidence specific?', ['Dates, names and numbers', 'Long words', 'Opinions', 'Questions'], 0),
          mcq('q5', 'How should a “how far” essay end?', ['With a clear judgement weighing the factors', 'With a new fact', 'With a question', 'It doesn’t need an ending'], 0),
          gap('q6', 'Explaining why something mattered is explaining its ___.', ['significance']),
        ],
      },
    ],
  },
];

export const gcseGeographyExtra: Unit[] = [
  {
    id: 'g-geo-skills',
    title: 'Skills & fieldwork',
    stage: EDEXCEL_B,
    description: 'Map skills, graphs and statistics, and the fieldwork enquiry process for Edexcel B Geography.',
    colour: '#0f766e',
    lessons: [
      {
        id: 'ggs-maps',
        title: 'Map skills',
        emoji: '🗺️',
        learn: [
          card('🗺️', 'OS maps', 'Six-figure grid references: along the corridor, then up the stairs, adding tenths. Contours show height: close together means steep. On a 1:50,000 map, 2 cm = 1 km. Gradient = vertical rise ÷ horizontal distance.', ['grid reference', 'contour', 'gradient'], 'contours'),
          card('🌍', 'Other maps', 'Choropleth maps shade areas by value, darker for more. Flow-line maps show movement, with thicker lines for more. Dot maps show distribution. Isolines join points of equal value, like isobars on a weather map.', ['choropleth', 'flow line', 'isoline'], 'map-types'),
        ],
        questions: [
          mcq('q1', 'Contour lines close together show…', ['Steep land', 'Flat land', 'Water', 'Woodland'], 0),
          gap('q2', 'On a 1:50,000 map, 2 cm represents ___ km', ['1']),
          mcq('q3', 'A map that shades areas darker for higher values is a…', ['Choropleth map', 'Flow-line map', 'Dot map', 'Sketch map'], 0),
          mcq('q4', 'Gradient = …', ['Vertical rise ÷ horizontal distance', 'Horizontal distance ÷ vertical rise', 'Height × distance', 'Distance ÷ time'], 0),
          tf('q5', 'In a grid reference, you give the eastings (along) first.', true),
          mcq('q6', 'Lines joining points of equal value are…', ['Isolines', 'Flow lines', 'Grid lines', 'Borders'], 0),
        ],
      },
      {
        id: 'ggs-stats',
        title: 'Graphs & statistics',
        emoji: '📈',
        learn: [
          card('📈', 'Choosing graphs', 'Line graphs show change over time. Bar charts compare categories. Scatter graphs show relationships (correlation). Climate graphs combine temperature (a line) and rainfall (bars). Population pyramids show age and sex.', ['correlation', 'climate graph'], 'climate-graph'),
          card('🧮', 'Useful statistics', 'Mean, median, mode and range. The interquartile range shows the spread of the middle half of the data and ignores extreme values. Percentage change = change ÷ original × 100.', ['interquartile range', 'percentage change']),
        ],
        questions: [
          mcq('q1', 'Which graph shows a relationship between two variables?', ['A scatter graph', 'A pie chart', 'A bar chart', 'A pictogram'], 0),
          mcq('q2', 'A climate graph shows rainfall as…', ['Bars', 'A line', 'Dots', 'Pie slices'], 0),
          gap('q3', 'A population rises from 200 to 250. Percentage change = ___%', ['25']),
          mcq('q4', 'Which measure ignores extreme values?', ['Interquartile range', 'Range', 'Mean', 'Total'], 0),
          gap('q5', 'Median of 3, 7, 9, 12, 15 = ___', ['9']),
          tf('q6', 'Positive correlation means both variables increase together.', true),
        ],
      },
      {
        id: 'ggs-fieldwork',
        title: 'The fieldwork enquiry',
        emoji: '🧭',
        learn: [
          card('🧭', 'The enquiry process', 'Ask a question or hypothesis. Collect data, both primary (your own) and secondary (from others). Present it, analyse it and reach a conclusion. Then evaluate: what went wrong, and how reliable are your results?', ['hypothesis', 'primary data', 'secondary data'], 'fieldwork-enquiry'),
          card('🎯', 'Sampling and evaluation', 'Random sampling avoids bias. Systematic sampling takes data at regular intervals, like every 10 m. Stratified sampling makes sure each group is fairly represented. In your evaluation, discuss accuracy, reliability and the risks you managed.', ['random sampling', 'systematic sampling', 'stratified sampling']),
        ],
        questions: [
          order('q1', 'Put the enquiry steps in order', ['Ask a question', 'Collect data', 'Present it', 'Analyse it', 'Conclude', 'Evaluate']),
          mcq('q2', 'Primary data is…', ['Data you collect yourself', 'Data from the internet', 'Data from a textbook', 'Very old data'], 0),
          mcq('q3', 'Measuring every 10 m along a river is…', ['Systematic sampling', 'Random sampling', 'Stratified sampling', 'Guessing'], 0),
          tf('q4', 'Random sampling helps avoid bias.', true),
          mcq('q5', 'In the evaluation you should discuss…', ['How reliable and accurate your data was', 'Your favourite part', 'Only the weather', 'Nothing'], 0),
          gap('q6', 'A testable statement you investigate is a ___.', ['hypothesis']),
        ],
      },
    ],
  },
];
