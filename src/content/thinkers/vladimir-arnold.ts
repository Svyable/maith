import type { Question } from '../types';

export const arnoldQuestions: Question[] = [
  {
    id: 31090,
    topic: 'arnold',
    difficulty: 'sota',
    question: 'Vladimir Arnold solved Hilbert\'s 13th problem by proving a profound theorem about the superposition of continuous functions. What did the Kolmogorov–Arnold representation theorem mathematically establish?',
    options: [
      'Every multivariate continuous function $f(x_1, \\dots, x_n)$ can be represented as a finite composition of continuous functions of only a single variable and addition.',
      'No continuous function of three or more variables can be perfectly decomposed into an algebraic ring of purely two-variable functions.',
      'Any analytic function over the complex plane $\\mathbb{C}$ requires an infinite Taylor series expansion to be represented in a compact topological domain.',
      'The zeros of any continuous multivariate function $f(x_1, x_2)$ map directly to the topological Betti numbers of a corresponding Riemannian manifold.'
    ],
    correctIndex: 0,
    explanation: 'Hilbert conjectured that some functions of three variables could not be constructed from functions of two variables. Arnold and Kolmogorov stunningly proved him wrong by showing that *any* continuous function of $n$ variables can be built using only addition and continuous functions of a single variable.',
    realWorld: 'This theorem is considered the ultimate theoretical foundation for modern artificial neural networks, proving that multi-dimensional data can always be modeled using simple, single-variable activation functions and node summations.',
    hint: 'It proves that multi-variable complexity is actually just an illusion built from single-variable components.',
  },
  {
    id: 31091,
    topic: 'arnold',
    difficulty: 'hard',
    question: 'The KAM theorem (Kolmogorov–Arnold–Moser) explains what happens when a perfectly integrable Hamiltonian system is slightly perturbed. What mathematical condition must the orbital frequencies $\\boldsymbol{\\omega}$ satisfy for the invariant tori to survive?',
    options: [
      'They must satisfy a Diophantine condition, meaning they must be sufficiently "irrational" such that $|\\mathbf{k} \\cdot \\boldsymbol{\\omega}| \\geq \\frac{\\gamma}{|\\mathbf{k}|^\\tau}$.',
      'They must form a perfect harmonic geometric progression such that $\\sum \\omega_i^2 = 1$ under Euclidean normalization.',
      'They must be strictly rational resonances, ensuring that the orbital phase space completely closes its loop within $2\\pi$ radians.',
      'They must equal the complex eigenvalues of a strictly positive-definite Hermitian matrix evaluating the local gravitational tensor.'
    ],
    correctIndex: 0,
    explanation: 'KAM theory proves that small perturbations do not instantly cause a system to degenerate into chaos. However, only the orbits with highly irrational frequency ratios (satisfying the Diophantine condition) survive the perturbation without being destroyed by resonance.',
    realWorld: 'This theorem finally explained why our Solar System is stable. The planets don\'t fly apart or crash into each other because their orbital frequencies are sufficiently "irrational" to avoid compounding resonant gravitational kicks.',
    hint: 'The frequencies must be extremely "bad" at forming simple, neat fractions.',
  },
  {
    id: 31092,
    topic: 'arnold',
    difficulty: 'sota',
    question: 'The Arnold Conjecture fundamentally bridges dynamics and topology within symplectic geometry. What lower bound does it establish for the number of fixed points of a Hamiltonian diffeomorphism on a compact symplectic manifold $M$?',
    options: [
      'The sum of the topological Betti numbers of the manifold, $\\sum_{i} \\beta_i(M)$.',
      'The Euler characteristic of the manifold strictly multiplied by its geometric genus, $\\chi(M) \\cdot g$.',
      'The absolute maximum dimensionality of the corresponding strictly nilpotent Lie algebra, $\\dim(\\mathfrak{g})$.',
      'The fundamental geometric volume of the manifold integrated over the symplectic 2-form $\\omega$.'
    ],
    correctIndex: 0,
    explanation: 'The Arnold Conjecture asserts that a Hamiltonian diffeomorphism (a specific type of smooth deformation of phase space) must have at least as many fixed points as a smooth function has critical points, which is bounded below by the sum of the Betti numbers (the topological "holes" of the space).',
    realWorld: 'Attempts to prove this massive conjecture directly led Andreas Floer to invent Floer homology, completely revolutionizing modern symplectic topology and string theory.',
    hint: 'The number of points that refuse to move is defined by the number of topological "holes" the geometric shape possesses.',
  },
  {
    id: 31093,
    topic: 'arnold',
    difficulty: 'hard',
    question: 'Arnold classified the simple singularities of smooth functions, which stunningly mapped perfectly to the ADE classification. This connected geometric singularities directly to the Dynkin diagrams of which algebraic structures?',
    options: [
      'Simply laced complex Lie algebras (specifically $A_n, D_n, E_6, E_7, E_8$).',
      'Finite associative division algebras extending past the non-commutative octonions.',
      'Non-abelian continuous permutation groups containing perfectly symmetrical normal subgroups.',
      'The modular arithmetic congruent classes defined strictly within finite Galois fields $\\mathbb{F}_p$.'
    ],
    correctIndex: 0,
    explanation: 'Arnold discovered that the simplest ways a smooth mathematical surface can fail to be smooth (its singularities) fall into a specific classification ($A_k, D_k, E_6, E_7, E_8$). Miraculously, this exact same algebraic pattern appears in Lie algebras, Platonic solids, and quiver representations.',
    realWorld: 'The "ADE classification" is considered one of the most mysterious and beautiful phenomena in all of mathematics, suggesting a hidden, universal structural code beneath geometry and algebra.',
    hint: 'It connects the geometry of a crumpled piece of paper to the fundamental symmetries of continuous groups.',
  },
  {
    id: 31094,
    topic: 'arnold',
    difficulty: 'hard',
    question: 'Arnold reformulated the Euler equations for the motion of an incompressible, inviscid fluid. He proved that the fluid\'s path describes a geodesic curve moving across which highly abstract mathematical space?',
    options: [
      'The infinite-dimensional Lie group of volume-preserving diffeomorphisms, $\\text{SDiff}(M)$.',
      'The compact, non-orientable topological space defined by the projected real projective plane, $\\mathbb{RP}^2$.',
      'The fractal boundary of a complex Mandelbrot set scaled by local hydrodynamic viscosity parameters.',
      'The bounded configuration space of a purely quantum-mechanical Hamiltonian scalar wave field.'
    ],
    correctIndex: 0,
    explanation: 'Arnold proved that fluid flow is essentially just the "shortest path" (a geodesic) on a massive, infinite-dimensional curved space representing all the possible ways to smoothly shuffle the fluid\'s particles without changing its total volume (volume-preserving diffeomorphisms).',
    realWorld: 'This transformed fluid dynamics from pure differential calculus into Riemannian geometry, providing the exact mathematical foundation used for modern topological fluid modeling in meteorology.',
    hint: 'He modeled the fluid by looking at every possible way to continuously deform its shape without altering its total volume.',
  }
];