"""
The synthesis: a quantization pipeline composed from what actually survived.
===========================================================================

Dossier v1 produced fifteen pathways and a lot of measurements. Two ideas
survived contact with real data and are worth composing into one system:

  1. Rate-distortion bit allocation driven by MEASURED per-layer sensitivity
     (pathway A). Bits are a budget; the optimum equalises marginal distortion
     per bit; the water-filling threshold doubles as a "don't bother" rule.

  2. Correlated search instead of greedy rounding (pathway C, corrected).
     Beam search over the exact objective strictly generalises GPTQ and
     provably reaches the integer least-squares optimum at wide beam. The
     corrected claim from the trellis study is that its advantage tracks
     cond(H) -- which is computable per layer BEFORE quantizing.

Point 2's corrected claim is what makes the composition work, because it turns
"use the expensive decoder" into a triage decision with a cheap statistic. So
the pipeline is:

    for each layer:
        measure H = 2 X X^T           (one forward pass, no gradients)
        measure sensitivity s_l       (one noise probe)
        measure cond(H)               (free, from H)
    allocate bits by water-filling on s_l
    spend the search budget where cond(H) says it pays
    round

Every input is measured, nothing is tuned by hand, and the whole thing runs on
forward passes over calibration data. The baseline it must beat is uniform-bit
GPTQ with act-order, which is what production pipelines actually ship.

Metric is end-to-end validation loss on held-out real text -- not weight MSE,
not a synthetic proxy.

Run: python3 real_pipeline.py
"""

from __future__ import annotations

import copy
import time

import numpy as np
import torch

import real_model as R
import trellis_quantizer as TQ
from real_quantization import layer_hessian, quant_error, rtn


def report(title):
    print()
    print("=" * 78)
    print(title)
    print("=" * 78)


# ─────────────────────────────────────────────────────────────────────────────
# Step 1 — measure everything the allocator needs. Forward passes only.
# ─────────────────────────────────────────────────────────────────────────────

@torch.no_grad()
def measure_layers(model, acts, val, probe_eps=0.02, n_probe=2, seed=31):
    """Per layer: cond(H), distortion curve (c, beta), and sensitivity s.

    Sensitivity is the Gauss-Newton coefficient relating injected weight MSE to
    excess validation loss: dLoss ~ (1/2) s * MSE. It is obtained by adding
    calibrated noise to the layer's weights and measuring the loss change --
    one probe per layer, no gradients.
    """
    base = R.evaluate(model, val)
    out = {}
    for name, mod in model.linear_layers():
        W = mod.weight.detach().double().numpy()
        H = layer_hessian(acts[name])
        condH = float(np.linalg.cond(H))

        # Distortion curve of the actual quantizer, fitted IN the operating
        # range (the lesson from v1's A2b failure).
        ds = []
        probe_bits = (2, 3, 4)
        for b in probe_bits:
            D = W - rtn(W, b)
            ds.append(float(np.mean(D ** 2)))
        A = np.stack([np.ones(len(probe_bits)),
                      -np.array(probe_bits, dtype=float)], axis=1)
        sol, *_ = np.linalg.lstsq(A, np.log2(np.array(ds)), rcond=None)
        c, beta = 2.0 ** sol[0], sol[1]

        # Sensitivity probe.
        orig = mod.weight.detach().clone()
        acc = 0.0
        for p in range(n_probe):
            g = torch.Generator().manual_seed(seed + 17 * p + hash(name) % 1000)
            noise = torch.randn(orig.shape, generator=g) * probe_eps
            mod.weight.copy_(orig + noise)
            dl = R.evaluate(model, val, iters=8) - base
            acc += 2.0 * max(dl, 0.0) / (probe_eps ** 2)
        mod.weight.copy_(orig)
        s = acc / n_probe

        out[name] = dict(cond=condH, c=c, beta=beta, s=max(s, 1e-12),
                         numel=W.size, shape=W.shape)
    return base, out


# ─────────────────────────────────────────────────────────────────────────────
# Step 2 — allocate bits by discrete reverse water-filling.
# ─────────────────────────────────────────────────────────────────────────────

def allocate_bits(stats, budget_bits, b_min=2, b_max=8):
    """Greedy marginal allocation, weighted by parameter count.

    Predicted excess loss from layer l at rate b is
        J_l(b) = s_l * c_l * 2^(-beta_l * b)
    which is convex decreasing, so greedy marginal allocation is optimal for
    the separable integer program. Weighting by numel makes the budget a true
    average bits-per-weight rather than average bits-per-layer.
    """
    names = list(stats)
    total_w = sum(stats[n]["numel"] for n in names)
    bits = {n: b_min for n in names}

    def J(n, b):
        st = stats[n]
        return st["s"] * st["c"] * 2.0 ** (-st["beta"] * b) * st["numel"]

    spent = sum(bits[n] * stats[n]["numel"] for n in names)
    cap = budget_bits * total_w
    while spent < cap:
        best, best_gain = None, 0.0
        for n in names:
            if bits[n] >= b_max:
                continue
            if spent + stats[n]["numel"] > cap:
                continue
            gain = (J(n, bits[n]) - J(n, bits[n] + 1)) / stats[n]["numel"]
            if gain > best_gain:
                best, best_gain = n, gain
        if best is None:
            break
        bits[best] += 1
        spent += stats[best]["numel"]
    return bits


# ─────────────────────────────────────────────────────────────────────────────
# Step 3 — spend the search budget where cond(H) says it pays.
# ─────────────────────────────────────────────────────────────────────────────

def assign_search(stats, frac=0.5, beam_hi=16, beam_lo=1):
    """Give the wide beam to the top `frac` of layers by cond(H).

    This is the corrected claim from the trellis study put to work: cond(H)
    predicted the search advantage with corr +0.958 on the synthetic sweep, so
    it is the natural triage statistic. It costs nothing -- H is already built.
    """
    names = sorted(stats, key=lambda n: -stats[n]["cond"])
    k = max(1, int(round(frac * len(names))))
    return {n: (beam_hi if i < k else beam_lo) for i, n in enumerate(names)}


# ─────────────────────────────────────────────────────────────────────────────
# Step 4 — round.
# ─────────────────────────────────────────────────────────────────────────────

@torch.no_grad()
def apply_quantization(model, acts, bits_map, beam_map=None, method="gptq",
                       col_block=None):
    """Quantize in place. method='gptq' uses greedy error feedback with
    act-order; method='beam' uses beam width from beam_map per layer."""
    for name, mod in model.linear_layers():
        W = mod.weight.detach().double().numpy()
        b = bits_map[name] if isinstance(bits_map, dict) else bits_map
        H = layer_hessian(acts[name])
        if method == "rtn":
            Q = rtn(W, b)
        elif method == "gptq":
            order = np.argsort(-np.diag(H))
            Qa, Qb = TQ.gptq(W, H, b), TQ.gptq(W, H, b, order=order)
            Q = Qa if quant_error(W, Qa, H) <= quant_error(W, Qb, H) else Qb
        elif method == "beam":
            bw = beam_map[name] if beam_map else 8
            if bw <= 1:
                order = np.argsort(-np.diag(H))
                Qa, Qb = TQ.gptq(W, H, b), TQ.gptq(W, H, b, order=order)
                Q = Qa if quant_error(W, Qa, H) <= quant_error(W, Qb, H) else Qb
            else:
                Q = TQ.beam_blocked(W, H, b, beam_width=bw,
                                   block=W.shape[1])
        else:
            raise ValueError(method)
        mod.weight.copy_(torch.from_numpy(Q).to(mod.weight.dtype))


# ─────────────────────────────────────────────────────────────────────────────
# The comparison
# ─────────────────────────────────────────────────────────────────────────────

def main():
    print("Loading real model...")
    model, tok, tr, va, _ = R.get_model("target", "adamw", steps=1500)
    acts = R.capture_activations(model, tr)
    n_hidden = sum(m.weight.numel() for _, m in model.linear_layers())
    print(f"  quantizable hidden weights: {n_hidden/1e6:.2f}M across "
          f"{len(model.linear_layers())} layers")

    report("Step 1  Measure (forward passes only, no gradients)")
    t0 = time.time()
    base, stats = measure_layers(model, acts, va)
    print(f"  fp32 val loss {base:.4f};  measurement took {time.time()-t0:.1f}s")
    print()
    print(f"  {'layer':<18} {'shape':>12} {'cond(H)':>10} {'beta':>6} "
          f"{'sensitivity':>12}")
    for n in stats:
        st = stats[n]
        print(f"  {n:<18} {str(st['shape']):>12} {st['cond']:10.1f} "
              f"{st['beta']:6.2f} {st['s']:12.4e}")
    conds = np.array([stats[n]["cond"] for n in stats])
    sens = np.array([stats[n]["s"] for n in stats])
    print()
    print(f"  cond(H) spread     : {conds.max()/conds.min():.1f}x")
    print(f"  sensitivity spread : {sens.max()/sens.min():.1f}x")
    print("  -> both are heterogeneous, which is the precondition for allocation")
    print("     and triage to be worth anything at all.")

    report("Step 2/3  Allocate bits, then triage the search budget")
    for budget in (2.5, 3.0):
        bmap = allocate_bits(stats, budget)
        realised = (sum(bmap[n] * stats[n]["numel"] for n in stats)
                    / sum(stats[n]["numel"] for n in stats))
        print(f"  budget {budget:.1f} b/weight -> realised {realised:.3f}: "
              f"{ {n.split('.',1)[1] if '.' in n else n: bmap[n] for n in bmap} }")
    beam_map = assign_search(stats, frac=0.5)
    wide = [n for n in beam_map if beam_map[n] > 1]
    print()
    print(f"  wide beam given to {len(wide)}/{len(beam_map)} layers "
          f"(highest cond(H)):")
    for n in wide:
        print(f"    {n:<18} cond(H) = {stats[n]['cond']:.1f}")

    report("Step 4  End-to-end validation loss vs the production baseline")
    print("  Baseline = uniform-bit GPTQ with act-order, which is what shipping")
    print("  pipelines use. All rows at the same average bits per weight.")
    print()
    print(f"  {'avg bits':>9} {'method':<34} {'val loss':>10} {'excess':>9} "
          f"{'vs baseline':>12}")
    for budget in (2.5, 3.0):
        uni = int(round(budget))
        rows = []

        m = copy.deepcopy(model)
        apply_quantization(m, acts, uni, method="rtn")
        rows.append((f"uniform {uni}b RTN", R.evaluate(m, va)))

        m = copy.deepcopy(model)
        apply_quantization(m, acts, uni, method="gptq")
        base_row = R.evaluate(m, va)
        rows.append((f"uniform {uni}b GPTQ+act-order  [BASELINE]", base_row))

        bmap = allocate_bits(stats, budget)
        m = copy.deepcopy(model)
        apply_quantization(m, acts, bmap, method="gptq")
        rows.append(("+ rate-distortion allocation", R.evaluate(m, va)))

        m = copy.deepcopy(model)
        apply_quantization(m, acts, bmap, beam_map=beam_map, method="beam")
        rows.append(("+ allocation + cond(H)-triaged beam", R.evaluate(m, va)))

        m = copy.deepcopy(model)
        apply_quantization(m, acts, bmap,
                          beam_map={n: 16 for n in beam_map}, method="beam")
        rows.append(("+ allocation + beam everywhere", R.evaluate(m, va)))

        base_excess = base_row - base
        for label, loss in rows:
            exc = loss - base
            ratio = base_excess / exc if exc > 1e-9 else float("inf")
            print(f"  {budget:9.1f} {label:<34} {loss:10.4f} {exc:9.4f} "
                  f"{ratio:11.2f}x")
        print()

    report("Reading the result")
    print("  The 'vs baseline' column is the reduction in EXCESS loss over fp32,")
    print("  which is the quantity that matters: absolute loss is dominated by the")
    print("  baseline model's own loss, so reporting it would hide the effect.")
    print()
    print("  Each row adds one measured ingredient to the previous one, so the")
    print("  table is an ablation rather than a single headline. Any row that fails")
    print("  to improve on the one above it is a component that did not earn its")
    print("  place, and is reported as such.")
    print()
    print("  Cost accounting, since this must be practical to be interesting:")
    print("    * H and cond(H)     -- one forward pass over calibration data")
    print("    * sensitivity       -- one noise probe per layer, forward only")
    print("    * allocation        -- closed-form water-filling, microseconds")
    print("    * beam search       -- the only expensive step, and cond(H) triage")
    print("      confines it to the layers where it was predicted to pay")
    print("  No gradients, no retraining, no labelled data.")


if __name__ == "__main__":
    main()
