// backus.ts
import type { Question } from '../types';

export const johnBackusQuestions: Question[] = [
  {
    id: 67015,
    topic: 'john-backus',
    difficulty: 'easy',
    question:
      'John Backus led the creation of FORTRAN. What was FORTRAN’s big breakthrough for programmers?',
    options: [
      'A high-level language with an optimizing compiler that made scientific computing practical without hand-written assembly',
      'The first language to use garbage collection',
      'The first purely functional language with lazy evaluation',
      'A proof system for program correctness'
    ],
    correctIndex: 0,
    explanation:
      'FORTRAN (Formula Translation) showed that high-level code could be compiled into efficient machine code, unlocking widespread scientific and engineering computing.',
    realWorld:
      'Many HPC codes (numerics, weather, physics) still rely on modern Fortran descendants and compiler optimizations pioneered in this era.',
    hint:
      'It convinced people compilers could be fast.'
  },
  {
    id: 67016,
    topic: 'john-backus',
    difficulty: 'hard',
    question:
      'Backus also popularized a formal grammar notation in the ALGOL era. What does “BNF” (Backus–Naur Form) describe?',
    options: [
      'A way to specify the syntax of programming languages using production rules like $\\langle expr\\rangle \\to \\langle expr\\rangle + \\langle term\\rangle$',
      'A method for proving programs correct using invariants',
      'A runtime memory model for safe pointer arithmetic',
      'A compression algorithm for source code'
    ],
    correctIndex: 0,
    explanation:
      'BNF describes syntactic structure via nonterminals and productions, forming the basis for parsers and compiler frontends.',
    realWorld:
      'Language specs (from SQL to JavaScript) use grammar formalisms derived from BNF/EBNF.',
    hint:
      'It’s a notation for language syntax.'
  },
  {
    id: 67017,
    topic: 'john-backus',
    difficulty: 'hard',
    question:
      'In his 1977 Turing Award lecture “Can Programming Be Liberated from the von Neumann Style?”, Backus criticized “von Neumann bottlenecks.” What was he mainly arguing for?',
    options: [
      'Functional / algebraic programming with composition, avoiding mutable state and step-by-step assignment-heavy code',
      'More global variables to improve performance',
      'Replacing compilers with interpreters only',
      'Eliminating math from programming entirely'
    ],
    correctIndex: 0,
    explanation:
      'Backus argued that assignment-centric, stateful programming leads to complexity and that function composition and higher-level algebraic reasoning can improve clarity and correctness.',
    realWorld:
      'Functional ideas influence modern languages (Haskell, OCaml, Scala, F#) and mainstream features (map/reduce, immutability, pipelines).',
    hint:
      'He wanted less “update memory cell” programming.'
  },
  {
    id: 67018,
    topic: 'john-backus',
    difficulty: 'sota',
    question:
      'A central functional-programming idea aligned with Backus is referential transparency. What does it mean?',
    options: [
      'An expression can be replaced by its value without changing program behavior (no hidden side effects)',
      'Every function must have exactly one argument',
      'Programs must be written without recursion',
      'All computation must be done in assembly for transparency'
    ],
    correctIndex: 0,
    explanation:
      'If expressions have no side effects, reasoning becomes algebraic: substitution preserves meaning, enabling safer refactoring and optimization.',
    realWorld:
      'Compiler optimizations (common subexpression elimination) and parallelization are easier when computations are pure.',
    hint:
      '“Replace equals with equals” safely.'
  },
  {
    id: 67019,
    topic: 'john-backus',
    difficulty: 'sota',
    question:
      'Backus-style composition emphasizes building programs from combinators. Which identity best expresses function composition?',
    options: [
      '$(f\\circ g)(x)=f(g(x))$',
      '$(f\\circ g)(x)=g(f(x))$',
      '$f\\circ g = f+g$',
      '$f\\circ g = f\\times g$'
    ],
    correctIndex: 0,
    explanation:
      'Composition chains transformations: apply $g$ first, then $f$. This is the core glue of functional pipelines.',
    realWorld:
      'Data pipelines and FP-style code often read as compositions of transformations.',
    hint:
      'Inside function runs first.'
  }
];