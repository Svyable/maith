import type { Question } from '../types';

export const sharafAlDinAlTusiQuestions: Question[] = [
  {
    id: 31830, topic: 'sharaf-al-din-al-tusi', difficulty: 'easy',
    question: 'Sharaf al-Din al-Tusi (c. 1135–1213) advanced the study of cubic equations beyond Omar Khayyam. What was his key innovation?',
    options: [
      'He analyzed the conditions under which cubic equations have positive real solutions — essentially studying when curves intersect — anticipating the concept of a discriminant and the use of derivatives to find maxima and minima.',
      'He found the general algebraic formula for solving cubic equations using radicals.',
      'He proved that cubic equations can have at most three real roots.',
      'He reduced all cubic equations to a single canonical form $x^3 + px + q = 0$.'
    ],
    correctIndex: 0,
    explanation: 'While Khayyam solved cubics geometrically (by conic intersections), al-Tusi went further: he asked *when* a cubic has solutions. He computed the maximum of auxiliary functions (effectively finding critical points) to determine when a parabola intersects a line — a proto-calculus approach to existence conditions for roots.',
    realWorld: 'His method of finding maxima to determine solution existence is essentially the discriminant analysis taught in algebra courses today. It anticipates Fermat\'s method of maxima and minima by 400 years.',
    hint: 'He didn\'t just solve cubics — he asked when they have solutions, using maximum-finding methods that preview calculus.',
  },
  {
    id: 31831, topic: 'sharaf-al-din-al-tusi', difficulty: 'hard',
    question: 'Sharaf al-Din al-Tusi invented a method for approximating roots of polynomial equations. What numerical technique did he develop?',
    options: [
      'An iterative method equivalent to Ruffini-Horner\'s algorithm: evaluating a polynomial by nested multiplication $P(x) = (\\cdots((a_n x + a_{n-1})x + a_{n-2})x + \\cdots)x + a_0$ and using it to successively refine decimal approximations of roots digit by digit.',
      'The bisection method: narrowing an interval containing a root by testing the midpoint.',
      'Newton\'s method: using the tangent line $x_{n+1} = x_n - f(x_n)/f\'(x_n)$ to converge to a root.',
      'The secant method: approximating the derivative by finite differences to find roots iteratively.'
    ],
    correctIndex: 0,
    explanation: 'Al-Tusi developed a systematic digit-by-digit root extraction method for polynomials of any degree. His algorithm uses nested (Horner) evaluation to efficiently compute polynomial values and systematically refine approximations. This is computationally identical to the Ruffini-Horner method — developed independently in Europe 600 years later.',
    realWorld: 'Horner\'s method remains the standard algorithm for polynomial evaluation in computer science — it minimizes the number of multiplications and is numerically stable. It\'s used in every computer algebra system.',
    hint: 'He evaluated polynomials using nested multiplication and extracted roots digit by digit — the same algorithm rediscovered by Horner.',
  },
  {
    id: 31832, topic: 'sharaf-al-din-al-tusi', difficulty: 'sota',
    question: 'Sharaf al-Din al-Tusi\'s analysis of cubic equations effectively used the concept of a function\'s maximum. How did his approach anticipate differential calculus?',
    options: [
      'For cubics like $x^3 + d = bx^2$, he rewrote the existence condition as $f(x) = bx^2 - x^3 \\geq d$ and found the maximum of $f(x)$ by solving $f\'(x) = 2bx - 3x^2 = 0$, yielding $x = 2b/3$. He then checked $f(2b/3) \\geq d$ — effectively computing a derivative and evaluating a discriminant condition.',
      'He computed the tangent line to a parabola at an arbitrary point using the limit of secant lines.',
      'He defined the integral of a cubic polynomial as the area under the curve, computing it as $\\frac{1}{4}x^4$.',
      'He proved the mean value theorem for cubic polynomials: between two roots, the derivative must vanish.'
    ],
    correctIndex: 0,
    explanation: 'Al-Tusi\'s analysis is remarkably close to calculus. He found the maximum of $f(x) = bx^2 - x^3$ by what amounts to setting the derivative to zero: $2bx - 3x^2 = 0 \\Rightarrow x = 2b/3$. He then compared $f(2b/3) = 4b^3/27$ to $d$ to determine if the cubic has solutions. This is a complete discriminant analysis — 400 years before Cardano and 500 years before Fermat.',
    realWorld: 'His work demonstrates that key ideas of calculus (optimization, critical points, existence conditions) were developing in the Islamic mathematical tradition centuries before their "official" European discovery.',
    hint: 'He found where a cubic function reaches its peak by solving what amounts to setting its derivative equal to zero.',
  },
];
