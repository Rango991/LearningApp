import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// AQA GCSE English Language (8700) and English Literature (8702), matching the
// texts Gosforth Academy teaches: Macbeth or Romeo and Juliet, A Christmas Carol or
// Frankenstein, An Inspector Calls, and the Power and Conflict poetry cluster.
// Quotations are only from texts out of copyright; modern poems are described, not quoted.
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE (AQA)';

export const gcseEnglish: Unit[] = [
  {
    id: 'g-eng-language',
    title: 'Language Papers 1 & 2',
    stage: STAGE,
    description: 'What each question on the two English Language papers asks for, and how to tackle it.',
    colour: '#e0457b',
    lessons: [
      {
        id: 'ge-paper1',
        title: 'Paper 1: fiction',
        emoji: '📖',
        learn: [
          card('📖', 'Section A: reading', 'Paper 1 is 1 hour 45 minutes, with an extract from a 20th or 21st century novel or story. Q1 (4 marks): list four things from part of the text. Q2 (8 marks): how the writer uses language. Q3 (8 marks): how the writer uses structure, such as where the focus shifts. Q4 (20 marks): evaluate a statement about the text: how far do you agree?', ['language', 'structure', 'evaluate'], 'lang-paper1'),
          card('✍️', 'Section B: writing', 'Q5 (40 marks) is creative writing: a description or a story, sometimes based on a picture. 24 marks are for content and organisation, and 16 for technical accuracy (spelling, punctuation, grammar). Plan for 5 minutes, and save time to check your work.', ['descriptive', 'narrative', 'technical accuracy']),
        ],
        questions: [
          gap('q1', 'Paper 1 Question 5 (writing) is worth ___ marks', ['40']),
          mcq('q2', 'Which question asks about structure?', ['Question 3', 'Question 1', 'Question 2', 'Question 5'], 0),
          mcq('q3', 'Question 4 asks you to…', ['Evaluate a statement about the text', 'List four things', 'Write a story', 'Compare two texts'], 0),
          mcq('q4', 'What kind of text is in Paper 1?', ['Fiction (an extract from a novel or story)', 'A newspaper article', 'A poem', 'A play script'], 0),
          gap('q5', 'Question 1 asks you to list ___ things', ['4', 'four']),
          tf('q6', 'In Question 5, marks are given for spelling, punctuation and grammar.', true, '16 of the 40 marks are for technical accuracy.'),
        ],
      },
      {
        id: 'ge-paper2',
        title: 'Paper 2: non-fiction',
        emoji: '📰',
        learn: [
          card('📰', 'Section A: two sources', 'Paper 2 (1 hour 45 minutes) has two non-fiction texts, one from the 19th century and one from the 20th or 21st. Q1 (4 marks): choose four true statements. Q2 (8 marks): summarise the differences between the sources. Q3 (12 marks): how one writer uses language. Q4 (16 marks): compare the writers’ viewpoints and how they get them across.', ['source', 'summary', 'viewpoint', 'compare'], 'lang-paper2'),
          card('📣', 'Section B: your viewpoint', 'Q5 (40 marks): write to give your opinion, as a letter, article, speech or essay. Think about audience, purpose and form, and use persuasive methods such as rhetorical questions, facts, statistics, anecdotes and a counter-argument you knock down.', ['audience', 'purpose', 'form', 'counter-argument']),
        ],
        questions: [
          mcq('q1', 'Paper 2 Question 1 asks you to…', ['Choose four true statements', 'Write a story', 'Compare viewpoints', 'Analyse structure'], 0),
          gap('q2', 'Question 4 (comparing viewpoints) is worth ___ marks', ['16']),
          mcq('q3', 'Question 2 asks you to…', ['Summarise differences between the sources', 'Write an article', 'List four things', 'Evaluate a statement'], 0),
          mcq('q4', 'What does Paper 2 Question 5 ask you to write?', ['Your viewpoint, e.g. a letter, article or speech', 'A story', 'A poem', 'A description of a picture'], 0),
          tf('q5', 'One of the Paper 2 sources is from the 19th century.', true),
          mcq('q6', 'Raising an opposing view and then disproving it is a…', ['Counter-argument', 'Rhetorical question', 'Anecdote', 'Metaphor'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-eng-shakespeare',
    title: 'Shakespeare',
    stage: STAGE,
    description: 'Macbeth and Romeo and Juliet: plot, characters, themes, context and key quotations.',
    colour: '#8e3b8f',
    lessons: [
      {
        id: 'ge-macbeth-plot',
        title: 'Macbeth: the plot',
        emoji: '🗡️',
        learn: [
          card('🧙', 'Prophecy and murder', 'Three witches tell Macbeth he will be Thane of Cawdor and then king, and that Banquo’s descendants will be kings. When the first prophecy comes true, Lady Macbeth persuades him to murder King Duncan at their castle. Duncan’s sons, Malcolm and Donalbain, flee, and Macbeth is crowned.', ['prophecy', 'Thane of Cawdor'], 'macbeth-plot'),
          card('👻', 'Downfall', 'Macbeth has Banquo murdered, but Banquo’s son Fleance escapes; Banquo’s ghost haunts Macbeth at a banquet. Macbeth has Macduff’s wife and children killed. Lady Macbeth sleepwalks, haunted by guilt, and dies. Macduff, who was “from his mother’s womb untimely ripped”, kills Macbeth, and Malcolm becomes king.', ['guilt', 'tyrant']),
        ],
        questions: [
          order('q1', 'Put the events of Macbeth in order', ['The witches’ prophecies', 'Duncan is murdered', 'Banquo is murdered', 'Lady Macbeth sleepwalks', 'Macduff kills Macbeth']),
          mcq('q2', 'Who says “Fair is foul, and foul is fair”?', ['The witches', 'Macbeth', 'Lady Macbeth', 'Banquo'], 0),
          mcq('q3', 'Who escapes when Banquo is murdered?', ['Fleance', 'Malcolm', 'Macduff', 'Donalbain'], 0),
          mcq('q4', 'Who says “Out, damned spot!”?', ['Lady Macbeth', 'Macbeth', 'The witches', 'Macduff'], 0),
          mcq('q5', 'Who becomes king at the end?', ['Malcolm', 'Macduff', 'Fleance', 'Banquo'], 0),
          mcq('q6', 'Who says “Is this a dagger which I see before me”?', ['Macbeth', 'Lady Macbeth', 'Banquo', 'Duncan'], 0),
        ],
      },
      {
        id: 'ge-macbeth-themes',
        title: 'Macbeth: themes & context',
        emoji: '👑',
        learn: [
          card('👑', 'Themes', 'Ambition: Macbeth admits he has only “vaulting ambition” to drive him. Guilt: both Macbeths are destroyed by it (“A little water clears us of this deed” turns into Lady Macbeth’s sleepwalking). The supernatural: the witches, the dagger and the ghost. Appearance and reality: “look like th’ innocent flower, / But be the serpent under’t.”', ['ambition', 'guilt', 'supernatural', 'appearance and reality'], 'macbeth-themes'),
          card('🏰', 'Context', 'Shakespeare wrote Macbeth around 1606 for King James I, who believed in witchcraft and was descended from Banquo. People believed in the Divine Right of Kings and the Great Chain of Being, so killing a king was a terrible crime against God and nature. The Gunpowder Plot of 1605 had just tried to kill James.', ['Divine Right of Kings', 'Great Chain of Being', 'regicide']),
        ],
        questions: [
          mcq('q1', 'Who tells Macbeth to “look like th’ innocent flower, / But be the serpent under’t”?', ['Lady Macbeth', 'The witches', 'Banquo', 'Duncan'], 0),
          mcq('q2', 'Which theme does “vaulting ambition” show?', ['Ambition', 'Love', 'Fate', 'Friendship'], 0),
          mcq('q3', 'Which king was Macbeth written for?', ['James I', 'Henry VIII', 'Elizabeth I', 'Charles I'], 0),
          tf('q4', 'Killing a king was seen as a crime against God because of the Divine Right of Kings.', true),
          mcq('q5', 'Lady Macbeth’s sleepwalking mainly shows…', ['Guilt', 'Ambition', 'Bravery', 'Kingship'], 0),
          mcq('q6', 'Killing a king is called…', ['Regicide', 'Treason', 'Tyranny', 'Prophecy'], 0),
        ],
      },
      {
        id: 'ge-romeo-plot',
        title: 'Romeo and Juliet: the plot',
        emoji: '💕',
        learn: [
          card('💕', 'Love at first sight', 'In Verona, the Montagues and Capulets are bitter enemies. The Prologue calls Romeo and Juliet “a pair of star-cross’d lovers”. Romeo gatecrashes the Capulet party and falls for Juliet. They meet at her balcony and are secretly married the next day by Friar Laurence.', ['feud', 'star-cross’d', 'Prologue'], 'romeo-plot'),
          card('⚔️', 'Tragedy', 'Tybalt kills Mercutio, who curses “A plague o’ both your houses!” Romeo kills Tybalt and is banished to Mantua. Juliet’s father orders her to marry Paris, so the Friar gives her a potion to fake her death. The message explaining the plan never reaches Romeo, who poisons himself at her tomb. Juliet wakes, sees him dead, and stabs herself. The families finally make peace.', ['banished', 'tragedy']),
        ],
        questions: [
          order('q1', 'Put the events in order', ['The Capulet party', 'The secret marriage', 'Mercutio and Tybalt die', 'Juliet takes the potion', 'Romeo and Juliet die']),
          mcq('q2', 'Who kills Mercutio?', ['Tybalt', 'Romeo', 'Paris', 'Benvolio'], 0),
          mcq('q3', 'Where is Romeo banished to?', ['Mantua', 'Verona', 'Venice', 'Padua'], 0),
          mcq('q4', 'Who says “A plague o’ both your houses!”?', ['Mercutio', 'Tybalt', 'Romeo', 'The Nurse'], 0),
          mcq('q5', 'Who secretly marries Romeo and Juliet?', ['Friar Laurence', 'The Nurse', 'Lord Capulet', 'Paris'], 0),
          tf('q6', 'At the end, the two families make peace.', true),
        ],
      },
      {
        id: 'ge-romeo-themes',
        title: 'Romeo and Juliet: themes & context',
        emoji: '⭐',
        learn: [
          card('⭐', 'Themes', 'Love: passionate and sudden (“My only love sprung from my only hate”). Conflict: the feud makes violence spread. Fate: the lovers are “star-cross’d”, and Romeo cries “O, I am fortune’s fool!” Youth and age: the young act on impulse, while the old try to control them. The Friar warns: “These violent delights have violent ends.”', ['love', 'conflict', 'fate'], 'romeo-themes'),
          card('📜', 'Context', 'Elizabethan society was patriarchal: fathers controlled their daughters and arranged their marriages, often for money or status. Juliet defying Lord Capulet would have shocked the audience. Many people believed the stars controlled their fate.', ['patriarchal', 'arranged marriage']),
        ],
        questions: [
          mcq('q1', '“O, I am fortune’s fool!” links most to…', ['Fate', 'Friendship', 'Religion', 'Money'], 0),
          mcq('q2', 'Who warns “These violent delights have violent ends”?', ['Friar Laurence', 'Lord Capulet', 'Mercutio', 'Juliet'], 0),
          mcq('q3', 'A society where men hold the power is…', ['Patriarchal', 'Democratic', 'Royalist', 'Romantic'], 0),
          tf('q4', 'In Elizabethan times, fathers often arranged their daughters’ marriages.', true),
          mcq('q5', '“My only love sprung from my only hate” shows love mixed with…', ['Conflict', 'Wealth', 'Religion', 'Comedy'], 0),
          mcq('q6', 'What does “star-cross’d” suggest?', ['Their fate is against them', 'They are lucky', 'They are astronomers', 'They are famous'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-eng-19c',
    title: '19th-century novel',
    stage: STAGE,
    description: 'A Christmas Carol and Frankenstein: plot, characters, themes, context and key quotations.',
    colour: '#2d6a4f',
    lessons: [
      {
        id: 'ge-carol-plot',
        title: 'A Christmas Carol: the plot',
        emoji: '👻',
        learn: [
          card('🕯️', 'Five staves', 'Charles Dickens published A Christmas Carol in 1843, divided into five “staves”. Stave 1: the miser Scrooge is visited by the ghost of his partner, Jacob Marley, in chains. Stave 2: the Ghost of Christmas Past shows his lonely childhood, kind Fezziwig, and Belle leaving him for his love of money. Stave 3: the Ghost of Christmas Present shows the poor but loving Cratchit family and Tiny Tim.', ['stave', 'Marley', 'Fezziwig', 'Tiny Tim'], 'carol-staves'),
          card('🎄', 'Redemption', 'Stave 4: the Ghost of Christmas Yet to Come shows people glad that a man has died, and Scrooge’s own neglected grave. Stave 5: Scrooge wakes on Christmas morning a changed man. He sends a prize turkey to the Cratchits, raises Bob’s wages, and becomes “a second father” to Tiny Tim.', ['redemption']),
        ],
        questions: [
          order('q1', 'Put the visits in order', ['Marley’s ghost', 'The Ghost of Christmas Past', 'The Ghost of Christmas Present', 'The Ghost of Christmas Yet to Come']),
          mcq('q2', 'Who was Scrooge’s old business partner?', ['Jacob Marley', 'Fezziwig', 'Bob Cratchit', 'Fred'], 0),
          mcq('q3', 'Who leaves Scrooge because he loves money more than her?', ['Belle', 'Fan', 'Mrs Cratchit', 'Martha'], 0),
          gap('q4', 'A Christmas Carol was published in ___', ['1843']),
          mcq('q5', 'What does Scrooge send the Cratchits on Christmas morning?', ['A prize turkey', 'A goose', 'A Christmas tree', 'Coal'], 0),
          mcq('q6', 'What are the chapters of A Christmas Carol called?', ['Staves', 'Acts', 'Cantos', 'Scenes'], 0),
        ],
      },
      {
        id: 'ge-carol-themes',
        title: 'A Christmas Carol: themes & context',
        emoji: '🎩',
        learn: [
          card('🏚️', 'Context', 'Victorian London had huge poverty. The 1834 Poor Law sent the poor to harsh workhouses. Some followed Thomas Malthus, who argued the population was too large. Dickens, who had worked in a factory as a child, wrote the book to persuade readers to help the poor.', ['Poor Law', 'workhouse', 'Malthus']),
          card('🎩', 'Scrooge’s transformation', 'At first Scrooge is “solitary as an oyster”, asks “Are there no prisons? Are there no workhouses?”, and says the poor should die and “decrease the surplus population”. The ghosts later throw his words back at him. By the end he promises: “I will honour Christmas in my heart, and try to keep it all the year.” Themes: social responsibility, redemption, family, and the spirit of Christmas.', ['social responsibility', 'redemption'], 'carol-change'),
        ],
        questions: [
          mcq('q1', '“Solitary as an oyster” suggests Scrooge is…', ['Isolated and closed off', 'Generous', 'Rich and happy', 'Brave'], 0),
          mcq('q2', 'Who used the phrase “surplus population” before Scrooge did?', ['Thomas Malthus’s followers', 'Queen Victoria', 'Bob Cratchit', 'Fezziwig'], 0),
          gap('q3', 'The Poor Law that set up harsh workhouses was passed in ___', ['1834']),
          mcq('q4', 'Why did Dickens write the novella?', ['To make readers care about the poor', 'To praise workhouses', 'To scare children', 'To describe the countryside'], 0),
          tf('q5', 'Scrooge asks “Are there no prisons? Are there no workhouses?” in Stave 1.', true),
          mcq('q6', 'Scrooge’s change from selfish to generous is his…', ['Redemption', 'Tragedy', 'Downfall', 'Prophecy'], 0),
        ],
      },
      {
        id: 'ge-frankenstein-plot',
        title: 'Frankenstein: the plot',
        emoji: '⚡',
        learn: [
          card('📨', 'A story within a story', 'Mary Shelley published Frankenstein in 1818. It is a frame narrative: the explorer Robert Walton writes letters to his sister about meeting Victor Frankenstein in the Arctic. Victor tells his story, and inside it the Creature tells his own.', ['frame narrative', 'Walton'], 'frankenstein-frame'),
          card('⚡', 'What happens', 'At university in Ingolstadt, Victor brings a creature to life, then flees in horror. Rejected by everyone, even the De Lacey family he secretly helps, the Creature turns to revenge: he kills Victor’s brother William, and the servant Justine is executed for it. He asks Victor for a female companion, but Victor destroys her. The Creature kills Clerval and Victor’s new wife Elizabeth. Victor chases him to the Arctic and dies; the Creature vows to end his own life.', ['Ingolstadt', 'De Lacey', 'revenge']),
        ],
        questions: [
          mcq('q1', 'Who writes the letters that frame the story?', ['Robert Walton', 'Victor Frankenstein', 'The Creature', 'Elizabeth'], 0),
          mcq('q2', 'Who is executed for William’s murder?', ['Justine', 'Elizabeth', 'Clerval', 'Victor'], 0),
          mcq('q3', 'Where does Victor create the Creature?', ['Ingolstadt', 'Geneva', 'London', 'The Arctic'], 0),
          mcq('q4', 'Which family does the Creature learn from while hiding?', ['The De Laceys', 'The Frankensteins', 'The Cratchits', 'The Waltons'], 0),
          gap('q5', 'Frankenstein was published in ___', ['1818']),
          mcq('q6', 'Why does the Creature kill Elizabeth?', ['Revenge for Victor destroying his companion', 'An accident', 'She attacked him', 'Walton ordered it'], 0),
        ],
      },
      {
        id: 'ge-frankenstein-themes',
        title: 'Frankenstein: themes & context',
        emoji: '🧪',
        learn: [
          card('🧪', 'Themes', 'Dangerous knowledge: Victor warns Walton, “Learn from me… how dangerous is the acquirement of knowledge.” Responsibility: Victor abandons his creation. Isolation: both Victor and the Creature end up alone. Nature versus nurture: the Creature says, “I was benevolent and good; misery made me a fiend.”', ['dangerous knowledge', 'responsibility', 'isolation', 'nature versus nurture'], 'frankenstein-themes'),
          card('🌩️', 'Context', 'Frankenstein is a Gothic novel, full of horror, storms and wild landscapes. It reflects Romanticism, which valued nature and emotion over cold reason. Scientists were experimenting with galvanism, using electricity to make dead frogs’ legs twitch.', ['Gothic', 'Romanticism', 'galvanism']),
        ],
        questions: [
          mcq('q1', '“I was benevolent and good; misery made me a fiend” links to…', ['Nature versus nurture', 'Love', 'Religion', 'Money'], 0),
          mcq('q2', 'Victor’s warning to Walton is about…', ['The danger of knowledge and ambition', 'Sailing', 'Marriage', 'Money'], 0),
          mcq('q3', 'Using electricity to make dead muscles move was called…', ['Galvanism', 'Romanticism', 'Alchemy', 'Gothic'], 0),
          mcq('q4', 'Frankenstein is an example of which genre?', ['Gothic', 'Comedy', 'Romance', 'Western'], 0),
          tf('q5', 'Victor takes care of the Creature after bringing it to life.', false, 'He abandons it, which is why responsibility is a key theme.'),
          mcq('q6', 'Romanticism valued…', ['Nature and emotion', 'Factories and machines', 'Cold logic only', 'City life'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-eng-inspector',
    title: 'An Inspector Calls',
    stage: STAGE,
    description: 'J. B. Priestley’s play: what each Birling did to Eva Smith, the themes, and the 1912 and 1945 context.',
    colour: '#34495e',
    lessons: [
      {
        id: 'ge-inspector-plot',
        title: 'The plot: who did what',
        emoji: '🕵️',
        learn: [
          card('🥂', 'The set-up', 'Written in 1945 but set in 1912, the play opens with the wealthy Birling family celebrating Sheila’s engagement to Gerald Croft. Inspector Goole arrives: a young woman, Eva Smith, has died in the infirmary after drinking disinfectant. He questions each of them in turn.', ['Inspector Goole', 'Eva Smith']),
          card('🔗', 'A chain of events', 'Mr Birling sacked Eva for leading a strike for higher wages. Sheila had her sacked from Milwards out of jealousy. Gerald kept her as his mistress (calling herself Daisy Renton), then ended it. Mrs Birling refused her help from a charity when she was pregnant. Eric got her pregnant and stole money from the firm to support her. In the final twist, a phone call says a girl has just died and an inspector is on his way.', ['chain of events'], 'inspector-chain'),
        ],
        questions: [
          order('q1', 'Put the Birlings’ actions in the order they happened to Eva', ['Mr Birling sacks her', 'Sheila gets her sacked from Milwards', 'Gerald ends their affair', 'Mrs Birling refuses her charity']),
          mcq('q2', 'Why did Mr Birling sack Eva?', ['She led a strike for higher wages', 'She stole money', 'She was rude to Sheila', 'She was late'], 0),
          mcq('q3', 'Why did Sheila get Eva sacked?', ['Jealousy', 'Eva stole a dress', 'Eva was rude to Mrs Birling', 'Eva was ill'], 0),
          mcq('q4', 'Which name did Eva use with Gerald?', ['Daisy Renton', 'Edna', 'Sheila Croft', 'Mary Smith'], 0),
          mcq('q5', 'Who refused Eva help from a charity?', ['Mrs Birling', 'Sheila', 'Gerald', 'Edna'], 0),
          tf('q6', 'The play is set in 1912 but was written in 1945.', true),
        ],
      },
      {
        id: 'ge-inspector-themes',
        title: 'Themes & context',
        emoji: '⚖️',
        learn: [
          card('⚖️', 'Social responsibility', 'Priestley was a socialist. Through the Inspector he argues that we are all responsible for each other, while Mr Birling believes a man should look after himself and his family only. Class and gender also matter: Eva is treated badly because she is a poor working-class woman.', ['social responsibility', 'socialism', 'capitalism', 'class']),
          card('👨‍👩‍👧', 'Old versus young', 'The older Birlings refuse to change. Sheila and Eric accept their guilt and learn. Dramatic irony mocks Mr Birling: in 1912 he calls the Titanic “unsinkable” and says there will be no war, but the 1945 audience knew both were wrong, so they distrust his other views too.', ['dramatic irony', 'generations'], 'inspector-generations'),
        ],
        questions: [
          mcq('q1', 'Priestley’s political views were…', ['Socialist', 'Capitalist', 'Royalist', 'Fascist'], 0),
          mcq('q2', 'Which characters accept responsibility and change?', ['Sheila and Eric', 'Mr and Mrs Birling', 'Gerald and Mr Birling', 'Mrs Birling and Gerald'], 0),
          mcq('q3', 'Mr Birling calling the Titanic “unsinkable” is an example of…', ['Dramatic irony', 'A metaphor', 'Alliteration', 'A soliloquy'], 0),
          mcq('q4', 'What is the main message of the play?', ['We are all responsible for each other', 'Money is most important', 'Look after yourself only', 'Never trust the police'], 0),
          tf('q5', 'The audience in 1945 knew that Mr Birling’s predictions were wrong.', true),
          mcq('q6', 'Mr Birling’s belief that people should look after themselves is closest to…', ['Capitalism', 'Socialism', 'Feminism', 'Romanticism'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-eng-poetry',
    title: 'Power and Conflict poetry',
    stage: STAGE,
    description: 'The 15 anthology poems in two groups, and how to compare poems and tackle unseen poetry.',
    colour: '#c0392b',
    lessons: [
      {
        id: 'ge-poems-power',
        title: 'Power of humans & nature',
        emoji: '🗿',
        learn: [
          card('🗿', 'Human power', 'Ozymandias (Shelley): a broken statue of an arrogant king shows that power doesn’t last. London (Blake): the speaker walks through London and sees suffering caused by the powerful; people are trapped by “mind-forg’d manacles”. My Last Duchess (Browning): a dramatic monologue in which a controlling Duke hints that he had his wife killed.', ['Ozymandias', 'London', 'My Last Duchess', 'dramatic monologue'], 'poems-power'),
          card('🌊', 'Nature and identity', 'The Prelude extract (Wordsworth): a boy steals a boat and is terrified by a huge mountain, showing nature’s power. Storm on the Island (Heaney): islanders face a violent storm. Tissue (Dharker): paper and buildings show that human power is fragile. Checking Out Me History (Agard): a speaker rejects the narrow history he was taught and claims his Caribbean identity.', ['The Prelude', 'Storm on the Island', 'Tissue', 'Checking Out Me History']),
        ],
        questions: [
          mcq('q1', 'Which poem shows a ruler’s statue broken in the desert?', ['Ozymandias', 'London', 'Tissue', 'Exposure'], 0),
          mcq('q2', 'Who wrote London?', ['William Blake', 'Percy Shelley', 'Robert Browning', 'William Wordsworth'], 0),
          mcq('q3', 'My Last Duchess is a dramatic monologue. That means…', ['One character speaks to a silent listener', 'Two characters argue', 'It has no speaker', 'It’s sung by a choir'], 0),
          mcq('q4', 'In The Prelude extract, what frightens the boy?', ['A huge mountain', 'A storm at sea', 'A soldier', 'A statue'], 0),
          mcq('q5', 'Which poem is about identity and the history the speaker was taught?', ['Checking Out Me History', 'Ozymandias', 'Storm on the Island', 'My Last Duchess'], 0),
          tf('q6', 'Ozymandias suggests that human power doesn’t last.', true),
        ],
      },
      {
        id: 'ge-poems-conflict',
        title: 'Poems of war & conflict',
        emoji: '🎖️',
        learn: [
          card('🐎', 'Older war poems', 'The Charge of the Light Brigade (Tennyson, 1854): a fast, galloping rhythm celebrates the bravery of soldiers who rode “into the valley of Death” after a mistaken order in the Crimean War. Exposure (Owen, First World War): soldiers freeze in the trenches; the weather is the real enemy, and the repeated line “But nothing happens” shows the boredom and despair.', ['The Charge of the Light Brigade', 'Exposure']),
          card('🎖️', 'Modern conflict poems', 'Bayonet Charge (Hughes): one soldier’s terror as he charges. Remains (Armitage): a soldier can’t forget a man he shot; it shows PTSD. Poppies (Weir): a mother’s grief as her son leaves for war. War Photographer (Duffy): a photographer back home in England, troubled by the suffering he records. Kamikaze (Garland): a pilot who turns back and is rejected by his family. The Emigrée (Rumens): memories of a city the speaker had to leave.', ['Bayonet Charge', 'Remains', 'Poppies', 'War Photographer', 'Kamikaze', 'The Emigrée'], 'poems-conflict'),
        ],
        questions: [
          mcq('q1', 'Which poem has the repeated line “But nothing happens”?', ['Exposure', 'Remains', 'Poppies', 'Kamikaze'], 0),
          mcq('q2', 'Which war is The Charge of the Light Brigade about?', ['The Crimean War', 'The First World War', 'The Second World War', 'The Iraq War'], 0),
          mcq('q3', 'Which poem explores a soldier’s PTSD after shooting a man?', ['Remains', 'Ozymandias', 'Tissue', 'The Prelude'], 0),
          mcq('q4', 'Which poem is told from a grieving mother’s point of view?', ['Poppies', 'Bayonet Charge', 'War Photographer', 'Exposure'], 0),
          match('q5', 'Match the poem to its poet', [
            ['Exposure', 'Wilfred Owen'],
            ['The Charge of the Light Brigade', 'Alfred Tennyson'],
            ['Ozymandias', 'Percy Shelley'],
          ]),
          mcq('q6', 'In Exposure, what is the real enemy?', ['The weather', 'The generals', 'The enemy army', 'Hunger'], 0),
        ],
      },
      {
        id: 'ge-compare',
        title: 'Comparing & unseen poems',
        emoji: '⚖️',
        learn: [
          card('⚖️', 'Comparing two poems', 'In the anthology question you compare a named poem with one you choose. Plan by finding similarities and differences in what the poems say (ideas) and how they say it (language, structure, form). Use connectives: “Similarly…”, “In contrast…”, “Whereas…”. Context counts too.', ['compare', 'form', 'connectives'], 'compare-venn'),
          card('🔍', 'Unseen poetry', 'You’ll also analyse a poem you’ve never seen, then compare it with a second unseen poem. Read it twice. Ask: what is it about? How does it make me feel? Which words and images stand out? How is it organised: stanzas, rhyme, rhythm, a change of tone? Always explain the effect on the reader.', ['unseen', 'tone', 'effect']),
        ],
        questions: [
          mcq('q1', 'Which connective shows a difference?', ['In contrast', 'Similarly', 'Likewise', 'Also'], 0),
          mcq('q2', 'Which connective shows a similarity?', ['Similarly', 'Whereas', 'However', 'On the other hand'], 0),
          mcq('q3', 'Form means…', ['The type and shape of the poem, e.g. sonnet or monologue', 'The poet’s name', 'The date it was written', 'The title'], 0),
          tf('q4', 'In the anthology question, you choose the second poem yourself.', true),
          mcq('q5', 'A sudden change of mood in a poem is a change of…', ['Tone', 'Rhyme', 'Form', 'Title'], 0),
          mcq('q6', 'What should every point about a quotation include?', ['Its effect on the reader', 'How long the poem is', 'The poet’s birthday', 'The page number'], 0),
        ],
      },
    ],
  },
];
