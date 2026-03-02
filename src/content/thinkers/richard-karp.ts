// karp.ts
import type { Question } from '../types';

export const richardKarpQuestions: Question[] = [
  {
    id: 67035,
    topic: 'richard-karp',
    difficulty: 'easy',
    question:
      'Richard Karp is famous for the 1972 paper listing 21 NP-complete problems. What was the main impact of that list?',
    options: [
      'It demonstrated NP-completeness is widespread by giving many natural problems reducible from SAT',
      'It proved P = NP',
      'It showed all graph problems are solvable in polynomial time',
      'It resolved the halting problem'
    ],
    correctIndex: 0,
    explanation:
      'Karp’s reductions propagated NP-completeness from SAT to combinatorial optimization, making the theory broadly relevant.',
    realWorld:
      'Problems like CLIQUE, VERTEX COVER, and HAMILTONIAN CYCLE became canonical hardness benchmarks.',
    hint:
      'He showed “hardness is everywhere.”'
  },
  {
    id: 67036,
    topic: 'richard-karp',
    difficulty: 'hard',
    question:
      'Which of the following is one of Karp’s classic NP-complete graph problems?',
    options: [
      'VERTEX COVER',
      'Minimum spanning tree',
      'Shortest path with nonnegative weights',
      'Bipartite matching'
    ],
    correctIndex: 0,
    explanation:
      'VERTEX COVER is NP-complete (Karp 1972). In contrast, MST, Dijkstra shortest paths (nonnegative), and bipartite matching are polynomial-time.',
    realWorld:
      'Vertex cover models placing monitors/sensors, minimum test sets, and network security hardening.',
    hint:
      'Pick the one that’s classically NP-complete.'
  },
  {
    id: 67037,
    topic: 'richard-karp',
    difficulty: 'hard',
    question:
      'The Karp reduction framework uses polynomial-time many-one reductions. If problem $A$ reduces to $B$, what does that imply about difficulty?',
    options: [
      'If $B$ is easy (in P), then $A$ is also easy; if $A$ is hard (NP-hard), then $B$ is at least as hard',
      'If $A\\le_p B$ then $A$ is always harder than $B$',
      'Reductions only compare problem sizes, not hardness',
      'If $A\\le_p B$ then $B\\le_p A$ automatically'
    ],
    correctIndex: 0,
    explanation:
      'A reduction is a translator. Solving $B$ lets you solve $A$. So $B$ is “at least as hard as $A$.”',
    realWorld:
      'This is how NP-completeness spreads: once you know one NP-complete problem, you can prove many others.',
    hint:
      'A reduction turns an $A$-solver into a $B$-solver (in the right direction).'
  },
  {
    id: 67038,
    topic: 'richard-karp',
    difficulty: 'sota',
    question:
      'Karp also did foundational work in randomized algorithms and parallel complexity. In broad terms, what does it mean for an algorithm to be “randomized” in complexity theory?',
    options: [
      'It uses random bits during execution, so runtime and/or correctness is analyzed in probability (e.g., Las Vegas vs Monte Carlo)',
      'It randomly permutes input but is otherwise deterministic',
      'It is nondeterministic in the NP sense',
      'It is approximate and never returns exact answers'
    ],
    correctIndex: 0,
    explanation:
      'Randomized algorithms use randomness as a computational resource; guarantees are stated as probability of correctness and expected runtime.',
    realWorld:
      'Randomization is central in hashing, streaming, approximate counting, and large-scale optimization.',
    hint:
      'Complexity guarantees include probabilities.'
  },
  {
    id: 67039,
    topic: 'richard-karp',
    difficulty: 'sota',
    question:
      'Many Karp NP-complete problems have good approximation algorithms. For VERTEX COVER, what is a classic approximation guarantee?',
    options: [
      'A simple algorithm gives a 2-approximation (e.g., via maximal matching)',
      'There is a PTAS (1+ε)-approximation for all graphs',
      'Exact poly-time solution exists',
      'No approximation better than n/2 is possible'
    ],
    correctIndex: 0,
    explanation:
      'Picking both endpoints of a maximal matching yields a vertex cover at most twice optimal. This is a standard textbook result.',
    realWorld:
      'Approximations are used when exact NP-hard optimization is too slow for large instances.',
    hint:
      'Maximal matching → factor 2.'
  }
];