import type { Question } from '../types';

export const aviWigdersonQuestions: Question[] = [
  {
    id: 31870, topic: 'avi-wigderson', difficulty: 'easy',
    question: 'Avi Wigderson won the 2021 Abel Prize for his contributions to theoretical computer science. What is his most famous result connecting randomness and computation?',
    options: [
      'He proved (with Nisan) that if any problem in $\\text{E} = \\text{DTIME}(2^{O(n)})$ requires exponential-size circuits, then $\\text{BPP} = \\text{P}$ — randomness can be eliminated from efficient algorithms: $$\\text{hard function exists} \\implies \\text{BPP} = \\text{P}$$',
      'He proved that $\\text{P} = \\text{BPP}$ unconditionally — every randomized algorithm can be derandomized.',
      'He proved that random algorithms are always faster than deterministic ones by a polynomial factor.',
      'He proved that quantum computers can simulate classical randomness with no overhead.'
    ],
    correctIndex: 0,
    explanation: 'The Nisan-Wigderson pseudorandom generator transforms any sufficiently hard Boolean function into a pseudorandom generator that "fools" all polynomial-size circuits. If $f: \\{0,1\\}^n \\to \\{0,1\\}$ requires circuits of size $2^{\\Omega(n)}$, then $G: \\{0,1\\}^{O(\\log^2 n)} \\to \\{0,1\\}^n$ is a PRG, and BPP algorithms can be derandomized by iterating over all seeds.',
    realWorld: 'This is the foundational result in derandomization: it shows that "randomness is useful in computation" is likely an illusion — complexity-theoretic hardness provides enough pseudorandomness to replace true randomness.',
    hint: 'If hard problems exist, coin flips are unnecessary in efficient algorithms.',
    formulaLinks: ['computational-complexity'],
  },
  {
    id: 31871, topic: 'avi-wigderson', difficulty: 'hard',
    question: 'Wigderson proved a fundamental theorem about zero-knowledge proofs. What did he show?',
    options: [
      'Every language in $\\text{NP}$ has a zero-knowledge proof system (assuming one-way functions exist). The prover can convince the verifier of a statement\'s truth without revealing ANY information beyond the statement\'s validity. The protocol for Graph 3-Coloring: commit to a random relabeling of a valid coloring, reveal two adjacent vertices\' colors on challenge — repeated $O(|E|)$ times gives soundness $\\leq (1 - 1/|E|)^{O(|E|)} \\leq e^{-O(1)}$.',
      'Zero-knowledge proofs exist only for languages in $\\text{P}$ — efficient computation is necessary for zero knowledge.',
      'Every language in $\\text{PSPACE}$ has a zero-knowledge proof, but $\\text{NP}$-complete languages do not.',
      'Zero-knowledge proofs require quantum communication channels to achieve perfect security.'
    ],
    correctIndex: 0,
    explanation: 'Goldreich-Micali-Wigderson (1987) showed that the NP-complete problem Graph 3-Coloring has a zero-knowledge proof. Since every NP problem reduces to 3-Coloring, this gives ZK proofs for ALL of NP. The key idea: commit to a random permutation of the coloring, then reveal only two colors on a challenged edge. The verifier learns nothing about the full coloring, but a cheater would eventually be caught.',
    realWorld: 'Zero-knowledge proofs are foundational in modern cryptography: blockchain protocols (Zcash, zkSync), digital identity verification, and secure computation all rely on this result.',
    hint: 'You can prove you know a secret without revealing anything about it — for any NP statement.',
    formulaLinks: ['zero-knowledge'],
  },
  {
    id: 31872, topic: 'avi-wigderson', difficulty: 'sota',
    question: 'Wigderson\'s work on the "natural proofs" barrier (with Razborov) limits approaches to proving $\\text{P} \\neq \\text{NP}$. What does the barrier say?',
    options: [
      'If one-way functions exist, then no "natural" proof technique can prove superpolynomial circuit lower bounds for $\\text{NP}$. A proof is "natural" if it uses a property $\\mathcal{C}$ of Boolean functions that is: (1) useful — satisfied by functions NOT in $\\text{P/poly}$, (2) constructive — decidable in time $2^{O(n)}$ given the truth table, and (3) large — satisfied by a $2^{-O(n)}$ fraction of all functions. Natural proofs are destroyed by pseudorandom functions.',
      'No proof of $\\text{P} \\neq \\text{NP}$ can be formalized in first-order Peano arithmetic.',
      'Any proof of circuit lower bounds must use non-constructive axioms like the Axiom of Choice.',
      'Natural proofs show that $\\text{P} = \\text{NP}$ relative to a random oracle, blocking relativizing techniques.'
    ],
    correctIndex: 0,
    explanation: 'The Razborov-Wigderson natural proofs barrier shows that most known circuit lower bound techniques (random restrictions, approximation by low-degree polynomials, etc.) are "natural" and therefore cannot prove $\\text{P} \\neq \\text{NP}$ if cryptography is possible. The key insight: a pseudorandom function looks indistinguishable from a random function, so natural properties can\'t distinguish easy functions from hard ones.',
    realWorld: 'This is one of three major barriers to proving $\\text{P} \\neq \\text{NP}$ (alongside relativization and algebrization). It tells us that fundamentally new proof techniques are needed — current methods are provably insufficient.',
    hint: 'If pseudorandom functions exist, you can\'t distinguish easy functions from hard ones using "large" properties.',
    formulaLinks: ['computational-complexity', 'p-vs-np'],
  },
];
