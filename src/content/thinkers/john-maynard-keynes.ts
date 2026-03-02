import type { Question } from '../types';

export const johnMaynardKeynesQuestions: Question[] = [
  {
    id: 96016, topic: 'john-maynard-keynes', difficulty: 'easy',
    question: 'Keynes argued that during a recession, the most effective response is:',
    options: ['Government increases spending to boost aggregate demand', 'Government cuts spending to balance the budget', 'Central banks raise interest rates', 'Wait for markets to self-correct naturally'],
    correctIndex: 0,
    explanation: 'Keynesian economics holds that in recessions, private demand falls and government spending should fill the gap to prevent economic collapse — counter-cyclical fiscal policy.',
    realWorld: 'This idea drove the New Deal, post-2008 stimulus packages, and COVID-era fiscal responses worldwide.',
    hint: 'When consumers stop spending, someone else must step in.',
  },
  {
    id: 96017, topic: 'john-maynard-keynes', difficulty: 'hard',
    question: 'The Keynesian multiplier effect means that $1 of government spending generates:',
    options: ['More than $1 of total economic output through successive rounds of spending', 'Exactly $1 of GDP growth', 'Less than $1 due to waste and inefficiency', '$0 because it crowds out private investment'],
    correctIndex: 0,
    explanation: 'When the government spends $1, the recipient spends a fraction (marginal propensity to consume), that person spends a fraction, etc. The total effect is 1/(1-MPC), typically 1.5–2x.',
    realWorld: 'During the 2009 stimulus, the CBO estimated multipliers of 1.0–2.5x for different types of spending — infrastructure had the highest multiplier.',
    hint: 'Each dollar gets spent, re-spent, and re-spent again.',
  },
  {
    id: 96018, topic: 'john-maynard-keynes', difficulty: 'sota',
    question: 'Keynes\'s "liquidity trap" occurs when:',
    options: ['Interest rates hit zero and monetary policy becomes ineffective, only fiscal policy works', 'Banks have too much cash and refuse to lend', 'The government runs out of bonds to sell', 'Inflation spirals out of control'],
    correctIndex: 0,
    explanation: 'At the zero lower bound, people hoard cash because bonds yield nothing. The central bank can\'t stimulate further by cutting rates, so fiscal policy (direct spending) becomes the only tool.',
    realWorld: 'Japan experienced a liquidity trap for decades. The US and EU faced similar conditions after 2008, leading to unprecedented quantitative easing experiments.',
    hint: 'When rates can\'t go lower, printing money just gets hoarded.',
  },
];
