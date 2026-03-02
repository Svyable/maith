import type { Question } from '../types';

export const perMartinLofQuestions: Question[] = [
  {
    id: 19701, topic: 'per-martin-lof', difficulty: 'easy',
    question: 'Per Martin-Löf\'s type theory is foundational for:',
    options: ['Constructive mathematics and proof assistants like Agda and Lean', 'Object-oriented programming', 'Relational databases', 'Graphics rendering'],
    correctIndex: 0,
    explanation: 'Martin-Löf\'s intuitionistic type theory (MLTT) provides a logical foundation where proofs ARE programs and propositions ARE types. It is the basis for modern proof assistants.',
    realWorld: 'Agda, Coq, and Lean are all built on ideas from Martin-Löf type theory.',
    hint: 'It connects logic and computation — proving a theorem is the same as writing a program.',
  },
  {
    id: 19702, topic: 'per-martin-lof', difficulty: 'hard',
    question: 'Dependent types in Martin-Löf type theory allow:',
    options: ['Types to depend on values — e.g., Vec(n) is a vector of exactly n elements', 'Only runtime type checking', 'Types to be ignored during compilation', 'Untyped lambda calculus'],
    correctIndex: 0,
    explanation: 'Dependent types let types reference values: $\\text{Vec}(A, n)$ is a list of exactly $n$ elements of type $A$. This lets the type checker enforce invariants that simpler type systems cannot express.',
    realWorld: 'Idris uses dependent types to guarantee at compile time that list indexing is always in bounds.',
    hint: 'The type can "depend" on a value — so Vec(3) is a different type from Vec(5).',
  },
  {
    id: 19703, topic: 'per-martin-lof', difficulty: 'sota',
    question: 'The univalence axiom (Voevodsky, building on Martin-Löf) states that:',
    options: ['Equivalent types are identical — isomorphism equals identity in Homotopy Type Theory', 'All types have the same cardinality', 'Types cannot be compared', 'Every type has a unique inhabitant'],
    correctIndex: 0,
    explanation: 'In HoTT (Homotopy Type Theory), the univalence axiom says $(A \\simeq B) \\simeq (A = B)$: if two types are equivalent (isomorphic), they ARE equal. This revolutionizes the foundations of mathematics.',
    realWorld: 'HoTT is being formalized in proof assistants and may provide new foundations for all of mathematics.',
    hint: 'If two mathematical structures are "the same" in every way that matters, they ARE the same.',
  },
];
