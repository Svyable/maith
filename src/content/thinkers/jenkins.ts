// jenkins.ts
import type { Question } from '../types';

export const jenkinsQuestions: Question[] = [
  {
    id: 69750,
    topic: 'jenkins',
    difficulty: 'easy',
    question: 'Box-Jenkins ARIMA(p,d,q)?',
    options: [
      'AR(p): φ(B)Y_t, MA(q): θ(B)ε_t, I(d): differencing',
      'State space model',
      'Vector AR',
      'GARCH only'
    ],
    correctIndex: 0,
    explanation: 'φ(B)(1-B)^d Y_t = θ(B) ε_t.',
    realWorld: 'Univariate forecasting standard.',
    hint: 'Autoregressive integrated moving average.'
  },
  {
    id: 69751,
    topic: 'jenkins',
    difficulty: 'hard',
    question: 'ACF/PACF identification?',
    options: [
      'AR(p): ACF tails, PACF cuts p lags',
      'MA(q): ACF cuts q lags, PACF tails',
      'Both tail for ARMA',
      'Sine waves for seasonal'
    ],
    correctIndex: 0,
    explanation: 'Sample ACF/PACF → model order selection.',
    realWorld: 'ARIMA specification.',
    hint: 'PACF sharp cutoff → AR order.'
  },
  {
    id: 69752,
    topic: 'jenkins',
    difficulty: 'sota',
    question: 'Jenkins seasonal ARIMA?',
    options: [
      'SARIMA(p,d,q)(P,D,Q)_s : φ_P(B^s) Φ_P(B^s)(1-B^s)^D Z_t = θ_Q(B) Θ_Q(B^s) ε_t',
      'Multiplicative seasonal only',
      'Non-seasonal ARIMA',
      'State space seasonal'
    ],
    correctIndex: 0,
    explanation: 'Separate seasonal/non-seasonal polynomials.',
    realWorld: 'Monthly/quarterly data.',
    hint: 'Two layers of ARMA seasonal.'
  },
  {
    id: 69753,
    topic: 'jenkins',
    difficulty: 'hard',
    question: 'Overdifferencing effect?',
    options: [
      'MA(1) unit root: θ(B) = 1-θB → non-invertible if |θ|>1',
      'Better forecasting',
      'Stationarity improved',
      'No impact'
    ],
    correctIndex: 0,
    explanation: 'Cancel differencing with MA pole.',
    realWorld: 'AIC/BIC model selection.',
    hint: 'Extra differencing creates unit root.'
  },
  {
    id: 69754,
    topic: 'jenkins',
    difficulty: 'sota',
    question: 'Box-Jenkins parsimony principle?',
    options: [
      'Fewest parameters adequate for ACF/PACF fit',
      'Maximum likelihood only',
      'Long memory models',
      'Nonlinear AR'
    ],
    correctIndex: 0,
    explanation: 'Occam\'s razor for time series.',
    realWorld: 'Model selection criterion.',
    hint: 'Simplest model that fits data.'
  }
];
