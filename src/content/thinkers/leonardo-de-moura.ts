import type { Question } from '../types';

export const leonardoDeMouraQuestions: Question[] = [
  {
    id: 81201, topic: 'leonardo-de-moura', difficulty: 'easy',
    question: 'Leonardo de Moura created the Lean theorem prover. What is a theorem prover used for?',
    options: [
      'Writing mathematical proofs that are verified by a computer — guaranteeing correctness',
      'Generating random math problems for students',
      'Compiling Python code faster',
      'Designing graphical user interfaces',
    ],
    correctIndex: 0,
    explanation: 'Lean is an interactive theorem prover (ITP) where mathematicians write formal proofs that the computer checks step-by-step. If the proof compiles, it is logically valid — no human error can slip through.',
    realWorld: 'The Mathlib library in Lean 4 has formalized over 150,000 theorems, creating a growing digital library of verified mathematics.',
    hint: 'Think of it as a compiler for math — if your proof "compiles," it\'s correct.',
  },
  {
    id: 81202, topic: 'leonardo-de-moura', difficulty: 'hard',
    question: 'Lean is based on the Calculus of Inductive Constructions (CIC). What is the key idea of "propositions as types"?',
    options: [
      'Mathematical propositions correspond to types, and proofs correspond to programs — proving a theorem is equivalent to constructing a term of the right type',
      'All mathematical objects must be finite',
      'Propositions can only be true or false, never unknown',
      'Types are irrelevant to logical reasoning',
    ],
    correctIndex: 0,
    explanation: 'The Curry-Howard correspondence states that types = propositions and programs = proofs. To prove "A implies B" in Lean, you write a function of type A → B. If the function type-checks, the proof is valid.',
    realWorld: 'This deep connection means Lean is simultaneously a programming language and a proof system — you can write verified algorithms where correctness is guaranteed by the type checker.',
    hint: 'A proof of "A → B" is literally a function that takes evidence of A and produces evidence of B.',
  },
  {
    id: 81203, topic: 'leonardo-de-moura', difficulty: 'hard',
    question: 'Before Lean, de Moura created which influential automated reasoning tool at Microsoft Research?',
    options: [
      'Z3 — an SMT (Satisfiability Modulo Theories) solver used in program verification',
      'TensorFlow — a machine learning framework',
      'VSCode — a code editor',
      'TypeScript — a typed JavaScript',
    ],
    correctIndex: 0,
    explanation: 'Z3 is one of the most widely used SMT solvers in the world. It automatically decides the satisfiability of logical formulas over theories like arithmetic, arrays, and bit-vectors.',
    realWorld: 'Z3 powers verification in AWS (proving cloud configurations are secure), Rust\'s borrow checker research, and thousands of academic verification projects.',
    hint: 'This tool automatically answers "is this logical formula satisfiable?" — used to verify software correctness.',
  },
  {
    id: 81204, topic: 'leonardo-de-moura', difficulty: 'sota',
    question: 'Lean 4\'s "tactic mode" allows proofs to be constructed by:',
    options: [
      'Issuing high-level commands (tactics) that manipulate the proof state, automatically filling in low-level details',
      'Writing proofs in natural English that Lean translates',
      'Drawing proof diagrams that Lean interprets',
      'Running Monte Carlo simulations to verify theorems probabilistically',
    ],
    correctIndex: 0,
    explanation: 'Tactics like `simp`, `ring`, `omega`, and `apply` transform proof goals step by step. The `simp` tactic alone can automatically prove many lemmas by simplification. Tactics separate the *strategy* of a proof from its *details*.',
    realWorld: 'AI systems like AlphaProof (DeepMind) use Lean as their verification backend — the AI suggests tactics, and Lean guarantees correctness. This is the frontier of AI-assisted mathematics.',
    hint: 'Instead of writing the full proof term, you issue commands that tell Lean how to build it.',
  },
];
