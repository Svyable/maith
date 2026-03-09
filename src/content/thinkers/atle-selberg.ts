import type { Question } from '../types';

export const atleSelbergQuestions: Question[] = [
  {
    id: 31850, topic: 'atle-selberg', difficulty: 'easy',
    question: 'Atle Selberg won the 1950 Fields Medal for his contributions to number theory. What is the Selberg sieve?',
    options: [
      'An upper-bound sieve method that optimizes quadratic forms to estimate prime-counting functions. For sifting $\\mathcal{A}$ by primes $\\leq z$: $$S(\\mathcal{A}, z) \\leq \\frac{X}{\\sum_{d \\leq z} \\mu^2(d)/g(d)} + R$$ where $X = |\\mathcal{A}|$, $g$ is a multiplicative function, and $R$ is the remainder. Unlike Brun\'s sieve, Selberg\'s method uses $\\lambda_d^2$ weights (always non-negative), avoiding sign issues.',
      'A method for computing the exact number of primes $\\leq x$ in time $O(\\sqrt{x})$.',
      'A probabilistic sieve assigning $P(n \\text{ prime}) = 1/\\ln n$ independently.',
      'A combinatorial sieve counting prime $k$-tuples using inclusion-exclusion over $2^k$ terms.'
    ],
    correctIndex: 0,
    explanation: 'Selberg\'s key innovation was replacing the Möbius function weights $\\mu(d)$ (which alternate in sign and cause cancellation problems) with optimized squared weights $\\lambda_d^2 \\geq 0$. This turns the sieving problem into a quadratic optimization, giving clean upper bounds. The method is elementary but powerful — it gave the first elementary proofs of the prime number theorem.',
    realWorld: 'The Selberg sieve is the starting point for GPY, Maynard\'s bounded gaps result, and essentially all modern sieve theory. It\'s also used in computational number theory for efficiently finding primes.',
    hint: 'Square the weights to make them positive — then optimize the quadratic form.',
    formulaLinks: ['prime-counting', 'selberg-sieve'],
  },
  {
    id: 31851, topic: 'atle-selberg', difficulty: 'hard',
    question: 'Selberg formulated a famous conjecture about $L$-functions. What is the Selberg class and Selberg\'s orthonormality conjecture?',
    options: [
      'The Selberg class $\\mathcal{S}$ consists of Dirichlet series $F(s) = \\sum a_n n^{-s}$ satisfying: (1) analytic continuation, (2) functional equation with gamma factors, (3) Ramanujan bound $a_n \\ll n^\\epsilon$, (4) Euler product. Selberg conjectured orthonormality: $$\\sum_{p \\leq x} \\frac{a_p(F)\\overline{a_p(G)}}{p} = \\delta_{F,G} \\cdot \\log\\log x + O(1)$$ for primitive $F, G \\in \\mathcal{S}$.',
      'The Selberg class is the set of all $L$-functions satisfying the Riemann Hypothesis, and orthonormality means their zeros interlace.',
      'The Selberg class consists of zeta functions of number fields, and orthonormality means their residues at $s = 1$ are linearly independent.',
      'The Selberg class is the set of degree-1 $L$-functions, and orthonormality refers to the orthogonality of the associated characters.'
    ],
    correctIndex: 0,
    explanation: 'Selberg\'s orthonormality conjecture implies that distinct primitive $L$-functions are "statistically independent" in their prime coefficients. It would imply the Artin conjecture, the strong multiplicity-one theorem for automorphic representations, and many results about the distribution of zeros. It\'s one of the deepest open problems in analytic number theory.',
    realWorld: 'Understanding the Selberg class would unify all known $L$-functions (Riemann, Dirichlet, Hecke, automorphic, Artin) under a single framework — the "periodic table" of $L$-functions.',
    hint: 'Different $L$-functions should be "orthogonal" — their prime coefficients are uncorrelated.',
    formulaLinks: ['l-function', 'riemann-zeta'],
  },
  {
    id: 31852, topic: 'atle-selberg', difficulty: 'sota',
    question: 'The Selberg trace formula connects the spectrum of the Laplacian on a hyperbolic surface to its closed geodesics. What is its form?',
    options: [
      'For a compact hyperbolic surface $\\Gamma \\backslash \\mathbb{H}$ with Laplacian eigenvalues $\\lambda_n = 1/4 + r_n^2$ and primitive closed geodesics of lengths $\\ell_\\gamma$: $$\\sum_n h(r_n) = \\frac{\\text{Area}}{4\\pi} \\int_{-\\infty}^\\infty r \\tanh(\\pi r) h(r) \\, dr + \\sum_{\\{\\gamma\\}} \\sum_{k=1}^\\infty \\frac{\\ell_\\gamma}{2\\sinh(k\\ell_\\gamma/2)} \\hat{h}(k\\ell_\\gamma)$$ The left side is spectral; the right side is geometric.',
      'The trace formula states $\\sum \\lambda_n^{-1} = \\text{vol}(M) / (4\\pi)$ — relating the total spectral content to volume.',
      'The trace formula computes $\\det(\\Delta - s(1-s)) = \\prod_\\gamma (1 - e^{-s\\ell_\\gamma})$ — a product over geodesics.',
      'The trace formula states $\\sum e^{-\\lambda_n t} = (4\\pi t)^{-1} \\text{Area} + O(e^{-c/t})$ as $t \\to 0$.'
    ],
    correctIndex: 0,
    explanation: 'The Selberg trace formula is the non-abelian generalization of the Poisson summation formula. The "spectral side" sums over eigenvalues of the Laplacian; the "geometric side" sums over conjugacy classes of $\\Gamma$ (closed geodesics). It connects quantum mechanics (eigenvalues = energy levels) to classical mechanics (geodesics = classical orbits) — a manifestation of the correspondence principle.',
    realWorld: 'The Selberg trace formula is the prototype for the Arthur-Selberg trace formula, which is the main tool in the Langlands program. It\'s also fundamental in quantum chaos (Berry-Tabor conjecture) and spectral geometry.',
    hint: 'Eigenvalues of the Laplacian = "quantum" side. Lengths of closed geodesics = "classical" side. They\'re equal.',
    formulaLinks: ['selberg-trace-formula', 'laplacian'],
  },
];
