import type { Question } from '../types';

export const modelsQuestions: Question[] = [
  // ── AlexNet ──────────────────────────────────────────────
  {
    id: 60101, topic: 'ai-models', difficulty: 'easy',
    question: 'AlexNet (2012) was revolutionary primarily because it:',
    options: ['Proved deep CNNs trained on GPUs could dominate image recognition', 'Used transformer self-attention', 'Required no labeled training data', 'Was the first neural network ever built'],
    correctIndex: 0,
    explanation: 'AlexNet won ImageNet 2012 with a top-5 error of 15.3% (vs 26.2% for the runner-up), proving that deep learning + GPUs + big data was the winning formula.',
    realWorld: 'AlexNet triggered billions in AI investment and launched the modern deep learning era — every image recognition system today descends from it.',
    hint: 'Two GPUs, five convolutional layers, and a dramatic error reduction.',
  },
  // ── GPT-1 ──────────────────────────────────────────────
  {
    id: 60102, topic: 'ai-models', difficulty: 'easy',
    question: 'GPT-1 (2018) demonstrated that language models could be improved by:',
    options: ['Unsupervised pre-training followed by supervised fine-tuning', 'Training only on labeled data from scratch', 'Using convolutional layers for text', 'Memorizing the entire training corpus'],
    correctIndex: 0,
    explanation: 'GPT-1 showed that pre-training a transformer on unlabeled text, then fine-tuning on specific tasks, yielded strong performance across NLP benchmarks.',
    realWorld: 'This pre-train/fine-tune paradigm became the standard for all modern LLMs, from BERT to GPT-4 to Claude.',
    hint: 'Learn language first, learn the task second.',
  },
  // ── GPT-2 ──────────────────────────────────────────────
  {
    id: 60103, topic: 'ai-models', difficulty: 'hard',
    question: 'GPT-2 (2019) surprised researchers by showing that scaling to 1.5B parameters enabled:',
    options: ['Zero-shot task performance without any fine-tuning', 'Perfect machine translation', 'Solving NP-hard problems', 'Real-time speech recognition'],
    correctIndex: 0,
    explanation: 'GPT-2 could perform tasks (translation, summarization, QA) it was never explicitly trained for — just by conditioning on natural language prompts.',
    realWorld: 'OpenAI initially withheld GPT-2 citing misuse concerns — the first major AI safety debate about language model releases.',
    hint: 'No fine-tuning needed — just describe the task in natural language.',
  },
  // ── AlphaGo ──────────────────────────────────────────────
  {
    id: 60104, topic: 'ai-models', difficulty: 'hard',
    question: 'AlphaGo (2016) defeated world champion Lee Sedol using a combination of:',
    options: ['Deep neural networks and Monte Carlo tree search', 'Brute-force search of all possible moves', 'Rule-based expert systems', 'Genetic algorithms evolving game strategies'],
    correctIndex: 0,
    explanation: 'AlphaGo combined a policy network (move selection), value network (position evaluation), and MCTS (lookahead search) — trained on human games then self-play.',
    realWorld: 'Move 37 in Game 2 was a creative play no human would make, demonstrating that AI can discover novel strategies beyond human intuition.',
    hint: 'Neural intuition guides a smart search tree.',
  },
  // ── Attention Is All You Need ──────────────────────────
  {
    id: 60105, topic: 'ai-models', difficulty: 'hard',
    question: 'The Transformer (2017) replaced recurrence with self-attention, enabling:',
    options: ['Massive parallelization during training and better long-range dependencies', 'Smaller model sizes with fewer parameters', 'Training without backpropagation', 'Elimination of the need for large datasets'],
    correctIndex: 0,
    explanation: 'By removing sequential processing (RNNs), transformers can process all positions in parallel and use attention to capture dependencies regardless of distance.',
    realWorld: 'Every modern LLM (GPT, Claude, Gemini, Llama) and most vision models (ViT, DINO) are built on the transformer architecture.',
    hint: 'No more processing tokens one by one — attend to everything at once.',
  },
  // ── DeepSeek R1 ──────────────────────────────────────────
  {
    id: 60106, topic: 'ai-models', difficulty: 'sota',
    question: 'DeepSeek-R1 (2025) achieves reasoning performance comparable to OpenAI o1 primarily through:',
    options: ['Pure reinforcement learning on reasoning tasks without supervised fine-tuning', 'Scaling model size to 10 trillion parameters', 'Using symbolic AI rule engines', 'Training exclusively on mathematical proofs'],
    correctIndex: 0,
    explanation: 'DeepSeek-R1 uses large-scale RL (GRPO) to develop chain-of-thought reasoning, discovering that RL alone can produce emergent reasoning behaviors without SFT.',
    realWorld: 'Released as open-source, DeepSeek-R1 demonstrated that frontier reasoning capabilities don\'t require closed, proprietary approaches.',
    hint: 'Reward the model for correct reasoning chains — no human demonstrations needed.',
  },
  // ── CALM (Confidence-Adaptive Language Modeling) ────────
  {
    id: 60107, topic: 'ai-models', difficulty: 'sota',
    question: 'CALM (Confident Adaptive Language Modeling) by Google improves efficiency by:',
    options: ['Exiting early from transformer layers when the model is confident in its prediction', 'Pruning attention heads permanently after training', 'Using smaller vocabulary sizes', 'Skipping the embedding layer entirely'],
    correctIndex: 0,
    explanation: 'CALM adds learned "exit" classifiers at each layer — easy tokens exit early (using fewer layers), hard tokens use the full network, reducing average compute by 2-3×.',
    realWorld: 'This enables running large language models on edge devices and reduces cloud inference costs dramatically for production deployments.',
    hint: 'Not every token needs the full depth of the network.',
  },
  // ── Diffusion Models ──────────────────────────────────────
  {
    id: 60108, topic: 'ai-models', difficulty: 'hard',
    question: 'Denoising Diffusion Probabilistic Models (DDPMs) generate images by:',
    options: ['Iteratively removing noise from a random Gaussian sample', 'Adversarial training between generator and discriminator', 'Autoregressive pixel-by-pixel prediction', 'Variational inference with a single forward pass'],
    correctIndex: 0,
    explanation: 'DDPMs learn to reverse a gradual noising process: training adds noise step by step, generation removes noise step by step, producing high-quality images.',
    realWorld: 'Stable Diffusion, DALL-E 2/3, and Midjourney all use diffusion models — powering the AI art revolution.',
    hint: 'Start with pure noise, gradually sculpt it into an image.',
  },
  // ── Mixture of Experts (MoE) ──────────────────────────────
  {
    id: 60109, topic: 'ai-models', difficulty: 'sota',
    question: 'Mixture of Experts (MoE) architectures like Mixtral achieve efficiency by:',
    options: ['Routing each token to only a subset of expert networks, keeping active parameters small', 'Using all parameters for every token', 'Reducing the number of attention heads', 'Eliminating feed-forward layers entirely'],
    correctIndex: 0,
    explanation: 'MoE models have many "expert" FFN blocks but a router selects only 2 (of e.g. 8) per token — total parameters are large but active parameters per token stay small.',
    realWorld: 'GPT-4 is rumored to use MoE, and Mixtral 8×7B matches Llama 2 70B quality while using only 13B active parameters per token.',
    hint: 'Many specialists, but only a few are called for each task.',
  },
];
