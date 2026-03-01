import type { Question } from '../types';

export const atiyahQuestions: Question[] = [
  {
    id: 31100,
    topic: 'atiyah',
    difficulty: 'sota',
    question: 'The Atiyah-Singer Index Theorem is one of the deepest results of the 20th century. Mathematically, it proves that the analytical index of an elliptic differential operator $D$ on a compact manifold strictly equals:',
    options: [
      'Its topological index, defined by evaluating the characteristic classes $\\int_M \\text{ch}(V) \\wedge \\text{Td}(M)$ over the manifold.',
      'Its geometric Ricci scalar, integrated exclusively over the non-degenerate boundary constraints of the underlying manifold.',
      'Its purely homological degree, derived from the irreducible representations of the manifold\'s fundamental group $\\pi_1(M)$.',
      'Its local Lyapunov spectrum, establishing the absolute bounds of chaotic divergence within the manifold\'s phase space.'
    ],
    correctIndex: 0,
    explanation: 'The theorem bridges analysis (differential equations) and topology (shapes). It proves that the number of solutions to a differential equation (the analytical index, $\\dim \\ker D - \\dim \\text{coker} D$) can be perfectly calculated simply by measuring the topological shape and twists (characteristic classes) of the space it exists on.',
    realWorld: 'This theorem became the absolute mathematical backbone of modern physics, explaining phenomena ranging from gauge anomalies in quantum field theory to the behavior of topological insulators in quantum computing.',
    hint: 'It equated the solutions of calculus equations directly to the physical shape of the space.',
  },
  {
    id: 31101,
    topic: 'atiyah',
    difficulty: 'hard',
    question: 'Alongside Friedrich Hirzebruch, Atiyah developed "Topological K-theory," a generalized cohomology theory. Instead of using standard topological simplices, what algebraic structures are used to construct the groups $K(X)$ in this theory?',
    options: [
      'Vector bundles defined over the topological space $X$.',
      'Polynomial rings generated from continuous rational coefficients.',
      'Singular matrices possessing exactly zero non-real eigenvalues.',
      'Differential forms exhibiting strictly closed, non-exact geometric properties.'
    ],
    correctIndex: 0,
    explanation: 'Standard topology counts "holes" using triangles and simplices (homology). Atiyah and Hirzebruch created K-theory, which instead studies the space by analyzing all the possible linear vector bundles (families of vector spaces) that can be continuously parameterized by the space $X$.',
    realWorld: 'K-theory unexpectedly became the exact mathematical language needed to classify D-branes in string theory and to formalize the mathematics of condensed matter physics.',
    hint: 'It studies a space by examining how "hairy" it is—specifically, analyzing the spaces of lines and arrows glued to its surface.',
  },
  {
    id: 31102,
    topic: 'atiyah',
    difficulty: 'hard',
    question: 'Atiyah collaborated with Drinfeld, Hitchin, and Manin to create the "ADHM construction." What massively complex problem in theoretical physics did this linear algebraic method completely solve?',
    options: [
      'The exact construction and classification of all instanton solutions (anti-self-dual Yang-Mills connections) on the four-sphere $S^4$.',
      'The calculation of the precise Hawking radiation evaporation timeline for non-rotating Schwarzschild black holes.',
      'The mathematical proof stabilizing the infinite perturbative expansions within quantum electrodynamic Feynman diagrams.',
      'The geometric mapping of string theory\'s 11-dimensional M-theory onto a 4-dimensional observable continuous manifold.'
    ],
    correctIndex: 0,
    explanation: 'Instantons are localized topological configurations in quantum field theory that act as "tunneling" mechanisms between different vacuums. The ADHM construction shockingly reduced the infinitely complex non-linear differential equations of Yang-Mills instantons into simple, solvable finite-dimensional linear algebra matrices.',
    realWorld: 'This was a massive triumph showing that pure mathematics (algebraic geometry) could outright solve the most brutal, intractable differential equations plaguing theoretical quantum physicists.',
    hint: 'It took the hardest non-linear equations describing quantum vacuum tunneling and turned them into basic matrix algebra.',
  },
  {
    id: 31103,
    topic: 'atiyah',
    difficulty: 'easy',
    question: 'Late in his career, Atiyah formalized the axioms for Topological Quantum Field Theory (TQFT). In this framework, a TQFT is defined as a mathematical "functor" that maps what to what?',
    options: [
      'It maps geometric cobordisms ($n$-dimensional manifolds linking boundaries) to algebraic vector spaces.',
      'It maps highly chaotic thermodynamic particle states directly to static Euclidean spatial coordinates.',
      'It maps the continuous wave functions of subatomic particles to discrete Newtonian mechanical vectors.',
      'It maps irrational real number sequences to finite, perfectly bounded complex topological spaces.'
    ],
    correctIndex: 0,
    explanation: 'In Atiyah\'s axioms, a TQFT takes the topological space (the "cobordism" describing space evolving over time) and funnels it into pure linear algebra (vector spaces and linear operators).',
    realWorld: 'TQFTs do not depend on distance or time metric tensors, making them incredibly useful for modeling quantum computers, where you want information stored globally in the "shape" of the system to prevent local noise from destroying the data.',
    hint: 'It translates the physical shape of an evolving universe into pure linear algebra.',
  },
  {
    id: 31104,
    topic: 'atiyah',
    difficulty: 'sota',
    question: 'The Atiyah-Bott fixed-point theorem heavily generalizes the classical Lefschetz fixed-point theorem. What complex mathematical objects does the Atiyah-Bott theorem evaluate to determine fixed points?',
    options: [
      'It evaluates elliptic complexes and the trace of an induced geometric endomorphism over a smooth manifold.',
      'It evaluates the infinite limit of a strictly convergent Markov chain transitioning through discrete probability states.',
      'It evaluates the rational factorization of primes over non-commutative modular Galois extension rings.',
      'It evaluates the strict orthogonality of continuous wave functions localized strictly within a confined quantum potential well.'
    ],
    correctIndex: 0,
    explanation: 'The Lefschetz theorem counts fixed points using topological homology. Atiyah and Bott extended this to "elliptic complexes," allowing mathematicians to calculate the fixed points of smooth mappings by evaluating the analytical traces of differential operators acting on vector bundles.',
    realWorld: 'This theorem gave physicists powerful tools to calculate the exact number of zero-energy quantum states present in highly symmetrical physical systems.',
    hint: 'It looks at the continuous trace of linear differential operators acting on the space, rather than just basic topology.',
  }
];