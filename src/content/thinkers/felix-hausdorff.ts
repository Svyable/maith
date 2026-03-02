import type { Question } from '../types';

export const hausdorffQuestions: Question[] = [
  {
    id: 31125,
    topic: 'felix-hausdorff',
    difficulty: 'easy',
    question: 'Felix Hausdorff profoundly shattered our understanding of classical geometry by defining "Hausdorff dimension." What highly counterintuitive mathematical concept does this explicitly allow?',
    options: [
      'It mathematically allows geometric shapes to possess strict, non-integer fractional dimensions (e.g., $d = 1.26$).',
      'It allows continuous spaces to topologically simultaneously exist in precisely two separate, non-overlapping coordinate planes.',
      'It permits infinite volumes to be perfectly encapsulated within strictly finite, bounded geometric surface areas.',
      'It dictates that any mathematical dimension greater than three must inherently fold backward onto a closed timelike curve.'
    ],
    correctIndex: 0,
    explanation: 'Classical dimensions are whole numbers (a line is 1D, a square is 2D). Hausdorff created a mathematical definition of dimension based on scaling ($N = r^d \\implies d = \\frac{\\log N}{\\log r}$). If you measure a shape that is infinitely jagged, its Hausdorff dimension mathematically calculates out to a fraction.',
    realWorld: 'This gave Benoît Mandelbrot the exact mathematical tool he needed to invent fractal geometry. The coastline of Britain, for example, has a physical Hausdorff dimension of approximately 1.25.',
    hint: 'It allowed dimensions to be calculated as decimals and fractions.',
  },
  {
    id: 31126,
    topic: 'felix-hausdorff',
    difficulty: 'hard',
    question: 'In general topology, the vast majority of useful spaces (including the real number line) are designated as "Hausdorff spaces" (or $T_2$ spaces). What precise separation axiom strictly defines a Hausdorff space?',
    options: [
      'For any two absolutely distinct points $x \\neq y$, there exist completely disjoint open neighborhoods $U$ and $V$ such that $x \\in U$ and $y \\in V$.',
      'Every single closed subset within the topological space can be perfectly covered by a strictly finite number of open overlapping geometric balls.',
      'Any continuous mathematical path strictly connecting point $x$ to point $y$ can be infinitely shrunk to a single geometric point without tearing.',
      'The entire geometric space can be completely broken down into a countable union of strictly nowhere-dense topological subsets.'
    ],
    correctIndex: 0,
    explanation: 'A Hausdorff space simply guarantees that points can be separated. No matter how infinitesimally close two distinct points are, you can mathematically draw two distinct, non-overlapping "bubbles" (open sets) around them.',
    realWorld: 'If a space is not Hausdorff, limits behave insanely—a sequence could mathematically converge to multiple different numbers simultaneously. Assuming a space is Hausdorff ensures that calculus works properly.',
    hint: 'It ensures that any two distinct dots can be trapped in their own separate, non-overlapping bubbles.',
  },
  {
    id: 31127,
    topic: 'felix-hausdorff',
    difficulty: 'sota',
    question: 'The incredible Baker-Campbell-Hausdorff (BCH) formula is absolutely fundamental to Lie theory. It algebraically expresses the solution $Z$ in the equation $e^X e^Y = e^Z$ strictly in terms of what mathematical operations?',
    options: [
      'An infinite formal series utilizing strictly the Lie bracket commutators: $Z = X + Y + \\frac{1}{2}[X,Y] + \\frac{1}{12}([X,[X,Y]] + \\dots)$.',
      'The highly continuous analytic integration of the combined geometric determinants mapped over strictly orthogonal base vectors.',
      'A finite algebraic summation of the scalar eigenvalues directly extracted from the localized non-degenerate Hessian matrix.',
      'The discrete geometric convolution of the dual topological Fourier transforms evaluated strictly at the continuous limit.'
    ],
    correctIndex: 0,
    explanation: 'If $X$ and $Y$ were just numbers, $e^X e^Y = e^{X+Y}$. But in matrix math or Lie algebras, $X$ and $Y$ do not commute ($XY \\neq YX$). The BCH formula proves that you can still combine them into a single exponent ($Z$), and $Z$ is built entirely out of $X$, $Y$, and their nested commutators $[X, Y] = XY - YX$.',
    realWorld: 'The BCH formula is absolutely indispensable in quantum mechanics for calculating how non-commuting observables (like position and momentum) mathematically evolve over time.',
    hint: 'It calculates the exponent using infinite layers of nested brackets measuring how badly the variables fail to commute.',
  },
  {
    id: 31128,
    topic: 'felix-hausdorff',
    difficulty: 'hard',
    question: 'The "Hausdorff distance" mathematically measures the absolute extent to which two distinct subsets of a metric space differ from each other. How is this highly robust metric formally defined?',
    options: [
      'It is the greatest of all the continuous distances from a point in one set to the absolute closest point in the other set: $\\max\\{\\sup_{x} \\inf_{y} d(x,y), \\sup_{y} \\inf_{x} d(x,y)\\}$.',
      'It is the strict arithmetic mean of all precisely calculated geometric distances connecting strictly orthogonal points located between the two closed subsets.',
      'It is the absolute mathematical area of the symmetric difference of the two subsets, deeply integrated over the bounded Lebesgue continuous measure.',
      'It is the minimal possible topological deformation energy required to continuously stretch and morph the boundary of the first subset perfectly into the second.'
    ],
    correctIndex: 0,
    explanation: 'To find the Hausdorff distance between set A and set B: find the point in A that is farthest away from B. Then find the point in B that is farthest away from A. The larger of these two distances is the Hausdorff distance.',
    realWorld: 'This mathematical formula is the core logic used in modern computer vision (like facial recognition and self-driving car LiDAR) to instantly determine if the 3D shape the computer sees matches the 3D template in its database.',
    hint: 'It measures the absolute worst-case scenario: the maximum distance you would be forced to travel if you were stranded on one shape and had to jump to the closest point on the other.',
  },
  {
    id: 31129,
    topic: 'felix-hausdorff',
    difficulty: 'easy',
    question: 'Hausdorff\'s monumental 1914 book, *Grundzüge der Mengenlehre* (Basics of Set Theory), effectively created the modern field of topology. Tragically, how did Hausdorff\'s life mathematically and physically end?',
    options: [
      'He committed suicide along with his wife and sister-in-law in 1942 to avoid imminent deportation to a Nazi concentration camp.',
      'He was completely ostracized by the mathematical community for embracing Cantor\'s infinities, dying in absolute poverty and obscure mathematical exile.',
      'He was killed during the intense Allied bombing of Dresden, heavily protecting his final unpublished manuscripts in the university mathematical library.',
      'He died of severe chronic radiation poisoning, sustained entirely while attempting to apply his pure topological geometry to the early German nuclear physics program.'
    ],
    correctIndex: 0,
    explanation: 'Despite being recognized globally as one of the greatest living mathematicians, Hausdorff was Jewish. Stripped of his university position and mathematically silenced by the Nazi regime, he chose to end his own life rather than board the train to the camps.',
    realWorld: 'His death stands as a profound, stark reminder of the immense intellectual and human devastation inflicted by the Holocaust. His final letter simply stated: "Forgive us our desertion!"',
    hint: 'He chose the time and place of his death when the Nazis came to forcefully relocate him.',
  }
];