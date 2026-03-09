import type { Question } from '../types';

export const abulWafaAlBuzjaniQuestions: Question[] = [
  {
    id: 31720, topic: 'abul-wafa-al-buzjani', difficulty: 'easy',
    question: 'Abu\'l-Wafa al-Buzjani (940–998) revolutionized trigonometry. Which trigonometric functions did he introduce?',
    options: [
      'The tangent, cotangent, secant, and cosecant functions — completing the six standard trigonometric functions and creating the first comprehensive trigonometric tables using all six.',
      'The sine and cosine functions — translating the Indian "jya" and "kojya" into Arabic mathematics.',
      'The hyperbolic sine and cosine functions — extending circular trigonometry to hyperbolas.',
      'The inverse trigonometric functions (arcsin, arccos, arctan) — enabling angle computation from ratios.'
    ],
    correctIndex: 0,
    explanation: 'While sine and cosine were inherited from Indian mathematics, Abu\'l-Wafa defined $\\tan\\theta = \\sin\\theta/\\cos\\theta$, $\\cot\\theta = \\cos\\theta/\\sin\\theta$, $\\sec\\theta = 1/\\cos\\theta$, and $\\csc\\theta = 1/\\sin\\theta$. He also proved the addition formula $\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b$.',
    realWorld: 'These six functions and the addition formulas are the foundation of all trigonometry taught today — from high school math to signal processing and computer graphics.',
    hint: 'He completed the family of six trig functions by defining four new ratios from sine and cosine.',
  },
  {
    id: 31721, topic: 'abul-wafa-al-buzjani', difficulty: 'hard',
    question: 'Abu\'l-Wafa proved the sine addition formula. What is this formula and how did he derive it?',
    options: [
      '$\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b$. He derived it geometrically by inscribing angles in a circle of radius $R$ and computing the chord of the sum angle using the law of projection, relating the vertical projections of two combined rotations.',
      '$\\sin(a+b) = \\sin a + \\sin b - \\sin a \\sin b$. He derived it algebraically from the Taylor series expansion of sine.',
      '$\\sin(a+b) = \\frac{\\tan a + \\tan b}{1 + \\tan a \\tan b}$. He derived it from the definition of tangent as opposite over adjacent.',
      '$\\sin(a+b) = 2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}$. He derived it by factor analysis of the product-to-sum formulas.'
    ],
    correctIndex: 0,
    explanation: 'Abu\'l-Wafa\'s geometric proof uses a unit circle construction. For angles $a$ and $b$, he projects the endpoints of arcs onto each other, decomposing $\\sin(a+b)$ into two rectangular components. This elegant proof was more rigorous than Ptolemy\'s chord-based approach and established the template for all subsequent trigonometric identity proofs.',
    realWorld: 'The sine addition formula is the most important identity in trigonometry — it underlies Fourier analysis, complex exponentials ($e^{i\\theta}$), and all of signal processing.',
    hint: 'He decomposed the sine of a sum into products of sines and cosines of the individual angles using circle geometry.',
  },
  {
    id: 31722, topic: 'abul-wafa-al-buzjani', difficulty: 'sota',
    question: 'Abu\'l-Wafa constructed trigonometric tables with unprecedented precision. What innovations enabled his accuracy?',
    options: [
      'He computed $\\sin(30\')$ (sine of half a degree) to 8 decimal places using iterative bisection formulas: $\\sin(\\theta/2) = \\sqrt{\\frac{1-\\cos\\theta}{2}}$ and $\\cos\\theta = 1 - 2\\sin^2(\\theta/2)$, building complete tables at 15\' intervals. He also introduced interpolation methods for intermediate values.',
      'He used infinite series $\\sin x = x - x^3/3! + x^5/5! - \\cdots$ to compute values to arbitrary precision.',
      'He measured shadows cast by gnomons at precisely timed solar positions, averaging hundreds of observations.',
      'He constructed mechanical analog computers with graduated brass wheels that could compute trigonometric values by physical measurement.'
    ],
    correctIndex: 0,
    explanation: 'Abu\'l-Wafa used the half-angle and double-angle formulas recursively: starting from known values like $\\sin 30° = 1/2$, he repeatedly bisected to get $\\sin 15°$, $\\sin 7.5°$, etc. His interpolation between table entries used second-order corrections. His tables were accurate to about $10^{-8}$ — not surpassed in Europe for centuries.',
    realWorld: 'Trigonometric table computation using recursive identities is the ancestor of modern numerical algorithms like CORDIC, used in every calculator and CPU for evaluating trig functions in hardware.',
    hint: 'Halving angles recursively using double-angle formulas — starting from a known value and subdividing to extreme precision.',
  },
];
