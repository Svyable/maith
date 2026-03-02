// dantzig.ts
import type { Question } from '../types';

export const georgeDantzigQuestions: Question[] = [
  {
    id: 65150,
    topic: 'george-dantzig',
    difficulty: 'easy',
    question: 'Dantzig invented what optimization algorithm?',
    options: [
      'Simplex method: max cᵀx s.t. Ax≤b, x≥0 via vertex pivoting',
      'Interior-point ellipsoid method',
      'Cutting plane algorithm (Gomory)',
      'Branch-and-bound for MILP'
    ],
    correctIndex: 0,
    explanation: 'Navigates LP polytope vertices, pivoting basic feasible solutions until optimality.',
    realWorld: '$10^{12}$ annual economic value from logistics/supply chain.',
    hint: 'Walks corners of feasible region improving objective.'
  },
  {
    id: 65151,
    topic: 'george-dantzig',
    difficulty: 'hard',
    question: 'Simplex worst-case complexity?',
    options: [
      'Exponential: Klee-Minty hypercube O(2^n) pivots',
      'Strongly polynomial O(n^3)',
      'Weakly polynomial O(n^{3.5} L)',
      'Sub-exponential O(exp(√n L))'
    ],
    correctIndex: 0,
    explanation: 'Degenerate pivot cycles visit 2^n vertices despite m<<n constraints.',
    realWorld: 'Smoothed analysis proves polynomial average case.',
    hint: 'Geometric nightmare case visits every corner.'
  },
  {
    id: 65152,
    topic: 'george-dantzig',
    difficulty: 'sota',
    question: 'Dantzig\'s legendary feat was...?',
    options: [
      'Solving 2 open proofs mistaking them for homework',
      'Published open optimization conjectures in the school newspaper',
      'Originated simplex from a conversaton in the locker room',
      'Invented revised simplex on-the-spot during recesss'
    ],
    correctIndex: 0,
    explanation: 'Slept through class → solved 2x+y=4 etc. as "unsolved problems" → discovered simplex.',
    realWorld: 'Most famous academic misunderstanding origin story.',
    hint: 'Good thing the dog did not eat his homework.'
  },
  {
    id: 65153,
    topic: 'george-dantzig',
    difficulty: 'hard',
    question: 'Simplex tableau pivot operation?',
    options: [
      'Gaussian elimination on basic columns: entering/leaving via ratio test',
      'Gradient projection to boundary',
      'Lagrange multiplier update',
      'Dual steepest ascent'
    ],
    correctIndex: 0,
    explanation: 'Select column max reduced cost → row min {b_i/a_{ie}} → pivot eliminates variable.',
    realWorld: 'Revised simplex uses matrix factorization.',
    hint: 'Row/column selection + elimination step.'
  },
  {
    id: 65154,
    topic: 'george-dantzig',
    difficulty: 'sota',
    question: 'Dantzig-Wolfe decomposition splits?',
    options: [
      'Master LP + subproblem LPs linked by convex combination λ: x=∑λ_j x^j',
      'Benders cuts from dual multipliers',
      'Lagrangian relaxation bounds',
      'Column/row generation'
    ],
    correctIndex: 0,
    explanation: 'Convex hull formulation: extreme points from subproblems → master prices them.',
    realWorld: 'Solves huge network/structure-exploitable LPs.',
    hint: 'Subproblems generate columns for restricted master.'
  },
  {
    id: 65155,
    topic: 'george-dantzig',
    difficulty: 'hard',
    question: 'Simplex degeneracy resolution?',
    options: [
      'Perturbation: ε>0 artificial objective min ∑ε_i x_i',
      'Lexicographic rule on ratios',
      'Bland\'s anti-cycling (smallest index)',
      'Lexico-min basis'
    ],
    correctIndex: 0,
    explanation: 'ε→0⁺ avoids zero ratios; ensures finite pivots.',
    realWorld: 'Prevents infinite loops on degenerate bases.',
    hint: 'Tiny perturbations break zero ratio ties.'
  },
  {
    id: 65156,
    topic: 'george-dantzig',
    difficulty: 'sota',
    question: 'Dantzig selector (statistics)?',
    options: [
      'ℓ1-penalized LS: min||y-Xβ||₂₂ s.t. ||Xᵀ(y-Xβ)||₁≤λn',
      'Lasso ridge regression',
      'Stepwise selection',
      'Bayesian variable selection'
    ],
    correctIndex: 0,
    explanation: 'Sparse recovery via constraint on correlation residuals.',
    realWorld: 'High-dimensional regression (p>>n).',
    hint: 'Constrains prediction error correlations.'
  },
  {
    id: 65157,
    topic: 'george-dantzig',
    difficulty: 'hard',
    question: 'Revised simplex vs full tableau?',
    options: [
      'Matrix factorizations: A=BC, only update active constraints',
      'Sparse LU factorization',
      'Full tableau exponential storage',
      'Dual simplex only'
    ],
    correctIndex: 0,
    explanation: 'B,F^{-1} updated per pivot; O(m²) vs O(m³n) storage.',
    realWorld: 'Industrial solvers (CPLEX/Gurobi).',
    hint: 'Factorizations beat full matrix.'
  },
  {
    id: 65158,
    topic: 'george-dantzig',
    difficulty: 'sota',
    question: 'Farkas lemma (Dantzig duality)?',
    options: [
      'Either Ax≤b, x≥0 feasible OR ∃y≥0: Aᵀy=c, bᵀy<0 (infeasible)',
      'Strong duality: primal opt = dual opt',
      'Complementary slackness',
      'KKT conditions'
    ],
    correctIndex: 0,
    explanation: 'Alternative theorem: proves LP duality/infeasibility certificates.',
    realWorld: 'Cutting plane proofs, constraint qualification.',
    hint: 'Feasible OR certificate of infeasibility.'
  },
  {
    id: 65159,
    topic: 'george-dantzig',
    difficulty: 'hard',
    question: 'Simplex Phase I artificial variables?',
    options: [
      'min ∑a_i s.t. Ax + Ia = b, x,a≥0 (find initial basis)',
      'Big-M penalty method',
      'Two-phase with lexicographic',
      'Homogeneous self-dual embedding'
    ],
    correctIndex: 0,
    explanation: 'Drive artificials to zero; optimal phase I → phase II original objective.',
    realWorld: 'Handles infeasible starting points.',
    hint: 'Extra variables find any feasible solution first.'
  }
];
