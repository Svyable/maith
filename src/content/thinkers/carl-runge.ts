import type { Question } from '../types';

export const rungeQuestions: Question[] = [
  {
    id: 9510,
    topic: 'carl-runge',
    difficulty: 'sota',
    question: 'The classical RK4 method $y_{n+1} = y_n + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$ has a local truncation error of order:',
    options: [
      '$O(h^5)$',
      '$O(h^4)$',
      '$O(h^3)$',
      '$O(h^2)$',
    ],
    correctIndex: 0,
    explanation: 'RK4 is a 4th-order method, meaning the local truncation error per step is $O(h^5)$ and the global error accumulates to $O(h^4)$ over the integration interval.',
    realWorld: 'RK4 was the workhorse of NASA\'s Apollo trajectory calculations and remains the default ODE solver in many engineering applications due to its excellent accuracy-per-evaluation ratio.',
    hint: 'For an $n$th-order method, the local error is one order higher than the global error.',
  },
  {
    id: 9511,
    topic: 'carl-runge',
    difficulty: 'sota',
    question: 'Runge\'s phenomenon demonstrates that polynomial interpolation on equally-spaced nodes for $f(x) = \\frac{1}{1+25x^2}$:',
    options: [
      'Diverges wildly near the interval endpoints as degree increases',
      'Converges uniformly to the function',
      'Oscillates only at the center of the interval',
      'Produces the best polynomial approximation',
    ],
    correctIndex: 0,
    explanation: 'Equally-spaced interpolation points cause massive oscillations near the boundaries. The Lebesgue constant grows exponentially, making high-degree interpolation useless. Chebyshev nodes fix this.',
    realWorld: 'This phenomenon motivated the development of spline interpolation and Chebyshev spectral methods used in modern computational physics and computer graphics.',
    hint: 'The problem is worst at the edges of the interval — think about where equally-spaced nodes cluster poorly.',
  },
  {
    id: 9512,
    topic: 'carl-runge',
    difficulty: 'sota',
    question: 'An explicit Runge-Kutta method is A-stable (unconditionally stable for stiff ODEs) when:',
    options: [
      'Never — explicit RK methods cannot be A-stable',
      'The method has at least 4 stages',
      'The step size $h < 2/|\\lambda|$',
      'The Butcher tableau is symmetric',
    ],
    correctIndex: 0,
    explanation: 'The Dahlquist barrier shows no explicit method can be A-stable. Explicit RK methods have bounded stability regions, requiring small step sizes for stiff problems. Implicit methods (like backward Euler or SDIRK) are needed.',
    realWorld: 'Chemical kinetics, circuit simulation, and climate models involve stiff equations where implicit solvers are essential despite their higher per-step computational cost.',
    hint: 'Think about whether explicit methods can handle arbitrarily stiff problems without step size restrictions.',
  },
];
