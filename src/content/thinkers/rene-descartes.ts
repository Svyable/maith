import type { Question } from '../types';

export const descartesQuestions: Question[] = [
  {
    id: 31030,
    topic: 'descartes',
    difficulty: 'easy',
    question: 'What profound mathematical unification was achieved when René Descartes introduced the Cartesian coordinate system?',
    options: [
      'It allowed geometric shapes to be expressed as algebraic equations, merging two previously distinct fields.',
      'It proved that all irrational numbers could be represented as finite geometric fractions on a linear plane.',
      'It established that trigonometric functions could be perfectly mapped to the harmonic ratios of musical scales.',
      'It provided the first rigorous proof that three-dimensional space obeys non-Euclidean parallel postulates.'
    ],
    correctIndex: 0,
    explanation: 'Before Descartes, algebra and geometry were completely separate disciplines. By creating a coordinate grid, Descartes showed that algebraic equations (like y = x^2) could be drawn as geometric shapes (a parabola), and vice-versa.',
    realWorld: 'Every graph, 3D rendering engine, and GPS tracking system on Earth fundamentally relies on Cartesian coordinates to map data to physical space.',
    hint: 'He took the numbers and letters of algebra and gave them a physical shape on a grid.',
  },
  {
    id: 31031,
    topic: 'descartes',
    difficulty: 'hard',
    question: 'Descartes\' "Rule of Signs" provides a highly efficient method for determining what specific property of a polynomial?',
    options: [
      'The maximum possible number of positive and negative real roots based on coefficient sign changes.',
      'The exact geometric location of the polynomial\'s global maxima and minima on a continuous curve.',
      'The presence of complex conjugate roots by isolating the discriminant of the polynomial\'s derivative.',
      'The prime factorization of the polynomial\'s constant term using modular arithmetic progression.'
    ],
    correctIndex: 0,
    explanation: 'Descartes discovered that simply by counting how many times the algebraic signs (+ to -, or - to +) change in a polynomial, you can determine the maximum number of positive real roots the equation possesses.',
    realWorld: 'This rule provides an instant, computationally cheap sanity check for algorithms trying to solve highly complex engineering equations.',
    hint: 'It does not tell you exactly where the answers are, but it tells you how many you should be looking for.',
  },
  {
    id: 31032,
    topic: 'descartes',
    difficulty: 'sota',
    question: 'In studying algebraic curves, Descartes proposed the "Folium of Descartes" specifically to challenge which contemporary mathematical rival?',
    options: [
      'Pierre de Fermat, to test his newly developed mathematical method for finding tangent lines to curves.',
      'Blaise Pascal, to demonstrate the inherent logical flaws in his newly proposed geometric probability theory.',
      'Isaac Newton, to definitively prove that his fluxions were mathematically inferior to algebraic geometry.',
      'Galileo Galilei, to show that planetary orbital mechanics could not be modeled by simple parabolic arcs.'
    ],
    correctIndex: 0,
    explanation: 'Fermat had just developed a rudimentary form of differential calculus to find maximums and tangents. Descartes, skeptical of his rival, proposed the Folium equation (x^3 + y^3 - 3axy = 0) as a deliberate trap because its looped shape made finding tangents incredibly difficult.',
    realWorld: 'Fermat successfully solved it, marking a massive early victory for what would eventually become modern calculus.',
    hint: 'He was trying to break the mathematical tools of the man famous for his "Last Theorem."',
  },
  {
    id: 31033,
    topic: 'descartes',
    difficulty: 'hard',
    question: 'While mathematically brilliant, Descartes\' physical laws of motion contained a critical flaw regarding the conservation of movement. What did he incorrectly assert?',
    options: [
      'He believed that the total scalar quantity of motion ($m \\times |v|$) is conserved, ignoring directional velocity.',
      'He assumed that objects in a vacuum would immediately stop moving unless propelled by a continuous force.',
      'He stated that angular momentum could be converted linearly into mass during highly inelastic collisions.',
      'He argued that planetary bodies move in perfect circles because circular motion is the only conserved state.'
    ],
    correctIndex: 0,
    explanation: 'Descartes defined the "quantity of motion" simply as mass times speed, completely ignoring the direction of the object. It took later physicists like Newton to define momentum as a vector (mass times velocity), where opposite directions can cancel each other out.',
    realWorld: 'Without vector momentum, the physics of car crashes, rocket launches, and billiard ball collisions cannot be accurately calculated.',
    hint: 'He thought speed was enough, failing to realize that moving left is the mathematical opposite of moving right.',
  },
  {
    id: 31034,
    topic: 'descartes',
    difficulty: 'easy',
    question: 'Legend has it that Descartes invented his famous coordinate system while lying in bed, observing what specific creature moving across his ceiling?',
    options: [
      'A fly, realizing its exact position could be mapped using just two intersecting perpendicular lines.',
      'A spider, noting how the geometric angles of its web exactly corresponded to algebraic integer sequences.',
      'A moth, observing how its spiral flight path toward a candle could be perfectly mapped via polar equations.',
      'A beetle, noticing that its crawling pattern precisely matched the Fibonacci sequence of golden rectangles.'
    ],
    correctIndex: 0,
    explanation: 'The popular legend claims a sickly Descartes was lying in bed watching a fly on his tiled ceiling. He realized he could perfectly describe the fly\'s position at any given moment by measuring its distance from two adjacent walls (the x and y axes).',
    realWorld: 'While likely apocryphal, it is the perfect pedagogical story to teach children how a 2D coordinate plane works.',
    hint: 'He just needed to measure how far the insect was from the top wall and the side wall.',
  }
];