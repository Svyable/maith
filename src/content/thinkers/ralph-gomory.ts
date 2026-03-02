// gomory.ts
import type { Question } from '../types';

export const ralphGomoryQuestions: Question[] = [
  {
    id: 65250,
    topic: 'ralph-gomory',
    difficulty: 'easy',
    question:
      'A Gomory **fractional cut** is generated after solving the LP relaxation and finding a basic solution with some basic integer variable fractional. From what object is the cut derived?',
    options: [
      'A single simplex tableau row for a fractional basic variable, using fractional parts to form a valid inequality (a Chvátal–Gomory-style rounding cut)',
      'Only the objective function value at the LP optimum',
      'Only the dual multipliers (shadow prices) without tableau information',
      'Only the original constraint matrix, without using the LP solution'
    ],
    correctIndex: 0,
    explanation:
      'Take a tableau equation for a basic variable that should be integer, then apply “fractional-part rounding” to obtain a cut violated by the current fractional solution.',
    realWorld:
      'Gomory cuts are a classic cutting-plane method and remain a core ingredient in MIP solvers (often as part of cut pools / cut selection).',
    hint:
      'Start from the simplex tableau row of a fractional basic integer variable.'
  },
  {
    id: 65251,
    topic: 'ralph-gomory',
    difficulty: 'hard',
    question:
      'Suppose the LP tableau has a row for an integer basic variable:\n$$x_B = b - \\sum_{j\\in N} a_j x_j,$$\nwhere $b\\notin\\mathbb{Z}$. Let fractional part be $\\{t\\}=t-\\lfloor t\\rfloor$. What is the standard **Gomory fractional cut** form (up to equivalent rearrangements)?',
    options: [
      '$\\sum_{j\\in N} \\{a_j\\} x_j \\ge \\{b\\}$',
      '$\\sum_{j\\in N} a_j x_j \\ge b$ (reuse the same row as-is)',
      '$\\sum_{j\\in N} \\lfloor a_j\\rfloor x_j \\ge \\lfloor b\\rfloor$',
      '$\\sum_{j\\in N} \\{a_j\\} x_j \\le \\{b\\}$'
    ],
    correctIndex: 0,
    explanation:
      'From $x_B=b-\\sum a_jx_j$ with $x_B\\in\\mathbb{Z}$, taking fractional parts yields the valid inequality\n$$\\sum_{j\\in N} \\{a_j\\}x_j \\ge \\{b\\},$$\nwhich the current LP solution violates when $x_B$ is fractional.',
    realWorld:
      'This is the prototype “rounding cut” that systematically removes the current fractional LP solution while keeping all integer-feasible solutions.',
    hint:
      'Fractional parts on the coefficients, and the RHS is the fractional part of $b$.'
  },
  {
    id: 65252,
    topic: 'ralph-gomory',
    difficulty: 'sota',
    question:
      'Gomory **mixed-integer (GMI)** cuts generalize fractional cuts when some variables are continuous. If a tableau row is\n$$x_B = b - \\sum_{j} a_j x_j,$$\nwith $x_B$ required integer but some $x_j$ continuous, what is the key difference in the cut construction?',
    options: [
      'Coefficients are adjusted depending on whether $x_j$ is integer or continuous (using a piecewise formula based on $\\{a_j\\}$ and $\\{b\\}$), yielding a valid cut that is stronger than naïve rounding',
      'You can apply the pure-integer fractional cut unchanged, continuous variables cause no issues',
      'GMI cuts are just heuristic rounding of $x$ to integers',
      'GMI cuts require solving a second LP for each variable'
    ],
    correctIndex: 0,
    explanation:
      'For mixed-integer rows, the cut treats integer and continuous nonbasics differently to preserve validity. The resulting inequality (the GMI cut) is a cornerstone of modern MIP cutting-plane engines.',
    realWorld:
      'Commercial solvers generate large numbers of GMI cuts because they are broadly applicable, relatively cheap, and often effective early in the search.',
    hint:
      'Mixed variables ⇒ coefficient rule depends on variable type (integer vs continuous).'
  },
  {
    id: 65253,
    topic: 'ralph-gomory',
    difficulty: 'hard',
    question:
      'The **Chvátal–Gomory (CG) cut** mechanism can be stated directly on the original system $Ax\\ge b$ (with $x$ integer). Which statement best describes how a CG cut is formed?',
    options: [
      'Choose $\\lambda\\ge 0$ so that $\\lambda^\\top A$ is integral; then from $\\lambda^\\top A x \\ge \\lambda^\\top b$ infer $\\lambda^\\top A x \\ge \\lceil \\lambda^\\top b\\rceil$',
      'Choose any $\\lambda$ and round both sides down: $\\lambda^\\top A x \\ge \\lfloor \\lambda^\\top b\\rfloor$',
      'Take any violated inequality and multiply by $-1$ to flip the sign',
      'Only facet-defining inequalities are allowed as CG cuts'
    ],
    correctIndex: 0,
    explanation:
      'A CG cut is obtained by taking a nonnegative linear combination of constraints that produces an integer left-hand side, then rounding up the RHS to keep validity for integer $x$.',
    realWorld:
      'This viewpoint unifies many “rounding” cuts and explains why tableau-based Gomory cuts are CG cuts applied in the tableau space.',
    hint:
      'Make the LHS integer, then round **up** the RHS.'
  },
  {
    id: 65254,
    topic: 'ralph-gomory',
    difficulty: 'sota',
    question:
      'What is the **Gomory–Chvátal closure** of a polyhedron $P=\\{x:Ax\\ge b\\}$ in the integer setting?',
    options: [
      'The intersection of $P$ with all CG cuts added (i.e., apply all possible CG cuts), producing a tighter relaxation that still contains all integer-feasible points',
      'Just the original LP relaxation $P$ (no cuts)',
      'Only the set of facet-defining inequalities of $P$',
      'The split closure obtained only from disjunctions $x_i\\le k \\ \\vee\\ \\ x_i\\ge k+1$'
    ],
    correctIndex: 0,
    explanation:
      'The CG closure is what you get after adding **every** valid CG cut and intersecting: it’s a canonical “one-round” tightened relaxation. Repeating the operation yields a sequence approaching the integer hull.',
    realWorld:
      'Used to reason about the theoretical strength of cutting planes and to compare families like CG, split, and lift-and-project closures.',
    hint:
      'Closure = “add all cuts of that family, then intersect.”'
  }
];