import type { Question } from '../types';

export const senQuestions: Question[] = [
  {
    id: 19301, topic: 'amartya-sen', difficulty: 'easy',
    question: 'Amartya Sen\'s "capability approach" measures development by:',
    options: ['People\'s freedoms to achieve lives they value — not just income', 'GDP per capita', 'Industrial output', 'Military spending'],
    correctIndex: 0,
    explanation: 'Sen argued that development should be measured by what people can do and be (capabilities), not just what they have. Poverty is "capability deprivation" — lack of freedom to live well.',
    realWorld: 'The capability approach inspired the Human Development Index (HDI), shifting global policy from GDP-only to human welfare.',
    hint: 'Development as freedom — what matters is what you CAN do, not just what you own.',
  },
  {
    id: 19302, topic: 'amartya-sen', difficulty: 'hard',
    question: 'Sen\'s impossibility theorem (Liberal Paradox) shows that:',
    options: ['No social choice function can simultaneously satisfy Pareto efficiency and minimal liberalism', 'Democracy always produces optimal outcomes', 'Free markets maximize welfare', 'Dictatorships are efficient'],
    correctIndex: 0,
    explanation: 'Sen proved that even minimal individual liberty (each person having decisive say over at least one social choice) conflicts with the Pareto principle. This reveals a fundamental tension between freedom and efficiency.',
    realWorld: 'This theorem challenges welfare economics and shows that "efficient" outcomes may require violating individual rights.',
    hint: 'Even giving everyone veto power over just ONE personal choice creates conflicts with Pareto optimality.',
  },
  {
    id: 19303, topic: 'amartya-sen', difficulty: 'sota',
    question: 'Sen\'s analysis of famines demonstrated that:',
    options: ['Famines are caused by failures of entitlement and distribution, not just food shortages', 'Famines only occur when food supply drops', 'Government intervention always prevents famines', 'Population growth is the primary cause'],
    correctIndex: 0,
    explanation: 'In "Poverty and Famines" (1981), Sen showed that the 1943 Bengal famine occurred despite adequate food supply — people starved because they lost their "entitlements" (wages, exchange capabilities) to acquire food.',
    realWorld: 'This insight revolutionized famine policy: no democracy with a free press has ever experienced a famine (Sen\'s democracy-famine thesis).',
    hint: 'It\'s not about how much food exists — it\'s about who can access it.',
  },
];
