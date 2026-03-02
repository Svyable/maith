import type { Question } from '../types';

// ---------------------------------------------------------
// 1. Charles Babbage
// ---------------------------------------------------------
export const charlesBabbageQuestions: Question[] = [
  {
    id: 31000,
    topic: 'charles-babbage',
    difficulty: 'easy',
    question: 'What fundamental architectural leap distinguished Babbage’s unbuilt Analytical Engine from his earlier Difference Engine?',
    options: [
      'It incorporated conditional branching and looping via punched cards.',
      'It utilized continuous differential calculus rather than discrete math.',
      'It was the first machine to use binary logic gates for computation.',
      'It relied entirely on automated steam valves rather than hand cranks.'
    ],
    correctIndex: 0,
    explanation: 'While the Difference Engine was essentially a massive automated calculator for polynomial tables, the Analytical Engine was Turing-complete, featuring conditional logic (the "if/then" branch) controlled by Jacquard loom punch cards.',
    realWorld: 'Conditional branching is the foundation of all modern software—without the ability to change execution paths based on state, code cannot make decisions.',
    hint: 'Think about what separates a standard calculator from a true computer.',
  },
  {
    id: 31001,
    topic: 'charles-babbage',
    difficulty: 'easy',
    question: 'Babbage separated his Analytical Engine into two primary physical components: the "Store" and the "Mill." What are their modern equivalents?',
    options: [
      'The Memory (RAM/Storage) and the Central Processing Unit (CPU/ALU).',
      'The Input Devices (Keyboard) and the Output Devices (Monitor/Printer).',
      'The Instruction Register (Cache) and the Hardware Clock Generator.',
      'The Read-Only Memory (ROM) and the Floating Point Coprocessor.'
    ],
    correctIndex: 0,
    explanation: 'The "Store" was designed to hold numbers (variables) using columns of mechanical gears, while the "Mill" was responsible for fetching them, performing arithmetic, and returning the result—mirroring modern von Neumann architecture.',
    realWorld: 'Every modern smartphone, laptop, and server still strictly adheres to this fundamental separation of state (memory) and execution (processing).',
    hint: 'One holds the data, the other crunches the numbers.',
  },
  {
    id: 31002,
    topic: 'charles-babbage',
    difficulty: 'hard',
    question: 'Unlike modern computers that operate on binary (base-2) logic, how did Babbage’s engines represent numerical values?',
    options: [
      'They used a strict decimal (base-10) system represented by ten-toothed gears.',
      'They used a hexadecimal (base-16) system to optimize the physical gear ratios.',
      'They used an analog continuum based on the tension of internal brass springs.',
      'They used a base-60 (sexagesimal) system borrowed from astronomical clocks.'
    ],
    correctIndex: 0,
    explanation: 'Babbage’s machines were strictly base-10. Each physical gear had ten distinct teeth representing the digits 0 through 9, meaning his machine did not require translation into binary for computation.',
    realWorld: 'While binary is optimal for electrical voltage states (on/off), decimal mechanical computing was successfully used in cash registers and odometers for over a century.',
    hint: 'He built it for humans who count on their fingers, without the benefit of electrical switches.',
  },
  {
    id: 31003,
    topic: 'charles-babbage',
    difficulty: 'sota',
    question: 'Ada Lovelace wrote the world’s first published computer algorithm for the Analytical Engine. What mathematical sequence did this program compute?',
    options: [
      'The Bernoulli numbers via a highly recursive sequence of operations.',
      'The prime factorization of large integers using sieve-based methods.',
      'The Fibonacci sequence utilizing initial values and iterative addition.',
      'The roots of complex polynomials using the Newton-Raphson method.'
    ],
    correctIndex: 0,
    explanation: 'Note G in Lovelace’s translation of Menabrea’s article details a step-by-step sequence of operations for calculating Bernoulli numbers—widely recognized as the first true computer program.',
    realWorld: 'Bernoulli numbers are deeply tied to the Riemann zeta function and modern number theory, proving Lovelace grasped the machine’s potential for complex abstract math.',
    hint: 'It’s a sequence of rational numbers deeply connected to the Taylor series expansions of tangent and hyperbolic tangent functions.',
  },
  {
    id: 31004,
    topic: 'charles-babbage',
    difficulty: 'hard',
    question: 'Why did the British government ultimately pull funding for Babbage’s Difference Engine Project No. 1 in 1842?',
    options: [
      'He constantly redesigned it instead of delivering a working prototype.',
      'The mechanical tolerances required were physically impossible at the time.',
      'A massive factory fire destroyed the existing brass and steel prototypes.',
      'Ada Lovelace published mathematical proofs showing the design was flawed.'
    ],
    correctIndex: 0,
    explanation: 'Babbage was a notorious perfectionist. Instead of finishing the original Difference Engine, he continuously halted manufacturing to implement new ideas and eventually pivoted to pitching the Analytical Engine, leading the government to cut their losses.',
    realWorld: 'This is history’s first recorded instance of "scope creep" and "feature paralysis" destroying a highly funded tech startup.',
    hint: 'The manufacturing technology actually existed, but the founder’s focus did not.',
  }
];