// farkas.ts
import type { Question } from '../types';

export const farkasQuestions: Question[] = [
  {
    id: 65300,
    topic: 'farkas',
    difficulty: 'easy',
    question: 'Farkas Lemma: either Ax≤b feasible OR?',
    options: [
      '∃y≥0: Aᵀy = c, bᵀy < 0ᵀc (infeasibility certificate)',
      'Optimal solution exists',
      'Dual unbounded',
      'Strong duality holds'
    ],
    correctIndex: 0,
    explanation: 'No solution → separating hyperplane proves infeasibility.',
    realWorld: 'LP infeasibility certificates.',
    hint: 'Certificate proving no x satisfies inequalities.'
  },
  {
    id: 65301,
    topic: 'farkas',
    difficulty: 'hard',
    question: 'Farkas for polyhedra: P=∅ iff?',
    options: [
      '∃y≥0: Aᵀy=0, bᵟy<0 (recession cone contradiction)',
      'Vertices empty',
      'Extreme rays unbounded',
      'Rank deficiency'
    ],
    correctIndex: 0,
    explanation: 'Homogeneous Farkas: nontrivial nonnegative combination → contradiction.',
    realWorld: 'Feasibility LP checking.',
    hint: 'Nonnegative combo violates right-hand side.'
  },
  {
    id: 65302,
    topic: 'farkas',
    difficulty: 'sota',
    question: 'Tucker homogeneous Farkas variants?',
    options: [
      '4 alternative systems for LP feasibility/optimality',
      'Single primal infeasibility',
      'Dual unboundedness only',
      'Strong duality failure'
    ],
    correctIndex: 0,
    explanation: 'Complete characterization of LP status via homogeneous systems.',
    realWorld: 'Interior point infeasible-start methods.',
    hint: 'Four cases cover all LP outcomes.'
  },
  {
    id: 65303,
    topic: 'farkas',
    difficulty: 'hard',
    question: 'Strictly feasible Farkas?',
    options: [
      'Ax < b feasible OR ∃y≥0: Aᵀy=c, bᵀy ≤ cᵀx*',
      'Slater condition for convex QCQP',
      'Qualification for KKT',
      'Dual attainment'
    ],
    correctIndex: 0,
    explanation: 'Strict inequality version for interior point methods.',
    realWorld: 'Convex optimization constraint qualification.',
    hint: 'Strict inequalities need adjusted certificate.'
  },
  {
    id: 65304,
    topic: 'farkas',
    difficulty: 'sota',
    question: 'Motzkin transposition theorem generalizes?',
    options: [
      'Farkas to nonlinear inequalities f_i(x)≤0',
      'Polyhedral combinatorics',
      * 'Minimax theorem',
      'Separation theorem'
    ],
    correctIndex: 0,
    explanation: 'Nonlinear Farkas: separating hyperplane for convex sets.',
    realWorld: 'Nonconvex optimization certificates.',
    hint: 'Farkas for curved constraints.'
  }
];
