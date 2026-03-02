// emil-post.ts
import type { Question } from '../types';

export const emilPostQuestions: Question[] = [
  {
    id: 65000,
    topic: 'emil-post',
    difficulty: 'easy',
    question:
      'Emil Post independently established (around the same time as Turing) the undecidability of which fundamental decision problem? Formally, there is no total computable function deciding\n$$H(M,w)=\\begin{cases}1 & \\text{if TM } M \\text{ halts on } w \\\\ 0 & \\text{otherwise}\\end{cases}$$',
    options: [
      'The Halting Problem is undecidable',
      'Rice’s Theorem about non-trivial semantic properties',
      'Busy Beaver growth is unbounded',
      'Kolmogorov complexity is incomputable'
    ],
    correctIndex: 0,
    explanation:
      'Post and Turing both showed no algorithm can decide for every machine-input pair whether it halts. This establishes a hard limit on mechanical computation.',
    realWorld:
      'General-purpose termination analyzers cannot exist; static analysis tools must approximate.',
    hint:
      'No program can always predict whether another arbitrary program stops.'
  },
  {
    id: 65001,
    topic: 'emil-post',
    difficulty: 'hard',
    question:
      'The Post Correspondence Problem (PCP) asks: given domino pairs $(u_i,v_i)$ over an alphabet, does there exist a finite sequence of indices $i_1,\\dots,i_k$ such that\n$$u_{i_1}u_{i_2}\\cdots u_{i_k}=v_{i_1}v_{i_2}\\cdots v_{i_k}?$$\nWhat is known about PCP?',
    options: [
      'It is undecidable in general',
      'It is decidable in polynomial time',
      'It is NP-complete but decidable',
      'It reduces to regular language equivalence'
    ],
    correctIndex: 0,
    explanation:
      'PCP is one of the simplest undecidable problems. Even with small alphabets and bounded tile lengths, no algorithm decides all instances.',
    realWorld:
      'PCP is a standard source problem for reductions proving undecidability in formal language theory and tiling systems.',
    hint:
      'Matching top and bottom strings in some order cannot be decided algorithmically.'
  },
  {
    id: 65002,
    topic: 'emil-post',
    difficulty: 'hard',
    question:
      'Post canonical systems (also called Post production systems) consist of axioms and production rules of the form\n$$\\alpha \\to \\beta.$$\nWhat is their significance in computability theory?',
    options: [
      'They are string-rewriting systems capable of Turing-complete computation',
      'They are equivalent only to finite automata',
      'They generate only context-free languages',
      'They solve the halting problem constructively'
    ],
    correctIndex: 0,
    explanation:
      'Post showed that sufficiently powerful production systems can simulate arbitrary computation, establishing undecidability results via rewriting systems.',
    realWorld:
      'They are conceptual ancestors of formal grammars and rewriting systems used in programming languages and theorem provers.',
    hint:
      'Rewrite rules can encode arbitrary computation.'
  },
  {
    id: 65003,
    topic: 'emil-post',
    difficulty: 'hard',
    question:
      'Post introduced the notion of **creative sets** in recursion theory. A set $A\\subseteq\\mathbb{N}$ is creative if it is recursively enumerable (r.e.) and its complement contains an effectively constructible witness outside any r.e. subset. What does this imply?',
    options: [
      'Creative sets are r.e. but not decidable, and they are as hard as the halting set under many-one reductions',
      'Creative sets are finite and trivially decidable',
      'Creative sets are exactly the regular languages',
      'Creative sets are computable complements of decidable sets'
    ],
    correctIndex: 0,
    explanation:
      'Creative sets capture the maximal complexity among r.e. sets. The classic example is the halting set $K=\\{\\langle M,w\\rangle : M(w)\\downarrow\\}$, which is r.e. but undecidable.',
    realWorld:
      'This idea formalized degrees of unsolvability and influenced modern computability and complexity hierarchies.',
    hint:
      'Think: recursively enumerable but strictly beyond decidable.'
  },
  {
    id: 65004,
    topic: 'emil-post',
    difficulty: 'sota',
    question:
      'Post’s problem (1944) asked whether there exist recursively enumerable Turing degrees strictly between the decidable sets (degree $0$) and the halting problem degree ($0\'$). What is the correct statement?',
    options: [
      'Yes — intermediate r.e. degrees exist (Friedberg–Muchnik priority method)',
      'No — all r.e. sets are either decidable or equivalent to the halting problem',
      'The question was resolved negatively by Turing himself',
      'It is still open today'
    ],
    correctIndex: 0,
    explanation:
      'Post conjectured possible intermediate degrees. The Friedberg–Muchnik construction (1950s) proved such degrees exist using the priority method.',
    realWorld:
      'This result launched modern priority arguments and deepened understanding of the structure of the Turing degrees.',
    hint:
      'The answer required a delicate construction — the birth of priority methods.'
  }
];