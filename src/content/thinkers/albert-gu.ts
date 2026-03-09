import type { Question } from '../types';

export const albertGuQuestions: Question[] = [
  {
    id: 32390, topic: 'albert-gu', difficulty: 'easy',
    question: 'Albert Gu invented structured state space models (S4/Mamba), a new architecture challenging Transformers. What is a state space model (SSM)?',
    options: [
      'A sequence model based on the continuous-time linear dynamical system: $$h\'(t) = Ah(t) + Bx(t), \\quad y(t) = Ch(t) + Dx(t)$$ discretized as $h_k = \\bar{A}h_{k-1} + \\bar{B}x_k$ where $\\bar{A} = \\exp(A\\Delta)$. The key innovation S4 (Structured State Spaces for Sequences): parameterize $A$ as a diagonal plus low-rank (DPLR) or HiPPO matrix, enabling $O(N \\log N)$ training via FFT convolution and $O(1)$ per-step recurrence at inference.',
      'An SSM is a hidden Markov model with discrete states — identical to the Viterbi algorithm.',
      'An SSM is a Transformer with the attention matrix replaced by a fixed convolution kernel.',
      'An SSM is a recurrent neural network with gated units (like LSTM) — using the same architecture with different hyperparameters.'
    ],
    correctIndex: 0,
    explanation: 'Gu\'s insight: continuous-time SSMs have dual computation modes: (1) during training, they can be computed as a convolution $y = K * x$ with kernel $K_k = C\\bar{A}^k\\bar{B}$, parallelizable via FFT in $O(N \\log N)$. (2) During inference, they run as a recurrence with $O(1)$ per step — unlike attention which is $O(N)$ per step due to KV-cache. The HiPPO matrix $A$ (from Gu et al. 2020) enables long-range memory by approximating continuous functions via Legendre polynomials.',
    realWorld: 'S4 and Mamba are used in long-sequence applications where Transformers are too expensive: genomics (modeling DNA sequences of 100K+ bases), audio generation (WaveNet-style synthesis), and time-series forecasting. Mamba achieves Transformer-quality language modeling at 5x throughput.',
    hint: 'A linear dynamical system that trains as a convolution (parallel) but runs as a recurrence (efficient) — the best of both worlds.',
    formulaLinks: ['state-space-model', 'hippo'],
  },
  {
    id: 32391, topic: 'albert-gu', difficulty: 'hard',
    question: 'Gu\'s Mamba architecture introduced "selective state spaces." What makes them different from S4?',
    options: [
      'Mamba makes the SSM parameters input-dependent (selective): $B_t = s_B(x_t)$, $C_t = s_C(x_t)$, $\\Delta_t = \\text{softplus}(s_\\Delta(x_t))$ where $s_B, s_C, s_\\Delta$ are learned projections. This breaks the convolution structure (parameters vary with input) but enables content-based reasoning — the model can selectively attend to or ignore inputs based on their content. The selective scan algorithm computes this in $O(N)$ time and $O(N)$ memory using a hardware-aware parallel prefix sum on GPU.',
      'Mamba replaces the linear SSM with a nonlinear ODE: $h\' = \\sigma(Ah + Bx)$ — adding activation functions.',
      'Mamba uses multiple SSMs in parallel (like attention heads) and combines their outputs with a gating mechanism.',
      'Mamba simply increases the state dimension from $N$ to $10N$ — brute force over S4\'s structured approach.'
    ],
    correctIndex: 0,
    explanation: 'The selectivity mechanism is Mamba\'s key contribution: in S4, the dynamics $(A, B, C)$ are fixed — the model processes every token identically. In Mamba, the dynamics vary per token, enabling content-aware filtering. This is analogous to attention (which is inherently input-dependent) but maintains $O(N)$ complexity. The input-dependent $\\Delta_t$ controls the "gate" — large $\\Delta_t$ means "remember this token," small $\\Delta_t$ means "forget quickly."',
    realWorld: 'Mamba-2 and its variants (Jamba, Zamba) are being adopted for efficient LLMs: they match Transformer perplexity while generating tokens 5x faster (no KV-cache bottleneck). NVIDIA and AI21 Labs have built production models on Mamba/Transformer hybrids.',
    hint: 'Make the state space dynamics depend on what you\'re reading — so the model can choose what to remember.',
    formulaLinks: ['state-space-model', 'mamba'],
  },
  {
    id: 32392, topic: 'albert-gu', difficulty: 'sota',
    question: 'The HiPPO framework (Gu et al., 2020) provides the mathematical foundation for SSMs\' long-range memory. What is HiPPO?',
    options: [
      'HiPPO (High-order Polynomial Projection Operators) defines matrices $A$ that optimally compress the history of a continuous signal into a finite state vector by projecting onto orthogonal polynomials. For Legendre polynomials: $$(A_{\\text{LegS}})_{nk} = \\begin{cases} -(2n+1)^{1/2}(2k+1)^{1/2} & \\text{if } n > k \\\\ -(n+1) & \\text{if } n = k \\end{cases}$$ The state $h(t) \\in \\mathbb{R}^N$ stores the coefficients of the best $N$-term polynomial approximation to $x(s)$ over $[0, t]$. This provides optimal memory: the $N$-dimensional state captures the last $\\sim N$ "timescales" of the input.',
      'HiPPO is a hardware acceleration technique — it runs SSMs on TPUs using custom ASIC operations.',
      'HiPPO is a hyperparameter optimization method — it searches for the best $A$ matrix via Bayesian optimization.',
      'HiPPO is a data augmentation strategy — it creates polynomial-warped copies of training sequences.'
    ],
    correctIndex: 0,
    explanation: 'HiPPO provides a principled answer to "how should a recurrent model compress its history?" The Legendre variant (LegS) gives exponentially decaying memory with $O(N)$ timescales. The translated Legendre variant (LegT) provides a sliding window. The key theorem: the HiPPO matrix is the unique solution to the online function approximation problem under the specified measure. This mathematical foundation — unlike ad hoc choices like LSTM gates — guarantees optimal long-range memory and explains why S4/Mamba handle sequences of length 100K+.',
    realWorld: 'HiPPO is why SSMs can model extremely long sequences that defeat Transformers: genomic sequences (16K-1M bases), hour-long audio, and full-document summarization. The mathematical guarantee of optimal memory compression is unique among sequence architectures.',
    hint: 'Project the input history onto Legendre polynomials — the optimal way to remember the past in a finite state vector.',
    formulaLinks: ['hippo', 'legendre-polynomials'],
  },
];
