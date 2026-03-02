import type { Question } from '../types';

export const vaswaniQuestions: Question[] = [
  {
    id: 12011,
    topic: 'ashish-vaswani',
    difficulty: 'easy',
    question: 'The Transformer architecture\'s key innovation is:',
    options: [
      'Self-attention mechanism that processes all positions in parallel, replacing recurrence',
      'Using convolutions instead of recurrent layers',
      'A deeper version of the LSTM architecture',
      'Combining random forests with neural networks',
    ],
    correctIndex: 0,
    explanation: '"Attention Is All You Need" (2017) introduced the Transformer, which uses self-attention to relate every position in a sequence to every other position in O(1) sequential steps, enabling massive parallelism.',
    realWorld: 'Transformers power GPT, BERT, LLaMA, and virtually every modern language model, as well as vision transformers (ViT) and protein folding (AlphaFold).',
    hint: 'No recurrence, no convolution — just attention between all pairs of tokens.',
  },
  {
    id: 12012,
    topic: 'ashish-vaswani',
    difficulty: 'hard',
    question: 'Scaled dot-product attention computes:',
    options: [
      '$\\text{Attention}(Q,K,V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$',
      '$\\text{Attention}(Q,K,V) = \\sigma(QK^T) \\cdot V$',
      '$\\text{Attention}(Q,K,V) = Q + K + V$',
      '$\\text{Attention}(Q,K,V) = \\tanh(Q \\cdot K) \\cdot V$',
    ],
    correctIndex: 0,
    explanation: 'Queries and keys are compared via dot product, scaled by $\\sqrt{d_k}$ to prevent softmax saturation in high dimensions, then used as weights to aggregate values. Multi-head attention runs this in parallel across $h$ heads.',
    realWorld: 'This exact formula runs trillions of times daily across every LLM inference — it is arguably the most-executed equation in computing history.',
    hint: 'Scale the dot product by the square root of the key dimension to stabilize gradients.',
  },
  {
    id: 12013,
    topic: 'ashish-vaswani',
    difficulty: 'sota',
    question: 'Positional encodings in the original Transformer use:',
    options: [
      'Sinusoidal functions of different frequencies: $PE_{(pos,2i)} = \\sin(pos/10000^{2i/d})$',
      'Learned embeddings added to each token based on absolute position',
      'Relative position biases computed from token distance',
      'Rotary position embeddings (RoPE) applied to query and key vectors',
    ],
    correctIndex: 0,
    explanation: 'The original Transformer uses fixed sinusoidal positional encodings with varying frequencies across dimensions. This allows the model to attend to relative positions since $PE_{pos+k}$ can be expressed as a linear function of $PE_{pos}$.',
    realWorld: 'Modern models have moved to learned, relative, or rotary encodings (RoPE in LLaMA), but the original sinusoidal design remains elegant and effective.',
    hint: 'Different dimensions oscillate at different frequencies — like a Fourier decomposition of position.',
  },
];
