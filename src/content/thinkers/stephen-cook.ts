// cook.ts
import type { Question } from '../types';

export const cookQuestions: Question[] = [
  {
    id: 67030,
    topic: 'stephen-cook',
    difficulty: 'easy',
    question:
      'Stephen Cook is famous for introducing NP-completeness. What was the central claim of the Cook–Levin theorem?',
    options: [
      'Boolean satisfiability (SAT) is NP-complete',
      'P = NP',
      'All NP problems are decidable in logspace',
      'Graph isomorphism is NP-complete'
    ],
    correctIndex: 0,
    explanation:
      'Cook–Levin showed SAT is NP-complete: every problem in NP can be reduced to SAT in polynomial time.',
    realWorld:
      'This launched complexity theory’s “NP-complete” landscape and underpins modern SAT solvers.',
    hint:
      'The first NP-complete problem.'
  },
  {
    id: 67031,
    topic: 'stephen-cook',
    difficulty: 'hard',
    question:
      'What does it mean for a language $L$ to be NP-complete?',
    options: [
      '$L\\in\\text{NP}$ and for every $A\\in\\text{NP}$, $A\\le_p L$ (polynomial-time many-one reduction)',
      '$L\\in\\text{P}$ and is the fastest in NP',
      '$L$ is undecidable',
      '$L\\in\\text{coNP}$ only'
    ],
    correctIndex: 0,
    explanation:
      'NP-complete languages are both verifiable in polynomial time and as hard as any NP problem under poly-time reductions.',
    realWorld:
      'If any NP-complete problem has a poly-time algorithm, then P=NP and thousands of problems become efficiently solvable.',
    hint:
      'In NP + NP-hard.'
  },
  {
    id: 67032,
    topic: 'stephen-cook',
    difficulty: 'hard',
    question:
      'In Cook–Levin, an NP computation is encoded as a SAT instance. What is the high-level object being encoded?',
    options: [
      'A polynomial-time-bounded Turing machine computation tableau (space–time grid of configurations)',
      'A prime factorization certificate',
      'A shortest-path tree in a graph',
      'A sorting network'
    ],
    correctIndex: 0,
    explanation:
      'The reduction builds a Boolean formula whose satisfying assignments correspond to valid accepting computation histories of an NP machine.',
    realWorld:
      'The “tableau method” is a template: encode local constraints that enforce global consistency.',
    hint:
      'Think “grid of machine states over time.”'
  },
  {
    id: 67033,
    topic: 'stephen-cook',
    difficulty: 'sota',
    question:
      'SAT is NP-complete, but many practical instances are solved quickly. Which explanation best matches modern understanding?',
    options: [
      'Worst-case hardness doesn’t prevent heuristics and structure-exploiting solvers (CDCL, restarts, clause learning) from being fast on many real instances',
      'NP-complete means every instance is always intractable',
      'SAT instances from industry are always tiny',
      'SAT solvers are polynomial-time in theory'
    ],
    correctIndex: 0,
    explanation:
      'NP-completeness is a worst-case statement. Real instances often have exploitable structure; CDCL solvers learn clauses and prune search dramatically.',
    realWorld:
      'SAT/SMT powers hardware verification, bounded model checking, scheduling, and synthesis.',
    hint:
      'Hard in worst case ≠ hard in typical structured cases.'
  },
  {
    id: 67034,
    topic: 'stephen-cook',
    difficulty: 'sota',
    question:
      'Cook’s framing emphasizes reductions. If $A\\le_p B$ and $B\\in P$, what follows?',
    options: [
      '$A\\in P$ (a poly-time algorithm for $B$ yields one for $A$ via the reduction)',
      '$B\\in NP$ implies $A$ is NP-complete',
      '$A$ is undecidable',
      '$A$ must be harder than $B$'
    ],
    correctIndex: 0,
    explanation:
      'A polynomial-time reduction converts instances of $A$ to instances of $B$. If $B$ is easy, $A$ becomes easy too.',
    realWorld:
      'Reductions are how we transfer algorithms (and hardness) across domains.',
    hint:
      'If you can solve $B$ fast, you can solve $A$ fast.'
  }
];