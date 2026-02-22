import type { Question } from '../types';

export const vanCeulenQuestions: Question[] = [
  {
    id: 11031,
    topic: 'van-ceulen',
    difficulty: 'easy',
    question: 'Which method did Ludolph van Ceulen use to approximate $\\pi$ to 35 decimal places?',
    options: [
      'The Archimedean polygon method — computing perimeters of inscribed and circumscribed regular polygons with billions of sides',
      'An infinite series expansion of $\\arctan(1)$',
      'A Monte Carlo simulation with random points in a square',
      'Continued fraction expansions of $\\sqrt{10}$',
    ],
    correctIndex: 0,
    explanation: 'Van Ceulen (1596–1610) used polygons with $2^{62}$ sides (over 4 quintillion), computing by hand for decades. He extended Archimedes\' method to achieve 35 digits — so impressive that $\\pi$ was called the "Ludolphine number" in Germany for centuries.',
    realWorld: 'Van Ceulen\'s 35 digits were engraved on his tombstone in Leiden. His computational stamina was unmatched until mechanical calculators arrived.',
    hint: 'More polygon sides = closer to a circle. He took this to an extreme with $2^{62}$ sides.',
  },
  {
    id: 11032,
    topic: 'van-ceulen',
    difficulty: 'hard',
    question: 'Van Ceulen\'s polygon method converges to $\\pi$ at what rate?',
    options: [
      'Linearly — doubling the number of polygon sides roughly doubles the number of correct digits (error $\\sim 1/n^2$ for an $n$-gon)',
      'Quadratically — each iteration squares the number of correct digits',
      'Logarithmically — each doubling adds only one bit of accuracy',
      'Exponentially — the error decreases as $2^{-2^n}$ after $n$ doublings',
    ],
    correctIndex: 0,
    explanation: 'For a regular $n$-gon, the perimeter approximation error is $O(1/n^2)$. Doubling $n$ reduces error by factor 4, giving about 2 extra binary digits per doubling. Van Ceulen needed 62 doublings (starting from a square) for 35 decimal digits — brutally slow but reliable.',
    realWorld: 'This quadratic convergence in $n$ is equivalent to linear convergence in doublings. Modern AGM-based algorithms achieve quadratic convergence in iterations — exponentially faster.',
    hint: 'A $2n$-gon is about 4× more accurate than an $n$-gon — that\'s $O(1/n^2)$ convergence.',
  },
  {
    id: 11033,
    topic: 'van-ceulen',
    difficulty: 'sota',
    question: 'Van Ceulen\'s computation used the recurrence for polygon side lengths. For a regular $2n$-gon inscribed in a unit circle with side $s_n$ for the $n$-gon, the doubling formula is:',
    options: [
      '$s_{2n} = \\sqrt{2 - \\sqrt{4 - s_n^2}}$ — derived from the half-angle formula applied to the chord length',
      '$s_{2n} = s_n / 2$ — simple bisection of each side',
      '$s_{2n} = 2s_n / (1 + \\sqrt{1 + s_n^2})$ — from the tangent half-angle substitution',
      '$s_{2n} = s_n \\cdot \\cos(\\pi/n)$ — projection onto the bisecting radius',
    ],
    correctIndex: 0,
    explanation: 'If the $n$-gon has side $s_n = 2\\sin(\\pi/n)$, then $s_{2n} = 2\\sin(\\pi/2n)$. Using $\\sin(\\theta/2) = \\sqrt{(1-\\cos\\theta)/2}$ and $\\cos\\theta = \\sqrt{1 - \\sin^2\\theta}$, we get the nested radical recurrence. Van Ceulen iterated this by hand with enormous precision arithmetic.',
    realWorld: 'This recurrence is numerically unstable for large $n$ due to catastrophic cancellation in $2 - \\sqrt{4 - s_n^2}$ when $s_n \\to 0$. Modern implementations use reformulated versions to avoid this.',
    hint: 'The chord of a $2n$-gon relates to the chord of an $n$-gon via the half-angle formula for sine.',
  },
];
