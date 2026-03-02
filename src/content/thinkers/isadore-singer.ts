import type { Question } from '../types';

export const isadoreSingerQuestions: Question[] = [
  {
    id: 31105,
    topic: 'isadore-singer',
    difficulty: 'easy',
    question: 'Isadore Singer co-created the Index Theorem, fundamentally unifying mathematics and physics. When the theorem is specifically applied to the Dirac operator on a closed spin manifold, what famous geometric topological invariant does it mathematically produce?',
    options: [
      'The $\\widehat{A}$-genus (A-hat genus), representing the exact difference between the number of positive and negative chirality harmonic spinors.',
      'The Euler characteristic $\\chi$, equating exactly to the number of vertices minus edges plus faces in the topological space.',
      'The Betti number $b_1$, representing the maximum number of circular cuts that can be made without dividing the manifold.',
      'The strictly rational winding number $\\nu$, defining how many times a complex continuous curve encircles the geometric origin.'
    ],
    correctIndex: 0,
    explanation: 'The Dirac operator describes fermions (like electrons) in a curved spacetime. The Index Theorem proves that the difference between right-handed and left-handed zero-energy fermion states is a purely topological number called the $\\widehat{A}$-genus.',
    realWorld: 'This calculation is absolutely essential for string theory and anomaly cancellation, proving that the universe can only exist in 10 dimensions without mathematically destroying its own physical consistency.',
    hint: 'It calculates a highly specific "genus" wearing a mathematical "hat," determining the balance of right-handed and left-handed quantum particles.',
  },
  {
    id: 31106,
    topic: 'isadore-singer',
    difficulty: 'sota',
    question: 'The Atiyah-Patodi-Singer $\\eta$-invariant (eta-invariant) was a massively important extension of the Index Theorem. What physical mathematical constraint did the $\\eta$-invariant specifically account for?',
    options: [
      'It acted as a spectral boundary correction term, allowing the Index Theorem to work on manifolds that have a defined physical boundary, rather than being perfectly closed.',
      'It provided the exact scaling factor required to transition the theorem from a finite 4-dimensional space into an infinite-dimensional Hilbert space.',
      'It isolated and removed the infinite topological divergences caused by strictly non-linear chaotic wave interference inside the manifold.',
      'It algebraically compensated for the localized curvature created by extremely dense singularities, such as theoretical black holes.'
    ],
    correctIndex: 0,
    explanation: 'The original Index Theorem only worked on closed spaces without edges (like the surface of a sphere). To apply it to a space with a boundary (like a half-sphere), they introduced the $\\eta$-invariant. It measures the "spectral asymmetry" (the imbalance of positive vs. negative eigenvalues) of the operator exactly at the boundary.',
    realWorld: 'This boundary mathematics is precisely what physicists use to calculate the strange, anomaly-canceling edge states found in quantum Hall effect insulators.',
    hint: 'It fixes the math so the theorem still works when the geometric shape suddenly hits an "edge" or "wall."',
  },
  {
    id: 31107,
    topic: 'isadore-singer',
    difficulty: 'hard',
    question: 'Singer collaborated with D.B. Ray to define "Ray-Singer torsion." This analytic torsion was introduced as the analytical counterpart to which classic topological invariant?',
    options: [
      'Reidemeister torsion, allowing topological twists to be calculated analytically using the zeta function regularization of the Laplacian spectrum.',
      'The Alexander polynomial, transforming strictly combinatorial knot knotting into continuous multivariable differential equations.',
      'The fundamental groupoid, shifting algebraic group categorization into strictly analytical non-commutative integration.',
      'The topological genus, replacing the discrete counting of geometric holes with the continuous integration of local surface tension.'
    ],
    correctIndex: 0,
    explanation: 'Reidemeister torsion calculates the "twist" of a space using discrete, blocky combinatorial geometry. Ray and Singer brilliantly proved you could calculate the exact same twist purely analytically by analyzing the eigenvalues of the Laplacian operator (the math governing heat diffusion) on that space.',
    realWorld: 'This concept of "analytic torsion" directly paved the way for defining the partition functions in Chern-Simons theory, a fundamental building block of topological quantum computing.',
    hint: 'It proved that the "twist" of a shape can be calculated by studying how heat mathematically diffuses across its surface.',
  },
  {
    id: 31108,
    topic: 'isadore-singer',
    difficulty: 'hard',
    question: 'Decades ago, Richard Kadison and Isadore Singer posed the famous "Kadison-Singer problem." What specific field of mathematics, dealing with infinite-dimensional quantum mechanics, did this problem challenge?',
    options: [
      'The theory of operator algebras, specifically asking if a pure state on a maximal abelian subalgebra uniquely extends to the entire $C^*$-algebra.',
      'The theory of non-linear differential equations, questioning if smooth initial conditions strictly guarantee infinite-time non-chaotic stability.',
      'The field of discrete graph theory, asking if every infinite randomly generated graph mathematically contains a perfect Hamiltonian cycle.',
      'The domain of algebraic number theory, questioning if the primes defined in a Hilbert class field strictly mirror Riemann zeta zero distribution.'
    ],
    correctIndex: 0,
    explanation: 'The problem asked a highly technical question about quantum measurement: If you have complete information about a specific subset of commuting observables (a MASA), does that uniquely determine the state of the entire massive quantum system (the $C^*$-algebra)?',
    realWorld: 'Posed in 1959, this problem remained unsolved for over 50 years until it was finally proven true in 2013 by Marcus, Spielman, and Srivastava, creating massive ripple effects in signal processing and network theory.',
    hint: 'It questions whether knowing the exact state of a small, well-behaved part of a quantum system is enough to definitively know the state of the entire system.',
  },
  {
    id: 31109,
    topic: 'isadore-singer',
    difficulty: 'easy',
    question: 'The Ambrose-Singer theorem provides a profound connection between the holonomy of a connection and its curvature. What does "holonomy" mathematically measure in this context?',
    options: [
      'How much a geometric vector orientation rotates and changes after being continuously parallel-transported around a closed loop on a curved manifold.',
      'The strict volumetric expansion rate of a fluid mass as its internal temperature boundary conditions are mathematically increased.',
      'The precise statistical divergence between two distinct probability distributions plotted over a shared continuous time interval.',
      'The minimum geometric distance required to connect two distinct focal points embedded within a perfectly non-Euclidean hyperbolic space.'
    ],
    correctIndex: 0,
    explanation: 'If you point a vector forward and slide it continuously around a closed loop on a curved surface (like a globe) without rotating it locally, it will end up pointing in a different direction when it returns to the start. This rotation is the "holonomy." The Ambrose-Singer theorem proves this rotation is directly calculated by the surface\'s local curvature (the Riemann curvature tensor).',
    realWorld: 'This geometric "memory" effect is exactly what creates the Aharonov-Bohm effect in quantum physics, where a particle remembers passing near a magnetic field even if it never actually touched the field.',
    hint: 'It measures the bizarre geometric twist that happens when you walk in a perfect circle on a curved surface and realize you are no longer facing the same direction you started.',
  }
];