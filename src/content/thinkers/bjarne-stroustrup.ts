import type { Question } from '../types';

export const bjarneStroustrupQuestions: Question[] = [
  {
    id: 81001, topic: 'bjarne-stroustrup', difficulty: 'easy',
    question: 'Bjarne Stroustrup created C++ by extending which existing language with object-oriented features?',
    options: ['C', 'FORTRAN', 'Pascal', 'LISP'],
    correctIndex: 0,
    explanation: 'Stroustrup began developing "C with Classes" in 1979 at Bell Labs, adding classes, inheritance, and strong typing to C. It was renamed C++ in 1983 (++ being the C increment operator).',
    realWorld: 'C++ powers game engines (Unreal), browsers (Chrome, Firefox), operating systems, databases, and high-frequency trading systems where performance is critical.',
    hint: 'The name literally means "C incremented" — an evolution of C.',
  },
  {
    id: 81002, topic: 'bjarne-stroustrup', difficulty: 'hard',
    question: 'C++ introduced the concept of RAII (Resource Acquisition Is Initialization). What does this pattern ensure?',
    options: [
      'Resources (memory, files, locks) are automatically released when their owning object goes out of scope via destructors',
      'All resources are allocated at program startup',
      'Resources are managed by a garbage collector',
      'All variables must be initialized before declaration',
    ],
    correctIndex: 0,
    explanation: 'RAII ties resource lifetime to object lifetime. Constructors acquire resources; destructors release them. When an object leaves scope, cleanup is automatic and deterministic — no garbage collector needed.',
    realWorld: 'Rust\'s ownership system is a direct evolution of RAII. Smart pointers (unique_ptr, shared_ptr) in modern C++ implement RAII for heap memory.',
    hint: 'When a local variable dies (goes out of scope), its destructor runs automatically.',
  },
  {
    id: 81003, topic: 'bjarne-stroustrup', difficulty: 'hard',
    question: 'Stroustrup\'s core design principle for C++ is "zero-overhead abstraction." What does this mean?',
    options: [
      'Abstractions (classes, templates, virtual functions) should impose no runtime cost compared to hand-written C code for the same functionality',
      'The compiler should produce zero errors',
      'Programs should use zero heap memory',
      'Source code should have zero dependencies',
    ],
    correctIndex: 0,
    explanation: 'Stroustrup insisted that you shouldn\'t have to pay (in performance) for features you don\'t use, and features you do use should be as efficient as hand-coded alternatives. Templates, for example, generate specialized code at compile time.',
    realWorld: 'This philosophy drives C++\'s dominance in latency-sensitive domains: game engines, embedded systems, and quantitative finance.',
    hint: '"What you don\'t use, you don\'t pay for. What you do use, you couldn\'t hand-code any better."',
  },
  {
    id: 81004, topic: 'bjarne-stroustrup', difficulty: 'sota',
    question: 'C++ templates enable compile-time polymorphism through which mechanism?',
    options: [
      'Monomorphization — the compiler generates a specialized version of the function/class for each type used',
      'Dynamic dispatch via virtual tables (vtables)',
      'Type erasure with runtime casts',
      'Reflection and runtime code generation',
    ],
    correctIndex: 0,
    explanation: 'Unlike virtual functions (runtime dispatch), templates produce separate compiled code for each instantiation. `vector<int>` and `vector<double>` become distinct types with no indirection overhead.',
    realWorld: 'The STL (Standard Template Library) uses this to provide generic containers and algorithms with zero abstraction overhead — a key reason C++ remains faster than languages using boxing/erasure.',
    hint: 'Each template instantiation produces a new, specialized piece of machine code.',
  },
];
