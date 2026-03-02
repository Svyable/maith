import type { Question } from '../types';

export const francesAllenQuestions: Question[] = [
  {
    id: 40000,
    topic: 'frances-allen',
    difficulty: 'easy',
    question: 'Frances Allen pioneered what compiler technique?',
    options: [
      'Program optimization - faster code, same function ($O(n)\\to O(1)$)',
      'Type inference - auto variable typing',
      'Garbage collection - auto memory cleanup',
      'JIT compilation - runtime code generation'
    ],
    correctIndex: 0,
    explanation: 'Analyzes data/control flow to reorder code: loop fusion, dead code elimination, common subexpression elimination.',
    realWorld: 'GCC, LLVM, Java HotSpot, V8 all use her optimization techniques.',
    hint: 'Rearranges your code to run faster without changing what it does.',
  },
  {
    id: 4440001,
    topic: 'frances-allen',
    difficulty: 'hard',
    question: 'Allen\'s interprocedural analysis does what?',
    options: [
      'Tracks data flow across function boundaries ($D_{call}=f(D_{caller})$)',
      'Unrolls loops by fixed bounds ($N_{unroll}=\\lceil N/B\\rceil$)',
      'Eliminates dead code ($\\text{use}(v)=\\emptyset$)',
      'Colors register allocation graphs'
    ],
    correctIndex: 0,
    explanation: 'Traditional optimizers see single functions. Allen connected $callgraph$ analysis across entire programs.',
    realWorld: 'Modern Link-Time Optimization (LTO) = her direct legacy.',
    hint: 'Follows variables between function calls.',
  },
  {
    id: 4440002,
    topic: 'frances-allen',
    difficulty: 'sota',
    question: 'Allen\'s flow analysis uses what graph?',
    options: [
      'Control Flow Graph + Data Flow Equations ($OUT[n] = GEN[n] \\cup (IN[n] - KILL[n])$)',
      'Call graph only (function reachability)',
      'Dominator tree (loop structure)',
      'Static Single Assignment (SSA) form'
    ],
    correctIndex: 0,
    explanation: 'CFG nodes + edges track variable states. Forward/backward data flow equations solve $IN/OUT$ sets iteratively.',
    realWorld: 'LLVM pass manager pipeline built on her formal analysis framework.',
    hint: 'Math equations trace variable values through code paths.',
  }
];
