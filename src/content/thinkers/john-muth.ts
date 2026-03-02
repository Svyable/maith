// muth.ts
import type { Question } from '../types';

export const johnMuthQuestions: Question[] = [
  {
    id: 67005,
    topic: 'john-muth',
    difficulty: 'easy',
    question:
      'Muth (1961) rational expectations hypothesis states:',
    options: [
      'Agents’ expectations equal model-consistent mathematical expectations',
      'Expectations are always adaptive',
      'Agents ignore policy',
      'Expectations equal last period values'
    ],
    correctIndex: 0,
    explanation:
      '$E_t[x_{t+1}] = \\mathbb{E}(x_{t+1}|\\mathcal{I}_t)$ under the true model.',
    realWorld:
      'Foundation of modern macro and finance.',
    hint:
      'Expectations are internally consistent with the model.'
  },
  {
    id: 67006,
    topic: 'john-muth',
    difficulty: 'hard',
    question:
      'Under rational expectations, forecast errors satisfy:',
    options: [
      '$x_{t+1} - E_t[x_{t+1}]$ is orthogonal to $\\mathcal{I}_t$',
      'Always zero',
      'Serially correlated',
      'Biased upward'
    ],
    correctIndex: 0,
    explanation:
      'Forecast errors are mean-zero and uncorrelated with available info.',
    realWorld:
      'Testable implication in macro regressions.',
    hint:
      'No predictable component remains.'
  },
  {
    id: 67007,
    topic: 'john-muth',
    difficulty: 'sota',
    question:
      'Rational expectations in linear model $x_t = A E_t[x_{t+1}] + \\varepsilon_t$ implies solution via:',
    options: [
      'Forward iteration and stability (Blanchard-Kahn)',
      'Backward induction only',
      'OLS regression',
      'Random walk'
    ],
    correctIndex: 0,
    explanation:
      'Stability conditions select unique equilibrium.',
    realWorld:
      'DSGE solution methods.',
    hint:
      'Eigenvalues inside unit circle.'
  },
  {
    id: 67008,
    topic: 'john-muth',
    difficulty: 'hard',
    question:
      'Lucas critique builds on Muth by arguing:',
    options: [
      'Policy changes alter structural parameters via expectations',
      'Expectations irrelevant',
      'Adaptive expectations sufficient',
      'Static models sufficient'
    ],
    correctIndex: 0,
    explanation:
      'Agents adjust expectations when policy rules change.',
    realWorld:
      'Policy evaluation requires structural models.',
    hint:
      'Expectations change when rules change.'
  },
  {
    id: 67009,
    topic: 'john-muth',
    difficulty: 'sota',
    question:
      'Under rational expectations equilibrium in asset pricing:',
    options: [
      '$P_t = \\frac{1}{1+r} E_t[P_{t+1}+D_{t+1}]$',
      '$P_t = D_t$',
      '$P_t$ constant',
      '$r=0$'
    ],
    correctIndex: 0,
    explanation:
      'Present value relation with model-consistent expectations.',
    realWorld:
      'Foundation of modern finance.',
    hint:
      'Discounted expected future payoff.'
  }
];