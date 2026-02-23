import type { Question } from '../types';

export const bhaskaraQuestions: Question[] = [
  {
    id: 9601,
    topic: 'bhaskara',
    difficulty: 'sota',
    question: 'Bhāskara II\'s concept of instantaneous velocity (tātkālika gati) computed the derivative of $\\sin\\theta$ using:',
    options: [
      'The limit $\\lim_{\\Delta\\theta \\to 0} \\frac{\\sin(\\theta+\\Delta\\theta)-\\sin\\theta}{\\Delta\\theta} = \\cos\\theta$',
      'Finite differences with $\\Delta\\theta = 1°$',
      'Taylor series truncation at second order',
      'Geometric construction with chords only',
    ],
    correctIndex: 0,
    explanation: 'In Siddhānta Śiromaṇi (1150 CE), Bhāskara II described computing instantaneous velocity by taking vanishingly small time intervals — essentially the derivative $d(\\sin\\theta)/d\\theta = \\cos\\theta$, predating Newton and Leibniz by 500 years.',
    realWorld: 'This proto-calculus was used to compute accurate planetary positions and eclipse timings, enabling precise Indian astronomical calendars that rivaled anything in medieval Europe.',
    hint: 'He computed the rate of change of the sine function by shrinking the increment until the "remainder vanished."',
  },
  {
    id: 9602,
    topic: 'bhaskara',
    difficulty: 'sota',
    question: 'Bhāskara II\'s chakravāla method solves Pell\'s equation $x^2 - Ny^2 = 1$ by:',
    options: [
      'A cyclic algorithm that reduces the auxiliary equation until the right side equals 1',
      'Brute force enumeration of all integer pairs',
      'Continued fraction expansion of $\\sqrt{N}$',
      'Matrix exponentiation of a companion matrix',
    ],
    correctIndex: 0,
    explanation: 'The chakravāla ("cyclic") method iteratively applies the identity $(x_1^2-Ny_1^2)(x_2^2-Ny_2^2) = (x_1x_2+Ny_1y_2)^2 - N(x_1y_2+x_2y_1)^2$ to reduce the auxiliary constant until it reaches ±1, then adjusts to +1.',
    realWorld: 'Bhāskara solved $x^2 - 61y^2 = 1$ finding $x = 1766319049$, $y = 226153980$ — a feat not matched in Europe until Euler, 600 years later.',
    hint: 'The name means "cyclic" — the method loops, reducing a companion constant at each step.',
  },
  {
    id: 9603,
    topic: 'bhaskara',
    difficulty: 'sota',
    question: 'In Līlāvatī, Bhāskara II\'s approximation for $\\sin\\theta$ (in degrees) is:',
    options: [
      '$\\sin\\theta \\approx \\frac{4\\theta(180-\\theta)}{40500-\\theta(180-\\theta)}$',
      '$\\sin\\theta \\approx \\theta - \\theta^3/6$',
      '$\\sin\\theta \\approx \\theta/90$',
      '$\\sin\\theta \\approx 2\\theta/180$ for $\\theta < 90$',
    ],
    correctIndex: 0,
    explanation: 'This rational approximation achieves remarkable accuracy (max error < 0.0016) using only basic arithmetic — no tables or series needed. It\'s a Padé-like approximant discovered 800 years before Padé.',
    realWorld: 'This formula was practical for medieval astronomers and navigators who needed sine values without access to printed tables or computing devices.',
    hint: 'It\'s a rational function (fraction of polynomials) — more accurate than a simple polynomial approximation.',
  },
];
