# AI Substrate Prototypes

Runnable prototypes backing the three deeply-iterated pathways in
[`docs/ai-substrate-breakthroughs.md`](../../docs/ai-substrate-breakthroughs.md).
Every number marked **[measured]** in that dossier comes from these scripts.

## Running

```bash
pip install numpy          # numpy is the only dependency
python3 kv_rate_distortion.py
python3 speculative_coupling.py
python3 curvature_quantization.py   # ~2 min: does brute-force enumeration
```

Seeds are fixed, so output is reproducible run to run.

| Script | Pathway | Substrate |
|---|---|---|
| `kv_rate_distortion.py` | A — KV cache as a rate-distortion channel | Information theory |
| `speculative_coupling.py` | B — Speculative decoding as an optimal coupling | Probability |
| `curvature_quantization.py` | C — Quantization as a constrained Newton problem | Calculus |

## What these are and are not

**Are:** exact implementations of the underlying mathematics — maximal coupling,
reverse water-filling, the layerwise Hessian $H = 2XX^\top$, Kronecker-factored
curvature — measured against ground truth wherever ground truth is computable.
`curvature_quantization.py` brute-forces the optimal rounding by enumeration, so
every method is scored against the true optimum rather than against another
heuristic. `speculative_coupling.py` verifies the acceptance identity against 4M
Monte-Carlo samples and enumerates block laws exactly.

**Are not:** benchmarks on a real model. All three run on synthetic data built to
carry the structural features that matter (heavy tails, outlier channels,
ill-conditioned activation covariance, heterogeneous head sensitivity), but they
are not Llama. The *identities* transfer because they are theorems; the
*magnitudes* do not. Read them as evidence about which mechanism dominates, not
as a projected speedup.

## Negative results are load-bearing

Several of these experiments came out against the hypothesis, and those runs were
kept rather than tuned away — in four of six cases the failure was more
informative than the win would have been:

- **`kv_rate_distortion.py` A2** — fitting the distortion exponent $\beta$ per
  head bought nothing (1.00×) within a fixed quantizer design. It only pays when
  the allocator may also choose the *design* per head.
- **`kv_rate_distortion.py` A2b** — the first joint (rate, design) allocator was
  **10× worse than doing nothing**, because the curves were fitted at 3–7 bits
  and used at 1–2 bits. Refitting inside the operating range fixed it. This bug
  produces a confidently wrong allocation, not a noisy one.
- **`curvature_quantization.py` C3** — single-coordinate repair of GPTQ finds
  *zero* improving moves. Greedy already sits in a strict 1-opt local minimum, so
  the residual gap is entirely correlated multi-coordinate error. That is the
  measured argument for trellis decoding.
- **`curvature_quantization.py` C2** — Hadamard rotation **hurts** at 4 bits
  (0.72×) while helping at 2 bits (1.37×). It is a low-bit tool.
- **`curvature_quantization.py` C4** — a `diag(G)` approximation to the
  output-side metric recovers *none* of the two-sided gap.
- **`speculative_coupling.py` B5** — the usual multi-draft upper bound goes
  vacuous (equals 1.0) by $k = 4$, so it must be bracketed by an achievable
  scheme to say anything at all.

---

# v2: the same questions, on a real trained model

v1's prototypes (above) ran on synthetic matrices — the largest caveat in the
whole programme. The v2 scripts remove it by **training transformers from
scratch** on a real corpus, then re-running every claim on learned weights and
real activation statistics.

| Script | What it settles |
|---|---|
| `real_model.py` | The harness: corpus, tokenizer, TinyGPT, AdamW + Muon. Run first. |
| `real_cond_g.py` | v1's #1 open question — is cond(G) ill-conditioned in practice? |
| `trellis_quantizer.py` | Builds the decoder v1 argued for, then tries to falsify v1's prediction about it |
| `real_quantization.py` | R1–R5 on real weights: curvature, search, KV sensitivity, Muon |
| `real_speculative.py` | S1–S4: the coupling identity, acceptance heterogeneity, entropy-scheduled γ, joint serving |
| `real_pipeline.py` | The end-to-end ablation against a production baseline |

```bash
pip install numpy torch
python3 real_model.py          # ~40 min on 4 CPU cores; checkpoints are cached
python3 real_cond_g.py         # then any of the others, in any order
```

No GPU and no network access required. HuggingFace is blocked by this
environment's network policy, which is *why* the harness trains its own models
rather than loading a checkpoint.

## What v2 changed

**Confirmed:** curvature-aware rounding (median 2.79× over RTN on real weights,
matching v1's synthetic 2.7–3.0×); the coupling identity α = 1 − TV on a real
draft/target pair; sensitivity ≠ variance; and — the headline — **24/24 real
layers are both ill-conditioned and strongly non-diagonal in G**, so the
Kronecker-factored prize v1 could only bound is broadly available.

**The one thing that worked end-to-end:** rate-distortion bit allocation reduced
excess validation loss **3.29×** versus uniform GPTQ with act-order at 2.5
bits/weight.

**Falsified, and retracted:** v1 predicted a trellis decoder would help most at
the lowest bit width. It doesn't — the gain is flat. The replacement hypothesis
(gain tracks cond(H), corr **+0.958** synthetic) **reversed sign on real layers**
(**−0.907**), and using cond(H) to triage the decoder made the end-to-end
pipeline *worse* than not using the decoder at all. v1 recommended this
direction; v2 retracts it.

**Two more instructive failures:** a banded-Viterbi decoder that solves a
truncated objective exactly loses to greedy solving the real one — truncate the
search, not the problem. And v1's joint serving-allocation win shrinks from 6.70×
to **1.33×** once the baseline is int4 KV with batch and γ properly tuned, rather
than fp16 KV.

The pattern across both documents: **the identities transferred and the
extrapolations did not.** Everything that failed was an inference from a
mechanism to a method, fitted on synthetic data.
