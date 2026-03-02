// engle.ts
import type { Question } from '../types';

export const robertEngleQuestions: Question[] = [
  {
    id: 69650,
    topic: 'robert-engle',
    difficulty: 'easy',
    question: 'ARCH(1): σ_t² = ?',
    options: [
      'α₀ + α₁ ε_{t-1}² (volatility clustering)',
      'Constant variance',
      'GARCH recursion',
      'EWMA λ=0.94'
    ],
    correctIndex: 0,
    explanation: 'Autoregressive conditional heteroskedasticity.',
    realWorld: 'Equity/fx volatility modeling.',
    hint: 'Past squared returns predict future variance.'
  },
  {
    id: 69651,
    topic: 'robert-engle',
    difficulty: 'hard',
    question: 'ARCH LM test?',
    options: [
      'n R² ~ χ²_k from ε²_t on ε²_{t-1},…,ε²_{t-k}',
      'Ljung-Box on returns',
      'Breusch-Pagan on levels',
      'Jarque-Bera normality'
    ],
    correctIndex: 0,
    explanation: 'Autocorrelation test on squared standardized residuals.',
    realWorld: 'ARCH effects detection.',
    hint: 'Squared residuals autocorrelation.'
  },
  {
    id: 69652,
    topic: 'robert-engle',
    difficulty: 'sota',
    question: 'Engle ARCH-M: risk-return tradeoff?',
    options: [
      'r_t = α + β σ_t² + γ σ_t² ε_t (GARCH-in-mean)',
      'Constant risk premium',
      'Linear r_t vs σ_t',
      'Leverage effect only'
    ],
    correctIndex: 0,
    explanation: 'Conditional variance enters mean equation.',
    realWorld: 'Asset pricing tests.',
    hint: 'Volatility compensates expected return.'
  },
  {
    id: 69653,
    topic: 'robert-engle',
    difficulty: 'hard',
    question: 'DCC Engle-Sheppard?',
    options: [
      'Dynamic conditional correlation: Q_t = (1-α-β)Q̄ + α u_{t-1}u_{t-1}ᵀ + β Q_{t-1}',
      'Constant correlation',
      'BEKK quadratic',
      'VECH parameterization'
    ],
    correctIndex: 0,
    explanation: 'Multivariate GARCH with time-varying correlations.',
    realWorld: 'Portfolio VaR, pairs trading.',
    hint: 'GARCH-like correlation evolution.'
  },
  {
    id: 69654,
    topic: 'robert-engle',
    difficulty: 'sota',
    question: 'Engle cointegration test?',
    options: [
      'DF/ADF residuals from VECM: Δe_t = γ e_{t-1} + ∑ δ_i Δe_{t-i}',
      'Johansen trace/max-eigen',
      'KPSS stationarity',
      'Phillips-Perron'
    ],
    correctIndex: 0,
    explanation: 'Tests if error correction term stationary.',
    realWorld: 'Pairs trading signals.',
    hint: 'Residuals from cointegrating regression.'
  },
  {
    id: 69655,
    topic: 'robert-engle',
    difficulty: 'easy',
    question:
      'In Engle’s ARCH(1) model for conditional variance, what is the standard recursion for $\\sigma_t^2$ if the shock is $\\varepsilon_t$?',
    options: [
      '$\\sigma_t^2 = \\alpha_0 + \\alpha_1\\,\\varepsilon_{t-1}^2$ with $\\alpha_0>0$ and $\\alpha_1\\ge 0$',
      '$\\sigma_t^2 = \\sigma^2$ (constant variance, no dynamics)',
      '$\\sigma_t^2 = \\alpha_0 + \\beta_1\\,\\sigma_{t-1}^2$ (no dependence on shocks)',
      '$\\sigma_t^2 = \\lambda\\sigma_{t-1}^2 + (1-\\lambda)\\varepsilon_t^2$ with fixed $\\lambda=0.94$ always'
    ],
    correctIndex: 0,
    explanation:
      'ARCH makes variance depend on past squared shocks, capturing volatility clustering: large moves tend to be followed by large moves.',
    realWorld:
      'Baseline model for time-varying volatility in equities/FX; foundation for GARCH and modern risk forecasting.',
    hint:
      'Past squared residuals drive today’s variance.'
  },
  {
    id: 69656,
    topic: 'robert-engle',
    difficulty: 'hard',
    question:
      'Engle’s ARCH LM test checks for ARCH effects by regressing squared residuals on their lags. What is the classic test statistic and its asymptotic distribution under $H_0$ (no ARCH up to lag $k$)?',
    options: [
      '$nR^2 \\ \\sim \\ \\chi^2_k$ from regressing $\\hat\\varepsilon_t^2$ on $\\hat\\varepsilon_{t-1}^2,\\dots,\\hat\\varepsilon_{t-k}^2$',
      '$Q \\sim \\chi^2_k$ from the Ljung–Box test on $\\hat\\varepsilon_t$',
      '$JB \\sim \\chi^2_2$ from Jarque–Bera normality test',
      '$t \\sim t_{n-k}$ from testing the mean of returns'
    ],
    correctIndex: 0,
    explanation:
      'Under $H_0$, the explanatory power of lagged squared residuals should be zero. The LM statistic $nR^2$ is asymptotically $\\chi^2_k$.',
    realWorld:
      'A standard diagnostic after fitting ARMA/OLS: if ARCH is present, move to ARCH/GARCH-type volatility models.',
    hint:
      'Run an auxiliary regression on **squared** residuals.'
  },
  {
    id: 69657,
    topic: 'robert-engle',
    difficulty: 'sota',
    question:
      'ARCH-in-Mean (ARCH-M) models a risk–return tradeoff by putting volatility into the mean equation. Which form best captures the idea?',
    options: [
      '$r_t = \\mu + \\beta\\,\\sigma_t^2 + \\varepsilon_t$ (or sometimes $\\beta\\,\\sigma_t$), where $\\sigma_t^2$ follows an ARCH/GARCH process',
      '$r_t = \\mu + \\beta\\,r_{t-1} + \\varepsilon_t$ with constant variance',
      '$\\sigma_t^2 = \\mu + \\beta\\,r_t + \\varepsilon_t$ (variance depends on the return level directly)',
      '$r_t$ is replaced by $\\Delta r_t$ and volatility is ignored'
    ],
    correctIndex: 0,
    explanation:
      'ARCH-M allows expected return to depend on conditional risk. If $\\beta>0$, higher conditional variance (risk) implies higher expected return (risk premium).',
    realWorld:
      'Used in empirical asset pricing to test whether time-varying risk is priced in expected returns.',
    hint:
      '“Volatility enters the mean.”'
  },
  {
    id: 69658,
    topic: 'robert-engle',
    difficulty: 'hard',
    question:
      'Engle’s DCC (Dynamic Conditional Correlation) model builds time-varying correlations from standardized residuals $u_t$. Which recursion is the canonical DCC(1,1) update for the correlation-driving matrix $Q_t$?',
    options: [
      '$Q_t=(1-\\alpha-\\beta)\\,\\bar Q+\\alpha\\,u_{t-1}u_{t-1}^\\top+\\beta\\,Q_{t-1}$',
      '$Q_t=\\bar Q$ (correlation is constant over time)',
      '$Q_t=\\alpha\\,u_tu_t^\\top$ only (no persistence)',
      '$Q_t=\\bar Q+\\sum_{i=1}^p u_{t-i}$ (additive, not quadratic)'
    ],
    correctIndex: 0,
    explanation:
      'DCC is “GARCH-like” for correlations: shocks $u_{t-1}u_{t-1}^\\top$ move correlations, and $\\beta$ adds persistence around the long-run level $\\bar Q$.',
    realWorld:
      'Widely used for portfolio risk, hedging, and time-varying dependence (e.g., correlations spike during crises).',
    hint:
      'It looks like GARCH but with outer products of standardized residuals.'
  },
  {
    id: 69659,
    topic: 'robert-engle',
    difficulty: 'sota',
    question:
      'The Engle–Granger two-step approach tests for cointegration by checking whether the residual $\\hat e_t$ from a “levels regression” is stationary. Which is the correct second-step idea?',
    options: [
      'Run an ADF-type test on $\\hat e_t$: $\\Delta \\hat e_t = \\gamma\\,\\hat e_{t-1}+\\sum_i \\delta_i\\,\\Delta \\hat e_{t-i}+\\eta_t$ and test $H_0:\\gamma=0$',
      'Run a Ljung–Box test on $\\hat e_t$ and reject if autocorrelation is present',
      'Run KPSS on the original series and conclude cointegration if both are $I(1)$',
      'Use Johansen trace/max-eigen tests directly in a VAR and call it Engle–Granger'
    ],
    correctIndex: 0,
    explanation:
      'If $y_t$ and $x_t$ are each $I(1)$ but a linear combination is $I(0)$, then the residual from $y_t=\\beta x_t+e_t$ should be stationary; the ADF on $\\hat e_t$ checks that.',
    realWorld:
      'Pairs trading often starts with Engle–Granger to identify mean-reverting spreads.',
    hint:
      'Cointegration ⇔ residual is stationary.'
  }
];
