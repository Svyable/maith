import type { Question } from '../types';

export const richardSinkhornQuestions: Question[] = [
  {
    id: 21310,
    topic: 'richard-sinkhorn',
    difficulty: 'sota',
    question: 'The Sinkhorn-Knopp theorem states that any square matrix with strictly positive entries can be uniquely scaled to what form?',
    options: [
      'A doubly stochastic matrix (rows and columns each sum to 1)',
      'An orthogonal matrix',
      'A symmetric positive-definite matrix',
      'A matrix with unit spectral norm'
    ],
    correctIndex: 0,
    explanation: 'Sinkhorn (1964) proved that any strictly positive square matrix A can be written as D₁AD₂ where D₁, D₂ are diagonal with positive entries and D₁AD₂ is doubly stochastic. The scaling is unique up to a scalar.',
    realWorld: 'This theorem underpins entropic optimal transport solvers used in ML, NLP attention mechanisms, and computational biology.',
    hint: 'The result concerns making row sums and column sums both equal to one.'
  },
  {
    id: 21311,
    topic: 'richard-sinkhorn',
    difficulty: 'hard',
    question: 'Sinkhorn iterations converge at what rate for a strictly positive matrix?',
    options: [
      'Linear (geometric) convergence with rate depending on the Hilbert projective metric',
      'Quadratic convergence like Newton\'s method',
      'Sublinear O(1/k) convergence',
      'Superlinear but sub-quadratic convergence'
    ],
    correctIndex: 0,
    explanation: 'Convergence is linear (geometric) and the contraction rate is governed by the Birkhoff-Hopf theorem via the Hilbert projective metric on the positive cone.',
    realWorld: 'The fast linear convergence makes Sinkhorn practical for real-time applications in computer vision and generative modeling.',
    hint: 'The rate is analyzed using a projective metric on the cone of positive vectors.'
  },
  {
    id: 21312,
    topic: 'richard-sinkhorn',
    difficulty: 'hard',
    question: 'For what class of matrices does the Sinkhorn-Knopp theorem guarantee doubly stochastic scaling?',
    options: [
      'Matrices with total support (every positive entry lies on a positive diagonal)',
      'Any non-negative matrix with at least one positive entry per row',
      'Symmetric matrices only',
      'Matrices with full rank'
    ],
    correctIndex: 0,
    explanation: 'The theorem extends beyond strictly positive matrices to non-negative matrices with total support. A matrix has total support if every positive entry belongs to a positive diagonal.',
    realWorld: 'This generalization is crucial for sparse transport plans arising in real-world distribution matching problems.',
    hint: 'The condition is weaker than strict positivity but stronger than just having positive row/column sums.'
  },
];
