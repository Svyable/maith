import type { Question } from '../types';

export const dedekindQuestions: Question[] = [
  {
    id: 31080,
    topic: 'richard-dedekind',
    difficulty: 'easy',
    question: 'Richard Dedekind solved a major crisis in mathematical foundations by rigorously defining the real numbers using "Dedekind cuts." What exactly is a Dedekind cut?',
    options: [
      'A method of splitting the rational numbers into two sets (A and B) where all elements in A are strictly less than all elements in B.',
      'A geometric algorithm for slicing a multi-dimensional cone to perfectly extract irrational geometric curves.',
      'A logical paradox that completely separates finite, countable numbers from infinitely uncountably large numbers.',
      'A topological operation that cuts a continuous manifold into two distinct, non-overlapping algebraic spaces.'
    ],
    correctIndex: 0,
    explanation: 'Dedekind realized that an irrational number (like $\\sqrt{2}$) isn\'t a fraction, but it creates a perfect "cut" in the fractions. He defined an irrational number as the exact boundary separating all the fractions smaller than it from all the fractions larger than it.',
    realWorld: 'This finally gave mathematics a structurally sound, non-geometric way to define the continuum of numbers, permanently fixing the foundational holes left by the ancient Greeks.',
    hint: 'He defined a number by splitting all the fractions in the universe into a "less than" pile and a "greater than" pile.',
  },
  {
    id: 31081,
    topic: 'richard-dedekind',
    difficulty: 'hard',
    question: 'Dedekind was the very first mathematician to provide a rigorous, non-circular definition for what fundamental concept, simply by observing a mapping to a proper subset?',
    options: [
      'The definition of an infinite set.',
      'The definition of an imaginary number.',
      'The definition of a geometric point.',
      'The definition of a zero vector.'
    ],
    correctIndex: 0,
    explanation: 'Before Dedekind, infinity was just a vague concept of "never ending." Dedekind gave it a strict mathematical definition: A set is infinite if and only if it can be mapped one-to-one with a proper subset of itself (e.g., mapping all whole numbers to all even numbers).',
    realWorld: 'This rigorous definition allowed mathematics to stop treating infinity as a philosophy and start treating it as a usable algebraic object.',
    hint: 'He defined this concept by proving you can take a piece away from it, and it still remains the exact same size.',
  },
  {
    id: 31082,
    topic: 'richard-dedekind',
    difficulty: 'sota',
    question: 'In ring theory, Dedekind introduced the concept of "ideals" to restore unique factorization. Why did standard unique prime factorization suddenly fail, prompting this invention?',
    options: [
      'In certain algebraic number fields (like $\\mathbb{Z}[\\sqrt{-5}]$), numbers could be factored into irreducible elements in more than one distinct way.',
      'The introduction of negative numbers meant that every prime factor could be infinitely multiplied by negative one, breaking uniqueness.',
      'Transfinite numbers cannot be factored because they do not have a defined strictly ending integer value to divide.',
      'Fractional decimal numbers possess infinitely many prime configurations depending on the mathematical radix of the base system.'
    ],
    correctIndex: 0,
    explanation: 'In normal integers, 6 = 2 x 3. But in extended number systems like $a + b\\sqrt{-5}$, a number like 6 can be factored in two completely different ways: 2 x 3 AND $(1 + \\sqrt{-5}) \\times (1 - \\sqrt{-5})$. Dedekind invented "ideals" (sets of numbers) to restore order, showing that while numbers might not factor uniquely, their ideals always do.',
    realWorld: 'Ideal theory became the absolute foundation of modern abstract algebra and algebraic geometry.',
    hint: 'The fundamental rule that "every number is built from a unique set of primes" suddenly broke when square roots of negative numbers were introduced.',
  },
  {
    id: 31083,
    topic: 'richard-dedekind',
    difficulty: 'hard',
    question: 'Dedekind\'s work was deeply intertwined with and foundational to the highly controversial set theory developed by which of his close friends and correspondents?',
    options: [
      'Georg Cantor, who used Dedekind\'s rigorous definitions to map out the different sizes of infinity.',
      'Carl Friedrich Gauss, who relied on Dedekind\'s algebra to prove the fundamental theorem of algebra.',
      'David Hilbert, who used Dedekind\'s cuts to formulate his famous 23 unsolved mathematical problems.',
      'Kurt Gödel, who directly used Dedekind\'s ideal theory to construct his famous incompleteness theorems.'
    ],
    correctIndex: 0,
    explanation: 'Dedekind and Cantor were close friends and constant letter-writers. Dedekind\'s strict definition of infinite sets and continuous numbers provided the logical scaffolding Cantor needed to build his groundbreaking (and heavily attacked) theory of transfinite numbers.',
    realWorld: 'Without Dedekind\'s emotional support and mathematical validation, Cantor\'s set theory might not have survived the brutal attacks from classical mathematicians like Kronecker.',
    hint: 'This friend famously proved that some infinities are actually larger than other infinities.',
  },
  {
    id: 31084,
    topic: 'richard-dedekind',
    difficulty: 'hard',
    question: 'The concept of a "Dedekind domain" is heavily utilized in algebraic number theory. Which of the following is a defining, required characteristic of a Dedekind domain?',
    options: [
      'Every non-zero proper ideal factors uniquely into a product of prime ideals.',
      'Every polynomial generated within the domain possesses exactly one definitively real algebraic root.',
      'The domain contains exactly one prime number and infinitely many strictly composite derivatives.',
      'The domain is structurally isomorphic to the Cartesian coordinate plane under linear transformation.'
    ],
    correctIndex: 0,
    explanation: 'A Dedekind domain is an integral domain where the "ideal" structure is perfect. Even if individual numbers fail to factor uniquely into primes, every single non-zero ideal in a Dedekind domain guarantees a unique factorization into prime ideals.',
    realWorld: 'This mathematical structure is used extensively in cryptography, specifically in the creation of advanced error-correcting codes and lattice-based encryption algorithms.',
    hint: 'It is a mathematical space where the concept of "prime factoring" always works flawlessly for ideals.',
  }
];