import type { Question } from '../types';

export const timothyGowersQuestions: Question[] = [
  {
    id: 31680, topic: 'timothy-gowers', difficulty: 'easy',
    question: 'Timothy Gowers won the 1998 Fields Medal for contributions to functional analysis and combinatorics. Which Banach space result is he famous for?',
    options: [
      'He constructed the first Banach space that does not contain any unconditional basic sequence — solving the unconditional basic sequence problem. This space $X_G$ has the property that every infinite-dimensional subspace contains $\\ell_1^n$\'s with distortion growing to infinity.',
      'He proved that every separable Banach space is isomorphic to a subspace of $C[0,1]$.',
      'He showed that $\\ell_p$ and $L_p$ are the only homogeneous Banach spaces for $1 \\leq p < \\infty$.',
      'He proved the Banach-Tarski paradox extends to all infinite-dimensional Banach spaces.'
    ],
    correctIndex: 0,
    explanation: 'The unconditional basic sequence problem asked whether every Banach space contains a subspace with an unconditional basis. Gowers and Maurey constructed a "hereditarily indecomposable" (HI) space where every bounded operator has the form $\\lambda I + S$ with $S$ strictly singular. This exotic space has no unconditional structure at all.',
    realWorld: 'This resolved a central question in functional analysis and showed that Banach space theory is richer and wilder than expected — with implications for the geometry of high-dimensional convex bodies.',
    hint: 'He built a space so rigid that every operator on it is essentially a scalar multiple of the identity.',
    formulaLinks: ['banach-space'],
  },
  {
    id: 31681, topic: 'timothy-gowers', difficulty: 'hard',
    question: 'Gowers proved a new proof of Szemerédi\'s theorem using a novel dichotomy. What is the "Gowers uniformity norm" he introduced?',
    options: [
      'The $U^k$ norm of $f: \\mathbb{Z}_N \\to \\mathbb{C}$ is: $$\\|f\\|_{U^k}^{2^k} = \\mathbb{E}_{x, h_1, \\ldots, h_k \\in \\mathbb{Z}_N} \\prod_{\\omega \\in \\{0,1\\}^k} \\mathcal{C}^{|\\omega|} f\\left(x + \\sum_i \\omega_i h_i\\right)$$ where $\\mathcal{C}$ is complex conjugation. A function is "pseudorandom" (has no arithmetic structure at scale $k$) iff $\\|f\\|_{U^k}$ is small.',
      'The $U^k$ norm is $\\|f\\|_{U^k} = \\|\\hat{f}\\|_{\\ell^{2k}}$ — the $2k$-th moment of the Fourier coefficients.',
      'The $U^k$ norm is the $k$-th largest singular value of the matrix $M_{ij} = f(i+j)$.',
      'The $U^k$ norm equals $\\sup_{P \\text{ degree } k} |\\langle f, e^{2\\pi i P} \\rangle|$ — correlation with polynomial phases.'
    ],
    correctIndex: 0,
    explanation: 'Gowers introduced the $U^k$ norms to capture exactly the kind of "structure" that forces arithmetic progressions of length $k+1$. His dichotomy: either $\\|1_A - \\delta\\|_{U^{k-1}}$ is small (and $A$ behaves randomly, giving progressions by counting), or it\'s large (and $A$ correlates with a structured object, allowing an iterative density increment argument).',
    realWorld: 'The Gowers norms became fundamental in additive combinatorics and led to the Green-Tao theorem (primes contain arbitrarily long arithmetic progressions). They also connect to ergodic theory and higher-order Fourier analysis.',
    hint: 'These norms detect "hidden arithmetic structure" in sets — if the norm is small, the set looks random to arithmetic progressions.',
    formulaLinks: ['szemeredi-theorem'],
  },
  {
    id: 31682, topic: 'timothy-gowers', difficulty: 'sota',
    question: 'The inverse theorem for Gowers norms (Green-Tao-Ziegler) characterizes when $\\|f\\|_{U^k}$ is large. What does it say?',
    options: [
      'If $\\|f\\|_{U^{k}} \\geq \\delta > 0$ for $f: \\mathbb{Z}_N \\to \\mathbb{C}$ with $\\|f\\|_\\infty \\leq 1$, then $f$ correlates with a degree-$(k-1)$ nilsequence: $$\\left|\\mathbb{E}_n f(n) \\overline{F(g^n \\Gamma)}\\right| \\geq c(\\delta, k)$$ where $G/\\Gamma$ is a nilmanifold of degree $\\leq k-1$, $g \\in G$, and $F: G/\\Gamma \\to \\mathbb{C}$ is Lipschitz.',
      'Large $\\|f\\|_{U^k}$ implies $f$ is a degree-$(k-1)$ polynomial: $f(n) = e^{2\\pi i P(n)}$ where $P \\in \\mathbb{R}[n]$ with $\\deg P = k-1$.',
      'Large $\\|f\\|_{U^k}$ implies $\\hat{f}$ is concentrated on $\\leq k$ frequencies in $\\mathbb{Z}_N$.',
      'Large $\\|f\\|_{U^k}$ implies $f$ is $(\\delta, k)$-structured: the support of $f$ contains a coset progression of rank $\\leq k$.'
    ],
    correctIndex: 0,
    explanation: 'For $k = 2$, the inverse theorem reduces to classical Fourier analysis (correlation with linear phases). For $k \\geq 3$, the "correct" structured objects are nilsequences — functions on nilmanifolds evaluated along polynomial orbits. This was conjectured by Green-Tao and proved by Green-Tao-Ziegler, building on Gowers\' foundational work. The proof uses algebraic constructions and equidistribution theory on nilmanifolds.',
    realWorld: 'The inverse theorem is the engine behind the Green-Tao theorem and underpins modern additive combinatorics. It connects number theory to dynamics on nilpotent Lie groups.',
    hint: 'If a function has large $U^k$ norm, it must "look like" a function on a nilmanifold — a higher-order generalization of a Fourier character.',
    formulaLinks: ['gowers-norms', 'nilsequence'],
  },
];
