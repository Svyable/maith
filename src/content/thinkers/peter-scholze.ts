import type { Question } from '../types';

export const peterScholzeQuestions: Question[] = [
  {
    id: 412601,
    topic: 'peter-scholze',
    difficulty: 'easy',
    question: 'Peter Scholze won the Fields Medal at age 30 for inventing "perfectoid spaces." What problem do they help solve?',
    options: [
      'They bridge algebra and geometry by connecting different number systems (p-adic and characteristic p) through a tilting equivalence',
      'They classify all possible shapes in 4-dimensional space',
      'They provide a formula for counting prime numbers exactly',
      'They solve differential equations on fractal surfaces',
    ],
    correctIndex: 0,
    explanation: 'Perfectoid spaces create a bridge between mixed characteristic (like the p-adic integers Zₚ) and characteristic p (like Fₚ((t))). This "tilting" lets you transfer results between fundamentally different mathematical worlds.',
    realWorld: 'While deeply theoretical, Scholze\'s work impacts cryptography (p-adic methods in lattice-based crypto), error-correcting codes, and the Langlands program which could unify vast areas of mathematics.',
    hint: 'The magic word is "tilting" — making two different number worlds look the same.',
  },
  {
    id: 412602,
    topic: 'peter-scholze',
    difficulty: 'hard',
    question: 'Scholze\'s "Liquid Tensor Experiment" was notable because:',
    options: [
      'It was the first major new mathematical result to be formally verified using a proof assistant (Lean), confirming a key theorem in condensed mathematics',
      'It used machine learning to discover new mathematical conjectures about tensor products',
      'It disproved a longstanding conjecture about tensor categories using computational search',
      'It showed that all mathematical proofs can be automatically translated to code',
    ],
    correctIndex: 0,
    explanation: 'In 2020, Scholze challenged the Lean community to formalize a key theorem about liquid real vector spaces. By 2022, it was verified — a milestone for computer-verified mathematics, proving that cutting-edge results can be machine-checked.',
    realWorld: 'Formal verification of math proofs is expanding into software verification (proving code correctness), hardware design (Intel uses formal methods), and AI safety (provably aligned systems).',
    hint: 'He challenged the proof assistant community — and they delivered.',
  },
  {
    id: 412603,
    topic: 'peter-scholze',
    difficulty: 'sota',
    question: 'Scholze and Clausen\'s "condensed mathematics" program aims to:',
    options: [
      'Replace topological spaces with "condensed sets" that make algebra and topology work together cleanly, fixing long-standing incompatibilities',
      'Compress all mathematical knowledge into a single axiomatic framework',
      'Reduce infinite-dimensional spaces to finite combinatorial objects',
      'Unify quantum mechanics and general relativity using categorical methods',
    ],
    correctIndex: 0,
    explanation: 'Traditional topological abelian groups don\'t form an abelian category (quotients behave badly). Condensed sets fix this by encoding topology through maps from profinite sets, making homological algebra work smoothly with topological structures.',
    realWorld: 'Condensed mathematics could provide new foundations for functional analysis (used in quantum mechanics), p-adic Hodge theory (relevant to cryptography), and potentially simplify vast areas of modern mathematics.',
    hint: 'The problem: topology and algebra don\'t play well together. Condensed math fixes the plumbing.',
  },
];
