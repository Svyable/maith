import type { Question } from '../types';

export const noamShazeerQuestions: Question[] = [
  {
    id: 32340, topic: 'noam-shazeer', difficulty: 'easy',
    question: 'Noam Shazeer is a co-author of the Transformer paper and pioneer of Mixture of Experts. What is the Mixture of Experts (MoE) architecture?',
    options: [
      'A neural network where each layer contains $N$ "expert" sub-networks, but only $K \\ll N$ experts are activated per input via a learned gating function $G(x)$: $$y = \\sum_{i=1}^{N} G(x)_i \\cdot E_i(x), \\quad \\text{where } \\|G(x)\\|_0 = K$$ This decouples model capacity (total parameters) from compute cost (FLOPs per forward pass). A 1-trillion-parameter MoE model can have the same inference cost as a 100B dense model while achieving better performance.',
      'An ensemble of completely separate models that vote on the output — each model sees all inputs.',
      'A network where different layers specialize in different tasks — layer 1 for syntax, layer 2 for semantics, etc.',
      'A distillation technique where a large teacher model trains multiple smaller student models.'
    ],
    correctIndex: 0,
    explanation: 'Shazeer et al. (2017) introduced the "Sparsely-Gated Mixture-of-Experts Layer" that scales to 137B parameters while using only 2 experts (out of 2048) per token. The gating function $G(x) = \\text{Softmax}(\\text{TopK}(x \\cdot W_g))$ learns which expert handles which inputs. Load balancing is enforced via an auxiliary loss that penalizes uneven expert utilization. This idea powers GPT-4, Gemini, Mixtral, and most frontier LLMs.',
    realWorld: 'MoE is the secret behind the scaling of modern LLMs: GPT-4 is widely believed to be a MoE model (~1.8T total parameters, ~280B active). Mixtral 8x7B outperforms LLaMA 2 70B while being faster — proving MoE\'s efficiency.',
    hint: 'Not all parameters for all inputs — route each token to its best expert sub-networks. Sparse = efficient.',
    formulaLinks: ['mixture-of-experts', 'transformer'],
  },
  {
    id: 32341, topic: 'noam-shazeer', difficulty: 'hard',
    question: 'Shazeer introduced several key innovations to the Transformer architecture. What are Multi-Query Attention (MQA) and Grouped-Query Attention (GQA)?',
    options: [
      'MQA shares key and value projections across all attention heads while keeping separate query projections: $K = V = xW_{KV}$ (one set) but $Q_h = xW_{Q_h}$ (per head). This reduces KV-cache memory from $O(n_{\\text{heads}} \\cdot d \\cdot T)$ to $O(d \\cdot T)$ during autoregressive decoding, enabling ~10x faster inference with minimal quality loss. GQA is the interpolation: $G$ groups share KV heads, where $1 < G < n_{\\text{heads}}$.',
      'MQA uses a single query vector for all positions — each position attends with the same query.',
      'GQA groups tokens (not heads) and computes attention within each group — like local attention.',
      'MQA replaces dot-product attention with additive attention: $\\text{score} = v^\\top \\tanh(Wq + Uk)$.'
    ],
    correctIndex: 0,
    explanation: 'During autoregressive generation, the KV-cache stores key and value vectors for all previous tokens. With standard multi-head attention ($H$ heads), this requires $2 \\cdot H \\cdot d_{\\text{head}} \\cdot T$ memory per layer. MQA reduces this by factor $H$ (typically 32-128x). Shazeer showed this barely affects quality because the diversity in attention patterns comes mainly from queries, not keys/values. GQA (used in LLaMA 2, Gemini) is the sweet spot.',
    realWorld: 'MQA/GQA is critical for deploying LLMs at scale: without it, the KV-cache for a 70B model with 32K context would require ~40GB of GPU memory just for cache. GQA makes real-time chatbots, code completion, and long-context applications feasible.',
    hint: 'Share key-value projections across heads to shrink the memory cache — queries provide enough diversity.',
    formulaLinks: ['attention-mechanism', 'kv-cache'],
  },
  {
    id: 32342, topic: 'noam-shazeer', difficulty: 'sota',
    question: 'Shazeer co-invented SwiGLU, the activation function used in most modern LLMs. What is it and why does it outperform ReLU?',
    options: [
      'SwiGLU combines the Swish activation with a Gated Linear Unit: $$\\text{SwiGLU}(x, W_1, W_2, b_1, b_2) = \\text{Swish}(xW_1 + b_1) \\odot (xW_2 + b_2)$$ where $\\text{Swish}(x) = x \\cdot \\sigma(\\beta x)$ and $\\odot$ is element-wise multiplication. The gating mechanism ($\\odot$) allows the network to learn which features to pass through, while Swish provides smooth, non-monotonic activation. SwiGLU consistently improves perplexity by 1-3% over ReLU/GELU with the same compute budget.',
      'SwiGLU is simply ReLU applied twice: $\\text{SwiGLU}(x) = \\max(0, \\max(0, x))$.',
      'SwiGLU replaces all activations with the identity function $f(x) = x$ — proving nonlinearity is unnecessary.',
      'SwiGLU is a learnable activation where the function shape is parameterized by a separate neural network.'
    ],
    correctIndex: 0,
    explanation: 'Shazeer (2020) systematically evaluated activation functions in Transformers and found SwiGLU optimal. The GLU mechanism $\\sigma(xW_1) \\odot xW_2$ was introduced by Dauphin et al., but Shazeer replaced the sigmoid gate with Swish. The key: the gating halves the width (since two projections are needed), but the improved optimization landscape more than compensates. SwiGLU is used in LLaMA, PaLM, Gemini, Mistral, and most 2024-2026 LLMs.',
    realWorld: 'A seemingly small architectural choice (activation function) that improves every model it\'s applied to. SwiGLU exemplifies how careful empirical science — systematic ablation studies — drives practical AI progress.',
    hint: 'Swish for smoothness, gating for selectivity, element-wise product to combine — the activation function powering modern LLMs.',
    formulaLinks: ['activation-function', 'transformer'],
  },
];
