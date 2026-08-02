"""
Experiment #1 from dossier v1: measure cond(G) per layer on a REAL model.
========================================================================

Why this experiment decides something
-------------------------------------
The honest quantization objective for a linear layer is two-sided,

    L(dW) = tr( G  dW  H  dW^T ),     H = 2 X X^T (input side),

where G is an output-side metric: how much the downstream network cares about
each output channel, and about each *combination* of output channels. The full
Hessian is the Kronecker product G (x) H.

Every deployed method (GPTQ, AWQ, QuIP, QTIP) optimises the G = I slice.
Dossier v1 established by brute force that this is free when G is
well-conditioned and costs up to 3.6x when cond(G) = 1000. So the entire
question of whether Kronecker-factored rounding is worth its complexity
reduces to one measurable quantity: how ill-conditioned is G in practice?

That is a measurement, not a method, and it is the cheapest decisive experiment
named in the dossier. This script runs it.

What G actually is here
-----------------------
G is the Gauss-Newton / Fisher block of the *downstream* loss with respect to
this layer's output activations:

    G = E[ (dL/dy) (dL/dy)^T ]   (empirical, over calibration tokens)

which is exactly the curvature that converts an output perturbation into a
loss change. We obtain it by backpropagating the real training loss to each
layer's output and accumulating the outer product. No approximation beyond the
Gauss-Newton form itself.

Two statistics matter, and they are different questions:
  * cond(G)          -- is there a cheap direction at all?
  * off-diagonal mass -- can a diagonal approximation see it?
Dossier v1 showed diag(G) recovers *nothing* of the gap, so a G that is
ill-conditioned but nearly diagonal would still not justify the complexity.

Run: python3 real_cond_g.py
"""

from __future__ import annotations

import numpy as np
import torch

import real_model as R


def report(title):
    print()
    print("=" * 78)
    print(title)
    print("=" * 78)


def collect_output_grads(model, data, n_batches=12, batch_size=8, seed=11):
    """Accumulate G = E[g g^T] over real tokens, for every linear layer's output.

    Hooked on the *output* of each layer, so g = dL/dy is the gradient the
    downstream network sends back -- the true output-side metric.
    """
    sums: dict[str, torch.Tensor] = {}
    counts: dict[str, int] = {}
    handles = []

    def mk(name):
        def hook(mod, gin, gout):
            g = gout[0].detach()
            g = g.reshape(-1, g.shape[-1])          # (N, d_out)
            acc = sums.get(name)
            if acc is None:
                sums[name] = g.T @ g
                counts[name] = g.shape[0]
            else:
                acc += g.T @ g
                counts[name] += g.shape[0]
        return hook

    for name, mod in model.linear_layers():
        handles.append(mod.register_full_backward_hook(mk(name)))

    gen = torch.Generator().manual_seed(seed)
    model.train()
    for _ in range(n_batches):
        x, y = R.get_batch(data, batch_size, model.block_size, generator=gen)
        model.zero_grad(set_to_none=True)
        _, loss = model(x, y)
        loss.backward()

    for h in handles:
        h.remove()
    model.zero_grad(set_to_none=True)
    model.eval()
    return {k: (sums[k] / counts[k]).double().numpy() for k in sums}


def spectrum_stats(M: np.ndarray, eps_floor=1e-12):
    """Conditioning statistics that are robust to numerical zeros."""
    w = np.linalg.eigvalsh(M)
    w = np.clip(w, 0.0, None)
    tot = w.sum()
    if tot <= 0:
        return dict(cond=1.0, cond99=1.0, eff_rank=1.0, tail_frac=0.0)
    wn = w / tot
    pos = w[w > w.max() * eps_floor]
    cond = float(w.max() / max(pos.min(), w.max() * eps_floor))
    # A percentile condition number, insensitive to a single tiny eigenvalue.
    lo = np.percentile(pos, 1.0)
    cond99 = float(w.max() / max(lo, 1e-300))
    # Participation ratio: effective number of directions carrying the metric.
    eff_rank = float(1.0 / np.sum(wn ** 2))
    # How much of the metric lives in its bottom half of directions.
    k = len(w) // 2
    tail_frac = float(np.sort(wn)[:k].sum())
    return dict(cond=cond, cond99=cond99, eff_rank=eff_rank, tail_frac=tail_frac)


def off_diagonal_mass(M: np.ndarray):
    """Fraction of the metric's Frobenius energy that a diagonal approximation
    cannot represent. If this is small, diag(G) is adequate no matter what
    cond(G) says."""
    d = np.diag(np.diag(M))
    return float(np.linalg.norm(M - d, "fro") / max(np.linalg.norm(M, "fro"), 1e-300))


def predicted_inflation(G: np.ndarray, n_dirs=512, seed=3):
    """A cheap proxy for 'how much could a two-sided method win here?'

    Brute-forcing the two-sided optimum is intractable at real widths. But the
    mechanism is known from dossier v1: the two-sided optimum wins by steering
    rounding error into cheap directions of G. So the achievable headroom is
    governed by the spread of the Rayleigh quotient of G over plausible error
    directions -- how much cheaper the cheapest direction is than an average
    one. We report the ratio (mean quotient) / (1st-percentile quotient).

    This is a proxy, not a measured speedup. It is monotone in the real prize
    and computable at scale, which is what makes it useful for triage.
    """
    rng = np.random.default_rng(seed)
    d = G.shape[0]
    E = rng.standard_normal((d, n_dirs))
    E /= np.linalg.norm(E, axis=0, keepdims=True)
    q = np.einsum("ij,jk,ki->i", E.T, G, E)          # Rayleigh quotients
    q = np.clip(q, 1e-300, None)
    return float(q.mean() / np.percentile(q, 1.0))


def main():
    print("Loading / training the real model (cached after first run)...")
    model, tok, tr, va, _ = R.get_model("target", "adamw", steps=1500)
    print(f"  val loss {R.evaluate(model, va):.4f}  vocab {tok.vocab_size}")

    report("G = output-side Gauss-Newton metric, measured on real tokens")
    Gs = collect_output_grads(model, tr)
    print(f"  {'layer':<20} {'d_out':>6} {'cond(G)':>11} {'cond99':>10} "
          f"{'eff.rank':>9} {'off-diag':>9} {'headroom':>9}")
    rows = []
    for name, _ in model.linear_layers():
        G = Gs[name]
        st = spectrum_stats(G)
        od = off_diagonal_mass(G)
        hr = predicted_inflation(G)
        rows.append((name, G.shape[0], st, od, hr))
        print(f"  {name:<20} {G.shape[0]:6d} {st['cond']:11.3e} "
              f"{st['cond99']:10.2e} {st['eff_rank']:9.1f} {od:9.3f} {hr:9.2f}x")

    report("Verdict")
    cond99s = np.array([r[2]["cond99"] for r in rows])
    ods = np.array([r[3] for r in rows])
    hrs = np.array([r[4] for r in rows])
    effr = np.array([r[2]["eff_rank"] / r[1] for r in rows])

    print(f"  cond99(G):    median {np.median(cond99s):.2e}   "
          f"min {cond99s.min():.2e}   max {cond99s.max():.2e}")
    print(f"  off-diag mass: median {np.median(ods):.3f}   "
          f"min {ods.min():.3f}   max {ods.max():.3f}")
    print(f"  eff.rank/d_out: median {np.median(effr):.3f} "
          f"(1.0 = isotropic, small = concentrated)")
    print(f"  headroom proxy: median {np.median(hrs):.2f}x   max {hrs.max():.2f}x")
    print()

    # Dossier v1 measured: 1.00x inflation at cond(G) <= 10, 2.04x at 100,
    # 3.59x at 1000. Use those as the decision thresholds.
    ill = int((cond99s > 100).sum())
    nondiag = int((ods > 0.2).sum())
    both = int(((cond99s > 100) & (ods > 0.2)).sum())
    n = len(rows)
    print(f"  layers with cond99 > 100          : {ill}/{n}")
    print(f"  layers with off-diag mass > 0.2   : {nondiag}/{n}")
    print(f"  layers meeting BOTH conditions    : {both}/{n}")
    print()
    if both == 0:
        print("  READ: no layer is simultaneously ill-conditioned and non-diagonal.")
        print("  Kronecker-factored rounding would have nothing to exploit here, and")
        print("  the one-sided objective everyone already uses is the right one.")
    elif both < n / 3:
        print(f"  READ: only {both} of {n} layers could benefit. A two-sided method")
        print("  should be applied selectively, triaged by these two statistics,")
        print("  rather than uniformly across the network.")
    else:
        print(f"  READ: {both} of {n} layers are both ill-conditioned and")
        print("  non-diagonal. The prize dossier v1 measured by brute force is")
        print("  broadly available, and Kronecker-factored rounding is justified.")
    print()
    print("  Both conditions are required. An ill-conditioned but near-diagonal G")
    print("  offers a cheap channel, which per-row scaling already captures; only")
    print("  a non-diagonal G offers a cheap *direction*, which it cannot.")

    report("Caveat, stated plainly")
    print("  This is a 3.4M-parameter model trained on ~640k tokens. G is a")
    print("  Gauss-Newton block estimated from ~12k token positions. Frontier")
    print("  models are 5 orders of magnitude larger and their G blocks may be")
    print("  conditioned differently. What this establishes is the *method* and a")
    print("  first real data point, not a universal constant. The measurement is")
    print("  hours of work on any real checkpoint, and it should be run there.")


if __name__ == "__main__":
    main()
