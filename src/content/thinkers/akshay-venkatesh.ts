import type { Question } from '../types';

export const akshayVenkateshQuestions: Question[] = [
  {
    id: 12701,
    topic: 'akshay-venkatesh',
    difficulty: 'easy',
    question: 'Akshay Venkatesh started university at age 13 and won the Fields Medal (2018). His work primarily connects:',
    options: [
      'Number theory, representation theory, and dynamics — showing deep hidden connections between counting and symmetry',
      'Topology and algebra through homotopy type theory',
      'Statistics and machine learning through kernel methods',
      'Graph theory and combinatorics through probabilistic arguments',
    ],
    correctIndex: 0,
    explanation: 'Venkatesh works at the intersection of analytic number theory, homogeneous dynamics, and automorphic forms. He uses ergodic theory (how systems evolve over time) to solve problems in pure number theory — a strikingly creative approach.',
    realWorld: 'His techniques connect to the distribution of primes, the Langlands program, and even quantum chaos — understanding how quantum systems behave unpredictably connects to how primes are distributed.',
    hint: 'He uses tools from physics (dynamics, ergodic theory) to answer pure math questions about numbers.',
  },
  {
    id: 12702,
    topic: 'akshay-venkatesh',
    difficulty: 'hard',
    question: 'Venkatesh used "mixing of flows on homogeneous spaces" to prove results about integer solutions to quadratic forms. The key idea is:',
    options: [
      'Orbits of lattice points under group actions become equidistributed, so counting solutions reduces to understanding dynamics on symmetric spaces',
      'Every quadratic form over the integers has infinitely many solutions by Hasse\'s principle',
      'Quadratic reciprocity provides a closed-form count of all solutions',
      'Diophantine approximation bounds the error in counting integer points',
    ],
    correctIndex: 0,
    explanation: 'The insight is that integer points on quadratic surfaces correspond to orbits in homogeneous spaces (like SL(n,ℤ)\\SL(n,ℝ)). Mixing results from ergodic theory show these orbits spread out uniformly — giving precise counts of solutions.',
    realWorld: 'Counting integer solutions to equations has applications in crystallography (lattice structures), coding theory (lattice codes for communication), and even quantum gravity (counting black hole microstates).',
    hint: 'Think of integer solutions as points in a symmetric space that spread out evenly over time.',
  },
  {
    id: 12703,
    topic: 'akshay-venkatesh',
    difficulty: 'sota',
    question: 'Venkatesh\'s recent work with collaborators proposes "derived" structures in the Langlands program. This means:',
    options: [
      'Replacing classical spaces of automorphic forms with derived categories that capture hidden higher-order cohomological information',
      'Deriving new L-functions from existing ones using functional equations',
      'Computing derivatives of modular forms to find new arithmetic invariants',
      'Using automatic differentiation to numerically verify the Langlands conjectures',
    ],
    correctIndex: 0,
    explanation: 'The "derived" Langlands program lifts classical correspondences to the level of derived categories and higher algebra. This reveals torsion classes and other subtle phenomena invisible to classical methods — a profound deepening of the Langlands vision.',
    realWorld: 'The Langlands program is one of the deepest unifying frameworks in mathematics. Progress here could eventually impact post-quantum cryptography, where number-theoretic structures provide security guarantees.',
    hint: '"Derived" in modern math means working with chain complexes and higher categorical structures, not just sets.',
  },
];
