import type { Question } from '../types';

export const karlWeierstrassQuestions: Question[] = [
  {
    id: 31075,
    topic: 'karl-weierstrass',
    difficulty: 'easy',
    question: 'Karl Weierstrass is known as the "father of modern analysis" primarily for introducing which rigorous logical framework to calculus?',
    options: [
      'The $\\epsilon$-$\\delta$ (epsilon-delta) definition of limits, completely eliminating vague notions of infinitesimals.',
      'The concept of transfinite sets, allowing mathematicians to finally mathematically compare different sizes of infinity.',
      'The fundamental theorem of calculus, proving definitively that differentiation and integration are inverse operations.',
      'The use of complex imaginary numbers to stabilize and solve previously unsolvable real-world differential equations.'
    ],
    correctIndex: 0,
    explanation: 'Before Weierstrass, calculus relied on Newton and Leibniz\'s "infinitesimals"—numbers that were basically zero, but not quite zero. Weierstrass replaced this blurry logic with the $\\epsilon$-$\\delta$ definition, using strict inequalities to definitively prove how limits behave.',
    realWorld: 'Every university student taking advanced calculus or real analysis spends their first semester painfully learning how to write Weierstrass\'s $\\epsilon$-$\\delta$ proofs.',
    hint: 'He eliminated the "magic shrinking numbers" of early calculus and replaced them with strict, iron-clad logical boundaries.',
  },
  {
    id: 31076,
    topic: 'karl-weierstrass',
    difficulty: 'hard',
    question: 'In 1872, Weierstrass shocked the mathematical world by presenting the "Weierstrass function." What previously assumed mathematical rule did this bizarre function utterly destroy?',
    options: [
      'The belief that every continuous function must be differentiable almost everywhere.',
      'The assumption that an infinite sum of strictly positive numbers must eventually diverge to infinity.',
      'The geometric intuition that a continuous curve crossing the x-axis must have a definitively calculable root.',
      'The theorem stating that all polynomial equations must have at least one complex or real root.'
    ],
    correctIndex: 0,
    explanation: 'Mathematicians had assumed that if a curve was continuous (unbroken), it had to be smooth enough to draw a tangent line (differentiate) almost everywhere. The Weierstrass function is an infinitely jagged fractal—it is unbroken, but so spiky that it has a tangent line nowhere.',
    realWorld: 'This function terrified classical mathematicians, with Henri Poincaré calling it an "outrage against common sense." It paved the way for the discovery of fractal geometry a century later.',
    hint: 'It proved that a line can be connected everywhere, but smooth nowhere.',
  },
  {
    id: 31077,
    topic: 'karl-weierstrass',
    difficulty: 'sota',
    question: 'The Bolzano-Weierstrass theorem is a fundamental, load-bearing pillar of topology and real analysis. What does it mathematically guarantee about infinite sequences bounded in a finite space?',
    options: [
      'Every bounded infinite sequence in $\\mathbb{R}^n$ must contain at least one convergent subsequence.',
      'Every bounded sequence of real numbers will eventually repeat its values in a cyclical pattern.',
      'An infinite sequence confined to a finite interval will inevitably collapse into a single stationary point.',
      'A sequence that oscillates infinitely cannot have a rigorously defined maximum or minimum bound.'
    ],
    correctIndex: 0,
    explanation: 'The theorem states that if you have an infinite number of points trapped inside a finite box, they cannot all stay away from each other. They must eventually cluster around at least one specific limit point, creating a convergent subsequence.',
    realWorld: 'This theorem is heavily used in machine learning optimization proofs to guarantee that an algorithm will eventually converge on a solution rather than wandering aimlessly forever.',
    hint: 'If you trap an infinite amount of items in a tiny room, they are forced to bunch up somewhere.',
  },
  {
    id: 31078,
    topic: 'karl-weierstrass',
    difficulty: 'hard',
    question: 'Weierstrass also formulated a powerful approximation theorem. What does the Weierstrass Approximation Theorem explicitly state regarding continuous functions?',
    options: [
      'Any continuous function on a closed interval can be uniformly approximated as closely as desired by a polynomial.',
      'Every continuous waveform can be perfectly broken down into an infinite sum of alternating sine and cosine waves.',
      'A continuous function that crosses zero must be approximable by a strictly linear tangent line at the origin.',
      'Complex continuous functions can always be factored into exactly two distinct non-overlapping prime sub-functions.'
    ],
    correctIndex: 0,
    explanation: 'Weierstrass proved that no matter how weird or erratic a continuous function is on a closed interval, you can always build a simple polynomial ($ax^2 + bx + c...$) that hugs the curve as tightly as you want.',
    realWorld: 'Because computers can only execute basic arithmetic (addition and multiplication), they use polynomial approximations to calculate highly complex continuous functions like logarithms and exponentials.',
    hint: 'It guarantees that any wild curve can be faked using basic algebra.',
  },
  {
    id: 31079,
    topic: 'karl-weierstrass',
    difficulty: 'hard',
    question: 'Weierstrass suffered incredibly from what physical condition, which eventually forced him to teach his advanced university mathematics classes entirely from a sofa?',
    options: [
      'Severe bouts of vertigo and dizziness.',
      'Paralysis caused by contracted polio.',
      'Blindness resulting from severe cataracts.',
      'Extreme chronic pulmonary tuberculosis.'
    ],
    correctIndex: 0,
    explanation: 'Weierstrass suffered from extreme, chronic dizzy spells and vertigo. The condition became so debilitating that he could no longer stand at a blackboard. He would sit on a sofa in his classroom and dictate his brilliant mathematical proofs to a student who wrote them on the board.',
    realWorld: 'Despite his physical limitations, his lectures were legendary, and he became the mentor and Ph.D. advisor to Sofia Kovalevskaya, the first woman in modern Europe to earn a doctorate in mathematics.',
    hint: 'The world spun so much for him that he couldn\'t stand up to write.',
  }
];