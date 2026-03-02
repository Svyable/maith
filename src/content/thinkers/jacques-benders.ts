// benders.ts
import type { Question } from '../types';

export const bendersQuestions: Question[] = [
  {
    id: 65200,
    topic: 'jacques-benders',
    difficulty: 'easy',
    question:
      'Benders decomposition is designed for problems that “split” naturally into variables $x$ and $y$, often with $x$ integer and $y$ continuous. Which description best matches the standard Benders split?',
    options: [
      'A master problem over $x$ (often MILP) plus subproblem(s) over $y$ (often LP) solved with $x$ fixed, adding cuts back to the master',
      'A Dantzig–Wolfe reformulation where $x=\\sum_j \\lambda_j x^j$ is a convex combination of columns (column generation)',
      'Pure primal block decomposition that never uses dual information',
      'Only Lagrangian relaxation where constraints are dualized but no cuts are generated'
    ],
    correctIndex: 0,
    explanation:
      'Classic Benders fixes $x$ in the master, solves the $y$-subproblem, and iteratively adds feasibility/optimality cuts to approximate the recourse function $Q(x)$.',
    realWorld:
      'Used in stochastic programming (two-stage recourse), unit commitment, facility location with continuous flows, and large-scale scheduling.',
    hint:
      '“Integer master, continuous subproblem, add cuts.”'
  },
  {
    id: 65201,
    topic: 'jacques-benders',
    difficulty: 'hard',
    question:
      'Consider a standard form\n$$\\min\\ c^\\top x + d^\\top y\\ \\ \\text{s.t. } A x + B y \\ge b,\\ \\ x\\in X,\\ y\\ge 0.$$\nFix $x=\\bar x$ and solve the LP subproblem in $y$. A **Benders optimality cut** is derived from which object, and what is its typical shape?',
    options: [
      'From optimal dual multipliers $\\pi^*$ of the subproblem: $\\eta \\ge (\\pi^*)^\\top(b - A x)$ (supporting hyperplane for $Q(x)$)',
      'From primal $y$ only: $\\eta \\ge d^\\top y$ with $y$ copied into the master',
      'From KKT stationarity of the master: $\\nabla_x L=0$ gives the cut directly',
      'From a Big-$M$ reformulation: $\\eta \\ge -M(1-z)$'
    ],
    correctIndex: 0,
    explanation:
      'The recourse value $Q(x)$ is convex (for LP subproblems). Dual optimal multipliers define a valid lower bound (a supporting hyperplane), typically written as\n$$\\eta \\ge (\\pi^*)^\\top(b-Ax).$$',
    realWorld:
      'These cuts tighten the master’s approximation of second-stage costs in two-stage stochastic MILPs.',
    hint:
      'Optimality cuts come from **dual prices**.'
  },
  {
    id: 65202,
    topic: 'jacques-benders',
    difficulty: 'sota',
    question:
      'When the subproblem is infeasible for some $x=\\bar x$, Benders adds a **feasibility cut**. Which statement best captures the logic (often via Farkas’ lemma)?',
    options: [
      'Use a Farkas certificate (dual ray) $u\\ge 0$ to generate a cut excluding $\\bar x$, e.g. $u^\\top(b-Ax) \\le 0$ (up to sign/normalization)',
      'Add the objective value as a cut: $\\eta \\ge Q(\\bar x)$ even though $Q(\\bar x)$ is undefined',
      'Introduce slack variables and penalize them with Big-$M$; this is the only correct method',
      'Feasibility cuts require enumerating all infeasible $x$ and banning them one-by-one'
    ],
    correctIndex: 0,
    explanation:
      'If the LP in $y$ is infeasible, Farkas’ lemma provides a vector (dual ray) that proves infeasibility and yields a linear inequality violated by $\\bar x$. Adding it prevents repeating infeasible first-stage decisions.',
    realWorld:
      'Crucial in stochastic programming with “infeasible recourse” (some first-stage choices make the second stage impossible).',
    hint:
      'Infeasible subproblem ⇒ add a cut from a **certificate** (dual ray).'
  },
  {
    id: 65203,
    topic: 'jacques-benders',
    difficulty: 'hard',
    question:
      'A common acceleration for Benders is to strengthen cuts or reduce iterations. Which technique best matches a modern, widely used acceleration idea?',
    options: [
      'Use multiple cuts per iteration (multi-cut) or stabilized/core-point methods to reduce oscillation and make cuts stronger',
      'Replace the subproblem with a heuristic and never add cuts',
      'Switch to Frank–Wolfe on the master because it guarantees integrality',
      'Turn Benders into Dijkstra’s algorithm by sorting cuts'
    ],
    correctIndex: 0,
    explanation:
      'Multi-cut Benders adds scenario- or block-specific cuts each iteration. Stabilization (e.g., core-point/level methods) keeps $x$ from bouncing, improving convergence and cut quality.',
    realWorld:
      'Large stochastic MILPs often use multi-cut + stabilization to become practical at industrial scale.',
    hint:
      'Think “more/stronger cuts + less zig-zagging.”'
  },
  {
    id: 65204,
    topic: 'jacques-benders',
    difficulty: 'sota',
    question:
      'Logic-based Benders decomposition (LBBD) differs from classical Benders primarily in what way?',
    options: [
      'The subproblem can be non-LP (e.g., CP/SAT/scheduling); cuts are derived from logical inference (“nogoods”) rather than LP dual multipliers',
      'It requires the master to be purely continuous and convex',
      'It only applies when both master and subproblem are linear programs',
      'It is identical to standard Benders, just with a different name'
    ],
    correctIndex: 0,
    explanation:
      'LBBD keeps the master/subproblem idea, but replaces dual-based cuts with inference-based constraints explaining why a partial assignment cannot be extended (or giving bounds).',
    realWorld:
      'Hybrid MIP+CP approaches: the master selects high-level decisions, while a CP scheduler checks feasibility and returns nogood cuts.',
    hint:
      'LBBD: subproblem is “reasoning engine,” not necessarily an LP.'
  }
];