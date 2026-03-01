// benders.ts
import type { Question } from '../types';

export const bendersQuestions: Question[] = [
  {
    id: 65200,
    topic: 'benders',
    difficulty: 'easy',
    question: 'Benders decomposition separates?',
    options: [
      'Master ILP + subproblem LP: x=∑λ_j x^j convex combination',
      'Primal block decomposition',
      'Dantzig-Wolfe column generation',
      'Lagrangian dual bounds'
    ],
    correctIndex: 0,
    explanation: 'Fix integer x in master → solve continuous y subproblems → cuts added to master.',
    realWorld: 'Stochastic programming, unit commitment.',
    hint: 'Integer master + continuous subproblems.'
  },
  {
    id: 65201,
    topic: 'benders',
    difficulty: 'hard',
    question: 'Benders optimality cut from?',
    options: [
      'Subproblem dual multipliers π: η ≥ πᵀ(A₂x - b₂)',
      'Primal feasible cuts only',
      'Lagrange multipliers',
      'KKT stationarity'
    ],
    correctIndex: 0,
    explanation: 'Dual optimal π prices fixed x; linear underestimator of recourse function Q(x).',
    realWorld: 'Tightens master approximation.',
    hint: 'Dual prices create supporting hyperplane.'
  },
  {
    id: 65202,
    topic: 'benders',
    difficulty: 'sota',
    question: 'Benders feasibility cut when subproblem infeasible?',
    options: [
      '∃u≥0: uᵀ(A₂x - b₂) ≤ -1 (Farkas certificate)',
      'Big-M constraints',
      'Projection cuts',
      'Valid inequalities'
    ],
    correctIndex: 0,
    explanation: 'Ray u proves Ax > b₂ infeasible; excludes x causing primal unbounded.',
    realWorld: 'Handles infeasible recourse actions.',
    hint: 'Certificate proving no continuous solution exists.'
  },
  {
    id: 65203,
    topic: 'benders',
    difficulty: 'hard',
    question: 'Benders accelerates with?',
    options: [
      'Core-point method: aggregate cuts from multiple x^k',
      'Simple cut pooling',
      * 'Frank-Wolfe subproblem solving',
      'Column-and-cut generation'
    ],
    correctIndex: 0,
    explanation: 'Multiple nearby x generate stronger aggregated cuts: ∑λ_k π_kᵀ(Ax-b).',
    realWorld: 'Modern MIP solvers hybrid approach.',
    hint: 'Multiple points → stronger cut bundle.'
  },
  {
    id: 65204,
    topic: 'benders',
    difficulty: 'sota',
    question: 'Logic-based Benders differs by?',
    options: [
      'Subproblem satisfiability (no LP dual multipliers needed)',
      'Integer subproblems only',
      'Mixed-integer master only',
      'Stochastic programming only'
    ],
    correctIndex: 0,
    explanation: 'Constraint programming subproblems → nogood/no-solution cuts.',
    realWorld: 'Hybrid MIP/CP optimization.',
    hint: 'SAT solver subproblems, not LP.'
  }
];
