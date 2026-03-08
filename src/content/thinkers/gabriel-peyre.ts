import type { Question } from '../types';

export const gabrielPeyreQuestions: Question[] = [
  {
    id: 21370,
    topic: 'gabriel-peyre',
    difficulty: 'hard',
    question: 'Peyré and Cuturi\'s "Computational Optimal Transport" text identifies which algorithm as the workhorse for regularized OT?',
    options: [
      'Sinkhorn\'s algorithm (iterative matrix scaling of the Gibbs kernel)',
      'The Hungarian algorithm for assignment problems',
      'Interior-point methods for linear programming',
      'Auction algorithms for bipartite matching'
    ],
    correctIndex: 0,
    explanation: 'Sinkhorn iterations on K = exp(−C/ε) are the central computational engine for entropic OT, enabling GPU-parallelized, differentiable transport computations.',
    realWorld: 'The POT (Python Optimal Transport) library, co-developed by Peyré\'s group, makes these algorithms widely accessible.',
    hint: 'The algorithm is named after the matrix-scaling theorem from the 1960s.'
  },
  {
    id: 21371,
    topic: 'gabriel-peyre',
    difficulty: 'sota',
    question: 'Peyré\'s work on Wasserstein barycenters computes the Fréchet mean in Wasserstein space. What is the Wasserstein barycenter of measures {μ₁,...,μₖ} with weights λᵢ?',
    options: [
      'argmin_ν Σᵢ λᵢ W₂²(ν, μᵢ): the measure minimizing the weighted sum of squared Wasserstein distances',
      'The pointwise average of densities: ν = Σᵢ λᵢ μᵢ',
      'The geometric mean of densities normalized to integrate to 1',
      'The measure maximizing entropy subject to moment constraints from the μᵢ'
    ],
    correctIndex: 0,
    explanation: 'The Wasserstein barycenter is a Fréchet mean in (P₂(ℝⁿ), W₂), producing a geometrically meaningful average that preserves features unlike linear averaging.',
    realWorld: 'Wasserstein barycenters are used for texture mixing, multi-source domain adaptation, and federated learning aggregation.',
    hint: 'It generalizes the Euclidean mean to the space of probability measures.'
  },
  {
    id: 21372,
    topic: 'gabriel-peyre',
    difficulty: 'hard',
    question: 'Peyré\'s contributions to imaging science connect OT to which inverse problem framework?',
    options: [
      'Sparse spike recovery and super-resolution via optimal transport regularization on measures',
      'Compressed sensing with random matrices',
      'Total variation denoising (ROF model)',
      'Dictionary learning for patch-based image reconstruction'
    ],
    correctIndex: 0,
    explanation: 'Peyré used OT metrics (especially W₂ and variants) as regularizers for inverse problems on measures, enabling super-resolution of point sources and robust deconvolution.',
    realWorld: 'This approach has applications in microscopy, astronomical imaging, and seismic inversion.',
    hint: 'The regularizer measures distances between spike measures using transport geometry.'
  },
];
