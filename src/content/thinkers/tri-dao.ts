import type { Question } from '../types';

export const triDaoQuestions: Question[] = [
  {
    id: 32400, topic: 'tri-dao', difficulty: 'easy',
    question: 'Tri Dao created FlashAttention, which revolutionized Transformer efficiency. What problem does it solve?',
    options: [
      'The memory bottleneck of standard attention: naive attention materializes the $N \\times N$ attention matrix $S = QK^\\top$, requiring $O(N^2)$ memory. FlashAttention computes exact attention WITHOUT materializing $S$ by tiling the computation into blocks that fit in GPU SRAM (fast memory): each block computes partial softmax using the online softmax trick, accumulating results in $O(N)$ memory. This is an IO-aware algorithm — optimized for the GPU memory hierarchy, not just FLOP count.',
      'An approximation of attention that replaces softmax with a linear kernel — sacrificing accuracy for speed.',
      'A sparse attention pattern that only computes attention for nearby tokens — ignoring long-range dependencies.',
      'A quantization technique that reduces attention weights from float32 to int8 — compressing the attention matrix.'
    ],
    correctIndex: 0,
    explanation: 'FlashAttention (2022) exploits the GPU memory hierarchy: HBM (high bandwidth memory, ~1.5TB/s, 40GB) vs. SRAM (on-chip, ~19TB/s, 20MB). Standard attention is memory-bound — it reads/writes the $N \\times N$ matrix to slow HBM. FlashAttention tiles $Q, K, V$ into blocks, computes attention block-by-block in fast SRAM, and never writes the full attention matrix. The online softmax trick: $\\text{softmax}(x_1, \\ldots, x_n) = \\frac{\\sum_i e^{x_i - m}}{\\sum_i e^{x_i - m}}$ can be computed incrementally as blocks arrive.',
    realWorld: 'FlashAttention is used by virtually every LLM in production (GPT-4, Claude, Gemini, LLaMA). It enables 2-4x faster training and 3-10x longer context windows. Without FlashAttention, models like Claude with 200K context would be impractical.',
    hint: 'Don\'t materialize the $N \\times N$ matrix — compute attention in tiles that fit in fast on-chip memory.',
    formulaLinks: ['attention-mechanism', 'flash-attention'],
  },
  {
    id: 32401, topic: 'tri-dao', difficulty: 'hard',
    question: 'FlashAttention-2 achieved near-optimal GPU utilization. What specific optimizations did it add?',
    options: [
      'Three key optimizations: (1) Parallelize over the sequence length dimension (not just batch/head) by partitioning Q across thread blocks — each block computes a full row of the output. (2) Reduce non-matmul FLOPs: within each thread block, distribute work between warps (groups of 32 threads) to minimize shared memory reads and synchronization. (3) Better work partitioning: assign larger tiles to Q (which isn\'t recomputed) and stream K, V through — achieving ~70% of theoretical peak FLOPS (vs. ~35% for FlashAttention-1).',
      'FlashAttention-2 approximates attention using random projections — trading accuracy for speed.',
      'FlashAttention-2 uses mixed-precision (FP8) computation throughout — halving memory bandwidth.',
      'FlashAttention-2 replaces softmax with ReLU — eliminating the exponential computation bottleneck.'
    ],
    correctIndex: 0,
    explanation: 'The GPU utilization improvement from 35% to 70% of theoretical peak A100 FLOPs translates to ~2x wall-clock speedup over FlashAttention-1. The key insight: on modern GPUs, matmul operations (tensor cores) are much faster than other operations. By restructuring the algorithm to maximize the fraction of time spent in matmuls (vs. softmax, masking, dropout), Dao achieved near-hardware-optimal performance. FlashAttention-2 also supports arbitrary attention masks and GQA natively.',
    realWorld: 'FlashAttention-2 is the default attention implementation in PyTorch 2.0+, HuggingFace Transformers, and all major training frameworks. The ~2x training speedup translates to millions of dollars saved per frontier model training run.',
    hint: 'Maximize time in tensor core matmuls, minimize synchronization and non-matmul FLOPs — reaching 70% peak utilization.',
    formulaLinks: ['flash-attention', 'gpu-optimization'],
  },
  {
    id: 32402, topic: 'tri-dao', difficulty: 'sota',
    question: 'Tri Dao co-created Mamba (with Albert Gu) and later developed Mamba-2 with a theoretical connection to attention. What is this connection?',
    options: [
      'Mamba-2 shows that selective state spaces and linear attention are duals: the selective SSM recurrence $h_t = A_t h_{t-1} + B_t x_t, y_t = C_t h_t$ is equivalent to a structured masked attention with a semiseparable matrix: $$(Y)_t = \\sum_{s \\leq t} (C_t A_{t:s+1} B_s) X_s = (L \\cdot X)_t$$ where $L$ is lower-triangular with entries $L_{ts} = C_t (\\prod_{i=s+1}^t A_i) B_s$. This unification enables using either the recurrence (efficient generation) or the attention-like formulation (efficient training) — and a new "State Space Duality" (SSD) framework that achieves 2-8x speedup over Mamba-1.',
      'Mamba-2 proves that Mamba and attention compute identical outputs — they are mathematically the same operation.',
      'Mamba-2 shows that adding attention layers to Mamba improves quality — creating a hybrid architecture.',
      'Mamba-2 replaces the SSM with a linear Transformer — dropping the state space formulation entirely.'
    ],
    correctIndex: 0,
    explanation: 'The SSD framework reveals that the SSM recurrence produces a specific type of attention matrix — one that is "semiseparable" (factored as $L_{ts} = C_t M_{t,s} B_s$ with $M_{t,s} = \\prod A_i$). This structure allows efficient parallel computation via a block decomposition: within blocks, use attention (parallel); across blocks, use recurrence (sequential). The block size $B$ trades off parallelism and memory — optimal $B \\approx 64$-$256$ on modern GPUs.',
    realWorld: 'Mamba-2/SSD is the mathematical bridge between the attention and recurrence worlds. It enables hybrid architectures (Jamba, Zamba) that use attention for global context and SSMs for local efficiency — potentially the optimal architecture for next-generation LLMs.',
    hint: 'SSMs produce a specific structured attention matrix — semiseparable. This duality enables the best of both worlds.',
    formulaLinks: ['state-space-model', 'linear-attention', 'mamba'],
  },
];
