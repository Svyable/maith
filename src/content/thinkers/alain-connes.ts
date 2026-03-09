import type { Question } from '../types';

export const alainConnesQuestions: Question[] = [
  {
    id: 31590, topic: 'alain-connes', difficulty: 'easy',
    question: 'Alain Connes won the 1982 Fields Medal for his work on operator algebras. What revolutionary mathematical framework did he create?',
    options: [
      'Noncommutative geometry — extending differential geometry to spaces where coordinates don\'t commute ($xy \\neq yx$), using operator algebras to define geometry on "quantum spaces" that have no classical points.',
      'Tropical geometry — replacing addition with max and multiplication with addition to create a combinatorial version of algebraic geometry.',
      'Synthetic differential geometry — using nilpotent infinitesimals in topos theory to create a rigorous foundation for infinitesimal calculus.',
      'Derived algebraic geometry — extending algebraic geometry by replacing commutative rings with simplicial commutative rings.'
    ],
    correctIndex: 0,
    explanation: 'Connes realized that many geometric constructions (metric, curvature, integration) can be reformulated using the algebra of functions on a space rather than the space itself. When that algebra is noncommutative, you get "geometry" on spaces that have no classical points — like the space of leaves of a foliation or the phase space of quantum mechanics.',
    realWorld: 'Noncommutative geometry has applications in the Standard Model of particle physics (Connes-Lott model), quantum Hall effect, string theory, and even number theory via Connes\' approach to the Riemann Hypothesis.',
    hint: 'He does geometry on spaces where $xy \\neq yx$ — replacing points with algebras.',
  },
  {
    id: 31591, topic: 'alain-connes', difficulty: 'hard',
    question: 'Connes\' noncommutative geometry encodes a Riemannian manifold $(M, g)$ as a "spectral triple." What data comprises a spectral triple?',
    options: [
      '$(\\mathcal{A}, \\mathcal{H}, D)$ — an algebra $\\mathcal{A}$ (functions on the space), a Hilbert space $\\mathcal{H}$ (spinors), and a Dirac operator $D$ (encoding the metric). The geodesic distance is recovered as $d(p,q) = \\sup\\{|f(p) - f(q)| : \\|[D, f]\\| \\leq 1\\}$.',
      '$(X, \\omega, J)$ — a topological space $X$, a symplectic form $\\omega$, and a complex structure $J$ compatible with $\\omega$.',
      '$(\\mathcal{C}, \\otimes, \\mathbf{1})$ — a monoidal category $\\mathcal{C}$ with tensor product $\\otimes$ and unit object $\\mathbf{1}$.',
      '$(G, \\nabla, R)$ — a Lie group $G$, a connection $\\nabla$, and a curvature tensor $R$ satisfying the Bianchi identity.'
    ],
    correctIndex: 0,
    explanation: 'The spectral triple is Connes\' fundamental axiom system. For a spin manifold, $\\mathcal{A} = C^\\infty(M)$, $\\mathcal{H} = L^2(M, S)$ (square-integrable spinors), and $D$ is the Dirac operator $D = i\\gamma^\\mu \\nabla_\\mu$. The remarkable distance formula recovers the geodesic metric entirely from the commutator $[D, f]$ — no explicit metric tensor is needed.',
    realWorld: 'Spectral triples for noncommutative spaces can model the Standard Model of particle physics: Connes showed that the Higgs field naturally emerges as the "connection" on a noncommutative internal space.',
    hint: 'An algebra (where), a Hilbert space (what lives there), and a Dirac operator (how to measure distances).',
  },
  {
    id: 31592, topic: 'alain-connes', difficulty: 'sota',
    question: 'Connes proposed a spectral approach to the Riemann Hypothesis. What is his strategy?',
    options: [
      'He constructs a noncommutative space (the adele class space $\\mathbb{A}_\\mathbb{Q} / \\mathbb{Q}^*$) whose "spectral realization" gives a self-adjoint operator whose spectrum would reproduce the zeros of the Riemann zeta function on the critical line — converting RH into a positivity problem in noncommutative geometry.',
      'He proves that $\\zeta(s)$ can be analytically continued to a Fredholm determinant of a trace-class operator on $L^2(0,1)$, then applies the spectral theorem to constrain its zeros.',
      'He uses the Selberg trace formula on hyperbolic 3-manifolds to relate zeta zeros to lengths of closed geodesics, proving equidistribution on the critical line.',
      'He constructs a quantum mechanical system whose partition function equals $\\zeta(s)$, then proves the system\'s Hamiltonian is positive-definite.'
    ],
    correctIndex: 0,
    explanation: 'Connes (with Consani and Marcolli) constructs a quantum statistical mechanical system on the adele class space. The Riemann zeros appear as the absorption spectrum of a suitable operator. RH would follow if a certain trace formula (analogous to the Weil explicit formula) could be shown to satisfy a positivity condition. This connects RH to the deepest structures in noncommutative geometry.',
    realWorld: 'While RH remains unproven, Connes\' approach has yielded new insights into the connection between number theory and physics, inspiring work on "arithmetic site" and F₁-geometry.',
    hint: 'He builds a noncommutative space from the adeles and tries to show the zeta zeros are eigenvalues of a self-adjoint operator.',
  },
];
