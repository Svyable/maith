import type { Question } from '../types';

export const endreszemerediQuestions: Question[] = [
  {
    id: 31860, topic: 'endre-szemeredi', difficulty: 'easy',
    question: 'Endre Szemerédi won the 2012 Abel Prize for his contributions to combinatorics. What is Szemerédi\'s theorem?',
    options: [
      'Every subset $A \\subset \\{1, 2, \\ldots, N\\}$ with positive upper density $\\bar{d}(A) = \\limsup \\frac{|A \\cap [1,N]|}{N} > 0$ contains arbitrarily long arithmetic progressions. Formally, for every $k \\geq 1$ and $\\delta > 0$, there exists $N_0(k, \\delta)$ such that any $A \\subset [N]$ with $|A| \\geq \\delta N$ and $N \\geq N_0$ contains a $k$-AP: $a, a+d, \\ldots, a+(k-1)d$.',
      'Every finite set of integers contains a subset that sums to zero.',
      'Every 2-coloring of $\\{1, \\ldots, N\\}$ contains a monochromatic arithmetic progression of length $\\geq \\log N$.',
      'The density of primes in $[1, N]$ is $\\geq 1/(2\\log N)$ for all $N \\geq 3$.'
    ],
    correctIndex: 0,
    explanation: 'Szemerédi\'s theorem (1975) is one of the deepest results in combinatorics. The proof introduced the Szemerédi Regularity Lemma — a structural decomposition of large graphs into pseudorandom parts. Alternative proofs were later given by Furstenberg (ergodic theory, 1977), Gowers (higher-order Fourier analysis, 2001), and the hypergraph approach.',
    realWorld: 'Szemerédi\'s theorem implies the Green-Tao theorem setup and is foundational in additive combinatorics. The regularity lemma has applications in computer science (property testing, graph algorithms) and theoretical biology (network analysis).',
    hint: 'Any "dense enough" set of integers must contain evenly spaced patterns — arithmetic progressions of any length.',
    formulaLinks: ['szemeredi-theorem'],
  },
  {
    id: 31861, topic: 'endre-szemeredi', difficulty: 'hard',
    question: 'The Szemerédi Regularity Lemma is one of the most widely used tools in combinatorics. What does it state?',
    options: [
      'For every $\\epsilon > 0$, every sufficiently large graph $G = (V, E)$ can have its vertex set partitioned into $k \\leq M(\\epsilon)$ classes $V_1, \\ldots, V_k$ such that all but $\\epsilon k^2$ pairs $(V_i, V_j)$ are "$\\epsilon$-regular": $$\\left|d(A, B) - d(V_i, V_j)\\right| < \\epsilon$$ for all $A \\subset V_i, B \\subset V_j$ with $|A| \\geq \\epsilon|V_i|, |B| \\geq \\epsilon|V_j|$, where $d(X,Y)$ is edge density.',
      'Every graph on $n$ vertices can be decomposed into $O(\\log n)$ bipartite graphs plus a sparse remainder.',
      'Every graph with $m$ edges can be partitioned into $O(\\sqrt{m})$ cliques and independent sets.',
      'Every graph is $\\epsilon$-close (in edit distance) to a graph that is a union of at most $1/\\epsilon$ complete bipartite graphs.'
    ],
    correctIndex: 0,
    explanation: 'The regularity lemma says every large graph looks "pseudorandom" at a coarse scale — after partitioning vertices into $O(1)$ groups, most pairs behave like random bipartite graphs with fixed densities. The bound $M(\\epsilon)$ is a tower of exponentials of height $\\sim 1/\\epsilon^5$ — Gowers showed this is necessary. Despite the enormous bound, the lemma is incredibly useful.',
    realWorld: 'The regularity lemma is used in graph property testing (can you test if a graph has a property by sampling few edges?), extremal graph theory, and computational complexity. It also inspired the graph limits theory of Lovász.',
    hint: 'Every large graph can be approximated by a small "template" of pseudorandom bipartite pieces.',
    formulaLinks: ['regularity-lemma'],
  },
  {
    id: 31862, topic: 'endre-szemeredi', difficulty: 'sota',
    question: 'What are the best known bounds for $N_0(k, \\delta)$ in Szemerédi\'s theorem, and why do the bounds matter?',
    options: [
      'The current best bound (Kelley-Meka 2023, for $k = 3$) is: sets of size $\\geq N / \\exp(C(\\log N)^{1/12})$ in $[N]$ contain a 3-AP. For general $k$, Gowers proved $N_0(k, \\delta) \\leq \\exp\\exp(\\delta^{-c_k})$ using $U^{k-1}$ norms. The Behrend construction gives a lower bound: there exist 3-AP-free sets of size $N/\\exp(C\\sqrt{\\log N})$. Closing this gap is a major open problem.',
      'The bounds are polynomial: $N_0(k, \\delta) \\leq \\delta^{-Ck}$ for a universal constant $C$.',
      'Szemerédi\'s original proof gives $N_0(k, \\delta) \\leq \\delta^{-k!}$ which is known to be optimal.',
      'The bounds are irrelevant because the theorem is purely existential — no effective bound is possible.'
    ],
    correctIndex: 0,
    explanation: 'The quantitative bounds in Szemerédi\'s theorem are a major research frontier. For $k = 3$, the breakthrough of Kelley-Meka (2023) nearly matches the Behrend lower bound (up to the exponent). For $k \\geq 4$, the Gowers bounds involve iterated exponentials and are far from the conjectured truth. Green-Tao\'s proof that primes contain arbitrary APs required quantitative versions.',
    realWorld: 'Better bounds have direct implications for computational complexity (explicit constructions of pseudorandom objects) and for the Green-Tao theorem on primes in APs. The $k = 3$ breakthrough was one of the biggest results in combinatorics in 2023.',
    hint: 'How dense must a set be to guarantee a 3-term AP? The answer involves $\\exp(\\sqrt{\\log N})$ — recently dramatically improved.',
    formulaLinks: ['szemeredi-theorem', 'gowers-norms'],
  },
];
