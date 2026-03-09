import type { Question } from '../types';

export const peterWeinbergerQuestions: Question[] = [
  {
    id: 31620, topic: 'peter-weinberger', difficulty: 'easy',
    question: 'Peter Weinberger is best known as the "W" in AWK. What is AWK?',
    options: [
      'A domain-specific programming language for pattern scanning and text processing, created at Bell Labs in 1977 by Aho, Weinberger, and Kernighan — one of the foundational tools of Unix.',
      'A compiler optimization framework that performs Abstract Windowed Kernel transformations on intermediate representations.',
      'An encryption algorithm (Asymmetric Weinberger Key) used in early Bell Labs secure communications.',
      'A database query language that predates SQL, designed for hierarchical data on PDP-11 systems.'
    ],
    correctIndex: 0,
    explanation: 'AWK processes text line by line, matching patterns and executing actions. Its syntax `pattern { action }` became a model for data processing languages. Weinberger also made fundamental contributions to number theory (Weinberger\'s theorem on class numbers) and created the original Bell Labs icon.',
    realWorld: 'AWK remains widely used in data pipelines, log analysis, and shell scripting 47 years after its creation. Its influence is visible in Perl, Python, and modern data processing tools.',
    hint: 'The "W" in a three-letter Unix text processing language — still used daily by system administrators worldwide.',
  },
  {
    id: 31621, topic: 'peter-weinberger', difficulty: 'hard',
    question: 'Before his computing career, Weinberger proved important results in analytic number theory. What is the Goldfeld-Weinberger-Gross-Zagier connection?',
    options: [
      'Weinberger\'s work on class numbers of imaginary quadratic fields contributed to Goldfeld\'s effective solution of the class number problem, which was completed when Gross-Zagier proved their formula $L\'(E, 1) = \\frac{\\hat{h}(P) \\cdot |\\text{disc}(K)|^{1/2}}{\\|f\\|^2}$ relating derivatives of $L$-functions to heights of Heegner points.',
      'Weinberger proved that all even numbers $> 4$ are sums of two primes conditionally on GRH, which Goldfeld-Gross-Zagier later made unconditional for sufficiently large numbers.',
      'Weinberger computed explicit bounds for Siegel zeros of Dirichlet $L$-functions, which Gross-Zagier used to prove the Birch-Swinnerton-Dyer conjecture for rank-1 curves.',
      'Weinberger showed that the class group of $\\mathbb{Q}(\\sqrt{-d})$ is cyclic for all $d > 163$, a result later refined by Gross-Zagier.'
    ],
    correctIndex: 0,
    explanation: 'The class number problem asks: for which $d$ does $\\mathbb{Q}(\\sqrt{-d})$ have class number 1? Gauss conjectured finitely many. Weinberger contributed conditional results (assuming GRH). Goldfeld showed an effective lower bound would follow from an $L$-function vanishing to order $\\geq 3$, and Gross-Zagier supplied such an example — completing the solution.',
    realWorld: 'The Gross-Zagier formula connects three deep areas: elliptic curves, modular forms, and algebraic number theory. It\'s a key ingredient in the Birch-Swinnerton-Dyer conjecture (a $1M Clay problem).',
    hint: 'His number theory work on class numbers fed into one of the great triumphs of 20th-century arithmetic geometry.',
  },
  {
    id: 31622, topic: 'peter-weinberger', difficulty: 'sota',
    question: 'AWK\'s computational model is based on a specific automata-theoretic paradigm. What is it?',
    options: [
      'AWK processes input as a stream of records (lines) split into fields, applying pattern-action rules — equivalent to a finite transducer augmented with associative arrays (hash tables) and arithmetic. Its execution model is: for each record, evaluate all patterns; if matched, execute the action block.',
      'AWK is a pure functional language based on the lambda calculus, where each rule is a higher-order function composed via monadic bind operations.',
      'AWK implements a pushdown automaton with a stack-based evaluation model, making it equivalent in power to context-free grammars.',
      'AWK is based on Turing machine simulation, where each pattern-action pair represents a state transition in a universal Turing machine.'
    ],
    correctIndex: 0,
    explanation: 'AWK\'s elegance comes from its simple computational model: read a record, split into fields ($1, $2, ...), evaluate pattern-action pairs in order, repeat. The addition of variables, arrays, and string functions makes it Turing-complete, but its natural use case is stream processing — transforming structured text with concise one-liners.',
    realWorld: 'AWK\'s record-oriented stream processing model influenced modern data tools: Apache Spark\'s RDD model, Unix pipes, and even MapReduce can be seen as distributed generalizations of AWK\'s pattern-action paradigm.',
    hint: 'Read a line, split it into fields, check patterns, run actions — the simplest possible stream processor.',
  },
];
