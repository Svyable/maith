import type { Question } from '../types';

export const oriolVinyalsQuestions: Question[] = [
  {
    id: 32350, topic: 'oriol-vinyals', difficulty: 'easy',
    question: 'Oriol Vinyals pioneered sequence-to-sequence models and pointer networks. What is a Pointer Network?',
    options: [
      'A neural architecture where the output at each step is a pointer (attention distribution) over the input sequence, rather than a fixed vocabulary: $$P(y_t = j | y_{<t}, x) = \\text{softmax}(u_j^t), \\quad u_j^t = v^\\top \\tanh(W_1 h_j + W_2 s_t)$$ where $h_j$ are encoder states and $s_t$ is the decoder state. This enables the model to output variable-length sequences of input positions — solving combinatorial problems like the Traveling Salesman Problem, convex hull, and sorting.',
      'A network that uses pointers (memory addresses) instead of floating-point weights — a neuromorphic architecture.',
      'A recurrent network that "points" to specific neurons to activate — implementing conditional computation.',
      'A graph neural network where edges are "pointers" connecting nodes in a knowledge graph.'
    ],
    correctIndex: 0,
    explanation: 'Pointer Networks (2015) solved a fundamental limitation of seq2seq models: they couldn\'t output tokens not in a fixed dictionary. By attending over the input sequence and selecting positions, Pointer Networks handle variable output dictionaries. This was extended to "Copy Mechanisms" (Gu et al.) and "Pointer-Generator" networks (See et al.) that can either generate from vocabulary or copy from input — now standard in summarization and code generation.',
    realWorld: 'Pointer Networks are used in code completion (copying variable names from context), abstractive summarization (copying rare words), question answering (extracting answer spans), and solving combinatorial optimization problems with neural networks.',
    hint: 'Instead of generating words from a dictionary, point to positions in the input — enabling variable-size outputs.',
    formulaLinks: ['attention-mechanism', 'seq2seq'],
  },
  {
    id: 32351, topic: 'oriol-vinyals', difficulty: 'hard',
    question: 'Vinyals led the AlphaStar project. What made AlphaStar\'s approach to StarCraft II unprecedented?',
    options: [
      'Multi-agent reinforcement learning in an imperfect-information, real-time strategy game with $\\sim 10^{26}$ possible actions per timestep. AlphaStar uses: (1) a Transformer-based architecture processing the game state (units, map, resources), (2) imitation learning from human replays for initialization, (3) a league of agents training against each other via population-based training to prevent strategy collapse: $$\\pi_{\\text{main}} \\text{ trained vs. } \\{\\pi_{\\text{exploit}_i}, \\pi_{\\text{league}_j}, \\pi_{\\text{main\\_exploit}_k}\\}$$',
      'A rule-based system with hand-coded build orders and micro-management strategies from professional players.',
      'A single RL agent trained purely from self-play with no human data — like AlphaZero for StarCraft.',
      'A Monte Carlo Tree Search approach adapted from Go — searching over possible game trees.'
    ],
    correctIndex: 0,
    explanation: 'StarCraft II is vastly more complex than Go: imperfect information (fog of war), real-time (not turn-based), huge action space (build units, move armies, manage economy simultaneously), and long games (~20 minutes, ~30,000 frames). AlphaStar\'s league training prevents "rock-paper-scissors" cycling: main agents, league exploiters, and main exploiters create a diverse population that converges to robust strategies. It reached Grandmaster level (top 0.15% of humans) in all three races.',
    realWorld: 'AlphaStar demonstrated that AI can master open-ended, real-time strategic environments — relevant for autonomous systems, military strategy, logistics optimization, and any domain requiring long-horizon planning under uncertainty.',
    hint: 'Not just self-play — a league of diverse agents preventing strategy collapse in a massively complex real-time game.',
    formulaLinks: ['multi-agent-rl', 'population-based-training'],
  },
  {
    id: 32352, topic: 'oriol-vinyals', difficulty: 'sota',
    question: 'Vinyals contributed to Gemini, Google\'s multimodal foundation model. What is the key architectural innovation for natively multimodal models?',
    options: [
      'Early fusion of all modalities into a shared token sequence: images, audio, video, and text are all tokenized and interleaved into a single sequence processed by one Transformer: $$x = [\\text{img}_1, \\text{img}_2, \\ldots, \\text{txt}_1, \\text{txt}_2, \\ldots, \\text{audio}_1, \\ldots]$$ Unlike CLIP-style models (separate encoders + late fusion), early fusion allows cross-modal attention from the first layer — the model can attend to specific image patches when generating text tokens, and vice versa. This enables "natively multimodal" reasoning rather than post-hoc alignment.',
      'Separate specialized models for each modality (vision, language, audio) connected by a routing layer.',
      'A single modality-agnostic architecture that processes raw bytes without any tokenization.',
      'Late fusion where each modality is processed independently and combined only at the final classification layer.'
    ],
    correctIndex: 0,
    explanation: 'The early fusion approach means that visual and textual understanding develop jointly during pretraining, rather than being learned separately and aligned afterward. This enables capabilities like: understanding charts and diagrams while reading text, following visual instructions, reasoning about video content, and generating interleaved text-image outputs. The key challenge is efficient tokenization of high-resolution images and long videos into manageable sequence lengths.',
    realWorld: 'Gemini\'s multimodal capabilities power Google\'s AI products: Search (understanding images in queries), Workspace (analyzing charts in documents), Android (visual understanding), and scientific research (reasoning about figures and data).',
    hint: 'Put everything — images, text, audio, video — into one sequence from the start. Let attention figure out the connections.',
    formulaLinks: ['transformer', 'multimodal-learning'],
  },
];
