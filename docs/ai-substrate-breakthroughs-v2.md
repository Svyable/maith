# Substrate Pathways v2 — Tested on a Real Model

> v1 ([`ai-substrate-breakthroughs.md`](./ai-substrate-breakthroughs.md)) mapped
> fifteen pathways and measured three of them on synthetic matrices. It ended by
> naming the experiments that would decide whether the claims were real.
>
> This is that follow-up. Every synthetic caveat in v1 is now either **confirmed
> on a trained model**, **falsified**, or **shown not to transfer**. Two of v1's
> headline claims did not survive, one of them reversing sign.
>
> Code: [`experiments/ai-substrates/`](../experiments/ai-substrates/).
> **[measured]** means reproducible from those scripts.

---

## What changed methodologically

HuggingFace is blocked by this environment's network policy, so no pretrained
checkpoint was available. Instead the harness
([`real_model.py`](../experiments/ai-substrates/real_model.py)) **trains
transformers from scratch** on a real corpus harvested from this repository's own
technical prose:

| | |
|---|---|
| Corpus | 355k words / 2.46M chars of human-written technical English |
| Tokenizer | word-level, vocab 8192, **UNK rate 0.03%** |
| Target model | 3.37M params, d=192, 6 heads, 4 layers, ctx 128 |
| Draft model | 0.9M params, d=96, 4 heads, 2 layers |
| Training | 1500 steps AdamW; val loss **5.129** (random baseline: ln 8192 = 9.01) |
| Also trained | Muon variant, for the cross-substrate test |

This is not a frontier model, and the document says so wherever it matters. But
"learned weights with real activation covariance" is a categorically different
regime from "random Wishart draws," and it is enough to kill or confirm the
mechanisms v1 could only assert.

---

# The headline: v1's #1 open question, answered

v1 ended with *"the three experiments I would run next, in order of
cost-to-information"*, and ranked first:

> cond(G) per layer on a real model — decides Pathway C's iteration 3 (hours).

v1 had established by brute force that ignoring the output-side metric $G$ in
$\operatorname{tr}(G\,\Delta W\,H\,\Delta W^\top)$ is **free when $G$ is
well-conditioned** and costs up to **3.6× when cond(G) = 1000** — and that a
`diag(G)` approximation recovers *none* of it. So the entire question of whether
Kronecker-factored rounding deserves its complexity reduced to two measurable
statistics. Both are now measured
([`real_cond_g.py`](../experiments/ai-substrates/real_cond_g.py)).

$G$ is the Gauss-Newton block of the real training loss with respect to each
layer's output, accumulated over real tokens by backpropagation:
$G = \mathbb{E}[(\partial L/\partial y)(\partial L/\partial y)^\top]$.

**[measured]** across all 24 linear layers:

| statistic | median | min | max |
|---|---|---|---|
| cond₉₉(G) | **2.81e3** | 1.46e2 | 9.77e5 |
| off-diagonal mass | **0.880** | 0.702 | 0.963 |
| effective rank / d_out | **0.094** | — | — |
| headroom proxy | 1.65× | 1.39× | 2.74× |

| decision threshold | layers meeting it |
|---|---|
| cond₉₉(G) > 100 | **24 / 24** |
| off-diagonal mass > 0.2 | **24 / 24** |
| **both** | **24 / 24** |

**Verdict: the prize is real and it is everywhere.** Every layer is both
ill-conditioned and strongly non-diagonal, by wide margins — the median layer is
28× past the conditioning threshold where v1 measured a 2× penalty, and 88% of
its metric's energy is off-diagonal where a per-row scale cannot reach it.

The effective-rank number is the one that surprised me: **only ~9% of output
directions carry the metric.** Roughly nine-tenths of output-space directions are
nearly free to damage. Every deployed quantizer optimises the $G = I$ slice and
is therefore spending its bit budget as if all directions cost the same.

*Caveats, stated rather than buried:* $G$ is estimated from ~12k token positions;
raw cond(G) reaches 3.4e9 in places, which is numerical, hence the reported
1st-percentile-floored cond₉₉. Low effective rank is partly a known property of
gradient outer products. The 3.4M-parameter scale is a real data point, not a
universal constant.

---

# Pathway C revisited: one confirmation, two falsifications

## C-real-1 — Curvature-aware rounding: **CONFIRMED, and stronger**

**[measured]** on real weights and real activation Hessians, error-feedback
rounding vs round-to-nearest:

| | v1 (synthetic) | v2 (real model) |
|---|---|---|
| curvature gain over RTN | 2.7–3.0× | **median 2.79×**, range 2.07–**17.05×** |

The median lands almost exactly on v1's synthetic claim. The tail is new: the
worst-conditioned layer (`block0.mlp.fc`, cond(H) = 1.1e5) gains **17×**. This is
the most robust finding in either document — the Hessian is closed-form
($H = 2XX^\top$), needs no gradients, and pays everywhere.

## C-real-2 — The trellis prediction: **FALSIFIED**

v1 measured that greedy rounding sits in a strict 1-opt local minimum whose
residual gap needs 3+ simultaneous coordinate moves, and that the required order
*rises* with bit width. From that it predicted:

> A bounded-memory trellis decoder should beat greedy by the largest margin at
> the **lowest** bit width, and the advantage should shrink as bit width rises.

To test it I first had to build the decoder
([`trellis_quantizer.py`](../experiments/ai-substrates/trellis_quantizer.py)).

**A design that failed first, kept because it is the mistake the framing
invites.** The obvious construction is a *banded* Viterbi over
$\lVert Rd \rVert^2$, truncating each row of the Cholesky factor to a bandwidth
$m$. It **loses badly to greedy** — 1.6e7 vs 1.1e7 at 2 bits with $m$=3 of 12
columns. $R$ is dense, so truncating the objective discards precisely the
long-range interaction that error feedback already handles exactly. *Solving a
mutilated problem optimally is worse than solving the real problem greedily.*

**The design that works: truncate the search, not the objective.** Ordering
coordinates last-to-first makes each term of $\lVert Rd\rVert^2$ close exactly
when its coordinate is decided, so carrying the accumulator
$a[i'] = \sum_{j>i} R[i',j]\,d[j]$ makes the exact objective incremental. Beam
search over that is a strict generalisation of GPTQ: beam=1 is greedy error
feedback, wider beams search correlated configurations.

**[measured]** validation against exhaustive enumeration — beam=64 reproduces the
exact integer least-squares optimum at both 2 and 3 bits. The DP is correct; the
beam is the only approximation.

Then the prediction:

**[measured]** 32×16 layer, cond(H) = 410:

| bits | greedy | beam=4 | beam=16 | beam=64 | gain |
|---|---|---|---|---|---|
| 2 | 1.158e+07 | 9.571e+06 | 9.097e+06 | 8.635e+06 | 1.342× |
| 3 | 1.231e+06 | 1.239e+06 | 1.060e+06 | 9.686e+05 | 1.271× |
| 4 | 2.387e+05 | 2.108e+05 | 1.819e+05 | 1.784e+05 | 1.338× |

**Flat.** Not largest at 2 bits — essentially bit-width independent. Across six
configurations of conditioning and width the prediction held in only **4/6**, and
failed exactly where conditioning was low.

**Why the reasoning was wrong, specifically:** it assumed bounded memory means a
fixed correlation *order*. That is true of a banded trellis state but false of a
beam, which reallocates its search wherever the coupling happens to be. The
mechanism was right; the inference from mechanism to method was not.

## C-real-3 — The replacement claim: **REVERSED SIGN out of sample**

The failure pointed at an alternative: conditioning, not bit width, should
control the gain, since cond(H) is what couples coordinates through the
off-diagonal. On synthetic layers this looked excellent — **[measured]**
corr(log₁₀ cond(H), gain) = **+0.958**, perfectly monotone across cond(H) from
10 to 20000.

Then I tested it on the real model's layers.

**[measured]** real layers, beam vs greedy:

| ordering | median gain | range | corr(log₁₀ cond(H), gain) |
|---|---|---|---|
| natural | 1.044× | 0.773 – 1.274× | **−0.201** |
| + act-order | 0.955× | 0.468 – 1.094× | **−0.907** |

The correlation **reverses sign**. On real layers, high cond(H) is where the beam
does *worst* relative to greedy — and act-order, which helps GPTQ substantially,
actively *hurts* the beam (0.468× on the worst-conditioned layer).

So both v1's prediction and its replacement fail out of sample. The replacement
was more strongly supported in-sample (+0.958, monotone) and failed harder.
That is the ordinary shape of overfitting a mechanism story to synthetic data,
and it is worth recording plainly.

## C-real-4 — Does correlated search survive realistic width?

The small-width studies used 12–16 columns so brute force stayed reachable. Real
layers are hundreds of columns wide, and any practical decoder works in blocks.

**[measured]** 64×384 layer, 2 bits, cond(H) = 641. GPTQ with full-width error
feedback = 1.220e7:

| block | beam=1 | beam=16 | gain | vs GPTQ |
|---|---|---|---|---|
| 24 | 1.261e+07 | 1.218e+07 | 1.036× | 1.002× |
| 48 | 1.305e+07 | 1.208e+07 | 1.081× | 1.010× |
| 96 | 1.317e+07 | 1.194e+07 | 1.103× | 1.022× |
| 192 | 1.330e+07 | 1.145e+07 | 1.162× | 1.065× |
| 384 (full) | 1.223e+07 | 1.044e+07 | 1.171× | **1.168×** |

The gain grows monotonically with block size and does not plateau until full
width: **the correlated moves are long-range**, so any block-wise decoder throws
away most of the prize. And 1.17× at 384 columns is far below the 1.3–2.7× seen
at 12–16 columns, because wide error feedback has more room to spread error and
greedy therefore does relatively better.

**Honest practical claim, much weaker than the small-width studies suggest:**
correlated search is real, needs full-width search to collect, costs ~4× GPTQ's
time, and buys ~1.17× on layer error — with the caveat above that on real layers
the median is 1.04× and the worst-conditioned layers get *worse*.

---

# Pathway B revisited: the identity holds, and a composition works

## B-real-1 — The coupling identity on a real model pair

**[measured]** 3072 real token positions, target and draft both trained on the
same corpus:

| | |
|---|---|
| mean predicted acceptance $\sum_x \min(p,q)$ | 0.5917 |
| mean empirical acceptance | 0.5931 |
| \|predicted − empirical\| | **1.32e-03** (MC s.e. 2.3e-03) |

Exactness of the emitted law needed its own properly-powered check — with 64
draws over an 8192-token vocabulary, empirical TV is pure sampling noise. At
200,000 draws per position:

| position | TV(emitted, p) | TV(q, p) |
|---|---|---|
| 0 | 0.0318 | 0.4327 |
| 1 | 0.0108 | 0.4502 |
| 4 | 0.0232 | 0.6030 |

Every proposal came from $q$, whose own bias from $p$ is 0.39–0.60, yet the
emitted law sits at 0.01–0.035 from $p$ — sampling noise. **The speedup is free,
not a quality trade.**

## B-real-2 — Acceptance is heterogeneous, so one γ is provably wrong

**[measured]** per-token acceptance distribution:

| p1 | p10 | p25 | p50 | p75 | p90 | p99 |
|---|---|---|---|---|---|---|
| 0.204 | 0.381 | 0.479 | 0.591 | 0.719 | 0.798 | 0.894 |

mean 0.592, std 0.160, IQR 0.240. The best single γ (=4) gives mean speedup
1.618×; a per-token oracle γ gives 1.689× — so **1.044× of headroom** exists
purely from adapting γ.

## B-real-3 — Pathway 7 × Pathway 5: **the composition works**

v1 proposed scheduling γ by predictive entropy, since entropy is free at every
decode step. Never tested. **[measured]**:

| signal | corr with acceptance | available at decode? |
|---|---|---|
| target entropy H(p) | +0.512 | no — needs the target |
| **draft entropy H(q)** | **+0.650** | **yes, free** |
| draft top-1 probability | +0.406 | yes, free |
| argmax agreement | +0.427 | no — needs the target |

The *free* signal is the best predictor — better than target entropy, which
costs a target forward pass and so defeats the purpose.

Bucketing tokens by draft entropy into 5 buckets, fitting a γ per bucket on half
the data and scoring on the held-out half:

| policy | speedup (held-out) |
|---|---|
| single γ (=4) | 1.6151× |
| **entropy-scheduled γ** | **1.6521×** |
| per-token oracle | 1.6871× |

**51.3% of the adaptive-γ headroom, captured by a signal that costs nothing**,
generalising to held-out tokens. This is v2's cleanest positive result and the
only cross-substrate composition of the five in v1 that has now been tested and
worked.

## B-real-4 — The joint serving allocation, honestly baselined

v1's Pathway 15 argued $(\gamma, \text{batch}, \text{bits})$ are coupled through
one bandwidth constraint and should be solved once. Solving it on an H100-class
roofline with the real model geometry and the real measured $\alpha = 0.5917$,
under an excess-loss SLO of 0.05, gives bits=3, batch=512, γ=16.

The gain depends entirely on the baseline, so **[measured]** against three of
increasing strength:

| baseline | config | tok/s | joint gain |
|---|---|---|---|
| fp16 KV, γ from cost model | b16/n512/g2 | 5.165e+05 | 6.70× |
| int8 KV (realistic default) | b8/n512/g2 | 1.032e+06 | 3.35× |
| **int4 KV, batch+γ each tuned** | b4/n512/g16 | 2.597e+06 | **1.33×** |

**The honest number is 1.33×, not 6.70×.** Most of what a naive comparison
credits to joint optimisation is really just "compress the KV cache," which is
already standard practice. The genuine coupling effect — that optimal γ depends
on bit width through the batch size that fits in bandwidth — is worth 1.33×.

---

# The end-to-end test: what actually earns its place

Layer error is a proxy. The decisive question is whether any of this moves
**held-out validation loss on real text**, against the baseline a production
pipeline actually ships: uniform-bit GPTQ with act-order.

[`real_pipeline.py`](../experiments/ai-substrates/real_pipeline.py) composes the
surviving ideas into one system — measure $H$, cond(H) and sensitivity per layer
(forward passes only, no gradients), allocate bits by water-filling, then triage
the expensive search by cond(H) — and ablates each ingredient.

**[measured]** all rows at equal average bits per weight; "excess" is loss above
fp32; "vs baseline" is the factor by which excess loss is reduced:

| avg bits | method | val loss | excess | vs baseline |
|---|---|---|---|---|
| 2.5 | uniform 2b RTN | 6.7373 | 1.6081 | 0.08× |
| 2.5 | uniform 2b GPTQ+act-order **[BASELINE]** | 5.2569 | 0.1277 | 1.00× |
| 2.5 | **+ rate-distortion allocation** | **5.1680** | **0.0388** | **3.29×** |
| 2.5 | + allocation + cond(H)-triaged beam | 5.1708 | 0.0415 | 3.08× |
| 2.5 | + allocation + beam everywhere | 5.1662 | 0.0370 | 3.45× |
| 3.0 | uniform 3b GPTQ+act-order **[BASELINE]** | 5.1333 | 0.0041 | 1.00× |
| 3.0 | + rate-distortion allocation | 5.1333 | 0.0041 | 1.00× |
| 3.0 | + allocation + cond(H)-triaged beam | 5.1371 | 0.0079 | 0.52× |
| 3.0 | + allocation + beam everywhere | 5.1376 | 0.0084 | 0.49× |

Three things fall out, and only the first is good news.

**1. Rate-distortion allocation is the real win: 3.29× less excess loss at 2.5
bits/weight**, end-to-end, on held-out text, against the production baseline. It
costs one noise probe per layer and a closed-form water-filling solve. At 2.5
bits the allocator chose `attn.q`=2, `attn.k`=2 and everything else 3 — it
identified the query and key projections as the least sensitive, which no uniform
scheme can express.

**2. The beam search does not earn its place.** At 2.5 bits it moves 3.29× →
3.45× at best, while costing roughly 4× GPTQ's time — and at 3.0 bits it makes
things actively *worse* (0.52×, 0.49×). This is the end-to-end confirmation of
the sign reversal above.

**3. The cond(H) triage was actively counterproductive** — 3.08× versus 3.29×
for no beam at all. It is worse than either extreme, because it spent the search
budget precisely on the highest-cond(H) layers, which is exactly where the real-layer
measurement said the beam does *worst*. A prettier outcome would have been the
triage helping; instead it converted a neutral component into a harmful one, and
it did so for a mechanically comprehensible reason.

**Why 3.0 bits shows nothing:** the allocator gave every layer 3 bits, making it
identical to uniform. Allocation only pays when the budget forces genuine
trade-offs — at 3.0 bits with a 2-bit floor there is nothing to trade.

---

# Scorecard

| v1 claim | v2 verdict |
|---|---|
| Curvature beats RTN 2.7–3.0× | **CONFIRMED** — median 2.79× real, up to 17× |
| $\alpha = 1 - \mathrm{TV}$, output law exactly $p$ | **CONFIRMED** on a real pair |
| Sensitivity ≠ variance | **CONFIRMED** (see `real_quantization.py` R3) |
| Ignoring $G$ costs up to 3.6× when ill-conditioned | **CONDITIONS MET IN 24/24 REAL LAYERS** |
| `diag(G)` recovers nothing | **CONFIRMED** — 88% median off-diagonal mass |
| Trellis gain largest at lowest bit width | **FALSIFIED** — flat; held 4/6 |
| cond(H) predicts search gain (+0.958) | **REVERSED** — −0.907 on real layers |
| Entropy-scheduled γ should work | **CONFIRMED** — 51.3% of headroom, free |
| Joint serving allocation is a big win | **SHRUNK** — 1.33× vs a strong baseline |
| Fit β per head | **still no gain** (v1 result stands) |
| Rate-distortion allocation beats uniform | **CONFIRMED END-TO-END** — 3.29× less excess loss at 2.5 b/weight |
| cond(H) triage should target the expensive decoder | **HARMFUL** — 3.08× vs 3.29× for no beam at all |

Two of v1's derived predictions failed, one reversing sign. The measured
*identities* — closed-form Hessian, maximal coupling, water-filling — all held,
because they are theorems. Everything that failed was an **inference from a
mechanism to a method**, fitted on synthetic data. That is the useful lesson: in
this domain the math transfers and the extrapolations do not.

---

# What I would do next, and what I would not

**Would:**
1. **Ship the rate-distortion allocator.** It is the only component that
   improved end-to-end validation loss against the production baseline (3.29× at
   2.5 bits/weight), it needs no gradients, and its whole cost is one noise probe
   per layer plus a closed-form solve. Everything else in this programme is
   research; this is engineering that works.
2. **Kronecker-factored rounding is now justified by measurement, not analogy.**
   24/24 layers qualify and ~91% of output directions are nearly free. Build the
   two-sided rounder; this is the one place where v2 strengthened rather than
   weakened the case.
3. **Entropy-scheduled γ.** Free signal, 51.3% of headroom, held-out.
4. **Re-measure cond(G) and effective rank on a real checkpoint.** The method now
   exists and runs in minutes; only the scale is missing.

**Would not:**
5. **Chase trellis/beam quantization further.** Small-width gains of 1.3–2.7×
   collapse to 1.04× median on real layers, reverse on the worst-conditioned
   ones, need full-width search, cost ~4× GPTQ, and end-to-end move validation
   loss by at most 3.29× → 3.45× while sometimes making it worse. Two successive
   predictions about it failed. **v1 recommended this direction; v2 retracts
   that recommendation.**
6. **Use cond(H) to triage anything.** Measured harmful end-to-end.

---

## Reproducing

```bash
pip install numpy torch
cd experiments/ai-substrates
python3 real_model.py            # trains and caches checkpoints (~40 min, CPU)
python3 real_cond_g.py           # the headline measurement
python3 trellis_quantizer.py     # T1-T6, including the falsifications
python3 real_quantization.py     # R1-R5 on real weights
python3 real_speculative.py      # S1-S4 on a real draft/target pair
python3 real_pipeline.py         # end-to-end composed pipeline
```

Seeds are fixed; checkpoints are cached under `/tmp/ai-substrates-cache`.
