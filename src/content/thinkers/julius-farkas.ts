// farkas.ts
import type { Question } from '../types';

export const farkasQuestions: Question[] = [
  {
    id: 65300,
    topic: 'julius-farkas',
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
    topic: 'julius-farkas',
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
    topic: 'julius-farkas',
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
    topic: 'julius-farkas',
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
    topic: 'julius-farkas',
    difficulty: 'sota',
    question: 'Motzkin transposition theorem generalizes?',
    options: [
      'Farkas to nonlinear inequalities f_i(x)≤0',
      'Polyhedral combinatorics',
      'Minimax theorem',
      'Separation theorem'
    ],
    correctIndex: 0,
    explanation: 'Nonlinear Farkas: separating hyperplane for convex sets.',
    realWorld: 'Nonconvex optimization certificates.',
    hint: 'Farkas for curved constraints.'
  },
  {
    id: 65305,
    topic: 'julius-farkas',
    difficulty: 'easy',
    question:
      'One common statement of Farkas’ Lemma says: exactly one of the following systems has a solution.\n\n(1) $Ax\\le b$.\n\nIf (1) is infeasible, what is the correct “certificate of infeasibility” alternative?',
    options: [
      'There exists $y\\ge 0$ such that $A^\\top y=0$ and $b^\\top y<0$',
      'There exists $y\\ge 0$ such that $A^\\top y=b$ and $b^\\top y=0$',
      'There exists $y$ (any sign) such that $A^\\top y=0$ and $b^\\top y=0$',
      'There exists $x$ such that $A^\\top x\\le 0$ and $b^\\top x>0$'
    ],
    correctIndex: 0,
    explanation:
      'If $Ax\\le b$ has no solution, then a nonnegative combination of the inequalities yields an impossible statement: $0\\le b^\\top y<0$. The vector $y\\ge 0$ is the Farkas (separating hyperplane) certificate.',
    realWorld:
      'LP solvers can output such a $y$ to *prove* infeasibility—crucial for debugging models and for Benders feasibility cuts.',
    hint:
      'Multiply inequalities by nonnegative weights to derive a contradiction.'
  },
  {
    id: 65306,
    topic: 'julius-farkas',
    difficulty: 'hard',
    question:
      'A closely related “affine” form of Farkas says: exactly one of the following holds.\n\n(1) $Ax=b,\\ x\\ge 0$.\n\nIf (1) is infeasible, what is the correct alternative system?',
    options: [
      'There exists $y$ such that $A^\\top y\\ge 0$ and $b^\\top y<0$',
      'There exists $y$ such that $A^\\top y\\le 0$ and $b^\\top y\\le 0$',
      'There exists $y\\ge 0$ such that $A^\\top y=b$',
      'There exists $y$ such that $A y=b$ and $y\\ge 0$'
    ],
    correctIndex: 0,
    explanation:
      'For $Ax=b,\\ x\\ge 0$, infeasibility is certified by some $y$ with $A^\\top y\\ge 0$ but $b^\\top y<0$. If $x\\ge 0$ satisfied $Ax=b$, then $b^\\top y=(Ax)^\\top y=x^\\top(A^\\top y)\\ge 0$, contradiction.',
    realWorld:
      'This exact structure appears when proving infeasibility of flow/production models and in deriving Benders feasibility cuts via dual rays.',
    hint:
      'The certificate makes $x^\\top(A^\\top y)$ nonnegative while forcing $b^\\top y$ negative.'
  },
  {
    id: 65307,
    topic: 'julius-farkas',
    difficulty: 'sota',
    question:
      'Tucker’s (homogeneous) theorem of alternatives is often taught as a “complete status” taxonomy for linear programs. What is the key idea?',
    options: [
      'It gives mutually exclusive alternative homogeneous systems that certify feasibility, infeasibility, unboundedness, or optimality conditions',
      'It proves every LP has an optimal solution',
      'It shows strong duality fails unless the matrix has full rank',
      'It reduces all LPs to shortest path problems'
    ],
    correctIndex: 0,
    explanation:
      'Tucker-style alternatives extend Farkas: instead of only “feasible vs infeasible,” they provide different certificates (often homogeneous) that distinguish LP outcomes (e.g., primal infeasible, dual infeasible/unbounded, or both feasible with complementary slackness).',
    realWorld:
      'Interior-point methods and solver diagnostics rely on these certificate ideas to report why a solve failed (infeasible vs unbounded).',
    hint:
      'Think “multiple mutually exclusive certificates,” not just one.'
  },
  {
    id: 65308,
    topic: 'julius-farkas',
    difficulty: 'hard',
    question:
      'There is also a “strict” version of Farkas used in convex optimization, tied to Slater-type conditions. Which statement best matches the strict-feasibility intuition?',
    options: [
      'If $Ax<b$ is infeasible, then a nonzero $y\\ge 0$ exists that separates the open set from feasibility (a certificate with a strict sign gap)',
      'If $Ax<b$ is infeasible, then necessarily $Ax\\le b$ is feasible',
      'Strict feasibility is irrelevant; the same certificate always works without modification',
      'Strict feasibility guarantees integer solutions'
    ],
    correctIndex: 0,
    explanation:
      'Open constraints ($<$) behave differently from closed ones ($\\le$). If strict feasibility fails, separation theorems give a certificate with a strict inequality gap, which is one reason Slater conditions matter for clean duality/KKT statements.',
    realWorld:
      'In convex optimization, “strictly feasible point exists” (Slater) often ensures strong duality and well-behaved multipliers.',
    hint:
      'Open set vs closed set: separation needs a “strict gap.”'
  },
  {
    id: 65309,
    topic: 'julius-farkas',
    difficulty: 'sota',
    question:
      'Motzkin’s transposition theorem is often presented as a generalization of Farkas. What does it mainly generalize?',
    options: [
      'It extends the alternatives framework to handle mixtures of strict and non-strict linear inequalities (e.g., $Ax\\le b$ and $Cx<d$ together)',
      'It extends Farkas to arbitrary nonlinear constraints without convexity',
      'It is the minimax theorem for zero-sum games',
      'It is equivalent to the spectral theorem'
    ],
    correctIndex: 0,
    explanation:
      'Motzkin’s theorem of the alternative handles systems with both $\\le$ and $<$ inequalities, giving precise certificates of infeasibility for such mixed strict/non-strict systems.',
    realWorld:
      'Useful in proofs in polyhedral theory and optimization where strict inequalities appear (e.g., separating hyperplanes, robust feasibility).',
    hint:
      'Think “Farkas, but with strict inequalities too.”'
  }
];
