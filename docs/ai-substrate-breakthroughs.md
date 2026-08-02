# Order-of-Magnitude Pathways in the Five AI Math Substrates

> A research dossier. Fifteen pathways to large wins in inference speed, model
> construction, serving at scale, and quantization — each traced back to which
> of the five substrates it exploits. Then three of them iterated to the point
> where the claims are either measured or explicitly labelled as unmeasured.
>
> Companion code: [`experiments/ai-substrates/`](../experiments/ai-substrates/).
> Every number below marked **[measured]** comes from running that code.

---

## How to read this

The five substrates — linear algebra, probability, information theory,
calculus, optimization — are not five topics. They are five *places where a
constraint might be fake*. Almost every large win in this field has come from
noticing that something everyone treated as a law of nature was actually a
default:

| Assumed constraint | Substrate | It was actually a default |
|---|---|---|
| Weight matrices are dense | Linear algebra | Dense is one point in a space of structured operators |
| Attention costs $O(N^2)$ | Linear algebra | $QK^\top$ is a structured matrix with a fast transform |
| One token per forward pass | Probability | Sequential decoding is a factorization *choice* |
| Bit width is uniform | Information theory | Bits are a budget, and budgets have optimal allocations |
| You need gradients to compress | Calculus | For one layer the Hessian is closed-form: $H = 2XX^\top$ |
| Gradient descent is Euclidean | Optimization | Matrices are operators; use the operator norm |

The dossier is organized by substrate. Each pathway states the lever, the math,
the size of the prize, what is already known, and — the part that matters — the
specific open move.

**Tractability** is scored 1–5: 5 means a small team can test it in a week on
one GPU; 1 means it needs a pretraining run.

---

# Substrate 01 — Linear Algebra

## Pathway 1 — Structured weight operators instead of dense $W$

**Lever.** $y = Wx + b$ is a dense matmul only because we chose dense. Monarch,
butterfly, and Block Tensor-Train (BTT) factorizations give sub-quadratic
parameter count *and* sub-quadratic FLOPs while remaining expressive enough to
represent every fast transform (FFT, Hadamard, sparse-plus-low-rank).

**Math.** A Monarch matrix is $M = PL P^\top R$ with $L, R$ block-diagonal and
$P$ a permutation. Cost drops from $O(n^2)$ to $O(n^{3/2})$, and crucially the
blocks map onto batched GEMM, so the FLOP saving actually shows up in wall clock
rather than being eaten by irregular memory access.

**Prize.** Qiu et al. found BTT beats dense *at equal compute* on multiple
tasks — the win is compute-efficiency, not just compression. Monarch reported up
to 2× over dense matmul and 1.7× faster BERT finetuning at parity quality.

**Known.** Monarch (Dao et al. 2022), BTT / "Compute Better Spent" (Qiu et al.
2024), BLAST (2024).

**Open move.** Everything published is *train-from-scratch*. The unclaimed
prize is **post-hoc structural surgery**: project a trained dense $W$ onto the
Monarch/BTT manifold under the *activation-weighted* norm
$\lVert (W - M)X \rVert_F$ rather than the plain Frobenius norm, then heal with
a short distillation. This is the same objective as Pathway 11 with a different
constraint set, which means the same Hessian machinery applies.

**Tractability: 4.** **Risk:** structured matmul kernels underperform their FLOP
count; verify on real kernels before believing any speedup.

---

## Pathway 2 — Activation-aware low-rank plus sparse residual

**Lever.** Weight matrices are not low-rank. But $WX$ often is, and $WX$ is what
matters. Whitening by the activation second moment before truncating changes
which subspace you keep.

**Math.** Minimise $\lVert (W - \hat W)X \rVert_F$ subject to
$\operatorname{rank}(\hat W) \le r$. With $XX^\top = SS^\top$, the solution is
the SVD of $WS$, truncated, then un-whitened: $\hat W = \operatorname{SVD}_r(WS)S^{-1}$.
Plain SVD on $W$ solves the wrong problem.

**Prize.** 2–4× compression on MLP blocks with far less degradation than naive
SVD; composes with quantization since low-rank and low-precision remove
different redundancies.

**Known.** SVD-LLM, LoSparse, ASVD.

**Open move.** Choose the rank *per layer by rate-distortion allocation* rather
than a global ratio — this is Pathway 8's water-filling with rank as the rate
variable. **[measured]** in Pathway A below: sensitivity-weighted allocation is
worth ~3.5 equivalent uniform bits, and nothing about that argument is specific
to bit width.

**Tractability: 5.**

---

## Pathway 3 — Attention as a structured matrix, not a quadratic one

**Lever.** The $N \times N$ attention matrix is not an arbitrary matrix. Under
causal masking with a decaying kernel it is *semiseparable*, and semiseparable
matrices have $O(N)$ matrix-vector products. The quadratic cost comes from
materializing a matrix that never needed materializing.

**Math.** Mamba-2's state-space duality: a causal linear-attention map equals a
1-semiseparable matrix transform, computable either as a quadratic form
(parallel, good for prefill) or a linear recurrence (sequential, good for
decode). Same math, two schedules — you pick per phase.

**Prize.** $O(N)$ decode with $O(1)$ state instead of an $O(N)$ KV cache. This
is the only pathway here that removes the KV cache rather than shrinking it, so
it is the one with an asymptote rather than a constant factor.

**Known.** Mamba-2 SSD, GLA, DeltaNet, RWKV.

**Open move.** Hybrids keep winning over pure linear models because softmax
attention retains exact recall that a fixed-size state cannot. The open question
is not "linear or softmax" but **what the optimal ratio and placement is as a
function of context length** — and, more sharply, whether the *retrieval* heads
can be identified and kept quadratic while everything else goes linear. Pathway
A's sensitivity probe is a candidate identifier: it already ranks heads by
downstream influence, at the cost of one forward pass per head.

**Tractability: 2** (needs pretraining to test properly).

---

## Pathway 4 — Restructuring the summation, not just the format

**Lever.** FP4 matmul is not limited by 4-bit *storage*. It is limited by the
conditioning of a long sum. A dot product is $\sum_i a_i b_i$, and the relative
error of a naive sum grows with $n$ and with cancellation.

**Math.** Block-scaled formats (MXFP4, NVFP4) share one exponent across a small
block, so error is set by within-block dynamic range. Split-accumulate and
error-feedback (Kahan-style) restructure the summation order to recover
precision *without* touching the storage format — you pay in accumulator
registers, not in memory bandwidth, and memory bandwidth is the binding
constraint at decode.

**Prize.** FP4 matmul at FP8-comparable quality doubles effective FLOPs on
hardware that already ships FP4 units.

**Open move.** Choose the accumulation strategy **per layer from measured
conditioning**, cheaply estimated as $\kappa \approx \sum|a_ib_i| / |\sum a_ib_i|$
on calibration data. Layers with heavy cancellation get the expensive
accumulator; the rest do not. Cheap to test, no retraining.

**Tractability: 4** (needs kernel work, but the decision rule is testable in
numpy first).

---

# Substrate 02 — Probability

## Pathway 5 — Speculative decoding as an optimal coupling problem ⭐

**Lever.** Acceptance rate is not an empirical quantity to be tuned. It is
*exactly* $1 - \mathrm{TV}(p, q)$, the maximal-coupling bound.

→ **Iterated in depth as Pathway B below.** Headline results: the identity
verified to Monte-Carlo precision **[measured]**; drafts with identical
cross-entropy differing by 5.8 acceptance points **[measured]**; training the
draft on TV instead of KL worth +6.5 acceptance points at matched capacity
**[measured]**; block-optimal verification worth 1.14–1.21× more accepted
tokens **[measured]**.

**Tractability: 5.**

---

## Pathway 6 — Trading sequential depth for parallel width

**Lever.** Autoregressive left-to-right is one of $N!$ orderings. Masked
diffusion LMs decode $K$ tokens per step, converting a latency problem into a
throughput problem — which is the trade you want, because GPUs have spare
parallelism at decode and no spare latency.

**Math.** Unmasking a set $S$ in parallel samples from the product of marginals
$\prod_{i \in S} p(x_i \mid x_{\text{obs}})$ instead of the joint. The error is
exactly the multi-information within $S$:
$$D_{\mathrm{KL}}\!\left(p(x_S \mid x_{\text{obs}}) \,\middle\|\, \prod_{i \in S} p(x_i \mid x_{\text{obs}})\right) = \sum_{i \in S} H(x_i \mid x_{\text{obs}}) - H(x_S \mid x_{\text{obs}}).$$
So the safe parallel set is the largest set of *mutually near-independent*
positions. This is an information-theoretic criterion, not a heuristic — note
that it is Substrate 03 doing the work inside a Substrate 02 pathway.

**Prize.** 2–10× fewer forward passes; published dLLM work reports large
throughput gains at parity on constrained tasks.

**Known.** LLaDA, Block Diffusion, EB-Sampler, KLASS, DOS/Attn-Sampler, DAWN,
DAPD.

**Open move.** Every published selector uses a *single-timestep* confidence
proxy (confidence, margin, entropy) as a stand-in for the joint dependency.
Estimating pairwise mutual information directly from attention statistics, and
committing sets under a *certified* TV budget via sub-additivity, is the
principled version — and it makes the speed/quality trade a dial with a
guarantee rather than a tuned threshold.

**Tractability: 3.**

---

## Pathway 7 — Entropy as a free per-token compute allocator

**Lever.** Every decode step already produces a full distribution, hence a free
uncertainty estimate: $H_t = -\sum_x p_t(x)\log p_t(x)$. Most tokens are nearly
deterministic. Spending equal compute on all of them is a choice nobody made
deliberately.

**Math.** Softmax *is* the Boltzmann distribution with $T$ as temperature, so
$H_t$ is a thermodynamic entropy. Low $H_t$ means the distribution is frozen
into one state and cheap approximation suffices; high $H_t$ means it is near a
phase boundary where errors propagate. Allocate depth, expert count, or
speculation length as a monotone function of $H_t$.

**Prize.** Empirically the entropy distribution over tokens is extremely
skewed — most positions carry a fraction of a bit. If 70% of tokens can be
served by a shallow path, that is a 2–3× throughput win with no quality loss on
the tokens that matter.

**Open move.** Entropy is a *marginal* signal and the quantity you actually want
is the token's influence on the rest of the sequence. Those differ exactly at
the interesting positions. Calibrating $H_t$ against measured downstream
divergence — and finding where the proxy fails — is the experiment, and it is
cheap. Connects directly to Pathway 5: the optimal $\gamma$ in B6 depends on
$\alpha$, which is itself token-dependent, so entropy-scheduled $\gamma$ is the
natural composition of the two.

**Tractability: 5.**

---

# Substrate 03 — Information Theory

## Pathway 8 — Rate–distortion allocation for the KV cache ⭐

**Lever.** Bit widths are a budget, and budgets have provably optimal
allocations. Reverse water-filling is the closed form.

→ **Iterated in depth as Pathway A below.** Headline results: downstream
sensitivity is only 0.38-correlated with variance **[measured]**, so
variance-ranked allocators are optimizing a proxy; allocation is worth ~3.5
equivalent uniform bits **[measured]**; the water-filling threshold yields
eviction for free **[measured]**; entropy coding adds ~4.6% at zero distortion
**[measured]**.

**Tractability: 5.**

---

## Pathway 9 — Entropy-coding weights and activations, not just quantizing them

**Lever.** Nominal bit width is an upper bound on cost, not the cost. A 4-bit
index whose empirical entropy is 3.4 bits is being stored 18% too expensively,
and closing that gap changes *nothing* about the model's output.

**Math.** Shannon's source coding theorem: the index stream can be coded at its
empirical entropy $H(\text{idx})$ plus $\varepsilon$. Because quantized weight
and KV indices are strongly non-uniform (concentrated near zero), $H$ sits well
below the nominal width. This is lossless — zero distortion, by construction.

**Prize.** **[measured]** 4.0–4.8% in Pathway A's setup. Reported gains
elsewhere are larger where distributions are more skewed. Modest but *free* and
composable with everything else.

**Open move.** The blocker is decode bandwidth, not compression ratio: an
arithmetic decoder is serial and a GPU is not. The real question is whether an
**ANS/rANS variant with GPU-parallel decode** can hit the memory-bandwidth
budget of a decode step. If yes, this is free; if no, it is worthless. That is a
clean, falsifiable kernel question and it should be answered before anyone
invests in the modelling side.

**Tractability: 3.**

---

## Pathway 10 — Layer and expert importance measured in bits

**Lever.** Pruning and routing decisions are usually made on activation norms.
Norms are not information. The right question is how many bits of the target a
component actually supplies.

**Math.** Information-bottleneck framing: keep component $c$ in proportion to
$I(y; h_c \mid h_{\text{rest}})$ — its *conditional* mutual information with the
output given everything else. Conditioning is the whole point: it charges
nothing for redundant components, which is precisely what norm-based scores get
wrong about residual streams.

**Prize.** Depth pruning at 20–40% with small loss is already reported from
crude criteria; a correct criterion should push further and, more importantly,
tell you *where* the model is redundant.

**Open move.** Conditional MI is hard to estimate in high dimensions. But the
cross-entropy loss is *already* measured in bits, so the ablation delta
$\Delta_c = \mathcal{L}_{\text{without } c} - \mathcal{L}_{\text{full}}$ is a
direct estimate of $I(y; h_c \mid h_{\text{rest}})$ in bits, needing only forward
passes. Nobody frames it this way, and the framing matters: it makes pruning
scores comparable across layers, across models, and against the entropy-coding
budget in Pathway 9.

**Tractability: 4.**

---

# Substrate 04 — Calculus

## Pathway 11 — Curvature-aware quantization, and the gap greedy leaves ⭐

**Lever.** For one linear layer the Hessian of the quantization objective is
closed-form, $H = 2XX^\top$. No backprop, no sampling. Quantization is a
constrained Newton problem.

→ **Iterated in depth as Pathway C below.** Headline results: error feedback
beats RTN by 2.7–3.0× **[measured]**; greedy sits in a strict 1-opt local
minimum whose residual gap requires **three or more simultaneous** coordinate
moves **[measured]** — a mechanism that says the right tool is a trellis
decoder, not a better greedy; Hadamard rotation helps at 2–3 bits and *hurts* at
4 bits **[measured]**; ignoring the output-side metric costs up to 3.6× when it
is ill-conditioned **[measured]**.

**Tractability: 5.**

---

## Pathway 12 — Implicit differentiation through depth-recurrent models

**Lever.** Backprop's memory cost is $O(\text{depth})$ because it stores
activations. At a *fixed point* you do not need them.

**Math.** If $h^* = f_\theta(h^*, x)$, the implicit function theorem gives
$$\frac{\partial h^*}{\partial \theta} = \left(I - \frac{\partial f}{\partial h}\right)^{-1}\frac{\partial f}{\partial \theta}$$
and the vector-Jacobian product needed for training is solvable iteratively.
Memory is $O(1)$ in the number of iterations. You can differentiate through
1000 effective layers while storing one.

**Prize.** Decouples effective depth from memory. A model can spend variable
test-time depth per token — the natural substrate for adaptive-compute
reasoning — without a proportional activation-memory bill.

**Known.** Deep equilibrium models, looped transformers, universal transformers.

**Open move.** DEQs have not scaled to frontier LMs, and the honest reason is
that fixed-point convergence is fragile and the backward solve is
ill-conditioned. The tractable sub-question is whether **Pathway 14's spectral
norm control** makes the fixed-point iteration reliably contractive — spectral
norm bounded below 1 is exactly the contraction condition. That is a real
connection between two substrates and, as far as I can tell, an untested one.

**Tractability: 2.**

---

## Pathway 13 — Local objectives to break the backward lock

**Lever.** Backprop is sequential across layers: no layer updates until the
signal returns. That serialization, not FLOPs, is what forces pipeline bubbles.

**Math.** Replace one global loss with per-block local losses (greedy layerwise,
or a local information-bottleneck target). Blocks then train in parallel with no
backward dependency.

**Prize.** Removes pipeline bubbles and the activation-memory tail; would allow
training across heterogeneous or loosely-coupled hardware.

**Open move.** Local methods consistently lose quality at scale, and the reason
is understood: greedy layers discard information that later layers needed. The
open move is a **hybrid** — local losses for most steps, a global correction on
a schedule — which turns an all-or-nothing question into a tunable ratio and
makes it measurable at small scale.

**Tractability: 2.** **Honest note:** this has the weakest track record of the
fifteen. Included because the payoff is structural, not because the odds are
good.

---

# Substrate 05 — Optimization

## Pathway 14 — Spectral geometry: steepest descent in the right norm

**Lever.** SGD and Adam implicitly measure distance in the Euclidean norm on
flattened parameters. But a weight matrix is an *operator*, and what matters is
how much it changes its output — the spectral norm. Using the wrong norm means
the step size means different things in different layers, which is why learning
rates need re-tuning at every width.

**Math.** Steepest descent under a spectral-norm trust region gives the update
$\Delta W \propto -UV^\top$ where $G = U\Sigma V^\top$ — i.e. *orthogonalize the
gradient*. Muon approximates this with Newton–Schulz iterations. The nuclear
norm on the update is dual to the spectral norm on the constraint; modular
duality extends the construction compositionally through a network.

**Prize.** Reported 30–40% reductions in training tokens/time at small scale,
and width-independent hyperparameters — which matters more than the speedup,
because it means small-scale tuning transfers.

**Known.** Muon (Jordan), Moonlight/Kimi scaling report, modular duality
(Bernstein & Newhouse), NorMuon, µP-consistent Muon.

**Open move.** Two things are unresolved and they are different. (i) Spectral
norm is right for dense 2D weights; the correct dual norm for *attention* as a
trilinear map and for MoE routing is not settled. (ii) A model trained under
spectral control has bounded singular values by construction — which should make
it **easier to quantize**, since bounded spectra bound the incoherence that
Pathway C shows drives rounding error. Nobody has measured whether Muon-trained
models quantize better. That is a cheap, decisive experiment and it is the one I
would run first.

**Tractability: 4.**

---

## Pathway 15 — Serving as a cluster-scale scheduling problem

**Lever.** At scale the binding constraint is not FLOPs. Decode has arithmetic
intensity near 1 — roughly one FLOP per byte moved — so it is memory-bandwidth
bound, and every real speedup either raises arithmetic intensity or moves fewer
bytes.

**Math.** Roofline: $\text{time} = \max(\text{FLOPs}/\pi, \text{bytes}/\beta)$.
Prefill is compute-bound, decode is bandwidth-bound. They are *different
programs* and co-scheduling them on one replica is provably suboptimal — hence
disaggregation. Continuous batching raises intensity by amortizing weight reads
across requests; MQA/GQA/MLA reduce bytes; speculative decoding raises intensity
by verifying $\gamma$ tokens per weight read.

**Prize.** The largest realized multipliers in production are here, not in the
model: continuous batching, paged attention, prefix caching, and
prefill/decode disaggregation together account for order-of-magnitude
throughput-per-dollar gains.

**Open move.** These techniques are all *individually* tuned, but they interact:
speculation length $\gamma$ changes arithmetic intensity, which changes the
optimal batch size, which changes the KV budget, which changes the optimal
bit width from Pathway 8. The open move is to **solve the joint allocation
once** — $(\gamma, \text{batch}, \text{bits}, \text{replica split})$ against one
roofline model with an SLO constraint. B6 **[measured]** shows the $\gamma$ axis
alone is worth 1.4–4.0× and that the optimal $\gamma$ moves with $\alpha$, so
tuning these separately provably leaves value on the table.

**Tractability: 4.**

---

# The three most tractable, iterated

Selected on: closed-form math available, testable without a training run,
and a large prize. Each was iterated until the claims either held up or
visibly failed — **both outcomes are recorded**, because the failures turned out
to be the more useful half.

---

## Pathway A — KV cache as a rate–distortion channel

Code: [`kv_rate_distortion.py`](../experiments/ai-substrates/kv_rate_distortion.py)

### The setup

A synthetic attention layer, 16 heads × 32 dims × 256 context, with
deliberately heterogeneous heads: spectral decay varies, per-head scale spans
1.5 orders of magnitude, tail index varies from Student-$t(2.5)$ to nearly
Gaussian, and some heads carry outlier channels at 6× amplitude. Distortion is
measured as **KL divergence of the output token distribution** against full
precision — the quantity that actually matters — never weight MSE.

### Iteration 1 — sensitivity, not variance

Second-order expansion gives $\mathrm{KL} \approx \tfrac12 s_h D_h$, where $D_h$
is injected per-element MSE and $s_h$ is the Gauss–Newton sensitivity of the
output distribution to head $h$. So $s_h$ is measurable with **one noise probe
per head** — no gradients, no backward pass.

**[measured]** Head variance spans 7828×, sensitivity spans 22906×, and
$\operatorname{corr}(\log \mathrm{var}, \log s) = 0.38$. The two rankings
disagree substantially. Any allocator ranking heads by variance or by norm is
optimizing a weakly-correlated proxy, and the probe that fixes it costs one
forward pass per head.

### Iteration 2 — fitting the distortion exponent: a partial failure

RateQuant (arXiv 2605.06675) reports that the distortion decay rate $\beta$
varies across quantizer designs and that fitting it matters. Tested directly:

**[measured]**

| | $\beta$ range | mean |
|---|---|---|
| textbook high-rate | — | 2.00 |
| per-token min/max | 2.04 – 2.12 | 2.09 |
| per-token clipped at 1st/99th pct | 0.79 – 1.42 | 1.02 |

The **across-design** spread (1.07) dwarfs the **within-design** spread (0.07).
And holding the design fixed, fitting $\beta$ per head bought nothing —
1.00× at both 2 and 3 bits.

So the sub-claim "fit $\beta$ per head" did not replicate here. The correct
reading is that $\beta$ is a property of the *quantizer design*, and fitting it
only pays if the allocator is allowed to **choose the design per head**. Doing
that jointly over (rate, design) via the lower envelope: **[measured]**
KL $2.446\times10^{-4}$ versus $3.117\times10^{-4}$ all-min/max — a 1.27× gain
that only exists because $\beta$ was fitted.

### Iteration 3 — a failure worth recording

The first attempt at the joint (rate, design) allocator was **worse** than doing
nothing: $2.772\times10^{-3}$ against $2.702\times10^{-4}$, a 10× regression.

Cause: the curves were fitted at 3/5/7 bits and the allocator was operating at
1–2 bits. Extrapolating a clipping-limited design below its fitted range makes
it look great, because the clipping error floor has not yet appeared. Refitting
at 2/3/4 bits flipped the design choice back and the envelope won.

**[measured]**

| probe bits | mixed KL | all-min/max KL | verdict |
|---|---|---|---|
| (3, 5, 7) | 2.772e-03 | 2.702e-04 | **mixed loses** |
| (2, 3, 4) | 2.446e-04 | 3.117e-04 | mixed wins |

This is the single easiest way to get a rate-distortion allocator wrong, it is
invisible in aggregate metrics, and it produces a *confidently wrong*
allocation rather than a noisy one.

### Results

**[measured]** Discrete reverse water-filling versus uniform, same budget:

| budget | uniform KL | allocated KL | equivalent uniform width | bits saved |
|---|---|---|---|---|
| 2.0 | 6.86e-02 | 3.12e-04 | 5.52 | **3.52** |
| 2.5 | 6.86e-02 | 1.35e-04 | 5.91 | **3.41** |
| 3.0 | 7.85e-03 | 7.07e-05 | 6.50 | **3.50** |
| 4.0 | 1.44e-03 | 1.68e-05 | 7.69 | **3.69** |

Eviction falls out for free: the continuous dual pins 7 of 16 heads at zero
bits, and the discrete greedy independently drops the same set. Quantization and
eviction are one Lagrangian, not two heuristics — and this is why they should
never be tuned separately.

Entropy coding the indices adds 4.0–4.8% at exactly zero distortion.

**Headline.** At a 2.0-bit budget: **1.91 effective bits/element**, output KL
$2.45\times10^{-4}$. Uniform int4 costs 4.00 bits for KL $1.44\times10^{-3}$.
That is **8.4× smaller than fp16, 2.1× smaller than int4, at 5.9× lower KL**.

Contributions ranked: sensitivity-weighted allocation (dominant), joint design
choice (1.27×), entropy coding (~4%, free), fitting $\beta$ within one design
(nothing).

### What would falsify this

The sensitivity probe assumes the second-order expansion holds at the
perturbation magnitudes real quantization produces. At 2 bits that is not
obvious. Measuring probe-predicted KL against actual KL across bit widths on a
real model is the check — and if it fails, the fix is to fit $s_h$ at the
operating point, which is the same lesson as iteration 3.

---

## Pathway B — Speculative decoding as an optimal coupling

Code: [`speculative_coupling.py`](../experiments/ai-substrates/speculative_coupling.py)

### Iteration 1 — the identity

Speculative decoding is not "guess and check". It constructs a **maximal
coupling** of draft $q$ and target $p$: a joint law with the right marginals
that maximizes $P(X = Y)$. The acceptance rate is therefore
$$\alpha = \sum_x \min(p(x), q(x)) = 1 - \mathrm{TV}(p, q).$$

**[measured]**, 4M samples per row:

| draft | predicted $\alpha$ | measured $\alpha$ | error | TV(output, $p$) |
|---|---|---|---|---|
| sharp ($T{=}0.6$) | 0.598665 | 0.598831 | 1.7e-04 | 1.3e-03 |
| matched | 0.906844 | 0.906578 | 2.7e-04 | 1.5e-03 |
| flat ($T{=}2.5$) | 0.656055 | 0.655990 | 6.5e-05 | 9.3e-04 |

Both halves matter. Acceptance hits the coupling bound, so **the standard
algorithm is optimal for one draft** — no engineering beats it without changing
the problem. And the output law is $p$ *exactly*, so the speedup is free rather
than a quality trade.

### Iteration 2 — TV is the only thing that matters, so stop training on KL

If $\alpha = 1 - \mathrm{TV}$, then cross-entropy is the wrong scoreboard.
Constructing two drafts at **identical** $\mathrm{KL}(p\|q) = 0.43706$:

**[measured]**

| draft | KL | TV | acceptance |
|---|---|---|---|
| error spread over vocabulary | 0.43706 | 0.36568 | 0.634 |
| error concentrated on top tokens | 0.43706 | 0.42405 | 0.576 |

**5.8 acceptance points** apart at matched KL. Cross-entropy can be gamed;
TV cannot.

So train the draft on TV. Same initialisation, same data, same steps, same
capacity — only the objective differs. TV is $\tfrac12\lVert p - q\rVert_1$, with
a subgradient a.e., so plain gradient descent works:

**[measured]**

| objective | mean KL | mean TV | acceptance | tokens/step ($\gamma{=}4$) |
|---|---|---|---|---|
| KL | 1.920 | 0.744 | 0.256 | 1.343 |
| **TV** | 2.265 | 0.679 | **0.321** | **1.468** |

**+6.5 acceptance points**, and note the TV-trained draft has *worse* KL. It is
supposed to. The KL-trained draft spends capacity calibrating a tail that
acceptance does not pay for.

### Iteration 3 — verify blocks, not tokens; and width is a trap

**Block verification.** Token-by-token rejection chains per-step conditional
overlaps. Any valid scheme is bounded by
$P(\text{first } l \text{ accepted}) \le 1 - \mathrm{TV}(p_{1:l}, q_{1:l})$ — the
TV of the *joint* block laws — and that bound is attainable (Sun et al. 2024).
Jensen puts joint TV below the product of conditionals, so block verification
strictly dominates. Computed exactly by enumeration:

**[measured]**

| $V$ | $L$ | token-level | block bound | gain | wall-clock |
|---|---|---|---|---|---|
| 4 | 3 | 1.563 | 1.776 | 1.136× | 1.083× |
| 6 | 3 | 1.017 | 1.226 | 1.206× | 1.104× |
| 4 | 4 | 1.741 | 2.109 | 1.212× | 1.134× |
| 8 | 3 | 1.131 | 1.324 | 1.170× | 1.090× |

Same draft, same target, same compute. The difference is only *which coupling
you construct*. Token-greedy is locally optimal and globally not.
(*Caveat: the bound is computed exactly here; its attainability is taken from
the literature — the attaining coupling is not constructed.*)

**Multi-draft is a trap.** The commonly cited bound
$\sum_x \min(p(x), 1-(1-q(x))^k)$ goes **vacuous at $k=4$** in this setup —
it equals 1.0 and says nothing. Bracketing it with an achievable scheme
(recursive rejection sampling, closed form) gives the real curve:

**[measured]**

| $k$ | achievable | upper bound | marginal | acceptance/FLOP |
|---|---|---|---|---|
| 1 | 0.649 | 0.649 | 0.649 | 0.649 |
| 2 | 0.733 | 0.819 | 0.084 | 0.367 |
| 4 | 0.814 | **1.000** | 0.081 | 0.204 |
| 8 | 0.893 | 1.000 | 0.079 | 0.112 |
| 32 | 0.996 | 1.000 | 0.032 | 0.031 |

Acceptance-per-FLOP falls monotonically. **Width is not where the order of
magnitude is.** Lower TV and better coupling are.

### The wall-clock model

$$\text{speedup}(\alpha, \gamma, c) = \frac{1}{1+\gamma c}\cdot\frac{1-\alpha^{\gamma+1}}{1-\alpha}$$

**[measured]** at $c = 0.12$:

| $\alpha$ | $\gamma{=}1$ | 2 | 4 | 8 | 16 | best |
|---|---|---|---|---|---|---|
| 0.50 | 1.34 | **1.41** | 1.31 | 1.02 | 0.68 | $\gamma{=}2$ |
| 0.70 | 1.52 | 1.77 | **1.87** | 1.63 | 1.14 | $\gamma{=}4$ |
| 0.90 | 1.70 | 2.19 | 2.77 | **3.13** | 2.85 | $\gamma{=}8$ |
| 0.95 | 1.74 | 2.30 | 3.06 | 3.77 | **3.99** | $\gamma{=}16$ |

Two consequences. The optimal $\gamma$ **moves with** $\alpha$, so a better
draft must also be run deeper — tuning $\gamma$ once against a stale $\alpha$
leaves speedup on the table. And $\partial(\text{speedup})/\partial\alpha$ is
steep: $0.7 \to 0.9$ beats any amount of extra draft width.

### The composite argument

TV-trained draft (+6.5 pts) → block verification (1.14–1.21×) →
$\gamma$ retuned to the new $\alpha$. These multiply, and none of them requires
touching the target model or accepting any quality loss. That is the strongest
near-term inference-speed case in this dossier.

---

## Pathway C — Curvature-aware quantization

Code: [`curvature_quantization.py`](../experiments/ai-substrates/curvature_quantization.py)

### The setup

For one layer, damage from a weight perturbation is
$$\mathcal{L}(\Delta W) = \lVert \Delta W X\rVert_F^2 = \operatorname{tr}(\Delta W\,(XX^\top)\,\Delta W^\top), \qquad H = 2XX^\top.$$
The Hessian is closed-form. This is Substrate 04 with no backward pass anywhere.

Layers are kept small enough (8×7) to compute the **brute-force optimal**
rounding by enumeration — so every method is measured against ground truth
rather than against another heuristic.

### Iteration 1 — error feedback is a Newton step

Quantize coordinate $j$, then push the error into the not-yet-quantized
coordinates along the direction $H^{-1}$ prescribes:
$\Delta W[:, j{+}1{:}] \mathrel{-}= (e_j / R_{jj})\,R_{j, j+1:}$ with
$R$ the Cholesky factor of $H^{-1}$. That is exactly the Newton correction
restricted to the free coordinates.

**[measured]**

| bits | RTN | GPTQ | +act-order | OPTIMAL | RTN/opt | GPTQ/opt |
|---|---|---|---|---|---|---|
| 2 | 1.305e+06 | 5.475e+05 | 5.437e+05 | 4.845e+05 | 2.69× | 1.12× |
| 3 | 2.471e+05 | 1.055e+05 | 8.449e+04 | 8.213e+04 | 3.01× | 1.03× |

Curvature is worth 2.7–3.0× over round-to-nearest, and act-order is a real
second win. Both free.

### Iteration 2 — the local-search failure, which is the interesting result

Greedy leaves 12% at 2 bits. The obvious fix is local repair: re-round single
coordinates, accepting only strict decreases. It **found nothing** — zero
accepted moves at either bit width. Greedy error feedback lands in a *strict
1-opt local minimum*.

Escalating the search order:

**[measured]**

| bits | greedy | 1-opt | 2-opt | 3-opt | OPTIMAL | gap closed |
|---|---|---|---|---|---|---|
| 2 | 5.437e+05 | 5.437e+05 | 5.025e+05 | **4.845e+05** | 4.845e+05 | **100.0%** |
| 3 | 8.449e+04 | 8.449e+04 | 8.400e+04 | 8.400e+04 | 8.213e+04 | 20.6% |

Hamming distance from greedy to optimal, per output row:
2-bit `[0,2,5,0,0,0,0,0]`, 3-bit `[0,0,0,3,0,0,4,4]`.

Read carefully, this says something specific. The gap is made **entirely of
correlated moves** — coordinate triples whose errors cancel through $H$'s
off-diagonal, where every individual sub-move looks like a loss. At 2 bits the
required order is 3 and 3-opt closes the gap completely. At 3 bits the required
order is 4+ and 3-opt closes only a fifth. **The required correlation order
rises as the grid gets finer.** And the gap concentrates in two or three output
rows rather than spreading out.

This is a mechanism, and it names the right tool. Not a better greedy, and not
local repair — the required move order outruns any fixed-$k$ search. It calls
for a decoder that searches correlated configurations *by construction*: a
lattice or trellis quantizer with Viterbi decoding over whitened weights. That
is a measured justification for trellis-coded quantization (QTIP, QuIP#) rather
than an appeal to results, and it comes with a **falsifiable prediction** — the
advantage over greedy should be largest at the lowest bit width, where the
needed correlation order is small enough for a bounded-memory trellis to
capture.

### Iteration 3 — two results that came out against the hypothesis

**Rotation is not unconditionally good.** Since $WX = (WQ)(Q^\top X)$ for
orthogonal $Q$, a Hadamard rotation changes nothing about the layer's function
but makes $H$ incoherent. Incoherence $\mu$ (how much the top eigenvector
concentrates on one axis) drops 30.19 → 2.14 every time.

**[measured]**

| bits | $\mu$ before | $\mu$ after | GPTQ plain | GPTQ rotated | gain |
|---|---|---|---|---|---|
| 2 | 30.19 | 2.14 | 1.075e+07 | 7.872e+06 | **1.37×** |
| 3 | 30.19 | 2.14 | 1.086e+06 | 8.980e+05 | **1.21×** |
| 4 | 30.19 | 2.14 | 1.387e+05 | 1.937e+05 | **0.72×** |

At 4 bits rotation makes things **worse**. Two effects fight: incoherence
lowers the coupling penalty, while mixing channels widens each weight row's
dynamic range and coarsens the grid step. The first only dominates when the grid
is badly overloaded. **Rotation is a low-bit tool**, and shipping it
unconditionally costs accuracy at int4.

**The two-sided objective matters only when $G$ is ill-conditioned.** What
matters downstream is $\operatorname{tr}(G\,\Delta W\,H\,\Delta W^\top)$ with an
output-side metric $G$; the Hessian is the Kronecker product $G \otimes H$.
Every deployed method optimizes the $G = I$ slice. Brute-forcing both:

**[measured]**

| cond($G$) | one-sided (scored two-sided) | two-sided | inflation | diag($G$) approx | same rounding? |
|---|---|---|---|---|---|
| 1 | 1.640e+04 | 1.640e+04 | 1.000× | 1.000× | yes |
| 10 | 1.005e+04 | 1.005e+04 | 1.000× | 1.000× | yes |
| 100 | 6.553e+03 | 3.212e+03 | **2.040×** | 2.040× | NO |
| 1000 | 5.311e+03 | 1.479e+03 | **3.592×** | 3.592× | NO |

At cond($G$) = 1 the objectives coincide, as they must — a good sanity check on
the harness. The gap opens only as $G$ becomes ill-conditioned, reaching 3.6×.
And `diag(G)` — the cheap fix a practitioner reaches for — recovers **exactly
nothing**, tracking the one-sided answer at every conditioning. A diagonal
metric can express cheap *channels* but not a cheap *direction* in output space,
and it is directions that the two-sided optimum exploits.

So the prize is real but **conditional**, and the deciding measurement is one
this harness cannot make: how ill-conditioned and how non-diagonal real
downstream Fisher blocks actually are. Measuring cond($G$) per layer on a real
model is a cheap experiment that would settle whether Kronecker-factored
rounding (KronQ, arXiv 2607.07964) is worth its complexity. **That is the next
thing to run, and it is a measurement, not a method.**

---

# Cross-substrate compositions

The pathways are not independent, and the interactions are where the
order-of-magnitude claims actually live:

1. **Quantization × coupling.** A quantized draft model has higher TV, so
   Pathway 11's bit allocation should be run against Pathway 5's *acceptance*
   objective, not against perplexity. Nobody does this — draft models are
   quantized with the same recipe as target models, optimizing the wrong loss.

2. **Sensitivity probe reuse.** Pathway A's per-head probe, Pathway 10's
   bits-of-information pruning score, and Pathway 3's retrieval-head identifier
   are the same measurement read three ways. Compute once, use three times.

3. **Spectral training → cheap quantization.** Pathway 14 bounds singular values
   by construction; Pathway C shows spectral concentration is what drives
   rounding error. Muon-trained models should quantize better. **Untested, and
   the cheapest high-value experiment in this document.**

4. **Entropy → speculation depth.** Pathway 7's free per-token entropy predicts
   local $\alpha$; B6 shows optimal $\gamma$ depends on $\alpha$. Entropy-scheduled
   $\gamma$ follows immediately, and static $\gamma$ is provably leaving value behind.

5. **One joint roofline.** Pathway 15's point: $(\gamma, \text{batch},
   \text{bits}, \text{split})$ are coupled through one bandwidth constraint.
   Solving them separately is provably suboptimal.

---

# Honest summary

**What is measured here:** every table marked **[measured]** is reproducible from
the three scripts in `experiments/ai-substrates/`. The math — maximal coupling,
reverse water-filling, the layerwise Hessian, the Kronecker structure — is
exact, not approximate.

**What is synthetic:** all three prototypes run on constructed data with
realistic structure (heavy tails, outlier channels, ill-conditioned activation
covariance, heterogeneous heads), not on a real model. The *identities* transfer
because they are theorems. The *magnitudes* do not transfer, and should be read
as showing which mechanism dominates, not how big the win is on Llama.

**What came out against the hypothesis, and was kept:**
- Fitting $\beta$ per head bought nothing within a fixed quantizer design (A2).
- The first joint (rate, design) allocator was 10× *worse* than doing nothing,
  from fitting outside the operating range (A2b).
- Single-coordinate local repair of GPTQ finds exactly zero improving moves (C3).
- Hadamard rotation **hurts** at 4 bits (C2).
- The multi-draft upper bound is vacuous by $k = 4$ (B5).
- `diag(G)` recovers none of the two-sided gap (C4).

Four of those six turned into the most useful findings in the document. The
operating-range failure in A2b in particular is the kind of bug that ships
silently — it produces a confidently wrong allocation, not a noisy one.

**The three experiments I would run next**, in order of cost-to-information:
1. cond($G$) per layer on a real model — decides Pathway C's iteration 3 (hours).
2. Do Muon-trained models quantize better? — decides composition 3 (one small
   training run).
3. GPU-parallel rANS decode bandwidth — decides Pathway 9 entirely (kernel work).

---

## Sources

- [RateQuant: Optimal Mixed-Precision KV Cache Quantization via Rate-Distortion Theory](https://arxiv.org/abs/2605.06675)
- [RDKV: Rate-Distortion Bit Allocation for Joint Eviction and Quantization of the KV Cache](https://arxiv.org/html/2605.08317v1)
- [RoPE-Aware Bit Allocation for KV-Cache Quantization](https://arxiv.org/html/2606.24033)
- [SpecTr: Fast Speculative Decoding via Optimal Transport](https://proceedings.neurips.cc/paper_files/paper/2023/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)
- [SpecTr-GBV: Multi-Draft Block Verification](https://arxiv.org/pdf/2604.25925)
- [LK Losses: Direct Acceptance Rate Optimization for Speculative Decoding](https://arxiv.org/html/2602.23881v1)
- [Variational Speculative Decoding](https://arxiv.org/html/2602.05774v1)
- [Accelerating Speculative Diffusions via Block Verification](https://arxiv.org/pdf/2606.13426)
- [KronQ: LLM Quantization via Kronecker-Factored Hessian](https://arxiv.org/pdf/2607.07964)
- [QTIP: Quantization with Trellises and Incoherence Processing](https://proceedings.neurips.cc/paper_files/paper/2024/file/6de2e84b8da47bb2eb5e2ac96c63d2b0-Paper-Conference.pdf)
- [QuIP: 2-Bit Quantization of Large Language Models With Guarantees](https://pmc.ncbi.nlm.nih.gov/articles/PMC11482740/)
- [SEPTQ: A Simple and Effective Post-Training Quantization Paradigm](https://arxiv.org/html/2604.10091v1)
- [Monarch: Expressive Structured Matrices for Efficient and Accurate Training](https://arxiv.org/pdf/2204.00595)
- [Compute Better Spent: Replacing Dense Layers with Structured Matrices](https://proceedings.mlr.press/v235/qiu24f.html)
- [BLAST: Block-Level Adaptive Structured Matrices](https://arxiv.org/html/2410.21262)
- [Muon: An optimizer for hidden layers in neural networks](https://kellerjordan.github.io/posts/muon/)
- [Muon is Scalable for LLM Training](https://arxiv.org/pdf/2502.16982)
- [Spectral Scaling Laws of Muon](https://arxiv.org/html/2606.04058)
- [Towards a Principled Muon under µP](https://arxiv.org/pdf/2601.01306)
- [Optimal Scaling Needs Optimal Norm](https://arxiv.org/pdf/2510.03871)
- [Dependency-Guided Parallel Decoding in Discrete Diffusion Language Models](https://arxiv.org/html/2604.02560)
- [Accelerating Diffusion LLMs via Adaptive Parallel Decoding](https://starai.cs.ucla.edu/papers/IsraelNeurIPS25.pdf)
- [Attention-Discounted Adaptive Sampler for Masked Diffusion Language Models](https://arxiv.org/pdf/2606.10829)
