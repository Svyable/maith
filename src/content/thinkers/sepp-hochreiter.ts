import type { Question } from '../types';

export const seppHochreiterQuestions: Question[] = [
  {
    id: 32320, topic: 'sepp-hochreiter', difficulty: 'easy',
    question: 'Sepp Hochreiter (with Schmidhuber) invented the Long Short-Term Memory (LSTM) network. What problem does it solve?',
    options: [
      'The vanishing gradient problem in recurrent neural networks: during backpropagation through time (BPTT), gradients decay exponentially as $\\frac{\\partial h_t}{\\partial h_k} = \\prod_{i=k+1}^{t} W \\cdot \\text{diag}(f\'(h_i))$, making it impossible to learn long-range dependencies. LSTM introduces a "cell state" $c_t$ with gated additive updates: $$c_t = f_t \\odot c_{t-1} + i_t \\odot \\tilde{c}_t$$ The forget gate $f_t$, input gate $i_t$, and output gate $o_t$ control information flow, allowing gradients to flow unchanged through the cell state (the "constant error carousel").',
      'The problem of overfitting in feedforward networks — LSTM adds dropout between layers.',
      'The problem of parallelization — LSTM enables parallel computation of sequence elements.',
      'The problem of memory capacity — LSTM provides unlimited storage by using an external memory bank.'
    ],
    correctIndex: 0,
    explanation: 'Hochreiter\'s 1991 diploma thesis diagnosed the vanishing gradient problem rigorously, showing that gradients in RNNs decay exponentially with sequence length. The LSTM solution (1997) introduced multiplicative gates that learn when to store, forget, and output information. The cell state $c_t$ acts as a "conveyor belt" — gradients flow through it without decay, enabling learning over 1000+ timesteps.',
    realWorld: 'LSTM powered virtually all sequence modeling from 1997-2017: Google Translate, Siri, Alexa, speech recognition, machine translation, handwriting recognition, and music generation all used LSTMs before transformers.',
    hint: 'Gradients vanish in vanilla RNNs. LSTM solves this with gates that control a "memory highway" through time.',
    formulaLinks: ['lstm', 'vanishing-gradient'],
  },
  {
    id: 32321, topic: 'sepp-hochreiter', difficulty: 'hard',
    question: 'Hochreiter later developed the "flat minima" theory of generalization. What does it predict?',
    options: [
      'Neural networks that converge to "flat" minima of the loss landscape (where the Hessian $H$ has small eigenvalues) generalize better than those at "sharp" minima. The generalization bound is approximately: $$\\text{Gen. error} \\lesssim \\frac{1}{n} \\left(\\frac{\\|\\theta\\|^2}{\\lambda_{\\min}(H)} + \\log \\frac{1}{\\delta}\\right)$$ Flat minima correspond to large regions of parameter space with similar loss — making the solution robust to parameter perturbations. SGD with large learning rates and small batches preferentially finds flat minima.',
      'All local minima in neural networks have identical training loss — the landscape has no sharp minima.',
      'Networks at sharp minima always have lower training loss — sharpness is desirable for performance.',
      'The loss landscape is convex for networks wider than a threshold — no minima distinction exists.'
    ],
    correctIndex: 0,
    explanation: 'Hochreiter and Schmidhuber (1997) proposed the flat minima hypothesis based on minimum description length (MDL) theory: flat minima can be described with fewer bits (lower precision weights suffice), so they correspond to simpler models. This presaged the modern understanding that SGD noise (from minibatching) acts as implicit regularization, biasing optimization toward flat, generalizable solutions.',
    realWorld: 'The flat minima hypothesis explains why large language models generalize despite massive overparameterization, why SAM (Sharpness-Aware Minimization) improves test accuracy, and why large batch training requires careful learning rate scaling.',
    hint: 'Wide valleys in the loss landscape = robust solutions. SGD noise helps find them.',
    formulaLinks: ['loss-landscape', 'generalization'],
  },
  {
    id: 32322, topic: 'sepp-hochreiter', difficulty: 'sota',
    question: 'Hochreiter recently developed xLSTM as a modern alternative to Transformers. What are its key innovations?',
    options: [
      'xLSTM introduces two extensions: (1) sLSTM with exponential gating: $f_t = \\exp(w_f^\\top h_{t-1} + b_f)$ and a normalizer state for numerical stability, enabling the gates to have unbounded range. (2) mLSTM replaces the scalar cell state with a matrix memory $C_t \\in \\mathbb{R}^{d \\times d}$, updated via: $$C_t = f_t \\cdot C_{t-1} + i_t \\cdot v_t k_t^\\top$$ This is equivalent to a fast weight memory with key-value storage, achieving Transformer-like associative recall while maintaining linear complexity $O(T)$ in sequence length.',
      'xLSTM simply stacks more LSTM layers (100+) with residual connections — no architectural changes.',
      'xLSTM replaces gates with attention mechanisms — it\'s essentially a Transformer with a different name.',
      'xLSTM uses sparse activation patterns where only 10% of gates are active at each timestep.'
    ],
    correctIndex: 0,
    explanation: 'xLSTM (2024) addresses LSTM\'s two main limitations vs. Transformers: (1) scalar cell state limits storage capacity — mLSTM\'s matrix memory provides $d^2$ storage per layer. (2) Sigmoid gates saturate at 0 or 1 — exponential gates provide unbounded dynamic range. The matrix update $C_t = f_t C_{t-1} + i_t v_t k_t^\\top$ is formally equivalent to linear attention with decay, bridging LSTM and Transformer architectures. xLSTM matches Transformer perplexity on language modeling while being more memory-efficient for long sequences.',
    realWorld: 'xLSTM represents the "recurrence strikes back" trend in 2024-2025: Mamba (S4/S6), RWKV, RetNet, and xLSTM all propose linear-time alternatives to quadratic attention, potentially enabling million-token context windows.',
    hint: 'Matrix memory for capacity + exponential gates for range = LSTM upgraded to compete with Transformers.',
    formulaLinks: ['lstm', 'linear-attention'],
  },
];
