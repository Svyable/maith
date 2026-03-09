import type { Question } from '../types';

export const jeanPhilippeBouchaudQuestions: Question[] = [
  {
    id: 32150, topic: 'jean-philippe-bouchaud', difficulty: 'easy',
    question: 'Jean-Philippe Bouchaud is a physicist-turned-quant who co-founded Capital Fund Management (CFM). What is his key finding about market impact?',
    options: [
      'Market impact follows a universal square-root law: the price impact of executing volume $Q$ scales as $$\\Delta p \\approx Y \\sigma \\sqrt{\\frac{Q}{V}}$$ where $\\sigma$ is daily volatility, $V$ is daily volume, and $Y \\approx 1$ is a universal constant. This holds across all asset classes, market caps, and time periods — a remarkable empirical regularity.',
      'Market impact is linear in trade size: $\\Delta p = \\lambda Q$ with constant $\\lambda$ (Kyle\'s model exactly).',
      'Market impact is negligible for trades below 1% of daily volume and infinite above that threshold.',
      'Market impact depends only on the speed of execution, not the total volume traded.'
    ],
    correctIndex: 0,
    explanation: 'The square-root law $\\Delta p \\propto \\sigma \\sqrt{Q/V}$ was documented by Bouchaud, Farmer, Lillo, and others across equities, futures, FX, and crypto markets. It\'s striking because Kyle\'s theoretical model predicts linear impact, yet the empirical $\\sqrt{Q}$ scaling is robust. Bouchaud attributes this to the "latent order book" — the crowd of hidden limit orders that reveals itself as the price moves.',
    realWorld: 'Every execution algorithm at every major quant firm uses the square-root impact law to estimate transaction costs. CFM\'s success is partly built on understanding and minimizing this impact.',
    hint: 'Doubling your trade size doesn\'t double your impact — it only increases it by $\\sqrt{2} \\approx 41\\%$.',
    formulaLinks: ['market-impact', 'square-root-law'],
  },
  {
    id: 32151, topic: 'jean-philippe-bouchaud', difficulty: 'hard',
    question: 'Bouchaud developed the "propagator model" for order book dynamics. What does it describe?',
    options: [
      'The price response to order flow is described by a memory kernel: $$\\Delta p_t = \\sum_{\\tau=0}^{t} G(t-\\tau) \\cdot \\epsilon_\\tau \\cdot v_\\tau$$ where $\\epsilon_\\tau = \\pm 1$ is the sign of trade $\\tau$, $v_\\tau$ is volume, and $G(\\ell)$ is the "propagator" — the decaying response function. The propagator decays as $G(\\ell) \\sim \\ell^{-\\beta}$ with $\\beta \\approx 0.5$, and order signs are long-memory correlated: $C(\\ell) = \\langle \\epsilon_t \\epsilon_{t+\\ell} \\rangle \\sim \\ell^{-\\gamma}$ with $\\gamma \\approx 0.5$.',
      'A model where the order book is a continuous-time Markov chain with constant arrival and cancellation rates.',
      'A model where price is a deterministic function of the cumulative order imbalance — no stochastic component.',
      'A model where market makers adjust quotes based on a Bayesian update of the true value after each trade.'
    ],
    correctIndex: 0,
    explanation: 'The remarkable finding is that the long memory in order flow ($\\gamma \\approx 0.5$) is almost perfectly cancelled by the decaying propagator ($\\beta \\approx 0.5$), so that the price itself is approximately a martingale (efficient) despite highly predictable order flow. This "fine-tuning" between order flow persistence and impact decay is what Bouchaud calls the "efficient market microstructure miracle."',
    realWorld: 'The propagator model is used at CFM and other quant firms to: (1) predict short-term price moves from order flow, (2) estimate the cost of execution strategies, (3) design market-making algorithms that account for impact decay.',
    hint: 'Each trade\'s impact decays over time — but order flow is persistent. These effects magically cancel to keep prices efficient.',
    formulaLinks: ['propagator-model', 'market-microstructure'],
  },
  {
    id: 32152, topic: 'jean-philippe-bouchaud', difficulty: 'sota',
    question: 'Bouchaud\'s work on random matrix theory (RMT) revolutionized portfolio construction. What did he show about empirical correlation matrices?',
    options: [
      'Most eigenvalues of the sample correlation matrix of stock returns are pure noise: for $N$ stocks and $T$ observations, if $q = N/T \\sim O(1)$, the Marchenko-Pastur distribution predicts that eigenvalues between $\\lambda_\\pm = (1 \\pm \\sqrt{q})^2$ are indistinguishable from noise. Only eigenvalues exceeding $\\lambda_+ = (1 + \\sqrt{N/T})^2$ carry signal. The cleaned correlation matrix $\\hat{C}_{\\text{clean}}$ replaces noisy eigenvalues with their RMT expectation, dramatically improving out-of-sample portfolio performance.',
      'All eigenvalues of the correlation matrix are equally informative for portfolio optimization.',
      'The largest eigenvalue always corresponds to the market factor and should be removed before optimization.',
      'Correlation matrices estimated from daily returns are unbiased and need no cleaning for $T > 252$.'
    ],
    correctIndex: 0,
    explanation: 'Bouchaud and Potters showed that for typical hedge fund applications ($N \\sim 500$ stocks, $T \\sim 1000$ days, $q \\approx 0.5$), about 95% of eigenvalues are noise. Using the raw sample correlation matrix in Markowitz optimization amplifies this noise catastrophically. Their "rotationally invariant estimator" (RIE) uses the Marchenko-Pastur law to optimally shrink eigenvalues, giving factor-of-2 improvements in out-of-sample Sharpe ratios.',
    realWorld: 'Every sophisticated quant fund (AQR, CFM, Two Sigma, etc.) now uses RMT-based covariance cleaning. It\'s arguably the single most impactful application of random matrix theory outside physics.',
    hint: 'Most correlations you measure are noise. Random matrix theory tells you exactly which ones to keep.',
    formulaLinks: ['marchenko-pastur', 'random-matrix-theory'],
  },
];
