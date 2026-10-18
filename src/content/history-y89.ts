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
];
