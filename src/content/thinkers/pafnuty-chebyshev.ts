import type { Question } from '../types';

export const chebyshevQuestions: Question[] = [
  {
    id: 31110,
    topic: 'chebyshev',
    difficulty: 'easy',
    question: 'Chebyshev\'s Inequality is a fundamental theorem in probability. What highly universal guarantee does the formula $P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$ provide?',
    options: [
      'It guarantees that no more than $1/k^2$ of a dataset\'s values can be more than $k$ standard deviations away from the mean, absolutely regardless of the underlying distribution shape.',
      'It guarantees that any dataset with a finite variance will inevitably converge to a perfectly symmetric Gaussian normal curve as the sample size approaches infinity.',
      'It dictates that the probability of a random variable matching the exact mean strictly scales inversely with the square of the standard deviation.',
      'It proves that in any infinite sequence of independent binary coin flips, the ratio of heads to tails will strictly converge to exactly $0.5$ within a bounded error margin.'
    ],
    correctIndex: 0,
    explanation: 'Chebyshev\'s Inequality is magical because it does not care if your data is skewed, bimodal, or totally chaotic. As long as you know the mean ($\\mu$) and standard deviation ($\\sigma$), it guarantees that at least $75\\%$ of the data falls within 2 standard deviations, and at least $88.8\\%$ falls within 3 standard deviations.',
    realWorld: 'This is the absolute bedrock of statistical quality control, allowing factories and data scientists to establish extreme safety margins without needing to know exactly how the underlying chaos is distributed.',
    hint: 'It works for literally any shape of data, giving you a strict, unbreakable mathematical ceiling for outliers.',
  },
  {
    id: 31111,
    topic: 'chebyshev',
    difficulty: 'hard',
    question: 'Chebyshev polynomials of the first kind, $T_n(x)$, are defined by the relation $T_n(\\cos \\theta) = \\cos(n\\theta)$. Under which highly specific weight function $w(x)$ do these polynomials form an orthogonal basis on the interval $[-1, 1]$?',
    options: [
      '$w(x) = \\frac{1}{\\sqrt{1 - x^2}}$',
      '$w(x) = e^{-x^2}$',
      '$w(x) = 1 - x^2$',
      '$w(x) = \\ln\\left(\\frac{1+x}{1-x}\\right)$'
    ],
    correctIndex: 0,
    explanation: 'Orthogonal polynomials are like the primary colors of mathematics—you can build any curve by mixing them. Chebyshev polynomials are strictly orthogonal with respect to the weight function $\\frac{1}{\\sqrt{1-x^2}}$. This weight places massive mathematical importance on the outer edges of the $[-1, 1]$ interval.',
    realWorld: 'Because they distribute errors evenly, the roots of Chebyshev polynomials (Chebyshev nodes) are heavily used in computer interpolation to prevent the wild, unstable swinging oscillations that plague standard polynomial curve-fitting (Runge\'s phenomenon).',
    hint: 'The function mathematically "blows up" to infinity exactly at the edges where $x=1$ and $x=-1$.',
  },
  {
    id: 31112,
    topic: 'chebyshev',
    difficulty: 'easy',
    question: 'Before the Prime Number Theorem was fully proven, Chebyshev successfully proved "Bertrand\'s Postulate" regarding prime distribution. What does this postulate strictly guarantee?',
    options: [
      'For any integer $n > 3$, there always exists at least one strictly prime number $p$ such that $n < p < 2n-2$.',
      'The geometric gap between any two sequential prime numbers will never mathematically exceed the natural logarithm of the larger prime.',
      'Every even integer greater than 2 can be expressed perfectly as the summation of exactly two prime numbers.',
      'The mathematical density of prime numbers strictly approaches exactly zero as the evaluated integers approach infinity.'
    ],
    correctIndex: 0,
    explanation: 'Chebyshev used powerful new combinatorial methods to prove that if you take any number $n$, you are mathematically guaranteed to find at least one prime number hiding between $n$ and double its size ($2n$).',
    realWorld: 'This theorem is incredibly useful in cryptography, ensuring that algorithmic searches for prime numbers (used in RSA encryption) are guaranteed to find one within a strict, highly predictable mathematical boundary.',
    hint: 'If you double any number, there is always at least one prime number trapped in the gap between them.',
  },
  {
    id: 31113,
    topic: 'chebyshev',
    difficulty: 'sota',
    question: 'Chebyshev\'s Equioscillation Theorem defines the absolute mathematically "best" polynomial approximation for a continuous function. What must the maximum error bound do to satisfy this theorem?',
    options: [
      'The maximum absolute error must strictly alternate in sign (equioscillate) exactly $n+2$ times across the interval for a polynomial of degree $n$.',
      'The total integrated sum of the absolute continuous error must be precisely zero, perfectly balancing the area above and below the curve.',
      'The maximum magnitude of the local error must exponentially decay to zero strictly within the center $50\\%$ of the bounded evaluation interval.',
      'The error must form a strictly continuously differentiable function that possesses exactly one distinct global maximum and minimum.'
    ],
    correctIndex: 0,
    explanation: 'Chebyshev wanted to minimize the absolute worst-case error of an approximation (minimax). He proved that the optimal polynomial is achieved when the error curve oscillates wildly—hitting the maximum positive error, then the maximum negative error, exactly $n+2$ times. The error is perfectly distributed.',
    realWorld: 'This exact theorem is utilized by the Remez algorithm, which writes the highly optimized math libraries (like `sin()` and `cos()`) hardcoded into the silicon of every modern CPU.',
    hint: 'The optimal fit is the one where the error wobbles back and forth, hitting the absolute ceiling and floor repeatedly.',
  },
  {
    id: 31114,
    topic: 'chebyshev',
    difficulty: 'hard',
    question: 'Beyond pure probability and number theory, Chebyshev was obsessed with mechanical kinematics. He specifically invented the "Chebyshev linkage" to solve what profound industrial engineering problem?',
    options: [
      'Converting continuous rotational motion from a steam engine into highly accurate, approximate straight-line motion.',
      'Creating a perfect mathematically continuous variable transmission for early frictionless locomotives.',
      'Designing a centrifugal governor that mathematically prevented physical engines from exceeding their stress limits.',
      'Building a geared mechanical differential that mathematically decoupled the velocity of opposing wheels.'
    ],
    correctIndex: 0,
    explanation: 'Steam engines require pistons that move in perfect straight lines, but engines spin in circles. Because a mathematically perfect straight-line linkage requires massive complexity, Chebyshev invented a simple four-bar linkage that uses his polynomial optimization theory to produce a path that is "straight enough" for heavy machinery.',
    realWorld: 'His obsession with optimizing these linkages directly led him to invent the orthogonal Chebyshev polynomials, beautifully demonstrating how pure mathematical algebra can be born directly from gritty mechanical engineering.',
    hint: 'He needed to turn the spinning of a wheel into the pushing of a straight rod.',
  }
];