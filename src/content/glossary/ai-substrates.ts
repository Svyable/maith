import type { GlossaryTerm } from './types';

/**
 * AI Math Substrates — the five mathematical foundations a frontier model runs
 * on, plus the specific levers inside each one where large efficiency wins hide.
 *
 * Companion research dossier: docs/ai-substrate-breakthroughs.md
 * Companion prototypes:       experiments/ai-substrates/
 */
export const aiSubstratesTerms: GlossaryTerm[] = [
  // ── The five substrates ────────────────────────────────────────────
  {
    id: 'substrate-linear-algebra',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Substrate I — Linear Algebra',
    definition:
      'The body of the model. Meaning is stored as direction in a high-dimensional space, and every layer is one affine map $y = Wx + b$. "Deep" means only that many such maps are composed. Even attention reduces to dot products: $QK^\\top$ is a grid of similarity measurements, and a dot product is multiply-and-add.',
    example:
      'Nvidia became a multi-trillion-dollar company selling hardware specialised for this one operation.',
    formula: '$y = Wx + b$',
    latex: 'y = Wx + b',
    related: ['substrate-probability', 'semiseparable-attention', 'structured-weight-operators'],
    symbolLinks: { W: 'omega' },
    thinkerLinks: ['arthur-cayley'],
    difficulty: 'intro',
  },
  {
    id: 'substrate-probability',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Substrate II — Probability',
    definition:
      'The model does not know its next token. At every step it emits a full distribution over the vocabulary via softmax, then samples from it. Temperature $T$ rescales the logits before exponentiating: $T \\to 0$ collapses onto the argmax, larger $T$ flattens the distribution. Hallucinations are not a malfunction — they are the tail of this distribution being sampled.',
    example:
      'The "creativity" slider in any AI product is the $T$ in the softmax denominator.',
    formula: '$p_i = \\dfrac{e^{z_i/T}}{\\sum_j e^{z_j/T}}$',
    latex: 'p_i = \\frac{e^{z_i/T}}{\\sum_j e^{z_j/T}}',
    related: ['temperature-boltzmann', 'maximal-coupling-acceptance', 'substrate-information-theory'],
    symbolLinks: { T: 'tau', Σ: 'sigma' },
    formulaLinks: ['Softmax Function'],
    difficulty: 'intro',
  },
  {
    id: 'substrate-information-theory',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Substrate III — Information Theory',
    definition:
      'The scoreboard. Cross-entropy loss measures the model\'s surprise at the token that actually occurred, in bits: $-\\log_2 p(\\text{actual})$. Training is one long campaign to be less surprised by reality. Because arithmetic coding encodes a symbol of probability $p$ in $-\\log_2 p$ bits, the total loss over a corpus *is* its compressed length — prediction and compression are the same act measured two ways.',
    example:
      'Shannon wrote this quantity in 1948 to send phone calls down copper wire more efficiently; it is now the loss function of every language model.',
    formula: '$\\mathcal{L} = -\\sum_i p_i \\log_2 q_i$',
    latex: '\\mathcal{L} = -\\sum_i p_i \\log_2 q_i',
    related: ['prediction-compression-duality', 'rate-distortion-allocation', 'substrate-calculus'],
    symbolLinks: { Σ: 'sigma' },
    formulaLinks: ['Shannon Entropy'],
    thinkerLinks: ['claude-shannon'],
    difficulty: 'intro',
  },
  {
    id: 'substrate-calculus',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Substrate IV — Calculus',
    definition:
      'How the model learns. One question, asked for every weight: if I nudge this a hair, does the loss go up or down? That is a derivative, and backpropagation answers it for all parameters at once by applying the chain rule in reverse. The only idea beyond freshman calculus is the evaluation order — reverse-mode gives every derivative in a single pass.',
    example:
      '`loss.backward()` is Leibniz\'s chain rule plus a 1970 bookkeeping trick (Linnainmaa), scaled to a trillion parameters.',
    formula: '$\\dfrac{\\partial L}{\\partial w} = \\dfrac{\\partial L}{\\partial y}\\cdot\\dfrac{\\partial y}{\\partial w}$',
    latex: '\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial y}\\cdot\\frac{\\partial y}{\\partial w}',
    related: ['layerwise-hessian', 'substrate-optimization', 'kronecker-factored-curvature'],
    difficulty: 'intro',
  },
  {
    id: 'substrate-optimization',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Substrate V — Optimization',
    definition:
      'The step itself: $\\theta \\leftarrow \\theta - \\eta\\nabla L$, written by Cauchy in 1847. Backprop says which way is downhill; this takes the step. Training works at all because of high-dimensional geometry — a critical point is a minimum only if every Hessian eigenvalue is positive, which becomes vanishingly unlikely as dimension grows, so almost every flat spot is a saddle with an escape route.',
    example:
      'Adam (2014) is this plus momentum and a per-parameter step size — one of the most-cited papers in science, and essentially "roll downhill, but smarter".',
    formula: '$\\theta_{t+1} = \\theta_t - \\eta\\nabla L(\\theta_t)$',
    latex: '\\theta_{t+1} = \\theta_t - \\eta\\nabla L(\\theta_t)',
    related: ['spectral-descent-muon', 'substrate-calculus', 'arithmetic-intensity-roofline'],
    symbolLinks: { θ: 'theta', η: 'eta', '∇': 'nabla' },
    difficulty: 'intro',
  },

  // ── Probability levers ────────────────────────────────────────────
  {
    id: 'temperature-boltzmann',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Temperature as Thermodynamics',
    definition:
      'Softmax is not merely analogous to the Boltzmann distribution — it is the same equation. Setting $E_i = -z_i$ turns $p_i \\propto e^{z_i/T}$ into $p_i \\propto e^{-E_i/T}$. Logits are energies, the softmax denominator is a partition function, its logarithm is a free energy, and cooling to $T \\to 0$ freezes the system into its ground state exactly as sampling collapses onto the argmax.',
    example:
      'Because the entropy is genuinely thermodynamic, per-token entropy is a free uncertainty estimate — available every step at no cost, and usable to decide how much compute a token deserves.',
    formula: '$p_i \\propto e^{-E_i/k_BT}, \\quad E_i = -z_i$',
    latex: 'p_i \\propto e^{-E_i/k_BT}, \\quad E_i = -z_i',
    related: ['substrate-probability', 'entropy-adaptive-compute'],
    symbolLinks: { T: 'tau' },
    difficulty: 'intermediate',
  },
  {
    id: 'total-variation-distance',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Total Variation Distance',
    definition:
      'The largest disagreement two distributions can have about any event: $\\mathrm{TV}(p,q) = \\tfrac12\\lVert p-q\\rVert_1 = \\sup_A |p(A)-q(A)|$. Its complement is the overlap $\\sum_x \\min(p,q)$, which is the maximum probability that two coupled samples agree. Unlike KL it is a true metric, bounded in $[0,1]$, and symmetric.',
    example:
      'It is the exact currency of speculative decoding: acceptance rate equals $1-\\mathrm{TV}$, so a draft model should be distilled on TV rather than cross-entropy.',
    formula: '$\\mathrm{TV}(p,q) = \\tfrac12\\sum_x |p(x)-q(x)|$',
    latex: '\\mathrm{TV}(p,q) = \\tfrac{1}{2}\\sum_x |p(x)-q(x)|',
    related: ['maximal-coupling-acceptance', 'kl-divergence'],
    symbolLinks: { Σ: 'sigma' },
    difficulty: 'intermediate',
  },
  {
    id: 'maximal-coupling-acceptance',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Maximal Coupling (Speculative Decoding)',
    definition:
      'A coupling of $p$ and $q$ is a joint law with those marginals; the maximal coupling maximises $P(X=Y)$, achieving $\\sum_x \\min(p,q) = 1-\\mathrm{TV}(p,q)$. Speculative decoding constructs exactly this: sample from the draft $q$, accept with probability $\\min(1, p/q)$, and on rejection sample from the normalised residual $(p-q)_+$. The output is *exactly* $p$, so the speedup costs no quality.',
    example:
      'Two consequences: the algorithm is optimal for a single draft, so no engineering beats it without changing the problem; and adding parallel drafts has sharply diminishing acceptance-per-FLOP, so draft width is not where large speedups live.',
    formula: '$\\alpha = \\sum_x \\min(p(x), q(x)) = 1 - \\mathrm{TV}(p,q)$',
    latex: '\\alpha = \\sum_x \\min(p(x), q(x)) = 1 - \\mathrm{TV}(p,q)',
    related: ['total-variation-distance', 'substrate-probability', 'parallel-decoding-multi-information'],
    symbolLinks: { α: 'alpha' },
    formulaLinks: ['Speculative Decoding Acceptance Rate'],
    difficulty: 'advanced',
  },
  {
    id: 'entropy-adaptive-compute',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Entropy-Adaptive Compute',
    definition:
      'Every decode step already yields a full distribution, hence a free uncertainty estimate $H_t = -\\sum_x p_t(x)\\log p_t(x)$. The distribution of $H_t$ across tokens is extremely skewed — most positions carry a fraction of a bit. Allocating depth, expert count, or speculation length as a function of $H_t$ costs nothing to measure.',
    example:
      'If most tokens can be served by a shallow path, throughput rises substantially with no loss on the tokens that actually matter.',
    formula: '$H_t = -\\sum_x p_t(x)\\log p_t(x)$',
    latex: 'H_t = -\\sum_x p_t(x)\\log p_t(x)',
    related: ['temperature-boltzmann', 'substrate-information-theory'],
    symbolLinks: { Σ: 'sigma' },
    difficulty: 'intermediate',
  },
  {
    id: 'parallel-decoding-multi-information',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Parallel Decoding Error = Multi-Information',
    definition:
      'Unmasking a set $S$ of positions simultaneously samples from the product of marginals rather than the joint. The KL divergence between them is exactly the multi-information (total correlation) of the set: $\\sum_{i\\in S} H(x_i\\mid c) - H(x_S\\mid c)$. So the safe parallel set is the largest set of *mutually near-independent* positions — a computable budget, not a tuned threshold.',
    example:
      'Diffusion language models decode many tokens per step. Published selectors use single-timestep confidence as a proxy for this quantity; the principled version estimates the dependency and commits sets under a certified TV budget.',
    formula: '$D_{\\mathrm{KL}} = \\sum_{i\\in S} H(x_i \\mid c) - H(x_S \\mid c)$',
    latex: 'D_{\\mathrm{KL}} = \\sum_{i \\in S} H(x_i \\mid c) - H(x_S \\mid c)',
    related: ['substrate-information-theory', 'maximal-coupling-acceptance'],
    symbolLinks: { Σ: 'sigma' },
    difficulty: 'advanced',
  },

  // ── Information-theory levers ─────────────────────────────────────
  {
    id: 'prediction-compression-duality',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Prediction–Compression Duality',
    definition:
      'Not an analogy but an identity. Arithmetic coding encodes a symbol of probability $p$ in about $-\\log_2 p$ bits, which is precisely the cross-entropy loss. So the summed training loss over a corpus equals that corpus\'s compressed length under the model. Improving prediction *is* improving compression, by the same number of bits.',
    example:
      'DeepMind used a language model as a general-purpose compressor and beat PNG on images and FLAC on audio — despite the model never having been trained on either modality.',
    formula: '$\\ell(x) \\approx -\\log_2 p(x) \\;\\Rightarrow\\; \\text{bits} = \\text{loss}$',
    latex: '\\ell(x) \\approx -\\log_2 p(x) \\;\\Rightarrow\\; \\text{bits} = \\text{loss}',
    related: ['substrate-information-theory', 'rate-distortion-allocation'],
    thinkerLinks: ['claude-shannon'],
    difficulty: 'intermediate',
  },
  {
    id: 'rate-distortion-allocation',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Rate–Distortion Bit Allocation',
    definition:
      'Bit widths are a budget, and budgets have optimal allocations. Minimising total distortion $\\sum_h s_h c_h 2^{-\\beta_h b_h}$ under a mean-rate constraint gives a closed-form solution in which every component is driven to *equal marginal distortion per bit*. Components pushed below the threshold receive zero bits — so eviction and quantization are one Lagrangian rather than two heuristics.',
    example:
      'Applied per attention head to a KV cache: sensitivity-weighted allocation is worth roughly 3.5 equivalent uniform bits, reaching under 2 effective bits per element at lower output KL than uniform int4.',
    formula: '$b_h = \\dfrac{1}{\\beta_h}\\log_2\\dfrac{\\beta_h s_h c_h}{\\lambda}$',
    latex: 'b_h = \\frac{1}{\\beta_h}\\log_2\\frac{\\beta_h s_h c_h}{\\lambda}',
    related: ['reverse-water-filling', 'gauss-newton-sensitivity', 'substrate-information-theory'],
    symbolLinks: { λ: 'lambda', β: 'beta' },
    formulaLinks: ['Reverse Water-Filling Bit Allocation'],
    difficulty: 'advanced',
  },
  {
    id: 'reverse-water-filling',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Reverse Water-Filling',
    definition:
      'The closed-form solution to Gaussian rate-distortion allocation. Components whose variance exceeds a threshold $\\lambda$ are each coded to distortion exactly $\\lambda$; components below the threshold are given zero rate and reproduced by their mean. The dual variable $\\lambda$ is set by the rate budget, typically by bisection.',
    example:
      'It is why a principled quantizer produces an eviction rule for free: "below the water line" and "not worth storing" are the same condition.',
    formula: '$D_i = \\min(\\lambda, \\sigma_i^2), \\quad R = \\tfrac12\\sum_i \\log_2^+\\dfrac{\\sigma_i^2}{\\lambda}$',
    latex: 'D_i = \\min(\\lambda, \\sigma_i^2), \\quad R = \\frac{1}{2}\\sum_i \\log_2^+\\frac{\\sigma_i^2}{\\lambda}',
    related: ['rate-distortion-allocation', 'substrate-information-theory'],
    symbolLinks: { λ: 'lambda', σ: 'sigma' },
    difficulty: 'advanced',
  },
  {
    id: 'arithmetic-intensity-roofline',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Arithmetic Intensity & the Roofline',
    definition:
      'Runtime is $\\max(\\text{FLOPs}/\\pi, \\text{bytes}/\\beta)$ for peak compute $\\pi$ and bandwidth $\\beta$. Single-sequence decode does roughly one multiply-accumulate per weight byte read — intensity near 1 — while accelerators offer hundreds of FLOPs per byte. So decode is bandwidth-bound and the tensor cores idle. Prefill, by contrast, is compute-bound.',
    example:
      'Every real serving speedup either raises intensity (batching, speculative decoding) or moves fewer bytes (GQA, MLA, KV quantization). Because prefill and decode are different programs, co-scheduling them on one replica is suboptimal — hence disaggregation.',
    formula: '$t = \\max\\!\\left(\\dfrac{\\text{FLOPs}}{\\pi}, \\dfrac{\\text{bytes}}{\\beta}\\right)$',
    latex: 't = \\max\\left(\\frac{\\text{FLOPs}}{\\pi}, \\frac{\\text{bytes}}{\\beta}\\right)',
    related: ['rate-distortion-allocation', 'maximal-coupling-acceptance', 'substrate-optimization'],
    symbolLinks: { π: 'pi', β: 'beta' },
    difficulty: 'intermediate',
  },

  // ── Calculus / curvature levers ───────────────────────────────────
  {
    id: 'layerwise-hessian',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Layerwise Quantization Hessian',
    definition:
      'For a single linear layer, the damage from perturbing weights is $\\lVert\\Delta W X\\rVert_F^2 = \\operatorname{tr}(\\Delta W (XX^\\top)\\Delta W^\\top)$, a quadratic form whose Hessian is $H = 2XX^\\top$ — closed form, dependent only on activations, computable from forward passes. Quantization is therefore a constrained Newton problem, not a numerics chore.',
    example:
      'Error-feedback rounding (the GPTQ/OBQ construction) pushes each rounding error into the not-yet-quantized coordinates along the direction $H^{-1}$ prescribes. Measured against brute-force optimal, that beats round-to-nearest by roughly 2.7–3.0× in layer error, with no gradients anywhere.',
    formula: '$H = 2XX^\\top, \\quad \\mathcal{L} = \\operatorname{tr}(\\Delta W H \\Delta W^\\top)/2$',
    latex: 'H = 2XX^\\top, \\quad \\mathcal{L} = \\operatorname{tr}(\\Delta W H \\Delta W^\\top)/2',
    related: ['substrate-calculus', 'incoherence-processing', 'trellis-quantization', 'kronecker-factored-curvature'],
    formulaLinks: ['Layerwise Quantization Hessian'],
    difficulty: 'advanced',
  },
  {
    id: 'gauss-newton-sensitivity',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Gauss–Newton Sensitivity Probe',
    definition:
      'To second order, injecting per-element MSE $D$ into a component raises the output KL by $\\tfrac12 s D$, where $s$ is that component\'s Gauss–Newton sensitivity. Rearranged, $s = 2\\,\\mathrm{KL}/D$ — so $s$ is measurable by adding calibrated noise and reading the output divergence. One forward pass per component, no gradients, no backward pass.',
    example:
      'Measured across attention heads, variance and sensitivity spanned 7828× and 22906× respectively yet their logs correlated at only 0.38 — so allocators that rank heads by variance or norm are optimising a weakly-correlated proxy.',
    formula: '$\\mathrm{KL} \\approx \\tfrac12 s\\,D \\;\\Rightarrow\\; s = 2\\,\\mathrm{KL}/D$',
    latex: '\\mathrm{KL} \\approx \\tfrac{1}{2} s\\,D \\;\\Rightarrow\\; s = 2\\,\\mathrm{KL}/D',
    related: ['rate-distortion-allocation', 'layerwise-hessian', 'substrate-calculus'],
    difficulty: 'advanced',
  },
  {
    id: 'incoherence-processing',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Incoherence Processing',
    definition:
      'Since $WX = (WQ)(Q^\\top X)$ for any orthogonal $Q$, rotating weights and activations leaves the layer\'s function untouched — but the quantization grid lives in coordinates, so the problem changes. A Hadamard rotation makes the curvature *incoherent*, meaning no single axis carries the dominant eigenvector, which decouples rounding decisions.',
    example:
      'The trade is not free: mixing channels widens each weight row\'s dynamic range and coarsens the grid step. Measured on a synthetic layer, rotation gained 1.37× at 2 bits and 1.21× at 3 bits but *lost* (0.72×) at 4 bits — it is a low-bit tool, and applying it unconditionally costs accuracy at int4.',
    formula: '$\\mu(H) = d\\max_i |u_i^{\\text{top}}|^2$',
    latex: '\\mu(H) = d\\max_i |u_i^{\\text{top}}|^2',
    related: ['layerwise-hessian', 'trellis-quantization'],
    symbolLinks: { μ: 'mu' },
    difficulty: 'advanced',
  },
  {
    id: 'trellis-quantization',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Trellis / Lattice Quantization',
    definition:
      'Rounding weights to minimise $\\operatorname{tr}(\\Delta W H \\Delta W^\\top)$ is an integer least-squares problem — a closest-vector problem, NP-hard in general. Greedy error feedback is the cheap approximation. A trellis quantizer instead searches correlated multi-coordinate configurations with a Viterbi decoder over the whitened weights.',
    example:
      'Measured justification: greedy rounding sits in a *strict 1-opt local minimum* — no single coordinate can be improved — yet remains above the brute-force optimum. At 2 bits, 3-opt closes 100% of the gap; at 3 bits only 21%, with Hamming distances of 3–4. The required correlation order rises as the grid gets finer, which is exactly what fixed-$k$ local search cannot follow.',
    formula: '$\\min_{k \\in \\mathbb{Z}^d} \\lVert w - sk \\rVert_H^2$',
    latex: '\\min_{k \\in \\mathbb{Z}^d} \\lVert w - sk \\rVert_H^2',
    related: ['layerwise-hessian', 'incoherence-processing'],
    difficulty: 'advanced',
  },
  {
    id: 'kronecker-factored-curvature',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Kronecker-Factored Curvature',
    definition:
      'The honest quantization objective is two-sided, $\\operatorname{tr}(G\\,\\Delta W\\,H\\,\\Delta W^\\top)$, with an input-side Hessian $H$ and an output-side metric $G$; the full Hessian is the Kronecker product $G\\otimes H$. Because $G$ couples the output rows, they can no longer be rounded independently. Every deployed method optimises the $G = I$ slice.',
    example:
      'Measured by brute force, the cost of ignoring $G$ is 1.00× when $G$ is well-conditioned but reaches 3.59× at cond$(G)=1000$ — and a $\\mathrm{diag}(G)$ approximation recovers *none* of it, since a diagonal metric expresses cheap channels but not a cheap direction in output space. The prize is real but conditional on real Fisher blocks being ill-conditioned.',
    formula: '$\\nabla^2 = G \\otimes H$',
    latex: '\\nabla^2 = G \\otimes H',
    related: ['layerwise-hessian', 'substrate-calculus', 'trellis-quantization'],
    symbolLinks: { '⊗': 'otimes' },
    difficulty: 'advanced',
  },

  // ── Linear-algebra & optimization levers ──────────────────────────
  {
    id: 'semiseparable-attention',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Semiseparable Attention',
    definition:
      'Attention\'s $O(N^2)$ cost comes from materialising an $N\\times N$ matrix — but that matrix is not arbitrary. Under causal masking with a decaying kernel it is semiseparable, and semiseparable matrices admit $O(N)$ matrix-vector products. State-space duality makes the equivalence explicit: the same map evaluates as a quadratic form (parallel, good for prefill) or a linear recurrence (sequential, good for decode).',
    example:
      'This is the only route that removes the KV cache rather than shrinking it. In practice hybrids still win, because softmax attention retains exact recall that a fixed-size state cannot.',
    formula: '$O(N^2) \\to O(N)$ via structured $QK^\\top$',
    latex: 'O(N^2) \\to O(N)',
    related: ['substrate-linear-algebra', 'structured-weight-operators', 'arithmetic-intensity-roofline'],
    difficulty: 'advanced',
  },
  {
    id: 'structured-weight-operators',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Structured Weight Operators',
    definition:
      'A dense $W$ is one point in a space of structured operators. Monarch, butterfly, and Block Tensor-Train factorisations give sub-quadratic parameter count *and* sub-quadratic FLOPs while remaining expressive enough to represent every fast transform. A Monarch matrix is $M = PLP^\\top R$ with block-diagonal $L, R$, costing $O(n^{3/2})$ and mapping onto batched GEMM.',
    example:
      'Block Tensor-Train has been shown to beat dense matrices *at equal compute*, so the win is compute-efficiency rather than mere compression. The caveat: structured kernels often underperform their FLOP count, so any speedup must be verified on real kernels.',
    formula: '$M = PLP^\\top R, \\quad O(n^2) \\to O(n^{3/2})$',
    latex: 'M = PLP^\\top R, \\quad O(n^2) \\to O(n^{3/2})',
    related: ['substrate-linear-algebra', 'semiseparable-attention'],
    difficulty: 'advanced',
  },
  {
    id: 'spectral-descent-muon',
    field: 'cs',
    topic: 'ai-substrates',
    term: 'Spectral Descent (Muon)',
    definition:
      'SGD and Adam implicitly measure step size in the Euclidean norm on flattened parameters. But a weight matrix is an *operator*, and what matters is how much it changes its output — the spectral norm. Steepest descent under a spectral-norm trust region gives $\\Delta W \\propto -UV^\\top$ where $G = U\\Sigma V^\\top$: keep the gradient\'s directions, discard its singular values.',
    example:
      'Reported 30–40% reductions in training tokens at small scale, and — arguably more valuable — width-independent hyperparameters, so learning rates tuned small transfer to large. An untested implication: spectrally-controlled models have bounded singular values by construction, which should make them easier to quantize.',
    formula: '$\\Delta W \\propto -UV^\\top, \\quad G = U\\Sigma V^\\top$',
    latex: '\\Delta W \\propto -UV^\\top, \\quad G = U\\Sigma V^\\top',
    related: ['substrate-optimization', 'incoherence-processing', 'substrate-calculus'],
    symbolLinks: { Σ: 'sigma' },
    formulaLinks: ['Muon Spectral Descent Update'],
    difficulty: 'advanced',
  },
];
