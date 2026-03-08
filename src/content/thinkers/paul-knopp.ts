import type { Question } from '../types';

export const paulKnoppQuestions: Question[] = [
  {
    id: 21320,
    topic: 'paul-knopp',
    difficulty: 'hard',
    question: 'The Sinkhorn-Knopp algorithm for scaling a matrix to doubly stochastic form can be viewed as alternating projections in which space?',
    options: [
      'The space of positive diagonal matrices, projecting onto row-stochastic and column-stochastic sets alternately',
      'The space of orthogonal matrices via Gram-Schmidt iterations',
      'The space of symmetric matrices via eigenvalue thresholding',
      'The Hilbert space of square-integrable functions'
    ],
    correctIndex: 0,
    explanation: 'Each Sinkhorn iteration multiplies by a diagonal matrix to match one set of marginal constraints, effectively performing alternating Bregman projections (KL divergence) onto the sets of row-stochastic and column-stochastic matrices.',
    realWorld: 'This geometric perspective connects matrix scaling to optimization theory and has inspired generalized algorithms for multi-marginal transport.',
    hint: 'Each step normalizes either all rows or all columns.'
  },
  {
    id: 21321,
    topic: 'paul-knopp',
    difficulty: 'hard',
    question: 'What necessary and sufficient condition on a non-negative matrix A ensures the Sinkhorn-Knopp algorithm converges to a doubly stochastic matrix?',
    options: [
      'A has total support (the support contains a perfect matching)',
      'A is symmetric',
      'A has rank at least n−1',
      'A has no zero rows or columns'
    ],
    correctIndex: 0,
    explanation: 'Total support means every positive entry of A lies on a positive diagonal (permutation). This is necessary and sufficient for convergence to a unique doubly stochastic scaling.',
    realWorld: 'Checking total support is important in practice to avoid degenerate Sinkhorn iterations in sparse OT problems.',
    hint: 'The condition relates to the combinatorial structure of the matrix\'s positive entries.'
  },
  {
    id: 21322,
    topic: 'paul-knopp',
    difficulty: 'sota',
    question: 'The DAD scaling problem (D₁AD₂ = doubly stochastic) is equivalent to minimizing which divergence?',
    options: [
      'The KL divergence between the scaled matrix and the set of doubly stochastic matrices',
      'The Frobenius distance to the Birkhoff polytope',
      'The total variation distance to the nearest permutation matrix',
      'The Wasserstein-1 distance between row and column marginals'
    ],
    correctIndex: 0,
    explanation: 'Sinkhorn-Knopp iterations minimize KL(B‖D₁AD₂) over diagonal scalings, which is equivalent to the dual of an entropy-regularized linear program over the Birkhoff polytope.',
    realWorld: 'This KL perspective unifies matrix scaling with information geometry and optimal transport duality.',
    hint: 'The algorithm minimizes an information-theoretic divergence, not a Euclidean distance.'
  },
];
