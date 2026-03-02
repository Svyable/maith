// jenkins.ts
import type { Question } from '../types';

export const gwilymJenkinsQuestions: Question[] = [
  {
    id: 69750,
    topic: 'gwilym-jenkins',
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
    topic: 'gwilym-jenkins',
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
    topic: 'gwilym-jenkins',
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
    topic: 'gwilym-jenkins',
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
    topic: 'gwilym-jenkins',
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
  },
  {
    id: 69750,
    topic: 'gwilym-jenkins',
    difficulty: 'easy',
    question:
      'In Box–Jenkins terminology, what does an ARIMA$(p,d,q)$ model mean in backshift-operator form?',
    options: [
      'AR polynomial $\\phi(B)$, differencing $(1-B)^d$, MA polynomial $\\theta(B)$: $$\\phi(B)(1-B)^d Y_t = \\theta(B)\\varepsilon_t$$',
      'A state-space model with Kalman filter by definition',
      'A vector autoregression (VAR) with $p$ variables',
      'A GARCH model for conditional variance'
    ],
    correctIndex: 0,
    explanation:
      'ARIMA combines autoregression (AR), integration via differencing (I), and moving average (MA) errors into a single linear stochastic difference equation.',
    realWorld:
      'A standard baseline for univariate forecasting (sales, demand, macro indicators) and the core model family in the Box–Jenkins workflow.',
    hint:
      'Remember: AR *times* differencing equals MA on the shocks.'
  },
  {
    id: 69751,
    topic: 'gwilym-jenkins',
    difficulty: 'hard',
    question:
      'In the classical ACF/PACF identification rules for nonseasonal models, which pattern best indicates an AR($p$) process?',
    options: [
      'ACF decays (“tails off”), while PACF cuts off after lag $p$',
      'ACF cuts off after lag $p$, while PACF decays',
      'Both ACF and PACF cut off sharply at the same lag',
      'ACF is always zero and PACF is always one'
    ],
    correctIndex: 0,
    explanation:
      'For AR($p$), partial autocorrelations capture the direct dependence structure and drop to ~0 after lag $p$, while the ACF typically decays more gradually.',
    realWorld:
      'Used for quick model order guesses before fitting and diagnostic checking.',
    hint:
      'PACF sharp cutoff → AR order.'
  },
  {
    id: 69752,
    topic: 'gwilym-jenkins',
    difficulty: 'sota',
    question:
      'A seasonal ARIMA is written SARIMA$(p,d,q)(P,D,Q)_s$. Which multiplicative operator form is correct (with $s$ the seasonal period)?',
    options: [
      '$$\\Phi(B^s)\\,\\phi(B)\\,(1-B)^d(1-B^s)^D Z_t = \\Theta(B^s)\\,\\theta(B)\\,\\varepsilon_t$$',
      '$$\\phi(B^s)(1-B)^{d+s} Z_t = \\theta(B^s)\\varepsilon_t$$',
      '$$\\Phi(B)\\phi(B)Z_t=\\Theta(B)\\theta(B)\\varepsilon_t$$ (no seasonal differencing needed)',
      '$$Z_t=\\mu+\\varepsilon_t$$ (seasonality handled by the mean)'
    ],
    correctIndex: 0,
    explanation:
      'Seasonal and nonseasonal AR/MA polynomials multiply, and both nonseasonal and seasonal differencing can be applied to remove trend and seasonality.',
    realWorld:
      'Monthly ($s=12$) and quarterly ($s=4$) forecasting often uses SARIMA to capture repeating seasonal patterns.',
    hint:
      'It’s “nonseasonal part × seasonal part” in both AR and MA.'
  },
  {
    id: 69753,
    topic: 'gwilym-jenkins',
    difficulty: 'hard',
    question:
      'What is a common symptom of **overdifferencing** (choosing $d$ too large) in ARIMA modeling?',
    options: [
      'It can induce an MA(1)-like behavior with a parameter near $-1$ (a “unit root” in the MA part), harming invertibility and inflating forecast variance',
      'It always improves stationarity and forecasting accuracy',
      'It guarantees the residuals are i.i.d. normal',
      'It eliminates the need for any AR or MA terms'
    ],
    correctIndex: 0,
    explanation:
      'Extra differencing can “over-whiten” the series, creating negative short-lag autocorrelation and often producing an MA term near the non-invertible boundary.',
    realWorld:
      'In practice, overdifferencing shows up as noisy forecasts and unstable parameter estimates—one reason AIC/BIC and diagnostics matter.',
    hint:
      'Too much differencing often creates a strong negative lag-1 pattern.'
  },
  {
    id: 69754,
    topic: 'gwilym-jenkins',
    difficulty: 'sota',
    question:
      'A central Box–Jenkins/Jenkins modeling norm is **parsimony**. What does it mean in ARIMA selection?',
    options: [
      'Prefer the simplest model (fewest parameters) that passes diagnostics (e.g., residuals approximately white noise) and forecasts well',
      'Always choose the largest $p$ and $q$ you can estimate',
      'Always difference until the series looks like white noise, then stop',
      'Only maximum likelihood matters; diagnostics are optional'
    ],
    correctIndex: 0,
    explanation:
      'Parsimony is Occam’s razor for time series: avoid needless parameters that overfit and worsen out-of-sample performance.',
    realWorld:
      'Model selection often balances fit and complexity (AIC/BIC) plus residual checks like Ljung–Box.',
    hint:
      '“As simple as possible, but adequate.”'
  }
];
