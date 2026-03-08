import type { Question } from '../types';

export const marcoCuturiQuestions: Question[] = [
  {
    id: 21300,
    topic: 'marco-cuturi',
    difficulty: 'sota',
    question: 'In Cuturi\'s 2013 Sinkhorn distances paper, what regularization is added to the Kantorovich problem to make it tractable?',
    options: [
      'Entropic regularization: min ⟨C,P⟩ + ε·H(P), where H is the negative entropy',
      'L2 regularization on the transport plan: min ⟨C,P⟩ + ε·‖P‖²',
      'Nuclear norm regularization: min ⟨C,P⟩ + ε·‖P‖*',
      'Tikhonov regularization on the marginal constraints'
    ],
    correctIndex: 0,
    explanation: 'Cuturi added an entropic penalty εKL(P‖ab^T) to the discrete Kantorovich problem, converting it to a matrix scaling problem solvable by Sinkhorn iterations in O(n² / ε²) time.',
    realWorld: 'Entropic OT powers Wasserstein barycenters for image interpolation, domain adaptation, and single-cell genomics alignment.',
    hint: 'The regularizer involves the Shannon entropy of the transport plan.'
  },
  {
    id: 21301,
    topic: 'marco-cuturi',
    difficulty: 'sota',
    question: 'The Sinkhorn algorithm for entropic OT alternates between which two operations?',
    options: [
      'Row normalization and column normalization of the Gibbs kernel K = exp(−C/ε)',
      'Gradient descent on primal and dual variables simultaneously',
      'Projection onto the row-marginal polytope and the column-marginal polytope alternately',
      'SVD decomposition and thresholding of the cost matrix'
    ],
    correctIndex: 0,
    explanation: 'Sinkhorn iterations alternate scaling the rows and columns of K = exp(−C/ε) to match the target marginals, converging geometrically to the regularized optimal plan.',
    realWorld: 'This simple alternating procedure runs efficiently on GPUs, enabling large-scale OT in deep learning pipelines.',
    hint: 'Think of alternating row and column scaling of a positive matrix.'
  },
  {
    id: 21302,
    topic: 'marco-cuturi',
    difficulty: 'hard',
    question: 'What computational complexity advantage does entropic OT (Sinkhorn) have over exact linear-programming OT for n points?',
    options: [
      'O(n² / ε²) vs O(n³ log n) for the exact LP solution',
      'O(n log n) vs O(n²) for the exact solution',
      'O(n) vs O(n² log n) for the exact solution',
      'Both have the same complexity, but Sinkhorn uses less memory'
    ],
    correctIndex: 0,
    explanation: 'Exact OT via LP costs O(n³ log n), while Sinkhorn achieves ε-approximate solutions in O(n² / ε²) with highly parallelizable matrix operations.',
    realWorld: 'This speedup made Wasserstein distances practical for comparing distributions with millions of support points.',
    hint: 'The key advantage is going from cubic to near-quadratic.'
  },
];
