import type { Question } from '../types';

export const cayleyQuestions: Question[] = [
  {
    id: 31060,
    topic: 'arthur-cayley',
    difficulty: 'easy',
    question: 'What fundamental algebraic concept did Arthur Cayley mathematically formalize, which now serves as the computational engine for all modern 3D graphics and machine learning?',
    options: [
      'The algebra of matrices, establishing the strict rules for matrix multiplication and inversion.',
      'The algebra of quaternions, allowing for smooth, non-gimbal-locking three-dimensional rotation.',
      'The foundation of Boolean logic gates, reducing all mathematical operations to binary states.',
      'The formalization of vector calculus, enabling the precise measurement of electromagnetic fields.'
    ],
    correctIndex: 0,
    explanation: 'While arrays of numbers had been used to solve linear equations before, Cayley was the first to formalize matrices as single algebraic objects that could be multiplied, added, and inverted according to strict mathematical rules.',
    realWorld: 'Every time a video game renders a 3D environment or a neural network processes a batch of data, trillions of matrix multiplications are occurring under the hood.',
    hint: 'He treated giant grids of numbers as if they were single, manipulatable mathematical variables.',
  },
  {
    id: 31061,
    topic: 'arthur-cayley',
    difficulty: 'hard',
    question: 'Cayley\'s Theorem is a profound foundational result in group theory. What profound connection does it establish regarding abstract mathematical groups?',
    options: [
      'It proves that every abstract group is isomorphic to a subgroup of a permutation group.',
      'It states that every finite field can be perfectly represented by a continuous cyclic group.',
      'It demonstrates that every topological space has a corresponding algebraic fundamental group.',
      'It guarantees that every Lie group corresponds to a single, mathematically unique Lie algebra.'
    ],
    correctIndex: 0,
    explanation: 'Cayley\'s Theorem bridged abstract algebra and concrete combinations. It proved that any group you can mathematically imagine, no matter how abstract, behaves identically to a group of permutations (a specific way of shuffling a set of items).',
    realWorld: 'This theorem allowed mathematicians to ground incredibly abstract, high-level algebraic concepts in the concrete, verifiable logic of permutations.',
    hint: 'It proves that all abstract group operations can be thought of as just shuffling items around in a specific way.',
  },
  {
    id: 31062,
    topic: 'arthur-cayley',
    difficulty: 'sota',
    question: 'Cayley and Sylvester collaborated extensively to found Invariant Theory. What is the central object of study within this highly abstract 19th-century field?',
    options: [
      'Algebraic forms (quantics) that remain mathematically unchanged under specific linear transformations.',
      'Differential equations that yield the exact same solution regardless of shifting boundary conditions.',
      'Topological manifolds that strictly preserve their genus and holes under continuous deformation.',
      'Number sequences that maintain the identical prime factorization ratios as they approach infinity.'
    ],
    correctIndex: 0,
    explanation: 'Invariant Theory seeks to find algebraic expressions (like the discriminant of a quadratic equation, $b^2 - 4ac$) that do not change their fundamental value even when the underlying coordinate system is transformed or stretched.',
    realWorld: 'This branch of pure math unexpectedly became the foundation of modern physics—Einstein used invariant theory to prove that the speed of light remains constant regardless of the observer\'s reference frame.',
    hint: 'They were looking for algebraic properties that stubbornly refuse to change, no matter how you warp the coordinate system.',
  },
  {
    id: 31063,
    topic: 'arthur-cayley',
    difficulty: 'hard',
    question: 'In addition to his pure algebraic discoveries, Cayley made pioneering contributions to graph theory by using trees to mathematically enumerate what physical phenomena?',
    options: [
      'The exact number of distinct alkane chemical isomers for a given number of carbon atoms.',
      'The stable crystalline lattice structures of various noble metal alloys under high pressure.',
      'The chiral symmetry breaking points occurring in complex biological amino acid folding.',
      'The valency bonds of aromatic carbon rings present in volatile organic compounds.'
    ],
    correctIndex: 0,
    explanation: 'Cayley applied the mathematics of "rooted trees" (graphs without closed loops) to chemistry, successfully formulating an algorithm to calculate exactly how many isomeric structures could exist for alkanes ($C_nH_{2n+2}$) based purely on the number of carbon atoms.',
    realWorld: 'This established the entire field of chemical graph theory, bridging pure mathematics and organic chemistry long before modern molecular modeling software existed.',
    hint: 'He used branching lines to count how many different ways a specific molecule could be assembled.',
  },
  {
    id: 31064,
    topic: 'arthur-cayley',
    difficulty: 'hard',
    question: 'Cayley discovered the "octonions" almost immediately after Hamilton discovered quaternions. What fundamental algebraic property is permanently lost when moving from quaternions up to octonions?',
    options: [
      'Associativity of multiplication (the order in which you group the numbers drastically changes the result).',
      'Commutativity of addition (the order in which you add the numbers alters the final summation).',
      'The existence of multiplicative inverses (division becomes mathematically impossible in the system).',
      'Distributivity of multiplication over addition (expanding algebraic brackets yields incorrect results).'
    ],
    correctIndex: 0,
    explanation: 'When moving up the normed division algebras, you lose properties. Complex numbers lose order. Quaternions lose commutativity ($A \\times B \\neq B \\times A$). Octonions go a step further and lose associativity: $(A \\times B) \\times C \\neq A \\times (B \\times C)$.',
    realWorld: 'Because they break associativity, octonions were ignored for a century. Today, they are deeply studied in string theory and M-theory to explain the fundamental symmetries of the universe.',
    hint: 'In this system, grouping matters. $(A \\times B) \\times C$ will give you a totally different answer than $A \\times (B \\times C)$.',
  }
];