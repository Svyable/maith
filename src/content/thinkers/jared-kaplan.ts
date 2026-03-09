import type { Question } from '../types';

export const jaredKaplanQuestions: Question[] = [
  {
    id: 32370, topic: 'jared-kaplan', difficulty: 'easy',
    question: 'Jared Kaplan (with colleagues at OpenAI/Anthropic) discovered the neural scaling laws. What do they predict?',
    options: [
      'Model performance (cross-entropy loss $L$) follows a power law in three variables — parameters $N$, dataset size $D$, and compute $C$: $$L(N) \\approx \\left(\\frac{N_c}{N}\\right)^{\\alpha_N}, \\quad L(D) \\approx \\left(\\frac{D_c}{D}\\right)^{\\alpha_D}, \\quad L(C) \\approx \\left(\\frac{C_c}{C}\\right)^{\\alpha_C}$$ with $\\alpha_N \\approx 0.076$, $\\alpha_D \\approx 0.095$, $\\alpha_C \\approx 0.050$ for Transformer language models. These power laws hold over 7+ orders of magnitude with remarkable consistency.',
      'Model performance improves linearly with the number of parameters — doubling parameters halves the loss.',
      'There is a critical model size below which performance is random and above which it is perfect — a phase transition.',
      'Performance depends only on the total compute budget $C = 6ND$ and is independent of model size and data size.'
    ],
    correctIndex: 0,
    explanation: 'Kaplan et al. (2020) showed that scaling laws are remarkably smooth and predictable — you can forecast the performance of a 100B parameter model from the trend observed at 1M-1B parameters. Key findings: (1) model size matters more than data size (steeper scaling in $N$), (2) larger models are more sample-efficient, (3) optimal training involves training large models on relatively less data ("Chinchilla scaling" later refined this). These laws hold across modalities (language, vision, code, math).',
    realWorld: 'Scaling laws are the "Moore\'s Law of AI" — they enabled OpenAI, Google, and Anthropic to predict that GPT-4-class models would be capable before training them. They justify the multi-billion dollar investments in compute because performance improvements are predictable.',
    hint: 'Loss falls as a power law in parameters, data, and compute — smooth, predictable, and spanning 7 orders of magnitude.',
    formulaLinks: ['scaling-laws', 'power-law'],
  },
  {
    id: 32371, topic: 'jared-kaplan', difficulty: 'hard',
    question: 'The scaling laws reveal a compute-optimal frontier. What is the Chinchilla insight that revised Kaplan\'s original recommendation?',
    options: [
      'Hoffmann et al. (2022, "Chinchilla") showed that Kaplan\'s original scaling law overweighted model size: the compute-optimal allocation is $N \\propto C^{0.5}$ and $D \\propto C^{0.5}$ (parameters and tokens should scale equally), not Kaplan\'s recommendation of scaling $N$ faster. For a given compute budget $C$: $$N^* \\approx 0.6 \\cdot C^{0.5}, \\quad D^* \\approx 0.6 \\cdot C^{0.5}$$ This means GPT-3 (175B params, 300B tokens) was "over-parameterized" — the same compute should have trained a 70B model on 1.4T tokens.',
      'Chinchilla proved that data quality matters more than quantity — 10B tokens of curated data beats 1T tokens of noisy data.',
      'Chinchilla showed that scaling laws break down above 100B parameters — returns diminish dramatically.',
      'Chinchilla found that the optimal model uses 10x more parameters than tokens — contradicting equal scaling.'
    ],
    correctIndex: 0,
    explanation: 'The Chinchilla result shifted the entire industry: LLaMA (65B, 1.4T tokens), Mistral, and Gemma all follow Chinchilla-optimal scaling. The practical implication is that many existing models (GPT-3, PaLM) were undertrained — they could have achieved the same performance at smaller size with more data. The combined Kaplan-Hoffmann scaling law is: $L(N, D) = \\frac{A}{N^{\\alpha}} + \\frac{B}{D^{\\beta}} + L_\\infty$ where $\\alpha \\approx \\beta \\approx 0.34$.',
    realWorld: 'Chinchilla scaling directly influenced Meta\'s LLaMA (deliberately smaller + more data), Google\'s Gemini, and the entire open-source LLM ecosystem. It showed that you don\'t need the biggest model — you need the right ratio of model size to training data.',
    hint: 'Kaplan said "make it bigger." Chinchilla said "train it longer on more data." The optimal ratio is roughly equal scaling.',
    formulaLinks: ['scaling-laws', 'chinchilla'],
  },
  {
    id: 32372, topic: 'jared-kaplan', difficulty: 'sota',
    question: 'Kaplan\'s scaling laws reveal "emergent abilities" that appear at specific scale thresholds. What are emergent abilities?',
    options: [
      'Capabilities that are near-zero at small scale but appear abruptly at a critical model size — exhibiting phase-transition-like behavior. For example, 3-digit addition accuracy is ~0% for models with $N < 10^{10}$ parameters but ~95% for $N > 10^{11}$. The performance curve is: $$\\text{Accuracy}(N) \\approx \\sigma\\left(\\frac{\\log N - \\log N_c}{\\Delta}\\right)$$ where $N_c$ is the critical scale and $\\Delta$ is the transition width. Emergent abilities include chain-of-thought reasoning, multilingual translation, and code generation.',
      'All abilities improve gradually and smoothly with scale — there are no sudden transitions.',
      'Emergent abilities are artifacts of evaluation metrics — using continuous metrics like log-likelihood eliminates them.',
      'Emergent abilities only appear in instruction-tuned models, not base language models.'
    ],
    correctIndex: 0,
    explanation: 'Wei et al. (2022) documented 137+ emergent abilities that appear at specific scale thresholds. Schaeffer et al. (2023) argued that emergence is partly a metric artifact: tasks with discontinuous metrics (exact match accuracy) show sharp transitions, while continuous metrics (token-level perplexity) show smooth improvement. The truth likely involves both: some abilities require compositional capabilities that only emerge when multiple sub-skills are simultaneously present — a form of "capability overhang."',
    realWorld: 'Emergent abilities are why scaling is so exciting (and terrifying) for AI safety: we can\'t predict which dangerous capabilities (e.g., deception, autonomous replication) might emerge at the next scale threshold. This motivates both racing to scale (capabilities) and caution (safety).',
    hint: 'Some abilities appear suddenly at specific scales — like phase transitions in physics. Or is it just a metric illusion?',
    formulaLinks: ['scaling-laws', 'emergence'],
  },
];
