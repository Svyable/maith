import type { Question } from '../types';

export const elonLindenstraussQuestions: Question[] = [
  {
    id: 31820, topic: 'elon-lindenstrauss', difficulty: 'easy',
    question: 'Elon Lindenstrauss won the 2010 Fields Medal for his work in which area?',
    options: [
      'Ergodic theory and its applications to number theory — proving that certain dynamical systems have "rigid" behavior (unique ergodicity, equidistribution) with striking consequences for Diophantine approximation and quantum chaos.',
      'Algebraic topology — proving the Kervaire invariant one conjecture in all dimensions.',
      'Partial differential equations — proving global regularity for the Navier-Stokes equations in 2D.',
      'Combinatorial optimization — proving that the traveling salesman problem admits a polynomial-time approximation scheme.'
    ],
    correctIndex: 0,
    explanation: 'Lindenstrauss proved the Arithmetic Quantum Unique Ergodicity (AQUE) conjecture: eigenfunctions of the Laplacian on arithmetic hyperbolic surfaces become equidistributed as the eigenvalue $\\lambda \\to \\infty$. He also proved Littlewood\'s conjecture for a set of full Hausdorff dimension and advanced the classification of measures invariant under higher-rank groups.',
    realWorld: 'His results connect abstract dynamical systems to concrete number theory — explaining why quantum wavefunctions on curved spaces spread out uniformly at high energies.',
    hint: 'Quantum wavefunctions on arithmetic surfaces become uniformly spread out at high energies — he proved it.',
    formulaLinks: ['ergodic-theory'],
  },
  {
    id: 31821, topic: 'elon-lindenstrauss', difficulty: 'hard',
    question: 'Lindenstrauss proved a major result toward Littlewood\'s conjecture. What does this conjecture state, and what did he prove?',
    options: [
      'Littlewood\'s conjecture states that for all $\\alpha, \\beta \\in \\mathbb{R}$: $$\\liminf_{n \\to \\infty} n \\cdot \\|n\\alpha\\| \\cdot \\|n\\beta\\| = 0$$ where $\\|x\\| = \\min(x - \\lfloor x \\rfloor, \\lceil x \\rceil - x)$. Lindenstrauss (with Einsiedler and Katok) proved that the set of exceptions has Hausdorff dimension zero — so the conjecture holds for "almost all" pairs.',
      'Littlewood\'s conjecture states $\\|n\\alpha\\| + \\|n\\beta\\| > 1/n^2$ for all $n$ and all algebraic $\\alpha, \\beta$.',
      'Littlewood conjectured that $\\sum_{n=1}^\\infty \\|n\\alpha\\| \\|n\\beta\\|$ converges for all irrational $\\alpha, \\beta$.',
      'Littlewood conjectured that $\\max(\\|n\\alpha\\|, \\|n\\beta\\|) < 1/n$ for infinitely many $n$ for any $\\alpha, \\beta$.'
    ],
    correctIndex: 0,
    explanation: 'The key innovation was translating the number-theoretic conjecture into a question about orbits of diagonal flows on the homogeneous space $\\text{SL}_3(\\mathbb{R})/\\text{SL}_3(\\mathbb{Z})$. Lindenstrauss\'s measure rigidity results (classifying invariant measures for higher-rank actions) then implied that counterexamples, if they exist, must form an extremely small set.',
    realWorld: 'This exemplifies the power of the "dynamics $\\to$ number theory" pipeline: abstract measure classification for Lie group actions solves concrete problems about rational approximation.',
    hint: 'Can you simultaneously approximate two irrational numbers well? He proved you almost always can.',
    formulaLinks: ['diophantine-approximation'],
  },
  {
    id: 31822, topic: 'elon-lindenstrauss', difficulty: 'sota',
    question: 'Lindenstrauss\'s measure classification theorem is his deepest technical contribution. What does it state for $\\times 2, \\times 3$ on the circle?',
    options: [
      'Any probability measure $\\mu$ on $\\mathbb{R}/\\mathbb{Z}$ that is invariant under both $T_2: x \\mapsto 2x$ and $T_3: x \\mapsto 3x$ and has positive entropy for $T_2$ must be Lebesgue measure. This is a partial resolution of Furstenberg\'s $\\times 2, \\times 3$ conjecture: $$h_\\mu(T_2) > 0 \\text{ and } T_3\\mu = \\mu \\implies \\mu = \\text{Leb}$$',
      'Every $T_2$-invariant measure is also $T_3$-invariant, so the two transformations generate the same invariant measures.',
      'The only $T_2, T_3$-invariant ergodic measures are Lebesgue and the Dirac mass at 0.',
      'The entropy $h_\\mu(T_2) = \\log 2 \\cdot h_\\mu(T_3) / \\log 3$ for all jointly invariant measures.'
    ],
    correctIndex: 0,
    explanation: 'Furstenberg conjectured (1967) that the only jointly $\\times 2, \\times 3$ invariant measures are Lebesgue and atomic. Rudolph proved this assuming positive entropy for one map. Lindenstrauss\'s general measure classification theorems for higher-rank abelian actions (using his "low entropy method") give the most powerful approach, extending to $\\text{SL}_n$ actions on homogeneous spaces.',
    realWorld: 'This connects to the Mahler conjecture on multiplicatively independent transformations and has implications for the distribution of digits in different number bases.',
    hint: 'If a measure "sees" both doubling and tripling with some randomness, it must be uniform — no other option.',
    formulaLinks: ['entropy', 'ergodic-theory'],
  },
];
