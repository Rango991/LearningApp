import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// More KS3 English, filling gaps found by checking the app against Gosforth East
// Middle School's Year 7-8 English long-term plans: language through time, PETAL
// paragraphs, Gothic and detective fiction, Animal Farm and Of Mice and Men.
// Books still in copyright are described in our own words, not quoted.
// Question ids are stored in progress data, so never change an existing id.

const Y7 = 'Year 7';
const Y89 = 'Years 8–9';

export const englishKs3: Unit[] = [
  {
    id: 'eng-language-time',
    title: 'English through time',
    stage: Y7,
    description: 'Where English came from, how it keeps changing, and writing PETAL paragraphs.',
    colour: '#c2417a',
    lessons: [
      {
        id: 'elt-old',
        title: 'Old & Middle English',
        emoji: '📜',
        learn: [
          card('⚔️', 'Old English', 'English began around 450 AD, when Angles, Saxons and Jutes arrived from northern Europe. Their language, Old English, looks almost foreign to us now; the poem Beowulf is written in it. Vikings later added everyday words like sky, egg, knife and they.', ['Old English', 'Anglo-Saxons', 'Vikings'], 'english-timeline'),
          card('🏰', 'Middle English', 'After the Norman Conquest in 1066, the ruling classes spoke French, so thousands of French words came into English, especially for law, food and power: judge, court, beef, pork, castle. This mix is Middle English. Geoffrey Chaucer wrote The Canterbury Tales in it around 1400.', ['Middle English', 'Normans', 'Chaucer']),
          card('🖨️', 'The printing press', 'In 1476 William Caxton set up England’s first printing press. Printed books spread the same spellings across the country, so English began to be standardised.', ['printing press', 'Caxton', 'standardised']),
        ],
        questions: [
          order('q1', 'Put these in time order', ['Old English', 'Middle English', 'Shakespeare’s English', 'Modern English']),
          mcq('q2', 'Who brought lots of French words into English?', ['The Normans', 'The Vikings', 'The Romans', 'The Victorians'], 0),
          mcq('q3', 'Which famous poem is written in Old English?', ['Beowulf', 'The Canterbury Tales', 'Romeo and Juliet', 'Oliver Twist'], 0),
          match('q4', 'Match the word to the language it came from', [
            ['sky', 'Old Norse (Vikings)'],
            ['judge', 'French (Normans)'],
          ]),
          gap('q5', 'Chaucer wrote The ___ Tales.', ['Canterbury']),
          mcq('q6', 'How did the printing press change English?', ['It spread the same spellings everywhere', 'It invented the alphabet', 'It made English disappear', 'It brought in Viking words'], 0),
          tf('q7', 'English has stayed the same since 450 AD.', false),
        ],
      },
      {
        id: 'elt-modern',
        title: 'Shakespeare to slang',
        emoji: '💬',
        learn: [
          card('🎭', 'Shakespeare and the dictionary', 'Shakespeare (around 1600) wrote in Early Modern English, with words like thee, thou and doth. Many words and phrases are first recorded in his plays, such as swagger and eyeball. In 1755 Samuel Johnson published a famous dictionary, which helped fix spellings and meanings.', ['Early Modern English', 'Shakespeare', 'dictionary']),
          card('🌍', 'Borrowed and new words', 'English borrows words from all over the world: pyjamas and shampoo from Hindi and Urdu, chocolate from Nahuatl (via Spanish), tea from Chinese. New inventions bring new words (selfie, emoji, podcast), and meanings drift: nice once meant foolish.', ['loan words', 'neologism'], 'loan-words'),
          card('🗣️', 'Accent, dialect and Standard English', 'An accent is how words sound. A dialect also has its own words and grammar: in Geordie, a child is a bairn and canny means good. Standard English is the version used in formal writing and exams. Slang is very informal language that changes fast.', ['accent', 'dialect', 'Standard English', 'slang']),
        ],
        questions: [
          match('q1', 'Match the word to where it came from', [
            ['shampoo', 'Hindi'],
            ['chocolate', 'Nahuatl, via Spanish'],
            ['tea', 'Chinese'],
          ]),
          mcq('q2', 'What is the difference between an accent and a dialect?', ['A dialect has its own words and grammar, not just sounds', 'There is no difference', 'An accent is written, a dialect is spoken', 'Only cities have dialects'], 0),
          mcq('q3', 'Which is a new word that came from technology?', ['selfie', 'castle', 'sky', 'judge'], 0),
          tf('q4', 'Word meanings can change over time.', true, 'Nice once meant foolish or silly.'),
          gap('q5', 'In Geordie dialect, a child is a ___.', ['bairn']),
          mcq('q6', 'When should you use Standard English?', ['In formal writing and exams', 'Only when talking to friends', 'Never', 'Only in poems'], 0),
          gap('q7', 'Samuel Johnson published his dictionary in ___.', ['1755']),
        ],
      },
      {
        id: 'elt-petal',
        title: 'PETAL paragraphs',
        emoji: '🌸',
        learn: [
          card('🌸', 'What PETAL stands for', 'PETAL helps you write about a text. Point: answer the question. Evidence: a short quotation. Technique: name the method the writer uses. Analysis: explain the effect on the reader, zooming in on key words. Link: tie it back to the question or the writer’s message.', ['point', 'evidence', 'technique', 'analysis', 'link'], 'petal'),
          card('✍️', 'An example', 'The writer makes the storm seem threatening (P). She writes that the wind “howled like a wolf” (E). This simile (T) compares the wind to a hunting animal, so the reader feels the characters are being chased; “howled” suggests pain and danger (A). This builds the sense of fear that runs through the chapter (L).', ['quotation', 'effect']),
          card('🔎', 'Top tips', 'Keep quotations short: a few words you can pick apart is better than a whole sentence. Analysis is the most important part, so spend the most time on it. Use phrases like “this suggests”, “this makes the reader feel” and “the word … implies”.', ['embedded quotation']),
        ],
        questions: [
          order('q1', 'Put the parts of a PETAL paragraph in order', ['Point', 'Evidence', 'Technique', 'Analysis', 'Link']),
          mcq('q2', 'What does the T in PETAL stand for?', ['Technique', 'Topic', 'Theme', 'Title'], 0),
          mcq('q3', 'Which part of PETAL explains the effect on the reader?', ['Analysis', 'Point', 'Evidence', 'Link'], 0),
          tf('q4', 'Long quotations are always better than short ones.', false, 'Short quotations are easier to analyse closely.'),
          mcq('q5', 'Which phrase is useful for analysis?', ['This suggests that…', 'Once upon a time…', 'In conclusion, the end.', 'I think the book is good.'], 0),
          match('q6', 'Match each sentence to its part of PETAL', [
            ['The wind “howled like a wolf”.', 'Evidence'],
            ['This simile compares the wind to a predator.', 'Technique'],
          ]),
        ],
      },
    ],
  },
  {
    id: 'eng-gothic-detective',
    title: 'Gothic & detective fiction',
    stage: Y89,
    description: 'The features of Gothic stories, Sherlock Holmes and how detective stories work, and building suspense in your own writing.',
    colour: '#5a3d7a',
    lessons: [
      {
        id: 'eg-gothic',
        title: 'Gothic literature',
        emoji: '🦇',
        learn: [
          card('🏚️', 'What makes a story Gothic', 'Gothic fiction began in 1764 with The Castle of Otranto. It mixes horror and romance. Look for gloomy settings (castles, ruins, graveyards, storms), the supernatural, mystery and secrets, isolated characters, powerful villains, and strong emotions like terror and obsession.', ['Gothic', 'supernatural', 'setting'], 'gothic-features'),
          card('📚', 'Famous Gothic novels', 'Mary Shelley’s Frankenstein (1818) asks what happens when science goes too far. Bram Stoker’s Dracula (1897) brings an ancient evil into modern Victorian London. Both tap into the fears of their time: about science, religion, outsiders and the unknown.', ['Frankenstein', 'Dracula', 'context']),
          card('⛈️', 'Pathetic fallacy', 'Gothic writers often use the weather and setting to reflect feelings: pathetic fallacy. A storm breaking just as something terrible happens makes the scene feel even more threatening.', ['pathetic fallacy']),
        ],
        questions: [
          mcq('q1', 'Which setting is most typical of Gothic fiction?', ['A ruined castle in a storm', 'A sunny beach', 'A busy shopping centre', 'A school sports day'], 0),
          match('q2', 'Match the novel to its writer', [
            ['Frankenstein', 'Mary Shelley'],
            ['Dracula', 'Bram Stoker'],
          ]),
          gap('q3', 'Using weather to reflect a character’s feelings is called pathetic ___.', ['fallacy']),
          mcq('q4', 'Which is NOT a usual feature of Gothic fiction?', ['Cheerful, ordinary everyday life', 'The supernatural', 'Mystery and secrets', 'Isolated characters'], 0),
          tf('q5', 'Frankenstein explores fears about science going too far.', true),
          mcq('q6', 'Gothic fiction began with which novel in 1764?', ['The Castle of Otranto', 'Dracula', 'Oliver Twist', 'Animal Farm'], 0),
        ],
      },
      {
        id: 'eg-detective',
        title: 'Detective fiction',
        emoji: '🔍',
        learn: [
          card('🕵️', 'Sherlock Holmes', 'Arthur Conan Doyle’s first Sherlock Holmes story came out in 1887. Holmes solves crimes by deduction: noticing tiny details and reasoning from them. His friend Dr Watson tells the stories, so we see Holmes through admiring eyes and only learn the answer at the end.', ['Sherlock Holmes', 'deduction', 'narrator'], 'deduction'),
          card('🧩', 'How detective stories work', 'There is a crime, a detective, suspects and clues. Writers plant red herrings (false clues) to mislead the reader, and save the reveal for the end, when the detective explains how it all fits together. Edgar Allan Poe wrote one of the first detective stories in 1841.', ['red herring', 'clue', 'reveal']),
          card('🌫️', 'Victorian context', 'The Holmes stories are set in late Victorian London: foggy streets, gas lamps and a growing city where crime felt like a real threat. The unsolved Jack the Ripper murders of 1888 made readers fascinated by detectives who always catch the criminal.', ['Victorian', 'context']),
        ],
        questions: [
          mcq('q1', 'Who narrates most Sherlock Holmes stories?', ['Dr Watson', 'Sherlock Holmes', 'The criminal', 'Mrs Hudson'], 0),
          mcq('q2', 'What is a red herring?', ['A false clue that misleads the reader', 'The real murderer', 'A type of weapon', 'The detective’s pet'], 0),
          gap('q3', 'Working out the answer by reasoning from small details is called ___.', ['deduction']),
          tf('q4', 'In detective stories, the solution is usually revealed at the very start.', false, 'The reveal is saved for the end.'),
          mcq('q5', 'Why does having Watson tell the story help build mystery?', ['We only know what Watson knows, so the answer stays hidden', 'Watson is the criminal', 'He explains everything at the start', 'He is a police officer'], 0),
          gap('q6', 'Sherlock Holmes was created by Arthur Conan ___.', ['Doyle']),
          mcq('q7', 'Where are the Sherlock Holmes stories mostly set?', ['Victorian London', 'Modern New York', 'A Tudor castle', 'Ancient Rome'], 0),
        ],
      },
      {
        id: 'eg-suspense',
        title: 'Building suspense',
        emoji: '😱',
        learn: [
          card('📈', 'Story structure', 'Most stories follow a shape: an opening that sets the scene, rising action as problems build, a climax at the most tense moment, falling action, and a resolution. Suspense comes from making the reader wait for answers.', ['climax', 'rising action', 'resolution'], 'story-arc'),
          card('🛠️', 'Suspense techniques', 'Short sentences speed up the pace. An ellipsis (…) leaves things unsaid. Foreshadowing hints at what’s coming. Delay the reveal by describing small details slowly. End a chapter on a cliffhanger, and use the senses, especially sound in the dark.', ['short sentences', 'ellipsis', 'foreshadowing', 'cliffhanger']),
        ],
        questions: [
          order('q1', 'Put the parts of a story in order', ['Opening', 'Rising action', 'Climax', 'Falling action', 'Resolution']),
          mcq('q2', 'What is foreshadowing?', ['Hinting at what will happen later', 'Describing the weather', 'Ending the story', 'Using long sentences'], 0),
          mcq('q3', 'Why do writers use short sentences in tense moments?', ['To speed up the pace and build tension', 'To make the story longer', 'Because they ran out of words', 'To slow everything down'], 0),
          gap('q4', 'The most tense moment of a story is the ___.', ['climax']),
          tf('q5', 'A cliffhanger answers every question at the end of a chapter.', false, 'It leaves the reader desperate to know what happens next.'),
          mcq('q6', 'Which sentence builds the most suspense?', ['The door creaked. Silence. Then… footsteps.', 'It was a nice day and we had lunch.', 'The end.', 'I went to the shop to buy some bread.'], 0),
        ],
      },
    ],
  },
  {
    id: 'eng-novels',
    title: 'Novels with a message',
    stage: Y89,
    description: 'Animal Farm and allegory, Of Mice and Men and its context, and comparing texts.',
    colour: '#3a7d44',
    lessons: [
      {
        id: 'enm-animal-farm',
        title: 'Animal Farm & allegory',
        emoji: '🐷',
        learn: [
          card('🐷', 'The story', 'In George Orwell’s Animal Farm (1945), the animals of Manor Farm overthrow their cruel farmer and promise that all animals will be equal. Slowly, the pigs take control. Their leader, Napoleon, rules by fear and lies, the rules painted on the barn are secretly changed, and by the end the pigs are just like the humans they replaced.', ['Animal Farm', 'Orwell']),
          card('🎭', 'An allegory', 'An allegory is a story with a hidden second meaning. Animal Farm retells the Russian Revolution of 1917 and Stalin’s rule. Old Major stands for Marx and Lenin, Napoleon for Stalin, Snowball for Trotsky, Squealer for propaganda, and Boxer for the hard-working ordinary people.', ['allegory', 'Russian Revolution', 'Stalin'], 'allegory-map'),
          card('📢', 'Big ideas', 'Power corrupts: the pigs become what they fought against. Propaganda: Squealer twists the truth until the animals doubt their own memories. It’s also a satire, mocking those in power to show what is wrong.', ['power', 'propaganda', 'satire']),
        ],
        questions: [
          mcq('q1', 'What is an allegory?', ['A story with a hidden second meaning', 'A true story', 'A poem about animals', 'A type of play'], 0),
          match('q2', 'Match the character to who they represent', [
            ['Napoleon', 'Stalin'],
            ['Snowball', 'Trotsky'],
            ['Boxer', 'Hard-working ordinary people'],
          ]),
          mcq('q3', 'What job does Squealer do for the pigs?', ['Spreads propaganda and twists the truth', 'Ploughs the fields', 'Leads the rebellion', 'Guards the farm'], 0),
          gap('q4', 'Animal Farm was written by George ___.', ['Orwell']),
          tf('q5', 'By the end, the pigs behave just like the humans they replaced.', true),
          mcq('q6', 'Which historical event does Animal Farm retell?', ['The Russian Revolution', 'The Battle of Hastings', 'The Great Fire of London', 'The moon landing'], 0),
          mcq('q7', 'Which theme matches the idea that “power corrupts”?', ['The pigs grow greedy and cruel once they’re in charge', 'The animals plant crops', 'The weather is bad', 'The farm gets a new name'], 0),
        ],
      },
      {
        id: 'enm-mice-men',
        title: 'Of Mice and Men',
        emoji: '🌾',
        learn: [
          card('🌾', 'The story', 'In John Steinbeck’s Of Mice and Men (1937), two ranch workers, George and Lennie, travel together looking for work in California. Lennie is very strong but has a learning disability, and George looks after him. They share a dream of owning their own small farm, but the story ends in tragedy.', ['Steinbeck', 'George', 'Lennie']),
          card('🌪️', 'Context', 'It’s set during the Great Depression of the 1930s, when millions in America lost their jobs. The Dust Bowl drought drove farmers off their land. Itinerant (travelling) workers moved from ranch to ranch, usually alone. Many chased the American Dream: the idea that anyone could succeed with hard work.', ['Great Depression', 'Dust Bowl', 'American Dream', 'itinerant'], 'depression-context'),
          card('💔', 'Themes', 'Loneliness: Crooks is shut out because he is Black, Candy fears being useless as he gets old, and Curley’s wife (never given a name) is lonely and ignored. Dreams: almost everyone has one, and almost none come true. Friendship: George and Lennie’s bond is rare in that world.', ['loneliness', 'dreams', 'friendship']),
        ],
        questions: [
          mcq('q1', 'When is Of Mice and Men set?', ['The Great Depression of the 1930s', 'Victorian London', 'The Second World War', 'Medieval England'], 0),
          mcq('q2', 'What do George and Lennie dream of?', ['Owning their own small farm', 'Becoming rich in the city', 'Joining the army', 'Sailing to England'], 0),
          gap('q3', 'Of Mice and Men was written by John ___.', ['Steinbeck']),
          mcq('q4', 'What does “itinerant” mean?', ['Travelling from place to place for work', 'Very rich', 'Living in a city', 'Owning a ranch'], 0),
          tf('q5', 'Curley’s wife is never given a name.', true, 'This shows how little the men think of her.'),
          match('q6', 'Match the character to why they are lonely', [
            ['Crooks', 'Shut out because he is Black'],
            ['Candy', 'Old and afraid of being useless'],
          ]),
          mcq('q7', 'What is the American Dream?', ['The idea that anyone can succeed with hard work', 'A type of farm', 'A song', 'A ranch in California'], 0),
        ],
      },
      {
        id: 'enm-compare',
        title: 'Context & comparing texts',
        emoji: '⚖️',
        learn: [
          card('🕰️', 'Why context matters', 'Context is when and where a text was written, and what was going on. It shapes the meaning: Animal Farm makes more sense once you know about Stalin, and Of Mice and Men once you know about the Depression. Good answers link a writer’s choices to their context.', ['context']),
          card('🔀', 'Comparing', 'To compare texts or characters, look for similarities and differences in theme, character, language and structure. For example, Tybalt in Romeo and Juliet and Curley in Of Mice and Men are both aggressive young men who pick fights to prove themselves.', ['compare', 'similarity', 'difference'], 'compare-connectives'),
        ],
        questions: [
          mcq('q1', 'What is context?', ['When and where a text was written, and what was happening', 'The main character', 'The last chapter', 'The title'], 0),
          match('q2', 'Similarity or difference connective?', [
            ['Similarly', 'Similarity'],
            ['Whereas', 'Difference'],
          ]),
          mcq('q3', 'Which two characters are both aggressive young men who pick fights?', ['Tybalt and Curley', 'Boxer and Lennie', 'Watson and George', 'Juliet and Candy'], 0),
          tf('q4', 'Good answers link a writer’s choices to their context.', true),
          mcq('q5', 'Which sentence compares two texts?', ['Both writers show how power can corrupt, but Orwell uses animals whereas Shakespeare uses real people.', 'Animal Farm is about pigs.', 'I enjoyed reading this book.', 'The end of the novel is sad.'], 0),
          gap('q6', 'A connective that shows two things are alike is “___”.', ['similarly', 'likewise', 'also']),
        ],
      },
    ],
  },
  {
    id: 'eng-narrative',
    title: 'Writing stories',
    stage: Y89,
    description: 'Gripping openings, showing character through action and dialogue, and shaping a story to a strong ending.',
    colour: '#d9480f',
    lessons: [
      {
        id: 'enw-openings',
        title: 'Gripping openings',
        emoji: '🎣',
        learn: [
          card('🎣', 'Hook the reader', 'Start in the middle of the action, with a line of speech, a mysterious statement, or one vivid detail. Avoid “One day I woke up…”. “The letter had been under the door for three days before anyone dared to open it” makes the reader ask questions.', ['hook', 'in medias res'], 'story-arc'),
          card('🌫️', 'Setting the scene', 'Show the setting through a character’s senses rather than listing what’s there. Choose a few precise details: the flickering strip light, the smell of bleach, the squeak of trainers. Use the weather or setting to hint at the mood (pathetic fallacy).', ['setting', 'senses'], 'five-senses'),
        ],
        questions: [
          mcq('q1', 'Which is the most gripping opening?', ['“Don’t open it,” she whispered, but it was too late.', 'One day I woke up and had breakfast.', 'This is a story about a girl.', 'It was a normal day.'], 0),
          mcq('q2', 'Starting in the middle of the action is called…', ['In medias res', 'A cliffhanger', 'Foreshadowing', 'A flashback'], 0),
          tf('q3', 'Listing everything in a room is the best way to describe it.', false, 'A few precise details work better.'),
          mcq('q4', 'Using the weather to hint at a mood is…', ['Pathetic fallacy', 'Alliteration', 'Onomatopoeia', 'A simile'], 0),
          mcq('q5', 'Why open with a mystery?', ['To make the reader ask questions and keep reading', 'To confuse the teacher', 'To save words', 'To end quickly'], 0),
          gap('q6', 'Describing smells, sounds and textures uses the ___.', ['senses']),
        ],
      },
      {
        id: 'enw-character',
        title: 'Characters & dialogue',
        emoji: '🗨️',
        learn: [
          card('🧍', 'Show, don’t tell', 'Instead of “Sam was nervous”, show it: “Sam picked at the skin around his thumbnail and kept glancing at the door.” The reader works out the feeling, which is more powerful.', ['show, don’t tell'], 'show-dont-tell'),
          card('🗨️', 'Dialogue that works', 'Use speech to reveal character and move the story on, not for small talk. Punctuate it properly: a new line for each new speaker, with punctuation inside the speech marks. Swap “said” for “muttered” or “snapped” sometimes, but don’t overdo it.', ['dialogue', 'speech marks']),
        ],
        questions: [
          mcq('q1', 'Which sentence shows rather than tells?', ['Her hands shook as she reached for the handle.', 'She was scared.', 'She felt very scared.', 'She was quite frightened.'], 0),
          mcq('q2', 'Which is punctuated correctly?', ['“Leave me alone,” snapped Mia.', '“Leave me alone” snapped Mia.', '“Leave me alone”, snapped Mia.', 'Leave me alone, “snapped Mia.”'], 0),
          tf('q3', 'Each new speaker starts on a new line.', true),
          mcq('q4', 'Good dialogue should…', ['Reveal character or move the story on', 'Be about the weather', 'Repeat what the narrator said', 'Fill space'], 0),
          mcq('q5', '“Sam was nervous” is an example of…', ['Telling', 'Showing', 'Dialogue', 'Setting'], 0),
          gap('q6', 'The rule is: show, don’t ___.', ['tell']),
        ],
      },
      {
        id: 'enw-endings',
        title: 'Structure & endings',
        emoji: '🔚',
        learn: [
          card('🧭', 'Shape your story', 'Plan the beginning, a problem that builds to a climax, and an ending. Keep to one or two characters and a short time span: a great short story is one moment, not a whole life.', ['plan', 'climax'], 'story-arc'),
          card('🔚', 'Strong endings', 'Avoid “and then I woke up and it was all a dream”. Try a cyclical ending that returns to the opening image, a twist, or an ending that leaves a question. Make sure the character has changed or learned something.', ['cyclical ending', 'twist']),
        ],
        questions: [
          tf('q1', '“It was all a dream” is a strong ending.', false),
          mcq('q2', 'A cyclical ending…', ['Returns to the opening image', 'Starts a new story', 'Has no ending', 'Lists events'], 0),
          mcq('q3', 'A good short story usually covers…', ['One key moment or a short time', 'A whole life', 'Lots of characters', 'Everything that happened'], 0),
          mcq('q4', 'What is a twist ending?', ['A surprise the reader didn’t expect', 'A happy ending', 'A sad ending', 'A summary'], 0),
          tf('q5', 'By the end, the main character has often changed or learned something.', true),
          order('q6', 'Put the parts of a story plan in order', ['Opening', 'Problem builds', 'Climax', 'Ending']),
        ],
      },
    ],
  },
  {
    id: 'eng-poetry',
    title: 'Reading poems',
    stage: Y89,
    description: 'Working out what a poem is about, its imagery and sounds, and how its form and structure shape the meaning.',
    colour: '#7048e8',
    lessons: [
      {
        id: 'enp-meaning',
        title: 'What is the poem about?',
        emoji: '📖',
        learn: [
          card('📖', 'First reading', 'Read the poem twice: once for sense and once slowly. Ask: who is speaking (the speaker), who to, and what is happening? What is the mood or tone: angry, tender, regretful, joyful?', ['speaker', 'tone', 'mood'], 'poem-questions'),
          card('🧩', 'Themes', 'A theme is a big idea the poem explores, like love, loss, nature, power or identity. Look at the title and the last lines: they often hold the key to the poem’s message.', ['theme', 'message']),
        ],
        questions: [
          mcq('q1', 'The voice in a poem is called the…', ['Speaker', 'Publisher', 'Reader', 'Editor'], 0),
          mcq('q2', 'Tone means…', ['The attitude or feeling of the poem', 'The number of lines', 'The rhyme scheme', 'The title'], 0),
          tf('q3', 'The title and last lines often help you find the message.', true),
          mcq('q4', 'Which is a theme?', ['Loss', 'A stanza', 'A rhyme', 'A comma'], 0),
          mcq('q5', 'How many times should you read an unseen poem?', ['At least twice', 'Once', 'Never', 'Ten times'], 0),
          gap('q6', 'A big idea a poem explores is its ___.', ['theme']),
        ],
      },
      {
        id: 'enp-language',
        title: 'Imagery & sound',
        emoji: '🎨',
        learn: [
          card('🎨', 'Imagery', 'Similes, metaphors and personification create pictures in the reader’s mind. Ask what the image suggests: “the city’s iron heart” makes the city sound strong but cold and mechanical.', ['imagery', 'metaphor', 'personification'], 'figurative'),
          card('🔊', 'Sound', 'Alliteration, sibilance (repeated s sounds), onomatopoeia and rhyme change how a poem sounds. Harsh sounds (k, t, d) can sound violent; soft sounds (s, l, m) can sound gentle, or sinister.', ['sibilance', 'alliteration', 'onomatopoeia']),
        ],
        questions: [
          match('q1', 'Match the example to the technique', [
            ['“The wind howled”', 'Personification'],
            ['“Silent, slithering snakes”', 'Sibilance'],
            ['“Crash!”', 'Onomatopoeia'],
          ]),
          mcq('q2', 'What does “the city’s iron heart” suggest?', ['The city is strong but cold', 'The city is full of metal hearts', 'The city is warm and kind', 'Nothing'], 0),
          tf('q3', 'Harsh sounds like k and t can create a violent effect.', true),
          mcq('q4', 'Imagery is…', ['Language that creates pictures in the mind', 'A rhyme scheme', 'A type of stanza', 'The title'], 0),
          mcq('q5', 'Repeated s sounds are called…', ['Sibilance', 'Assonance', 'Rhyme', 'Metre'], 0),
          gap('q6', 'A comparison that says something IS something else is a ___.', ['metaphor']),
        ],
      },
      {
        id: 'enp-form',
        title: 'Form & structure',
        emoji: '🏛️',
        learn: [
          card('🏛️', 'Form', 'Form is the type of poem and its shape. A sonnet has 14 lines and is often about love. A ballad tells a story with a regular rhythm. Free verse has no regular rhyme or rhythm, which can feel natural, or chaotic.', ['sonnet', 'ballad', 'free verse']),
          card('↩️', 'Structure', 'Enjambment runs a sentence over a line break, which can speed things up or create surprise. A caesura is a pause in the middle of a line. A volta is a turn in the poem’s thought. Stanza breaks and repeated lines (refrains) also shape the meaning.', ['enjambment', 'caesura', 'volta', 'refrain'], 'enjambment'),
        ],
        questions: [
          gap('q1', 'A sonnet has ___ lines.', ['14']),
          mcq('q2', 'Poetry with no regular rhyme or rhythm is…', ['Free verse', 'A sonnet', 'A ballad', 'A limerick'], 0),
          mcq('q3', 'A sentence running over a line break is…', ['Enjambment', 'Caesura', 'A refrain', 'A volta'], 0),
          mcq('q4', 'A pause in the middle of a line is a…', ['Caesura', 'Stanza', 'Rhyme', 'Couplet'], 0),
          tf('q5', 'A volta is a turn or change in the poem’s thought.', true),
          mcq('q6', 'A line repeated through a poem is a…', ['Refrain', 'Volta', 'Caesura', 'Metaphor'], 0),
        ],
      },
    ],
  },
];
