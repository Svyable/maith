import type { Question } from '../types';

export const kenThompsonQuestions: Question[] = [
  {
    id: 31015,
    topic: 'ken-thompson',
    difficulty: 'easy',
    question: 'Ken Thompson created the B programming language in 1969. Why did Dennis Ritchie subsequently create the C programming language to replace it?',
    options: [
      'B lacked data types, treating everything as a generic "word" in memory.',
      'B was legally proprietary to Bell Labs, preventing it from being distributed.',
      'B was purely interpreted and could not be compiled into raw machine code.',
      'B relied on a heavily nested syntax that made recursive algorithms impossible.'
    ],
    correctIndex: 0,
    explanation: 'B was an untyped language. It treated everything (chars, integers, pointers) as a single machine word. As PDP-11 computers introduced byte-addressable memory, Ritchie created C to explicitly support data types (like `char` and `int`).',
    realWorld: 'C became the foundational language of modern computing, heavily influencing C++, Java, and Python’s core implementation.',
    hint: 'In B, the computer didn’t know the difference between a character and a number.',
  },
  {
    id: 31016,
    topic: 'ken-thompson',
    difficulty: 'sota',
    question: 'In his Turing Award speech "Reflections on Trusting Trust," Thompson described an undetectable backdoor. How did this theoretical hack function?',
    options: [
      'The compiler itself was modified to inject the backdoor during compilation of the OS.',
      'The hardware microcode was altered to selectively bypass kernel-level security checks.',
      'A polymorphic virus altered its own source code during execution to evade detection.',
      'The network protocol stack was rewritten to silently copy packet headers to a hidden port.'
    ],
    correctIndex: 0,
    explanation: 'Thompson showed that if you compromise the compiler, it can inject a backdoor into the login program, AND inject a backdoor into future versions of the compiler. The source code remains perfectly clean, making the hack invisible.',
    realWorld: 'This highlighted that software security fundamentally requires trusting the entire chain of tools used to build it—a massive issue in modern supply chain security.',
    hint: 'You are looking at clean source code, but the tool translating it is lying to you.',
  },
  {
    id: 31017,
    topic: 'ken-thompson',
    difficulty: 'easy',
    question: 'Which of the following best summarizes the core tenet of the "Unix Philosophy" championed by Thompson?',
    options: [
      'Write small, modular programs that do one thing well and pipe them together.',
      'Build monolithic, highly integrated systems to ensure maximum execution speed.',
      'Enforce strict graphical user interfaces to abstract away the command line.',
      'Prioritize complex data structures over simple algorithms to save memory.'
    ],
    correctIndex: 0,
    explanation: 'The Unix philosophy advocates for modularity: writing simple, independent tools (like `grep`, `ls`, `sort`) that communicate through plain text streams using pipes (`|`).',
    realWorld: 'This modular approach allows developers to chain simple commands together to perform incredibly complex tasks without writing custom software.',
    hint: 'Do one thing perfectly, and learn to talk to other programs.',
  },
  {
    id: 31018,
    topic: 'ken-thompson',
    difficulty: 'hard',
    question: 'Alongside Rob Pike, Ken Thompson famously designed UTF-8 on a placemat in a New Jersey diner. What was the brilliant structural feature that made UTF-8 dominate the internet?',
    options: [
      'It is strictly backward compatible with 7-bit ASCII text.',
      'It compresses all foreign characters into a single 8-bit byte.',
      'It dynamically swaps endianness based on the host processor.',
      'It encrypts text streams by default to prevent packet sniffing.'
    ],
    correctIndex: 0,
    explanation: 'UTF-8 is a variable-width encoding that perfectly overlaps with ASCII. Any standard English ASCII text file is already perfectly valid UTF-8, which allowed the internet to seamlessly transition to global language support without breaking older systems.',
    realWorld: 'Today, UTF-8 encodes over 98% of all web pages on the internet.',
    hint: 'It didn\'t break any existing English-language software.',
  },
  {
    id: 31019,
    topic: 'ken-thompson',
    difficulty: 'hard',
    question: 'Before building Unix, Thompson built custom hardware named "Belle." What was Belle designed to do?',
    options: [
      'Play world-class chess by analyzing millions of board positions per second.',
      'Route telephone calls dynamically across the Bell Labs internal network.',
      'Compile high-level programming languages directly into raw silicon architecture.',
      'Generate cryptographic hashes for early password storage implementations.'
    ],
    correctIndex: 0,
    explanation: 'Belle was a dedicated chess computer featuring custom hardware that generated and evaluated moves incredibly fast. It won the World Computer Chess Championship in 1980.',
    realWorld: 'Belle pioneered the approach of using specialized hardware for specific algorithmic tasks—the direct ancestor of modern GPUs and ASICs used in AI.',
    hint: 'It was built to defeat humans at a very specific 64-square board game.',
  }
];