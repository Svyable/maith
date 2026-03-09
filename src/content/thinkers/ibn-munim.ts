import type { Question } from '../types';

export const ibnMunimQuestions: Question[] = [
  {
    id: 31850, topic: 'ibn-munim', difficulty: 'easy',
    question: 'Ibn Munim al-Abdari (d. 1228) made pioneering contributions to a branch of mathematics that would not be formalized in Europe for centuries. What did he study?',
    options: [
      'Combinatorics — he systematically computed the number of ways to arrange and combine elements, deriving formulas for permutations and combinations that anticipate Pascal\'s work by 400 years.',
      'Topology — he studied the properties of surfaces that remain unchanged under continuous deformation.',
      'Group theory — he classified symmetries of geometric objects using algebraic structures.',
      'Calculus of variations — he found curves that minimize path length between two points.'
    ],
    correctIndex: 0,
    explanation: 'In his work *Fiqh al-Hisāb* (Science of Calculation), Ibn Munim developed systematic methods for counting permutations and combinations. He constructed tables equivalent to $\\binom{n}{k}$ and used them to solve linguistic problems (counting possible Arabic words of given length from given letters).',
    realWorld: 'Combinatorics is fundamental to computer science (algorithm analysis), probability theory, cryptography, and information theory. Ibn Munim\'s work shows these ideas have deep roots in Islamic mathematics.',
    hint: 'He counted arrangements and selections — how many different words can you make from a set of letters?',
  },
  {
    id: 31851, topic: 'ibn-munim', difficulty: 'hard',
    question: 'Ibn Munim applied his combinatorial methods to a linguistic problem. What was this application?',
    options: [
      'He computed the number of possible Arabic words of length $n$ from an alphabet of $k$ consonants, accounting for the rules of Arabic morphology. This required him to develop formulas for combinations with constraints — essentially solving a constrained combinatorial enumeration problem.',
      'He computed the number of distinct meanings a single Arabic root can have, based on vowel pattern permutations.',
      'He determined the maximum number of rhyming couplets possible in Arabic poetry using combinatorial analysis.',
      'He counted the number of valid sentences in Arabic grammar using a context-free grammar formalism.'
    ],
    correctIndex: 0,
    explanation: 'Arabic words are built from 3-consonant roots (e.g., k-t-b for writing). Ibn Munim asked: how many distinct roots can be formed from 28 consonants? This is $\\binom{28}{3} \\times$ (number of valid orderings), with constraints excluding certain letter combinations. He solved this systematically, producing results equivalent to modern combinatorial enumeration.',
    realWorld: 'This is an early example of computational linguistics — using mathematical methods to analyze language structure. Modern NLP and corpus linguistics use similar combinatorial reasoning.',
    hint: 'He asked: how many different 3-consonant roots can Arabic possibly have? — a combinatorial question about language.',
  },
  {
    id: 31852, topic: 'ibn-munim', difficulty: 'sota',
    question: 'Ibn Munim derived the general formula for combinations. What result did he prove?',
    options: [
      'He proved $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ (Pascal\'s recurrence) and used it to build complete triangular tables of binomial coefficients. He also computed $\\binom{n}{k}$ directly as the product formula $\\frac{n(n-1)\\cdots(n-k+1)}{k!}$ — all 400 years before Pascal.',
      'He proved $\\binom{n}{k} = \\binom{n}{n-k}$ (symmetry) but not the recurrence relation.',
      'He computed $\\binom{n}{k}$ only for $k = 2$ (triangular numbers) and $k = 3$ (tetrahedral numbers).',
      'He proved the binomial theorem $(1+x)^n = \\sum \\binom{n}{k} x^k$ for all real $n$, anticipating Newton.'
    ],
    correctIndex: 0,
    explanation: 'Ibn Munim\'s combinatorial tables and proofs are remarkably complete. He independently discovered the same recurrence that al-Karaji used and that Pascal would later popularize. His direct product formula $\\binom{n}{k} = n!/(k!(n-k)!)$ was derived from first principles by counting ordered selections and dividing by the number of orderings.',
    realWorld: 'The binomial coefficient formula is one of the most-used formulas in all of mathematics — appearing in probability, statistics, combinatorics, algebra, and the analysis of algorithms.',
    hint: 'He built the triangle of binomial coefficients and proved both the recurrence and the product formula — 400 years before it was named after Pascal.',
  },
];
