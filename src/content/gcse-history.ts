import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// AQA GCSE History (8145), matching the options Gosforth Academy teaches:
// America 1920–1973, Conflict and tension 1945–1972, Health and the people, and
// Norman England c1066–c1100 (with Durham Cathedral as the historic environment).
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE (AQA)';

export const gcseHistory: Unit[] = [
  {
    id: 'g-hist-usa',
    title: 'America 1920–1973',
    stage: STAGE,
    description: 'Opportunity and inequality: the boom, the Depression and New Deal, and the fight for civil rights.',
    colour: '#2f6f9f',
    lessons: [
      {
        id: 'gh-usa-boom',
        title: 'The 1920s: boom and bust',
        emoji: '🚗',
        learn: [
          card('🚗', 'The boom', 'Mass production on assembly lines, like Henry Ford’s Model T, made goods cheaper. Hire purchase (buying on credit) let people buy cars, radios and fridges. Many bought shares “on the margin”, with borrowed money, as prices kept rising.', ['mass production', 'hire purchase', 'on the margin'], 'usa-boom'),
          card('🚫', 'Not everyone shared in it', 'Farmers, Black Americans and many immigrants stayed poor. Prohibition (1920–1933) banned alcohol, but gangsters like Al Capone grew rich selling it illegally. The Ku Klux Klan grew, and laws in 1921 and 1924 limited immigration.', ['Prohibition', 'Ku Klux Klan', 'immigration quotas']),
          card('📉', 'The Wall Street Crash', 'In October 1929 share prices collapsed. People who had borrowed to buy shares were ruined, banks failed, and the Great Depression began.', ['Wall Street Crash']),
        ],
        questions: [
          mcq('q1', 'Buying goods and paying in instalments was called…', ['Hire purchase', 'Prohibition', 'Mass production', 'The New Deal'], 0),
          mcq('q2', 'Who made the Model T car?', ['Henry Ford', 'Al Capone', 'Franklin Roosevelt', 'Herbert Hoover'], 0),
          mcq('q3', 'Prohibition banned…', ['Alcohol', 'Cars', 'Immigration', 'Shares'], 0),
          gap('q4', 'The Wall Street Crash happened in October ___', ['1929']),
          mcq('q5', 'Which group did NOT share in the 1920s boom?', ['Farmers', 'Car makers', 'Share dealers', 'Factory owners'], 0),
          tf('q6', 'Buying shares “on the margin” meant using borrowed money.', true),
        ],
      },
      {
        id: 'gh-usa-depression',
        title: 'Depression, New Deal & war',
        emoji: '🏚️',
        learn: [
          card('🏚️', 'The Great Depression', 'By 1933 about a quarter of American workers were unemployed. Homeless families lived in shanty towns nicknamed “Hoovervilles”, after President Hoover, who was blamed for doing too little.', ['Great Depression', 'Hoovervilles'], 'usa-unemployment'),
          card('🛠️', 'The New Deal', 'Franklin D. Roosevelt (FDR) won the 1932 election promising a “New Deal”. “Alphabet agencies” such as the CCC and TVA created jobs, and the 1935 Social Security Act gave pensions and unemployment pay. Some said it went too far; others said not far enough.', ['New Deal', 'alphabet agencies', 'Social Security Act']),
          card('🏭', 'War ends the Depression', 'The Second World War finally ended mass unemployment, as factories made weapons. Millions of women took war jobs, symbolised by “Rosie the Riveter”.', ['Rosie the Riveter']),
        ],
        questions: [
          mcq('q1', 'Shanty towns in the Depression were nicknamed…', ['Hoovervilles', 'Fordtowns', 'New Deals', 'Speakeasies'], 0),
          mcq('q2', 'Who introduced the New Deal?', ['Franklin D. Roosevelt', 'Herbert Hoover', 'Henry Ford', 'John F. Kennedy'], 0),
          mcq('q3', 'Roughly how many workers were unemployed by 1933?', ['A quarter', 'A tenth', 'Half', 'Almost none'], 0),
          gap('q4', 'The Social Security Act was passed in ___', ['1935']),
          mcq('q5', 'What finally ended mass unemployment?', ['The Second World War', 'Prohibition', 'The Wall Street Crash', 'The 1920s boom'], 0),
          tf('q6', 'Everyone agreed the New Deal was a success.', false, 'Some said it went too far, others not far enough.'),
        ],
      },
      {
        id: 'gh-usa-rights',
        title: 'Civil rights & women’s rights',
        emoji: '✊',
        learn: [
          card('🚌', 'Ending segregation', 'In the South, “Jim Crow” laws segregated Black Americans. In 1954 the Brown v. Topeka ruling said segregated schools were illegal. In 1955 Rosa Parks refused to give up her bus seat, starting the Montgomery Bus Boycott. In 1957 troops protected nine Black students at Little Rock school.', ['segregation', 'Jim Crow', 'Montgomery Bus Boycott'], 'civil-rights-timeline'),
          card('✊', 'Winning rights', 'Martin Luther King led peaceful protests, including the 1963 March on Washington and his “I have a dream” speech. The Civil Rights Act (1964) and Voting Rights Act (1965) followed. Malcolm X and the Black Power movement argued for a different, more radical approach.', ['Martin Luther King', 'Civil Rights Act', 'Black Power']),
          card('👩', 'Women’s rights', 'Betty Friedan’s book The Feminine Mystique (1963) inspired a new women’s movement, and the National Organization for Women (NOW) was founded in 1966. The Equal Pay Act came in 1963, and the Roe v. Wade ruling came in 1973.', ['The Feminine Mystique', 'NOW']),
        ],
        questions: [
          mcq('q1', 'Who refused to give up her bus seat in Montgomery?', ['Rosa Parks', 'Betty Friedan', 'Ruby Bridges', 'Eleanor Roosevelt'], 0),
          gap('q2', 'The March on Washington was in ___', ['1963']),
          mcq('q3', 'Which court case ruled that segregated schools were illegal?', ['Brown v. Topeka', 'Roe v. Wade', 'Plessy v. Ferguson', 'Miranda v. Arizona'], 0),
          order('q4', 'Put these in order', ['Brown v. Topeka ruling', 'Montgomery Bus Boycott', 'March on Washington', 'Voting Rights Act']),
          mcq('q5', 'Who wrote The Feminine Mystique?', ['Betty Friedan', 'Rosa Parks', 'Martin Luther King', 'Malcolm X'], 0),
          mcq('q6', 'Laws that segregated Black Americans in the South were called…', ['Jim Crow laws', 'New Deal laws', 'Prohibition laws', 'Quota laws'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-hist-coldwar',
    title: 'The Cold War 1945–1972',
    stage: STAGE,
    description: 'Conflict and tension between East and West: origins, the arms race, Berlin, Cuba and détente.',
    colour: '#c0392b',
    lessons: [
      {
        id: 'gh-cw-origins',
        title: 'Origins of the Cold War',
        emoji: '🧊',
        learn: [
          card('🧊', 'Two superpowers', 'After 1945 the USA and the USSR distrusted each other. The USA was capitalist and democratic; the USSR was communist with one-party rule. They never fought each other directly, so it was a “cold” war.', ['capitalism', 'communism', 'superpower'], 'cold-war-sides'),
          card('🤝', 'From allies to enemies', 'At Yalta (February 1945) and Potsdam (July 1945) the Allies argued over Germany and Eastern Europe. In 1946 Churchill said an “iron curtain” had come down across Europe. In 1947 the Truman Doctrine promised to contain communism, and the Marshall Plan gave money to rebuild Western Europe.', ['Yalta', 'Potsdam', 'iron curtain', 'Truman Doctrine', 'Marshall Plan']),
          card('✈️', 'The Berlin Blockade', 'In 1948 Stalin blocked all roads and railways into West Berlin. The West flew in supplies for almost a year: the Berlin Airlift. Stalin gave up in 1949, the year NATO was formed.', ['Berlin Blockade', 'Berlin Airlift', 'NATO']),
        ],
        questions: [
          mcq('q1', 'Which ideology did the USSR follow?', ['Communism', 'Capitalism', 'Fascism', 'Monarchy'], 0),
          mcq('q2', 'Who made the “iron curtain” speech?', ['Winston Churchill', 'Harry Truman', 'Joseph Stalin', 'John F. Kennedy'], 0),
          mcq('q3', 'The Marshall Plan gave…', ['Money to rebuild Western Europe', 'Weapons to the USSR', 'Land to Germany', 'Votes to women'], 0),
          mcq('q4', 'How did the West respond to the Berlin Blockade?', ['The Berlin Airlift', 'Invading East Germany', 'Building a wall', 'Giving up West Berlin'], 0),
          gap('q5', 'NATO was formed in ___', ['1949']),
          order('q6', 'Put these in order', ['Yalta Conference', 'Iron curtain speech', 'Truman Doctrine', 'Berlin Blockade']),
        ],
      },
      {
        id: 'gh-cw-1950s',
        title: 'Korea, the arms race & Hungary',
        emoji: '🚀',
        learn: [
          card('🚀', 'The arms race', 'The USSR tested its first atomic bomb in 1949, ending the USA’s monopoly. Both sides built ever bigger nuclear weapons, then missiles. In 1957 the USSR launched Sputnik, the first satellite, starting the space race. In 1955 communist countries formed the Warsaw Pact to rival NATO.', ['arms race', 'Sputnik', 'Warsaw Pact'], 'cold-war-1950s'),
          card('🪖', 'Korea and Hungary', 'In 1950 communist North Korea invaded South Korea. UN forces, led by the USA, fought back, and China joined on the North’s side. The war ended in 1953 with Korea still divided. In 1956 Hungary tried to leave the Warsaw Pact, and Soviet tanks crushed the uprising.', ['Korean War', 'Hungarian Uprising']),
        ],
        questions: [
          gap('q1', 'The USSR tested its first atomic bomb in ___', ['1949']),
          mcq('q2', 'What was Sputnik?', ['The first satellite', 'A nuclear bomb', 'A treaty', 'A spy plane'], 0),
          mcq('q3', 'Which alliance did communist countries form in 1955?', ['The Warsaw Pact', 'NATO', 'The United Nations', 'The Marshall Plan'], 0),
          mcq('q4', 'Who invaded South Korea in 1950?', ['North Korea', 'China', 'The USSR', 'Japan'], 0),
          mcq('q5', 'What happened to the Hungarian Uprising in 1956?', ['Soviet tanks crushed it', 'It succeeded', 'NATO helped it', 'It was peaceful'], 0),
          tf('q6', 'The Korean War ended with Korea reunited.', false, 'It ended in 1953 with Korea still divided.'),
        ],
      },
      {
        id: 'gh-cw-crises',
        title: 'Berlin, Cuba & détente',
        emoji: '☢️',
        learn: [
          card('🧱', 'The Berlin Wall', 'Thousands of East Germans were escaping to the West through Berlin. In August 1961 the East German government built the Berlin Wall overnight to stop them. It became a symbol of the Cold War.', ['Berlin Wall'], 'cold-war-crises'),
          card('☢️', 'The Cuban Missile Crisis', 'In October 1962 American spy planes found Soviet nuclear missiles being built on Cuba. President Kennedy ordered a naval blockade (a “quarantine”). After 13 tense days, Khrushchev agreed to remove the missiles, and the USA secretly agreed to remove its missiles from Turkey.', ['Cuban Missile Crisis', 'Kennedy', 'Khrushchev']),
          card('📞', 'Easing tension', 'In 1963 a hotline linked Washington and Moscow, and the Limited Test Ban Treaty stopped tests in the air. In 1968 Soviet tanks crushed the Prague Spring in Czechoslovakia. In the 1970s a period of détente (relaxed tension) brought the SALT 1 treaty in 1972, limiting nuclear weapons.', ['hotline', 'Prague Spring', 'détente', 'SALT 1']),
        ],
        questions: [
          gap('q1', 'The Berlin Wall was built in ___', ['1961']),
          mcq('q2', 'Why was the Berlin Wall built?', ['To stop East Germans escaping to the West', 'To keep Americans out', 'As a museum', 'To mark a border with France'], 0),
          mcq('q3', 'Where were Soviet missiles found in 1962?', ['Cuba', 'Berlin', 'Turkey', 'Korea'], 0),
          mcq('q4', 'What did the USA secretly agree to remove?', ['Its missiles from Turkey', 'The Berlin Wall', 'Its navy', 'Its troops from Korea'], 0),
          mcq('q5', 'A period of relaxed tension is called…', ['Détente', 'Blockade', 'Containment', 'Brinkmanship'], 0),
          order('q6', 'Put these in order', ['Berlin Wall built', 'Cuban Missile Crisis', 'Prague Spring', 'SALT 1 signed']),
        ],
      },
    ],
  },
  {
    id: 'g-hist-medicine',
    title: 'Health and the people',
    stage: STAGE,
    description: 'Medicine in Britain from c1000 to today: ideas about disease, surgery and public health.',
    colour: '#16a085',
    lessons: [
      {
        id: 'gh-med-medieval',
        title: 'Medieval medicine',
        emoji: '🩸',
        learn: [
          card('🩸', 'The Four Humours', 'Medieval doctors followed the ancient Greek Hippocrates and the Roman doctor Galen. They believed the body had four humours: blood, phlegm, yellow bile and black bile. Illness came from an imbalance, so treatments like bleeding and purging tried to restore the balance.', ['Four Humours', 'Hippocrates', 'Galen'], 'four-humours'),
          card('⛪', 'The Church', 'The Church was powerful and taught that illness could be a punishment from God, so prayer and pilgrimage were common cures. It supported Galen’s ideas and discouraged dissection. Monks and nuns ran hospitals that cared for the sick rather than curing them.', ['Church', 'dissection']),
        ],
        questions: [
          mcq('q1', 'Which is NOT one of the Four Humours?', ['Saliva', 'Blood', 'Phlegm', 'Black bile'], 0),
          mcq('q2', 'Which Roman doctor’s ideas dominated medieval medicine?', ['Galen', 'Vesalius', 'Harvey', 'Lister'], 0),
          mcq('q3', 'Bleeding a patient was meant to…', ['Rebalance the humours', 'Kill germs', 'Clean the blood of bacteria', 'Stop pain'], 0),
          tf('q4', 'The medieval Church encouraged doctors to dissect bodies.', false, 'It discouraged dissection, which slowed progress.'),
          mcq('q5', 'Medieval hospitals were mostly run by…', ['Monks and nuns', 'The government', 'Universities', 'Barbers'], 0),
          mcq('q6', 'Many people thought illness could be a punishment from…', ['God', 'The king', 'Germs', 'Doctors'], 0),
        ],
      },
      {
        id: 'gh-med-renaissance',
        title: 'The Renaissance',
        emoji: '🫀',
        learn: [
          card('🫀', 'New thinkers', 'Andreas Vesalius dissected bodies and showed that Galen had made mistakes, in his book On the Fabric of the Human Body (1543). Ambroise Paré, a French army surgeon, used ligatures (tying blood vessels) and soothing ointment instead of boiling oil. William Harvey proved in 1628 that the heart pumps blood around the body.', ['Vesalius', 'Paré', 'Harvey'], 'renaissance-medicine'),
          card('🖨️', 'Why ideas spread', 'The printing press let accurate books and drawings spread quickly. But change was slow: doctors still used humours to treat patients. During the Great Plague of 1665, people still blamed bad air.', ['printing press', 'Great Plague']),
        ],
        questions: [
          mcq('q1', 'Who proved that blood circulates around the body?', ['William Harvey', 'Andreas Vesalius', 'Ambroise Paré', 'Galen'], 0),
          mcq('q2', 'Who showed that Galen’s anatomy had mistakes?', ['Andreas Vesalius', 'William Harvey', 'Edward Jenner', 'John Snow'], 0),
          mcq('q3', 'Paré tied off blood vessels using…', ['Ligatures', 'Boiling oil', 'Leeches', 'Carbolic acid'], 0),
          gap('q4', 'Harvey published his work on circulation in ___', ['1628']),
          mcq('q5', 'Which invention helped new medical ideas spread?', ['The printing press', 'The microscope', 'The steam engine', 'The telephone'], 0),
          tf('q6', 'After the Renaissance, doctors immediately stopped using the Four Humours.', false, 'Change was slow, and treatments stayed similar for a long time.'),
        ],
      },
      {
        id: 'gh-med-industrial',
        title: '18th & 19th-century breakthroughs',
        emoji: '🔬',
        learn: [
          card('💉', 'Vaccination and germs', 'In 1796 Edward Jenner used cowpox to protect against smallpox: the first vaccination. In 1861 Louis Pasteur published germ theory, proving microbes cause decay and disease. Robert Koch then identified the specific bacteria behind diseases like TB.', ['Jenner', 'vaccination', 'germ theory', 'Pasteur', 'Koch'], 'industrial-medicine'),
          card('🔪', 'Safer surgery', 'Surgery had three problems: pain, infection and bleeding. James Simpson used chloroform as an anaesthetic in 1847. Joseph Lister used carbolic acid as an antiseptic from 1867, cutting deaths from infection.', ['anaesthetic', 'chloroform', 'antiseptic', 'Lister']),
          card('🚰', 'Public health', 'In 1854 John Snow traced a cholera outbreak to a water pump on Broad Street in London. Florence Nightingale improved nursing and hospital hygiene. The 1875 Public Health Act made councils provide clean water and sewers.', ['John Snow', 'Florence Nightingale', 'Public Health Act']),
        ],
        questions: [
          mcq('q1', 'Who developed vaccination against smallpox?', ['Edward Jenner', 'Louis Pasteur', 'Joseph Lister', 'John Snow'], 0),
          mcq('q2', 'Who published germ theory?', ['Louis Pasteur', 'Edward Jenner', 'James Simpson', 'William Harvey'], 0),
          mcq('q3', 'Lister used carbolic acid to fight…', ['Infection', 'Pain', 'Bleeding', 'Fever'], 0),
          mcq('q4', 'What did John Snow link cholera to?', ['A water pump', 'Bad air', 'Rats', 'The stars'], 0),
          order('q5', 'Put these in order', ['Jenner’s vaccination', 'Simpson uses chloroform', 'Pasteur’s germ theory', 'Public Health Act']),
          match('q6', 'Match the problem to the solution', [
            ['Pain', 'Anaesthetics'],
            ['Infection', 'Antiseptics'],
            ['Dirty water', 'Public health laws'],
          ]),
        ],
      },
      {
        id: 'gh-med-modern',
        title: 'Modern medicine',
        emoji: '🏥',
        learn: [
          card('🧫', 'Penicillin', 'In 1928 Alexander Fleming noticed that mould had killed bacteria on a plate. Howard Florey and Ernst Chain turned it into a usable drug around 1940, and during the Second World War the USA mass-produced it to treat wounded soldiers. It was the first antibiotic.', ['penicillin', 'Fleming', 'antibiotic'], 'penicillin-chain'),
          card('🏥', 'The NHS and beyond', 'The National Health Service, set up by Aneurin Bevan in 1948, made healthcare free for everyone. In 1953 the structure of DNA was discovered, helped by Rosalind Franklin’s X-ray images. Modern medicine includes transplants, keyhole surgery and vaccination campaigns.', ['NHS', 'Aneurin Bevan', 'DNA']),
        ],
        questions: [
          gap('q1', 'Fleming discovered penicillin in ___', ['1928']),
          mcq('q2', 'Who turned penicillin into a usable drug?', ['Florey and Chain', 'Watson and Crick', 'Jenner and Snow', 'Lister and Simpson'], 0),
          gap('q3', 'The NHS was set up in ___', ['1948']),
          mcq('q4', 'Who set up the NHS?', ['Aneurin Bevan', 'Winston Churchill', 'Florence Nightingale', 'Alexander Fleming'], 0),
          mcq('q5', 'What helped mass-produce penicillin?', ['The Second World War', 'The Black Death', 'The printing press', 'The Industrial Revolution'], 0),
          tf('q6', 'Penicillin was the first antibiotic.', true),
        ],
      },
    ],
  },
  {
    id: 'g-hist-normans',
    title: 'Norman England c1066–c1100',
    stage: STAGE,
    description: 'Conquest and control, life under the Normans, the Church, and Durham Cathedral.',
    colour: '#b8742a',
    lessons: [
      {
        id: 'gh-norman-conquest',
        title: 'Conquest & control',
        emoji: '🏰',
        learn: [
          card('⚔️', 'Why William won', 'William was a skilled leader with a well-prepared army of archers, infantry and cavalry. The Normans used feigned retreats to break the English shield wall. He was also lucky: Harold’s army was exhausted from Stamford Bridge.', ['feigned retreat', 'shield wall']),
          card('🔥', 'Revolts', 'Earls Edwin and Morcar rebelled in 1068. A rising in the North in 1069 led to the Harrying of the North (1069–70), when William destroyed land and food. Hereward the Wake held out at Ely in 1070–71, and the Revolt of the Earls in 1075 was the last big rebellion.', ['Harrying of the North', 'Hereward the Wake', 'Revolt of the Earls'], 'norman-revolts'),
          card('🏰', 'Control', 'William built hundreds of castles, replaced English earls with Norman barons, and in 1086 ordered the Domesday Book. When he died in 1087 his son William Rufus became king.', ['castles', 'Domesday Book', 'William Rufus']),
        ],
        questions: [
          mcq('q1', 'What tactic did the Normans use to break the shield wall?', ['Feigned retreats', 'Cannons', 'Siege towers', 'A sea battle'], 0),
          order('q2', 'Put these revolts in order', ['Edwin and Morcar', 'Rising in the North', 'Hereward at Ely', 'Revolt of the Earls']),
          mcq('q3', 'Where did Hereward the Wake hold out?', ['Ely', 'York', 'Durham', 'London'], 0),
          gap('q4', 'The Revolt of the Earls was in ___', ['1075']),
          mcq('q5', 'Who became king when William died in 1087?', ['William Rufus', 'Harold Godwinson', 'Edgar Aethling', 'Henry II'], 0),
          tf('q6', 'The Harrying of the North destroyed land and food so people starved.', true),
        ],
      },
      {
        id: 'gh-norman-life',
        title: 'Life under the Normans',
        emoji: '🌲',
        learn: [
          card('🌲', 'Changes', 'The feudal system linked land to loyalty and military service. Harsh forest laws turned large areas, like the New Forest, into royal hunting grounds where ordinary people couldn’t hunt or gather wood. Norman French became the language of the rulers, and Latin was used in the Church and in government records.', ['feudal system', 'forest laws', 'Norman French'], 'norman-life'),
          card('🏘️', 'What stayed the same', 'Most English people were peasants and still farmed the land in much the same way. Villages and the shire system of local government continued. The Domesday Book shows how much land and wealth had passed to Norman lords.', ['continuity', 'Domesday Book']),
        ],
        questions: [
          mcq('q1', 'Royal hunting grounds were protected by…', ['Forest laws', 'The Domesday Book', 'Magna Carta', 'The Church'], 0),
          mcq('q2', 'Which language did Norman rulers speak?', ['Norman French', 'Old Norse', 'Welsh', 'Spanish'], 0),
          tf('q3', 'Daily life for most peasants changed completely after 1066.', false, 'Most still farmed the land in much the same way.'),
          mcq('q4', 'Which was a famous royal forest?', ['The New Forest', 'Sherwood Park', 'Hyde Park', 'Kielder'], 0),
          mcq('q5', 'Which language was used in government records?', ['Latin', 'English', 'Greek', 'Norman French'], 0),
          mcq('q6', 'What did the Domesday Book show?', ['How much land and wealth Norman lords held', 'A list of battles', 'The laws of the forest', 'A map of castles'], 0),
        ],
      },
      {
        id: 'gh-norman-church',
        title: 'The Church & Durham Cathedral',
        emoji: '⛪',
        learn: [
          card('⛪', 'Reforming the Church', 'In 1070 William made Lanfranc Archbishop of Canterbury. He replaced English bishops with Normans, set up church courts, and insisted that priests should not marry. Many new monasteries were founded, and cathedrals were rebuilt in the Norman style.', ['Lanfranc', 'church courts', 'monasteries']),
          card('🏛️', 'Durham Cathedral', 'Durham Cathedral was begun in 1093 by Bishop William of St Calais. It sits on a rocky peninsula above the River Wear, next to Durham Castle, showing Norman power over the North. Its Romanesque style has huge pillars and round arches, and it has some of the earliest rib vaults in Europe. It holds the shrine of St Cuthbert, which drew pilgrims.', ['Durham Cathedral', 'Romanesque', 'rib vaults', 'St Cuthbert'], 'durham-cathedral'),
        ],
        questions: [
          mcq('q1', 'Who did William make Archbishop of Canterbury in 1070?', ['Lanfranc', 'Thomas Becket', 'Odo', 'Stigand'], 0),
          gap('q2', 'Durham Cathedral was begun in ___', ['1093']),
          mcq('q3', 'Whose shrine is in Durham Cathedral?', ['St Cuthbert', 'Thomas Becket', 'St Alban', 'St George'], 0),
          mcq('q4', 'The Norman style of round arches and huge pillars is called…', ['Romanesque', 'Gothic', 'Tudor', 'Classical'], 0),
          mcq('q5', 'What does the cathedral’s position next to the castle show?', ['Norman power over the North', 'That it was built by the Vikings', 'That Durham was the capital', 'That it was a prison'], 0),
          tf('q6', 'Durham Cathedral has some of the earliest rib vaults in Europe.', true),
        ],
      },
    ],
  },
];
