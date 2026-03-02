// fama.ts
import type { Question } from '../types';

export const eugeneFamaQuestions: Question[] = [
  {
    id: 69100,
    topic: 'eugene-fama',
    difficulty: 'easy',
    question: 'Fama EMH: weak form means?',
    options: [
      'Prices reflect all past price/volume (no TA works)',
      'All public information reflected',
      'All info including private reflected',
      'Pure random walk (μ=0)'
    ],
    correctIndex: 0,
    explanation: 'R_{t+1} = μ + ε_{t+1}; autocorrelations ρ(k)=0 ∀k.',
    realWorld: 'Technical analysis should have zero alpha.',
    hint: 'Past prices reveal no future edge.'
  },
  {
    id: 69101,
    topic: 'eugene-fama',
    difficulty: 'hard',
    question: 'Fama-French 3-factor model?',
    options: [
      'R_e-R_f = β(R_m-R_f) + sSMB + hHML + ε',
      'CAPM: β(R_m-R_f) only',
      'Carhart 4-factor + momentum',
      'q-factor: investment + profitability'
    ],
    correctIndex: 0,
    explanation: 'SMB=small-minus-big, HML=high-minus-low book/market.',
    realWorld: 'Explains 90-95% cross-section equity returns.',
    hint: 'Market + size + value beats single factor.'
  },
  {
    id: 69102,
    topic: 'eugene-fama',
    difficulty: 'sota',
    question: 'Fama-MacBeth regression procedure?',
    options: [
      'Time-series → cross-section regressions → time-series average t-test',
      'Pooled OLS on panel',
      'Fixed effects panel',
      '2SLS instrumental variables'
    ],
    correctIndex: 0,
    explanation: 'λ_t from monthly cross-sections averaged; std(λ_t)/√T tests significance.',
    realWorld: 'Standard asset pricing lambda testing.',
    hint: 'Cross-section each month, average slopes.'
  },
  {
    id: 69103,
    topic: 'eugene-fama',
    difficulty: 'hard',
    question: 'Fama\'s value effect: HML captures?',
    options: [
      'High book/market (value) beat low book/market (growth)',
      'Momentum: winners beat losers',
      'Low volatility anomaly',
      'Profitability (gross profits/assets)'
    ],
    correctIndex: 0,
    explanation: 'HML avg return 0.4-0.5%/month; distress risk vs mispricing debate.',
    realWorld: 'Value premium cycles/predicts recessions.',
    hint: 'Cheap stocks (high B/M) outperform.'
  },
  {
    id: 69104,
    topic: 'eugene-fama',
    difficulty: 'sota',
    question: 'Fama joint hypothesis problem?',
    options: [
      'Anomaly = market inefficiency OR bad asset pricing model',
      'Pure market inefficiency',
      'Bad data mining only',
      'Transaction cost barrier'
    ],
    correctIndex: 0,
    explanation: 'Reject EMH + model = either prices wrong OR model misses risk.',
    realWorld: 'Factor zoo explosion testing.',
    hint: 'Can\'t separate inefficiency from bad model.'
  }
];
