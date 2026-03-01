// chomsky.ts
import type { Question } from '../types';

export const chomskyQuestions: Question[] = [
  {
    id: 65050,
    topic: 'chomsky',
    difficulty: 'easy',
    question: 'Chomsky Hierarchy: Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ ?',
    options: [
      'Regular ⊂ CFL ⊂ Context-Sensitive ⊂ Recursively Enumerable',
      'P ⊂ NP ⊂ PSPACE ⊂ EXP',
      'NC¹ ⊂ NC² ⊂ NC',
      'LOGSPACE ⊂ P ⊂ NP'
    ],
    correctIndex: 0,
    explanation: 'T3(DFA/regex) ⊂ T2(PDA/CFG) ⊂ T1(LBA/CSG) ⊂ T0(TM).',
    realWorld: 'Compilers: lexer(T3)→parser(T2)→optimizer(T1).',
    hint: 'Nested automaton power: simple→complex.'
  },
  {
    id: 65051,
    topic: 'chomsky',
    difficulty: 'hard',
    question: 'Chomsky Normal Form transforms CFG to?',
    options: [
      'A→BC or A→a (|RHS|≤2, no ε/unit productions)',
      'Greibach Normal Form (left-linear)',
      'Strongly regular form',
      'Penttonen B-normal form'
    ],
    correctIndex: 0,
    explanation: 'CYK parsing O(n³); eliminates ε-rules, A→B, A→XYZ via substitution.',
    realWorld: 'Earley/CYK parser prerequisite.',
    hint: 'Every rule has exactly 2 symbols on right side.'
  },
  {
    id: 65052,
    topic: 'chomsky',
    difficulty: 'sota',
    question: 'Chomsky-Schützenberger: every CFL = ?',
    options: [
      'h(Dyck) ∩ Regular, h:homomorphism, D:balanced parentheses',
      'Pumping lemma intersection',
      'Deterministic CFL union',
      'CFL ∩ regular = regular'
    ],
    correctIndex: 0,
    explanation: 'Algebraic characterization: context-free = parenthesis languages + regex constraints.',
    realWorld: 'Proves deep structure of CFLs.',
    hint: 'Parentheses + regex generate any context-free language.'
  }
];
