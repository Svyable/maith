import type { Question } from '../types';

export const michaelFreedmanQuestions: Question[] = [
  {
    id: 31800, topic: 'michael-freedman', difficulty: 'easy',
    question: 'Michael Freedman won the 1986 Fields Medal for proving which landmark result in topology?',
    options: [
      'The topological Poincaré conjecture in dimension 4: every closed, simply connected topological 4-manifold with the homology of $S^4$ is homeomorphic to $S^4$. More broadly, he classified all closed simply connected topological 4-manifolds by their intersection form $Q_X$.',
      'The smooth Poincaré conjecture in dimension 4 — every smooth homotopy 4-sphere is diffeomorphic to $S^4$.',
      'The Schoenflies conjecture — every smooth embedding $S^3 \\hookrightarrow S^4$ bounds a 4-ball.',
      'The Borel conjecture — every homotopy equivalence between aspherical 4-manifolds is homotopic to a homeomorphism.'
    ],
    correctIndex: 0,
    explanation: 'Freedman showed that any unimodular symmetric bilinear form over $\\mathbb{Z}$ is realized as the intersection form of a closed simply connected topological 4-manifold. His proof introduced "Casson handles" — infinite towers of self-intersecting disks that converge to genuine topological embeddings. Combined with Donaldson\'s theorem (smooth 4-manifolds have restricted intersection forms), this implies exotic $\\mathbb{R}^4$s exist.',
    realWorld: 'Freedman later applied topological ideas to quantum computing at Microsoft, leading the Station Q research group developing topological quantum computers based on anyons.',
    hint: 'He proved that in 4 dimensions, topology is wild — any intersection form can occur topologically.',
    formulaLinks: ['poincare-conjecture'],
  },
  {
    id: 31801, topic: 'michael-freedman', difficulty: 'hard',
    question: 'Freedman\'s classification of topological 4-manifolds depends on a key invariant beyond the intersection form. What is it?',
    options: [
      'The Kirby-Siebenmann invariant $\\text{ks}(X) \\in H^4(X; \\mathbb{Z}/2) \\cong \\mathbb{Z}/2$, which obstructs the existence of a PL (piecewise-linear) structure. Two simply connected closed 4-manifolds with the same intersection form $Q$ are homeomorphic if and only if they have the same $\\text{ks}$ invariant. For even forms, $\\text{ks}$ is determined by $Q$; for odd forms, both values of $\\text{ks}$ are realized.',
      'The Rohlin invariant $\\mu(X) \\in \\mathbb{Z}/16$, computed from the signature and a spin structure.',
      'The Casson invariant $\\lambda(X) \\in \\mathbb{Z}$, counting flat $\\text{SU}(2)$ connections on the boundary.',
      'The Seiberg-Witten basic classes $\\{K \\in H^2(X; \\mathbb{Z}) : \\text{SW}(K) \\neq 0\\}$.'
    ],
    correctIndex: 0,
    explanation: 'For simply connected closed 4-manifolds, Freedman proved the classification: $(Q_X, \\text{ks}(X))$ determines the homeomorphism type. When $Q$ is even, $\\text{ks}$ is forced by Rohlin\'s theorem ($\\sigma(X) \\equiv 0 \\pmod{16}$). When $Q$ is odd, both $\\text{ks} = 0$ and $\\text{ks} = 1$ occur, giving two distinct manifolds with the same intersection form.',
    realWorld: 'This classification shows that dimension 4 is the critical dimension where topology and smooth structure diverge maximally — with implications for physics (spacetime structure in general relativity).',
    hint: 'A single $\\mathbb{Z}/2$ invariant — does the manifold admit a PL structure or not?',
  },
  {
    id: 31802, topic: 'michael-freedman', difficulty: 'sota',
    question: 'Freedman\'s proof uses "Casson handles" instead of Whitney disks. What is a Casson handle and why does it work topologically but not smoothly?',
    options: [
      'A Casson handle is an infinite tower of kinky handles: immersed disks whose self-intersections are resolved by attaching further immersed disks, iterated to infinity. Freedman proved that every Casson handle is homeomorphic to the standard open 2-handle $D^2 \\times \\mathbb{R}^2$, using a delicate "reimbedding" argument and decomposition space theory. However, Donaldson\'s invariants show that Casson handles carry exotic smooth structures — they\'re topologically standard but smoothly exotic.',
      'A Casson handle is a handle decomposition with only 0-handles and 2-handles, avoiding 1-handles entirely.',
      'A Casson handle is a regular neighborhood of a Casson-Gordon invariant surface in a 4-manifold.',
      'A Casson handle is a 4-dimensional cobordism between two 3-manifolds with matching Casson invariants.'
    ],
    correctIndex: 0,
    explanation: 'The Whitney trick (used to cancel handle pairs in dimensions $\\geq 5$) fails in dimension 4 because Whitney disks can have unavoidable self-intersections. Casson\'s idea was to resolve each self-intersection with a new disk, creating an infinite tower. Freedman\'s tour de force was showing this infinite construction converges topologically — using Bing shrinking and decomposition space theory from point-set topology.',
    realWorld: 'Casson handles are the technical core of 4-manifold topology. They explain why dimension 4 is the "boundary case" between high-dimensional surgery (which works smoothly) and low-dimensional rigidity.',
    hint: 'An infinite tower of self-intersecting disks that converges topologically — but stays exotic smoothly.',
  },
];
