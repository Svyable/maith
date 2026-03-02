// sharpe.ts
import type { Question } from '../types';

export const sharpeQuestions: Question[] = [
  {
    id: 69150,
    topic: 'william-sharpe',
    difficulty: 'easy',
    question: 'Sharpe Ratio measures?',
    options: [
      '(R_p-R_f)/σ_p (reward per unit total risk)',
      'R_p-R_f (excess return)',
      'α from CAPM regression',
      'Max drawdown %'
    ],
    correctIndex: 0,
    explanation: 'Higher SR = better risk-adjusted performance.',
    realWorld: 'Mutual fund ranking standard.',
    hint: 'Return above cash per volatility.'
  },
  {
    id: 69151,
    topic: 'william-sharpe',
    difficulty: 'hard',
    question: 'Sharpe optimal portfolio?',
    options: [
      'Tangency portfolio: max (μ_p-R_f)/σ_p on efficient frontier',
      'Minimum variance portfolio',
      'Equal weight',
      'Market cap weight'
    ],
    correctIndex: 0,
    explanation: 'CAL: Capital Allocation Line touches frontier at tangency.',
    realWorld: 'Strategic asset allocation.',
    hint: 'Highest slope from risk-free to frontier.'
  },
  {
    id: 69152,
    topic: 'william-sharpe',
    difficulty: 'sota',
    question: 'Sharpe style analysis?',
    options: [
      'R_p = Σ β_i F_i + ε, Σβ_i=1, β_i≥0 (convex combo factors)',
      'OLS multiple regression',
      'Principal components',
      'Ridge regression'
    ],
    correctIndex: 0,
    explanation: 'Portfolio = convex combination style benchmarks.',
    realWorld: 'Returns-based style analysis (RBSA).',
    hint: 'Fund = weighted mix of asset classes.'
  },
  {
    id: 69153,
    topic: 'william-sharpe',
    difficulty: 'hard',
    question: 'Information Ratio vs Sharpe?',
    options: [
      'IR = (R_p-R_b)/TE (active return per tracking error)',
      '(R_p-R_f)/σ_p total risk',
      'Alpha/σ_α',
      'Sortino ratio (downside)'
    ],
    correctIndex: 0,
    explanation: 'IR measures manager skill vs benchmark.',
    realWorld: 'Active manager evaluation.',
    hint: 'Active return per active risk.'
  },
  {
    id: 69154,
    topic: 'william-sharpe',
    difficulty: 'sota',
    question: 'Sharpe annualized formula?',
    options: [
      'SR_ann = SR_monthly × √12 assuming i.i.d.',
      'SR_monthly × 12',
      'SR_daily × √252',
      'Geometric average'
    ],
    correctIndex: 0,
    explanation: 'σ_ann = σ_monthly √12; SR scales with √time.',
    realWorld: 'Performance reporting standard.',
    hint: 'Volatility scales √T, return linear T.'
  }
];
