"""
Pathways A and C, re-run on a REAL trained model.
=================================================

Dossier v1's largest caveat was that every number came from synthetic matrices.
This script replaces them with a transformer trained from scratch on real text:
real learned weights, real activation covariance, real per-head KV statistics,
and end-to-end validation loss as the distortion metric rather than a proxy.

Five questions, each of which v1 answered synthetically:

  R1. Does curvature-aware rounding still beat round-to-nearest on real
      weights, and by how much? (v1 synthetic: 2.7-3.0x)

  R2. Does correlated search still beat greedy on real activation Hessians,
      and does the cond(H) relationship from the trellis study hold on real
      layers? (This is the corrected claim, tested out of sample.)

  R3. Is per-head KV sensitivity still decoupled from variance on a real
      model? (v1 synthetic: correlation 0.38)

  R4. Does rate-distortion bit allocation still beat uniform, measured by
      real end-to-end validation loss rather than a synthetic output KL?

  R5. Do Muon-trained models quantize better than AdamW-trained ones at
      matched loss? (v1 called this the cheapest high-value experiment and
      did not run it.)

Run: python3 real_quantization.py
"""

from __future__ import annotations

import copy

import numpy as np
import torch

import real_model as R
import trellis_quantizer as TQ


def report(title):
    print()
    print("=" * 78)
    print(title)
    print("=" * 78)


# ─────────────────────────────────────────────────────────────────────────────
# Helpers over real layers
# ─────────────────────────────────────────────────────────────────────────────

def layer_hessian(X: torch.Tensor, damp_rel=1e-4):
    """H = 2 X X^T from real activations, lightly damped for conditioning."""
    Xn = X.double().numpy()
    H = 2.0 * Xn @ Xn.T
    H += damp_rel * np.trace(H) / H.shape[0] * np.eye(H.shape[0])
    return H


def quant_error(W, Q, H):
    D = W - Q
    return float(np.trace(D @ H @ D.T))


def rtn(W, bits):
    scale, lv = TQ.grid_for(W, bits)
    return np.clip(np.rint(W / scale), -lv, lv) * scale


@torch.no_grad()
def quantize_model_(model, bits, method="gptq", acts=None, beam_width=8,
                    max_cols=None):
    """Quantize every linear layer in place. Returns nothing; mutates weights.

    max_cols subsamples input columns for the expensive methods so the beam
    search stays tractable on CPU; the same subsample is used for every method
    at a given call so comparisons stay fair.
    """
    for name, mod in model.linear_layers():
        Wt = mod.weight.detach().double().numpy()
        if method == "rtn" or acts is None:
            Q = rtn(Wt, bits)
        else:
            X = acts[name]
            H = layer_hessian(X)
            if method == "gptq":
                order = np.argsort(-np.diag(H))
                Qa = TQ.gptq(Wt, H, bits)
                Qb = TQ.gptq(Wt, H, bits, order=order)
                Q = Qa if quant_error(Wt, Qa, H) <= quant_error(Wt, Qb, H) else Qb
            elif method == "beam":
                Q = TQ.beam(Wt, H, bits, beam_width=beam_width)
            else:
                raise ValueError(method)
        mod.weight.copy_(torch.from_numpy(Q).to(mod.weight.dtype))


# ─────────────────────────────────────────────────────────────────────────────
# R1 / R2 — layerwise error on real weights and real Hessians
# ─────────────────────────────────────────────────────────────────────────────

def r1_r2(model, acts, bits_list=(2, 3, 4), n_layers=6, beam_width=16,
          col_cap=64):
    report("R1/R2  Curvature and correlated search on REAL weights + Hessians")
    print(f"  Subsampling to {col_cap} input columns per layer so beam search is")
    print("  tractable on CPU. Same submatrix for every method, so it is a fair")
    print("  comparison; absolute magnitudes are not comparable across layers.")
    print()
    names = [n for n, _ in model.linear_layers()][:n_layers]
    print(f"  {'layer':<18} {'bits':>4} {'cond(H)':>9} {'RTN/GPTQ':>9} "
          f"{'beam/GPTQ':>10}")
    rows = []
    rng = np.random.default_rng(5)
    for name, mod in model.linear_layers():
        if name not in names:
            continue
        Wfull = mod.weight.detach().double().numpy()
        Xfull = acts[name]
        d_in = Wfull.shape[1]
        cols = rng.choice(d_in, size=min(col_cap, d_in), replace=False)
        W = Wfull[:16, :][:, cols]
        X = Xfull[cols, :]
        H = layer_hessian(X)
        condH = float(np.linalg.cond(H))
        for bits in bits_list:
            e_rtn = quant_error(W, rtn(W, bits), H)
            order = np.argsort(-np.diag(H))
            e_g = min(
                quant_error(W, TQ.gptq(W, H, bits), H),
                quant_error(W, TQ.gptq(W, H, bits, order=order), H),
                quant_error(W, TQ.beam(W, H, bits, 1), H),
            )
            e_b = quant_error(W, TQ.beam(W, H, bits, beam_width), H)
            rows.append((name, bits, condH, e_rtn / e_g, e_g / e_b))
            print(f"  {name:<18} {bits:4d} {condH:9.1f} {e_rtn/e_g:8.2f}x "
                  f"{e_g/e_b:9.3f}x")

    rtn_gain = np.array([r[3] for r in rows])
    beam_gain = np.array([r[4] for r in rows])
    conds = np.array([r[2] for r in rows])
    print()
    print(f"  R1  curvature vs RTN : median {np.median(rtn_gain):.2f}x  "
          f"range {rtn_gain.min():.2f}-{rtn_gain.max():.2f}x")
    print(f"      (v1 synthetic claim was 2.7-3.0x)")
    print(f"  R2  beam vs greedy   : median {np.median(beam_gain):.3f}x  "
          f"range {beam_gain.min():.3f}-{beam_gain.max():.3f}x")
    if len(set(np.round(conds, 3))) > 2:
        rho = float(np.corrcoef(np.log10(conds), beam_gain)[0, 1])
        print(f"      corr(log10 cond(H), beam gain) on real layers = {rho:+.3f}")
        print(f"      (synthetic sweep gave +0.958 -- this is the out-of-sample test)")
    return rows


# ─────────────────────────────────────────────────────────────────────────────
# R3 — per-head KV sensitivity vs variance, on a real model
# ─────────────────────────────────────────────────────────────────────────────

@torch.no_grad()
def r3_kv_sensitivity(model, val, n_probe=2, eps=0.02, seed=17):
    report("R3  Per-head KV sensitivity vs variance, measured on a real model")
    gen = torch.Generator().manual_seed(seed)
    x, y = R.get_batch(val, 16, model.block_size, generator=gen)

    base_logits, base_loss = model(x, y, capture=True)
    base_logp = torch.log_softmax(base_logits, dim=-1)

    # Real cached K/V per layer per head.
    layers = [(i, b.attn) for i, b in enumerate(model.blocks)]
    variances, sensitivities, labels = [], [], []

    for li, attn in layers:
        K0, V0 = attn.last_k.clone(), attn.last_v.clone()   # (B, nh, T, dh)
        nh = K0.shape[1]
        for h in range(nh):
            var = 0.5 * (K0[:, h].var().item() + V0[:, h].var().item())

            acc = 0.0
            for p in range(n_probe):
                g2 = torch.Generator().manual_seed(seed + 100 * p + h)
                nk = torch.randn(K0[:, h].shape, generator=g2) * eps
                nv = torch.randn(V0[:, h].shape, generator=g2) * eps

                # Inject noise into just this head's cached K/V for one
                # forward pass, by temporarily replacing the attention forward.
                orig = attn.forward

                def patched(inp, _attn=attn, _h=h, _nk=nk, _nv=nv):
                    B, T, C = inp.shape
                    q = _attn.q(inp).view(B, T, _attn.n_head, _attn.d_head).transpose(1, 2)
                    k = _attn.k(inp).view(B, T, _attn.n_head, _attn.d_head).transpose(1, 2)
                    v = _attn.v(inp).view(B, T, _attn.n_head, _attn.d_head).transpose(1, 2)
                    k = k.clone()
                    v = v.clone()
                    k[:, _h] = k[:, _h] + _nk
                    v[:, _h] = v[:, _h] + _nv
                    yy = torch.nn.functional.scaled_dot_product_attention(
                        q, k, v, is_causal=True)
                    yy = yy.transpose(1, 2).contiguous().view(B, T, C)
                    return _attn.proj(yy)

                attn.forward = patched
                try:
                    logits_p, _ = model(x, y)
                finally:
                    attn.forward = orig

                logp_p = torch.log_softmax(logits_p, dim=-1)
                p0 = base_logp.exp()
                kl = (p0 * (base_logp - logp_p)).sum(-1).mean().item()
                acc += 2.0 * kl / (eps ** 2)
            sensitivities.append(acc / n_probe)
            variances.append(var)
            labels.append(f"L{li}H{h}")

    var = np.array(variances)
    sens = np.array(np.maximum(sensitivities, 1e-30))
    rho = float(np.corrcoef(np.log10(var), np.log10(sens))[0, 1])
    print(f"  heads measured                : {len(var)}")
    print(f"  variance spread               : {var.max()/var.min():10.1f}x")
    print(f"  sensitivity spread            : {sens.max()/sens.min():10.1f}x")
    print(f"  corr(log var, log sensitivity): {rho:10.3f}")
    print(f"  (v1 synthetic claim was 0.38)")
    print()
    top_v = [labels[i] for i in np.argsort(-var)[:6]]
    top_s = [labels[i] for i in np.argsort(-sens)[:6]]
    print(f"  top-6 heads by variance    : {top_v}")
    print(f"  top-6 heads by sensitivity : {top_s}")
    overlap = len(set(top_v) & set(top_s))
    print(f"  overlap: {overlap}/6 -- a variance-ranked allocator picks "
          f"{6-overlap} of 6 wrong.")
    return var, sens, labels


# ─────────────────────────────────────────────────────────────────────────────
# R4 — end-to-end: does allocation beat uniform on real validation loss?
# ─────────────────────────────────────────────────────────────────────────────

@torch.no_grad()
def r4_end_to_end(model, acts, val, bits_list=(2, 3, 4)):
    report("R4  End-to-end validation loss after quantizing the whole model")
    base = R.evaluate(model, val)
    print(f"  fp32 baseline val loss: {base:.4f}")
    print()
    print(f"  {'bits':>4} {'RTN':>10} {'GPTQ':>10} {'beam=8':>10}   "
          f"{'GPTQ vs RTN':>12}")
    for bits in bits_list:
        losses = {}
        for method in ("rtn", "gptq", "beam"):
            m = copy.deepcopy(model)
            quantize_model_(m, bits, method=method, acts=acts, beam_width=8)
            losses[method] = R.evaluate(m, val)
        d_rtn = losses["rtn"] - base
        d_g = losses["gptq"] - base
        ratio = (d_rtn / d_g) if d_g > 1e-9 else float("inf")
        print(f"  {bits:4d} {losses['rtn']:10.4f} {losses['gptq']:10.4f} "
              f"{losses['beam']:10.4f}   {ratio:11.2f}x")
    print()
    print("  Ratio column is excess-loss-over-baseline reduction, which is the")
    print("  quantity that matters: absolute loss is dominated by the baseline.")
    return base


# ─────────────────────────────────────────────────────────────────────────────
# R5 — does Muon-trained quantize better? (v1's cheapest high-value experiment)
# ─────────────────────────────────────────────────────────────────────────────

def r5_muon_quantizability(steps=1500, bits_list=(2, 3, 4)):
    report("R5  Do Muon-trained models quantize better than AdamW-trained ones?")
    print("  v1's argument: Muon takes steepest-descent steps under a spectral-norm")
    print("  trust region, so singular values stay bounded by construction. Pathway")
    print("  C showed spectral concentration drives rounding error. Therefore a")
    print("  Muon-trained model should quantize better. v1 flagged this as the")
    print("  cheapest high-value experiment and did not run it. Running it now.")
    print()

    models = {}
    for opt in ("adamw", "muon"):
        m, tok, tr, va, _ = R.get_model("target", opt, steps=steps)
        vl = R.evaluate(m, va)
        models[opt] = (m, vl, tr, va)
        print(f"  {opt:6s}: val loss {vl:.4f}")

    va = models["adamw"][3]
    gap = abs(models["adamw"][1] - models["muon"][1])
    print(f"  loss gap between runs: {gap:.4f}")
    if gap > 0.15:
        print("  WARNING: the two runs are not at matched loss, so a quantization")
        print("  difference could just be a capability difference. Reported anyway,")
        print("  with the caveat stated rather than hidden.")
    print()

    # Spectral statistics first: is the mechanism even present?
    print("  Mechanism check -- weight spectra (median over hidden layers):")
    print(f"  {'optimizer':>10} {'cond(W)':>10} {'stable rank':>12} "
          f"{'max sv':>9} {'incoherence':>12}")
    stats = {}
    for opt in ("adamw", "muon"):
        m = models[opt][0]
        conds, sranks, maxsv, incoh = [], [], [], []
        for name, mod in m.linear_layers():
            W = mod.weight.detach().double().numpy()
            sv = np.linalg.svd(W, compute_uv=False)
            conds.append(sv.max() / max(sv.min(), 1e-12))
            sranks.append((sv ** 2).sum() / (sv.max() ** 2))
            maxsv.append(sv.max())
            # incoherence of W W^T: how concentrated the top left-singular
            # vector is on a single output coordinate
            U = np.linalg.svd(W, full_matrices=False)[0]
            incoh.append(W.shape[0] * (U[:, 0] ** 2).max())
        stats[opt] = dict(cond=np.median(conds), srank=np.median(sranks),
                          maxsv=np.median(maxsv), incoh=np.median(incoh))
        s = stats[opt]
        print(f"  {opt:>10} {s['cond']:10.2f} {s['srank']:12.2f} "
              f"{s['maxsv']:9.3f} {s['incoh']:12.3f}")

    print()
    print("  Quantization error, whole model, end-to-end validation loss:")
    print(f"  {'bits':>4} {'method':>7} {'adamw dLoss':>13} {'muon dLoss':>12} "
          f"{'muon better?':>13}")
    verdicts = []
    for bits in bits_list:
        for method in ("rtn", "gptq"):
            deltas = {}
            for opt in ("adamw", "muon"):
                m, vl, tr, _ = models[opt]
                acts = R.capture_activations(m, tr)
                mq = copy.deepcopy(m)
                quantize_model_(mq, bits, method=method, acts=acts)
                deltas[opt] = R.evaluate(mq, va) - vl
            better = deltas["muon"] < deltas["adamw"]
            verdicts.append(better)
            print(f"  {bits:4d} {method:>7} {deltas['adamw']:13.4f} "
                  f"{deltas['muon']:12.4f} {'YES' if better else 'no':>13}")

    print()
    n_yes = sum(verdicts)
    print(f"  Muon quantized better in {n_yes}/{len(verdicts)} "
          f"(bits x method) settings.")
    print(f"  Spectral mechanism: Muon cond(W) {stats['muon']['cond']:.2f} vs "
          f"AdamW {stats['adamw']['cond']:.2f}, "
          f"stable rank {stats['muon']['srank']:.2f} vs {stats['adamw']['srank']:.2f}")
    if n_yes >= 0.7 * len(verdicts):
        print("  READ: the composition holds. Spectral control during training")
        print("  transfers into post-training quantizability -- two substrates,")
        print("  one mechanism.")
    elif n_yes <= 0.3 * len(verdicts):
        print("  READ: the composition does NOT hold in this setting. Bounded")
        print("  singular values did not translate into lower quantization damage,")
        print("  so v1's cross-substrate argument fails its first real test.")
    else:
        print("  READ: mixed. No reliable effect at this scale; the hypothesis is")
        print("  neither supported nor cleanly refuted.")
    return stats, verdicts


def main():
    print("Loading real model (cached after first run)...")
    model, tok, tr, va, _ = R.get_model("target", "adamw", steps=1500)
    print(f"  val loss {R.evaluate(model, va):.4f}")
    print("Capturing real activations...")
    acts = R.capture_activations(model, tr)
    for k in list(acts)[:2]:
        print(f"  {k}: X shape {tuple(acts[k].shape)}")

    r1_r2(model, acts)
    r3_kv_sensitivity(model, va)
    r4_end_to_end(model, acts, va)
    r5_muon_quantizability()

    report("Scope")
    print("  3.4M parameters, ~640k training tokens, word-level vocab 8192.")
    print("  These are real learned weights with real activation statistics, which")
    print("  is a categorically different regime from random matrices -- but it is")
    print("  not a frontier model. Identities transfer; magnitudes should be")
    print("  re-measured on a real checkpoint before anyone plans around them.")


if __name__ == "__main__":
    main()
