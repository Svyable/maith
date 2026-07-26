import type { Question } from "../types";

/**
 * AI Math Substrates — the five pieces of mathematics a frontier model
 * actually runs on, and the places where each one hides an order-of-magnitude
 * win: linear algebra, probability, information theory, calculus, optimization.
 *
 * Companion research dossier: docs/ai-substrate-breakthroughs.md
 * Companion prototypes:       experiments/ai-substrates/
 *
 * ID range: 15000–15099
 */
export const aiSubstratesQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // EASY — the five substrates, named and located
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 15001,
    topic: "ai-substrates",
    difficulty: "easy",
    question: `Every layer of a neural network reduces to the same operation. What is it?`,
    options: [
      "An affine map $y = Wx + b$ — a matrix multiply plus a shift",
      "A logical comparison between two vectors",
      "A lookup in a stored table of learned answers",
      "A differential equation solved numerically at each step",
    ],
    correctIndex: 0,
    explanation:
      `A layer takes a vector $x$, multiplies it by a weight matrix $W$, and adds a bias $b$. "Deep" means only that many such maps are stacked in a row — there is no additional mechanism hiding in the word. Nonlinearities between layers are what stop the stack from collapsing into a single matrix, but the load-bearing operation is the matrix multiply.`,
    realWorld:
      "GPUs exist commercially at their current scale because this one operation dominates the workload — Nvidia's valuation rests on selling matrix multipliers.",
    hint: "Cayley formalized the algebra in 1858; the hardware caught up 150 years later.",
    symbolLinks: { W: "omega" },
    glossaryLinks: ["substrate-linear-algebra"],
  },
  {
    id: 15002,
    topic: "ai-substrates",
    difficulty: "easy",
    question: `At each step a language model produces a probability distribution over its whole vocabulary. Which function converts raw scores (logits) into that distribution?`,
    options: [
      "Softmax, $p_i = e^{z_i/T} / \\sum_j e^{z_j/T}$",
      "The sigmoid function applied to each logit independently",
      "L2 normalization of the logit vector",
      "The ReLU function, which zeroes out negative logits",
    ],
    correctIndex: 0,
    explanation:
      `Softmax exponentiates each logit and normalizes so the result sums to 1. The temperature $T$ rescales the logits first: as $T \\to 0$ the distribution collapses onto its argmax, and as $T$ grows it flattens toward uniform. Sigmoid would give each token an independent probability that need not sum to 1, which is not a distribution over a choice.`,
    realWorld:
      "The 'creativity' or 'temperature' slider in any AI product is literally the $T$ in this equation.",
    hint: "Sigmoid treats tokens independently; you need them to compete.",
    symbolLinks: { Σ: "sigma" },
    glossaryLinks: ["substrate-probability", "temperature-boltzmann"],
    formulaLinks: ["Softmax Function"],
  },
  {
    id: 15003,
    topic: "ai-substrates",
    difficulty: "easy",
    question: `Cross-entropy loss, the objective used to train essentially every language model, measures what quantity?`,
    options: [
      "The model's surprise at the token that actually occurred, measured in bits",
      "The Euclidean distance between predicted and true token embeddings",
      "The fraction of tokens the model predicted exactly correctly",
      "The total number of parameters that changed during the update",
    ],
    correctIndex: 0,
    explanation:
      `Cross-entropy is $-\\log p(\\text{actual token})$. Confident and right gives a small loss; blindsided gives a large one. Measured in base 2 the units are bits, which is not a coincidence — this is Shannon's 1948 quantity. Accuracy is not differentiable and so cannot be optimized by gradient descent; surprise can.`,
    realWorld:
      "Driving this single number down is what a training run is. Every capability claim ultimately traces back to fewer bits of surprise.",
    hint: "The units are the giveaway — who introduced the bit?",
    glossaryLinks: ["substrate-information-theory", "prediction-compression-duality"],
    formulaLinks: ["Shannon Entropy"],
  },
  {
    id: 15004,
    topic: "ai-substrates",
    difficulty: "easy",
    question: `Backpropagation, the algorithm that trains every deep network, is fundamentally an application of which piece of mathematics?`,
    options: [
      "The chain rule for derivatives, evaluated in reverse order",
      "Bayes' theorem applied recursively across layers",
      "Gaussian elimination on the weight matrices",
      "The central limit theorem applied to activation statistics",
    ],
    correctIndex: 0,
    explanation:
      `Backprop computes $\\partial L / \\partial w$ for every weight by chaining local derivatives from the loss backwards to that weight. The only real insight beyond freshman calculus is the *ordering*: evaluating the chain right-to-left (reverse-mode) yields all derivatives in one pass instead of one pass per parameter — a bookkeeping result due to Linnainmaa in 1970.`,
    realWorld:
      "`loss.backward()` in PyTorch is this, scaled to a trillion parameters. Brains do not appear to implement it; no biological mechanism for reverse-mode credit assignment has been found.",
    hint: "Leibniz, 1600s. The 1970 contribution was the direction you evaluate it in.",
    glossaryLinks: ["substrate-calculus"],
  },
  {
    id: 15005,
    topic: "ai-substrates",
    difficulty: "easy",
    question: `In high-dimensional loss landscapes, why does gradient descent so rarely get trapped in a local minimum?`,
    options: [
      "Almost every critical point is a saddle, offering at least one descending direction",
      "The loss landscape of a neural network is provably convex",
      "Momentum terms are guaranteed to escape any local minimum",
      "Local minima do not exist once the parameter count exceeds the dataset size",
    ],
    correctIndex: 0,
    explanation:
      `A critical point is a minimum only if *every* one of the millions of Hessian eigenvalues is positive. As dimension grows, the chance that all of them share a sign becomes vanishingly small, so critical points are overwhelmingly saddles — and a saddle has a downhill direction available. Neural loss surfaces are emphatically not convex; the rescue comes from dimensionality, not from convexity.`,
    realWorld:
      "This is why training a billion-parameter model works at all, and why intuitions drawn from two-dimensional bumpy-surface pictures mislead.",
    hint: "For a trap you need every eigenvalue positive at once. How likely is that in a million dimensions?",
    glossaryLinks: ["substrate-optimization"],
  },
  {
    id: 15006,
    topic: "ai-substrates",
    difficulty: "easy",
    question: `During single-token decoding, what is the binding hardware constraint on a modern LLM?`,
    options: [
      "Memory bandwidth — the weights must be read from memory faster than they can be used",
      "Raw floating-point throughput of the GPU's tensor cores",
      "The latency of the network interconnect between GPUs",
      "CPU speed while sampling from the output distribution",
    ],
    correctIndex: 0,
    explanation:
      `Generating one token for one sequence performs roughly one multiply-accumulate per weight read, so arithmetic intensity is about 1 FLOP per byte. Modern accelerators offer hundreds of FLOPs per byte of bandwidth, so the tensor cores sit idle waiting on memory. This is why batching, KV-cache compression, and speculative decoding all help: each raises the work done per byte moved.`,
    realWorld:
      "It explains an otherwise strange fact — serving many users at once costs barely more per token than serving one, because the expensive part (reading the weights) is shared.",
    hint: "Count the arithmetic per byte fetched during decode.",
    glossaryLinks: ["arithmetic-intensity-roofline"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // HARD — the mechanisms behind the mechanisms
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 15020,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `Softmax with temperature is mathematically identical to a distribution from 19th-century physics. Which one, and what plays the role of energy?`,
    options: [
      "The Boltzmann distribution, with the negative logits acting as energies",
      "The Maxwell–Boltzmann speed distribution, with logits as velocities",
      "The Planck blackbody distribution, with logits as frequencies",
      "The Fermi–Dirac distribution, with logits as chemical potentials",
    ],
    correctIndex: 0,
    explanation:
      `The Boltzmann distribution is $p_i \\propto e^{-E_i/k_BT}$. Softmax is $p_i \\propto e^{z_i/T}$, so identifying $E_i = -z_i$ makes them the same equation. The correspondence is not decorative: it means the softmax normalizer is a partition function, its log is a free energy, and cooling toward $T \\to 0$ freezes the system into its ground state exactly as sampling collapses onto the argmax.`,
    realWorld:
      "Because entropy is thermodynamic here, per-token entropy is a genuine free uncertainty estimate — usable to decide how much compute a token deserves.",
    hint: "Which distribution assigns probability by exponentiating a negative energy over a temperature?",
    symbolLinks: { T: "tau" },
    glossaryLinks: ["temperature-boltzmann", "substrate-probability"],
    formulaLinks: ["Boltzmann Distribution"],
  },
  {
    id: 15021,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `Why are next-token prediction and lossless compression the same problem rather than merely analogous ones?`,
    options: [
      "Arithmetic coding turns any probability model into a code of length $-\\log_2 p$ bits, so lowering cross-entropy lowers compressed size by exactly the same amount",
      "Both algorithms happen to run in the same asymptotic time complexity",
      "Compressors and language models are both trained by gradient descent",
      "Both problems reduce to finding the shortest description of the model's weights",
    ],
    correctIndex: 0,
    explanation:
      `Given a distribution $p$ over the next symbol, arithmetic coding encodes the observed symbol in about $-\\log_2 p(\\text{symbol})$ bits, approaching the entropy bound. That is precisely the cross-entropy loss. So the total training loss over a corpus *is* the compressed length of that corpus under the model. Not similar to it — equal to it.`,
    realWorld:
      "DeepMind demonstrated the identity by using a language model as a general-purpose compressor, beating PNG on images and FLAC on audio despite the model never being trained on either.",
    hint: "What is the code length that arithmetic coding assigns to a symbol of probability $p$?",
    glossaryLinks: ["prediction-compression-duality", "substrate-information-theory"],
  },
  {
    id: 15022,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `For a single linear layer $y = Wx$ with calibration activations $X$, the quantization objective $\\lVert(W-\\hat W)X\\rVert_F^2$ has a Hessian available in closed form. What is it?`,
    options: [
      "$H = 2XX^\\top$, the (scaled) second moment of the activations",
      "$H = 2W^\\top W$, the Gram matrix of the weights",
      "$H = I$, since the objective is a plain sum of squares",
      "It has no closed form and must be estimated by backpropagation",
    ],
    correctIndex: 0,
    explanation:
      `Writing $\\Delta = W - \\hat W$, the objective is $\\operatorname{tr}(\\Delta XX^\\top \\Delta^\\top)$ — a quadratic form in $\\Delta$ whose Hessian is $2XX^\\top$. It depends only on the activations, not on the weights, so it is computable from a forward pass over calibration data. No gradients, no sampling, no training loop.`,
    realWorld:
      "This is what makes GPTQ-family post-training quantization possible: error-feedback rounding is a sequence of exact Newton steps, and measured against brute-force optimal it beats round-to-nearest by roughly 2.7–3.0× in layer error.",
    hint: "Expand the Frobenius norm as a trace and read off the quadratic form.",
    glossaryLinks: ["layerwise-hessian", "substrate-calculus"],
    formulaLinks: ["Layerwise Quantization Hessian"],
  },
  {
    id: 15023,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `In speculative decoding with draft $q$ and target $p$, the acceptance rate of the standard algorithm equals which exact quantity?`,
    options: [
      "$\\sum_x \\min(p(x), q(x)) = 1 - \\mathrm{TV}(p, q)$, the maximal-coupling bound",
      "$1 - D_{\\mathrm{KL}}(p \\parallel q)$",
      "The cosine similarity between the vectors $p$ and $q$",
      "$1 - H(p, q)$, one minus the cross-entropy between them",
    ],
    correctIndex: 0,
    explanation:
      `Speculative decoding constructs a maximal coupling: a joint law with marginals $p$ and $q$ that maximizes the probability the two agree. That maximum is the overlap $\\sum_x \\min(p,q)$, which equals $1 - \\mathrm{TV}(p,q)$. Two consequences follow. The algorithm is *optimal* for a single draft, so no engineering improves it without changing the problem. And the emitted distribution is exactly $p$, so the speedup costs no quality at all.`,
    realWorld:
      "It also implies drafts should be distilled on total variation rather than KL. Two drafts with identical cross-entropy can differ by several acceptance points, because TV and KL rank errors differently.",
    hint: "It is a coupling — what is the largest possible agreement probability between two given marginals?",
    glossaryLinks: ["maximal-coupling-acceptance", "total-variation-distance"],
    formulaLinks: ["Speculative Decoding Acceptance Rate"],
  },
  {
    id: 15024,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `Unmasking $K$ positions simultaneously in a diffusion language model samples from the product of marginals instead of the joint. What exactly is the resulting error?`,
    options: [
      "The multi-information of the set: $\\sum_{i \\in S} H(x_i \\mid c) - H(x_S \\mid c)$",
      "The total variation distance between adjacent denoising timesteps",
      "The sum of per-token entropies, with no correction term",
      "Zero — the factorization is exact whenever positions are non-adjacent",
    ],
    correctIndex: 0,
    explanation:
      `The KL divergence from the true joint to the product of marginals is exactly the multi-information (total correlation) of the set, $\\sum_i H(x_i \\mid c) - H(x_S \\mid c)$. So the safe parallel set is the largest set of positions that are *mutually near-independent* given the context. This is an information-theoretic criterion with a computable budget, not a tunable heuristic.`,
    realWorld:
      "Published parallel-decoding selectors use single-timestep confidence or entropy as a proxy for this quantity. The principled version estimates the dependency directly and commits sets under a certified TV budget.",
    hint: "KL from a joint to the product of its marginals has a standard name.",
    glossaryLinks: ["parallel-decoding-multi-information", "substrate-information-theory"],
  },
  {
    id: 15025,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `The Muon optimizer replaces the raw gradient update with $\\Delta W \\propto -UV^\\top$ where $G = U\\Sigma V^\\top$. What is the principle behind discarding $\\Sigma$?`,
    options: [
      "It is steepest descent under a spectral-norm trust region rather than a Euclidean one",
      "It reduces the memory needed to store optimizer state",
      "It whitens the gradient so all directions have unit variance",
      "It projects the update onto the nearest low-rank matrix",
    ],
    correctIndex: 0,
    explanation:
      `SGD and Adam implicitly measure step size in the Euclidean norm on flattened parameters. But a weight matrix is an *operator*, and what matters is how much it changes its output — the spectral norm. Steepest descent under a spectral-norm constraint gives an update proportional to $UV^\\top$: keep the gradient's directions, discard its singular values. The nuclear norm on the update is dual to the spectral norm on the constraint.`,
    realWorld:
      "Reported 30–40% reductions in training tokens at small scale, and — arguably more valuable — width-independent hyperparameters, so learning rates tuned small transfer to large.",
    hint: "Steepest descent is only defined relative to a norm. Which norm is natural for an operator?",
    symbolLinks: { Σ: "sigma" },
    glossaryLinks: ["spectral-descent-muon", "substrate-optimization"],
    formulaLinks: ["Muon Spectral Descent Update"],
  },
  {
    id: 15026,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `Attention's $O(N^2)$ cost is often called fundamental. In what sense is that misleading?`,
    options: [
      "For causal attention with a decaying kernel the score matrix is structured (semiseparable), and structured matrices admit fast transforms",
      "The cost is really $O(N \\log N)$ once the softmax is fused into the kernel",
      "It only applies during training; inference attention is inherently linear",
      "Modern GPUs execute the quadratic form in constant time via tensor cores",
    ],
    correctIndex: 0,
    explanation:
      `Quadratic cost comes from materializing an $N \\times N$ matrix. But that matrix is not arbitrary — under causal masking with a decaying kernel it is semiseparable, and semiseparable matrices have $O(N)$ matrix-vector products. Mamba-2's state-space duality makes this explicit: the same map can be evaluated as a quadratic form (parallel, good for prefill) or as a linear recurrence (sequential, good for decode).`,
    realWorld:
      "This is the only route that removes the KV cache rather than shrinking it — an asymptotic change rather than a constant factor. In practice hybrids still win, because softmax attention retains exact recall a fixed-size state cannot.",
    hint: "Ask what kind of matrix $QK^\\top$ actually is, not how large it is.",
    glossaryLinks: ["semiseparable-attention", "substrate-linear-algebra"],
  },
  {
    id: 15027,
    topic: "ai-substrates",
    difficulty: "hard",
    question: `Applying a Hadamard rotation before quantizing weights leaves the layer's function unchanged. Why can it still change quantization error?`,
    options: [
      "$WX = (WQ)(Q^\\top X)$ preserves the function but changes how the curvature aligns with the coordinate axes, where the quantization grid lives",
      "The rotation reduces the number of nonzero weights that need storing",
      "Hadamard matrices have entries $\\pm 1$, so the rotated weights need no multiplies",
      "Rotation lowers the rank of the weight matrix, reducing effective parameters",
    ],
    correctIndex: 0,
    explanation:
      `The grid is defined in coordinates, so rotating changes the problem even though the function is identical. Rotation makes the Hessian *incoherent* — no single axis carries the dominant eigenvector — which reduces coupling between rounding decisions. The trade is not free, though: mixing channels widens each weight row's dynamic range and coarsens the grid step.`,
    realWorld:
      "Measured on a synthetic layer, rotation helps by 1.37× at 2 bits and 1.21× at 3 bits, but *hurts* by 0.72× at 4 bits — the incoherence gain only dominates when the grid is badly overloaded. Rotation is a low-bit tool.",
    hint: "Orthogonal maps preserve the function. What don't they preserve?",
    glossaryLinks: ["incoherence-processing", "layerwise-hessian"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // SOTA — research frontier, including results that came out negative
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 15040,
    topic: "ai-substrates",
    difficulty: "sota",
    paper: {
      title: "RateQuant: Optimal Mixed-Precision KV Cache Quantization via Rate-Distortion Theory",
      url: "https://arxiv.org/abs/2605.06675",
      year: 2026,
    },
    question: `Casting KV-cache bit allocation as rate-distortion optimization yields reverse water-filling. What condition does the optimum enforce across heads?`,
    options: [
      "Equal marginal distortion reduction per bit, with heads below the threshold receiving zero bits",
      "Equal total distortion in every head",
      "Equal bit width in every head, since the budget is shared",
      "Bit width proportional to each head's activation variance",
    ],
    correctIndex: 0,
    explanation:
      `Minimizing $\\sum_h s_h c_h 2^{-\\beta_h b_h}$ subject to a mean-rate constraint gives stationarity $\\beta_h \\ln 2 \\cdot s_h c_h 2^{-\\beta_h b_h} = \\lambda$: every head is driven to *equal marginal* distortion per bit, not equal distortion. Heads whose unconstrained allocation goes negative are pinned at zero — and pinning at zero bits is exactly eviction. Quantization and eviction are one Lagrangian, not two heuristics.`,
    realWorld:
      "Measured on a synthetic 16-head layer, sensitivity-weighted allocation is worth about 3.5 equivalent uniform bits, landing at 1.91 effective bits/element with lower output KL than uniform int4 at 4.00 bits.",
    hint: "Water-filling equalizes a derivative, not a level. Which derivative?",
    symbolLinks: { λ: "lambda", β: "beta" },
    glossaryLinks: ["rate-distortion-allocation", "reverse-water-filling"],
    formulaLinks: ["Reverse Water-Filling Bit Allocation"],
  },
  {
    id: 15041,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `A rate-distortion KV allocator fits per-head distortion curves $D_h(b) = c_h 2^{-\\beta_h b}$ at 3, 5, and 7 bits, then allocates at an average of 2 bits — and performs an order of magnitude worse than uniform allocation. What went wrong?`,
    options: [
      "The curves were extrapolated below their fitted range, so clipping-limited designs looked good before their error floor appeared",
      "The Lagrangian has no solution when the budget is below the fitted minimum",
      "Fitting three points cannot identify two parameters",
      "Distortion becomes non-monotone in bit width below 3 bits",
    ],
    correctIndex: 0,
    explanation:
      `A quantizer that clips has a distortion floor that does not shrink with added bits. Fitted only at high rate, that floor is invisible and the fitted exponent flatters the design. Allocating at 1–2 bits then selects exactly the designs whose floor has not yet been paid. Refitting inside the operating range flips the choice back and the allocator wins.`,
    realWorld:
      "Measured: fitting at (3,5,7) gave KL 2.77e-03 versus 2.70e-04 for doing nothing — a 10× regression. Refitting at (2,3,4) gave 2.45e-04, now beating the baseline. The failure is silent, and it produces a confidently wrong allocation rather than a noisy one.",
    hint: "The model is a fit. Where was it evaluated versus where was it used?",
    glossaryLinks: ["rate-distortion-allocation"],
  },
  {
    id: 15042,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `Per-head KV bit allocation is often driven by activation variance or key-norm. Why is that the wrong statistic, and what replaces it?`,
    options: [
      "Downstream output sensitivity, obtainable from one noise probe per head via $\\mathrm{KL} \\approx \\tfrac12 s_h D_h$ — variance is only weakly correlated with it",
      "The rank of each head's key matrix, since low-rank heads compress better",
      "Attention entropy, which measures how many positions each head attends to",
      "Nothing replaces it; variance is the theoretically correct weighting",
    ],
    correctIndex: 0,
    explanation:
      `What a bit buys is a reduction in *output* distortion, and a second-order expansion gives $\\mathrm{KL} \\approx \\tfrac12 s_h D_h$ where $s_h$ is the Gauss–Newton sensitivity of the output distribution to head $h$. Since $D_h$ is the injected MSE, $s_h$ is recoverable from a single noise probe per head — one forward pass, no gradients. A head can carry large activations and still barely move the logits, because the output projection weights heads unequally.`,
    realWorld:
      "Measured on a synthetic layer: variance spans 7828×, sensitivity spans 22906×, and their logs correlate at only 0.38. A variance-ranked allocator is optimizing a weakly-correlated proxy.",
    hint: "You want the derivative of the thing you care about, not the size of an intermediate.",
    glossaryLinks: ["rate-distortion-allocation", "gauss-newton-sensitivity"],
  },
  {
    id: 15043,
    topic: "ai-substrates",
    difficulty: "sota",
    paper: {
      title: "Optimal Block-Level Draft Verification for Accelerating LLM Inference",
      url: "https://arxiv.org/pdf/2606.13426",
      year: 2026,
    },
    question: `Why does verifying a draft block jointly accept more tokens than verifying it token-by-token, with the same draft and target?`,
    options: [
      "Token-greedy chains per-step conditional overlaps, whereas the attainable bound is $\\sum_l (1 - \\mathrm{TV})$ of the *joint* prefix laws, which Jensen places higher",
      "Block verification runs additional forward passes to re-score rejected tokens",
      "Joint verification relaxes exactness, trading a small distribution shift for speed",
      "Token-level rejection cannot use the target model's cached activations",
    ],
    correctIndex: 0,
    explanation:
      `Both schemes are valid couplings, but they are different couplings. Greedy per-token rejection is locally optimal and multiplies conditional overlaps down the block. The block-optimal coupling instead attains $P(\\text{first } l \\text{ accepted}) = 1 - \\mathrm{TV}(p_{1:l}, q_{1:l})$ for each $l$, using the joint law. Jensen's inequality puts joint TV below the product of conditional TVs, so the block scheme dominates — locally optimal is not globally optimal.`,
    realWorld:
      "Computed exactly on small alphabets: 1.14–1.21× more accepted tokens per step, translating to 1.08–1.13× wall clock at a draft/target cost ratio of 0.15. No extra compute — purely a different coupling.",
    hint: "Compare TV of a joint distribution against the product of its conditionals' TVs.",
    glossaryLinks: ["maximal-coupling-acceptance", "total-variation-distance"],
  },
  {
    id: 15044,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `Sampling $k$ i.i.d. drafts per step is often justified by the bound $\\sum_x \\min(p(x), 1-(1-q(x))^k)$. What is the practical problem with that bound?`,
    options: [
      "It becomes vacuous (equals 1) at small $k$, so it must be bracketed by an achievable scheme such as recursive rejection sampling",
      "It is only valid when $p$ and $q$ share support",
      "It underestimates acceptance, making multi-draft look worse than it is",
      "It assumes the drafts are dependent, which parallel sampling violates",
    ],
    correctIndex: 0,
    explanation:
      `The bound comes from applying a per-token constraint independently, so it ignores the dependence among the events "token $x$ appears among the drafts". It is valid but loose, and it saturates at 1 quickly — at which point it carries no information. The fix is to compute an *achievable* rate too: recursive rejection sampling gives $1 - \\prod_i (1-\\alpha_i)$ in closed form, where each $\\alpha_i$ is the overlap against the running residual.`,
    realWorld:
      "Measured: the bound hits exactly 1.000 by $k=4$, while the achievable curve reads 0.814 at $k=4$ and 0.893 at $k=8$. Acceptance-per-FLOP falls monotonically in $k$ — draft width is not where large speedups live.",
    hint: "An upper bound that equals 1 tells you nothing. What should you compare it to?",
    glossaryLinks: ["maximal-coupling-acceptance"],
  },
  {
    id: 15045,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `GPTQ-style error-feedback rounding lands measurably above the brute-force optimal rounding. Single-coordinate re-rounding finds *zero* improving moves. What does that imply about the residual gap?`,
    options: [
      "It consists of correlated moves — coordinate triples or larger whose errors cancel through $H$'s off-diagonal — so the right tool is a trellis or lattice decoder, not a better greedy",
      "The gap is numerical noise from the Cholesky factorization and is not real",
      "The brute-force optimum is not reachable by any polynomial-time method, so the gap is irreducible",
      "The gap disappears once the quantization grid is made asymmetric",
    ],
    correctIndex: 0,
    explanation:
      `Greedy error feedback lands in a strict 1-opt local minimum: no single coordinate can be re-rounded profitably. So every improving move requires several coordinates to change *together*, with individual sub-moves each looking like a loss. Fixed-$k$ local search cannot scale to find these, which is precisely the argument for decoders that search correlated configurations by construction.`,
    realWorld:
      "Measured against brute-force optimal: at 2 bits, 3-opt closes 100% of the gap; at 3 bits it closes only 21%, with Hamming distances of 3–4 showing that four or more coordinates must move. The required correlation order *rises* as the grid gets finer — and it predicts trellis quantization should help most at the lowest bit width.",
    hint: "If no single move helps but the solution is suboptimal, how many must move at once?",
    glossaryLinks: ["layerwise-hessian", "trellis-quantization"],
  },
  {
    id: 15046,
    topic: "ai-substrates",
    difficulty: "sota",
    paper: {
      title: "KronQ: LLM Quantization via Kronecker-Factored Hessian",
      url: "https://arxiv.org/pdf/2607.07964",
      year: 2026,
    },
    question: `The honest quantization objective is two-sided, $\\operatorname{tr}(G\\,\\Delta W\\,H\\,\\Delta W^\\top)$ with an output-side metric $G$. When does ignoring $G$ actually cost anything?`,
    options: [
      "Only when $G$ is ill-conditioned — and a $\\mathrm{diag}(G)$ approximation recovers none of the gap, because it cannot represent a cheap *direction* in output space",
      "Always, in proportion to the trace of $G$",
      "Never, since $G$ is positive definite and cannot change an argmin",
      "Only when $G$ and $H$ share an eigenbasis",
    ],
    correctIndex: 0,
    explanation:
      `The full Hessian is the Kronecker product $G \\otimes H$, and $G$ couples the output rows so they can no longer be rounded independently. When $G$ is well-conditioned the one-sided and two-sided optima coincide. As $G$ becomes ill-conditioned, some *combination* of output channels becomes nearly free to damage, and only a two-sided objective can exploit it. A diagonal $G$ expresses cheap channels but not cheap directions, so it reproduces the one-sided answer exactly.`,
    realWorld:
      "Measured by brute force: 1.00× inflation at cond(G)=1 and 10, rising to 2.04× at 100 and 3.59× at 1000, with diag(G) tracking the one-sided answer throughout. So the prize is real but conditional — and the deciding measurement is simply cond(G) per layer on a real model.",
    hint: "A positive-definite metric with a near-null direction makes some error nearly free. Can a diagonal capture that?",
    symbolLinks: { "⊗": "otimes" },
    glossaryLinks: ["kronecker-factored-curvature", "layerwise-hessian"],
  },
  {
    id: 15047,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `Nominal bit width overstates the true storage cost of a quantized cache. What recovers the difference, and what does it cost in accuracy?`,
    options: [
      "Entropy-coding the quantized indices, at exactly zero distortion — the indices are non-uniform, so their empirical entropy is below the nominal width",
      "Re-centering each block's zero-point, at the cost of one extra scale per block",
      "Pruning the lowest-magnitude indices, at a small and bounded accuracy cost",
      "Nothing — nominal width is a hard information-theoretic floor",
    ],
    correctIndex: 0,
    explanation:
      `A $b$-bit index field can encode $2^b$ symbols, but the realized symbol distribution is concentrated near zero rather than uniform. By Shannon's source coding theorem the stream is codable at its empirical entropy $H(\\mathrm{idx}) < b$. Since this re-codes the same indices, the reconstruction is bit-identical and distortion is unchanged.`,
    realWorld:
      "Measured at 4.0–4.8% of bits in a synthetic setting — modest but genuinely free and composable with everything else. The real blocker is not compression ratio but decode bandwidth: arithmetic decoding is serial while a GPU is not, making GPU-parallel rANS throughput the question that decides whether this ships.",
    hint: "How many bits does a source actually need, versus how many its alphabet size suggests?",
    glossaryLinks: ["substrate-information-theory", "rate-distortion-allocation"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // SOTA — v2: results from testing v1's predictions on a trained model.
  // Includes the predictions that FAILED, because those taught more.
  // See docs/ai-substrate-breakthroughs-v2.md
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 15060,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `Deployed quantizers optimise $\\operatorname{tr}(\\Delta W H \\Delta W^\\top)$, the $G = I$ slice of the two-sided objective. Measured on a real trained transformer, what does the output-side metric $G$ actually look like?`,
    options: [
      "Ill-conditioned AND strongly non-diagonal in every layer, with only ~9% of output directions carrying the metric",
      "Nearly diagonal, so per-row scaling already captures it",
      "Well-conditioned, so the one-sided objective is provably optimal",
      "Isotropic, since layer normalization equalizes output channels",
    ],
    correctIndex: 0,
    explanation:
      `Measuring the Gauss-Newton block $G = \\mathbb{E}[(\\partial L/\\partial y)(\\partial L/\\partial y)^\\top]$ across all 24 linear layers of a trained transformer gives median cond$_{99}(G) \\approx 2.8\\times10^3$ and median off-diagonal mass $0.88$ — every layer clears both thresholds at which a two-sided objective was shown to matter. Effective rank is only about 9% of $d_{\\text{out}}$, meaning roughly nine-tenths of output-space directions are nearly free to damage.`,
    realWorld:
      "This is the measurement that decides whether Kronecker-factored rounding earns its complexity, and the answer came back yes: 24/24 layers qualify. Every shipping quantizer is spending its bit budget as though all output directions cost the same.",
    hint: "Two statistics are needed: is there a cheap direction, and can a diagonal see it?",
    symbolLinks: { "⊗": "otimes" },
    glossaryLinks: ["kronecker-factored-curvature", "layerwise-hessian"],
  },
  {
    id: 15061,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `A quantization study predicted that a bounded-memory trellis decoder should beat greedy rounding most at the *lowest* bit width, reasoning that the required correlation order is smallest there. Testing showed the gain was flat in bit width. Where did the reasoning break?`,
    options: [
      "It assumed bounded memory means a fixed correlation order — true of a banded trellis state, false of a beam, which reallocates its search wherever the coupling is",
      "The measured correlation order was an artifact of floating-point error",
      "Beam search does not actually generalise greedy error feedback",
      "Bit width does not affect the quantization grid spacing",
    ],
    correctIndex: 0,
    explanation:
      `The underlying mechanism was sound and independently verified: greedy error feedback sits in a strict 1-opt local minimum, and beam search at wide beam provably reaches the exact integer least-squares optimum. What failed was the inference from mechanism to method. A banded trellis carries a fixed number of past decisions as state, so its reach really is a fixed correlation order. A beam carries whole candidate solutions ranked by exact cost, so it spends its width wherever coupling happens to be — making it insensitive to the bit width in the way predicted.`,
    realWorld:
      "Measured gains were 1.342x, 1.271x and 1.338x at 2, 3 and 4 bits — flat, and the prediction held in only 4 of 6 configurations. A correct mechanism does not guarantee a correct prediction about a method built on it.",
    hint: "What kind of memory does a beam have, compared with a Viterbi state?",
    glossaryLinks: ["trellis-quantization", "layerwise-hessian"],
  },
  {
    id: 15062,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `A synthetic sweep found that the advantage of correlated-search rounding over greedy tracked $\\mathrm{cond}(H)$ with correlation $+0.958$, monotonically. On real trained layers the same measurement gave $-0.907$. What is the general lesson?`,
    options: [
      "A mechanism story fitted to synthetic data can be strongly supported in-sample and still reverse out of sample — the more strongly supported, the harder it can fail",
      "Correlation is not a valid statistic for this kind of comparison",
      "Real Hessians are better conditioned than synthetic ones, so the effect vanishes",
      "The sign flip indicates a bug, since correlations cannot change sign",
    ],
    correctIndex: 0,
    explanation:
      `The synthetic result was clean: monotone across three orders of magnitude of conditioning, correlation $+0.958$. It was also constructed on layers whose activation covariance had a deliberately controlled spectrum and a random eigenbasis. Real layers differ in ways the synthetic generator did not model — and on them, high $\\mathrm{cond}(H)$ is where greedy with act-order does *best* relative to a beam. Nothing was buggy; the synthetic family simply was not representative.`,
    realWorld:
      "This is the ordinary shape of overfitting a mechanism to synthetic data, and it is why the identities in this area transfer while the extrapolations do not. Theorems like $\\alpha = 1 - \\mathrm{TV}$ held on real models; every fitted relationship that failed was an inference from mechanism to method.",
    hint: "Which claim was better supported in-sample, and which failed harder?",
    glossaryLinks: ["trellis-quantization", "gauss-newton-sensitivity"],
  },
  {
    id: 15063,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `In speculative decoding, per-token acceptance is heterogeneous (measured p1 = 0.20 to p99 = 0.89), so a single block length $\\gamma$ leaves value behind. Which signal best predicts local acceptance while costing nothing?`,
    options: [
      "The draft model's own predictive entropy $H(q)$ — it correlates $+0.650$ and is already computed",
      "The target model's entropy $H(p)$, which is the most accurate available signal",
      "Whether the draft and target argmax agree",
      "The position index within the sequence",
    ],
    correctIndex: 0,
    explanation:
      `The draft's entropy is available for free at every step, since the draft already produced a full distribution. Measured against per-token acceptance it correlates $+0.650$ — better than the *target's* entropy at $+0.512$, which is the point, because obtaining target entropy requires the target forward pass that speculation exists to avoid. Bucketing tokens by draft entropy and fitting one $\\gamma$ per bucket captured 51.3% of the adaptive-$\\gamma$ headroom on held-out tokens.`,
    realWorld:
      "This composes two independent levers: entropy as a free uncertainty estimate, and acceptance-dependent block length. It is the cheapest measured win of the whole programme — no extra compute, no model changes, and it generalises to held-out data.",
    hint: "The best signal must be available *before* you pay for the target.",
    glossaryLinks: ["entropy-adaptive-compute", "maximal-coupling-acceptance"],
  },
  {
    id: 15064,
    topic: "ai-substrates",
    difficulty: "sota",
    question: `Solving the serving allocation over $(\\gamma, \\text{batch}, \\text{bits})$ jointly rather than separately was reported as a 6.70x throughput win. Why is that number misleading, and what is the honest one?`,
    options: [
      "The 6.70x was against an fp16-KV baseline; against int4 KV with batch and $\\gamma$ each tuned, the joint solve is worth 1.33x — most of the apparent win is just KV compression",
      "The roofline model overestimates bandwidth, so all the numbers are inflated equally",
      "Joint optimisation is invalid because the variables are independent",
      "The measured acceptance rate was too low for speculation to help at all",
    ],
    correctIndex: 0,
    explanation:
      `A joint optimum is only as impressive as the baseline it beats. Against fp16 KV with $\\gamma$ chosen from a bandwidth-blind cost model, the joint solve looks like 6.70x. Against int8 KV it is 3.35x. Against int4 KV with batch and $\\gamma$ each separately tuned — a baseline a competent engineer would actually build — it is 1.33x. The genuine coupling effect is real but modest: optimal $\\gamma$ depends on bit width through the batch size that fits in bandwidth.`,
    realWorld:
      "Reporting the strongest baseline you can construct, rather than the weakest one that still counts as prior art, is the difference between a result and a press release.",
    hint: "Ask what the baseline was doing, not what the optimum achieved.",
    glossaryLinks: ["arithmetic-intensity-roofline", "rate-distortion-allocation"],
  },
];
