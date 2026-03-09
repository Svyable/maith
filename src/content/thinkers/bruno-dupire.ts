import type { Question } from '../types';

export const brunoDupireQuestions: Question[] = [
  {
    id: 32140, topic: 'bruno-dupire', difficulty: 'easy',
    question: 'Bruno Dupire derived the definitive formula for local volatility. What is Dupire\'s formula?',
    options: [
      'Given market call prices $C(K,T)$, the unique local volatility function consistent with all vanillas is: $$\\sigma_{\\text{loc}}^2(K,T) = \\frac{\\frac{\\partial C}{\\partial T} + (r-q)K\\frac{\\partial C}{\\partial K} + qC}{\\frac{1}{2}K^2 \\frac{\\partial^2 C}{\\partial K^2}}$$ This extracts a state-dependent volatility $\\sigma(S,t)$ from the entire vanilla surface, ensuring all vanillas are priced exactly.',
      'Local volatility equals implied volatility at each strike: $\\sigma_{\\text{loc}}(K,T) = \\sigma_{\\text{imp}}(K,T)$.',
      'Local volatility is the harmonic mean of implied volatilities across all maturities at a given strike.',
      'Local volatility is computed by fitting a SABR model and reading off the backbone $\\sigma(S) = \\alpha S^{\\beta-1}$.'
    ],
    correctIndex: 0,
    explanation: 'Dupire (1994) showed that there exists a UNIQUE diffusion $dS = (r-q)S\\,dt + \\sigma_{\\text{loc}}(S,t) S\\,dW$ that matches all European option prices simultaneously. The formula follows from the Fokker-Planck (forward Kolmogorov) equation for the transition density. This was a breakthrough: it solved the inverse problem of extracting dynamics from prices.',
    realWorld: 'Local vol is the industry\'s "workhorse" model for exotic option pricing. Every bank\'s exotic desk calibrates a local vol surface daily as the starting point for pricing barriers, Asians, and autocallables.',
    hint: 'Differentiate market prices with respect to strike and maturity — out pops the local volatility.',
    formulaLinks: ['dupire-formula', 'local-volatility'],
  },
  {
    id: 32141, topic: 'bruno-dupire', difficulty: 'hard',
    question: 'Dupire later developed "functional Itô calculus." What does this generalize?',
    options: [
      'Classical Itô calculus extended to functionals of the entire path: for $F_t = F(S_{[0,t]})$ depending on the full history, the functional Itô formula is: $$dF_t = \\mathcal{D}_t F \\, dt + \\nabla_S F \\, dS_t + \\frac{1}{2} \\nabla_{SS} F \\, d\\langle S \\rangle_t$$ where $\\mathcal{D}_t$ is the "horizontal derivative" (time evolution along a frozen path), $\\nabla_S$ is the "vertical derivative" (bump the current value), and $\\nabla_{SS}$ is the second vertical derivative.',
      'Itô calculus extended to jump processes — adding compensation for Poisson jumps.',
      'Itô calculus on Riemannian manifolds — replacing the Euclidean Laplacian with the Laplace-Beltrami operator.',
      'Itô calculus for fractional Brownian motion with Hurst parameter $H \\neq 1/2$.'
    ],
    correctIndex: 0,
    explanation: 'Standard Itô calculus handles functions $f(S_t, t)$ of the current state. But many financial derivatives depend on the path history (e.g., Asian options, lookback options, path-dependent volatility). Dupire\'s functional Itô calculus (2009) provides a rigorous chain rule for such functionals, unifying pathwise derivatives with stochastic calculus. Cont and Fournié formalized it further.',
    realWorld: 'Functional Itô calculus is the natural language for hedging path-dependent derivatives, computing sensitivities (Greeks) of exotic options, and understanding model risk for structured products.',
    hint: 'When your derivative depends on the whole price history — not just today\'s price — you need a new calculus.',
    formulaLinks: ['ito-calculus', 'functional-calculus'],
  },
  {
    id: 32142, topic: 'bruno-dupire', difficulty: 'sota',
    question: 'What is the fundamental limitation of local volatility models, and how did Dupire address it?',
    options: [
      'Local vol produces "flattening forward skew" — future implied vol smiles predicted by a local vol model are much flatter than market-observed forward smiles. This is because $\\sigma_{\\text{loc}}(S,t)$ is a deterministic function of $S$, so conditional on $S_T = K$, there is no residual uncertainty in volatility. The forward smile dynamics are wrong: local vol predicts "sticky local vol" $d\\sigma_{\\text{imp}}/dS \\approx -\\text{skew}/2$ while markets show "sticky strike" or "sticky delta" behavior.',
      'Local vol models cannot price European options — they only work for exotic path-dependent derivatives.',
      'Local vol produces negative probabilities in the transition density for large strikes.',
      'Local vol is unstable under calibration — small changes in market prices cause unbounded changes in $\\sigma_{\\text{loc}}$.'
    ],
    correctIndex: 0,
    explanation: 'Dupire himself recognized this limitation and advocated for stochastic local vol (SLV) models: $dS = (r-q)S\\,dt + L(S,t)\\sqrt{v_t}S\\,dW$ where $L(S,t)$ is a "leverage function" calibrated so that the model matches all vanillas AND produces realistic forward skew dynamics. The leverage function is found by solving a particle method (McKean-Vlasov) or calibration PDE.',
    realWorld: 'Stochastic local vol is the gold standard at top-tier banks for pricing exotic equity and FX derivatives. Every major structured products desk uses SLV models calibrated with Dupire\'s local vol as the starting point.',
    hint: 'Local vol gets today\'s smile right but tomorrow\'s smile wrong — because volatility is deterministic, not random.',
    formulaLinks: ['local-volatility', 'stochastic-local-vol'],
  },
];
