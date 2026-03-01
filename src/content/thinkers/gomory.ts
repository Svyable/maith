// gomory.ts
import type { Question } from '../types';

export const gomoryQuestions: Question[] = [
  {
    id: 65250,
    topic: 'gomory',
    difficulty: 'easy',
    question: 'Gomory fractional cut from?',
    options: [
      'Basic LP solution row: ∑f_j x_j + ∑(1-f_j)s_j = f_0 (s_j≥0)',
      'Objective function alone',
      'Dual multipliers',
      'Primal simplex tableau'
    ],
    correctIndex: 0,
    explanation: 'Fractional part f_j = {a_j}, f_0={b_i} → valid Chvátal-Gomory cut.',
    realWorld: 'MIP solver workhorse.',
    hint: 'Fractional solution → integer inequality.'
  },
  {
    id: 65251,
    topic: 'gomory',
    difficulty: 'hard',
    question: 'Gomory mixed-integer cut?',
    options: [
      '∑(f_j/(1-f_j)) s_j + ∑f_j x_j ≥ f_0 (continuous x_j≥0, integer s_j)',
      'Pure integer fractional cut',
      'Rounding heuristic',
      'Mir cut'
    ],
    correctIndex: 0,
    explanation: 'Accounts for continuous variables; tighter than pure-integer version.',
    realWorld: 'CPLEX/Gurobi default generator.',
    hint: 'Mixed variables need special formula.'
  },
  {
    id: 65252,
    topic: 'gomory',
    difficulty: 'sota',
    question: 'Gomory-Chvátal closure?',
    options: [
      'All valid CG cuts: αᵀx ≥ ⌈αᵀb⌉ (α≥0, Aᵀα integer)',
      'Single LP relaxation',
      'Facet-defining cuts only',
      'Split closure'
    ],
    correctIndex: 0,
    explanation: 'Iterate rounding until no more valid CG cuts; polyhedral relaxation.',
    realWorld: 'Theoretical strength limit.',
    hint: 'All possible rounding inequalities.'
  },
  {
    id: 65253,
    topic: 'gomory',
    difficulty: 'hard',
    question: 'Gomory MRJ (mixed-row) cut?',
    options: [
      'Aggregated base + non-base: πᵀAx ≥ πᵀb rounded',
      'Tableau row only',
      'Dual information',
      'Objective cut'
    ],
    correctIndex: 0,
    explanation: 'Linear combination of rows → stronger cuts than single-row Gomory.',
    realWorld: 'Modern preprocessing.',
    hint: 'Multiple rows → better inequality.'
  },
  {
    id: 65254,
    topic: 'gomory',
    difficulty: 'sota',
    question: 'Gomory-Reinelt cuts strengthen?',
    options: [
      'Lift-and-project: base strengthened via disjunctive programming',
      'Simple coefficient rounding',
      'Sequential pairwise aggregation',
      'Intersection cuts'
    ],
    correctIndex: 0,
    explanation: 'LP + disjunction → provably stronger than basic CG.',
    realWorld: 'Research cutting planes.',
    hint: 'Disjunctive programming tightens base cuts.'
  }
];
