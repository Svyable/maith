import type { Question } from '../types';

export const guidoVanRossumQuestions: Question[] = [
  {
    id: 81101, topic: 'guido-van-rossum', difficulty: 'easy',
    question: 'Guido van Rossum created Python in 1991. What was his primary design goal?',
    options: [
      'Readability and simplicity — code should read like English and be easy to learn',
      'Maximum execution speed above all else',
      'Proving mathematical theorems about programs',
      'Binary compatibility with C libraries',
    ],
    correctIndex: 0,
    explanation: 'Van Rossum designed Python around the principle that "code is read much more often than it is written." Significant whitespace, clear syntax, and "one obvious way to do it" prioritize human readability.',
    realWorld: 'Python became the world\'s most popular language because of this philosophy — it\'s the #1 language for AI/ML, data science, education, and scripting.',
    hint: 'This language uses indentation instead of braces to define code blocks.',
  },
  {
    id: 81102, topic: 'guido-van-rossum', difficulty: 'hard',
    question: 'Python\'s "duck typing" philosophy is summarized as:',
    options: [
      '"If it walks like a duck and quacks like a duck, then it is a duck" — objects are defined by behavior, not type declarations',
      '"Every variable must be declared as a duck before use"',
      '"Only duck-shaped data structures are allowed"',
      '"Type checking happens at compile time using duck annotations"',
    ],
    correctIndex: 0,
    explanation: 'Duck typing means Python checks what an object can *do* (its methods and properties) rather than what it *is* (its class). You can pass any object to a function as long as it supports the required operations.',
    realWorld: 'This flexibility enables Python\'s rich ecosystem of interoperable libraries — NumPy arrays, Pandas DataFrames, and PyTorch tensors all work with the same code because they implement the same interfaces.',
    hint: 'It doesn\'t matter what type an object is — only whether it has the right methods.',
  },
  {
    id: 81103, topic: 'guido-van-rossum', difficulty: 'hard',
    question: 'Van Rossum held the title "BDFL" in the Python community until 2018. What does it stand for?',
    options: [
      'Benevolent Dictator For Life — final authority on language design decisions',
      'Best Developer For Languages',
      'Binary Data Format Leader',
      'Board Director For Licensing',
    ],
    correctIndex: 0,
    explanation: 'As BDFL, van Rossum had final say on Python Enhancement Proposals (PEPs). He stepped down in 2018 after the contentious PEP 572 (walrus operator :=), and Python adopted a steering council governance model.',
    realWorld: 'Many open-source projects struggle with governance. Python\'s successful transition from BDFL to council showed that communities can evolve their leadership structures.',
    hint: 'A tongue-in-cheek title for an open-source project leader with ultimate decision-making power.',
  },
  {
    id: 81104, topic: 'guido-van-rossum', difficulty: 'sota',
    question: 'Python\'s Global Interpreter Lock (GIL) is a mutex that:',
    options: [
      'Allows only one thread to execute Python bytecode at a time, simplifying memory management but limiting CPU-bound parallelism',
      'Prevents any file I/O from occurring during computation',
      'Locks the entire operating system during Python execution',
      'Prevents importing external modules at runtime',
    ],
    correctIndex: 0,
    explanation: 'The GIL ensures thread safety for CPython\'s reference-counting garbage collector but means CPU-bound threads can\'t truly run in parallel. I/O-bound threads can still benefit from threading. PEP 703 (Python 3.13+) introduces an experimental free-threaded mode.',
    realWorld: 'The GIL is why Python uses multiprocessing (separate processes) rather than multithreading for CPU parallelism. Libraries like NumPy release the GIL during C-level computation.',
    hint: 'This lock is the reason Python threads don\'t speed up CPU-bound work on multi-core machines.',
  },
];
