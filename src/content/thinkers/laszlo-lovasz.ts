import type { Question } from '../types';

export const laszloLovaszQuestions: Question[] = [
  {
    id: 31910, topic: 'laszlo-lovasz', difficulty: 'easy',
    question: 'László Lovász won the 2021 Abel Prize for his foundational work in combinatorics and theoretical computer science. What is the Lovász Local Lemma (LLL)?',
    options: [
      'If events $A_1, \\ldots, A_n$ each have $\\mathbb{P}(A_i) \\leq p$ and each depends on at most $d$ other events, then if $ep(d+1) \\leq 1$, all events can be simultaneously avoided: $$\\mathbb{P}\\left(\\bigcap_{i=1}^n \\bar{A}_i\\right) > 0$$ This proves existence of combinatorial objects that avoid all "bad" events.',
      'In any graph $G$ on $n$ vertices, there exists an independent set of size $\\geq n/(d+1)$ where $d$ is the max degree.',
      'For any $n$ events with pairwise independence, $\\mathbb{P}(\\bigcup A_i) \\leq \\sum \\mathbb{P}(A_i)$ (union bound).',
      'Every graph with chromatic number $\\chi > k$ contains a complete subgraph $K_{k+1}$.'
    ],
    correctIndex: 0,
    explanation: 'The LLL is a powerful probabilistic tool for proving existence. When bad events have limited dependency, you can avoid all of them simultaneously. The condition $ep(d+1) \\leq 1$ is nearly tight. Moser-Tardos (2010) made it constructive: the "resample" algorithm efficiently finds a configuration avoiding all bad events in expected $O(n)$ resampling steps.',
    realWorld: 'The LLL is used in combinatorics (graph coloring, Ramsey theory), coding theory (low-density parity-check codes), job scheduling, and SAT solving. The Moser-Tardos algorithm makes these applications computational.',
    hint: 'If bad events are rare and mostly independent, you can dodge all of them at once.',
    formulaLinks: ['lovasz-local-lemma'],
  },
  {
    id: 31911, topic: 'laszlo-lovasz', difficulty: 'hard',
    question: 'Lovász introduced the theta function $\\vartheta(G)$ to solve a famous problem. What is it and what did it achieve?',
    options: [
      'The Lovász theta function $\\vartheta(G)$ is defined by the semidefinite program: $$\\vartheta(G) = \\max \\sum_{i,j} M_{ij} \\quad \\text{s.t. } M \\succeq 0, \\, \\text{tr}(M) = 1, \\, M_{ij} = 0 \\text{ if } ij \\in E(G)$$ It satisfies $\\omega(G) \\leq \\vartheta(\\bar{G}) \\leq \\chi(G)$ and computes the Shannon capacity: $\\Theta(C_5) = \\vartheta(C_5) = \\sqrt{5}$.',
      'The theta function counts the number of perfect matchings: $\\vartheta(G) = |\\mathcal{M}(G)|$.',
      'The theta function is the spectral radius of the adjacency matrix: $\\vartheta(G) = \\lambda_1(A_G)$.',
      'The theta function equals the fractional chromatic number: $\\vartheta(G) = \\chi_f(G)$ for all graphs.'
    ],
    correctIndex: 0,
    explanation: 'Shannon (1956) asked for the capacity $\\Theta(G) = \\sup_k \\alpha(G^k)^{1/k}$ — how efficiently can a noisy channel (modeled by $G$) transmit information? For the pentagon $C_5$, $\\alpha(C_5) = 2$ but $\\alpha(C_5^2) = 5$. Lovász introduced $\\vartheta$ (computable in polynomial time via SDP) and showed $\\Theta(C_5) = \\vartheta(C_5) = \\sqrt{5}$, solving a 23-year-old open problem.',
    realWorld: 'The Lovász theta function was one of the first applications of semidefinite programming in combinatorics. It launched the field of "semidefinite relaxations" now used throughout optimization and machine learning.',
    hint: 'A number between clique number and chromatic number, computed by an SDP — it solved Shannon\'s capacity problem.',
    formulaLinks: ['lovasz-theta', 'shannon-capacity'],
  },
  {
    id: 31912, topic: 'laszlo-lovasz', difficulty: 'sota',
    question: 'Lovász developed the theory of graph limits (graphons). What is a graphon and what does convergence mean?',
    options: [
      'A graphon is a symmetric measurable function $W: [0,1]^2 \\to [0,1]$. A sequence of dense graphs $G_n$ converges to $W$ if for every finite graph $F$: $$t(F, G_n) \\to t(F, W) = \\int_{[0,1]^{|V(F)|}} \\prod_{ij \\in E(F)} W(x_i, x_j) \\prod_i dx_i$$ where $t(F, G)$ is the homomorphism density (probability that a random map $V(F) \\to V(G)$ is a homomorphism).',
      'A graphon is a probability distribution on graphs, and convergence means convergence in total variation distance.',
      'A graphon is the adjacency matrix of an infinite graph, and convergence means pointwise convergence of matrix entries.',
      'A graphon is a kernel $K(x,y)$ on $[0,1]^2$ such that the integral operator $T_K$ has trace class norm $\\leq 1$.'
    ],
    correctIndex: 0,
    explanation: 'Lovász and Szegedy proved that the space of graphons (modulo measure-preserving transformations) is compact and metrizable (in the cut distance $\\delta_\\square$), giving a complete characterization of "graph limits." Every convergent sequence of dense graphs has a limit graphon, and conversely. This unifies many results in extremal graph theory and provides a continuum framework for large networks.',
    realWorld: 'Graphons are used in network science (modeling social networks), machine learning (graph neural networks), statistical estimation (fitting network models), and the theory of graph property testing.',
    hint: 'A continuous function on the unit square that captures the "limit shape" of a sequence of growing graphs.',
    formulaLinks: ['graphon'],
  },
];
