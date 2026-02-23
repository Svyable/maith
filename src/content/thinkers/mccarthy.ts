import type { Question } from '../types';

export const mccarthyQuestions: Question[] = [
  {
    id: 21001, topic: 'mccarthy', difficulty: 'easy',
    question: 'John McCarthy is credited with:',
    options: ['Coining the term "Artificial Intelligence" and creating the Lisp programming language', 'Inventing the World Wide Web', 'Creating the C programming language', 'Building the first neural network'],
    correctIndex: 0,
    explanation: 'McCarthy organized the 1956 Dartmouth Conference where AI was named as a field. He created Lisp (1958) — the first language with garbage collection, recursion as a primary construct, and programs-as-data (homoiconicity).',
    realWorld: 'Lisp\'s ideas — garbage collection, dynamic typing, REPL, macros — influenced Python, JavaScript, Ruby, and Clojure. Emacs is written in Emacs Lisp.',
    hint: 'He named the field AND built one of its most influential tools — a language where code and data are the same thing.',
  },
  {
    id: 21002, topic: 'mccarthy', difficulty: 'hard',
    question: 'McCarthy\'s "situation calculus" formalized:',
    options: ['Reasoning about actions and change — how the world transforms when an agent acts', 'Statistical pattern recognition', 'Gradient descent optimization', 'Neural network architectures'],
    correctIndex: 0,
    explanation: 'Situation calculus uses first-order logic to represent states (situations), actions, and their effects. It addresses the frame problem: specifying what does NOT change when an action occurs.',
    realWorld: 'Robot planning systems (STRIPS, PDDL) descend from McCarthy\'s situation calculus — autonomous agents reason about which actions achieve goals.',
    hint: 'If a robot moves a block, what else changes? What stays the same? Formalizing this is harder than it sounds.',
  },
  {
    id: 21003, topic: 'mccarthy', difficulty: 'sota',
    question: 'McCarthy\'s concept of "programs with common sense" (1959) anticipated:',
    options: ['Knowledge representation and reasoning systems that combine formal logic with world knowledge — precursors to modern LLM + reasoning hybrids', 'Convolutional neural networks', 'MapReduce for distributed computing', 'Blockchain consensus mechanisms'],
    correctIndex: 0,
    explanation: 'McCarthy envisioned AI systems that could reason about the world using represented knowledge, draw conclusions, and explain their reasoning. Modern neuro-symbolic AI and LLM + tool-use systems are finally approaching this vision.',
    realWorld: 'GPT-4 + code interpreter, LLM agents with tool use, and retrieval-augmented generation (RAG) are modern incarnations of McCarthy\'s 1959 vision of AI with common sense.',
    hint: 'He wanted AI that could reason, not just pattern-match — combining knowledge with logic.',
  },
];
