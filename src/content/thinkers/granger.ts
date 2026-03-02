// granger.ts
import type { Question } from '../types';

export const grangerQuestions: Question[] = [
  {
    id: 69600,
    topic: 'granger',
    difficulty: 'easy',
    question: 'Granger causality tests?',
    options: [
      'X Granger-causes Y if past X improves Y forecasts',
      'Correlation coefficient',
      'Cointegration test',
      'Spectral coherence'
    ],
    correctIndex: 0,
    explanation: 'F-test: VAR lags of X excluded from Y equation.',
    realWorld: 'Macro forecasting, pairs trading.',
    hint: 'Predictive information flow.'
  },
  {
    id: 69601,
    topic: 'granger',
    difficulty: 'hard',
    question: 'Granger test VAR(p) specification?',
    options: [
      'Y_t = ∑ α_i Y_{t-i} + ∑ β_i X_{t-i} + ε_t; test β_i=0',
      'Simple AR(1)',
      'OLS bivariate regression',
      'Spectral regression'
    ],
    correctIndex: 0,
    explanation: 'Block exogeneity F-test on coefficients.',
    realWorld: 'Lead-lag relationships.',
    hint: 'Past X excluded from Y equation?'
  },
  {
    id: 69602,
    topic: 'granger',
    difficulty: 'sota',
    question: 'Granger non-causality condition?',
    options: [
      'E[Y_t | I_t] = E[Y_t | I_{t|Y}] (Y info suffices)',
      'Perfect correlation',
      'Lead-lag zero',
      'Cointegration present'
    ],
    correctIndex: 0,
    explanation: 'Past X adds no information beyond past Y.',
    realWorld: 'Causal ordering identification.',
    hint: 'Forecast improvement test.'
  },
  {
    id: 69603,
    topic: 'granger',
    difficulty: 'hard',
    question: 'Instantaneous Granger causality?',
    options: [
      'Residual covariance Ω_{XY} ≠ 0 after VAR orthogonalization',
      'Lead-lag only',
      'Frequency domain',
      'Nonlinear test'
    ],
    correctIndex: 0,
    explanation: 'Contemporaneous correlation after conditioning.',
    realWorld: 'Multivariate VAR decomposition.',
    hint: 'Current X helps predict current Y.'
  },
  {
    id: 69604,
    topic: 'granger',
    difficulty: 'sota',
    question: 'Granger vs Toda-Yamamoto?',
    options: [
      'TY: levels VAR regardless of cointegration (MLE consistent)',
      'Requires stationarity',
      'Frequency domain only',
      'Nonlinear VAR'
    ],
    correctIndex: 0,
    explanation: 'Extra lag corrects non-stationarity bias.',
    realWorld: 'Macro/policy causality.',
    hint: 'Works with I(1) without pretesting.'
  }
];
