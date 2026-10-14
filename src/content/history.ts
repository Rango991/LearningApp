import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// KS3 History (Year 7, then Years 8-9, National Curriculum), in chronological order.
// Question ids are stored in progress data, so never change an existing id.

const Y7 = 'Year 7';
const Y89 = 'Years 8–9';

export const history: Unit[] = [
  {
    id: 'hist-normans',
    title: '1066 & the Normans',
    stage: Y7,
    description: 'Thinking like a historian, the Battle of Hastings, and how William took control of England.',
    colour: '#b8742a',
    lessons: [
      {
        id: 'hy-chronology',
        title: 'Time & sources',
        emoji: '⏳',
        learn: [
          card('⏳', 'Chronology', 'Chronology means putting events in the order they happened. BC (or BCE) dates count down to year 1; AD (or CE) dates count up from it. A century is 100 years. The 1000s are the 11th century, so 1066 is in the 11th century and the 1900s are the 20th century.', ['chronology', 'century', 'BC', 'AD'], 'history-timeline'),
          card('📜', 'Sources', 'A primary source comes from the time being studied: a diary, a letter, a photo, an object. A secondary source was made later by someone looking back: a textbook, a documentary. To judge how reliable a source is, ask who made it, when, and why.', ['primary source', 'secondary source', 'reliable']),
        ],
        questions: [
          gap('q1', '1066 is in the ___th century', ['11']),
          gap('q2', 'The 1800s are the ___th century', ['19']),
          mcq('q3', 'Which is a primary source about the Second World War?', ['A soldier’s letter from 1942', 'A 2010 documentary', 'A modern textbook', 'A website written last year'], 0),
          tf('q4', 'A secondary source was made at the time of the event.', false, 'It was made later, by someone looking back.'),
          order('q5', 'Put these in chronological order', ['Romans invade Britain (AD 43)', 'Battle of Hastings (1066)', 'Magna Carta (1215)', 'Start of the First World War (1914)']),
          mcq('q6', 'Which question helps you judge a source’s reliability?', ['Why was it made?', 'What colour is it?', 'How long is it?', 'Is it in a museum?'], 0),
        ],
      },
      {
        id: 'hy-1066',
        title: 'The Battle of Hastings',
        emoji: '⚔️',
        learn: [
          card('👑', 'Three claimants', 'Edward the Confessor died in January 1066 without a child. Three men claimed the throne. Harold Godwinson, the most powerful English earl, was crowned king. Harald Hardrada, King of Norway, said he’d been promised it. William, Duke of Normandy, said Edward had promised it to him.', ['claimant', 'heir'], 'claimants'),
          card('⚔️', 'A year of battles', 'Hardrada invaded the north, and Harold beat him at the Battle of Stamford Bridge in September. Days later William landed in the south. Harold’s tired army marched back, and on 14 October 1066 William won the Battle of Hastings. Harold was killed, and William was crowned on Christmas Day 1066.', ['Stamford Bridge', 'Battle of Hastings']),
        ],
        questions: [
          gap('q1', 'The Battle of Hastings was in the year ___', ['1066']),
          mcq('q2', 'Who won the Battle of Hastings?', ['William of Normandy', 'Harold Godwinson', 'Harald Hardrada', 'Edward the Confessor'], 0),
          mcq('q3', 'Who did Harold defeat at Stamford Bridge?', ['Harald Hardrada', 'William of Normandy', 'Edward the Confessor', 'King John'], 0),
          order('q4', 'Put the events of 1066 in order', ['Edward the Confessor dies', 'Harold is crowned', 'Battle of Stamford Bridge', 'Battle of Hastings']),
          mcq('q5', 'Why was Harold’s army at a disadvantage at Hastings?', ['It was tired from fighting and marching', 'It had no weapons', 'It was much bigger', 'It was Norwegian'], 0),
          mcq('q6', 'When was William crowned?', ['Christmas Day 1066', 'January 1066', 'Easter 1067', '1086'], 0),
        ],
      },
      {
        id: 'hy-norman-control',
        title: 'How the Normans took control',
        emoji: '🏰',
        learn: [
          card('🏰', 'Castles and fear', 'William built motte-and-bailey castles: a wooden tower on a mound (motte) above a fenced yard (bailey). They were quick to build and showed who was in charge; later they were rebuilt in stone. When the north rebelled, William’s army destroyed villages and crops in the Harrying of the North (1069–70), and many people starved.', ['motte and bailey', 'Harrying of the North']),
          card('🔺', 'The feudal system', 'William owned all the land. He gave it to barons, who gave some to knights, who let peasants farm it. In return each group owed loyalty, soldiers, taxes or work to the group above. In 1086 the Domesday Book recorded who owned what, so William knew how much tax he could collect.', ['feudal system', 'baron', 'knight', 'Domesday Book'], 'feudal-pyramid'),
        ],
        questions: [
          order('q1', 'Order the feudal system from top to bottom', ['King', 'Barons', 'Knights', 'Peasants']),
          mcq('q2', 'A motte is…', ['A mound with a tower on top', 'A water-filled ditch', 'A type of sword', 'A tax'], 0),
          gap('q3', 'The Domesday Book was made in ___', ['1086']),
          mcq('q4', 'Why was the Domesday Book made?', ['So William knew how much tax he could collect', 'To record battles', 'As a book of prayers', 'To teach reading'], 0),
          tf('q5', 'Early Norman castles were built of wood so they could go up quickly.', true),
          mcq('q6', 'The Harrying of the North was William’s response to…', ['A rebellion', 'A plague', 'A flood', 'A famine in France'], 0),
        ],
      },
    ],
  },
  {
    id: 'hist-medieval',
    title: 'Medieval life',
    stage: Y7,
    description: 'The power of the Church, the Black Death, Magna Carta and the Peasants’ Revolt.',
    colour: '#7a5cc2',
    lessons: [
      {
        id: 'hy-church',
        title: 'The Church & daily life',
        emoji: '⛪',
        learn: [
          card('🌾', 'Village life', 'Most people were peasants who farmed strips of land owned by the lord of the manor. Many were villeins: they couldn’t leave the village without permission and had to work on the lord’s land for free.', ['peasant', 'villein', 'lord of the manor']),
          card('⛪', 'The power of the Church', 'Almost everyone was Christian and feared hell. People paid a tithe, a tenth of what they produced, to the Church. Monks and nuns in monasteries cared for the sick and copied books by hand. Pilgrims travelled to holy places like Canterbury.', ['tithe', 'monastery', 'pilgrimage'], 'church-power'),
          card('🗡️', 'Thomas Becket', 'Henry II and his Archbishop of Canterbury, Thomas Becket, argued over whether the king or the Church should punish priests. In 1170 four knights murdered Becket in Canterbury Cathedral. He was made a saint, and Canterbury became a great place of pilgrimage.', ['Thomas Becket']),
        ],
        questions: [
          mcq('q1', 'A tithe was…', ['A tenth of what you produced, given to the Church', 'A type of castle', 'A medieval game', 'A knight’s weapon'], 0),
          gap('q2', 'Thomas Becket was murdered in the year ___', ['1170']),
          mcq('q3', 'Where was Becket murdered?', ['Canterbury Cathedral', 'The Tower of London', 'Westminster Abbey', 'York Minster'], 0),
          tf('q4', 'Villeins could leave their village whenever they liked.', false, 'They needed the lord’s permission.'),
          mcq('q5', 'Who copied books by hand in monasteries?', ['Monks', 'Knights', 'Barons', 'Peasants'], 0),
          mcq('q6', 'A journey to a holy place is a…', ['Pilgrimage', 'Crusade', 'Tithe', 'Manor'], 0),
        ],
      },
      {
        id: 'hy-black-death',
        title: 'The Black Death',
        emoji: '🐀',
        learn: [
          card('🐀', 'A deadly plague', 'The Black Death reached England in 1348. It killed around a third to a half of the population. Bubonic plague was spread by fleas living on rats; pneumonic plague spread through coughs and sneezes.', ['Black Death', 'bubonic', 'pneumonic']),
          card('🤔', 'Medieval explanations', 'People didn’t know about germs. They blamed God’s punishment for sin, bad air (miasma), or the position of the planets. Cures included prayer, sweet-smelling herbs and whipping themselves (flagellants).', ['miasma', 'flagellant']),
          card('⛓️', 'Consequences', 'With so many dead, there weren’t enough workers. Surviving peasants could demand higher wages and move to find work. The government tried to stop this with the Statute of Labourers (1351), which caused anger that helped lead to the Peasants’ Revolt.', ['labour shortage', 'Statute of Labourers'], 'black-death-chain'),
        ],
        questions: [
          gap('q1', 'The Black Death reached England in ___', ['1348']),
          mcq('q2', 'How was bubonic plague spread?', ['Fleas on rats', 'Drinking milk', 'Eating apples', 'Cold weather'], 0),
          mcq('q3', 'Roughly how much of England’s population died?', ['A third to a half', 'One in a hundred', 'Almost nobody', 'Everyone'], 0),
          mcq('q4', 'Miasma was the idea that disease came from…', ['Bad air', 'Germs', 'Rats', 'Cold water'], 0),
          tf('q5', 'After the Black Death, surviving peasants could demand higher wages.', true, 'There was a shortage of workers.'),
          mcq('q6', 'The Statute of Labourers tried to…', ['Keep wages low', 'Raise wages', 'Cure the plague', 'Build hospitals'], 0),
        ],
      },
      {
        id: 'hy-power',
        title: 'Magna Carta & the Peasants’ Revolt',
        emoji: '📜',
        learn: [
          card('📜', 'Magna Carta', 'King John lost wars in France and taxed his barons heavily. In 1215 the barons forced him to agree to Magna Carta (“Great Charter”) at Runnymede. It said the king had to obey the law too, and that no free man could be imprisoned without a fair trial.', ['Magna Carta', 'King John', 'barons'], 'medieval-timeline'),
          card('🔥', 'The Peasants’ Revolt', 'In 1381 a new poll tax, charged on every adult, was the last straw. Peasants led by Wat Tyler marched on London. The 14-year-old King Richard II met them and promised to end serfdom, but Tyler was killed and the promises were broken.', ['Peasants’ Revolt', 'poll tax', 'Wat Tyler']),
        ],
        questions: [
          gap('q1', 'Magna Carta was agreed in the year ___', ['1215']),
          mcq('q2', 'Which king agreed to Magna Carta?', ['King John', 'William I', 'Richard II', 'Henry VIII'], 0),
          mcq('q3', 'Who led the Peasants’ Revolt?', ['Wat Tyler', 'Thomas Becket', 'King John', 'Harold Godwinson'], 0),
          mcq('q4', 'What triggered the Peasants’ Revolt?', ['A poll tax', 'Magna Carta', 'The Battle of Hastings', 'A new castle'], 0),
          tf('q5', 'Magna Carta said the king had to obey the law too.', true),
          gap('q6', 'The Peasants’ Revolt was in ___', ['1381']),
        ],
      },
    ],
  },
  {
    id: 'hist-tudors',
    title: 'The Tudors',
    stage: Y7,
    description: 'Henry VIII and the break with Rome, and Elizabeth I and the Spanish Armada.',
    colour: '#c0392b',
    lessons: [
      {
        id: 'hy-henry',
        title: 'Henry VIII & the Reformation',
        emoji: '👑',
        learn: [
          card('🌹', 'A new dynasty', 'The Tudors began in 1485, when Henry VII won the Battle of Bosworth and ended the Wars of the Roses. His son Henry VIII became king in 1509.', ['Tudor', 'Battle of Bosworth'], 'tudor-tree'),
          card('⛪', 'Breaking with Rome', 'Henry VIII desperately wanted a son. When the Pope refused to end his marriage to Catherine of Aragon, Henry broke away from the Catholic Church. In 1534 he made himself Supreme Head of the Church of England, then closed the monasteries and took their wealth.', ['Reformation', 'Church of England', 'dissolution of the monasteries']),
          card('💍', 'Six wives', 'Divorced, beheaded, died, divorced, beheaded, survived: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr. Jane Seymour gave him his son, Edward.', ['six wives'], 'six-wives'),
        ],
        questions: [
          mcq('q1', 'Why did Henry VIII break with the Catholic Church?', ['The Pope wouldn’t end his first marriage', 'He wanted to be Pope', 'He lost a war with Spain', 'The monks rebelled'], 0),
          gap('q2', 'Henry made himself head of the Church of England in ___', ['1534']),
          mcq('q3', 'Which wife gave Henry his son, Edward?', ['Jane Seymour', 'Anne Boleyn', 'Catherine Parr', 'Anne of Cleves'], 0),
          mcq('q4', 'What happened to Anne Boleyn?', ['She was beheaded', 'She survived Henry', 'She was divorced', 'She died after childbirth'], 0),
          tf('q5', 'Henry VIII closed the monasteries and took their wealth.', true),
          gap('q6', 'The Tudors began in ___ at the Battle of Bosworth', ['1485']),
        ],
      },
      {
        id: 'hy-elizabeth',
        title: 'Elizabeth I & the Armada',
        emoji: '⛵',
        learn: [
          card('👸', 'Elizabeth I', 'Henry’s daughter Elizabeth ruled from 1558 to 1603. She was Protestant and never married. Her reign is called a golden age: Shakespeare wrote his plays and Francis Drake sailed around the world.', ['Elizabeth I', 'Protestant', 'golden age']),
          card('⛵', 'The Spanish Armada', 'In 1588 the Catholic King Philip II of Spain sent a huge fleet, the Armada, to invade England. English fireships broke up its formation, the English won the battle at Gravelines, and storms wrecked many Spanish ships as they sailed home round Scotland and Ireland.', ['Spanish Armada', 'fireships'], 'armada'),
        ],
        questions: [
          gap('q1', 'The Spanish Armada sailed in ___', ['1588']),
          mcq('q2', 'Who sent the Armada?', ['Philip II of Spain', 'Henry VIII', 'The Pope', 'Francis Drake'], 0),
          mcq('q3', 'Which helped defeat the Armada?', ['Fireships and storms', 'A new castle', 'A peace treaty', 'The Black Death'], 0),
          mcq('q4', 'Who was Elizabeth I’s father?', ['Henry VIII', 'Henry VII', 'Philip II', 'Edward VI'], 0),
          tf('q5', 'Elizabeth I was Catholic.', false, 'She was Protestant.'),
          mcq('q6', 'Which playwright worked in Elizabeth’s reign?', ['William Shakespeare', 'Charles Dickens', 'Geoffrey Chaucer', 'J. K. Rowling'], 0),
        ],
      },
    ],
  },
  {
    id: 'hist-revolution',
    title: 'Revolution & empire',
    stage: Y89,
    description: 'The English Civil War, the Industrial Revolution, and the British Empire and the slave trade.',
    colour: '#2f6f9f',
    lessons: [
      {
        id: 'hy-civil-war',
        title: 'The English Civil War',
        emoji: '🛡️',
        learn: [
          card('⚔️', 'King versus Parliament', 'Charles I believed in the Divine Right of Kings: that God chose him, so he didn’t have to listen to Parliament. They argued over money, religion and power, and war broke out in 1642 between Royalists (Cavaliers) and Parliamentarians (Roundheads).', ['Divine Right of Kings', 'Royalists', 'Parliamentarians'], 'civil-war-sides'),
          card('🪓', 'A world turned upside down', 'Parliament’s New Model Army, led by Oliver Cromwell, won. Charles I was put on trial and executed in 1649. England became a republic, with Cromwell as Lord Protector. After his death the monarchy was restored in 1660 with Charles II.', ['Oliver Cromwell', 'republic', 'Restoration']),
        ],
        questions: [
          mcq('q1', 'The Roundheads fought for…', ['Parliament', 'The king', 'Spain', 'The Pope'], 0),
          gap('q2', 'Charles I was executed in ___', ['1649']),
          mcq('q3', 'Who led Parliament’s New Model Army?', ['Oliver Cromwell', 'Charles II', 'Henry VIII', 'Wat Tyler'], 0),
          mcq('q4', 'The Divine Right of Kings meant…', ['God chose the king, so he answered only to God', 'Parliament chose the king', 'The king had to obey the Pope', 'Anyone could be king'], 0),
          gap('q5', 'The monarchy was restored in ___', ['1660']),
          tf('q6', 'The Cavaliers supported the king.', true),
        ],
      },
      {
        id: 'hy-industrial',
        title: 'The Industrial Revolution',
        emoji: '🏭',
        learn: [
          card('🏭', 'Farms to factories', 'From about 1750 to 1900, Britain changed from a country of farms and villages to one of factories and cities. Improved steam engines (James Watt) powered cotton mills, and from 1830 railways linked cities, starting with Liverpool to Manchester.', ['Industrial Revolution', 'steam engine', 'factory'], 'industrial-changes'),
          card('🏚️', 'Life in the new towns', 'Towns grew fast, with crowded back-to-back houses, dirty water and diseases like cholera. Children worked long hours in mills and mines. Over time, Factory Acts limited child labour, and public health laws brought clean water and sewers.', ['cholera', 'child labour', 'Factory Acts']),
        ],
        questions: [
          mcq('q1', 'What powered the new factories?', ['Steam engines', 'Electricity from solar panels', 'Horses only', 'Nuclear power'], 0),
          mcq('q2', 'Which disease spread through dirty water?', ['Cholera', 'The Black Death', 'Chickenpox', 'Measles'], 0),
          mcq('q3', 'Which laws limited child labour?', ['Factory Acts', 'Magna Carta', 'Poll tax', 'Statute of Labourers'], 0),
          gap('q4', 'The Liverpool to Manchester railway opened in ___', ['1830']),
          tf('q5', 'During the Industrial Revolution, many people moved from the countryside to towns.', true),
          mcq('q6', 'Who improved the steam engine?', ['James Watt', 'Oliver Cromwell', 'William Wilberforce', 'Isaac Newton'], 0),
        ],
      },
      {
        id: 'hy-empire',
        title: 'Empire & the slave trade',
        emoji: '⛓️',
        learn: [
          card('🌐', 'The British Empire', 'At its largest, around 1920, the British Empire ruled about a quarter of the world’s land and people. Britain grew rich from its colonies’ raw materials, while many people in those colonies lost land, freedom and their own rulers.', ['empire', 'colony']),
          card('⛓️', 'The transatlantic slave trade', 'British ships took goods to West Africa and traded them for enslaved African people. They were forced across the Atlantic in terrible conditions (the Middle Passage) and made to work on plantations in the Americas. Sugar, cotton and tobacco were shipped back to Britain. Around 12 million Africans were taken.', ['triangular trade', 'Middle Passage', 'plantation'], 'triangular-trade'),
          card('✊', 'Resistance and abolition', 'Enslaved people resisted in many ways, from slowing work to armed revolts. Campaigners like Olaudah Equiano, who had been enslaved, and William Wilberforce in Parliament fought for change. The British slave trade was abolished in 1807, and slavery in the British Empire in 1833.', ['abolition', 'Olaudah Equiano', 'William Wilberforce']),
        ],
        questions: [
          order('q1', 'Put the triangular trade in order, starting from Britain', ['Goods shipped from Britain to West Africa', 'Enslaved Africans forced across the Atlantic', 'Sugar, cotton and tobacco shipped back to Britain']),
          mcq('q2', 'The voyage across the Atlantic was called…', ['The Middle Passage', 'The Grand Tour', 'The Armada', 'The Crusade'], 0),
          gap('q3', 'The British slave trade was abolished in ___', ['1807']),
          gap('q4', 'Slavery was abolished in the British Empire in ___', ['1833']),
          mcq('q5', 'Which campaigner had been enslaved himself?', ['Olaudah Equiano', 'William Wilberforce', 'James Watt', 'Oliver Cromwell'], 0),
          tf('q6', 'Enslaved people resisted in many ways, including revolts.', true),
        ],
      },
    ],
  },
  {
    id: 'hist-20th',
    title: 'The twentieth century',
    stage: Y89,
    description: 'The First World War, votes for women, and the Second World War.',
    colour: '#556b2f',
    lessons: [
      {
        id: 'hy-ww1',
        title: 'The First World War',
        emoji: '🎖️',
        learn: [
          card('💣', 'Causes', 'Remember MAIN: Militarism (building up armies), Alliances (countries promising to defend each other), Imperialism (rivalry over empires) and Nationalism (pride in your country). The spark was the assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo in June 1914.', ['militarism', 'alliances', 'imperialism', 'nationalism'], 'main-causes'),
          card('🪖', 'The trenches', 'On the Western Front both sides dug trenches and neither could break through. On the first day of the Battle of the Somme (1 July 1916) almost 20,000 British soldiers were killed. The war ended with the Armistice at 11 am on 11 November 1918, remembered every year on Remembrance Day.', ['Western Front', 'Battle of the Somme', 'Armistice']),
        ],
        questions: [
          gap('q1', 'The First World War started in ___', ['1914']),
          mcq('q2', 'Whose assassination sparked the war?', ['Archduke Franz Ferdinand', 'Queen Victoria', 'Winston Churchill', 'Napoleon'], 0),
          match('q3', 'Match the cause to its meaning', [
            ['Militarism', 'Building up armies'],
            ['Alliances', 'Promising to defend each other'],
            ['Nationalism', 'Pride in your country'],
          ]),
          mcq('q4', 'When did the fighting stop?', ['11 am on 11 November 1918', 'Christmas Day 1914', '1 July 1916', '8 May 1945'], 0),
          tf('q5', 'Almost 20,000 British soldiers were killed on the first day of the Somme.', true),
          mcq('q6', 'Fighting in France and Belgium took place on the…', ['Western Front', 'Eastern Front', 'Home Front', 'Middle Passage'], 0),
        ],
      },
      {
        id: 'hy-suffrage',
        title: 'Votes for women',
        emoji: '🗳️',
        learn: [
          card('✉️', 'Suffragists', 'In 1900 no women could vote in general elections. Suffragists, led by Millicent Fawcett, campaigned peacefully with petitions, meetings and marches.', ['suffrage', 'suffragists', 'Millicent Fawcett']),
          card('📣', 'Suffragettes', 'In 1903 Emmeline Pankhurst set up the suffragettes, with the motto “Deeds not words”. They used direct action: chaining themselves to railings, smashing windows and hunger strikes in prison. In 1913 Emily Davison died after running onto the course at the Derby.', ['suffragettes', 'Emmeline Pankhurst', 'direct action']),
          card('🗳️', 'Winning the vote', 'After women’s huge contribution during the First World War, the 1918 Representation of the People Act gave the vote to women over 30 who met a property rule. In 1928 women got the vote on the same terms as men, from age 21.', ['Representation of the People Act'], 'suffrage-timeline'),
        ],
        questions: [
          mcq('q1', 'Who led the suffragettes?', ['Emmeline Pankhurst', 'Millicent Fawcett', 'Emily Davison', 'Queen Victoria'], 0),
          mcq('q2', 'The suffragettes’ motto was…', ['Deeds not words', 'Keep calm and carry on', 'Votes for all', 'God save the king'], 0),
          mcq('q3', 'Suffragists campaigned…', ['Peacefully', 'With hunger strikes and window smashing', 'By going to war', 'In secret'], 0),
          gap('q4', 'Some women over 30 got the vote in ___', ['1918']),
          gap('q5', 'Women got the vote on the same terms as men in ___', ['1928']),
          tf('q6', 'Emily Davison died after running onto the course at the Derby.', true),
        ],
      },
      {
        id: 'hy-ww2',
        title: 'The Second World War',
        emoji: '✈️',
        learn: [
          card('🪖', 'War begins', 'Adolf Hitler and the Nazis took power in Germany in 1933 and set out to expand it. When Germany invaded Poland on 1 September 1939, Britain and France declared war two days later.', ['Hitler', 'Nazis']),
          card('🏠', 'Britain at war', 'In 1940 small boats helped rescue over 300,000 soldiers from Dunkirk, and the RAF won the Battle of Britain. German bombing raids, the Blitz, hit British cities, and millions of children were evacuated to the countryside. On D-Day, 6 June 1944, the Allies landed in Normandy. The war in Europe ended on VE Day, 8 May 1945.', ['Dunkirk', 'Battle of Britain', 'the Blitz', 'evacuation', 'D-Day'], 'ww2-timeline'),
          card('🕯️', 'The Holocaust', 'The Nazis persecuted Jewish people and other groups. In the Holocaust they murdered six million Jews, along with Roma people, disabled people and many others. We remember it so that it never happens again.', ['Holocaust', 'persecution']),
        ],
        questions: [
          gap('q1', 'The Second World War started in ___', ['1939']),
          mcq('q2', 'Which country did Germany invade in September 1939?', ['Poland', 'France', 'Britain', 'Spain'], 0),
          mcq('q3', 'Bombing raids on British cities were called…', ['The Blitz', 'D-Day', 'Dunkirk', 'The Armistice'], 0),
          mcq('q4', 'What happened on D-Day, 6 June 1944?', ['The Allies landed in Normandy', 'The war ended', 'Germany invaded Poland', 'The Blitz began'], 0),
          order('q5', 'Put these in order', ['Germany invades Poland', 'Dunkirk evacuation', 'D-Day landings', 'VE Day']),
          mcq('q6', 'How many Jewish people were murdered in the Holocaust?', ['Six million', 'Six thousand', 'Sixty thousand', 'Six hundred'], 0),
        ],
      },
    ],
  },
];
