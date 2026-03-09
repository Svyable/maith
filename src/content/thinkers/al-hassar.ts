import type { Question } from '../types';

export const alHassarQuestions: Question[] = [
  {
    id: 31840, topic: 'al-hassar', difficulty: 'easy',
    question: 'Al-Hassar (12th century) was a Maghrebi mathematician who made a simple but enormously influential notational innovation. What did he introduce?',
    options: [
      'The modern fraction bar notation — writing a fraction as a numerator above a horizontal line with the denominator below: $\\frac{a}{b}$. This notation was transmitted to Europe through Fibonacci and is still used universally today.',
      'The decimal point notation for separating integers from fractional parts.',
      'The use of vinculum (overline) to group terms in algebraic expressions.',
      'The vertical bar notation for absolute value: $|x|$.'
    ],
    correctIndex: 0,
    explanation: 'Before al-Hassar, fractions were written in various confusing ways — sometimes as words, sometimes as ratios without clear separation. Al-Hassar standardized the numerator-over-denominator format with a horizontal line, which Fibonacci adopted in his *Liber Abaci* (1202), transmitting it to all of European mathematics.',
    realWorld: 'Every fraction you\'ve ever written — from $\\frac{1}{2}$ in elementary school to $\\frac{dy}{dx}$ in calculus — uses the notation that al-Hassar standardized 900 years ago.',
    hint: 'Something so fundamental that you probably never wondered who invented it — the line between numerator and denominator.',
  },
  {
    id: 31841, topic: 'al-hassar', difficulty: 'hard',
    question: 'Al-Hassar\'s *Kitāb al-Bayān* (Book of Demonstration) systematized arithmetic operations. What was his contribution to the theory of divisibility?',
    options: [
      'He developed systematic divisibility rules for testing whether a number is divisible by 2, 3, 5, 7, 8, 9, and 11 — expressed as algorithms operating on the digits of the number in its decimal representation.',
      'He proved the fundamental theorem of arithmetic: every integer > 1 has a unique prime factorization.',
      'He discovered the sieve of al-Hassar, an improvement over the sieve of Eratosthenes for finding primes.',
      'He proved Wilson\'s theorem: $(p-1)! \\equiv -1 \\pmod{p}$ for any prime $p$.'
    ],
    correctIndex: 0,
    explanation: 'Al-Hassar provided clear algorithmic rules: a number is divisible by 3 if its digit sum is divisible by 3, by 9 if its digit sum is divisible by 9, by 11 if its alternating digit sum is divisible by 11, etc. These rules exploit properties of $10 \\equiv 1 \\pmod{3}$, $10 \\equiv 1 \\pmod{9}$, $10 \\equiv -1 \\pmod{11}$.',
    realWorld: 'These divisibility rules are still taught in elementary number theory and used in checksum algorithms (ISBN codes, credit card validation via the Luhn algorithm).',
    hint: 'Check divisibility by summing digits, alternating digits, or checking the last few — rules every student learns.',
  },
  {
    id: 31842, topic: 'al-hassar', difficulty: 'sota',
    question: 'Al-Hassar\'s work is part of the Maghreb mathematical tradition that developed independently from the eastern Islamic schools. What made this tradition distinctive?',
    options: [
      'The Maghreb school prioritized algorithmic and computational methods over geometric proof — developing efficient procedures for arithmetic, extraction of roots, and algebraic manipulation that were optimized for practical computation, including early symbolic abbreviations that evolved into al-Qalasadi\'s proto-symbolic algebra.',
      'The Maghreb school rejected the use of irrational numbers entirely, working only with rational arithmetic.',
      'The Maghreb school developed mathematics primarily for architectural applications, creating sophisticated tiling algorithms.',
      'The Maghreb school focused exclusively on astronomical calculations, with no contributions to pure mathematics.'
    ],
    correctIndex: 0,
    explanation: 'The Maghreb tradition (Morocco, Tunisia, Algeria, Al-Andalus) emphasized computational efficiency and algorithmic clarity. While eastern scholars like al-Karaji and al-Samawal advanced theoretical algebra, the Maghreb school made mathematics more "computable" — developing the notation, algorithms, and procedures that would be transmitted to Europe through Spain and Fibonacci.',
    realWorld: 'This computational emphasis makes the Maghreb tradition the ancestor of algorithmic thinking. Their focus on efficient procedures for calculation anticipates the computer science approach to mathematics.',
    hint: 'They cared about computing efficiently — not just proving theorems — developing the algorithms and notation that Europe would later adopt.',
  },
];
