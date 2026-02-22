import type { Question } from '../types';

export const demaineQuestions: Question[] = [
  {
    id: 12901,
    topic: 'demaine',
    difficulty: 'easy',
    question: 'Erik Demaine became the youngest professor in MIT history at age 20. His research uniquely combines:',
    options: [
      'Computational geometry, origami mathematics, and algorithmic puzzle-solving',
      'Quantum computing and number theory',
      'Machine learning and natural language processing',
      'Cryptography and distributed systems',
    ],
    correctIndex: 0,
    explanation: 'Demaine proved foundational theorems about paper folding — including that any shape with straight sides can be cut from a single fold. He\'s also made breakthrough contributions to computational complexity and data structures.',
    realWorld: 'Origami mathematics is used in engineering: deployable solar panels in space (NASA\'s Starshade), medical stents that unfold inside arteries, and airbag folding patterns for cars.',
    hint: 'He proved theorems about folding paper — and it turned out to be serious mathematics.',
  },
  {
    id: 12902,
    topic: 'demaine',
    difficulty: 'hard',
    question: 'Demaine\'s "fold-and-cut theorem" proves something remarkable about flat origami. The theorem states:',
    options: [
      'Any shape made of straight line segments can be cut from a piece of paper using a single straight cut after proper folding',
      'Any convex polygon can be folded into any other convex polygon of equal area',
      'There exist shapes that require exponentially many folds to produce',
      'Folding a square into thirds is provably impossible with exact precision',
    ],
    correctIndex: 0,
    explanation: 'Given any pattern of straight-line cuts on paper, you can fold the paper flat so that a single straight cut produces exactly those cuts. The proof is constructive — it gives an algorithm. This seemingly playful result has deep connections to computational geometry.',
    realWorld: 'The fold-and-cut theorem\'s algorithms apply to sheet metal manufacturing (minimizing cuts), surgical planning (tissue folding), and flat-pack furniture design (efficient material use).',
    hint: 'One fold, one cut — but you can make any straight-edged shape. Even a star.',
  },
  {
    id: 12903,
    topic: 'demaine',
    difficulty: 'sota',
    question: 'Demaine proved that many classic puzzles are computationally hard. His result that "sliding block puzzles are PSPACE-complete" means:',
    options: [
      'Determining whether a configuration can be solved requires memory proportional to the puzzle size, and no shortcut exists unless PSPACE = P',
      'The puzzles can be solved in polynomial time using dynamic programming',
      'Quantum computers could solve them exponentially faster than classical ones',
      'The puzzles are undecidable — no algorithm can solve all instances',
    ],
    correctIndex: 0,
    explanation: 'PSPACE-complete problems require polynomial space but potentially exponential time. Sliding block puzzles can encode arbitrary PSPACE computations, meaning the sequence of moves can be exponentially long and there\'s no shortcut to find it.',
    realWorld: 'PSPACE-completeness results apply to AI game-playing (Go, chess with generalized boards), robot motion planning (warehouse robots), and verification of hardware circuits.',
    hint: 'PSPACE is between NP and undecidable — hard, but still decidable.',
  },
];
