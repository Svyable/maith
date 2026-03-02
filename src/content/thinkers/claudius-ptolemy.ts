import type { Question } from '../types';

export const ptolemyQuestions: Question[] = [
  {
    id: 11051,
    topic: 'claudius-ptolemy',
    difficulty: 'easy',
    question: 'Ptolemy\'s Almagest tabulated which function to approximate chords and $\\pi$?',
    options: [
      'A chord table — equivalent to $\\text{crd}(\\theta) = 2\\sin(\\theta/2)$ — giving chord lengths for angles in half-degree increments',
      'A tangent table for angles from 0° to 90°',
      'A table of arc lengths parameterised by central angle',
      'A table of polygon perimeters for regular $n$-gons',
    ],
    correctIndex: 0,
    explanation: 'Ptolemy\'s chord table (c. 150 AD) is effectively a sine table: $\\text{crd}(\\theta) = 2R\\sin(\\theta/2)$ for a circle of radius $R = 60$. He computed chords for every 0.5° using Ptolemy\'s theorem and obtained $\\pi \\approx 3.14166$ — accurate to 4 digits.',
    realWorld: 'Ptolemy\'s chord tables were the standard reference for astronomy and navigation for over 1000 years, used by Islamic and European astronomers until modern trigonometric tables replaced them.',
    hint: 'Before sine tables existed, astronomers used chord tables — the chord of an angle in a circle.',
  },
  {
    id: 11052,
    topic: 'claudius-ptolemy',
    difficulty: 'hard',
    question: 'Ptolemy\'s theorem states that for a cyclic quadrilateral with sides $a, b, c, d$ and diagonals $p, q$:',
    options: [
      '$pq = ac + bd$ — the product of diagonals equals the sum of products of opposite sides',
      '$p^2 + q^2 = a^2 + b^2 + c^2 + d^2$ — the sum of squared diagonals equals the sum of squared sides',
      '$p + q = a + c = b + d$ — diagonals sum equals opposite side sums',
      '$pq = \\frac{1}{2}(a+c)(b+d)$ — product of diagonals is half the product of opposite side sums',
    ],
    correctIndex: 0,
    explanation: 'Ptolemy\'s theorem is one of the most elegant results in geometry. For a quadrilateral inscribed in a circle: $|AC| \\cdot |BD| = |AB| \\cdot |CD| + |AD| \\cdot |BC|$. It directly implies the angle addition formulas for sine and cosine.',
    realWorld: 'Ptolemy used this theorem to build his chord tables systematically — the addition formula $\\sin(\\alpha \\pm \\beta)$ is essentially Ptolemy\'s theorem applied to specific cyclic quadrilaterals.',
    hint: 'It relates all six distances in a cyclic quadrilateral: four sides and two diagonals.',
  },
  {
    id: 11053,
    topic: 'claudius-ptolemy',
    difficulty: 'sota',
    question: 'Ptolemy\'s theorem can be used to derive:',
    options: [
      'The sine and cosine addition formulas: $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ by choosing specific cyclic quadrilaterals',
      'The law of cosines for arbitrary triangles',
      'Heron\'s formula for the area of a triangle',
      'The formula for the circumradius $R = abc/(4K)$ of a triangle',
    ],
    correctIndex: 0,
    explanation: 'Inscribe a quadrilateral in a unit circle with vertices at angles $0, \\alpha, \\alpha+\\beta, \\pi$. The chord lengths become sines and cosines of $\\alpha$ and $\\beta$. Applying Ptolemy\'s theorem yields the addition formula directly — this is how Ptolemy derived his chord table entries.',
    realWorld: 'The addition formulas are the backbone of signal processing (modulation, demodulation), quantum mechanics (rotation operators), and GPS satellite positioning.',
    hint: 'Choose the four points on the circle carefully so that the chords become trigonometric functions of $\\alpha$ and $\\beta$.',
  },
];
