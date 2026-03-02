// hoare.ts
import type { Question } from '../types';

export const tonyHoareQuestions: Question[] = [
  {
    id: 67020,
    topic: 'tony-hoare',
    difficulty: 'easy',
    question:
      'Tony Hoare introduced Hoare logic for reasoning about program correctness. What does a Hoare triple $\\{P\\}\\ C\\ \\{Q\\}$ mean?',
    options: [
      'If precondition $P$ holds before program $C$ executes and $C$ terminates, then postcondition $Q$ holds afterward',
      'Program $C$ always terminates regardless of input',
      '$P$ and $Q$ are probabilities of success',
      'The triple encodes runtime complexity of $C$'
    ],
    correctIndex: 0,
    explanation:
      'Hoare logic uses assertions to specify and prove partial correctness of imperative programs.',
    realWorld:
      'Used in formal verification, static analysis, and the foundations of tools like Dafny and verification condition generators.',
    hint:
      'Precondition → program → postcondition.'
  },
  {
    id: 67021,
    topic: 'tony-hoare',
    difficulty: 'hard',
    question:
      'Which loop invariant best supports proving correctness of a loop that computes the sum $S=\\sum_{i=1}^{n} i$ using a counter $i$ and accumulator $s$?',
    options: [
      'Invariant: $s=\\sum_{k=1}^{i-1} k$ and $1\\le i\\le n+1$',
      'Invariant: $s=n(n+1)/2$ at every iteration',
      'Invariant: $i$ is always prime',
      'Invariant: $s$ never changes'
    ],
    correctIndex: 0,
    explanation:
      'A good invariant captures partial progress: before each iteration, $s$ equals the sum of numbers already processed.',
    realWorld:
      'Invariants are the backbone of verifying loops, data structure algorithms, and safety properties.',
    hint:
      'State what has been accumulated so far.'
  },
  {
    id: 67022,
    topic: 'tony-hoare',
    difficulty: 'hard',
    question:
      'Hoare’s partition scheme is central to Quicksort. What property does partitioning guarantee after choosing a pivot $p$?',
    options: [
      'All elements left of $p$ are $\\le p$ and all elements right of $p$ are $\\ge p$ (pivot ends in its final sorted position)',
      'The array is fully sorted after one partition',
      'All elements become distinct',
      'The pivot always becomes the smallest element'
    ],
    correctIndex: 0,
    explanation:
      'Partitioning establishes the key divide-and-conquer structure: recursively sort the two sides.',
    realWorld:
      'Quicksort is widely used in standard libraries due to its strong average performance and cache behavior.',
    hint:
      'Partition splits relative to pivot.'
  },
  {
    id: 67023,
    topic: 'tony-hoare',
    difficulty: 'sota',
    question:
      'Hoare’s CSP (Communicating Sequential Processes) models concurrency with message passing. What is a core CSP idea compared to shared-memory locking?',
    options: [
      'Processes synchronize by communicating over channels; correctness is expressed via traces/failures rather than mutex states',
      'All concurrency is handled by global variables with locks',
      'CSP requires nondeterminism to be eliminated',
      'CSP assumes a single-threaded machine'
    ],
    correctIndex: 0,
    explanation:
      'CSP treats communication as fundamental, making many concurrency properties easier to specify and reason about than low-level locks.',
    realWorld:
      'Influenced Go channels and modern concurrency patterns that avoid shared mutable state.',
    hint:
      '“Don’t share memory; communicate.”'
  },
  {
    id: 67024,
    topic: 'tony-hoare',
    difficulty: 'sota',
    question:
      'Hoare famously warned: “There are two ways of constructing a software design…” Which completion matches his point?',
    options: [
      '“One way is to make it so simple there are obviously no deficiencies, and the other is to make it so complicated there are no obvious deficiencies.”',
      '“One way is to test everything; the other is to test nothing.”',
      '“One way is to use recursion; the other is to use iteration.”',
      '“One way is to use Python; the other is to use C.”'
    ],
    correctIndex: 0,
    explanation:
      'The quote emphasizes simplicity and avoiding hidden complexity in design.',
    realWorld:
      'A guiding principle in API design, safety-critical software, and formal methods: fewer moving parts are easier to validate.',
    hint:
      'Simple enough that flaws are obvious.'
  }
];