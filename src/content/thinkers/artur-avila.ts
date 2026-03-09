import type { Question } from '../types';

export const arturAvilaQuestions: Question[] = [
  {
    id: 31730, topic: 'artur-avila', difficulty: 'easy',
    question: 'Artur Avila won the 2014 Fields Medal — the first Latin American to do so. His work primarily concerns which area?',
    options: [
      'Dynamical systems and spectral theory — proving deep results about the behavior of orbits, renormalization, and the spectrum of quasiperiodic Schrödinger operators like $H\\psi(n) = \\psi(n+1) + \\psi(n-1) + V(\\theta + n\\alpha)\\psi(n)$.',
      'Algebraic number theory — proving new cases of the Langlands correspondence for $\\text{GL}_n$.',
      'Fluid dynamics — proving global regularity for the 3D Navier-Stokes equations.',
      'Algebraic topology — computing stable homotopy groups of spheres using chromatic methods.'
    ],
    correctIndex: 0,
    explanation: 'Avila\'s work spans one-dimensional dynamics (interval exchange transformations, renormalization) and spectral theory of Schrödinger operators. His "global theory" approach classifies dynamical behaviors by studying parameter spaces, showing that typical systems exhibit either regular or stochastic behavior — but rarely anything in between.',
    realWorld: 'Quasiperiodic Schrödinger operators model electrons in quasicrystals (like Penrose tilings). Avila\'s results determine when electrons can conduct (absolutely continuous spectrum) vs. when they\'re localized (pure point spectrum).',
    hint: 'He classified what happens to orbits in dynamical systems — order or chaos, but nothing in between.',
    formulaLinks: ['schrodinger-equation'],
  },
  {
    id: 31731, topic: 'artur-avila', difficulty: 'hard',
    question: 'Avila resolved the "Ten Martini Problem." What does this result state?',
    options: [
      'The spectrum of the almost Mathieu operator $H_\\lambda\\psi(n) = \\psi(n+1) + \\psi(n-1) + 2\\lambda\\cos(2\\pi(\\theta + n\\alpha))\\psi(n)$ is a Cantor set for all irrational $\\alpha$ and all $\\lambda \\neq 0$. The spectrum has Lebesgue measure $|4 - 4|\\lambda||$ and is a Cantor set of this measure.',
      'The Mandelbrot set has exactly ten connected components when restricted to the real line.',
      'The Lyapunov exponent of a random matrix product is positive for exactly ten classes of $2 \\times 2$ matrices.',
      'Ten iterations of any analytic interval map either converge to a fixed point or enter a period-3 cycle.'
    ],
    correctIndex: 0,
    explanation: 'The almost Mathieu operator models an electron on a 2D lattice in a magnetic field (Harper\'s equation / Hofstadter\'s butterfly). Mark Kac offered ten martinis for the proof that its spectrum is always a Cantor set. Avila (with Jitomirskaya) proved this by showing that the Lyapunov exponent is exactly $\\max(0, \\ln|\\lambda|)$ for all energies and all irrational frequencies.',
    realWorld: 'Hofstadter\'s butterfly (the fractal spectrum as a function of magnetic flux) has been experimentally observed in graphene superlattices (Dean et al., 2013) — Avila\'s theorem proves this fractal structure is mathematically exact.',
    hint: 'The spectrum of this quantum operator is always a Cantor set — full of gaps, like a fractal dust.',
    formulaLinks: ['schrodinger-equation', 'cantor-set'],
  },
  {
    id: 31732, topic: 'artur-avila', difficulty: 'sota',
    question: 'Avila developed the "global theory" of one-frequency Schrödinger cocycles. What is the key dichotomy?',
    options: [
      'For the cocycle $(\\alpha, A_E): \\mathbb{T} \\to \\text{SL}(2, \\mathbb{R})$ defined by the Schrödinger equation, the Lyapunov exponent $L(E) = \\lim \\frac{1}{n} \\ln \\|A_E^n(\\theta)\\|$ determines spectral type: if $L(E) > 0$, the cocycle is either uniformly hyperbolic (spectral gap) or non-uniformly hyperbolic (Anderson localization). If $L(E) = 0$, the cocycle is almost reducible (absolutely continuous spectrum). The "critical" case $L(E) = 0$ with non-reducibility has measure zero.',
      'Every one-frequency cocycle is either periodic (rational $\\alpha$) or ergodic (irrational $\\alpha$), with no intermediate behavior.',
      'The Lyapunov exponent is always an integer multiple of $\\ln|\\lambda|$ where $\\lambda$ is the coupling constant.',
      'The set of energies with zero Lyapunov exponent is always a single interval $[-2, 2]$ regardless of the potential.'
    ],
    correctIndex: 0,
    explanation: 'Avila\'s global theory classifies Schrödinger cocycles by their position in a "stratification" of the parameter space. The key tool is analytic continuation of the Lyapunov exponent to the complexified frequency. The "Almost Reducibility Conjecture" (proved by Avila) states that zero Lyapunov exponent implies the cocycle can be conjugated arbitrarily close to a constant — yielding absolutely continuous spectrum.',
    realWorld: 'This resolves fundamental questions about quantum mechanics: whether an electron in a quasiperiodic potential conducts (extended states) or localizes (bound states) depends entirely on the Lyapunov exponent — and Avila classified exactly when each occurs.',
    hint: 'Positive Lyapunov exponent = localization. Zero Lyapunov exponent = conduction. Nothing else happens generically.',
    formulaLinks: ['lyapunov-exponent', 'schrodinger-equation'],
  },
];
