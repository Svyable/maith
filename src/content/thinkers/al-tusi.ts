import type { Question } from '../types';

export const tusiQuestions: Question[] = [
  {
    id: 11071,
    topic: 'al-tusi',
    difficulty: 'easy',
    question: 'Nasir al-Din al-Tusi\'s greatest contribution to trigonometry was:',
    options: [
      'Treating trigonometry as an independent mathematical discipline separate from astronomy, and stating the law of sines for plane and spherical triangles',
      'Inventing the tangent function',
      'Creating the first sine table accurate to 10 decimal places',
      'Proving that $\\pi$ is irrational',
    ],
    correctIndex: 0,
    explanation: 'In his "Treatise on the Quadrilateral" (1260), al-Tusi presented trigonometry as a self-contained mathematical subject for the first time. He systematically proved the law of sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ for both planar and spherical triangles.',
    realWorld: 'The law of sines is essential for surveying, navigation, and GPS trilateration. Al-Tusi\'s framework became the basis for European trigonometry via translations.',
    hint: 'Before him, trigonometry was just a tool for astronomy — he made it mathematics in its own right.',
  },
  {
    id: 11072,
    topic: 'al-tusi',
    difficulty: 'hard',
    question: 'The "Tusi couple" is a geometric device where:',
    options: [
      'A small circle rolls inside a larger circle of twice its diameter, producing linear motion — converting circular to rectilinear motion',
      'Two interlocking gears of different sizes produce a variable-speed rotation',
      'Two concentric circles with different angular velocities model planetary epicycles',
      'A point on the rim of a rolling circle traces a cycloid curve',
    ],
    correctIndex: 0,
    explanation: 'If a circle of radius $r$ rolls inside a circle of radius $2r$, any point on the smaller circle moves back and forth along a diameter of the larger circle. Al-Tusi used this to model apparent linear planetary motion without Ptolemy\'s problematic equant.',
    realWorld: 'Copernicus may have been influenced by the Tusi couple — similar constructions appear in De Revolutionibus (1543). The device also appears in mechanical engineering as a hypocycloid mechanism.',
    hint: 'Roll a small circle inside one twice its size — a point on it moves in a straight line.',
  },
  {
    id: 11073,
    topic: 'al-tusi',
    difficulty: 'sota',
    question: 'Al-Tusi\'s spherical law of sines states that for a spherical triangle with sides $a, b, c$ (arcs) and opposite angles $A, B, C$:',
    options: [
      '$\\frac{\\sin a}{\\sin A} = \\frac{\\sin b}{\\sin B} = \\frac{\\sin c}{\\sin C}$ — the planar version with sides replaced by sines of arc lengths',
      '$\\cos a = \\cos b \\cos c + \\sin b \\sin c \\cos A$ — the spherical law of cosines',
      '$\\tan(a/2) = \\frac{\\sin(A/2)}{\\cos((B-C)/2)}$ — Napier\'s analogy',
      '$\\frac{a}{\\sin A} = 2R$ where $R$ is the radius of the circumscribed sphere',
    ],
    correctIndex: 0,
    explanation: 'On a unit sphere, sides are arcs measured in radians. The spherical law of sines replaces side lengths with $\\sin(\\text{arc})$. Al-Tusi proved this rigorously and used it for precise astronomical calculations — essential for converting between celestial coordinate systems.',
    realWorld: 'Spherical trigonometry is indispensable for navigation (great-circle routes), satellite tracking, and astronomy. Every flight path over long distances uses spherical trig.',
    hint: 'On a sphere, straight-line distances become arc lengths — take the sine of the arc instead.',
  },
];
