import type { Question } from '../types';

export const pierreDeligneQuestions: Question[] = [
  {
    id: 31700, topic: 'pierre-deligne', difficulty: 'easy',
    question: 'Pierre Deligne won the 1978 Fields Medal and 2013 Abel Prize. His most celebrated result is the proof of which conjecture?',
    options: [
      'The Weil conjectures — proving that the zeta function of a smooth projective variety $X$ over $\\mathbb{F}_q$ satisfies: $$Z(X, t) = \\frac{P_1(t) \\cdots P_{2n-1}(t)}{P_0(t) P_2(t) \\cdots P_{2n}(t)}$$ where the roots of $P_i(t)$ have absolute value $q^{-i/2}$ (the Riemann Hypothesis for varieties over finite fields).',
      'The Langlands conjecture for $\\text{GL}_n$ over function fields.',
      'The Hodge conjecture for algebraic cycles on complex projective manifolds.',
      'The Birch and Swinnerton-Dyer conjecture for elliptic curves of rank $\\leq 2$.'
    ],
    correctIndex: 0,
    explanation: 'Weil conjectured in 1949 that the zeta function of a variety over a finite field has properties analogous to the Riemann zeta function. Deligne proved the deepest part — the "Riemann Hypothesis" analog — using Grothendieck\'s étale cohomology and a brilliant reduction to estimating exponential sums.',
    realWorld: 'Deligne\'s theorem has applications in coding theory (weight distributions of algebraic-geometric codes), cryptography (counting points on curves over finite fields), and analytic number theory (bounding exponential sums).',
    hint: 'He proved the analog of the Riemann Hypothesis — not for integers, but for varieties over finite fields.',
    formulaLinks: ['riemann-zeta'],
  },
  {
    id: 31701, topic: 'pierre-deligne', difficulty: 'hard',
    question: 'Deligne\'s proof relies on bounding eigenvalues of Frobenius acting on étale cohomology. What is the precise statement of Deligne\'s theorem (Weil II)?',
    options: [
      'For a smooth projective variety $X/\\mathbb{F}_q$ of dimension $n$, the eigenvalues $\\alpha_{i,j}$ of Frobenius $\\text{Fr}_q$ acting on $H^i_{\\text{ét}}(\\bar{X}, \\mathbb{Q}_\\ell)$ satisfy $|\\alpha_{i,j}| = q^{i/2}$. Equivalently: $$|\\#X(\\mathbb{F}_{q^k}) - q^{nk}| \\leq \\sum_{i=0}^{2n-1} b_i \\cdot q^{ik/2}$$ where $b_i = \\dim H^i_{\\text{ét}}$ are the Betti numbers.',
      'The Frobenius endomorphism acts as multiplication by $q$ on all cohomology groups $H^i(X)$.',
      'The zeta function $Z(X, t)$ has all its zeros on the line $\\text{Re}(s) = n/2$ in the complex plane.',
      'The number of $\\mathbb{F}_q$-points satisfies $\\#X(\\mathbb{F}_q) = q^n + O(q^{n-1})$ with an explicit constant depending only on the genus.'
    ],
    correctIndex: 0,
    explanation: 'Weil II is more general than the original conjectures: it applies to $\\ell$-adic sheaves, not just constant coefficients. The key is that Frobenius eigenvalues on $H^i$ are algebraic numbers all of absolute value $q^{i/2}$ (under any embedding into $\\mathbb{C}$). Deligne\'s proof uses a monodromy argument and the Lefschetz pencil technique.',
    realWorld: 'This gives the sharpest possible error term for counting points on varieties, directly applicable to error-correcting codes built from algebraic curves (Goppa codes).',
    hint: 'The eigenvalues of Frobenius on the $i$-th cohomology all have the same absolute value: $q^{i/2}$.',
    formulaLinks: ['riemann-zeta', 'frobenius'],
  },
  {
    id: 31702, topic: 'pierre-deligne', difficulty: 'sota',
    question: 'Deligne also proved the "purity" theorem for mixed Hodge structures. What does this foundational result state?',
    options: [
      'Every complex algebraic variety $X$ (possibly singular or non-compact) has cohomology groups $H^k(X, \\mathbb{Q})$ carrying a functorial mixed Hodge structure: a weight filtration $W_\\bullet$ and a Hodge filtration $F^\\bullet$ such that $\\text{Gr}^W_m H^k$ is a pure Hodge structure of weight $m$. For smooth projective $X$, $H^k$ is pure of weight $k$: $$H^k(X, \\mathbb{C}) = \\bigoplus_{p+q=k} H^{p,q}(X)$$',
      'Every Hodge structure of weight $k$ is a direct sum of irreducible polarizable Hodge structures of the same weight.',
      'The Hodge numbers $h^{p,q}$ of a smooth projective variety are topological invariants independent of the complex structure.',
      'Mixed Hodge structures form an abelian category equivalent to the category of rational representations of a pro-algebraic group.'
    ],
    correctIndex: 0,
    explanation: 'Before Deligne, Hodge theory only worked for smooth compact varieties. Deligne extended it to all algebraic varieties using simplicial resolutions and logarithmic differential forms. The mixed structure encodes how the topology of singular/non-compact varieties differs from the smooth projective case. The weight filtration captures "how singular" the cohomology is.',
    realWorld: 'Mixed Hodge structures are essential in mirror symmetry, string theory compactifications, and the study of period maps in algebraic geometry. They also appear in the theory of motives and in arithmetic geometry.',
    hint: 'Even ugly, singular varieties have beautiful Hodge structures — if you allow "mixing" of different weights.',
    formulaLinks: ['hodge-decomposition'],
  },
];
