import type { Question } from "../types";

export const computerScienceQuestions: Question[] = [
  // ── Algorithms ──────────────────────────────────────────────
  {
    id: 60001,
    topic: "algorithms",
    difficulty: "easy",
    question: "The time complexity of binary search on a sorted array of $n$ elements is:",
    options: ["$O(\\log n)$", "$O(n)$", "$O(n \\log n)$", "$O(1)$"],
    correctIndex: 0,
    explanation: "Binary search halves the search space at each step, giving $O(\\log n)$ comparisons.",
    realWorld: "Used in database indexing, spell checkers, and searching sorted datasets.",
    hint: "Each comparison eliminates half the remaining elements.",
    symbolLinks: {
      n: "nu",
      O: "omicron",
      "\\log": "lambda",
    },
    glossaryLinks: ["big-o"],
  },
  {
    id: 60002,
    topic: "algorithms",
    difficulty: "hard",
    question:
      "The Master Theorem solves recurrences of the form $T(n) = aT(n/b) + f(n)$. If $f(n) = \\Theta(n^{\\log_b a})$, then $T(n) = $:",
    options: [
      "$\\Theta(n^{\\log_b a} \\log n)$",
      "$\\Theta(n^{\\log_b a})$",
      "$\\Theta(f(n))$",
      "$\\Theta(n \\log n)$",
    ],
    correctIndex: 0,
    explanation:
      "This is Case 2 of the Master Theorem: when $f(n)$ grows at the same rate as $n^{\\log_b a}$, an extra $\\log n$ factor appears.",
    realWorld:
      "The Master Theorem characterizes the complexity of divide-and-conquer algorithms like merge sort ($T(n) = 2T(n/2) + O(n)$).",
    hint: "Case 2: the work at each level is equal, so we multiply by the number of levels.",
    symbolLinks: {
      T: "tau",
      a: "alpha",
      b: "beta",
      f: "phi",
      "\\Theta": "theta",
      "\\log": "lambda",
      n: "nu",
    },
    glossaryLinks: ["big-o"],
  },
  {
    id: 60003,
    topic: "algorithms",
    difficulty: "sota",
    question: "The fastest known algorithm for matrix multiplication has complexity approximately:",
    options: ["$O(n^{2.371})$ (Alman-Williams)", "$O(n^3)$", "$O(n^2)$", "$O(n^{2.5})$"],
    correctIndex: 0,
    explanation:
      "The current best bound for matrix multiplication is $O(n^{2.3716})$ by Alman and Williams (2024), improving on the Coppersmith-Winograd line of research.",
    realWorld:
      "Faster matrix multiplication directly speeds up graph algorithms, scientific simulation, and machine learning training.",
    hint: "The exponent $\\omega$ has been slowly decreasing from Strassen's 2.807 since 1969.",
    symbolLinks: {
      n: "nu",
      O: "omicron",
      "\\omega": "omega",
    },
    glossaryLinks: ["big-o"],
  },
  // ── Machine Learning ──────────────────────────────────────
  {
    id: 60004,
    topic: "machine-learning",
    difficulty: "easy",
    question: "In supervised learning, the model learns from:",
    options: [
      "Labeled input-output pairs",
      "Unlabeled data only",
      "Reward signals from an environment",
      "Random initialization only",
    ],
    correctIndex: 0,
    explanation:
      "Supervised learning uses labeled training data — each input has a known target output that the model learns to predict.",
    realWorld: "Email spam filters, image classifiers, and medical diagnosis systems all use supervised learning.",
    hint: 'The "supervisor" provides the correct answers during training.',
    glossaryLinks: ["overfitting", "gradient-descent"],
    formulaLinks: ["Gradient Descent Update Rule"],
  },
  {
    id: 60005,
    topic: "machine-learning",
    difficulty: "hard",
    question: "The bias-variance tradeoff states that a model's expected generalization error equals:",
    options: [
      "$\\text{Bias}^2 + \\text{Variance} + \\text{Irreducible noise}$",
      "$\\text{Bias} + \\text{Variance}$",
      "$\\text{Bias} \\times \\text{Variance}$",
      "$\\text{Bias}^2 - \\text{Variance}$",
    ],
    correctIndex: 0,
    explanation:
      "The expected squared error decomposes into squared bias (systematic error), variance (sensitivity to training set), and irreducible noise.",
    realWorld:
      "This tradeoff guides model selection — simple models have high bias, complex models have high variance.",
    hint: "Think of throwing darts: bias is how far the center is from the target, variance is how spread out the darts are.",
    symbolLinks: {
      "\\epsilon": "epsilon",
    },
    glossaryLinks: ["overfitting"],
  },
  {
    id: 60006,
    topic: "machine-learning",
    difficulty: "sota",
    question: "In the transformer architecture, the attention mechanism computes:",
    options: [
      "$\\text{softmax}(QK^T / \\sqrt{d_k})V$",
      "$\\text{sigmoid}(QK^T)V$",
      "$QK^TV / d_k$",
      "$\\text{ReLU}(QK^T)V$",
    ],
    correctIndex: 0,
    explanation:
      "Scaled dot-product attention divides by $\\sqrt{d_k}$ to prevent softmax saturation, then applies the softmax to get attention weights over values $V$.",
    realWorld: "This mechanism powers GPT, BERT, and all modern large language models.",
    hint: "The scaling factor $\\sqrt{d_k}$ prevents the dot products from growing too large.",
    symbolLinks: {
      Q: "capital-q",
      K: "capital-kappa",
      V: "capital-nu",
      d: "delta",
      "^T": "transpose",
    },
    glossaryLinks: ["transformer", "backpropagation"],
  },
  // ── Cryptography ──────────────────────────────────────────
  {
    id: 60007,
    topic: "cryptography",
    difficulty: "easy",
    question: "RSA encryption relies on the difficulty of:",
    options: [
      "Factoring large semiprime numbers",
      "Computing discrete logarithms",
      "Solving linear equations",
      "Finding hash collisions",
    ],
    correctIndex: 0,
    explanation:
      "RSA security assumes that factoring the product of two large primes $n = pq$ is computationally infeasible.",
    realWorld: "RSA secures HTTPS connections, digital signatures, and secure email worldwide.",
    hint: "Multiplying two primes is easy; reversing it is believed to be hard.",
    symbolLinks: {
      n: "nu",
      p: "pi",
      q: "capital-psi",
    },
    glossaryLinks: ["hash-function"],
  },
  {
    id: 60008,
    topic: "cryptography",
    difficulty: "hard",
    question: "A zero-knowledge proof allows a prover to:",
    options: [
      "Convince a verifier of a statement's truth without revealing any information beyond validity",
      "Encrypt data using a shared secret",
      "Generate a digital signature",
      "Compress data losslessly",
    ],
    correctIndex: 0,
    explanation:
      "Zero-knowledge proofs enable authentication and verification without revealing the underlying secret — the verifier learns nothing except that the statement is true.",
    realWorld: "Used in blockchain privacy (Zcash), anonymous credentials, and secure voting systems.",
    hint: "The verifier becomes convinced but gains zero additional knowledge.",
  },
  {
    id: 60009,
    topic: "cryptography",
    difficulty: "sota",
    question: "Post-quantum cryptography's ML-KEM (Kyber) standard is based on:",
    options: [
      "Module Learning with Errors (MLWE) lattice problem",
      "Elliptic curve discrete log problem",
      "Integer factorization",
      "Supersingular isogenies",
    ],
    correctIndex: 0,
    explanation:
      "NIST standardized ML-KEM (formerly Kyber) in 2024, which relies on the hardness of the Module-LWE problem — believed to be secure against quantum computers.",
    realWorld: "Google Chrome and Signal already use ML-KEM for quantum-resistant key exchange.",
    hint: "Lattice-based cryptography adds structured 'noise' to linear algebra problems.",
    symbolLinks: {
      A: "capital-alpha",
      s: "sigma",
      e: "epsilon",
    },
    glossaryLinks: ["hash-function"],
    formulaLinks: ["Shannon Entropy"],
  },
];
