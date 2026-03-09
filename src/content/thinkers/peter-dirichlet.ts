import type { Question } from '../types';

export const peterDirichletQuestions: Question[] = [
  {
    id: 31780, topic: 'peter-dirichlet', difficulty: 'easy',
    question: 'Peter Gustav Lejeune Dirichlet proved one of the most beautiful theorems in number theory. What does Dirichlet\'s theorem on primes in arithmetic progressions state?',
    options: [
      'For any coprime integers $a$ and $d$ (i.e., $\\gcd(a,d) = 1$), there are infinitely many primes of the form $p = a + nd$. More precisely: $$\\sum_{\\substack{p \\leq x \\\\ p \\equiv a \\pmod{d}}} \\frac{1}{p} \\sim \\frac{1}{\\phi(d)} \\ln \\ln x$$ showing primes are equidistributed among the $\\phi(d)$ residue classes.',
      'Every arithmetic progression $a, a+d, a+2d, \\ldots$ contains at least one prime for all $a, d \\geq 1$.',
      'The number of primes $\\leq x$ in the progression $a + nd$ equals exactly $\\pi(x)/\\phi(d)$ for all $x > d^2$.',
      'For any $d$, the smallest prime $\\equiv 1 \\pmod{d}$ is at most $d^2$.'
    ],
    correctIndex: 0,
    explanation: 'Dirichlet\'s 1837 proof was revolutionary: he introduced $L$-functions $L(s, \\chi) = \\sum \\chi(n)/n^s$ for Dirichlet characters $\\chi \\pmod{d}$ and showed $L(1, \\chi) \\neq 0$ for non-principal characters. This non-vanishing result — proved using the class number formula — is the key technical step.',
    realWorld: 'Dirichlet\'s theorem is foundational in cryptography (generating primes in specific residue classes for RSA) and is the prototype for all equidistribution results in number theory.',
    hint: 'Primes show up equally in all "allowed" residue classes — like $1, 3, 7, 9 \\pmod{10}$.',
    formulaLinks: ['dirichlet-l-function', 'prime-counting'],
  },
  {
    id: 31781, topic: 'peter-dirichlet', difficulty: 'hard',
    question: 'Dirichlet introduced a fundamental tool for studying Fourier series convergence. What are the Dirichlet kernel and Dirichlet conditions?',
    options: [
      'The Dirichlet kernel $D_N(x) = \\sum_{n=-N}^{N} e^{inx} = \\frac{\\sin((N+1/2)x)}{\\sin(x/2)}$ gives the partial sums of the Fourier series: $S_N f(x) = (f * D_N)(x)$. Dirichlet proved convergence at points where $f$ has bounded variation: $$S_N f(x) \\to \\frac{f(x^+) + f(x^-)}{2}$$ as $N \\to \\infty$.',
      'The Dirichlet kernel is $D_N(x) = N \\cdot \\text{sinc}(Nx)$ and the series converges absolutely for all continuous $f$.',
      'The Dirichlet kernel is $D_N(x) = \\sum_{n=1}^N \\cos(nx)/n$ and the series converges uniformly for all $L^2$ functions.',
      'The Dirichlet conditions require $f$ to be analytic on $[-\\pi, \\pi]$ with $f(-\\pi) = f(\\pi)$.'
    ],
    correctIndex: 0,
    explanation: 'The Dirichlet kernel is NOT an approximate identity (it doesn\'t have uniformly bounded $L^1$ norm — $\\|D_N\\|_1 \\sim \\frac{4}{\\pi^2} \\ln N$). This is why Fourier series convergence is subtle. Dirichlet\'s conditions (bounded variation, finite number of discontinuities) give sufficient but not necessary conditions for pointwise convergence.',
    realWorld: 'The Dirichlet kernel is fundamental in signal processing (Gibbs phenomenon at discontinuities), digital filter design, and the theory of sampling.',
    hint: 'The partial sum of a Fourier series is a convolution with a kernel that oscillates wildly — but still converges under Dirichlet\'s conditions.',
    formulaLinks: ['fourier-series', 'dirichlet-kernel'],
  },
  {
    id: 31782, topic: 'peter-dirichlet', difficulty: 'sota',
    question: 'Dirichlet proved the class number formula connecting $L$-functions to algebraic number theory. What is the formula for imaginary quadratic fields?',
    options: [
      'For an imaginary quadratic field $\\mathbb{Q}(\\sqrt{-d})$ with discriminant $D < 0$ and class number $h(D)$: $$L(1, \\chi_D) = \\frac{2\\pi h(D)}{w|D|^{1/2}}$$ where $w$ is the number of roots of unity and $\\chi_D = \\left(\\frac{D}{\\cdot}\\right)$ is the Kronecker symbol. This connects an analytic object ($L$-value) to an algebraic invariant (class number).',
      'The class number of $\\mathbb{Q}(\\sqrt{-d})$ equals the number of reduced binary quadratic forms of discriminant $-d$, which is always $\\leq \\sqrt{d}$.',
      'The $L$-function $L(s, \\chi_D)$ has a zero at $s = 1/2$ if and only if the class number $h(D) > 1$.',
      'The class number satisfies $h(D) = \\prod_{p | D} (p - \\left(\\frac{D}{p}\\right))$ — a product over prime divisors of the discriminant.'
    ],
    correctIndex: 0,
    explanation: 'This is one of the first and most beautiful instances of the "analytic $\\leftrightarrow$ algebraic" paradigm in number theory. The non-vanishing $L(1, \\chi_D) \\neq 0$ (which Dirichlet needed for his theorem on primes in APs) follows because $h(D) \\geq 1$. For real quadratic fields, the formula involves the regulator (fundamental unit) instead of roots of unity.',
    realWorld: 'The class number formula is the prototype for the Birch-Swinnerton-Dyer conjecture (a Millennium Problem) and for Iwasawa theory — connecting $L$-values to arithmetic invariants.',
    hint: 'The value of an $L$-function at $s = 1$ tells you the class number — bridging analysis and algebra.',
    formulaLinks: ['dirichlet-l-function', 'class-number'],
  },
];
