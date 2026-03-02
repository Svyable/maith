import type { Question } from '../types';

export const lEJBrouwerQuestions: Question[] = [
  {
    id: 20650,
    topic: 'l-e-j-brouwer',
    difficulty: 'hard',
    question: 'Brouwer\'s Fixed-Point Theorem states that any continuous function $f: D^n \\to D^n$ (where $D^n$ is the closed unit disk) must have:',
    options: ['At least one point $x$ such that $f(x) = x$', 'Exactly $n$ fixed points', 'No fixed points if $n > 2$', 'A fixed point only if $f$ is differentiable'],
    correctIndex: 0,
    explanation: 'Every continuous self-map of a closed ball has a fixed point. No matter how you stir your coffee, at least one molecule returns to its original position.',
    realWorld: 'Nash\'s proof of equilibrium existence in game theory relies directly on Brouwer\'s theorem — it\'s the bedrock of mathematical economics.',
    hint: 'Stir a cup of coffee — one point always ends up where it started.',
  },
  {
    id: 20651,
    topic: 'l-e-j-brouwer',
    difficulty: 'sota',
    question: 'Brouwer founded Intuitionism, which rejects the law of excluded middle. In intuitionistic logic, proving $\\neg\\neg A$ does NOT imply:',
    options: ['$A$ (double negation elimination fails)', '$\\neg A$', '$A \\lor \\neg A$', '$\\bot$'],
    correctIndex: 0,
    explanation: 'In intuitionistic logic, $\\neg\\neg A$ means "assuming $A$ is impossible leads to contradiction," but this doesn\'t constructively produce a witness for $A$.',
    realWorld: 'Intuitionistic logic is the internal logic of topoi in category theory and the foundation of the Curry-Howard correspondence linking proofs to programs.',
    hint: 'Classical logic allows double negation elimination; intuitionism does not.',
  },
  {
    id: 20652,
    topic: 'l-e-j-brouwer',
    difficulty: 'easy',
    question: 'Brouwer\'s Fixed-Point Theorem can be visualized by stirring a cup of coffee. What does the theorem guarantee?',
    options: ['At least one point in the coffee returns to its original position', 'The coffee eventually stops moving', 'All points return to their original positions', 'The stirring creates a vortex'],
    correctIndex: 0,
    explanation: 'No matter how thoroughly you stir, topology guarantees at least one molecule ends up exactly where it started.',
    realWorld: 'This beautiful result has applications from economics (Nash equilibria) to weather prediction (there\'s always a point on Earth with zero wind).',
    hint: 'It\'s about what must stay the same, not what changes.',
  },
];
