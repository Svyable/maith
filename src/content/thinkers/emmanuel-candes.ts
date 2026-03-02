import type { Question } from '../types';

export const emmanuelCandesQuestions: Question[] = [
  {
    id: 21210,
    topic: 'emmanuel-candes',
    difficulty: 'sota',
    question: 'In Candès\' compressed sensing framework, what is the key condition on the measurement matrix A for exact sparse recovery via ℓ₁ minimization?',
    options: [
      'The Restricted Isometry Property (RIP)',
      'A must be a square orthogonal matrix',
      'All singular values of A must equal 1',
      'A must have full column rank'
    ],
    correctIndex: 0,
    explanation: 'The Restricted Isometry Property (RIP) ensures that the measurement matrix preserves distances between sparse vectors, guaranteeing that ℓ₁ minimization (basis pursuit) exactly recovers sparse signals from far fewer measurements than traditional Nyquist sampling.',
    realWorld: 'RIP-satisfying matrices enable MRI scans that are 5-10x faster, dramatically reducing patient scan times.',
    hint: 'The property ensures A acts like a near-isometry on all sufficiently sparse vectors.'
  },
  {
    id: 21211,
    topic: 'emmanuel-candes',
    difficulty: 'sota',
    question: 'Candès\' matrix completion theorem shows that an n×n rank-r matrix can be recovered from how many random entries?',
    options: [
      'O(rn log²n) entries',
      'O(n²) entries (the full matrix)',
      'O(r²) entries',
      'O(n) entries regardless of rank'
    ],
    correctIndex: 0,
    explanation: 'Under incoherence conditions, nuclear norm minimization recovers an n×n rank-r matrix from O(rn polylog n) randomly sampled entries — far fewer than the n² total entries.',
    realWorld: 'This is the mathematical foundation behind Netflix-style recommendation engines that predict your ratings from sparse user data.',
    hint: 'The number scales nearly linearly with n, not quadratically — that is the miracle.'
  },
  {
    id: 21212,
    topic: 'emmanuel-candes',
    difficulty: 'sota',
    question: 'What convex relaxation does Candès use to recover sparse signals in basis pursuit?',
    options: [
      'min ∥x∥₁ subject to Ax = b',
      'min ∥x∥₂ subject to Ax = b',
      'min ∥x∥∞ subject to Ax = b',
      'min ∥x∥₀ subject to Ax = b'
    ],
    correctIndex: 0,
    explanation: 'The ℓ₀ "norm" (counting nonzeros) is NP-hard to minimize. Candès showed that replacing it with the ℓ₁ norm (sum of absolute values) — a convex relaxation — yields exact recovery under RIP conditions.',
    realWorld: 'ℓ₁ minimization is used in seismology, radar imaging, and astronomical signal reconstruction.',
    hint: 'The magic is replacing a combinatorial problem with its closest convex surrogate.'
  },
];
