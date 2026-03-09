import type { Question } from '../types';

export const manjulBhargavaQuestions: Question[] = [
  {
    id: 31600, topic: 'manjul-bhargava', difficulty: 'easy',
    question: 'Manjul Bhargava won the 2014 Fields Medal primarily for his work in which area of number theory?',
    options: [
      'Higher composition laws for binary quadratic forms — generalizing Gauss\'s 200-year-old composition law from $\\text{Cl}^2$ to $\\text{Cl}^3$, $\\text{Cl}^4$, and $\\text{Cl}^5$ using combinatorial objects like $2 \\times 2 \\times 2$ cubes of integers.',
      'Proving the Riemann Hypothesis for function fields over finite fields using étale cohomology.',
      'Establishing the modularity of all elliptic curves over $\\mathbb{Q}$, completing the Taniyama-Shimura conjecture.',
      'Computing exact values of the Ramanujan tau function $\\tau(n)$ for all primes $p < 10^{12}$.'
    ],
    correctIndex: 0,
    explanation: 'Gauss discovered a composition law on binary quadratic forms $ax^2 + bxy + cy^2$ in 1801. For 200 years, this was the only known composition law. Bhargava discovered 12 new ones by studying higher-dimensional combinatorial objects — like $2 \\times 2 \\times 2$ cubes of integers — and showing they parametrize ideal classes in cubic, quartic, and quintic rings.',
    realWorld: 'His methods led to the first proof that a positive proportion of elliptic curves have rank 0 or 1, confirming part of the Birch and Swinnerton-Dyer conjecture on average.',
    hint: 'He found new ways to "compose" quadratic forms that Gauss missed — by thinking in higher dimensions.',
    formulaLinks: ['quadratic-form'],
  },
  {
    id: 31601, topic: 'manjul-bhargava', difficulty: 'hard',
    question: 'Bhargava\'s "15 theorem" and "290 theorem" concern universal quadratic forms. What does the 15 theorem state?',
    options: [
      'A positive-definite quadratic form over $\\mathbb{Z}$ represents all positive integers if and only if it represents the integers $1, 2, 3, 5, 6, 7, 10, 14, 15$ — a finite set of "critical" numbers.',
      'Every quadratic form of rank $\\geq 15$ is equivalent to a diagonal form $\\sum a_i x_i^2$ over $\\mathbb{Q}$.',
      'The class number $h(D)$ of a quadratic field $\\mathbb{Q}(\\sqrt{D})$ divides 15 for all fundamental discriminants $|D| < 10^6$.',
      'A quadratic form is universal over $\\mathbb{Z}_p$ for all primes $p$ if and only if its determinant is a 15th power residue modulo $p$.'
    ],
    correctIndex: 0,
    explanation: 'Bhargava and Hanke proved the 290 theorem: a positive-definite integer-valued quadratic form is universal (represents all positive integers) if and only if it represents the 29 "critical" integers up to 290. The 15 theorem is the analogous result for integer-matrix forms: universality is determined by just 9 values up to 15.',
    realWorld: 'This reduced an infinite verification problem to a finite computation, enabling computer-assisted classification of all universal quadratic forms.',
    hint: 'You only need to check a small finite set of numbers to know if the form represents everything.',
    formulaLinks: ['quadratic-form'],
  },
  {
    id: 31602, topic: 'manjul-bhargava', difficulty: 'sota',
    question: 'Bhargava and Shankar proved groundbreaking results about the average rank of elliptic curves. What is their main theorem?',
    options: [
      'When elliptic curves $E/\\mathbb{Q}$ are ordered by height, the average rank of the Mordell-Weil group $E(\\mathbb{Q})$ is bounded: $$\\limsup_{X \\to \\infty} \\frac{\\sum_{H(E) \\leq X} \\text{rank}(E(\\mathbb{Q}))}{\\#\\{E : H(E) \\leq X\\}} \\leq \\frac{7}{6}$$ In particular, a positive proportion of elliptic curves have rank 0 and a positive proportion have rank 1.',
      'Every elliptic curve over $\\mathbb{Q}$ with conductor $N < 10^8$ satisfies the Birch and Swinnerton-Dyer conjecture exactly.',
      'The average analytic rank $\\text{ord}_{s=1} L(E, s)$ equals the average algebraic rank for all curves of height $\\leq X$ as $X \\to \\infty$.',
      'The Tate-Shafarevich group $\\text{Ш}(E/\\mathbb{Q})$ is finite for all elliptic curves of rank $\\leq 2$.'
    ],
    correctIndex: 0,
    explanation: 'By counting integral orbits of $\\text{GL}_2(\\mathbb{Z})$ on spaces of binary quartic forms, Bhargava-Shankar computed the average size of the 2-Selmer group to be exactly 3. Since $\\text{rank}(E) \\leq \\dim_{\\mathbb{F}_2} \\text{Sel}_2(E) - 1$, this bounds the average rank by $\\frac{3}{2} - 1 + \\epsilon$. Refined estimates give $\\leq 7/6$.',
    realWorld: 'This was the first unconditional bound on average ranks, providing the strongest evidence toward the conjecture that 50% of elliptic curves have rank 0 and 50% have rank 1.',
    hint: 'They counted lattice points in a cleverly chosen space to bound Selmer groups — and hence ranks.',
    formulaLinks: ['elliptic-curve'],
  },
];
