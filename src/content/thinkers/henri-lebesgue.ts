import type { Question } from '../types';

export const lebesgueQuestions: Question[] = [
  {
    id: 31070,
    topic: 'henri-lebesgue',
    difficulty: 'easy',
    question: 'Henri Lebesgue absolutely revolutionized calculus by generalizing the integral. Conceptually, how does the Lebesgue integral physically differ from the traditional Riemann integral?',
    options: [
      'It partitions the y-axis (the range) into intervals instead of the x-axis, grouping similar function values together regardless of where they appear.',
      'It exclusively calculates the volume under multi-dimensional abstract surfaces using highly complex vector projections.',
      'It totally ignores any points of discontinuity, assuming mathematically that the underlying curve must be smooth everywhere.',
      'It calculates the area by drawing a series of strictly tangent lines that envelope the curve, rather than using vertical rectangles.'
    ],
    correctIndex: 0,
    explanation: 'Riemann integration cuts the x-axis into vertical slices. Lebesgue famously compared his method to a merchant organizing coins: instead of counting them blindly as they come (Riemann), you sort the coins by value (y-axis) first, and then weigh them.',
    realWorld: 'This subtle shift in perspective allowed mathematicians to integrate insanely jagged, discontinuous functions that the traditional Riemann integral completely choked on.',
    hint: 'Riemann slices the graph vertically. Lebesgue slices the graph horizontally.',
  },
  {
    id: 31071,
    topic: 'henri-lebesgue',
    difficulty: 'hard',
    question: 'The Lebesgue integral relies entirely on the mathematical foundation of "Measure Theory." In this context, what is the exact Lebesgue measure of the set of all rational numbers on the real line?',
    options: [
      'Exactly zero, because the rational numbers form a countably infinite set with no continuous geometric length.',
      'Infinity, because there are infinitely many fractions hiding between any two given whole numbers.',
      'One, because the mathematical probability of randomly selecting a rational number in any given interval is absolute.',
      'Undefined, because rational numbers cannot be rigorously bounded by an ascending geometric sequence.'
    ],
    correctIndex: 0,
    explanation: 'Even though there is a rational number (fraction) between every real number, the set of rational numbers is "countable" (you can list them). In measure theory, the length (measure) of any single point is zero, and the sum of countably many zeroes is still zero.',
    realWorld: 'This proves that if you throw a dart at the number line, the probability of hitting a rational number is zero—the line is overwhelmingly dominated by irrational numbers.',
    hint: 'If you line up all the fractions in the universe, their total physical "length" is nothing.',
  },
  {
    id: 31072,
    topic: 'henri-lebesgue',
    difficulty: 'sota',
    question: 'Lebesgue\'s "Dominated Convergence Theorem" is a massive cornerstone of modern analysis. What highly useful mathematical manipulation does it strictly justify?',
    options: [
      'Swapping the order of a limit operator and an integral operator under certain bounded conditions.',
      'Taking the infinite sum of a strictly divergent series by assigning it a complex analytic continuation.',
      'Differentiating a wildly discontinuous fractal curve using advanced fractional measure spaces.',
      'Transforming a continuous time-domain signal into a discrete set of orthogonal frequency bins.'
    ],
    correctIndex: 0,
    explanation: 'In advanced mathematics, you often need to take the limit of an integral ( $\\lim \\int f_n$ ). The Dominated Convergence Theorem provides the strict rules for when you are legally allowed to pull the limit *inside* the integral ( $\\int \\lim f_n$ ) to make it easier to solve.',
    realWorld: 'This theorem is heavily used in probability theory and stochastic calculus to prove that sequences of random variables behave predictably over time.',
    hint: 'It tells you exactly when it is safe to swap the order of two massive calculus operations.',
  },
  {
    id: 31073,
    topic: 'henri-lebesgue',
    difficulty: 'hard',
    question: 'Which famous, pathologically broken mathematical function is completely un-integrable using Riemann\'s classical method, but easily integrable and evaluates to zero using Lebesgue\'s method over the interval [0,1]?',
    options: [
      'The Dirichlet function, which equals 1 for all rational numbers and 0 for all irrational numbers.',
      'The Weierstrass function, which is continuous everywhere but differentiable absolutely nowhere.',
      'The Dirac delta function, which is exactly zero everywhere except at the origin where it is infinite.',
      'The Riemann zeta function, particularly when analytically evaluated at odd negative integer values.'
    ],
    correctIndex: 0,
    explanation: 'The Dirichlet function jumps between 0 and 1 infinitely often in any interval. Riemann\'s vertical rectangles can\'t handle it because there is no smooth area. Lebesgue\'s method simply groups all the 1s (which have a measure of zero) and all the 0s (which have a measure of one), easily calculating the total area as 0.',
    realWorld: 'Lebesgue\'s ability to handle this pathological function proved his integral was mathematically vastly superior and more robust than Riemann\'s.',
    hint: 'It is a function that constantly flickers between 1 and 0 infinitely fast.',
  },
  {
    id: 31074,
    topic: 'henri-lebesgue',
    difficulty: 'hard',
    question: 'Lebesgue integration heavily utilizes the concept of properties holding "almost everywhere." What exactly does "almost everywhere" mean in formal mathematical measure theory?',
    options: [
      'The property holds true for all points in the set, except for a specific subset whose mathematical measure is exactly zero.',
      'The property is true for all real numbers but is strictly false when applied to complex or imaginary numbers.',
      'The property can be proven geometrically but inevitably fails when subjected to rigorous algebraic scrutiny.',
      'The property holds for at least 99 percent of the evaluated interval as the limit asymptotically approaches infinity.'
    ],
    correctIndex: 0,
    explanation: 'In measure theory, "almost everywhere" is a strict technical term. It means an exception exists, but the exception is so infinitely small (like a few isolated points or the rational numbers) that its total length/area is mathematically zero.',
    realWorld: 'In theoretical physics and probability, "almost everywhere" allows scientists to ignore bizarre outliers and anomalies because they have absolutely no impact on the final macroscopic calculation.',
    hint: 'It means there are exceptions, but the exceptions take up absolutely zero space.',
  }
];