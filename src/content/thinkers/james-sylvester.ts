import type { Question } from '../types';

export const sylvesterQuestions: Question[] = [
  {
    id: 31065,
    topic: 'sylvester',
    difficulty: 'easy',
    question: 'James Joseph Sylvester was a prolific coiner of mathematical terminology. Which of the following fundamental terms did he *not* invent?',
    options: [
      'Vector',
      'Matrix',
      'Graph',
      'Discriminant'
    ],
    correctIndex: 0,
    explanation: 'Sylvester coined "Matrix" (from the Latin for womb, as it holds numbers), "Graph" (in the mathematical node/edge sense), and "Discriminant." "Vector" was famously coined by William Rowan Hamilton.',
    realWorld: 'Sylvester believed that creating beautiful, highly specific language was absolutely essential for advancing complex mathematical thought.',
    hint: 'This word was invented by the man who carved the quaternion formula into a bridge.',
  },
  {
    id: 31066,
    topic: 'sylvester',
    difficulty: 'hard',
    question: 'Sylvester\'s "Law of Inertia" applies to real quadratic forms. What specific mathematical property does it prove remains constant, regardless of how the coordinate basis is changed?',
    options: [
      'The number of positive, negative, and zero coefficients when the form is diagonalized (its signature).',
      'The absolute determinant of the transformation matrix used to manipulate the quadratic form.',
      'The total geometric area enclosed by the quadratic shape when plotted in multi-dimensional space.',
      'The sequence of prime numbers generated when evaluating the roots of the quadratic equation.'
    ],
    correctIndex: 0,
    explanation: 'Sylvester proved that no matter what non-singular linear transformations you apply to a quadratic form, the number of positive coefficients, negative coefficients, and zeroes (the "signature") will never change.',
    realWorld: 'This law is a cornerstone of topology and differential geometry, defining the invariant structure of multidimensional spaces, including the 4D spacetime used in General Relativity.',
    hint: 'It guarantees that the "count" of positive and negative dimensions never fluctuates during a transformation.',
  },
  {
    id: 31067,
    topic: 'sylvester',
    difficulty: 'sota',
    question: 'The "Sylvester matrix" is a powerful algebraic construct. What highly specific calculation is it primarily used to determine between two polynomials?',
    options: [
      'The resultant, which mathematically dictates whether the two polynomials share a common root.',
      'The Jacobian, which evaluates the local derivative transformation matrix of the two functions.',
      'The Wronskian, which tests if the two polynomials are strictly linearly independent.',
      'The Hessian, which maps the multivariable critical inflection points of the combined functions.'
    ],
    correctIndex: 0,
    explanation: 'The Sylvester matrix is constructed from the coefficients of two polynomials. If the determinant of this matrix (the "resultant") is exactly zero, it proves mathematically that the two polynomials share at least one common root.',
    realWorld: 'This matrix is heavily used in modern computer algebra systems (like Mathematica or Maple) to eliminate variables when solving massive systems of polynomial equations.',
    hint: 'It is a mathematical test to see if two different curves intersect at zero at the exact same point.',
  },
  {
    id: 31068,
    topic: 'sylvester',
    difficulty: 'hard',
    question: 'Despite his absolute genius, Sylvester faced massive institutional discrimination during his early academic career. Why was he originally denied his degree and fellowships at Cambridge?',
    options: [
      'He was Jewish and refused to sign a mandatory religious oath of allegiance to the Church of England.',
      'He openly criticized the university\'s over-reliance on Newton\'s outdated geometric fluxion notation.',
      'He was an outspoken abolitionist whose political writings deeply angered the British aristocracy.',
      'He published a highly controversial paper claiming that non-Euclidean geometry was physically real.'
    ],
    correctIndex: 0,
    explanation: 'As a practicing Jew, Sylvester refused to subscribe to the Thirty-Nine Articles of the Church of England. Because of this, Cambridge allowed him to take the grueling Tripos exam (where he placed second), but outright refused to award him his degree or grant him a fellowship.',
    realWorld: 'He eventually moved to America, becoming the inaugural professor of mathematics at Johns Hopkins University and profoundly elevating the standards of American mathematics.',
    hint: 'He refused to compromise his personal religious identity to appease the British academic establishment.',
  },
  {
    id: 31069,
    topic: 'sylvester',
    difficulty: 'hard',
    question: 'In combinatorial geometry, Sylvester posed the famous "Orchard Problem" (now the Sylvester-Gallai theorem). What does this theorem state about a finite set of points in a plane, assuming not all points lie on a single straight line?',
    options: [
      'There must exist at least one line that passes through exactly two of the points.',
      'Every point can be connected to form a series of strictly non-overlapping triangles.',
      'The maximum number of intersections between lines drawn between the points is finite.',
      'There is at least one point from which all other points are equidistant.'
    ],
    correctIndex: 0,
    explanation: 'Sylvester hypothesized that if you plant an "orchard" of points, and they don\'t all lie on one single line, it is mathematically guaranteed that you can draw a line that hits exactly two points and misses all the others.',
    realWorld: 'Sylvester posed this in 1893, but it wasn\'t actually proven until 1944 by Tibor Gallai. It is a foundational concept in discrete geometry and incidence combinatorics.',
    hint: 'If you draw lines between every single dot, you are guaranteed to find at least one line that connects a pair and nothing else.',
  }
];