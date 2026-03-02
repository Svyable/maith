// hotelling.ts
import type { Question } from '../types';

export const hotellingQuestions: Question[] = [
  {
    id: 69550,
    topic: 'hotelling',
    difficulty: 'easy',
    question: 'Hotelling T² tests?',
    options: [
      'Multivariate mean vector equality: T² = n (x̄₁ - x̄₂)ᵀ S⁻¹ (x̄₁ - x̄₂)',
      'MANOVA between-subjects',
      'Principal components analysis',
      'Canonical correlation'
    ],
    correctIndex: 0,
    explanation: 'Generalizes t-test to p-dimensional vectors; F-distributed.',
    realWorld: 'Quality control, portfolio mean testing.',
    hint: 'Multivariate two-sample t-test.'
  },
  {
    id: 69551,
    topic: 'hotelling',
    difficulty: 'hard',
    question: 'Hotelling T² distribution?',
    options: [
      'T² ~ (n₁n₂/(n₁+n₂))(p/n₁+n₂-p) F_{p,n₁+n₂-p}',
      'χ²_p exact',
      'Normal multivariate',
      'Wishart matrix'
    ],
    correctIndex: 0,
    explanation: 'Pooled covariance S; small sample correction.',
    realWorld: 'Multivariate control charts.',
    hint: 'F-statistic after degrees of freedom adjustment.'
  },
  {
    id: 69552,
    topic: 'hotelling',
    difficulty: 'sota',
    question: 'Hotelling law of spatial competition?',
    options: [
      'Two firms locate at center of [0,1] interval (minimum differentiation)',
      'Firms at ends maximizing differentiation',
      'Uniform spatial distribution',
      'Median voter theorem'
    ],
    correctIndex: 0,
    explanation: 'Nash equilibrium: both at market center.',
    realWorld: 'Political parties, retail location.',
    hint: 'Firms crowd toward center.'
  },
  {
    id: 69553,
    topic: 'hotelling',
    difficulty: 'hard',
    question: 'Hotelling lemma (economics)?',
    options: [
      '∂V(p,w)/∂p_i = -x_i(p,w) (indirect utility derivative)',
      'Shephard lemma: ∂C/∂p = input demand',
      'Roy identity',
      'Slutsky equation'
    ],
    correctIndex: 0,
    explanation: 'Marshallian demand from indirect utility gradient.',
    realWorld: 'Consumer theory duality.',
    hint: 'Negative price derivative gives demand.'
  },
  {
    id: 69554,
    topic: 'hotelling',
    difficulty: 'sota',
    question: 'Hotelling resource depletion?',
    options: [
      'Optimal extraction: p(t) = c + δ ∫ p(s)e^{-δs} ds (Hotelling rule)',
      'Constant extraction rate',
      'Linear depletion',
      'Zero extraction at T'
    ],
    correctIndex: 0,
    explanation: 'Rent grows at interest rate r.',
    realWorld: 'Oil/gas reserve valuation.',
    hint: 'Scarcity rent rises with discount rate.'
  }
];
