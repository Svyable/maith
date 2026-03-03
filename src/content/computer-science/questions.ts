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
    explanation: `Binary search halves the search space at each step, giving $O(\\log n)$ comparisons.

**Symbol Guide:**
- $n$ = array size (total elements) [nu ν](https://greektome.lovable.app/letter/nu)
- $O()$ = Big-O notation [omicron Ο](https://greektome.lovable.app/letter/omicron)
- $\\log$ = logarithm (base-2) [lambda λ](https://greektome.lovable.app/letter/lambda)`,
    realWorld: "Used in database indexing, spell checkers, and searching sorted datasets.",
    hint: "Each comparison eliminates half the remaining elements.",
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
    explanation: `This is Case 2 of the Master Theorem.

**Symbol Guide:**
- $T(n)$ = time complexity function
- $a$ = number of subproblems [alpha α](https://greektome.lovable.app/letter/alpha)
- $b$ = size reduction factor
- $f(n)$ = non-recursive work
- $\\Theta()$ = tight bound [theta Θ](https://greektome.lovable.app/letter/theta)`,
    realWorld:
      "The Master Theorem characterizes the complexity of divide-and-conquer algorithms like merge sort ($T(n) = 2T(n/2) + O(n)$).",
    hint: "Case 2: the work at each level is equal, so we multiply by the number of levels.",
  },
  {
    id: 60003,
    topic: "algorithms",
    difficulty: "sota",
    question: "The fastest known algorithm for matrix multiplication has complexity approximately:",
    options: ["$O(n^{2.371})$ (Alman-Williams)", "$O(n^3)$", "$O(n^2)$", "$O(n^{2.5})$"],
    correctIndex: 0,
    explanation: `The current best bound for matrix multiplication is $O(n^{2.3716})$ by Alman and Williams (2024).

**Symbol Guide:**
- $n$ = matrix dimension [nu ν](https://greektome.lovable.app/letter/nu)
- $O()$ = upper bound [omicron Ο](https://greektome.lovable.app/letter/omicron)
- $\\omega$ = matrix multiplication exponent [omega ω](https://greektome.lovable.app/letter/omega)`,
    realWorld:
      "Faster matrix multiplication directly speeds up graph algorithms, scientific simulation, and machine learning training.",
    hint: "The exponent $\\omega$ has been slowly decreasing from Strassen's 2.807 since 1969.",
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
    explanation: `The expected squared error decomposes into squared bias, variance, and irreducible noise.

**Symbol Guide:**
- $\\text{Bias}^2$ = systematic prediction error
- $\\text{Variance}$ = sensitivity to training data
- $\\epsilon$ = irreducible noise [epsilon ε](https://greektome.lovable.app/letter/epsilon)`,
    realWorld:
      "This tradeoff guides model selection — simple models have high bias, complex models have high variance.",
    hint: "Think of throwing darts: bias is how far the center is from the target, variance is how spread out the darts are.",
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
    explanation: `Scaled dot-product attention divides by $\\sqrt{d_k}$ to prevent softmax saturation.

**Symbol Guide:**
- $Q,K,V$ = Query, Key, Value matrices
- $d_k$ = key dimension
- $^T$ = matrix transpose`,
    realWorld: "This mechanism powers GPT, BERT, and all modern large language models.",
    hint: "The scaling factor $\\sqrt{d_k}$ prevents the dot products from growing too large.",
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
    explanation: `RSA security assumes that factoring $n = pq$ is computationally infeasible.

**Symbol Guide:**
- $n = p \\times q$ = semiprime [nu ν](https://greektome.lovable.app/letter/nu)
- $p,q$ = large primes [pi π](https://greektome.lovable.app/letter/pi)`,
    realWorld: "RSA secures HTTPS connections, digital signatures, and secure email worldwide.",
    hint: "Multiplying two primes is easy; reversing it is believed to be hard.",
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
      "Zero-knowledge proofs enable authentication and verification without revealing the underlying secret.",
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
    explanation: `NIST standardized ML-KEM (formerly Kyber) in 2024.

**Symbol Guide:**
- MLWE = Module Learning With Errors
- $A\\mathbf{s}+\\mathbf{e}$ = noisy lattice problem [sigma σ](https://greektome.lovable.app/letter/sigma)`,
    realWorld: "Google Chrome and Signal already use ML-KEM for quantum-resistant key exchange.",
    hint: 'Lattice-based cryptography adds structured "noise" to linear algebra problems.',
  },
];
