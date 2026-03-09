import type { Question } from '../types';

export const johnHullQuestions: Question[] = [
  {
    id: 32190, topic: 'john-hull', difficulty: 'easy',
    question: 'John Hull (with Alan White) developed the Hull-White model. What does it describe?',
    options: [
      'A one-factor short-rate model where the short rate follows: $$dr_t = (\\theta(t) - a \\cdot r_t) \\, dt + \\sigma \\, dW_t$$ where $\\theta(t)$ is a time-dependent mean-reversion level chosen to fit the initial yield curve exactly, $a > 0$ is the mean-reversion speed, and $\\sigma$ is volatility. This is the extended Vasicek model — it can match any initial term structure while remaining analytically tractable.',
      'A model where interest rates follow a geometric Brownian motion: $dr = \\mu r \\, dt + \\sigma r \\, dW$ — rates are always positive.',
      'A model where the yield curve is flat and shifts in parallel: $r(t,T) = r_0 + \\Delta r$ for all maturities $T$.',
      'A model where rates jump between discrete states according to a Markov chain — no continuous movement.'
    ],
    correctIndex: 0,
    explanation: 'The Hull-White model\'s key advantage: the function $\\theta(t)$ is analytically determined from the initial forward rate curve $f(0,t)$ via $\\theta(t) = f_t(0,t) + af(0,t) + \\frac{\\sigma^2}{2a}(1-e^{-2at})$. This "exact calibration" was a breakthrough — earlier models (Vasicek, CIR) could not match the observed yield curve. Bond prices are exponential-affine: $P(t,T) = A(t,T)e^{-B(t,T)r_t}$.',
    realWorld: 'Hull-White is the standard model for pricing interest rate derivatives (caps, floors, swaptions, Bermudan swaptions) at banks worldwide. It\'s also the backbone of CVA calculations for counterparty risk.',
    hint: 'Rates mean-revert, and the model is tuned to match today\'s yield curve exactly — no approximation needed.',
    formulaLinks: ['hull-white-model', 'short-rate'],
  },
  {
    id: 32191, topic: 'john-hull', difficulty: 'hard',
    question: 'Hull-White also developed a standard approach for pricing derivatives with credit risk. What is Credit Value Adjustment (CVA)?',
    options: [
      'CVA is the market price of counterparty credit risk — the expected loss from a counterparty defaulting on a derivatives contract: $$\\text{CVA} = (1-\\delta) \\int_0^T \\mathbb{E}\\left[V^+(t) \\mid \\tau = t\\right] \\cdot dPD(t)$$ where $V^+(t) = \\max(V(t), 0)$ is the positive exposure at time $t$, $PD(t)$ is the cumulative default probability, and $\\delta$ is the recovery rate. The "risk-free" derivative price is adjusted: $V_{\\text{risky}} = V_{\\text{risk-free}} - \\text{CVA}$.',
      'CVA is the mark-to-market value of a credit default swap on the counterparty — it\'s a market-traded quantity.',
      'CVA equals the notional of the derivative times the counterparty\'s credit spread — a simple multiplication.',
      'CVA only applies to defaulted counterparties — it\'s computed after default as the realized loss.'
    ],
    correctIndex: 0,
    explanation: 'Hull\'s framework made CVA computation practical by decomposing it into: (1) expected positive exposure $\\text{EPE}(t)$ profiles (computed via Monte Carlo), (2) default probabilities (from CDS spreads), and (3) recovery rates. The computation requires simulating the derivative\'s value along many scenarios and computing the exposure conditional on counterparty default — a massive Monte Carlo problem.',
    realWorld: 'After the 2008 crisis (when counterparty defaults wiped out banks), CVA became mandatory under Basel III. Banks now employ hundreds of quants to compute CVA, DVA, FVA, KVA — the "XVA" revolution that Hull helped pioneer.',
    hint: 'How much is your derivative worth if your counterparty might default? Adjust for expected credit losses.',
    formulaLinks: ['cva', 'credit-risk'],
  },
  {
    id: 32192, topic: 'john-hull', difficulty: 'sota',
    question: 'Hull\'s textbook "Options, Futures, and Other Derivatives" introduced a trinomial tree method for Hull-White. What makes it superior to binomial trees?',
    options: [
      'The Hull-White trinomial tree uses three branches (up, middle, down) with probabilities chosen to match the first two moments of $dr$ AND the mean-reversion: $$p_u = \\frac{1}{6} + \\frac{(a j \\Delta t)^2 - a j \\Delta t}{2}, \\quad p_m = \\frac{2}{3} - (a j \\Delta t)^2, \\quad p_d = \\frac{1}{6} + \\frac{(a j \\Delta t)^2 + a j \\Delta t}{2}$$ where $j$ is the node index and the tree is recombining on a grid with spacing $\\Delta r = \\sigma\\sqrt{3\\Delta t}$. For strong mean-reversion, branches "jink" (shift the center node) to maintain positive probabilities.',
      'Trinomial trees are faster because they use fewer time steps — each step covers 3× the time of a binomial step.',
      'Trinomial trees allow negative interest rates while binomial trees cannot — the third branch captures the zero bound.',
      'Trinomial trees are identical to binomial trees with an extra recombination — no mathematical advantage exists.'
    ],
    correctIndex: 0,
    explanation: 'The trinomial tree has three key advantages: (1) the extra branch provides a free parameter to match mean-reversion exactly, (2) the recombining grid prevents exponential growth in nodes, (3) the "jinking" technique (shifting the central node when the rate is far from the mean) keeps all probabilities positive. For Bermudan swaptions, this tree prices accurately with modest computation, while binomial trees struggle with mean-reversion.',
    realWorld: 'Hull-White trinomial trees remain the standard for pricing Bermudan swaptions and callable bonds at banks. Despite advances in Monte Carlo (Longstaff-Schwartz), trees are preferred for their speed and accuracy in low-dimensional problems.',
    hint: 'Three branches = enough freedom to match drift, diffusion, AND mean-reversion on a recombining grid.',
    formulaLinks: ['hull-white-model', 'trinomial-tree'],
  },
];
