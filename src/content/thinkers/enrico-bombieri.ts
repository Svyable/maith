import type { Question } from '../types';

export const enricoBombieriQuestions: Question[] = [
  {
    id: 31840, topic: 'enrico-bombieri', difficulty: 'easy',
    question: 'Enrico Bombieri won the 1974 Fields Medal for work spanning several areas. Which result on prime distribution is he most famous for?',
    options: [
      'The Bombieri-Vinogradov theorem: primes are equidistributed in arithmetic progressions on average, achieving the strength of the Generalized Riemann Hypothesis for most moduli: $$\\sum_{q \\leq Q} \\max_{(a,q)=1} \\left|\\pi(x; q, a) - \\frac{\\text{Li}(x)}{\\phi(q)}\\right| \\ll \\frac{x}{(\\log x)^A}$$ for $Q \\leq x^{1/2}/(\\log x)^B$ and any $A > 0$.',
      'A proof that the Riemann Hypothesis is true for all zeros with imaginary part $|t| < 10^{12}$.',
      'A proof that twin primes have positive density among all primes.',
      'A proof that Goldbach\'s conjecture holds for all even numbers $> 10^{18}$.'
    ],
    correctIndex: 0,
    explanation: 'The Bombieri-Vinogradov theorem is one of the most important results in analytic number theory. It says that although individual arithmetic progressions might have badly distributed primes, on average over moduli $q \\leq \\sqrt{x}$, the distribution is as good as the GRH predicts. The proof combines the large sieve with estimates for character sums.',
    realWorld: 'This theorem is a key ingredient in almost all modern results about primes: it\'s used in the proof of Chen\'s theorem (every large even number is $p + p\'$ or $p + p_1 p_2$) and in the bounded gaps between primes results.',
    hint: 'Primes are well-distributed in arithmetic progressions — not always individually, but on average over moduli.',
    formulaLinks: ['prime-counting', 'riemann-hypothesis'],
  },
  {
    id: 31841, topic: 'enrico-bombieri', difficulty: 'hard',
    question: 'Bombieri also proved deep results in algebraic geometry. What is the Bombieri-Lang conjecture?',
    options: [
      'A smooth projective variety $X$ of general type over a number field $K$ has its rational points $X(K)$ contained in a proper closed subvariety. Equivalently, "varieties with ample canonical bundle have non-dense rational points." For surfaces: if $K_X$ is big, then $X(K)$ is not Zariski dense.',
      'Every variety of general type over $\\mathbb{Q}$ has only finitely many rational points.',
      'The number of rational points of bounded height on a Fano variety satisfies $N(B) \\sim c B^a (\\log B)^b$.',
      'Every smooth projective curve of genus $g \\geq 2$ over a number field has at most $g^2$ rational points.'
    ],
    correctIndex: 0,
    explanation: 'Bombieri proved this for surfaces over function fields (Bombieri\'s theorem on surfaces of general type). Over number fields, it remains a major open conjecture generalizing Faltings\' theorem (the case of curves $g \\geq 2$). The conjecture predicts a sharp dichotomy: rational points are either dense (Fano/abelian varieties) or sparse (general type).',
    realWorld: 'This conjecture guides research in arithmetic geometry and has implications for Diophantine equations — predicting when polynomial equations have "few" vs. "many" rational solutions.',
    hint: 'Varieties with "lots of curvature" should have very few rational points — concentrated on special subvarieties.',
    formulaLinks: ['algebraic-variety'],
  },
  {
    id: 31842, topic: 'enrico-bombieri', difficulty: 'sota',
    question: 'Bombieri (with Lagarias and Vaaler) proved sharp results about the distribution of algebraic numbers. What is the Bombieri norm and its significance?',
    options: [
      'For a polynomial $p(z) = \\sum a_k z^k$ of degree $d$, the Bombieri norm is: $$\\|p\\|_B = \\left(\\sum_{k=0}^d \\binom{d}{k}^{-1} |a_k|^2\\right)^{1/2}$$ It satisfies the remarkable inequality $\\|pq\\|_B \\leq \\|p\\|_B \\|q\\|_B$ (submultiplicativity) — making it the natural norm for bounding the height of products of algebraic numbers. This controls root separation: $|\\alpha - \\beta| \\geq d^{-d/2} H(\\alpha)^{-d+1}$.',
      'The Bombieri norm is $\\|p\\|_B = \\max_{|z|=1} |p(z)|$ — the supremum on the unit circle.',
      'The Bombieri norm equals the Mahler measure $M(p) = \\exp(\\int_0^1 \\log|p(e^{2\\pi i t})| dt)$.',
      'The Bombieri norm is the $L^2$ norm of $p$ on the unit disk: $\\|p\\|_B = (\\int_D |p|^2 dA)^{1/2}$.'
    ],
    correctIndex: 0,
    explanation: 'The Bombieri norm is geometrically natural: it\'s the $L^2$ norm on the space of degree-$d$ polynomials viewed as sections of $\\mathcal{O}(d)$ on $\\mathbb{P}^1$ with the Fubini-Study metric. Its submultiplicativity (unlike the naive coefficient norm) makes it ideal for transcendence theory and Diophantine approximation, where one needs to control heights under multiplication.',
    realWorld: 'The Bombieri norm is used in computational algebra (root-finding algorithms), cryptography (lattice-based attacks on polynomial systems), and in proving transcendence results via the auxiliary polynomial method.',
    hint: 'A norm on polynomials that behaves well under multiplication — with binomial coefficient weights.',
    formulaLinks: ['bombieri-norm'],
  },
];
