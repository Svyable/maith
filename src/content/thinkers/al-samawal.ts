import type { Question } from '../types';

export const alSamawalQuestions: Question[] = [
  {
    id: 31760, topic: 'al-samawal', difficulty: 'easy',
    question: 'Al-Samawal al-Maghribi (1130–1180) authored *The Brilliant in Algebra*. What was his key definition of algebra?',
    options: [
      'He defined algebra as "operating on unknowns using the arithmetical tools" — freeing it from geometric interpretation and treating it as a pure science of symbolic manipulation with formal rules.',
      'He defined algebra as "the geometry of equations" — insisting that every algebraic problem must have a geometric construction.',
      'He defined algebra as "the science of balancing scales" — a metaphor for maintaining equation equality.',
      'He defined algebra as "applied arithmetic for merchants" — focusing exclusively on commercial calculations.'
    ],
    correctIndex: 0,
    explanation: 'Al-Samawal\'s definition was revolutionary: algebra is about manipulating unknown quantities using arithmetic rules, regardless of geometric meaning. He extended al-Karaji\'s work, treating expressions like $\\frac{1}{x^2}$ and negative powers systematically.',
    realWorld: 'This definition anticipated modern abstract algebra by 700 years — treating algebraic structures as rule-based systems independent of any physical interpretation.',
    hint: 'He said algebra is about unknowns and rules — not shapes and pictures.',
  },
  {
    id: 31761, topic: 'al-samawal', difficulty: 'hard',
    question: 'Al-Samawal formalized rules for operating with negative numbers. What key algebraic rule did he explicitly state?',
    options: [
      'The rule of signs for multiplication: "a negative times a negative is a positive" ($(-a)(-b) = ab$), and "a negative times a positive is a negative" ($(-a)(b) = -ab$). He also extended polynomial long division to expressions with negative coefficients.',
      'The commutative law $a \\cdot b = b \\cdot a$ for all integers including negatives.',
      'The distributive law $a(b+c) = ab + ac$ applied to negative quantities.',
      'The additive inverse property: for every $a$, there exists $-a$ such that $a + (-a) = 0$.'
    ],
    correctIndex: 0,
    explanation: 'While Indian mathematicians (Brahmagupta) had stated sign rules earlier, al-Samawal embedded them into a systematic algebraic framework. He used negative coefficients freely in polynomial arithmetic and proved identities involving negative terms — treating them as legitimate mathematical objects, not geometric absurdities.',
    realWorld: 'The algebraic treatment of negative numbers was essential for the development of polynomial algebra, and eventually complex numbers and abstract algebra.',
    hint: 'Minus times minus is plus — he stated this rule explicitly and used it freely in polynomial calculations.',
  },
  {
    id: 31762, topic: 'al-samawal', difficulty: 'sota',
    question: 'Al-Samawal proved polynomial identities using tables of binomial coefficients up to $n = 12$. What computational method did he develop for polynomial division?',
    options: [
      'He developed an algorithm for dividing polynomials that produces both a quotient and remainder — analogous to long division of integers. For example, dividing $20x^6 + 2x^5 + 58x^4 + \\cdots$ by $2x^2 + 5$, computing coefficients term by term from highest degree down.',
      'He used the Euclidean algorithm to find the GCD of two polynomials, then simplified fractions of polynomials to lowest terms.',
      'He factored polynomials by testing all possible rational roots $p/q$ where $p | a_0$ and $q | a_n$.',
      'He expanded polynomial quotients as infinite geometric series $\\sum_{k=0}^\\infty r^k$ when the divisor had degree 1.'
    ],
    correctIndex: 0,
    explanation: 'Al-Samawal\'s polynomial long division algorithm works exactly like modern polynomial division: divide the leading term of the dividend by the leading term of the divisor, multiply and subtract, repeat. He also explored what happens when division doesn\'t terminate — essentially discovering polynomial "decimal" expansions (Laurent series truncations).',
    realWorld: 'Polynomial long division is used in every algebra course today and is fundamental to computer algebra systems, error-correcting codes (CRC), and control theory.',
    hint: 'He did long division on polynomials — dividing the highest-degree terms first and working down, just like dividing numbers.',
  },
];
