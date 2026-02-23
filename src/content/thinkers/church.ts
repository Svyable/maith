import type { Question } from '../types';

export const churchQuestions: Question[] = [
  {
    id: 21750,
    topic: 'church',
    difficulty: 'sota',
    question: 'Church\'s lambda calculus represents natural number n as what?',
    options: [
      'λf.λx. f(f(...f(x)...)) with n applications of f (Church numeral)',
      'The binary encoding of n as a lambda term',
      'λn. n + 1 applied recursively',
      'A pair (n, 0) encoded as nested abstractions'
    ],
    correctIndex: 0,
    explanation: 'Church numeral n̄ = λf.λx. fⁿ(x), where fⁿ means f composed n times. So 0̄ = λf.λx. x, 1̄ = λf.λx. f(x), 2̄ = λf.λx. f(f(x)). Addition, multiplication, and exponentiation can all be defined purely in terms of function application.',
    realWorld: 'Church numerals are the foundation of functional programming. Haskell, Lisp, and ML all descend from lambda calculus.',
    hint: 'The number n is "apply f exactly n times to x."'
  },
  {
    id: 21751,
    topic: 'church',
    difficulty: 'sota',
    question: 'The Church-Turing thesis asserts what fundamental equivalence?',
    options: [
      'Every effectively computable function is computable by a Turing machine (or equivalently, λ-definable)',
      'Lambda calculus is strictly more powerful than Turing machines',
      'All mathematical statements are decidable by mechanical computation',
      'Quantum computers can solve problems Turing machines cannot'
    ],
    correctIndex: 0,
    explanation: 'Church and Turing independently proved in 1936 that lambda calculus and Turing machines compute exactly the same class of functions. The Church-Turing thesis (unprovable, as it relates informal "effective computation" to formal models) asserts this is ALL of computation.',
    realWorld: 'The thesis implies no programming language can compute more than any other — they\'re all equivalent in computational power (though not efficiency).',
    hint: 'Church used lambda calculus, Turing used machines — they computed the same functions.'
  },
  {
    id: 21752,
    topic: 'church',
    difficulty: 'sota',
    question: 'Church proved the Entscheidungsproblem is undecidable. What exactly did he show?',
    options: [
      'There is no algorithm to decide whether an arbitrary statement in first-order logic is provable',
      'Every consistent formal system is complete',
      'Lambda calculus cannot express recursive functions',
      'Predicate logic is decidable but slow (EXPTIME-complete)'
    ],
    correctIndex: 0,
    explanation: 'Church proved (1936) that the decision problem for first-order logic — "given a formula φ, is φ valid?" — is undecidable. He showed this by encoding the halting problem into first-order validity. Turing independently proved the same result via a different method.',
    realWorld: 'This result means no AI can be a perfect theorem prover: there will always be true statements it cannot verify mechanically.',
    hint: 'Hilbert asked: "Can we mechanically decide all math?" Church answered: "No."'
  },
];
