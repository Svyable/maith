import type { Question } from '../types';

export const stevenHestonQuestions: Question[] = [
  {
    id: 32130, topic: 'steven-heston', difficulty: 'easy',
    question: 'Steven Heston introduced the most widely used stochastic volatility model. What is the Heston model?',
    options: [
      'A model where both the asset price and its volatility are stochastic: $$dS_t = \\mu S_t \\, dt + \\sqrt{v_t} S_t \\, dW_t^S$$ $$dv_t = \\kappa(\\theta - v_t) \\, dt + \\xi \\sqrt{v_t} \\, dW_t^v$$ with $\\text{Corr}(dW^S, dW^v) = \\rho$. The variance $v_t$ mean-reverts to $\\theta$ at speed $\\kappa$, with vol-of-vol $\\xi$. The correlation $\\rho < 0$ generates the volatility skew (leverage effect).',
      'A model where volatility jumps between two regimes (high and low) according to a Markov chain.',
      'A model where volatility is a deterministic function of the asset price: $\\sigma(S,t) = \\sigma_0 (S_0/S)^\\beta$.',
      'A GARCH model where conditional variance depends on past squared returns: $\\sigma_t^2 = \\omega + \\alpha \\epsilon_{t-1}^2 + \\beta \\sigma_{t-1}^2$.'
    ],
    correctIndex: 0,
    explanation: 'Heston\'s key innovation (1993) was providing a closed-form (semi-analytic) solution for European option prices using the characteristic function: $\\phi(u) = \\mathbb{E}[e^{iu \\ln S_T}]$, which can be computed in closed form via Riccati ODEs. Option prices are then recovered via Fourier inversion. The model generates volatility smiles through: (1) stochastic vol ($\\xi > 0$) creates fat tails, (2) negative correlation ($\\rho < 0$) creates skew.',
    realWorld: 'The Heston model is the industry standard for pricing equity and FX options. Every derivatives desk calibrates Heston (or extensions like double Heston, Bates = Heston + jumps) to the volatility surface daily.',
    hint: 'Volatility itself is random, mean-reverting, and correlated with the asset price.',
    formulaLinks: ['heston-model', 'stochastic-volatility'],
  },
  {
    id: 32131, topic: 'steven-heston', difficulty: 'hard',
    question: 'How does Heston\'s characteristic function approach price options, and why was it revolutionary?',
    options: [
      'The call price is $C = S P_1 - K e^{-rT} P_2$ where $P_j = \\frac{1}{2} + \\frac{1}{\\pi} \\int_0^\\infty \\text{Re}\\left[\\frac{e^{-iu \\ln K} \\phi_j(u)}{iu}\\right] du$ and $\\phi_j(u)$ satisfies Riccati ODEs with explicit solutions. This avoids PDE methods entirely — the 2D PDE for $(S,v)$ would require finite differences on a grid, but Fourier inversion is $O(N \\log N)$ via FFT.',
      'The characteristic function is $\\phi(u) = e^{iu\\mu T - u^2 \\sigma^2 T/2}$ (Gaussian) — same as Black-Scholes.',
      'Options are priced by Monte Carlo simulation of the variance process — no closed-form exists.',
      'The Heston model uses a binomial tree with time-varying volatility at each node.'
    ],
    correctIndex: 0,
    explanation: 'The Riccati ODEs for $\\phi(u) = \\exp(C(u,T) + D(u,T) v_0 + iu \\ln S_0)$ have explicit solutions involving complex square roots and logarithms. The "little Heston trap" (Albrecher et al.) shows one must choose the correct branch of the complex logarithm for numerical stability. Combined with Carr-Madan FFT pricing, the entire volatility surface can be computed in milliseconds.',
    realWorld: 'The characteristic function approach opened the door to pricing under ANY model with a known CF — Variance Gamma, CGMY, Normal Inverse Gaussian, and affine jump-diffusions all use the same Fourier machinery.',
    hint: 'Transform to Fourier space, solve Riccati ODEs explicitly, invert via FFT — millisecond pricing.',
    formulaLinks: ['heston-model', 'fourier-pricing'],
  },
  {
    id: 32132, topic: 'steven-heston', difficulty: 'sota',
    question: 'What is the Feller condition in the Heston model and why does violating it matter for practitioners?',
    options: [
      'The Feller condition $2\\kappa\\theta > \\xi^2$ ensures the variance process $v_t$ never reaches zero. When violated ($2\\kappa\\theta \\leq \\xi^2$), $v_t$ can hit zero and must be reflected — this creates a boundary layer in the transition density. Empirically, calibrated Heston parameters almost always violate Feller (typical: $\\kappa\\theta \\approx 0.01$, $\\xi \\approx 0.5$), meaning the variance touches zero regularly. This affects Monte Carlo discretization (use QE or exact schemes, not Euler) and moment explosions.',
      'The Feller condition $\\rho^2 < 1$ ensures the correlation between price and variance is valid.',
      'The Feller condition $\\kappa > 0$ ensures mean-reversion — without it, variance explodes to infinity.',
      'The Feller condition $\\xi < 2\\sigma$ ensures the vol-of-vol is bounded by twice the spot volatility.'
    ],
    correctIndex: 0,
    explanation: 'When $2\\kappa\\theta \\leq \\xi^2$, the CIR variance process reaches the zero boundary with positive probability. The process is still well-defined (it\'s instantaneously reflected), but naive Euler discretization produces negative variances. The Quadratic-Exponential (QE) scheme of Andersen (2008) and the exact simulation of Broadie-Kaya (2006) handle this correctly. Moment explosions ($\\mathbb{E}[S_T^p] = \\infty$ for $p > p^*$) also depend on Feller violation.',
    realWorld: 'Every quant who calibrates Heston encounters Feller violation. It\'s not a model failure — it reflects the empirical reality that variance can become very small. But it requires careful numerical treatment in both pricing and simulation.',
    hint: 'When vol-of-vol is too high relative to mean-reversion, variance touches zero — requiring special numerical care.',
    formulaLinks: ['heston-model', 'feller-condition'],
  },
];
