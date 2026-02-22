import type { Question } from '../types';

export const thalerQuestions: Question[] = [
  {
    id: 19201, topic: 'thaler', difficulty: 'easy',
    question: 'Richard Thaler\'s "nudge" concept involves:',
    options: ['Changing choice architecture to guide better decisions without restricting freedom', 'Forcing people to make specific choices', 'Providing financial penalties for bad decisions', 'Removing all options except the best one'],
    correctIndex: 0,
    explanation: 'A nudge changes the default or presentation of choices to steer behavior toward better outcomes while preserving freedom of choice (libertarian paternalism).',
    realWorld: 'Auto-enrollment in retirement savings plans is Thaler\'s most famous nudge — participation jumped from 49% to 86%.',
    hint: 'Make the better choice the path of least resistance.',
  },
  {
    id: 19202, topic: 'thaler', difficulty: 'hard',
    question: 'Thaler\'s concept of "mental accounting" explains why people:',
    options: ['Treat money differently depending on its source or intended use, violating fungibility', 'Always maximize expected utility', 'Never save money', 'Invest rationally in diversified portfolios'],
    correctIndex: 0,
    explanation: 'Mental accounting means people categorize money into mental "buckets" (rent, fun, savings) and treat them differently. A $100 bonus might be spent freely while $100 in salary is saved — even though money is fungible.',
    realWorld: 'Casinos exploit this: gamblers treat winnings as "house money" and take bigger risks with it.',
    hint: 'Money is money — but our brains don\'t treat it that way.',
  },
  {
    id: 19203, topic: 'thaler', difficulty: 'sota',
    question: 'The "planner-doer" model in Thaler\'s behavioral economics treats individuals as:',
    options: ['Having two selves — a far-sighted planner and a myopic doer — in perpetual conflict', 'Perfectly rational utility maximizers', 'Always following social norms', 'Random decision makers'],
    correctIndex: 0,
    explanation: 'Thaler\'s planner-doer model (inspired by principal-agent theory) explains self-control problems: the "planner" sets long-term goals, but the "doer" acts on immediate impulses. Commitment devices help the planner constrain the doer.',
    realWorld: 'This model explains why people set alarm clocks (planner constrains future doer) and why savings commitment accounts work in developing countries.',
    hint: 'Think of it as your rational self trying to control your impulsive self.',
  },
];
