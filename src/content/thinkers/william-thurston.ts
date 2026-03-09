import type { Question } from '../types';

export const williamThurstonQuestions: Question[] = [
  {
    id: 31580, topic: 'william-thurston', difficulty: 'easy',
    question: 'William Thurston won the 1982 Fields Medal for his work on the topology of 3-manifolds. What was his most famous conjecture?',
    options: [
      'The Geometrization Conjecture — every closed 3-manifold can be decomposed into pieces, each carrying one of exactly eight model geometries (e.g., spherical $S^3$, hyperbolic $\\mathbb{H}^3$, Euclidean $\\mathbb{E}^3$).',
      'The Poincaré Conjecture — every simply connected closed 3-manifold is homeomorphic to the 3-sphere.',
      'The Virtual Haken Conjecture — every closed irreducible 3-manifold with infinite fundamental group has a finite cover containing an incompressible surface.',
      'The Ending Lamination Conjecture — a hyperbolic 3-manifold is uniquely determined by its topology and ending laminations.'
    ],
    correctIndex: 0,
    explanation: 'Thurston\'s Geometrization Conjecture vastly generalized the Poincaré Conjecture: it proposed that all 3-manifolds can be cut along tori and spheres into pieces, each admitting one of eight homogeneous geometries. The Poincaré Conjecture is just the special case where the manifold is simply connected (and therefore must be the 3-sphere with spherical geometry).',
    realWorld: 'Grigori Perelman proved the Geometrization Conjecture in 2003 using Ricci flow with surgery — resolving both Thurston\'s and Poincaré\'s conjectures simultaneously.',
    hint: 'He proposed that every 3D space can be built from just 8 geometric building blocks.',
  },
  {
    id: 31581, topic: 'william-thurston', difficulty: 'hard',
    question: 'Thurston proved that "most" knot complements in $S^3$ admit hyperbolic geometry. What does this mean precisely?',
    options: [
      'The complement $S^3 \\setminus K$ of a knot $K$ (excluding torus and satellite knots) admits a complete hyperbolic metric of finite volume. By Mostow rigidity, this metric is unique — making the hyperbolic volume a knot invariant.',
      'The knot group $\\pi_1(S^3 \\setminus K)$ is isomorphic to a lattice in $PSL(2, \\mathbb{R})$ for all prime knots.',
      'The complement of any alternating knot can be tessellated by regular ideal hyperbolic octahedra.',
      'Every knot complement has a negatively curved Riemannian metric with sectional curvatures in $[-4, -1]$.'
    ],
    correctIndex: 0,
    explanation: 'Thurston showed that if a knot complement is atoroidal (no essential tori) and not a torus knot, it admits a unique complete hyperbolic structure. Mostow rigidity then guarantees this structure is unique, so geometric invariants like volume, the Chern-Simons invariant, and the length spectrum are topological invariants of the knot.',
    realWorld: 'The program SnapPea (by Jeff Weeks, Thurston\'s student) computes hyperbolic structures on knot complements and is widely used in low-dimensional topology research.',
    hint: 'Remove a knot from 3D space — the remaining space usually has a natural hyperbolic geometry, and Mostow rigidity makes it unique.',
  },
  {
    id: 31582, topic: 'william-thurston', difficulty: 'sota',
    question: 'Thurston\'s eight model geometries for 3-manifolds are the foundation of his program. Which of the following correctly lists several of them?',
    options: [
      '$S^3$ (spherical), $\\mathbb{E}^3$ (Euclidean), $\\mathbb{H}^3$ (hyperbolic), $S^2 \\times \\mathbb{R}$, $\\mathbb{H}^2 \\times \\mathbb{R}$, $\\widetilde{SL}(2,\\mathbb{R})$, Nil, and Sol — classified by the isometry group acting transitively with compact stabilizer.',
      '$S^3$, $\\mathbb{E}^3$, $\\mathbb{H}^3$, $\\mathbb{CP}^2$, $S^2 \\times S^1$, $T^3$, $K3$, and $\\mathbb{H}^2 \\times \\mathbb{H}^1$ — classified by holonomy groups.',
      '$S^3$, $\\mathbb{E}^3$, $\\mathbb{H}^3$, de Sitter, anti-de Sitter, Minkowski, Rindler, and Milne — the Lorentzian analogs from general relativity.',
      '$S^3$, $\\mathbb{E}^3$, $\\mathbb{H}^3$, $S^7$, $\\mathbb{O}P^2$, Cayley plane, $G_2$ manifold, and Spin(7) manifold — classified by exceptional holonomy.'
    ],
    correctIndex: 0,
    explanation: 'Thurston classified all maximal, simply connected 3-dimensional geometries $(X, G)$ where $G$ acts transitively with compact point stabilizers. There are exactly eight: three isotropic ($S^3, \\mathbb{E}^3, \\mathbb{H}^3$), two products ($S^2 \\times \\mathbb{R}, \\mathbb{H}^2 \\times \\mathbb{R}$), and three twisted ($\\widetilde{SL}(2,\\mathbb{R})$, Nil, Sol). Hyperbolic geometry is by far the richest and most common.',
    realWorld: 'Most of the eight geometries appear in nature: $\\mathbb{E}^3$ (crystals), $S^3$ (cosmology), $\\mathbb{H}^3$ (knot complements), Sol (Anosov diffeomorphisms). Thurston\'s classification is the 3D analog of the uniformization theorem for surfaces.',
    hint: 'Three constant-curvature spaces, two product spaces, and three "twisted" spaces — eight total.',
  },
];
