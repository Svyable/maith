import type { Question } from '../types';

export const computerScienceQuestions: Question[] = [
  // ── Algorithms ──────────────────────────────────────────────
  {
    id: 60001, topic: 'algorithms', difficulty: 'easy',
    question: 'The time complexity of binary search on a sorted array of <strong>$n$</strong> elements is:',
    options: ['$O(\\log n)$', '$O(n)$', '$O(n \\log n)$', '$O(1)$'],
    correctIndex: 0,
    explanation: `Binary search halves the search space at each step, giving $O(\\log n)$ comparisons.

<strong>🔤 Character Glossary:</strong>
• <strong>$n$</strong> = array size (total elements) [<a href="https://greektome.lovable.app/letter/nu" target="_blank">ν nu</a>]
• <strong>$O()$</strong> = Big-O notation [<a href="https://greektome.lovable.app/letter/omicron" target="_blank">Ο omicron</a>] 
• <strong>$\\log$</strong> = logarithm (base-2) [<a href="https://greektome.lovable.app/letter/lambda" target="_blank">λ lambda</a>]`,
    realWorld: 'Used in database indexing, spell checkers, and searching sorted datasets.',
    hint: 'Each comparison eliminates half the remaining elements. <strong>🎯 Pro Tip:</strong> Imagine a phone book—find "Smith" by opening to middle, then deciding left/right. Always halves!',
  },
  {
    id: 60002, topic: 'algorithms', difficulty: 'hard',
    question: 'The Master Theorem solves recurrences of the form <strong>$T(n) = aT(n/b) + f(n)$</strong>. If <strong>$f(n) = \\Theta(n^{\\log_b a})$</strong>, then <strong>$T(n) = $</strong>:',
    options: ['$\\Theta(n^{\\log_b a} \\log n)$', '$\\Theta(n^{\\log_b a})$', '$\\Theta(f(n))$', '$\\Theta(n \\log n)$'],
    correctIndex: 0,
    explanation: `This is Case 2 of the Master Theorem: when $f(n)$ grows at the same rate as $n^{\\log_b a}$, an extra $\\log n$ factor appears.

<strong>🔤 Character Glossary:</strong>
• <strong>$T(n)$</strong> = time complexity function
• <strong>$a$</strong> = #subproblems [<a href="https://greektome.lovable.app/letter/alpha" target="_blank">α alpha</a>]
• <strong>$b$</strong> = size reduction factor
• <strong>$f(n)$</strong> = non-recursive work
• <strong>$\\Theta()$</strong> = tight bound [<a href="https://greektome.lovable.app/letter/theta" target="_blank">Θ theta</a>]
• <strong>$\\log_b$</strong> = log base $b$`,
    realWorld: 'The Master Theorem characterizes the complexity of divide-and-conquer algorithms like merge sort ($T(n) = 2T(n/2) + O(n)$).',
    hint: 'Case 2: the work at each level is equal, so we multiply by the number of levels ($\\log_b n$). <strong>⚡ Merge Sort Example:</strong> $a=2,b=2,f(n)=n$ → $\\log_2 2 = 1$, so Case 2!',
  },
  {
    id: 60003, topic: 'algorithms', difficulty: 'sota',
    question: 'The fastest known algorithm for matrix multiplication has complexity approximately:',
    options: ['$O(n^{2.371})$ (Alman-Williams)', '$O(n^3)$', '$O(n^2)$', '$O(n^{2.5})$'],
    correctIndex: 0,
    explanation: `The current best bound for matrix multiplication is $O(n^{2.3716})$ by Alman and Williams (2024).

<strong>🔤 Character Glossary:</strong>
• <strong>$n$</strong> = matrix dimension [<a href="https://greektome.lovable.app/letter/nu" target="_blank">ν nu</a>]
• <strong>$O()$</strong> = upper bound [<a href="https://greektome.lovable.app/letter/omicron" target="_blank">Ο omicron</a>]
• <strong>$\\omega$</strong> = matrix multiplication exponent [<a href="https://greektome.lovable.app/letter/omega" target="_blank">ω omega</a>]`,
    realWorld: 'Faster matrix multiplication directly speeds up graph algorithms, scientific simulation, and machine learning training.',
    hint: 'The exponent $\\omega$ has been slowly decreasing from Strassen\\'s 2.807 (1969) → 2.371 (2024). <strong>🚀 Impact:</strong> Every 0.01 drop = 10% faster neural nets!',
  },
  // ── Machine Learning ──────────────────────────────────────
  {
    id: 60004, topic: 'machine-learning', difficulty: 'easy',
    question: 'In supervised learning, the model learns from:',
    options: ['Labeled input-output pairs', 'Unlabeled data only', 'Reward signals from an environment', 'Random initialization only'],
    correctIndex: 0,
    explanation: 'Supervised learning uses labeled training data — each input has a known target output that the model learns to predict.',
    realWorld: 'Email spam filters, image classifiers, and medical diagnosis systems all use supervised learning.',
    hint: 'The "supervisor" provides the correct answers during training. <strong>📊 Example:</strong> Photos labeled "cat" vs "dog" → model learns cat features.',
  },
  {
    id: 60005, topic: 'machine-learning', difficulty: 'hard',
    question: 'The bias-variance tradeoff states that a model\\'s expected generalization error equals:',
    options: ['$\\text{Bias}^2 + \\text{Variance} + \\text{Irreducible noise}$', '$\\text{Bias} + \\text{Variance}$', '$\\text{Bias} \\times \\text{Variance}$', '$\\text{Bias}^2 - \\text{Variance}$'],
    correctIndex: 0,
    explanation: `The expected squared error decomposes into squared bias (systematic error), variance (sensitivity to training set), and irreducible noise.

<strong>🔤 Character Glossary:</strong>
• <strong>$\\text{Bias}^2$</strong> = systematic prediction error
• <strong>$\\text{Var}$</strong> = sensitivity to training data
• <strong>$\\epsilon$</strong> = irreducible noise [<a href="https://greektome.lovable.app/letter/epsilon" target="_blank">ε epsilon</a>]`,
    realWorld: 'This tradeoff guides model selection — simple models have high bias, complex models have high variance.',
    hint: 'Think of throwing darts: bias is how far the center is from the target, variance is how spread out the darts are. <strong>🎯 Goldilocks:</strong> "Just right" complexity!',
  },
  {
    id: 60006, topic: 'machine-learning', difficulty: 'sota',
    question: 'In the transformer architecture, the attention mechanism computes:',
    options: ['$\\text{softmax}(QK^T / \\sqrt{d_k})V$', '$\\text{sigmoid}(QK^T)V$', '$QK^TV / d_k$', '$\\text{ReLU}(QK^T)V$'],
    correctIndex: 0,
    explanation: `Scaled dot-product attention divides by $\\sqrt{d_k}$ to prevent softmax saturation.

<strong>🔤 Character Glossary:</strong>
• <strong>$Q,K,V$</strong> = Query, Key, Value matrices
• <strong>$d_k$</strong> = key dimension
• <strong>$\\sqrt{}$</strong> = square root
• <strong>$^T$</strong> = matrix transpose`,
    realWorld: 'This mechanism powers GPT, BERT, and all modern large language models.',
    hint: 'The scaling factor $\\sqrt{d_k}$ prevents the dot products from growing too large. <strong>🧠 Intuition:</strong> "How much should I pay attention to word #5 when reading word #3?"',
  },
  // ── Cryptography ──────────────────────────────────────────
  {
    id: 60007, topic: 'cryptography', difficulty: 'easy',
    question: 'RSA encryption relies on the difficulty of:',
    options: ['Factoring large semiprime numbers', 'Computing discrete logarithms', 'Solving linear equations', 'Finding hash collisions'],
    correctIndex: 0,
    explanation: `RSA security assumes that factoring the product of two large primes $n = pq$ is computationally infeasible.

<strong>🔤 Character Glossary:</strong>
• <strong>$n = p \\times q$</strong> = semiprime [<a href="https://greektome.lovable.app/letter/nu" target="_blank">ν nu</a>]
• <strong>$p,q$</strong> = large primes [<a href="https://greektome.lovable.app/letter/pi" target="_blank">π pi</a>]
• <strong>$e,d$</strong> = public/private exponents`,
    realWorld: 'RSA secures HTTPS connections, digital signatures, and secure email worldwide.',
    hint: 'Multiplying two primes is easy; reversing it is believed to be hard. <strong>🔒 Math:</strong> $n=3233=61×53$ (easy); $n=2^{2048}+...$ (impossible).',
  },
  {
    id: 60008, topic: 'cryptography', difficulty: 'hard',
    question: 'A zero-knowledge proof allows a prover to:',
    options: ['Convince a verifier of a statement\\'s truth without revealing any information beyond validity', 'Encrypt data using a shared secret', 'Generate a digital signature', 'Compress data losslessly'],
    correctIndex: 0,
    explanation: 'Zero-knowledge proofs enable authentication and verification without revealing the underlying secret — the verifier learns nothing except that the statement is true.',
    realWorld: 'Used in blockchain privacy (Zcash), anonymous credentials, and secure voting systems.',
    hint: 'The verifier becomes convinced but gains zero additional knowledge. <strong>🎭 Cave Analogy:</strong> Prove you know cave password without revealing it!',
  },
  {
    id: 60009, topic: 'cryptography', difficulty: 'sota',
    question: 'Post-quantum cryptography\\'s ML-KEM (Kyber) standard is based on:',
    options: ['Module Learning with Errors (MLWE) lattice problem', 'Elliptic curve discrete log problem', 'Integer factorization', 'Supersingular isogenies'],
    correctIndex: 0,
    explanation: `NIST standardized ML-KEM (formerly Kyber) in 2024, which relies on Module-LWE hardness.

<strong>🔤 Character Glossary:</strong>
• <strong>MLWE</strong> = Module Learning With Errors
• <strong>$A\\mathbf{s}+\\mathbf{e}$</strong> = noisy lattice problem [<a href="https://greektome.lovable.app/letter/sigma" target="_blank">σ sigma</a>]
• Quantum-resistant!`,
    realWorld: 'Google Chrome and Signal already use ML-KEM for quantum-resistant key exchange.',
    hint: 'Lattice-based cryptography adds structured "noise" to linear algebra problems. <strong>🛡️ Why Quantum-Safe:</strong> Shor\\'s algorithm breaks RSA/EC; lattices survive Grover.',
  },
];
