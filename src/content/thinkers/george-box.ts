// box.ts
import type { Question } from '../types';

export const georgeBoxQuestions: Question[] = [
  {
    id: 69700,
    topic: 'george-box',
    difficulty: 'easy',
    question: 'Box-Jenkins methodology?',
    options: [
      'Identification → estimation → diagnostic → forecasting ARIMA',
      'Exponential smoothing only',
      'Structural time series',
      'Neural network forecasting'
    ],
    correctIndex: 0,
    explanation: 'Iterative model selection process.',
    realWorld: 'Classical time series analysis.',
    hint: 'Model building diagnostic checking.'
  },
  {
    id: 69701,
    topic: 'george-box',
    difficulty: 'hard',
    question: 'Box-Cox transformation?',
    options: [
      'y^{(λ)} = (y^λ-1)/λ for λ≠0 stabilizes variance',
      'Log transformation only',
      'Square root',
      'Differencing'
    ],
    correctIndex: 0,
    explanation: 'MLE λ̂ maximizes log-likelihood.',
    realWorld: 'Nonlinear trend normalization.',
    hint: 'Power transform λ ∈ (-5,5).'
  },
  {
    id: 69702,
    topic: 'george-box',
    difficulty: 'sota',
    question: 'Box-Pierce Q-statistic?',
    options: [
      'n ∑ ρ̂_k² ~ χ²_{h}',
      'Ljung-Box improved',
      'Durbin-Watson',
      'Breusch-Godfrey'
    ],
    correctIndex: 0,
    explanation: 'Sum of squared sample ACFs. Portmanteau test for model adequacy.',
    realWorld: 'ARIMA residual checking.',
    hint: 'Residual autocorrelation test' 
  },
  {
    id: 69703,
    topic: 'george-box',
    difficulty: 'hard',
    question: 'Box-Tiao intervention analysis?',
    options: [
      'ARIMA with dummy variables for shocks: (1-B)Y_t = ω I_t + (φ(B)/θ(B))ε_t',
      'Pre-whitening only',
      'Transfer function',
      'State space'
    ],
    correctIndex: 0,
    explanation: 'Impact/persistence of policy changes.',
    realWorld: 'Event studies.',
    hint: 'ARIMA with impulse indicator.'
  },
  {
    id: 69704,
    topic: 'george-box',
    difficulty: 'sota',
    question: 'Box-Jenkins airline model?',
    options: [
      'SARIMA(0,1,1)(0,1,1)₁₂ seasonal differencing',
      'AR(12) annual cycle',
      'MA(12) only',
      'Pure trend'
    ],
    correctIndex: 0,
    explanation: '(1-B)(1-B¹²)Z_t = (1-θ₁B)(1-Θ₁B¹²)ε_t.',
    realWorld: 'Monthly passenger forecasting benchmark.',
    hint: 'Double differencing airline data.'
  },
  {
    id: 69705,
    topic: 'george-box',
    difficulty: 'easy',
    question:
      'What is the core **Box–Jenkins** methodology for building ARIMA models?',
    options: [
      'Identification → estimation → diagnostic checking → forecasting (iterated until residuals look like white noise)',
      'Exponential smoothing only, no diagnostics needed',
      'Fit a neural network, then difference until accuracy improves',
      'Pick the highest-order AR model that converges'
    ],
    correctIndex: 0,
    explanation:
      'Box–Jenkins is an iterative workflow: choose candidate ARIMA/SARIMA orders, estimate parameters, check residuals (ACF/Ljung–Box), and refine before forecasting.',
    realWorld:
      'Still the classical baseline workflow for time-series forecasting in business, operations, and economics.',
    hint:
      'Model building + diagnostics is the signature.'
  },
  {
    id: 69706,
    topic: 'george-box',
    difficulty: 'hard',
    question:
      'The **Box–Cox** transformation is a parametric power transform used to stabilize variance and make errors closer to normal. What is the standard definition (for $y>0$)?',
    options: [
      '$y^{(\\lambda)}=\\begin{cases}\\dfrac{y^{\\lambda}-1}{\\lambda}, & \\lambda\\ne 0 \\\\ \\log y, & \\lambda=0\\end{cases}$',
      '$y^{(\\lambda)}=\\lambda y + (1-\\lambda)$',
      '$y^{(\\lambda)}=\\sqrt{y}$ for all $\\lambda$',
      '$y^{(\\lambda)}=y- y_{t-1}$ (differencing)'
    ],
    correctIndex: 0,
    explanation:
      'It nests the log transform as the limit case $\\lambda\\to 0$ and allows data-driven selection of $\\lambda$ (often via MLE) to improve model assumptions.',
    realWorld:
      'Common in demand forecasting and process data where variance grows with the level.',
    hint:
      'It’s the power transform that becomes $\\log y$ at $\\lambda=0$.'
  },
  {
    id: 69707,
    topic: 'george-box',
    difficulty: 'sota',
    question:
      'The **Box–Pierce** portmanteau statistic tests whether residual autocorrelations up to lag $h$ are jointly zero. What is the statistic and its approximate null distribution?',
    options: [
      '$Q = n\\sum_{k=1}^{h}\\hat\\rho_k^2\\ \\approx\\ \\chi^2_{h-m}$ (often adjusted by fitted parameters $m$)',
      '$Q = \\sum_{k=1}^{h}\\hat\\rho_k\\ \\approx\\ \\mathcal{N}(0,1)$',
      '$Q = \\max_{k\\le h}|\\hat\\rho_k|\\ \\approx\\ \\chi^2_h$',
      '$Q = n\\hat\\rho_1\\ \\approx\\ t_{n-2}$'
    ],
    correctIndex: 0,
    explanation:
      'Box–Pierce sums squared sample ACF values of residuals. Under a good model, residuals are (approximately) white noise so the joint test uses a chi-square reference.',
    realWorld:
      'Used to check ARIMA adequacy: if you reject, the model left autocorrelation in residuals.',
    hint:
      '“Sum of squared residual ACFs.”'
  },
  {
    id: 69708,
    topic: 'george-box',
    difficulty: 'hard',
    question:
      'Box–Tiao **intervention analysis** models how an event/policy shock changes a time series while accounting for autocorrelation. Which description best matches the idea?',
    options: [
      'Fit an ARIMA error structure and add intervention terms (e.g., step/impulse dummies) so the effect is estimated with correlated noise handled',
      'Use only pre-whitening and never fit ARIMA',
      'Replace the series with a pure trend model after the event',
      'Use PCA to remove the intervention effect'
    ],
    correctIndex: 0,
    explanation:
      'You include an indicator (impulse or step) or transfer-function term for the intervention, while the ARIMA part captures the background dynamics.',
    realWorld:
      'Event studies: policy changes, marketing campaigns, system outages, and regulatory shocks.',
    hint:
      'It’s “ARIMA + dummy/transfer function for the shock.”'
  },
  {
    id: 69709,
    topic: 'george-box',
    difficulty: 'sota',
    question:
      'The famous Box–Jenkins “airline model” for monthly data is a benchmark seasonal ARIMA. Which model is it, and what is its compact difference/operator form?',
    options: [
      'SARIMA$(0,1,1)(0,1,1)_{12}$ with $(1-B)(1-B^{12})Z_t=(1-\\theta B)(1-\\Theta B^{12})\\varepsilon_t$',
      'AR$(12)$ with $Z_t=\\sum_{i=1}^{12}\\phi_i Z_{t-i}+\\varepsilon_t$',
      'MA$(12)$ with $Z_t=\\varepsilon_t+\\Theta\\varepsilon_{t-12}$',
      'Pure trend: $\\Delta Z_t=c+\\varepsilon_t$'
    ],
    correctIndex: 0,
    explanation:
      'It uses both a nonseasonal difference and a seasonal difference, with MA(1) terms at lag 1 and lag 12—surprisingly effective for airline passenger-type series.',
    realWorld:
      'A classic baseline for monthly seasonal forecasting and a standard teaching example in ARIMA.',
    hint:
      'Double differencing + MA at 1 and 12.'
  }
];
