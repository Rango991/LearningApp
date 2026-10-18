import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// KS3 English (Year 7, then Years 8-9, National Curriculum), pitched to lead into GCSE.
// Spelling and punctuation are tested with multiple choice, because typed answers
// forgive small typos. Question ids are stored in progress data, so never change an existing id.

const Y7 = 'Year 7';
const Y89 = 'Years 8–9';

export const english: Unit[] = [
  {
    id: 'eng-grammar',
    title: 'Grammar & punctuation',
    stage: Y7,
    description: 'Word classes, building sentences, and using apostrophes, commas and speech marks.',
    colour: '#e0457b',
    lessons: [
      {
        id: 'en-word-classes',
        title: 'Word classes',
        emoji: '🧱',
        learn: [
          card('🧱', 'The main word classes', 'Noun: a person, place, thing or idea (dog, London, happiness). Proper nouns are names and need a capital letter. Verb: an action or state (run, think, is). Adjective: describes a noun (hungry, red). Adverb: describes a verb, often ending in -ly (quickly, quietly). Pronoun: stands in for a noun (she, it, they).', ['noun', 'verb', 'adjective', 'adverb', 'pronoun'], 'word-classes'),
          card('📍', 'Joining words', 'Prepositions show where or when something is (under, after, between). Conjunctions join words or clauses (and, but, because). Determiners come before nouns (the, a, some).', ['preposition', 'conjunction', 'determiner']),
        ],
        questions: [
          mcq('q1', 'In “The hungry dog ate quickly”, which word is the adjective?', ['hungry', 'dog', 'ate', 'quickly'], 0),
          mcq('q2', 'In “The hungry dog ate quickly”, which word is the adverb?', ['quickly', 'hungry', 'dog', 'The'], 0),
          mcq('q3', 'Which is a proper noun?', ['Manchester', 'city', 'happiness', 'table'], 0),
          match('q4', 'Match the word to its class', [
            ['jump', 'Verb'],
            ['beautiful', 'Adjective'],
            ['they', 'Pronoun'],
          ]),
          mcq('q5', 'In “The cat hid under the bed”, which word is a preposition?', ['under', 'cat', 'hid', 'bed'], 0),
          gap('q6', 'A word that describes a noun is an ___', ['adjective']),
        ],
      },
      {
        id: 'en-sentences',
        title: 'Building sentences',
        emoji: '🔗',
        learn: [
          card('🔗', 'Three kinds of sentence', 'Simple: one main clause (“The rain fell.”). Compound: two main clauses joined by and, but, or or so (“The rain fell, so we stayed in.”). Complex: a main clause plus a subordinate clause, which doesn’t make sense on its own (“Although it was raining, we went out.”).', ['clause', 'simple', 'compound', 'complex'], 'sentence-types'),
          card('🎨', 'Mix it up', 'Good writers vary their sentences. A short simple sentence can create drama. A complex sentence can explain why. Subordinating conjunctions start subordinate clauses: because, although, when, if, while, since.', ['subordinating conjunction']),
        ],
        questions: [
          mcq('q1', '“The dog barked.” is a…', ['Simple sentence', 'Compound sentence', 'Complex sentence'], 0),
          mcq('q2', '“I was tired, so I went to bed.” is a…', ['Compound sentence', 'Simple sentence', 'Complex sentence'], 0),
          mcq('q3', '“Because it was late, we ran home.” is a…', ['Complex sentence', 'Simple sentence', 'Compound sentence'], 0),
          mcq('q4', 'Which is a subordinating conjunction?', ['although', 'and', 'but', 'or'], 0),
          tf('q5', 'A subordinate clause makes sense on its own.', false, 'It needs a main clause, like “Although it was raining…”'),
          mcq('q6', 'Why might a writer use a very short sentence?', ['To create drama or tension', 'To explain a hard idea', 'To list lots of things', 'Because it’s the rule'], 0),
        ],
      },
      {
        id: 'en-punctuation',
        title: 'Apostrophes, commas & speech',
        emoji: '💬',
        learn: [
          card('✏️', 'Apostrophes', 'Apostrophes do two jobs. Missing letters: do not → don’t, it is → it’s. Belonging: the dog’s bone (one dog); the dogs’ bowls (more than one dog). “Its” with no apostrophe means belonging to it: the cat licked its paw.', ['apostrophe', 'contraction', 'possession'], 'apostrophes'),
          card('💬', 'Commas and speech marks', 'Use commas to separate items in a list: eggs, milk and bread. Put a comma after an opening phrase: After lunch, we went outside. Speech goes inside speech marks, with its punctuation inside too: “Wait for me,” said Sam. Start a new line for each new speaker.', ['comma', 'speech marks']),
        ],
        questions: [
          mcq('q1', 'Which is correct?', ['The cat licked its paw.', 'The cat licked it’s paw.', 'The cat licked its’ paw.'], 0),
          mcq('q2', 'Which means “it is”?', ['it’s', 'its', 'its’'], 0),
          mcq('q3', 'One girl owns a bag. Which is correct?', ['the girl’s bag', 'the girls’ bag', 'the girls bag'], 0),
          mcq('q4', 'Three boys share a ball. Which is correct?', ['the boys’ ball', 'the boy’s ball', 'the boys ball'], 0),
          mcq('q5', 'Which is punctuated correctly?', ['“Wait for me,” said Sam.', '“Wait for me”, said Sam.', 'Wait for me, “said Sam.”', '“Wait for me” said Sam,'], 0),
          tf('q6', 'You start a new line each time a new person speaks.', true),
        ],
      },
      {
        id: 'en-apostrophe-owners',
        title: 'Apostrophes: who owns it?',
        emoji: '🎒',
        learn: [
          card('🎒', 'Count the owners first', 'Before you add an apostrophe for belonging, ask: how many owners? One owner: add ’s. One girl owns a bag → the girl’s bag. More than one owner, and the word already ends in s: add just ’. Two girls share a bag → the girls’ bag.', ['possession', 'owner'], 'apostrophe-owners'),
          card('🧒', 'Plurals without an s', 'Some plurals don’t end in s: children, men, women, people. Add ’s to these: the children’s toys, the women’s team. Names ending in s can take ’s too: James’s coat.', ['plural']),
          card('🐱', 'It’s or its?', 'Try saying “it is” (or “it has”) instead. If it makes sense, use it’s: it’s raining = it is raining. If not, use its, with no apostrophe: the dog wagged its tail. Its is like his and her: none of them need an apostrophe.', ['its', 'it’s']),
        ],
        questions: [
          mcq('q1', 'One dog has a bone. Which is correct?', ['the dog’s bone', 'the dogs’ bone', 'the dogs bone'], 0),
          mcq('q2', 'Five dogs share a bowl. Which is correct?', ['the dogs’ bowl', 'the dog’s bowl', 'the dogs bowl'], 0),
          mcq('q3', 'Which is correct?', ['the children’s toys', 'the childrens’ toys', 'the childrens toys'], 0),
          mcq('q4', 'Fill the gap: The school lost ___ keys.', ['its', 'it’s', 'its’'], 0, 'You can’t say “the school lost it is keys”, so no apostrophe.'),
          mcq('q5', 'Fill the gap: ___ been raining all day.', ['It’s', 'Its', 'Its’'], 0, '“It has been raining” makes sense, so it’s.'),
          mcq('q6', '“My sister’s friends are here.” How many sisters?', ['One', 'More than one', 'You can’t tell'], 0),
          mcq('q7', '“My brothers’ room is messy.” How many brothers share it?', ['More than one', 'One', 'You can’t tell'], 0),
        ],
      },
    ],
  },
  {
    id: 'eng-words',
    title: 'Spelling & vocabulary',
    stage: Y7,
    description: 'Tricky homophones, prefixes and suffixes, plurals, and choosing the best word.',
    colour: '#f2994a',
    lessons: [
      {
        id: 'en-homophones',
        title: 'Homophones',
        emoji: '👂',
        learn: [
          card('👂', 'Sound the same, spelt differently', 'Homophones sound the same but have different spellings and meanings. There: a place. Their: belonging to them. They’re: they are. Your: belonging to you. You’re: you are. To: towards. Too: also, or too much. Two: the number 2.', ['homophone'], 'homophones'),
          card('🧠', 'A quick check', 'Try expanding it. If “they are” works, write they’re. If “you are” works, write you’re. “Their” has “heir” in it, someone who inherits things, so it’s about belonging.', ['strategy']),
        ],
        questions: [
          mcq('q1', '___ going to the park later.', ['They’re', 'Their', 'There'], 0),
          mcq('q2', 'Put the books over ___.', ['there', 'their', 'they’re'], 0),
          mcq('q3', 'The children forgot ___ coats.', ['their', 'there', 'they’re'], 0),
          mcq('q4', '___ going to love this!', ['You’re', 'Your'], 0),
          mcq('q5', 'It was ___ hot to play outside.', ['too', 'to', 'two'], 0),
          mcq('q6', 'Where did you ___ your new trainers?', ['wear', 'where', 'were'], 0),
        ],
      },
      {
        id: 'en-word-building',
        title: 'Prefixes, suffixes & plurals',
        emoji: '🧩',
        learn: [
          card('🧩', 'Building words', 'A root word can have a prefix added to the start and a suffix added to the end. un + help + ful = unhelpful. Prefixes change the meaning: un-, dis- and mis- often mean not or wrongly; re- means again; pre- means before. Suffixes can change the word class: kind (adjective) → kindness (noun).', ['prefix', 'suffix', 'root word'], 'word-building'),
          card('📚', 'Plurals', 'Most words add -s. Words ending in s, x, ch or sh add -es: boxes, churches. A consonant + y becomes -ies: baby → babies (but a vowel + y just adds -s: day → days). Many words ending in f become -ves: leaf → leaves. Some are irregular: child → children, mouse → mice.', ['plural']),
        ],
        questions: [
          mcq('q1', 'What does the prefix “re-” mean?', ['Again', 'Not', 'Before', 'Wrongly'], 0),
          mcq('q2', 'Which word has a prefix?', ['disagree', 'helpful', 'kindness', 'quickly'], 0),
          mcq('q3', 'What is the plural of “baby”?', ['babies', 'babys', 'babyes'], 0),
          mcq('q4', 'What is the plural of “box”?', ['boxes', 'boxs', 'boxies'], 0),
          mcq('q5', 'What is the plural of “leaf”?', ['leaves', 'leafs', 'leafes'], 0),
          mcq('q6', 'Adding “-ness” to “kind” turns an adjective into a…', ['Noun', 'Verb', 'Adverb', 'Pronoun'], 0),
        ],
      },
      {
        id: 'en-vocabulary',
        title: 'Choosing the best word',
        emoji: '🎯',
        learn: [
          card('🎯', 'Synonyms and antonyms', 'Synonyms have similar meanings (big, large, huge). Antonyms have opposite meanings (hot, cold). Synonyms aren’t identical: they have different shades of meaning, so pick the most precise one. “Enormous” is bigger than “big”.', ['synonym', 'antonym', 'shades of meaning'], 'word-ladder'),
          card('👔', 'Formal and informal', 'Formal language suits letters, essays and speeches: “I would like to request…”. Informal language suits chats and messages: “Can I…?”. Avoid slang and contractions in formal writing.', ['formal', 'informal']),
        ],
        questions: [
          mcq('q1', 'Which is a synonym for “happy”?', ['cheerful', 'gloomy', 'angry', 'tired'], 0),
          mcq('q2', 'Which is an antonym of “ancient”?', ['modern', 'old', 'historic', 'aged'], 0),
          order('q3', 'Order from smallest to biggest', ['tiny', 'small', 'large', 'enormous']),
          mcq('q4', 'Which is most formal?', ['I would be grateful if you could reply.', 'Get back to me, yeah?', 'Reply asap!!', 'Text me back'], 0),
          tf('q5', 'Synonyms always mean exactly the same thing.', false, 'They have different shades of meaning.'),
          mcq('q6', 'Which word is the most extreme?', ['furious', 'annoyed', 'cross', 'irritated'], 0),
        ],
      },
    ],
  },
  {
    id: 'eng-reading',
    title: 'Reading like a writer',
    stage: Y7,
    description: 'Figurative language, sound devices, and writing about a text with Point, Evidence, Explain.',
    colour: '#7b61ff',
    lessons: [
      {
        id: 'en-figurative',
        title: 'Similes, metaphors & personification',
        emoji: '🌙',
        learn: [
          card('🌙', 'Figurative language', 'Simile: compares using “like” or “as” (“as brave as a lion”). Metaphor: says something is something else (“the classroom was a zoo”). Personification: gives human qualities to a non-human thing (“the wind howled”). Hyperbole: deliberate exaggeration (“I’ve told you a million times”).', ['simile', 'metaphor', 'personification', 'hyperbole'], 'figurative'),
          card('🔍', 'Why writers use it', 'Figurative language creates a vivid picture and makes the reader feel something. “The classroom was a zoo” suggests noise and chaos far better than “the class was loud”.', ['effect']),
        ],
        questions: [
          mcq('q1', '“Her smile was as bright as the sun” is a…', ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], 0),
          mcq('q2', '“The classroom was a zoo” is a…', ['Metaphor', 'Simile', 'Personification', 'Alliteration'], 0),
          mcq('q3', '“The trees whispered in the wind” is…', ['Personification', 'A simile', 'Hyperbole', 'Onomatopoeia'], 0),
          mcq('q4', '“I’m so hungry I could eat a horse” is…', ['Hyperbole', 'A simile', 'Personification', 'A metaphor'], 0),
          tf('q5', 'A simile uses “like” or “as”.', true),
          mcq('q6', 'What does “the classroom was a zoo” suggest?', ['It was noisy and chaotic', 'It had animals in it', 'It was quiet', 'It was very clean'], 0),
        ],
      },
      {
        id: 'en-sound',
        title: 'Sound devices',
        emoji: '🔊',
        learn: [
          card('🔊', 'Playing with sound', 'Alliteration: words close together start with the same sound (“slippery, slimy snake”). Onomatopoeia: words that sound like what they mean (buzz, crash, sizzle). Rhyme: words ending in the same sound (cat, hat). Repetition: repeating a word or phrase for emphasis.', ['alliteration', 'onomatopoeia', 'rhyme', 'repetition'], 'sound-devices'),
          card('🎵', 'The effect', 'Sound devices make writing memorable and help create a mood. Harsh “k” and “t” sounds can feel aggressive; soft “s” sounds can feel calm or sinister.', ['mood']),
        ],
        questions: [
          mcq('q1', '“Peter Piper picked a peck” uses…', ['Alliteration', 'Onomatopoeia', 'Simile', 'Personification'], 0),
          mcq('q2', 'Which word is onomatopoeia?', ['crash', 'quickly', 'beautiful', 'table'], 0),
          mcq('q3', '“Never, never, never give up” uses…', ['Repetition', 'Onomatopoeia', 'Metaphor', 'Simile'], 0),
          mcq('q4', 'Which pair rhymes?', ['light and night', 'cat and dog', 'tree and bush', 'run and walk'], 0),
          tf('q5', 'Onomatopoeia is a word that sounds like what it describes.', true),
          gap('q6', 'Words close together starting with the same sound is called ___', ['alliteration']),
        ],
      },
      {
        id: 'en-pee',
        title: 'Point, Evidence, Explain',
        emoji: '✍️',
        learn: [
          card('✍️', 'PEE paragraphs', 'To write about a text, use PEE. Point: make a clear point that answers the question. Evidence: back it up with a short quotation in quotation marks. Explain: say how the quotation shows your point, and zoom in on key words and their effect.', ['point', 'evidence', 'explain', 'quotation'], 'pee-paragraph'),
          card('🕵️', 'Inference', 'Inference means working out what isn’t said directly, like a detective. If a character “slammed the door and stomped upstairs”, you can infer they’re angry, even though the writer never says so.', ['inference']),
        ],
        questions: [
          order('q1', 'Put a PEE paragraph in order', ['Point', 'Evidence', 'Explain']),
          mcq('q2', 'What is the evidence in a PEE paragraph?', ['A short quotation from the text', 'Your opinion of the author', 'A summary of the story', 'A new idea'], 0),
          mcq('q3', '“She slammed the door and stomped upstairs.” What can you infer?', ['She was angry', 'She was sleepy', 'She was happy', 'She was lost'], 0),
          mcq('q4', 'Inference means…', ['Working out what isn’t said directly', 'Copying the text', 'Counting the words', 'Finding rhymes'], 0),
          tf('q5', 'Quotations should go inside quotation marks.', true),
          mcq('q6', 'Which is the best “explain” sentence?', ['The verb “stomped” suggests she is furious.', 'This is a quotation.', 'I like this book.', 'The author is good.'], 0),
        ],
      },
    ],
  },
  {
    id: 'eng-poetry-drama',
    title: 'Poetry & Shakespeare',
    stage: Y89,
    description: 'Stanzas, rhyme schemes and sonnets, and an introduction to Shakespeare and his plays.',
    colour: '#2d9cdb',
    lessons: [
      {
        id: 'en-poetry',
        title: 'Poetic form',
        emoji: '📝',
        learn: [
          card('📝', 'Rhyme scheme', 'A rhyme scheme uses letters to show which line endings rhyme. “Twinkle, twinkle, little star / How I wonder what you are / Up above the world so high / Like a diamond in the sky” is AABB. Alternate lines rhyming is ABAB.', ['rhyme scheme'], 'rhyme-scheme'),
          card('🧱', 'Form and structure', 'A stanza is a group of lines, like a paragraph in a poem. A couplet is two rhyming lines. A sonnet has 14 lines. Free verse has no regular rhyme or rhythm. Enjambment is when a sentence runs on from one line to the next without punctuation.', ['stanza', 'couplet', 'sonnet', 'free verse', 'enjambment']),
        ],
        questions: [
          gap('q1', 'A sonnet has ___ lines', ['14']),
          mcq('q2', 'A group of lines in a poem is a…', ['Stanza', 'Paragraph', 'Chapter', 'Scene'], 0),
          mcq('q3', 'Lines 1 and 3 rhyme, and lines 2 and 4 rhyme. The rhyme scheme is…', ['ABAB', 'AABB', 'ABBA', 'AAAA'], 0),
          mcq('q4', 'A poem with no regular rhyme or rhythm is…', ['Free verse', 'A sonnet', 'A couplet', 'A limerick'], 0),
          mcq('q5', 'Two rhyming lines together are a…', ['Couplet', 'Stanza', 'Sonnet', 'Verse'], 0),
          tf('q6', 'Enjambment is when a sentence runs on to the next line.', true),
        ],
      },
      {
        id: 'en-shakespeare',
        title: 'Shakespeare',
        emoji: '🎭',
        learn: [
          card('🎭', 'Who was Shakespeare?', 'William Shakespeare (1564–1616) was born in Stratford-upon-Avon. He wrote about 37 plays and 154 sonnets, and his plays were performed at the Globe Theatre in London. His plays are comedies (A Midsummer Night’s Dream), tragedies (Romeo and Juliet, Macbeth) or histories (Henry V).', ['comedy', 'tragedy', 'Globe Theatre']),
          card('🥁', 'His language', 'Much of Shakespeare is written in iambic pentameter: ten syllables per line in a da-DUM rhythm, like a heartbeat. “But SOFT, what LIGHT through YON-der WIN-dow BREAKS?” A soliloquy is a speech where a character, alone on stage, shares their thoughts with the audience.', ['iambic pentameter', 'soliloquy'], 'iambic'),
        ],
        questions: [
          mcq('q1', 'Where was Shakespeare born?', ['Stratford-upon-Avon', 'London', 'Verona', 'Edinburgh'], 0),
          mcq('q2', 'Romeo and Juliet is a…', ['Tragedy', 'Comedy', 'History'], 0),
          gap('q3', 'A line of iambic pentameter has ___ syllables', ['10']),
          mcq('q4', 'A speech where a character alone on stage shares their thoughts is a…', ['Soliloquy', 'Sonnet', 'Stanza', 'Chorus'], 0),
          mcq('q5', 'Which theatre is linked to Shakespeare?', ['The Globe', 'The Palladium', 'The Royal Albert Hall', 'The Lyceum'], 0),
          tf('q6', 'Iambic pentameter has a da-DUM rhythm, like a heartbeat.', true),
        ],
      },
    ],
  },
  {
    id: 'eng-writing',
    title: 'Writing with purpose',
    stage: Y89,
    description: 'Persuasive techniques and vivid descriptive writing.',
    colour: '#27ae60',
    lessons: [
      {
        id: 'en-persuasive',
        title: 'Persuasive writing',
        emoji: '📣',
        learn: [
          card('📣', 'AFOREST', 'Persuasive techniques: Alliteration. Facts. Opinions, presented as if true. Rhetorical questions that don’t need an answer (“Do we really want that?”). Emotive language that stirs feelings (“helpless puppies”). Statistics (“9 out of 10…”). Triples, the rule of three (“cheap, quick and easy”).', ['rhetorical question', 'emotive language', 'rule of three'], 'aforest'),
          card('🫵', 'Talk to your reader', 'Direct address uses “you” to involve the reader. Inclusive pronouns like “we” and “us” make them feel on your side. Finish with a strong call to action that tells them what to do.', ['direct address', 'call to action']),
        ],
        questions: [
          mcq('q1', '“Can we really ignore this any longer?” is a…', ['Rhetorical question', 'Statistic', 'Fact', 'Simile'], 0),
          mcq('q2', '“Cheap, quick and easy” is an example of…', ['A triple (rule of three)', 'A statistic', 'Onomatopoeia', 'A metaphor'], 0),
          mcq('q3', '“9 out of 10 students agree” is…', ['A statistic', 'An opinion', 'Alliteration', 'A rhetorical question'], 0),
          mcq('q4', '“Helpless, starving puppies” uses…', ['Emotive language', 'Facts', 'Statistics', 'A rhetorical question'], 0),
          mcq('q5', 'Using “you” to speak to the reader is…', ['Direct address', 'Personification', 'A triple', 'Free verse'], 0),
          tf('q6', 'A call to action tells the reader what to do.', true),
        ],
      },
      {
        id: 'en-descriptive',
        title: 'Descriptive writing',
        emoji: '🖌️',
        learn: [
          card('🖐️', 'Use all five senses', 'Don’t just describe what you see. What can you hear, smell, touch and taste? “The air smelt of salt and seaweed, and gulls screeched overhead” puts the reader on the beach.', ['five senses'], 'five-senses'),
          card('🎬', 'Show, don’t tell', 'Instead of telling the reader (“She was scared”), show it (“Her hands trembled as she reached for the handle”). Zoom in on small details like a camera, and vary how your sentences start.', ['show, don’t tell']),
        ],
        questions: [
          mcq('q1', 'Which shows rather than tells?', ['His knees shook and his mouth went dry.', 'He was nervous.', 'He felt bad.', 'He was scared.'], 0),
          gap('q2', 'Descriptive writing should use all ___ senses', ['5', 'five']),
          mcq('q3', '“Gulls screeched overhead” appeals to which sense?', ['Hearing', 'Taste', 'Touch', 'Smell'], 0),
          mcq('q4', '“The bread was warm and crusty” appeals mainly to…', ['Touch', 'Hearing', 'Smell', 'Sight'], 0),
          tf('q5', 'Starting every sentence with “The” makes writing more interesting.', false, 'Vary your sentence openings.'),
          mcq('q6', 'Zooming in on a small detail is like using a…', ['Camera', 'Calculator', 'Dictionary', 'Map'], 0),
        ],
      },
    ],
  },
];
