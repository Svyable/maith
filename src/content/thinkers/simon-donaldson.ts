import type { Question } from '../types';

export const simonDonaldsonQuestions: Question[] = [
  {
    id: 31750, topic: 'simon-donaldson', difficulty: 'easy',
    question: 'Simon Donaldson won the 1986 Fields Medal for revolutionary work connecting gauge theory to topology. What was his key discovery?',
    options: [
      'He used Yang-Mills gauge theory from physics to prove that $\\mathbb{R}^4$ admits exotic smooth structures — smooth manifolds homeomorphic but not diffeomorphic to standard $\\mathbb{R}^4$. This is unique to dimension 4: no other $\\mathbb{R}^n$ has exotic structures.',
      'He proved that all 4-manifolds are smoothable — every topological 4-manifold admits a smooth structure.',
      'He classified all compact Lie groups using their associated gauge connections.',
      'He proved the Poincaré conjecture in dimension 4 using Ricci flow.'
    ],
    correctIndex: 0,
    explanation: 'Donaldson studied the moduli space $\\mathcal{M}$ of anti-self-dual (ASD) connections on a 4-manifold: $F_A^+ = 0$ where $F_A$ is the curvature 2-form. The topology of $\\mathcal{M}$ encodes subtle smooth invariants (Donaldson polynomials) that distinguish smooth structures invisible to purely topological methods.',
    realWorld: 'Donaldson\'s work showed that physics (gauge theory) could solve pure mathematics problems. This inspired the Seiberg-Witten invariants and the entire field of mathematical gauge theory.',
    hint: '4-dimensional space is uniquely weird — it\'s the only dimension where "exotic" copies of flat space exist.',
    formulaLinks: ['yang-mills'],
  },
  {
    id: 31751, topic: 'simon-donaldson', difficulty: 'hard',
    question: 'Donaldson\'s theorem places strong restrictions on the intersection form of smooth 4-manifolds. What does it state?',
    options: [
      'If $X$ is a compact, simply connected, smooth 4-manifold with definite intersection form $Q_X: H^2(X; \\mathbb{Z}) \\times H^2(X; \\mathbb{Z}) \\to \\mathbb{Z}$, then $Q_X$ is diagonalizable over $\\mathbb{Z}$: $Q_X \\cong \\text{diag}(\\pm 1, \\ldots, \\pm 1)$. This eliminates infinitely many topological 4-manifolds from being smoothable.',
      'The intersection form of every smooth 4-manifold is even: $Q_X(x, x) \\equiv 0 \\pmod{2}$ for all $x$.',
      'The signature of a smooth 4-manifold equals its Euler characteristic: $\\sigma(X) = \\chi(X)$.',
      'The intersection form determines the smooth structure uniquely: $Q_X \\cong Q_Y$ implies $X \\cong Y$ as smooth manifolds.'
    ],
    correctIndex: 0,
    explanation: 'Freedman had shown (topologically) that any unimodular symmetric bilinear form can be realized as the intersection form of a topological 4-manifold. Donaldson\'s theorem says that for smooth manifolds, only the simplest forms (diagonal $\\pm 1$) can occur in the definite case. The proof uses the compactified moduli space of ASD connections as a cobordism.',
    realWorld: 'Combined with Freedman\'s topological classification, this implies the existence of exotic $\\mathbb{R}^4$s — uncountably many distinct smooth structures on 4-dimensional Euclidean space.',
    hint: 'Smoothness in dimension 4 forces the intersection form to be as simple as possible — diagonal.',
    formulaLinks: ['intersection-form'],
  },
  {
    id: 31752, topic: 'simon-donaldson', difficulty: 'sota',
    question: 'Donaldson invariants are polynomials on the homology of 4-manifolds derived from gauge theory. How are they defined?',
    options: [
      'For a smooth 4-manifold $X$, the Donaldson polynomial $D_X: \\text{Sym}^*(H_2(X)) \\to \\mathbb{Z}$ is defined by: $$D_X(\\Sigma_1, \\ldots, \\Sigma_d) = \\#(\\mathcal{M}_k \\cap \\mu(\\Sigma_1) \\cap \\cdots \\cap \\mu(\\Sigma_d))$$ where $\\mathcal{M}_k$ is the moduli space of ASD connections with instanton number $k$, and $\\mu: H_2(X) \\to H^2(\\mathcal{M}_k)$ is the $\\mu$-map from geometric representatives to cohomology classes on the moduli space.',
      'The Donaldson polynomial is the characteristic polynomial of the Laplacian $\\Delta$ on 2-forms: $D_X(t) = \\det(tI - \\Delta)$.',
      'The Donaldson polynomial counts the number of holomorphic curves in each homology class of $X$.',
      'The Donaldson polynomial is the Hilbert polynomial of the ring of invariant functions on the moduli space of flat connections.'
    ],
    correctIndex: 0,
    explanation: 'The moduli space $\\mathcal{M}_k$ of ASD connections on an $\\text{SU}(2)$ bundle with $c_2 = k$ has expected dimension $8k - 3(1 + b_2^+)$. By intersecting with cycles coming from surfaces in $X$ via the Uhlenbeck compactification, one obtains integer-valued invariants that detect exotic smooth structures. Kronheimer-Mrowka later proved the "simple type" conjecture relating these to Seiberg-Witten invariants.',
    realWorld: 'Donaldson invariants distinguished the first exotic smooth structures on closed 4-manifolds. They were largely supplanted by the simpler Seiberg-Witten invariants but remain foundational in mathematical physics.',
    hint: 'Count the intersection points in the moduli space of "self-dual" connections — the answer is a topological invariant.',
    formulaLinks: ['yang-mills', 'instanton'],
  },
];
