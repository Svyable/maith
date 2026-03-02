// shiryaev.ts
import type { Question } from '../types';

export const shiryaevQuestions: Question[] = [
  {
    id: 67010,
    topic: 'albert-shiryaev',
    difficulty: 'easy',
    question:
      'Shiryaev Bayesian quickest detection minimizes:',
    options: [
      'Expected delay subject to false alarm probability',
      'Variance only',
      'Mean only',
      'Likelihood ratio'
    ],
    correctIndex: 0,
    explanation:
      'Optimal stopping with prior on change point.',
    realWorld:
      'Quality control, cybersecurity.',
    hint:
      'Tradeoff: detection delay vs false alarm.'
  },
  {
    id: 67011,
    topic: 'albert-shiryaev',
    difficulty: 'hard',
    question:
      'Shiryaev recursion for posterior probability $\\pi_t$ involves:',
    options: [
      'Likelihood ratio update via Bayes rule',
      'OLS regression',
      'Moving average',
      'Kalman filter only'
    ],
    correctIndex: 0,
    explanation:
      'Posterior updated with prior and new likelihood.',
    realWorld:
      'Sequential hypothesis testing.',
    hint:
      'Bayesian filtering.'
  },
  {
    id: 67012,
    topic: 'albert-shiryaev',
    difficulty: 'sota',
    question:
      'Shiryaev–Roberts statistic evolves as:',
    options: [
      '$R_t = (1+R_{t-1}) \\Lambda_t$',
      '$R_t = R_{t-1}+1$',
      '$R_t = \\Lambda_t$',
      '$R_t = 0$'
    ],
    correctIndex: 0,
    explanation:
      'Cumulative likelihood ratio scheme.',
    realWorld:
      'Change-point detection algorithms.',
    hint:
      'Recursive accumulation.'
  },
  {
    id: 67013,
    topic: 'albert-shiryaev',
    difficulty: 'hard',
    question:
      'Optimal stopping rule in Shiryaev detection:',
    options: [
      'Stop when posterior exceeds threshold',
      'Fixed time stopping',
      'Min variance',
      'Max likelihood only'
    ],
    correctIndex: 0,
    explanation:
      'Threshold rule from dynamic programming.',
    realWorld:
      'Sequential monitoring systems.',
    hint:
      'Posterior > A.'
  },
  {
    id: 67014,
    topic: 'albert-shiryaev',
    difficulty: 'sota',
    question:
      'In continuous time Brownian change detection:',
    options: [
      'CUSUM approximates Shiryaev under minimax criterion',
      'Identical always',
      'No difference',
      'MLE static only'
    ],
    correctIndex: 0,
    explanation:
      'Bayesian vs minimax detection criteria differ.',
    realWorld:
      'Signal processing.',
    hint:
      'Bayesian vs worst-case.'
  }
];