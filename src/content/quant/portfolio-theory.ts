import type { Question } from '../types';

export const portfolioTheoryQuestions: Question[] = [
  {
    id: 70100,
    topic: 'portfolio-theory',
    difficulty: 'easy',
    question: 'In Markowitz mean-variance optimization, the efficient frontier represents portfolios that:',
    options: [
      'Maximize return for a given level of risk',
      'Minimize total assets held',
      'Maximize Sharpe ratio only',
      'Eliminate all unsystematic risk',
    ],
    correctIndex: 0,
    explanation: 'The efficient frontier is the set of portfolios offering the highest expected return for each level of risk (standard deviation).',
    realWorld: 'Pension funds and robo-advisors use efficient frontier analysis to build optimal allocations.',
    hint: 'Think about the risk-return tradeoff boundary.',
  },
  {
    id: 70101,
    topic: 'portfolio-theory',
    difficulty: 'hard',
    question: 'The Capital Market Line (CML) differs from the Security Market Line (SML) because:',
    options: [
      'CML uses total risk (σ) while SML uses systematic risk (β)',
      'CML applies only to individual securities',
      'SML assumes no risk-free asset exists',
      'They are mathematically identical',
    ],
    correctIndex: 0,
    explanation: 'CML plots efficient portfolios against total risk, while SML (from CAPM) prices any asset by its beta (systematic risk).',
    realWorld: 'Portfolio managers use SML to assess whether individual stocks are fairly valued relative to their market risk.',
    hint: 'One uses standard deviation, the other uses beta.',
  },
  {
    id: 70102,
    topic: 'portfolio-theory',
    difficulty: 'sota',
    question: 'Black-Litterman model improves on mean-variance optimization primarily by:',
    options: [
      'Combining market equilibrium returns with investor views via Bayesian updating',
      'Eliminating the need for a covariance matrix',
      'Using only historical returns without assumptions',
      'Replacing the risk-free rate with a stochastic process',
    ],
    correctIndex: 0,
    explanation: 'Black-Litterman starts from CAPM equilibrium returns and blends in subjective views using Bayes\' theorem, producing more stable allocations.',
    realWorld: 'Goldman Sachs developed Black-Litterman; it remains the industry standard for institutional asset allocation.',
    hint: 'It\'s a Bayesian approach to blending market-implied returns with personal views.',
  },
];
