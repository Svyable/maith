// wolfe.ts
import type { Question } from '../types';

export const wolfeQuestions: Question[] = [
  {
    id: 65350,
    topic: 'wolfe',
    difficulty: 'easy',
    question: 'Dantzig-Wolfe decomposes block-angular?',
    options: [
      'Master RPMP + subproblem column generators: x=∑λ_j x^j',
      'Benders row generation',
      'Lagrangian block relaxation',
      'ADMM operator splitting'
    ],
    correctIndex: 0,
    explanation: 'Restricted master + subproblems generate extreme points/convex combos.',
    realWorld: 'Unit commitment, network design.',
    hint: 'Columns from subproblems → master pricing.'
  },
  {
    id: 65351,
    topic: 'wolfe',
    difficulty: 'hard',
    question: 'DW master problem solves?',
    options: [
      'min c̄ᵀλ s.t. A₁∑λx^j = b₁, ∑λ=1, λ≥0 (convex hull pricing)',
      'Integer master only',
      'Dual subproblem multipliers',
      'Cut generation'
    ],
    correctIndex: 0,
    explanation: 'Dual prices π price subproblem columns (reduced cost <0 → generate).',
    realWorld: 'Aggregate + disaggregate forms.',
    hint: 'Convex combination of subproblem solutions.'
  },
  {
    id: 65352,
    topic: 'wolfe',
    difficulty: 'sota',
    question:'Subproblem pricing solved by?',
    options: [
      'max (c_j - πᵀA_j)x^j s.t. x^j ∈ X_j (extreme point search)',
      'LP relaxation only',
      'MIP subproblems',
      'Heuristic column generation'
    ],
    correctIndex: 0,
    explanation: 'Negative reduced cost → column enters basis.',
    realWorld: 'VRP, cutting stock.',
    hint: 'Subproblem optimizes given master duals.'
  }
];
