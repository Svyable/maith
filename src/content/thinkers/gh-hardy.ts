import type { Question } from '../types';

export const ghHardyQuestions: Question[] = [
  {
    id: 31720, topic: 'gh-hardy', difficulty: 'easy',
    question: 'G.H. Hardy collaborated with Ramanujan on the partition function. What is the Hardy-Ramanujan asymptotic formula?',
    options: [
      'The number of integer partitions $p(n)$ satisfies: $$p(n) \\sim \\frac{1}{4n\\sqrt{3}} \\exp\\left(\\pi \\sqrt{\\frac{2n}{3}}\\right) \\quad \\text{as } n \\to \\infty$$ showing that partitions grow exponentially with $\\sqrt{n}$.',
      'The number of partitions equals $p(n) = \\binom{2n}{n} / (n+1)$ — the Catalan numbers.',
      'The partition function satisfies $p(n) = n! / \\log n$ for all $n > 100$.',
      'The generating function $\\sum p(n) q^n = \\prod (1 + q^k)$ converges only for $|q| < 1/2$.'
    ],
    correctIndex: 0,
    explanation: 'Hardy and Ramanujan developed the "circle method" (1918) to prove this asymptotic. They integrated the generating function $\\sum p(n) q^n = \\prod_{k=1}^\\infty (1-q^k)^{-1}$ around a circle in the complex plane, decomposing the contour near rational points (Farey fractions). The dominant contribution comes from $q \\approx 1$.',
    realWorld: 'The circle method became one of the most powerful tools in analytic number theory, later used by Hardy-Littlewood and Vinogradov for Waring\'s problem and Goldbach-type results.',
    hint: 'The number of ways to write $n$ as a sum grows like $e^{C\\sqrt{n}}$ — remarkably fast.',
    formulaLinks: ['partition-function'],
  },
  {
    id: 31721, topic: 'gh-hardy', difficulty: 'hard',
    question: 'Hardy proved a foundational inequality in analysis. What is the Hardy inequality?',
    options: [
      'For $p > 1$ and $f \\geq 0$ on $(0, \\infty)$ with $f \\in L^p$: $$\\int_0^\\infty \\left(\\frac{1}{x} \\int_0^x f(t)\\,dt\\right)^p dx \\leq \\left(\\frac{p}{p-1}\\right)^p \\int_0^\\infty f(x)^p\\,dx$$ The constant $(p/(p-1))^p$ is sharp (best possible).',
      'For any sequence $a_n \\geq 0$: $\\sum a_n^2 \\leq 4 \\sum n^2 a_n^2$ with equality for geometric sequences.',
      'For $f \\in L^1 \\cap L^\\infty$: $\\|f\\|_p \\leq \\|f\\|_1^{1/p} \\|f\\|_\\infty^{1-1/p}$ (log-convexity of $L^p$ norms).',
      'For all $f, g \\in L^2$: $|\\langle f, g \\rangle|^2 \\leq \\langle f, f \\rangle \\cdot \\langle g, g \\rangle$ (Cauchy-Schwarz).'
    ],
    correctIndex: 0,
    explanation: 'Hardy\'s inequality says that the $L^p$ norm of the average of $f$ is controlled by the $L^p$ norm of $f$ itself. The constant $(p/(p-1))^p$ is best possible — it cannot be improved. The inequality has deep connections to spectral theory and quantum mechanics (uncertainty principles).',
    realWorld: 'Hardy\'s inequality is fundamental in PDE theory, Sobolev embedding theorems, and quantum mechanics (it implies lower bounds on kinetic energy near singularities).',
    hint: 'Averaging a function makes it smoother but doesn\'t make its $L^p$ norm grow too much — with a sharp constant.',
    formulaLinks: ['hardy-inequality'],
  },
  {
    id: 31722, topic: 'gh-hardy', difficulty: 'sota',
    question: 'Hardy and Littlewood conjectured precise asymptotics for prime $k$-tuples. What is the Hardy-Littlewood conjecture for twin primes?',
    options: [
      'The number of twin prime pairs $(p, p+2)$ with $p \\leq x$ satisfies: $$\\pi_2(x) \\sim 2C_2 \\frac{x}{(\\ln x)^2}$$ where $C_2 = \\prod_{p \\geq 3} \\frac{p(p-2)}{(p-1)^2} \\approx 0.6601$ is the twin prime constant. More generally, for any admissible $k$-tuple $\\mathcal{H}$: $\\pi_{\\mathcal{H}}(x) \\sim \\mathfrak{S}(\\mathcal{H}) \\frac{x}{(\\ln x)^k}$.',
      'There are infinitely many twin primes, and the $n$-th twin prime pair $(p_n, p_n + 2)$ satisfies $p_n \\sim n \\ln^2 n$.',
      'The density of twin primes in $[1, x]$ equals $1/\\ln x$ — the same as the prime density.',
      'Twin primes become equidistributed in residue classes: for each $a \\pmod{q}$ with $\\gcd(a, q) = 1$, the fraction of twin primes $\\equiv a$ tends to $1/\\phi(q)$.'
    ],
    correctIndex: 0,
    explanation: 'The singular series $\\mathfrak{S}(\\mathcal{H}) = \\prod_p \\frac{1-\\nu_p(\\mathcal{H})/p}{(1-1/p)^k}$ measures the "sieve-theoretic density" of the $k$-tuple. For twin primes $(0, 2)$, $\\nu_p = 2$ for $p \\geq 3$ and $\\nu_2 = 1$, giving $C_2$. This conjecture remains unproved but is supported by computational evidence up to $10^{18}$.',
    realWorld: 'The Hardy-Littlewood conjectures guide all modern prime-finding algorithms and underlie the heuristics used in computational number theory and cryptographic key generation.',
    hint: 'They predicted exactly how many twin primes there should be — with a precise constant $C_2 \\approx 0.66$.',
    formulaLinks: ['prime-counting', 'twin-prime'],
  },
];
