import type { Question } from '../types';

export const rudnickQuestions: Question[] = [
  {
    id: 22060,
    topic: 'rudnick',
    difficulty: 'hard',
    question: 'Rudnick and Sarnak\'s conjecture on quantum unique ergodicity (QUE) concerns the behaviour of eigenfunctions of the Laplacian on negatively curved manifolds. What does QUE predict?',
    options: [
      'High-energy eigenfunctions become equidistributed with respect to the Liouville measure',
      'Eigenfunctions concentrate on closed geodesics',
      'Nodal domains grow logarithmically with the eigenvalue',
      'Eigenfunctions exhibit Anderson localisation',
    ],
    correctIndex: 0,
    explanation: 'QUE asserts that for negatively curved compact manifolds, the probability measures $|\\phi_n|^2 dV$ converge weakly to the uniform (Liouville) measure — no scarring on periodic orbits.',
    realWorld: 'QUE connects to quantum chaos: understanding how chaotic classical dynamics manifests in quantum systems like quantum billiards.',
    hint: 'In the semiclassical limit, where does the quantum probability density concentrate?',
  },
  {
    id: 22061,
    topic: 'rudnick',
    difficulty: 'sota',
    question: 'Rudnick\'s work on the statistics of zeros of zeta functions over function fields $\\mathbb{F}_q[T]$ revealed agreement with which random matrix ensemble as $q \\to \\infty$?',
    options: [
      'The unitary group $U(N)$ with Haar measure',
      'The Gaussian Orthogonal Ensemble (GOE)',
      'The Gaussian Unitary Ensemble (GUE)',
      'The symplectic ensemble GSE',
    ],
    correctIndex: 0,
    explanation: 'Katz and Sarnak showed that the monodromy groups determine the symmetry type; for generic families over function fields, the statistics match $U(N)$ as $q \\to \\infty$, with GUE pair correlation emerging.',
    realWorld: 'Random matrix models of L-function zeros guide conjectures about prime number distribution.',
    hint: 'Function field analogues allow one to use algebraic geometry (monodromy) to prove what remains conjectural over $\\mathbb{Q}$.',
  },
  {
    id: 22062,
    topic: 'rudnick',
    difficulty: 'sota',
    question: 'Rudnick studied the variance of the number of lattice points in thin annuli $\\{x : R \\leq |x| \\leq R + c/R\\}$. The variance is conjectured to grow as which power of $R$?',
    options: [
      '$R^{\\varepsilon}$ for any $\\varepsilon > 0$ (nearly bounded)',
      '$R^{1/2}$',
      '$\\log R$',
      '$R$',
    ],
    correctIndex: 0,
    explanation: 'The Berry–Tabor conjecture predicts Poisson statistics for integrable systems, implying the variance of lattice point counts in thin annuli grows slower than any power — essentially $R^\\varepsilon$.',
    realWorld: 'Lattice point counting in annuli connects to the Gauss circle problem and signal processing on grids.',
    hint: 'For integrable (non-chaotic) systems, fluctuations are expected to be very mild.',
  },
];
