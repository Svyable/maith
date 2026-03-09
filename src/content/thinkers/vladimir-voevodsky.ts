import type { Question } from '../types';

export const vladimirVoevodskyQuestions: Question[] = [
  {
    id: 31740, topic: 'vladimir-voevodsky', difficulty: 'easy',
    question: 'Vladimir Voevodsky won the 2002 Fields Medal for his work in algebraic geometry. What was his central achievement?',
    options: [
      'He developed motivic cohomology and proved the Milnor conjecture: the norm residue homomorphism $K^M_n(F)/2 \\to H^n(F, \\mathbb{Z}/2)$ from Milnor K-theory to Galois cohomology is an isomorphism for all fields $F$ and all $n$.',
      'He proved the Hodge conjecture for abelian varieties of dimension $\\leq 4$.',
      'He classified all finite simple groups using cohomological methods.',
      'He proved the Baum-Connes conjecture for all discrete groups using KK-theory.'
    ],
    correctIndex: 0,
    explanation: 'The Milnor conjecture connects two fundamental invariants of a field: the algebraic K-theory (measuring "higher units") and the Galois cohomology (measuring symmetries of field extensions). Voevodsky\'s proof required building an entirely new cohomology theory for algebraic varieties — motivic cohomology — analogous to singular cohomology in topology.',
    realWorld: 'Motivic cohomology provides a universal framework unifying many cohomology theories in algebraic geometry (étale, de Rham, crystalline). It\'s central to the Langlands program and arithmetic geometry.',
    hint: 'He connected algebraic K-theory to Galois cohomology — by building a new kind of cohomology for varieties.',
    formulaLinks: ['k-theory'],
  },
  {
    id: 31741, topic: 'vladimir-voevodsky', difficulty: 'hard',
    question: 'Voevodsky later proved the more general Bloch-Kato conjecture. What does it state?',
    options: [
      'For any field $F$, prime $\\ell$, and integer $n \\geq 0$, the norm residue homomorphism $$K^M_n(F)/\\ell \\xrightarrow{\\sim} H^n_{\\text{ét}}(F, \\mu_\\ell^{\\otimes n})$$ is an isomorphism, where $\\mu_\\ell$ is the group of $\\ell$-th roots of unity. This generalizes the Milnor conjecture from $\\ell = 2$ to all primes.',
      'The higher algebraic K-groups of a number field $F$ satisfy $K_n(\\mathcal{O}_F) \\otimes \\mathbb{Q} \\cong \\mathbb{Q}^{r_1 + r_2}$ for all odd $n > 1$.',
      'The motivic cohomology groups $H^{p,q}(X, \\mathbb{Z})$ vanish for $q > p$ for all smooth varieties $X$.',
      'The Chow groups $\\text{CH}^p(X)$ are finitely generated for all smooth projective varieties over number fields.'
    ],
    correctIndex: 0,
    explanation: 'The Bloch-Kato conjecture (now Voevodsky\'s theorem) is one of the deepest results connecting algebra, geometry, and number theory. The proof uses motivic cohomology, the motivic Steenrod algebra, and a sophisticated argument involving "splitting varieties" — algebraic varieties that force cohomological splitting.',
    realWorld: 'This theorem is a cornerstone of modern arithmetic geometry. It implies the Merkurjev-Suslin theorem, controls Brauer groups of fields, and has applications to quadratic form theory and central simple algebras.',
    hint: 'K-theory mod $\\ell$ equals Galois cohomology — for all primes $\\ell$, not just 2.',
    formulaLinks: ['k-theory', 'galois-cohomology'],
  },
  {
    id: 31742, topic: 'vladimir-voevodsky', difficulty: 'sota',
    question: 'After his Fields Medal work, Voevodsky devoted his career to univalent foundations and homotopy type theory (HoTT). What is the univalence axiom?',
    options: [
      'In homotopy type theory, the univalence axiom states that the canonical map $$\\text{Id}_\\mathcal{U}(A, B) \\to \\text{Equiv}(A, B)$$ from identity of types to equivalence of types is itself an equivalence. In other words: equivalent types are identical. This makes type theory into a foundation where isomorphic mathematical objects are literally the same.',
      'Every type in the universe $\\mathcal{U}$ has a unique normal form up to $\\beta\\eta$-reduction.',
      'The type of natural numbers $\\mathbb{N}$ is the initial algebra of the functor $F(X) = 1 + X$.',
      'Every proposition (type with at most one inhabitant) is decidable: $P + \\neg P$ holds for all $P$.'
    ],
    correctIndex: 0,
    explanation: 'Voevodsky proposed that mathematics should be founded on homotopy type theory, where types are spaces, terms are points, and equalities are paths. The univalence axiom says that the identity type $A =_{\\mathcal{U}} B$ is equivalent to the type of equivalences $A \\simeq B$. This builds "isomorphism invariance" directly into the foundations, solving the problem of distinguishing isomorphic-but-not-equal structures.',
    realWorld: 'HoTT and univalent foundations are implemented in proof assistants (Agda, Coq, Lean). They enable machine-verified proofs that automatically respect isomorphisms — a major advance for formal verification.',
    hint: 'If two types are equivalent, they\'re identical — equivalence IS identity in this foundation.',
    formulaLinks: ['type-theory'],
  },
];
