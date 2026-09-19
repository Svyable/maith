import type { Question } from '../types';

// ── New topics for existing fields — 3 questions each ────────────────

// ── Electromagnetism (Physics) ──────────────────────────────────
export const electromagnetismQuestions: Question[] = [
  {
    id: 20050, topic: 'electromagnetism', difficulty: 'easy',
    question: 'Maxwell\'s equations unify:',
    options: ['Electricity and magnetism', 'Gravity and electromagnetism', 'Strong and weak nuclear forces', 'Thermodynamics and mechanics'],
    correctIndex: 0,
    explanation: 'Maxwell\'s four equations describe how electric and magnetic fields are generated and altered by each other and by charges/currents.',
    realWorld: 'Maxwell\'s equations predicted electromagnetic waves — leading to radio, TV, WiFi, and all wireless communication.',
    hint: 'James Clerk Maxwell showed that light itself is an electromagnetic wave.',
  },
  {
    id: 20051, topic: 'electromagnetism', difficulty: 'hard',
    question: 'Faraday\'s law states that the induced EMF equals:',
    options: ['$-\\frac{d\\Phi_B}{dt}$ (negative rate of change of magnetic flux)', '$IR$ (current times resistance)', '$\\frac{q}{4\\pi\\epsilon_0 r^2}$ (Coulomb force)', '$\\mu_0 I / 2\\pi r$ (field from a wire)'],
    correctIndex: 0,
    explanation: 'Faraday\'s law $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$ shows that a changing magnetic flux through a loop induces an electromotive force.',
    realWorld: 'Electric generators, transformers, and induction cooktops all work via Faraday\'s law.',
    hint: 'The negative sign is Lenz\'s law — the induced current opposes the change causing it.',
  },
  {
    id: 20052, topic: 'electromagnetism', difficulty: 'sota',
    question: 'The Aharonov-Bohm effect demonstrates that:',
    options: ['Electromagnetic potentials have physical significance even where fields are zero', 'Electric fields can exist without charges', 'Magnetic monopoles exist', 'Light can be stopped completely'],
    correctIndex: 0,
    explanation: 'In the AB effect, electrons passing through a field-free region around a solenoid acquire a measurable phase shift from the vector potential $\\mathbf{A}$, showing potentials are physically real in quantum mechanics.',
    realWorld: 'The AB effect has been confirmed experimentally and influences the design of quantum interference devices.',
    hint: 'In quantum mechanics, it is the potential $A$, not just $B$, that matters for phase.',
  },
];

// ── Thermodynamics (Physics) ──────────────────────────────────
export const thermodynamicsQuestions: Question[] = [
  {
    id: 20060, topic: 'thermodynamics', difficulty: 'easy',
    question: 'The second law of thermodynamics states that:',
    options: ['Entropy of an isolated system never decreases', 'Energy is always conserved', 'Temperature always increases', 'Pressure equals force per area'],
    correctIndex: 0,
    explanation: 'The second law states $\\Delta S_{\\text{universe}} \\geq 0$ — natural processes increase total entropy, defining the arrow of time.',
    realWorld: 'This is why you can\'t un-scramble an egg or build a perpetual motion machine.',
    hint: 'Think about the direction of spontaneous processes — disorder tends to increase.',
  },
  {
    id: 20061, topic: 'thermodynamics', difficulty: 'hard',
    question: 'The Boltzmann entropy formula is:',
    options: ['$S = k_B \\ln \\Omega$', '$S = k_B T$', '$S = \\Delta H / T$', '$S = nR \\ln V$'],
    correctIndex: 0,
    explanation: 'Boltzmann\'s formula $S = k_B \\ln \\Omega$ connects macroscopic entropy to the number of microstates $\\Omega$, bridging thermodynamics and statistical mechanics.',
    realWorld: 'This equation is engraved on Boltzmann\'s tombstone in Vienna.',
    hint: 'The number of microstates $\\Omega$ counts how many microscopic arrangements give the same macrostate.',
  },
  {
    id: 20062, topic: 'thermodynamics', difficulty: 'sota',
    question: 'The Jarzynski equality $\\langle e^{-\\beta W} \\rangle = e^{-\\beta \\Delta F}$ relates:',
    options: ['Non-equilibrium work measurements to equilibrium free energy differences', 'Temperature to pressure', 'Entropy to enthalpy', 'Volume to internal energy'],
    correctIndex: 0,
    explanation: 'Jarzynski\'s remarkable equality (1997) shows that free energy differences can be extracted from an ensemble of non-equilibrium work measurements, extending the second law.',
    realWorld: 'Used in single-molecule experiments (optical tweezers) to measure free energies of protein folding.',
    hint: 'It connects irreversible processes to equilibrium thermodynamics — a profound result.',
  },
];

// ── Number Theory (Math) ──────────────────────────────────────
export const numberTheoryQuestions: Question[] = [
  {
    id: 10050, topic: 'number-theory', difficulty: 'easy',
    question: 'The Fundamental Theorem of Arithmetic states that every integer $> 1$:',
    options: ['Has a unique prime factorization', 'Is the sum of two primes', 'Has at least two divisors', 'Can be written as $2^n$'],
    correctIndex: 0,
    explanation: 'Every integer greater than 1 can be expressed as a product of primes in exactly one way (up to ordering). This is the bedrock of number theory.',
    realWorld: 'RSA encryption depends on the difficulty of reversing prime factorization for large numbers.',
    hint: 'For example, $12 = 2^2 \\times 3$ — there is no other way to factor it into primes.',
  },
  {
    id: 10051, topic: 'number-theory', difficulty: 'hard',
    question: 'Fermat\'s Little Theorem states that if $p$ is prime and $\\gcd(a, p) = 1$, then:',
    options: ['$a^{p-1} \\equiv 1 \\pmod{p}$', '$a^p \\equiv a \\pmod{p-1}$', '$a^2 \\equiv -1 \\pmod{p}$', '$a^{p+1} \\equiv 0 \\pmod{p}$'],
    correctIndex: 0,
    explanation: 'Fermat\'s Little Theorem is a cornerstone of modular arithmetic: $a^{p-1} \\equiv 1 \\pmod{p}$ for any $a$ not divisible by prime $p$.',
    realWorld: 'Used in primality testing (Miller-Rabin) and computing modular inverses in cryptography.',
    hint: 'Try it with small numbers: $2^{4} = 16 \\equiv 1 \\pmod{5}$.',
  },
  {
    id: 10052, topic: 'number-theory', difficulty: 'sota',
    question: 'The Riemann Hypothesis conjectures that all non-trivial zeros of $\\zeta(s)$ lie on:',
    options: ['The critical line $\\text{Re}(s) = 1/2$', 'The real axis', 'The unit circle', 'The imaginary axis'],
    correctIndex: 0,
    explanation: 'The Riemann Hypothesis (1859) states that all non-trivial zeros of $\\zeta(s) = \\sum n^{-s}$ have real part $1/2$. It remains unproven and is one of the Millennium Prize Problems.',
    realWorld: 'If proven, it would give the best possible bounds on the distribution of prime numbers.',
    hint: 'It is arguably the most important unsolved problem in mathematics, with a $1M prize.',
  },
];

// ── Real Analysis (Math) ──────────────────────────────────────
export const realAnalysisQuestions: Question[] = [
  {
    id: 10060, topic: 'real-analysis', difficulty: 'easy',
    question: 'A sequence $\\{a_n\\}$ converges to $L$ if for every $\\epsilon > 0$, there exists $N$ such that:',
    options: ['$|a_n - L| < \\epsilon$ for all $n > N$', '$a_n = L$ for all $n > N$', '$|a_n| < \\epsilon$', '$a_n > L$ for all $n$'],
    correctIndex: 0,
    explanation: 'The $\\epsilon$-$N$ definition of convergence: the terms of the sequence get arbitrarily close to $L$ and stay close.',
    realWorld: 'This rigorous definition replaced intuitive notions of "approaching" and made calculus logically sound.',
    hint: 'For ANY tolerance $\\epsilon$, you can find a point after which the sequence stays within $\\epsilon$ of $L$.',
  },
  {
    id: 10061, topic: 'real-analysis', difficulty: 'hard',
    question: 'The Bolzano-Weierstrass theorem states that every bounded sequence in $\\mathbb{R}^n$:',
    options: ['Has a convergent subsequence', 'Converges', 'Is monotone', 'Has a maximum'],
    correctIndex: 0,
    explanation: 'The Bolzano-Weierstrass theorem guarantees that any bounded sequence has at least one convergent subsequence — a fundamental compactness result.',
    realWorld: 'Used in proofs of the existence of optimal solutions in optimization and economics.',
    hint: 'Bounded sequences might oscillate, but you can always extract a convergent part.',
  },
  {
    id: 10062, topic: 'real-analysis', difficulty: 'sota',
    question: 'The Lebesgue Dominated Convergence Theorem requires:',
    options: ['Pointwise convergence and domination by an integrable function', 'Uniform convergence only', 'Monotone convergence only', 'Continuity of the limit function'],
    correctIndex: 0,
    explanation: 'If $f_n \\to f$ pointwise and $|f_n| \\leq g$ where $g$ is integrable, then $\\int f_n \\to \\int f$. This is the most widely used convergence theorem in analysis.',
    realWorld: 'Essential in probability theory (expectations), PDE theory, and mathematical physics.',
    hint: 'The "dominating" function $g$ acts as a safety net ensuring integrals behave well.',
  },
];

// ── Risk Management (Quant) ──────────────────────────────────
export const riskManagementQuestions: Question[] = [
  {
    id: 30050, topic: 'risk-management', difficulty: 'easy',
    question: 'Value at Risk (VaR) at the 95% confidence level estimates:',
    options: ['The maximum expected loss over a period that won\'t be exceeded 95% of the time', 'The average daily return', 'The total portfolio value', 'The maximum possible loss'],
    correctIndex: 0,
    explanation: 'VaR is a quantile-based risk measure: "We are 95% confident the loss will not exceed $X over the next day."',
    realWorld: 'Banks are required by Basel III regulations to report VaR daily for capital adequacy.',
    hint: 'It answers: "What is the worst loss in the best 95% of scenarios?"',
  },
  {
    id: 30051, topic: 'risk-management', difficulty: 'hard',
    question: 'Expected Shortfall (CVaR) differs from VaR by:',
    options: ['Averaging losses beyond the VaR threshold (coherent risk measure)', 'Only considering gains', 'Ignoring tail risk', 'Using standard deviation instead of quantiles'],
    correctIndex: 0,
    explanation: 'ES (or CVaR) = $E[L | L > \\text{VaR}_\\alpha]$. Unlike VaR, it captures the severity of tail losses and is a coherent risk measure (satisfies subadditivity).',
    realWorld: 'Basel III shifted from VaR to Expected Shortfall as the primary market risk measure in 2019.',
    hint: 'VaR tells you the threshold; ES tells you what happens when things get worse than that.',
  },
  {
    id: 30052, topic: 'risk-management', difficulty: 'sota',
    question: 'The Fundamental Review of the Trading Book (FRTB) replaced the standardized approach with:',
    options: ['Sensitivity-based approach (SBA) using risk factor sensitivities (delta, vega, curvature)', 'Simple historical VaR', 'Monte Carlo simulation only', 'Parametric VaR with normal distribution'],
    correctIndex: 0,
    explanation: 'FRTB\'s SBA computes capital charges using portfolio sensitivities to risk factors (delta, vega, curvature) with prescribed correlation scenarios, replacing the simplistic standardized method.',
    realWorld: 'FRTB modernizes market-risk capital with a risk-sensitive standardized approach and an internal-models approach centered on stressed Expected Shortfall.',
    hint: 'It decomposes risk into sensitivities (Greeks) rather than relying on a single VaR number.',
  
    sources: [{"title":"Minimum capital requirements for market risk","url":"https://www.bis.org/publications/201901-standards-minimum-capital-requirements-market-risk","publisher":"Basel Committee on Banking Supervision","year":2019}],
    reviewedAt: "2026-09-19",
    factualAsOf: "2026-09-19",
  },

  // ── Risk Management foundation expansion ──────────────────
  {
    id: 30053, topic: "risk-management", difficulty: "easy",
    question: "Diversification reduces risk when positions are:",
    options: ["Identical","Imperfectly correlated","Guaranteed positive","Fully leveraged"],
    correctIndex: 1,
    explanation: "Combining imperfectly correlated exposures can lower aggregate variance relative to concentrated stand-alone risks.",
    realWorld: "Diversification can weaken in stress when correlations rise, so it does not replace scenario analysis.",
    hint: "Imperfect co-movement is the key.",
    reviewedAt: "2026-09-19",
  },
  {
    id: 30054, topic: "risk-management", difficulty: "easy",
    question: "Financial leverage tends to:",
    options: ["Lower all portfolio risk","Remove possible drawdowns","Amplify equity moves","Guarantee positive returns"],
    correctIndex: 2,
    explanation: "With debt fixed over a horizon, changes in a larger asset base are absorbed by a smaller residual equity base.",
    realWorld: "Leverage is a core amplifier of market, margin, liquidity, and solvency risk.",
    hint: "A smaller equity cushion absorbs asset moves.",
    reviewedAt: "2026-09-19",
  },
  {
    id: 30055, topic: "risk-management", difficulty: "hard",
    question: "VaR backtesting focuses on:",
    options: ["Average portfolio returns","Factor-model loadings","Accounting book value","Threshold exceptions"],
    correctIndex: 3,
    explanation: "Backtesting compares realized losses with forecast quantile thresholds and examines how often exceptions occur.",
    realWorld: "Model governance uses backtests alongside stress tests and qualitative review.",
    hint: "Count losses that breach predicted thresholds.",
    reviewedAt: "2026-09-19",
  },
  {
    id: 30056, topic: "risk-management", difficulty: "hard",
    question: "Reverse stress testing begins with:",
    options: ["Normal market conditions","A failure outcome","Recent realized volatility","A benchmark index"],
    correctIndex: 1,
    explanation: "Reverse stress testing specifies an unacceptable outcome and works backward to identify plausible shock combinations that could cause it.",
    realWorld: "It can reveal vulnerabilities not covered by conventional scenario libraries.",
    hint: "Start with failure, then search for causes.",
    reviewedAt: "2026-09-19",
  },
  {
    id: 30057, topic: "risk-management", difficulty: "sota",
    question: "Under FRTB, a non-modellable risk factor lacks:",
    options: ["Sufficient regulatory capital","A liquid secondary market","Enough real-price data","A long enough duration"],
    correctIndex: 2,
    explanation: "FRTB distinguishes modellable and non-modellable risk factors using prescribed evidence from real price observations.",
    realWorld: "Non-modellable risk factors receive separate stress-scenario capital treatment.",
    hint: "The issue is sufficient observable real-price evidence.",
    sources: [{"title":"Minimum capital requirements for market risk","url":"https://www.bis.org/publications/201901-standards-minimum-capital-requirements-market-risk","publisher":"Basel Committee on Banking Supervision","year":2019}],
    reviewedAt: "2026-09-19",
    factualAsOf: "2026-09-19",
  },
  {
    id: 30058, topic: "risk-management", difficulty: "sota",
    question: "FRTB liquidity horizons recognize that positions:",
    options: ["Can exit immediately","Use one fixed horizon","Have no liquidity risk","Need different exit times"],
    correctIndex: 3,
    explanation: "The framework uses liquidity horizons so risk aggregation reflects differences in how quickly exposures can be closed or hedged under stress.",
    realWorld: "Less liquid risk factors can require longer horizons and more conservative tail-risk aggregation.",
    hint: "Not every position unwinds on the same timetable.",
    sources: [{"title":"Minimum capital requirements for market risk","url":"https://www.bis.org/publications/201901-standards-minimum-capital-requirements-market-risk","publisher":"Basel Committee on Banking Supervision","year":2019}],
    reviewedAt: "2026-09-19",
    factualAsOf: "2026-09-19",
  },
];
