import type { Question } from '../types';

export const alKarajiQuestions: Question[] = [
  {
    id: 31740, topic: 'al-karaji', difficulty: 'easy',
    question: 'Al-Karaji (953–1029) made algebra independent of geometry. What foundational proof technique did he introduce to mathematics?',
    options: [
      'Mathematical induction — he was the first to use a recursive proof method, proving the binomial theorem and identities like $1^3 + 2^3 + \\cdots + n^3 = (1 + 2 + \\cdots + n)^2$ by showing each case follows from the previous one.',
      'Proof by contradiction — assuming the negation of a statement and deriving a logical inconsistency.',
      'Proof by exhaustion — checking all possible cases systematically.',
      'Constructive proof — exhibiting an explicit example to prove existence.'
    ],
    correctIndex: 0,
    explanation: 'Al-Karaji\'s proof of $\\sum_{k=1}^n k^3 = \\left(\\sum_{k=1}^n k\\right)^2$ proceeds by showing that if the formula holds for $n$, it holds for $n+1$ — the essential structure of mathematical induction. He also used this method for the binomial expansion $(a+b)^n$.',
    realWorld: 'Mathematical induction is one of the most important proof techniques in all of mathematics and computer science — used to prove properties of algorithms, data structures, and recursive programs.',
    hint: 'He proved formulas by showing each step follows from the previous one — the "domino" method of proof.',
  },
  {
    id: 31741, topic: 'al-karaji', difficulty: 'hard',
    question: 'Al-Karaji studied the binomial coefficients, constructing what we now call Pascal\'s triangle. What identity relating binomial coefficients did he prove?',
    options: [
      '$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ — the recurrence relation showing each entry in the triangle is the sum of the two entries above it. He used this to expand $(a+b)^n$ for arbitrary positive integers $n$.',
      '$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ — the factorial formula for binomial coefficients.',
      '$\\sum_{k=0}^n \\binom{n}{k} = 2^n$ — the sum of all binomial coefficients in a row equals a power of 2.',
      '$\\binom{n}{k} = \\binom{n}{n-k}$ — the symmetry of binomial coefficients.'
    ],
    correctIndex: 0,
    explanation: 'Al-Karaji\'s triangle predates Pascal by over 600 years. He proved the recurrence $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ and used it systematically for polynomial expansion. His student al-Samawal extended this work, creating tables of binomial coefficients up to $n = 12$.',
    realWorld: 'The binomial recurrence is the foundation of combinatorics, probability theory, and the binomial distribution — central to statistics, machine learning, and information theory.',
    hint: 'Each number in the triangle is the sum of the two numbers directly above it.',
  },
  {
    id: 31742, topic: 'al-karaji', difficulty: 'sota',
    question: 'Al-Karaji freed algebra from its geometric origins. What was his key conceptual breakthrough?',
    options: [
      'He defined an arithmetic of polynomials with arbitrary powers $x^n$ for all positive integers $n$, establishing rules for addition, subtraction, multiplication, and division of polynomial expressions without any geometric interpretation — creating abstract algebraic manipulation.',
      'He proved the fundamental theorem of algebra: every polynomial of degree $n$ has exactly $n$ roots (counting multiplicity).',
      'He solved the general cubic equation $x^3 + px + q = 0$ by radicals, 500 years before Cardano.',
      'He introduced negative numbers as legitimate solutions to equations, breaking with the Greek tradition of positive-only quantities.'
    ],
    correctIndex: 0,
    explanation: 'Al-Khwarizmi\'s algebra was rooted in geometry — every quantity represented a length or area. Al-Karaji broke free: he treated polynomials as pure arithmetic objects, defining operations on expressions like $x^5 + 3x^3 - 2x$ without any geometric meaning. He also extended the index laws ($x^m \\cdot x^n = x^{m+n}$) to arbitrary positive integer exponents.',
    realWorld: 'This abstraction — treating algebraic expressions as objects you manipulate by rules, not geometric constructions — is the foundation of all modern algebra, from high school through abstract algebra.',
    hint: 'He said: polynomials are numbers you can add, multiply, and divide — you don\'t need to draw pictures anymore.',
  },
];
