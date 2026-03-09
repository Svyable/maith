import type { Question } from '../types';

export const jamesMaynardQuestions: Question[] = [
  {
    id: 31610, topic: 'james-maynard', difficulty: 'easy',
    question: 'James Maynard won the 2022 Fields Medal for his work on prime numbers. What is his most famous result about gaps between primes?',
    options: [
      'There are infinitely many pairs of primes differing by at most 246: $$\\liminf_{n \\to \\infty}(p_{n+1} - p_n) \\leq 246$$ dramatically improving Zhang\'s 2013 bound of 70 million.',
      'The twin prime conjecture is true: there are infinitely many primes $p$ such that $p + 2$ is also prime.',
      'Every even number $> 4$ is the sum of two primes (Goldbach\'s conjecture).',
      'The prime counting function satisfies $\\pi(x) = \\text{Li}(x)$ exactly for all $x > 10^{20}$.'
    ],
    correctIndex: 0,
    explanation: 'Maynard (and independently Tao) developed a multidimensional sieve method using a weight function $w(n) = \\left(\\sum_{d_i | n+h_i} \\lambda_{d_1,\\ldots,d_k}\\right)^2$ optimized over symmetric functions. This showed $\\liminf(p_{n+m} - p_n) < \\infty$ for any fixed $m$, proving bounded gaps between primes in tuples.',
    realWorld: 'This brought the twin prime conjecture tantalizingly close — from a gap of 70 million down to 246 in just one year of worldwide collaboration (Polymath project).',
    hint: 'He showed primes cluster more tightly than anyone had proven before — within 246 of each other, infinitely often.',
    formulaLinks: ['prime-counting'],
  },
  {
    id: 31611, topic: 'james-maynard', difficulty: 'hard',
    question: 'Maynard proved a long-standing conjecture about primes with missing digits. What did he show?',
    options: [
      'There are infinitely many primes that do not contain a specified decimal digit (e.g., primes with no "7"). The count satisfies: $$\\pi_{\\text{no-}d}(x) \\gg \\frac{x^{1-\\epsilon}}{\\log x}$$ for any digit $d \\in \\{0,\\ldots,9\\}$ and any $\\epsilon > 0$.',
      'Every prime $> 5$ contains all ten decimal digits when written in base 10.',
      'The density of primes containing exactly one occurrence of each digit $0$–$9$ is $1/10!$.',
      'Primes avoiding a digit $d$ have natural density zero but Dirichlet density $\\log 9 / \\log 10$.'
    ],
    correctIndex: 0,
    explanation: 'Maynard combined sieve methods with Fourier analysis on the digits of integers (via exponential sums over "digital" sets). The key insight was that the set of integers missing a digit is "well-distributed" in arithmetic progressions despite being sparse (density $(9/10)^{\\log_{10} x} = x^{-c}$), allowing sieve techniques to detect primes.',
    realWorld: 'This was the first result showing primes exist in a "thin" set defined by digit constraints — opening the door to understanding primes in other combinatorially-defined sparse sets.',
    hint: 'Can you find a prime without any 7s in it? He proved you can find infinitely many.',
    formulaLinks: ['prime-counting'],
  },
  {
    id: 31612, topic: 'james-maynard', difficulty: 'sota',
    question: 'Maynard\'s multidimensional sieve improves on the Goldston-Pintz-Yıldırım (GPY) method. What is the key technical innovation?',
    options: [
      'GPY uses a one-dimensional weight $\\lambda_d$ in the Selberg sieve, while Maynard uses a multidimensional weight $\\lambda_{d_1,\\ldots,d_k}$ with $k$ independent divisor variables. The optimization becomes a variational problem: $$\\sup_F \\frac{\\sum_{m=1}^{k} J_m(F)}{I(F)}$$ where $J_m(F) = \\int_0^1 \\cdots \\int_0^1 \\left(\\int_0^1 F(t_1,\\ldots,t_k)\\,dt_m\\right)^2 \\prod_{i \\neq m} dt_i$ and the supremum exceeds $4\\log k / k$ for large $k$.',
      'Maynard replaces the sieve with a probabilistic model where primes are independent Bernoulli random variables with $P(n \\text{ prime}) = 1/\\ln n$.',
      'The key innovation is using the Riemann Hypothesis for Dirichlet $L$-functions to extend the level of distribution beyond $1/2$.',
      'Maynard introduces a "repulsion sieve" that accounts for prime-prime correlations via the Hardy-Littlewood singular series.'
    ],
    correctIndex: 0,
    explanation: 'The GPY method could show small gaps but couldn\'t reach bounded gaps because it optimized over a single variable. Maynard\'s breakthrough was allowing $k$ independent sieve dimensions, turning the problem into a $k$-dimensional calculus of variations. For large $k$, the ratio $\\sum J_m / I$ grows like $\\log k$, which eventually exceeds any threshold needed to guarantee prime tuples.',
    realWorld: 'This framework is now the standard tool for bounded gaps results. It also proved that for any $m$, there are infinitely many intervals of bounded length containing $m+1$ primes.',
    hint: 'More dimensions in the sieve = more freedom to find primes close together.',
    formulaLinks: ['prime-counting', 'calculus-of-variations'],
  },
];
