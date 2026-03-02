// newell.ts
import type { Question } from '../types';

export const newellQuestions: Question[] = [
  {
    id: 65100,
    topic: 'allen-newell',
    difficulty: 'easy',
    question:
      'Newell & Simon’s 1956-era breakthrough is often cited as one of the first major AI programs. Which program was it, and what kind of task did it perform?',
    options: [
      'Logic Theorist — automated theorem proving (e.g., proving many theorems from *Principia Mathematica*)',
      'ELIZA — pattern-matching psychotherapy dialogue',
      'Perceptron — a single-layer neural classifier trained on labeled examples',
      'Minimax chess — brute-force game tree search with perfect evaluation'
    ],
    correctIndex: 0,
    explanation:
      'The Logic Theorist used heuristic search to discover proofs, demonstrating that symbolic programs could perform high-level reasoning tasks.',
    realWorld:
      'It helped launch AI as a research field and established heuristic search as a core method for problem solving.',
    hint:
      'It proved math theorems automatically.'
  },
  {
    id: 65101,
    topic: 'allen-newell',
    difficulty: 'easy',
    question:
      'Newell & Simon’s “Physical Symbol System Hypothesis” (PSSH) claims, roughly, that:',
    options: [
      'A physical symbol system has the necessary and sufficient means for general intelligent action',
      'Only neural networks can produce intelligence',
      'Intelligence requires quantum effects in the brain',
      'Symbols are irrelevant; only reinforcement learning matters'
    ],
    correctIndex: 0,
    explanation:
      'PSSH is the classic symbolic-AI thesis: manipulating structured symbols according to rules can, in principle, realize general intelligence.',
    realWorld:
      'It influenced decades of expert systems, automated planning, theorem proving, and cognitive architectures.',
    hint:
      '“Symbols + rules” is the proposed foundation of intelligence.'
  },
  {
    id: 65102,
    topic: 'allen-newell',
    difficulty: 'hard',
    question:
      'The General Problem Solver (GPS) is associated with **means–ends analysis**. What is the core idea of means–ends analysis in state-space terms?',
    options: [
      'Choose an operator that reduces the “difference” between current state $s$ and goal $g$, then create subgoals to remove obstacles to applying that operator',
      'Always expand the node with smallest $f(n)=g(n)+h(n)$ (A* search)',
      'Randomly mutate candidate solutions and select the best (genetic algorithm)',
      'Compute gradients of a loss function and update weights (backpropagation)'
    ],
    correctIndex: 0,
    explanation:
      'GPS compares $s$ to $g$, picks a promising operator to reduce the gap, and if the operator’s preconditions are not met, it sets those preconditions as subgoals—recursively.',
    realWorld:
      'This shaped early automated planning ideas and influenced later planner designs that reason explicitly about operators and preconditions.',
    hint:
      'Reduce the gap → if you can’t apply the move, make its preconditions into subgoals.'
  },
  {
    id: 65103,
    topic: 'allen-newell',
    difficulty: 'hard',
    question:
      'Newell’s work on problem solving emphasized **heuristics**. Which statement best captures why heuristics matter in AI search?',
    options: [
      'They reduce combinatorial explosion by guiding search toward promising regions instead of enumerating all possibilities',
      'They guarantee an optimal solution for any problem in polynomial time',
      'They eliminate the need to represent goals explicitly',
      'They replace search entirely with closed-form formulas'
    ],
    correctIndex: 0,
    explanation:
      'Many problems have exponential search spaces. Heuristics don’t magically make problems easy, but they make search feasible by focusing effort.',
    realWorld:
      'Everything from route planning to theorem proving depends on heuristics to avoid exploring astronomically many paths.',
    hint:
      'Heuristics are “shortcuts” for where to look next.'
  },
  {
    id: 65104,
    topic: 'allen-newell',
    difficulty: 'sota',
    question:
      'SOAR (associated with Newell) is a cognitive architecture with a distinctive learning mechanism. What is the core “SOAR loop” and how does it learn?',
    options: [
      'Problem-space search with operators; when an impasse occurs, it creates a subgoal and learns by **chunking** the solution into a new production rule',
      'End-to-end neural perception-action; learning only by gradient descent',
      'Bayesian network inference; learning only by posterior updates',
      'Q-learning with temporal-difference updates on a value function'
    ],
    correctIndex: 0,
    explanation:
      'SOAR cycles through proposing/selecting/applying operators. When it hits an impasse, it reasons in a subgoal; once resolved, it “chunks” that reasoning into a reusable rule.',
    realWorld:
      'SOAR has been used in cognitive modeling and agent systems where explicit reasoning + learned rules are useful.',
    hint:
      'Learning = turning a solved impasse into a new rule (“chunk”).'
  }
];