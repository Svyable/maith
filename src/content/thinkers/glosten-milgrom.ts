import type { Question } from '../types';

export const glostenMilgromQuestions: Question[] = [
  {
    id: 'glosten-milgrom-1',
    topic: 'glosten-milgrom',
    question: 'In the Glosten-Milgrom (1985) model, why does the bid-ask spread exist?',
    options: [
      'Market makers charge a fee for processing orders',
      'Adverse selection — some traders have private information',
      'Transaction costs from exchange infrastructure',
      'Regulatory requirements mandate a minimum spread',
    ],
    correctAnswer: 1,
    explanation: 'The spread compensates market makers for losses to informed traders (adverse selection). Uninformed traders overpay, subsidizing the information disadvantage.',
    difficulty: 'HARD',
  },
  {
    id: 'glosten-milgrom-2',
    topic: 'glosten-milgrom',
    question: 'In Glosten-Milgrom, the ask price equals:',
    options: [
      'The unconditional expected value of the asset',
      'E[V | buyer arrives] — the expected value conditional on a buy order',
      'The last traded price plus a fixed markup',
      'The midpoint of the previous bid and ask',
    ],
    correctAnswer: 1,
    explanation: 'The ask = E[V | buy]. Since buys are more likely from informed traders when V is high, the ask exceeds the unconditional expectation.',
    difficulty: 'HARD',
  },
  {
    id: 'glosten-milgrom-3',
    topic: 'glosten-milgrom',
    question: 'What happens to the Glosten-Milgrom spread as the proportion of informed traders (μ) increases?',
    options: [
      'Spread narrows — more information improves pricing',
      'Spread widens — adverse selection risk increases',
      'Spread is unaffected — it depends only on volatility',
      'Spread first widens then narrows',
    ],
    correctAnswer: 1,
    explanation: 'Higher μ means the market maker faces more adverse selection, so they widen the spread to protect against informed traders.',
    difficulty: 'EASY',
  },
  {
    id: 'glosten-milgrom-4',
    topic: 'glosten-milgrom',
    question: 'The Glosten-Milgrom model assumes sequential trade. What key mechanism drives price discovery?',
    options: [
      'Limit order book dynamics',
      'Bayesian updating of beliefs after each trade',
      'Mean reversion of asset prices',
      'Auction-based price clearing',
    ],
    correctAnswer: 1,
    explanation: 'After each trade (buy or sell), the market maker updates their belief about the asset value using Bayes\' rule, gradually incorporating private information into prices.',
    difficulty: 'HARD',
  },
  {
    id: 'glosten-milgrom-5',
    topic: 'glosten-milgrom',
    question: 'In market microstructure, what is the key distinction between the Glosten-Milgrom and Kyle (1985) models?',
    options: [
      'GM uses continuous trading; Kyle uses discrete auctions',
      'GM has sequential single-unit trades with spreads; Kyle has a single informed trader with continuous market depth (λ)',
      'GM models high-frequency trading; Kyle models long-term investing',
      'They are mathematically equivalent with different notation',
    ],
    correctAnswer: 1,
    explanation: 'GM features sequential binary trades revealing information through spreads, while Kyle features a single strategic informed trader whose impact is measured by λ (price impact coefficient).',
    difficulty: 'SOTA',
  },
];
