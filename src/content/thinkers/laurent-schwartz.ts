import type { Question } from '../types';

export const laurentSchwartzQuestions: Question[] = [
  {
    id: 31660, topic: 'laurent-schwartz', difficulty: 'easy',
    question: 'Laurent Schwartz won the first-ever Fields Medal awarded to a French mathematician (1950) for creating which mathematical theory?',
    options: [
      'The theory of distributions — generalizing functions to include objects like the Dirac delta $\\delta(x)$, defined not by pointwise values but by their action on test functions: $$\\langle \\delta, \\varphi \\rangle = \\varphi(0) \\quad \\text{for all } \\varphi \\in C_c^\\infty(\\mathbb{R}^n)$$',
      'The theory of stochastic processes — defining Brownian motion rigorously as a continuous-path Gaussian process.',
      'Algebraic K-theory — classifying vector bundles on algebraic varieties using homotopy-theoretic tools.',
      'The theory of wavelets — constructing orthonormal bases of $L^2$ from scaled and translated copies of a single function.'
    ],
    correctIndex: 0,
    explanation: 'Before Schwartz, the Dirac delta "function" (used constantly in physics) had no rigorous mathematical foundation. Schwartz defined distributions as continuous linear functionals on the space $\\mathcal{D} = C_c^\\infty$ of smooth compactly supported functions. Every distribution has derivatives of all orders: $\\langle T\', \\varphi \\rangle = -\\langle T, \\varphi\' \\rangle$.',
    realWorld: 'Distribution theory is the foundation of modern PDE theory, quantum mechanics (wave functions as tempered distributions), signal processing (impulse responses), and electrical engineering.',
    hint: 'He made the "delta function" that physicists used illegally into a rigorous mathematical object.',
    formulaLinks: ['dirac-delta'],
  },
  {
    id: 31661, topic: 'laurent-schwartz', difficulty: 'hard',
    question: 'Schwartz\'s theory gives every distribution a Fourier transform. What is the key space for this, and what is its self-duality property?',
    options: [
      'The space of tempered distributions $\\mathcal{S}\'(\\mathbb{R}^n)$ — duals of Schwartz functions $\\mathcal{S}$. The Fourier transform is an automorphism $\\mathcal{F}: \\mathcal{S}\' \\to \\mathcal{S}\'$ extending: $$\\langle \\hat{T}, \\varphi \\rangle = \\langle T, \\hat{\\varphi} \\rangle$$ Since $\\mathcal{F}: \\mathcal{S} \\xrightarrow{\\sim} \\mathcal{S}$ is a topological isomorphism, the dual map is also an isomorphism.',
      'The space $L^1(\\mathbb{R}^n)$ — every integrable function has a Fourier transform in $C_0(\\mathbb{R}^n)$ by the Riemann-Lebesgue lemma.',
      'The space $H^s(\\mathbb{R}^n)$ — Sobolev spaces are invariant under $\\mathcal{F}$ when $s = n/2$.',
      'The space of analytic functionals on $\\mathbb{C}^n$ — the Fourier-Borel transform maps them to entire functions of exponential type.'
    ],
    correctIndex: 0,
    explanation: 'Schwartz functions $\\varphi \\in \\mathcal{S}$ are smooth and rapidly decreasing: $\\sup_x |x^\\alpha D^\\beta \\varphi(x)| < \\infty$ for all multi-indices $\\alpha, \\beta$. The Fourier transform preserves $\\mathcal{S}$, so the dual $\\mathcal{S}\'$ is also preserved. This allows defining $\\hat{\\delta} = 1$ (the Fourier transform of the delta function is the constant 1) rigorously.',
    realWorld: 'Tempered distributions unify the Fourier analysis of $L^2$ functions, measures, and even more singular objects. Modern spectral analysis in physics relies entirely on this framework.',
    hint: 'The "Schwartz space" of rapidly decreasing functions is perfectly suited for Fourier analysis — and so is its dual.',
    formulaLinks: ['fourier-transform', 'dirac-delta'],
  },
  {
    id: 31662, topic: 'laurent-schwartz', difficulty: 'sota',
    question: 'Schwartz proved an impossibility result about multiplying distributions. What does the Schwartz impossibility theorem state?',
    options: [
      'There is no associative, commutative algebra $\\mathcal{A}$ containing $\\mathcal{D}\'(\\mathbb{R})$ as a linear subspace such that: (1) the product extends pointwise multiplication of continuous functions, (2) the Leibniz rule $D(fg) = f\'g + fg\'$ holds, and (3) $\\delta \\cdot x = 0$. In short, distributions cannot be multiplied in a way that preserves all classical algebraic properties.',
      'No distribution $T \\in \\mathcal{D}\'$ can satisfy $T^2 = \\delta$ — the square root of the delta function does not exist in any distribution space.',
      'The product $\\delta(x) \\cdot \\delta(x)$ is always zero in any consistent extension of distribution theory.',
      'The space $\\mathcal{D}\'$ cannot be given a Banach space topology compatible with the weak-* convergence.'
    ],
    correctIndex: 0,
    explanation: 'This is a fundamental obstruction: you can\'t multiply arbitrary distributions while keeping all the nice algebraic rules. The proof shows that assuming all three properties leads to contradictions like $1 = 0$. Colombeau algebras resolve this by relaxing condition (1) — the product of continuous functions is only "associated" to their pointwise product, not equal.',
    realWorld: 'This impossibility motivates renormalization in quantum field theory: products of distributions at the same point (like $\\phi(x)^2$) require regularization procedures, which is why QFT needs renormalization.',
    hint: 'You can\'t multiply delta functions together — the rules of algebra break down in a provably unavoidable way.',
    formulaLinks: ['dirac-delta'],
  },
];
