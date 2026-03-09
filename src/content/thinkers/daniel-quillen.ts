import type { Question } from '../types';

export const danielQuillenQuestions: Question[] = [
  {
    id: 31900, topic: 'daniel-quillen', difficulty: 'easy',
    question: 'Daniel Quillen won the 1978 Fields Medal for his foundational work on which mathematical theory?',
    options: [
      'Higher algebraic K-theory — he defined the K-groups $K_n(R)$ for any ring $R$ using the "$+$-construction" on the classifying space: $K_n(R) = \\pi_n(BGL(R)^+)$ for $n \\geq 1$, extending Grothendieck\'s $K_0$ to all higher dimensions.',
      'Algebraic topology — proving that all exotic spheres bound parallelizable manifolds.',
      'Category theory — proving that every small category has a classifying space.',
      'Homological algebra — proving that every module has a projective resolution of length $\\leq n$ over an $n$-dimensional ring.'
    ],
    correctIndex: 0,
    explanation: 'Before Quillen, only $K_0$ (Grothendieck groups of projective modules) and $K_1$ (units modulo elementary matrices) were defined. Quillen gave two constructions: the $+$-construction (modify $BGL(R)$ to make $\\pi_1$ abelian) and the $Q$-construction (a categorical approach). Both give the same K-groups, which encode deep arithmetic and geometric information about $R$.',
    realWorld: 'Algebraic K-theory connects to number theory (Lichtenbaum conjecture relating $K_n(\\mathbb{Z})$ to zeta values), topology (surgery theory), and algebraic geometry (motivic cohomology via the Bloch-Lichtenbaum spectral sequence).',
    hint: 'He defined "higher" versions of the Grothendieck group — capturing subtle algebraic structure in all dimensions.',
    formulaLinks: ['k-theory'],
  },
  {
    id: 31901, topic: 'daniel-quillen', difficulty: 'hard',
    question: 'Quillen proved a famous conjecture of Serre. What does the Quillen-Suslin theorem state?',
    options: [
      'Every finitely generated projective module over a polynomial ring $k[x_1, \\ldots, x_n]$ (where $k$ is a field or PID) is free. Equivalently, every algebraic vector bundle on affine space $\\mathbb{A}^n_k$ is trivial: $$\\text{Proj}(k[x_1, \\ldots, x_n]) \\cong \\text{Free}(k[x_1, \\ldots, x_n])$$',
      'Every projective module over a Noetherian ring of Krull dimension $\\leq 2$ is free.',
      'Every coherent sheaf on $\\mathbb{P}^n$ is a direct sum of line bundles $\\mathcal{O}(d)$.',
      'Every finitely generated module over $\\mathbb{Z}[x]$ is a direct sum of cyclic modules.'
    ],
    correctIndex: 0,
    explanation: 'Serre conjectured in 1955 that projective modules over polynomial rings are free — the algebraic analog of the topological fact that vector bundles on $\\mathbb{R}^n$ are trivial. Quillen (1976) and Suslin (independently) proved this using an inductive patching argument: reduce from $n$ variables to $n-1$ by localizing at a monic polynomial.',
    realWorld: 'The Quillen-Suslin theorem is used in computational algebra (algorithms for computing free bases of modules), control theory (stabilization of multidimensional systems), and in the foundations of algebraic K-theory.',
    hint: 'Vector bundles on affine space are boring — they\'re always trivial. But proving it took 20 years.',
    formulaLinks: ['k-theory', 'projective-module'],
  },
  {
    id: 31902, topic: 'daniel-quillen', difficulty: 'sota',
    question: 'Quillen introduced model categories as an axiomatic framework for homotopy theory. What are the key components?',
    options: [
      'A model category is a complete and cocomplete category $\\mathcal{C}$ with three distinguished classes of morphisms — weak equivalences ($\\xrightarrow{\\sim}$), fibrations ($\\twoheadrightarrow$), and cofibrations ($\\hookrightarrow$) — satisfying: (1) 2-out-of-3 for weak equivalences, (2) retracts of distinguished morphisms are distinguished, (3) lifting: cofibrations have the LLP w.r.t. acyclic fibrations, (4) factorization: any $f$ factors as cofibration $\\circ$ acyclic fibration and as acyclic cofibration $\\circ$ fibration.',
      'A model category is a category enriched over simplicial sets, with a Quillen adjunction to $\\text{Top}$.',
      'A model category is an abelian category with enough injectives and projectives.',
      'A model category is a category with a faithful functor to $\\text{Set}$ preserving filtered colimits.'
    ],
    correctIndex: 0,
    explanation: 'Quillen\'s model categories axiomatize the structure needed to "do homotopy theory" in any mathematical context. The homotopy category $\\text{Ho}(\\mathcal{C})$ is obtained by formally inverting weak equivalences. Key examples: topological spaces (Quillen model structure), chain complexes (projective/injective model structures), simplicial sets (Kan-Quillen), and spectra (stable model structure).',
    realWorld: 'Model categories unify homotopy theory across mathematics: algebraic topology, homological algebra, algebraic geometry (motivic homotopy theory of Morel-Voevodsky), and higher category theory (Joyal\'s model structure for quasi-categories).',
    hint: 'Three classes of maps — weak equivalences, fibrations, cofibrations — with lifting and factorization axioms.',
    formulaLinks: ['model-category', 'homotopy-theory'],
  },
];
