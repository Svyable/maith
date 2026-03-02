import type { Question } from '../types';

export const torvaldsQuestions: Question[] = [
  {
    id: 31020,
    topic: 'torvalds',
    difficulty: 'hard',
    question: 'In 1992, Torvalds engaged in a famous Usenet debate with Andrew Tanenbaum regarding kernel architecture. What was the core of their disagreement?',
    options: [
      'Torvalds championed a monolithic kernel; Tanenbaum argued for a microkernel.',
      'Torvalds insisted on proprietary licensing; Tanenbaum wanted strict open-source.',
      'Torvalds favored a graphical desktop; Tanenbaum believed in command-line only.',
      'Torvalds utilized purely assembly language; Tanenbaum demanded high-level C code.'
    ],
    correctIndex: 0,
    explanation: 'Tanenbaum argued that microkernels (where system services run in user space) were mathematically superior and modular. Torvalds built Linux as a monolithic kernel (everything runs in kernel space) because it was vastly faster and more practical at the time.',
    realWorld: 'Despite theoretical arguments against it, monolithic kernels (Linux) now run the vast majority of the world’s servers, smartphones (Android), and supercomputers.',
    hint: 'One wanted a massive, fast, unified block of code; the other wanted tiny, separated, highly secure modules.',
  },
  {
    id: 31021,
    topic: 'torvalds',
    difficulty: 'easy',
    question: 'Why did Linus Torvalds create Git in exactly 10 days in 2005?',
    options: [
      'The proprietary license for BitKeeper, the tool previously used for Linux, was revoked.',
      'Microsoft purchased GitHub and threatened to close-source the Linux repositories.',
      'He needed a decentralized network to securely share his upcoming Linux 3.0 release.',
      'A massive server crash erased three months of Linux kernel commits in CVS.'
    ],
    correctIndex: 0,
    explanation: 'Linux development relied on a free license for a proprietary tool called BitKeeper. When BitMover revoked the license because a Linux developer tried to reverse-engineer it, Torvalds urgently wrote Git to replace it.',
    realWorld: 'Git is now the undisputed global standard for version control, underpinning modern software development and CI/CD pipelines.',
    hint: 'He was forced into it because the company providing their previous tool got angry and took it away.',
  },
  {
    id: 31022,
    topic: 'torvalds',
    difficulty: 'hard',
    question: 'At a mathematical level, how does Git fundamentally store the history of a codebase?',
    options: [
      'As a Directed Acyclic Graph (DAG) of cryptographically hashed snapshots.',
      'As a linear chronological log of line-by-line file differences (deltas).',
      'As a balanced binary search tree mapping file paths to specific memory addresses.',
      'As a strict relational database tying timestamps directly to user credentials.'
    ],
    correctIndex: 0,
    explanation: 'Git does not store diffs; it stores full snapshots of the project. These snapshots (commits) are linked to their parents forming a Directed Acyclic Graph, with every object identified by a SHA-1 hash.',
    realWorld: 'This structure makes branching and merging incredibly fast, as creating a branch simply means pointing a new label at an existing node in the graph.',
    hint: 'It’s a one-way mathematical web of exact copies, not a list of edits.',
  },
  {
    id: 31023,
    topic: 'torvalds',
    difficulty: 'sota',
    question: 'Which highly specific synchronization mechanism did Torvalds champion to allow the Linux kernel to scale massively on multi-core processors without lock contention?',
    options: [
      'Read-Copy-Update (RCU)',
      'Global Interpreter Lock (GIL)',
      'Strict Two-Phase Locking (2PL)',
      'Optimistic Concurrency Control (OCC)'
    ],
    correctIndex: 0,
    explanation: 'RCU allows multiple threads to read data simultaneously without locking. If a thread wants to write, it copies the data, updates the copy, and changes the pointer, waiting for old readers to finish before deleting the old data.',
    realWorld: 'RCU is the primary reason the Linux kernel can seamlessly scale from a 2-core smartphone to a 512-core enterprise supercomputer without grinding to a halt.',
    hint: 'Readers never have to wait. Writers make a clone, change the clone, and swap the pointer.',
  },
  {
    id: 31024,
    topic: 'torvalds',
    difficulty: 'easy',
    question: 'What was Torvalds’ original personal motivation for writing the code that eventually became the Linux kernel?',
    options: [
      'He wanted a terminal emulator to connect to his university’s UNIX system.',
      'He was trying to win a coding competition sponsored by the GNU Project.',
      'He wanted to reverse-engineer the proprietary MS-DOS operating system.',
      'He needed a custom driver to run a new graphics card on his 386 PC.'
    ],
    correctIndex: 0,
    explanation: 'Torvalds simply wanted a task-switching terminal emulator to connect his new Intel 386 PC to the University of Helsinki’s UNIX servers. He wrote it from bare metal up, eventually realizing he had written an operating system kernel.',
    realWorld: 'Many of the world’s most impactful technologies (Linux, the Web) started as simple, hyper-specific tools built to solve a single developer’s annoyance.',
    hint: 'He just wanted to log into his school computer from his bedroom.',
  }
];