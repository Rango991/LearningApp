import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// In-depth KS3 History for the three topics Gosforth East Middle School teaches in
// Year 8 (the British Empire and the slave trade, the Industrial Revolution, and
// the First World War), with North East links. These go deeper than the overview
// lessons in history.ts. Question ids are stored in progress data, so never change an existing id.

const Y89 = 'Years 8–9';

export const historyY89: Unit[] = [
  {
    id: 'hist-empire-slavery',
    title: 'Empire & the slave trade',
    stage: Y89,
    description: 'How the British Empire grew, the triangular trade and the Middle Passage, and how enslaved people and campaigners won abolition.',
    colour: '#8a5a2b',
    lessons: [
      {
        id: 'hes-empire',
        title: 'Building the British Empire',
        emoji: '🌐',
        learn: [
          card('⛵', 'Why build an empire?', 'From the 1600s, Britain took control of lands across the world for trade, wealth and power. Colonies supplied valuable goods like sugar, cotton, tea and spices, and bought British-made goods. Some Britons also believed they were spreading Christianity and “civilisation”, an idea now seen as racist.', ['empire', 'colony', 'trade'], 'empire-goods'),
          card('🇮🇳', 'India and the East India Company', 'The East India Company, set up in 1600 to trade, gradually took control of much of India with its own private army. After a rebellion in 1857, the British government ruled India directly until independence in 1947.', ['East India Company', 'India']),
          card('⚖️', 'Different views', 'The Empire made Britain very rich and powerful, and built railways, ports and schools in some places. But millions of people lost their land, freedom, culture and lives, and many suffered famines. Historians still argue about its impact, so always ask whose point of view a source shows.', ['interpretation', 'impact']),
        ],
        questions: [
          mcq('q1', 'Which of these was a main reason for building the Empire?', ['Trade and wealth', 'Sport', 'Holidays', 'Space exploration'], 0),
          gap('q2', 'The East India Company was set up in ___.', ['1600']),
          gap('q3', 'India became independent in ___.', ['1947']),
          mcq('q4', 'Which goods did Britain want from its colonies?', ['Sugar, cotton and tea', 'Cars and phones', 'Coal and iron only', 'Plastic'], 0),
          tf('q5', 'Historians all agree about the impact of the British Empire.', false, 'They still argue about it, so point of view matters.'),
          mcq('q6', 'Why is it important to ask whose point of view a source shows?', ['People in Britain and in the colonies experienced the Empire very differently', 'All sources say the same thing', 'Old sources are always wrong', 'It doesn’t matter'], 0),
        ],
      },
      {
        id: 'hes-trade',
        title: 'The triangular trade',
        emoji: '⛓️',
        learn: [
          card('🔺', 'Three journeys', 'Ships left British ports like Liverpool, Bristol and London carrying guns, cloth and alcohol to West Africa. There, the goods were traded for enslaved African people. Ships carried them across the Atlantic to the Caribbean and the Americas. Then sugar, cotton, tobacco and rum made by enslaved people were shipped back to Britain.', ['triangular trade', 'Liverpool', 'Bristol'], 'triangular-trade'),
          card('🌊', 'The Middle Passage', 'The crossing of the Atlantic, the Middle Passage, took six to eight weeks. People were chained and packed below deck with little air, food or water. Many died from disease and cruelty. Over about 400 years, more than 12 million Africans were forced across the Atlantic by European traders; British ships carried over 3 million.', ['Middle Passage']),
          card('🌱', 'Life on the plantations', 'Enslaved people were treated as property. They were forced to work long hours on sugar, cotton and tobacco plantations, could be bought, sold and separated from their families, and were punished brutally. Their children were born into slavery too.', ['plantation', 'enslaved']),
        ],
        questions: [
          order('q1', 'Put the triangular trade in order, starting in Britain', ['Goods shipped from Britain to West Africa', 'Enslaved Africans forced across the Atlantic', 'Sugar, cotton and tobacco shipped back to Britain']),
          mcq('q2', 'Which of these was a major British slave-trading port?', ['Liverpool', 'Newcastle', 'Edinburgh', 'Cardiff'], 0),
          mcq('q3', 'How long did the Middle Passage usually take?', ['Six to eight weeks', 'One day', 'Two years', 'Six months'], 0),
          tf('q4', 'Enslaved people were treated as property that could be bought and sold.', true),
          mcq('q5', 'Which goods were made on plantations and shipped to Britain?', ['Sugar, cotton and tobacco', 'Guns and cloth', 'Coal and steel', 'Wool and tin'], 0),
          gap('q6', 'More than ___ million Africans were forced across the Atlantic by European traders.', ['12', 'twelve']),
        ],
      },
      {
        id: 'hes-abolition',
        title: 'Resistance & abolition',
        emoji: '✊',
        learn: [
          card('✊', 'Resistance', 'Enslaved people resisted all the time: working slowly, running away, keeping their culture alive, and in armed revolts. In 1791 enslaved people in the French colony of Saint-Domingue rose up; led by Toussaint Louverture, they won and founded Haiti, the first nation created by a successful revolt of enslaved people.', ['resistance', 'Haitian Revolution', 'Toussaint Louverture']),
          card('📖', 'The campaign in Britain', 'Olaudah Equiano, who had been enslaved, wrote a bestselling life story in 1789 that showed readers the truth. Thomas Clarkson gathered evidence, William Wilberforce argued in Parliament, and thousands of ordinary people signed petitions and boycotted slave-grown sugar.', ['Olaudah Equiano', 'William Wilberforce', 'boycott'], 'abolition-timeline'),
          card('⚖️', 'Abolition', 'Parliament abolished the British slave trade in 1807, and slavery itself in the British Empire in 1833. Slave owners were paid £20 million in compensation; the people who had been enslaved got nothing. In 1846, two Newcastle Quaker women, Anna and Ellen Richardson, raised the money to buy the freedom of the American campaigner Frederick Douglass.', ['abolition', 'compensation', 'Frederick Douglass']),
        ],
        questions: [
          gap('q1', 'The British slave trade was abolished in ___.', ['1807']),
          gap('q2', 'Slavery was abolished in the British Empire in ___.', ['1833']),
          mcq('q3', 'Who led the revolt that created Haiti?', ['Toussaint Louverture', 'William Wilberforce', 'Olaudah Equiano', 'Thomas Clarkson'], 0),
          match('q4', 'Match the campaigner to what they did', [
            ['Olaudah Equiano', 'Wrote his life story as a formerly enslaved man'],
            ['William Wilberforce', 'Argued for abolition in Parliament'],
            ['Thomas Clarkson', 'Gathered evidence about the trade'],
          ]),
          mcq('q5', 'Who was paid compensation when slavery was abolished?', ['The slave owners', 'The people who had been enslaved', 'Nobody', 'The campaigners'], 0),
          tf('q6', 'Newcastle campaigners helped buy Frederick Douglass’s freedom.', true),
          mcq('q7', 'How did ordinary people in Britain support abolition?', ['Signing petitions and boycotting slave-grown sugar', 'Joining the Navy', 'Building factories', 'Voting in elections'], 0),
        ],
      },
    ],
  },
  {
    id: 'hist-industry',
    title: 'The Industrial Revolution',
    stage: Y89,
    description: 'Inventions and factories, life and disease in the new towns, and coal and railways in the North East.',
    colour: '#64748b',
    lessons: [
      {
        id: 'hir-machines',
        title: 'Machines, factories & steam',
        emoji: '⚙️',
        learn: [
          card('🧵', 'New machines', 'From about 1750, new inventions changed how things were made. Hargreaves’ spinning jenny (1764) spun many threads at once. Richard Arkwright’s water frame powered big mills, and his Cromford Mill (1771) is often called the first modern factory. James Watt’s improved steam engine (1776) meant factories could be built anywhere, not just by rivers.', ['spinning jenny', 'Arkwright', 'James Watt'], 'industry-timeline'),
          card('🏭', 'Factory life', 'Workers, including young children, worked 12 to 14 hours a day, six days a week, with harsh fines and punishments and dangerous machines. Children crawled under moving machines to clean them. The Factory Act of 1833 banned work for children under 9 in textile mills and limited hours for older children.', ['factory', 'child labour', 'Factory Act']),
        ],
        questions: [
          order('q1', 'Put these inventions in order', ['Spinning jenny (1764)', 'Cromford Mill (1771)', 'Watt’s steam engine (1776)', 'Stockton and Darlington Railway (1825)']),
          mcq('q2', 'Why was Watt’s steam engine so important?', ['Factories no longer had to be built by rivers', 'It made clothes', 'It was the first car', 'It cleaned the water'], 0),
          mcq('q3', 'Who built Cromford Mill?', ['Richard Arkwright', 'James Watt', 'George Stephenson', 'John Snow'], 0),
          gap('q4', 'The Factory Act of ___ banned children under 9 from working in textile mills.', ['1833']),
          tf('q5', 'Factory workers usually worked short, eight-hour days.', false, 'Twelve to fourteen hours was common.'),
          mcq('q6', 'Why did children clean under moving machines?', ['They were small enough to fit', 'They enjoyed it', 'Adults weren’t allowed', 'It was safe'], 0),
        ],
      },
      {
        id: 'hir-towns',
        title: 'Life in industrial towns',
        emoji: '🏚️',
        learn: [
          card('🏘️', 'Crowded towns', 'People poured into towns for factory work: Manchester grew from about 25,000 people in 1772 to over 300,000 by 1850. Families crammed into cheap back-to-back houses with no running water. Toilets (privies) were shared by many houses, and sewage ran into streets and rivers.', ['back-to-back houses', 'urbanisation'], 'town-problems'),
          card('🦠', 'Cholera', 'Cholera spread through water polluted with sewage and killed tens of thousands in epidemics in 1832, 1848 and 1854. Most people blamed “miasma” (bad air). In 1854 Dr John Snow mapped deaths in London and showed they clustered around one water pump on Broad Street. When the pump handle was removed, cases fell.', ['cholera', 'John Snow', 'miasma']),
          card('🚰', 'Cleaning up', 'After the “Great Stink” of 1858, when the River Thames smelled so bad that Parliament could hardly work, Joseph Bazalgette built London’s sewer system. The Public Health Act of 1875 made councils provide clean water, drains and rubbish collection.', ['Bazalgette', 'Public Health Act']),
        ],
        questions: [
          mcq('q1', 'How did cholera spread?', ['Through water polluted with sewage', 'Through bad air', 'From rats’ fleas', 'Through the post'], 0),
          mcq('q2', 'What did John Snow discover in 1854?', ['Deaths clustered around one water pump', 'Cholera was caused by bad air', 'A vaccine for cholera', 'The steam engine'], 0),
          tf('q3', 'Most Victorians at first believed disease was spread by bad air (miasma).', true),
          gap('q4', 'The Public Health Act was passed in ___.', ['1875']),
          mcq('q5', 'What was the Great Stink of 1858?', ['The River Thames smelled terribly of sewage', 'A factory fire', 'A cholera vaccine', 'A new perfume'], 0),
          mcq('q6', 'Who built London’s sewer system?', ['Joseph Bazalgette', 'John Snow', 'James Watt', 'Richard Arkwright'], 0),
        ],
      },
      {
        id: 'hir-north-east',
        title: 'Coal & railways in the North East',
        emoji: '🚂',
        learn: [
          card('⛏️', 'King Coal', 'Coal powered the Industrial Revolution, and the Northumberland and Durham coalfield was one of the biggest. Mining was dangerous: in the Hartley Pit disaster of 1862, 204 men and boys were trapped and died when the only shaft was blocked. Afterwards, the law said every mine must have two ways out.', ['coal', 'Hartley Pit disaster']),
          card('🚂', 'The Stephensons', 'George Stephenson, born in Wylam near Newcastle in 1781, engineered the Stockton and Darlington Railway (1825), the world’s first public railway to use steam locomotives. His son Robert built the Rocket in Newcastle, which won the Rainhill Trials in 1829 and pulled trains on the Liverpool and Manchester Railway.', ['George Stephenson', 'Stockton and Darlington', 'Rocket'], 'railway-timeline'),
          card('🛤️', 'What railways changed', 'Railways moved coal and goods quickly and cheaply, let people travel for work and holidays, brought fresh food to towns, and even made the whole country use the same time (railway time). Tyneside also became famous for shipbuilding and engineering.', ['railway time', 'shipbuilding']),
        ],
        questions: [
          mcq('q1', 'Where was George Stephenson born?', ['Wylam, near Newcastle', 'London', 'Manchester', 'Edinburgh'], 0),
          gap('q2', 'The Stockton and Darlington Railway opened in ___.', ['1825']),
          mcq('q3', 'Which locomotive won the Rainhill Trials in 1829?', ['Rocket', 'Locomotion', 'Mallard', 'Flying Scotsman'], 0),
          mcq('q4', 'What law was passed after the Hartley Pit disaster?', ['Every mine must have two ways out', 'Children could not work', 'Mines must close', 'Miners must be paid more'], 0),
          tf('q5', 'Railways made the whole country use the same time.', true),
          gap('q6', 'In the Hartley Pit disaster of 1862, ___ men and boys died.', ['204']),
          mcq('q7', 'Why was coal so important?', ['It powered steam engines and factories', 'It was used to make clothes', 'It was eaten', 'It was used for money'], 0),
        ],
      },
    ],
  },
  {
    id: 'hist-ww1',
    title: 'The First World War',
    stage: Y89,
    description: 'Why war broke out in 1914, life in the trenches and the Somme, and the home front and the peace.',
    colour: '#7a6a3a',
    lessons: [
      {
        id: 'hw-causes',
        title: 'Why war broke out',
        emoji: '💥',
        learn: [
          card('🧨', 'Long-term causes: MAIN', 'Militarism: countries built up huge armies and navies, like the race between Britain and Germany to build Dreadnought battleships. Alliances: Europe split into two sides, the Triple Entente (Britain, France, Russia) and the Triple Alliance (Germany, Austria-Hungary, Italy). Imperialism: rivalry over empires. Nationalism: fierce pride in your own country.', ['militarism', 'alliances', 'imperialism', 'nationalism'], 'main-causes'),
          card('🔫', 'The spark', 'On 28 June 1914, Archduke Franz Ferdinand, heir to the throne of Austria-Hungary, was shot in Sarajevo by Gavrilo Princip, a Bosnian Serb. Austria-Hungary declared war on Serbia, and the alliances dragged the other powers in. When Germany invaded Belgium, Britain declared war on 4 August 1914.', ['Franz Ferdinand', 'Sarajevo', 'Belgium']),
        ],
        questions: [
          match('q1', 'Match the letter of MAIN to its cause', [
            ['M', 'Militarism'],
            ['A', 'Alliances'],
            ['I', 'Imperialism'],
            ['N', 'Nationalism'],
          ]),
          mcq('q2', 'Whose assassination sparked the war?', ['Archduke Franz Ferdinand', 'King George V', 'The Kaiser', 'Tsar Nicholas II'], 0),
          mcq('q3', 'Which countries were in the Triple Entente?', ['Britain, France and Russia', 'Germany, Austria-Hungary and Italy', 'Britain, Germany and France', 'USA, Japan and Russia'], 0),
          mcq('q4', 'What finally made Britain declare war?', ['Germany invaded Belgium', 'Russia attacked Britain', 'France asked to join', 'The Archduke visited London'], 0),
          gap('q5', 'Britain declared war on 4 August ___.', ['1914']),
          tf('q6', 'The arms race between Britain and Germany is an example of militarism.', true),
        ],
      },
      {
        id: 'hw-trenches',
        title: 'The trenches & the Somme',
        emoji: '🪖',
        learn: [
          card('🪖', 'The Western Front', 'By the end of 1914 both sides had dug lines of trenches stretching from the Belgian coast to Switzerland. Between them lay no man’s land, full of barbed wire and shell craters. Soldiers faced rats, lice, mud, freezing water that caused trench foot, and constant shelling.', ['Western Front', 'no man’s land', 'trench foot'], 'trench-section'),
          card('💣', 'New weapons', 'Machine guns made attacking across open ground deadly. Poison gas was first used in 1915. Britain introduced tanks in 1916, and aircraft were used to spot enemy positions and later to fight.', ['machine gun', 'poison gas', 'tank']),
          card('⚰️', 'The Battle of the Somme', 'On 1 July 1916, British troops attacked after a week of shelling that was supposed to destroy the German defences. It didn’t: about 19,000 British soldiers were killed on the first day alone, the worst day in the British Army’s history. Tyneside battalions, including the Newcastle Commercials and the Tyneside Scottish and Irish, suffered terribly.', ['the Somme']),
        ],
        questions: [
          mcq('q1', 'What was no man’s land?', ['The ground between the two sides’ trenches', 'A country that stayed out of the war', 'A soldier’s rest area', 'A type of tank'], 0),
          mcq('q2', 'What caused trench foot?', ['Standing in cold, wet trenches for days', 'Marching too fast', 'Poison gas', 'Eating bad food'], 0),
          gap('q3', 'The Battle of the Somme began on 1 July ___.', ['1916']),
          match('q4', 'Match the weapon to the year it was first used in the war', [
            ['Poison gas', '1915'],
            ['Tanks', '1916'],
          ]),
          tf('q5', 'The week of shelling before the Somme destroyed the German defences.', false, 'It didn’t, which is why the first day was so deadly.'),
          mcq('q6', 'Roughly how many British soldiers were killed on the first day of the Somme?', ['About 19,000', 'About 190', 'About 1,900', 'About 190,000'], 0),
        ],
      },
      {
        id: 'hw-home-front',
        title: 'The Home Front & the peace',
        emoji: '🕊️',
        learn: [
          card('🏠', 'The Home Front', 'At first, millions volunteered, often in Pals battalions of friends and workmates. From 1916 men had to join up (conscription). The Defence of the Realm Act (DORA) gave the government new powers. Women took over jobs in factories, transport and farms; “munitionettes” made shells. Zeppelins bombed British towns, and food was rationed from 1918.', ['conscription', 'DORA', 'munitionettes', 'rationing'], 'ww1-timeline'),
          card('🕚', 'The end', 'The USA joined the war in 1917. After a final German attack failed, Germany agreed to an armistice (a ceasefire), which began at 11 am on 11 November 1918. Around 880,000 British soldiers had died. We remember them on Remembrance Day with poppies.', ['armistice', 'Remembrance Day']),
          card('📜', 'The Treaty of Versailles', 'In 1919 the Treaty of Versailles made Germany accept the blame for the war, pay huge reparations, give up land and its colonies, and keep only a tiny army. Many Germans felt angry and humiliated, which helped cause the Second World War twenty years later.', ['Treaty of Versailles', 'reparations']),
        ],
        questions: [
          mcq('q1', 'What was conscription?', ['A law making men join the armed forces', 'Volunteering to fight', 'A type of weapon', 'Rationing food'], 0),
          gap('q2', 'The armistice began at 11 am on 11 November ___.', ['1918']),
          mcq('q3', 'What jobs did many women do during the war?', ['Making shells in munitions factories', 'Nothing new', 'Only nursing', 'Fighting in the trenches'], 0),
          mcq('q4', 'What did the Treaty of Versailles make Germany do?', ['Accept blame and pay reparations', 'Join the British Empire', 'Build a bigger army', 'Become part of France'], 0),
          tf('q5', 'Many Germans felt angry and humiliated by the Treaty of Versailles.', true),
          gap('q6', 'The Treaty of Versailles was signed in ___.', ['1919']),
          order('q7', 'Put these events in order', ['War declared', 'Conscription begins', 'USA joins the war', 'Armistice', 'Treaty of Versailles']),
        ],
      },
    ],
  },
  {
    id: 'hist-ww2',
    title: 'The Second World War & the Holocaust',
    stage: Y89,
    description: 'How Hitler’s rise led to war, the Holocaust, and Britain’s Home Front through to victory in 1945.',
    colour: '#475569',
    lessons: [
      {
        id: 'hw2-causes',
        title: 'The road to war',
        emoji: '🪖',
        learn: [
          card('📜', 'After the First World War', 'Many Germans were angry about the Treaty of Versailles. In the Great Depression millions lost their jobs, and Adolf Hitler’s Nazi Party promised to make Germany strong again. Hitler became Chancellor in 1933 and soon made himself dictator.', ['Treaty of Versailles', 'Nazi Party', 'dictator'], 'ww2-timeline'),
          card('🗺️', 'Appeasement fails', 'Hitler broke the treaty: he rebuilt the army, took over Austria in 1938 and then Czechoslovakia. Britain and France tried appeasement, giving in to his demands to keep the peace, until Germany invaded Poland on 1 September 1939. Two days later, Britain declared war.', ['appeasement', 'invasion of Poland']),
        ],
        questions: [
          mcq('q1', 'Who became Chancellor of Germany in 1933?', ['Adolf Hitler', 'Winston Churchill', 'Neville Chamberlain', 'Joseph Stalin'], 0),
          mcq('q2', 'What was appeasement?', ['Giving in to Hitler’s demands to avoid war', 'Declaring war', 'A type of tank', 'A peace treaty in 1919'], 0),
          gap('q3', 'Germany invaded Poland on 1 September ___.', ['1939']),
          tf('q4', 'The Great Depression helped the Nazis gain support.', true),
          mcq('q5', 'Which country did Germany take over in 1938?', ['Austria', 'France', 'Britain', 'Russia'], 0),
          mcq('q6', 'Why were many Germans angry after 1919?', ['The Treaty of Versailles', 'They won the war', 'Hitler was in charge', 'The USA joined them'], 0),
        ],
      },
      {
        id: 'hw2-holocaust',
        title: 'The Holocaust',
        emoji: '🕯️',
        learn: [
          card('🕯️', 'Persecution', 'The Nazis blamed Jewish people for Germany’s problems. From 1933, Jews were driven out of jobs, schools and public places. On Kristallnacht in 1938, synagogues, homes and shops were attacked across Germany. Roma people, disabled people, gay people and political opponents were also persecuted.', ['persecution', 'Kristallnacht', 'antisemitism'], 'holocaust-timeline'),
          card('🕯️', 'Genocide', 'During the war, Jewish people were forced into ghettos, then sent to concentration and death camps such as Auschwitz-Birkenau. Around six million Jews were murdered: the Holocaust. Survivors’ stories, and Anne Frank’s diary, help us remember the victims so that it never happens again.', ['Holocaust', 'genocide', 'Auschwitz']),
        ],
        questions: [
          mcq('q1', 'What was Kristallnacht?', ['Attacks on Jewish homes, shops and synagogues in 1938', 'A battle', 'A peace treaty', 'A Nazi election'], 0),
          gap('q2', 'Around ___ million Jewish people were murdered in the Holocaust.', ['six', '6']),
          mcq('q3', 'Which other groups did the Nazis persecute?', ['Roma people, disabled people and gay people', 'Only soldiers', 'No one else', 'Only British people'], 0),
          mcq('q4', 'Whose diary is one of the best-known accounts of the Holocaust?', ['Anne Frank', 'Winston Churchill', 'Florence Nightingale', 'Queen Victoria'], 0),
          tf('q5', 'We study the Holocaust to remember the victims and help stop it happening again.', true),
          gap('q6', 'The deliberate attempt to destroy a whole people is called ___.', ['genocide']),
        ],
      },
      {
        id: 'hw2-home-front',
        title: 'The Home Front & victory',
        emoji: '🏠',
        learn: [
          card('🏠', 'Britain at war', 'Children were evacuated from cities to the countryside. Food was rationed. During the Blitz (1940–41), German bombers attacked British cities, and Tyneside’s shipyards and factories were targets. Women worked in factories, on farms and in the armed forces.', ['evacuation', 'rationing', 'the Blitz'], 'home-front-ww2'),
          card('🎖️', 'Turning points and victory', 'The RAF won the Battle of Britain in 1940. The USSR and the USA joined the war in 1941. On D-Day, 6 June 1944, Allied troops landed in Normandy. Germany surrendered in May 1945 (VE Day), and Japan in August 1945, after atomic bombs were dropped on Hiroshima and Nagasaki.', ['D-Day', 'VE Day']),
        ],
        questions: [
          mcq('q1', 'Why were children evacuated?', ['To keep them safe from bombing', 'To join the army', 'To work in factories', 'To go on holiday'], 0),
          gap('q2', 'D-Day was on 6 June ___.', ['1944']),
          mcq('q3', 'What was the Blitz?', ['German bombing of British cities', 'A British tank', 'A battle in Russia', 'Food rationing'], 0),
          order('q4', 'Put these in order', ['Battle of Britain', 'USA joins the war', 'D-Day', 'VE Day']),
          tf('q5', 'Women worked in factories and on farms during the war.', true),
          mcq('q6', 'What does VE Day celebrate?', ['Victory in Europe', 'The start of the war', 'D-Day', 'The Blitz'], 0),
        ],
      },
    ],
  },
  {
    id: 'hist-islamic',
    title: 'The Islamic Golden Age',
    stage: Y89,
    description: 'Baghdad and the House of Wisdom, discoveries in maths, science and medicine, and how this knowledge shaped the world.',
    colour: '#0b7285',
    lessons: [
      {
        id: 'hi-baghdad',
        title: 'Baghdad, city of learning',
        emoji: '🕌',
        learn: [
          card('🕌', 'A great city', 'In 762 the Abbasid caliphs built Baghdad, which grew into one of the biggest cities in the world, on trade routes linking Europe, Africa and Asia. At its heart was the House of Wisdom, where scholars translated and studied books from Greece, Persia and India.', ['Baghdad', 'Abbasid', 'House of Wisdom'], 'islamic-golden-age'),
          card('📚', 'Paper and books', 'Papermaking spread from China, and Baghdad soon had paper mills, bookshops and libraries. Books were much cheaper to make than in Europe, where most were still copied by hand onto expensive parchment.', ['paper', 'library']),
        ],
        questions: [
          gap('q1', 'Baghdad was founded in ___.', ['762']),
          mcq('q2', 'What was the House of Wisdom?', ['A centre where scholars studied and translated books', 'The caliph’s palace', 'A market', 'A fortress'], 0),
          mcq('q3', 'Where did papermaking come from?', ['China', 'England', 'Egypt', 'Rome'], 0),
          tf('q4', 'Baghdad was on important trade routes.', true),
          mcq('q5', 'Scholars translated books from…', ['Greece, Persia and India', 'Only England', 'America', 'Australia'], 0),
          mcq('q6', 'Who ruled from Baghdad?', ['The Abbasid caliphs', 'The Normans', 'The Tudors', 'The Romans'], 0),
        ],
      },
      {
        id: 'hi-science',
        title: 'Science, maths & medicine',
        emoji: '🔭',
        learn: [
          card('🔢', 'Maths', 'Al-Khwarizmi wrote a book whose title gave us the word “algebra”, and his name gives us “algorithm”. Scholars took up Indian numerals, including zero; Europe later adopted them as “Arabic numerals”, the 0–9 we use today.', ['algebra', 'al-Khwarizmi', 'Arabic numerals'], 'islamic-scholars'),
          card('🔭', 'Science and medicine', 'Ibn al-Haytham showed that we see because light enters the eye, and tested his ideas with experiments. Ibn Sina (Avicenna) wrote The Canon of Medicine, used in European universities for over 500 years. Hospitals in Baghdad treated patients free of charge.', ['Ibn al-Haytham', 'Ibn Sina', 'experiment']),
        ],
        questions: [
          mcq('q1', 'Al-Khwarizmi’s work gave us the word…', ['Algebra', 'Geometry', 'Biology', 'Physics'], 0),
          mcq('q2', 'Who wrote The Canon of Medicine?', ['Ibn Sina', 'Isaac Newton', 'Galen', 'Charles Darwin'], 0),
          tf('q3', 'Ibn al-Haytham showed that light enters the eye.', true),
          mcq('q4', 'The numerals 0–9 that we use reached Europe through…', ['The Islamic world, from India', 'The Romans', 'The Vikings', 'The Normans'], 0),
          mcq('q5', 'What did Ibn al-Haytham use to test ideas?', ['Experiments', 'Guesses', 'Old books only', 'Votes'], 0),
          gap('q6', 'The word “algorithm” comes from the name al-___.', ['Khwarizmi']),
        ],
      },
      {
        id: 'hi-legacy',
        title: 'Legacy & comparisons',
        emoji: '🌍',
        learn: [
          card('🌍', 'Comparing with Europe', 'While Baghdad thrived in the 800s and 900s, much of Europe had smaller towns, fewer books and less medical knowledge. Knowledge from the Islamic world later reached Europe through Spain, Sicily and the Crusades, and helped spark the Renaissance.', ['comparison', 'Renaissance'], 'knowledge-route'),
          card('🔥', 'The end of the golden age', 'In 1258 the Mongols destroyed Baghdad. A famous story says the River Tigris ran black with ink from all the books thrown into it. But much of the knowledge had already spread, and it still shapes maths, science and medicine today.', ['Mongols', '1258']),
        ],
        questions: [
          gap('q1', 'The Mongols destroyed Baghdad in ___.', ['1258']),
          mcq('q2', 'Islamic knowledge reached Europe partly through…', ['Spain', 'Australia', 'America', 'Antarctica'], 0),
          tf('q3', 'Knowledge from the Islamic world helped spark the European Renaissance.', true),
          mcq('q4', 'In the 900s, compared with Baghdad, most European towns were…', ['Smaller, with fewer books', 'Bigger, with more books', 'Exactly the same', 'Underground'], 0),
          mcq('q5', 'Which modern subject owes a lot to Islamic scholars?', ['Algebra', 'Football', 'Fashion', 'Gardening'], 0),
          mcq('q6', 'Who destroyed Baghdad in 1258?', ['The Mongols', 'The Romans', 'The Vikings', 'The Normans'], 0),
        ],
      },
    ],
  },
];
