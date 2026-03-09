import type { Question } from '../types';

export const stephenSmaleQuestions: Question[] = [
  {
    id: 31600, topic: 'stephen-smale', difficulty: 'easy',
    question: 'Stephen Smale won the 1966 Fields Medal for proving a shocking result about spheres. What did he prove?',
    options: [
      'The generalized Poincaré Conjecture in dimensions $n \\geq 5$ — every homotopy sphere of dimension $\\geq 5$ is homeomorphic to the standard sphere $S^n$. He also proved you can turn a sphere inside out smoothly (sphere eversion).',
      'That the surface area of the unit sphere in $n$ dimensions approaches zero as $n \\to \\infty$.',
      'That every smooth manifold can be embedded in Euclidean space of dimension $2n + 1$ (Whitney embedding theorem).',
      'That there exist exactly 28 exotic smooth structures on the 7-sphere (Milnor\'s exotic spheres).'
    ],
    correctIndex: 0,
    explanation: 'Smale proved the high-dimensional Poincaré Conjecture using the "h-cobordism theorem" — showing that in dimensions $\\geq 5$, topology is "flexible" enough that homotopy equivalence implies homeomorphism for simply connected manifolds. He also proved sphere eversion: $S^2$ can be smoothly turned inside out through self-intersections without creating any creases.',
    realWorld: 'Smale\'s h-cobordism theorem is a foundational tool in surgery theory, the systematic classification of high-dimensional manifolds. His work opened the door for later proofs in dimensions 4 (Freedman) and 3 (Perelman).',
    hint: 'He proved something about spheres in 5 or more dimensions that took until 2003 to prove in dimension 3.',
  },
  {
    id: 31601, topic: 'stephen-smale', difficulty: 'hard',
    question: 'Smale made fundamental contributions to dynamical systems. What is the "Smale horseshoe" and why is it important?',
    options: [
      'A hyperbolic invariant set formed by repeatedly stretching and folding a square — the simplest example of chaotic dynamics with a complete symbolic description. It proves that chaos is structurally stable and contains a Cantor set of periodic orbits of every period.',
      'A theorem proving that all attractors of smooth flows on compact manifolds must be either fixed points, limit cycles, or tori.',
      'A geometric construction showing that every diffeomorphism of the 2-torus is topologically conjugate to an Anosov map.',
      'A proof that the Lorenz attractor is strange — containing an uncountable infinity of unstable periodic orbits.'
    ],
    correctIndex: 0,
    explanation: 'The horseshoe map stretches a square, folds it into a horseshoe shape, and maps it back. The invariant set (points that never leave) is a Cantor set with dynamics conjugate to the full shift on two symbols — providing the first rigorous model of deterministic chaos. Its symbolic dynamics give complete information: every sequence of 0s and 1s corresponds to a unique orbit.',
    realWorld: 'The horseshoe appears as a building block inside many chaotic systems, from the three-body problem to turbulent fluid flows. Its structural stability means chaos persists under perturbation.',
    hint: 'Stretch, fold, repeat — the simplest recipe for chaos, producing a fractal set of orbits.',
  },
  {
    id: 31602, topic: 'stephen-smale', difficulty: 'sota',
    question: 'In 1998, Smale published a list of 18 unsolved problems for the 21st century. Which problem on Smale\'s list encompasses the Riemann Hypothesis?',
    options: [
      'Problem 4: the Riemann Hypothesis itself ($\\zeta(s) = 0 \\Rightarrow \\text{Re}(s) = 1/2$ or $s$ is a negative even integer). Smale included it as fundamental to understanding the distribution of primes via $\\pi(x) = \\text{Li}(x) + O(\\sqrt{x} \\log x)$.',
      'Problem 1: whether $P = NP$, which Smale connected to the Riemann Hypothesis via the complexity of computing $\\zeta(s)$ on the critical strip.',
      'Problem 7: the distribution of lattice points on spheres, which generalizes the Gauss circle problem and implies RH for Dedekind zeta functions.',
      'Problem 18: the limits of intelligence, which Smale formulated as a question about the computational complexity of mathematical proof verification.'
    ],
    correctIndex: 0,
    explanation: 'Smale\'s Problem 4 is simply the Riemann Hypothesis — one of the Clay Millennium Problems worth $1M. Smale\'s list ranges from pure math (RH, $P$ vs $NP$, Navier-Stokes) to applied problems (dynamics of algorithms, protein folding), reflecting his extraordinary breadth. Several problems remain open.',
    realWorld: 'Of Smale\'s 18 problems, about 6 have been fully or partially resolved (including Poincaré in 3D). The list continues to guide 21st-century mathematical research.',
    hint: 'He included the most famous unsolved problem about prime numbers — also worth a million-dollar prize.',
  },
];
