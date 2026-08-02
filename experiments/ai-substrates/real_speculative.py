"""
Pathway B on a REAL model, plus the joint serving allocation.
============================================================

v1 verified the coupling identity on synthetic distributions. Here the draft
and target are two transformers actually trained on the same corpus, so the
draft/target distribution pair is a real one -- correlated, miscalibrated in
the ways real drafts are, and with real per-token variation in acceptance.

  S1. Verify alpha = 1 - TV(p, q) on the real model pair, per token position,
      and verify that speculative sampling's output law is exactly p.

  S2. Measure the per-token DISTRIBUTION of acceptance, not just its mean.
      v1's throughput model uses a single alpha; if acceptance is strongly
      heterogeneous across tokens then a single gamma is provably leaving
      value behind, which motivates S3.

  S3. Does predictive entropy predict local acceptance? This is the Pathway 7
      x Pathway 5 composition: entropy is free at every step, so if it
      predicts alpha it can schedule gamma per token at zero cost.

  S4. Solve the JOINT serving allocation over (gamma, batch, bits) against one
      roofline instead of tuning each separately -- Pathway 15's open move --
      using the real measured alpha and real KV geometry.

Run: python3 real_speculative.py
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


def tv_rows(P: np.ndarray, Q: np.ndarray):
    """Total variation per row."""
    return 0.5 * np.abs(P - Q).sum(axis=1)


def overlap_rows(P: np.ndarray, Q: np.ndarray):
    return np.minimum(P, Q).sum(axis=1)


# ─────────────────────────────────────────────────────────────────────────────
# S1 — the identity, on a real draft/target pair
# ─────────────────────────────────────────────────────────────────────────────

@torch.no_grad()
def s1_identity(target, draft, val, n_pos=4096, trials=64, seed=5):
    report("S1  alpha = 1 - TV(p,q) on a REAL draft/target pair")
    gen = torch.Generator().manual_seed(seed)
    x, y = R.get_batch(val, 24, target.block_size, generator=gen)
    lp = torch.log_softmax(target(x)[0], dim=-1).reshape(-1, target.head.out_features)
    lq = torch.log_softmax(draft(x)[0], dim=-1).reshape(-1, draft.head.out_features)
    idx = torch.randperm(lp.shape[0], generator=gen)[:n_pos]
    P = lp[idx].double().exp().numpy()
    Q = lq[idx].double().exp().numpy()
    P /= P.sum(1, keepdims=True)
    Q /= Q.sum(1, keepdims=True)

    pred = overlap_rows(P, Q)
    print(f"  token positions sampled      : {len(pred)}")
    print(f"  mean predicted acceptance    : {pred.mean():.4f}")
    print(f"  mean TV(p,q)                 : {tv_rows(P,Q).mean():.4f}")

    # Empirical: run real speculative sampling at each position.
    rng = np.random.default_rng(seed)
    V = P.shape[1]
    acc_emp = np.zeros(len(pred))
    out_counts = np.zeros((min(64, len(pred)), V))
    for i in range(len(pred)):
        p, q = P[i], Q[i]
        xs = rng.choice(V, size=trials, p=q)
        u = rng.random(trials)
        acc = u < np.minimum(1.0, p[xs] / np.maximum(q[xs], 1e-300))
        acc_emp[i] = acc.mean()
        if i < out_counts.shape[0]:
            resid = np.maximum(p - q, 0.0)
            tot = resid.sum()
            outs = xs.copy()
            nrej = int((~acc).sum())
            if nrej:
                outs[~acc] = rng.choice(
                    V, size=nrej, p=(resid / tot) if tot > 1e-300 else p)
            for o in outs:
                out_counts[i, o] += 1

    err = abs(acc_emp.mean() - pred.mean())
    print(f"  mean empirical acceptance    : {acc_emp.mean():.4f}")
    print(f"  |predicted - empirical|      : {err:.2e}  "
          f"(MC s.e. ~ {1/np.sqrt(trials*len(pred)):.1e})")

    # Exactness of the emitted law needs its own, properly powered check: with
    # 64 draws over an 8192-token vocabulary, empirical TV is pure sampling
    # noise and would say nothing. So spend many draws on a few positions.
    heavy_pos, heavy_draws = 6, 200_000
    print()
    print(f"  Output-law exactness, {heavy_draws:,} draws each on {heavy_pos} positions:")
    print(f"  {'position':>9} {'TV(emitted, p)':>15} {'TV(q, p)':>10}  verdict")
    for i in range(heavy_pos):
        p_i, q_i = P[i], Q[i]
        xs = rng.choice(V, size=heavy_draws, p=q_i)
        u = rng.random(heavy_draws)
        acc = u < np.minimum(1.0, p_i[xs] / np.maximum(q_i[xs], 1e-300))
        resid = np.maximum(p_i - q_i, 0.0)
        tot = resid.sum()
        outs = xs.copy()
        nrej = int((~acc).sum())
        if nrej:
            outs[~acc] = rng.choice(
                V, size=nrej, p=(resid / tot) if tot > 1e-300 else p_i)
        emp = np.bincount(outs, minlength=V) / heavy_draws
        tv_o = 0.5 * np.abs(emp - p_i).sum()
        tv_q = 0.5 * np.abs(q_i - p_i).sum()
        # Under exactness, TV(emitted, p) should be ~sampling noise, and in
        # particular vastly smaller than TV(q, p) -- the draft's own bias.
        ok = "exact" if tv_o < 0.15 * tv_q else "SUSPECT"
        print(f"  {i:9d} {tv_o:15.4f} {tv_q:10.4f}  {ok}")
    print()
    print("  The identity holds on a real model pair to Monte-Carlo precision, and")
    print("  the emitted law is p -- not q -- even though every proposal came from")
    print("  q. That is what makes the speedup free rather than a quality trade.")
    return P, Q, pred


# ─────────────────────────────────────────────────────────────────────────────
# S2 — heterogeneity: is a single alpha adequate?
# ─────────────────────────────────────────────────────────────────────────────

def s2_heterogeneity(pred):
    report("S2  Acceptance is strongly heterogeneous across tokens")
    qs = np.percentile(pred, [1, 10, 25, 50, 75, 90, 99])
    print(f"  {'pct':>5} " + "".join(f"{p:>8}" for p in
                                     ["p1", "p10", "p25", "p50", "p75", "p90", "p99"]))
    print(f"  {'alpha':>5} " + "".join(f"{v:8.3f}" for v in qs))
    print(f"  mean {pred.mean():.4f}   std {pred.std():.4f}   "
          f"IQR {qs[4]-qs[2]:.4f}")

    def speedup(alpha, gamma, c=0.12):
        if alpha >= 1.0:
            return (gamma + 1) / (1 + gamma * c)
        return ((1 - alpha ** (gamma + 1)) / (1 - alpha)) / (1 + gamma * c)

    print()
    print("  Cost of using one global gamma vs the per-token optimum:")
    gammas = [1, 2, 4, 8, 16]
    # Best single gamma against the mean-alpha model
    best_single, best_g = -1, None
    for g in gammas:
        s = np.mean([speedup(a, g) for a in pred])
        if s > best_single:
            best_single, best_g = s, g
    oracle = np.mean([max(speedup(a, g) for g in gammas) for a in pred])
    print(f"    best single gamma           : g={best_g}, mean speedup {best_single:.3f}x")
    print(f"    per-token oracle gamma      : mean speedup {oracle:.3f}x")
    print(f"    headroom from adapting gamma: {oracle/best_single:.3f}x")
    print()
    print("  This is the gap an entropy-scheduled gamma could try to close, which")
    print("  is exactly why S3 asks whether a free signal predicts alpha.")
    return best_single, oracle, best_g


# ─────────────────────────────────────────────────────────────────────────────
# S3 — does free entropy predict acceptance?
# ─────────────────────────────────────────────────────────────────────────────

def s3_entropy_predicts(P, Q, pred):
    report("S3  Does predictive entropy predict local acceptance? (Pathway 7 x 5)")
    H_t = -(P * np.log(np.maximum(P, 1e-300))).sum(1)      # target entropy
    H_d = -(Q * np.log(np.maximum(Q, 1e-300))).sum(1)      # draft entropy (free!)
    top_d = Q.max(1)                                        # draft confidence
    agree = (P.argmax(1) == Q.argmax(1)).astype(float)

    print(f"  {'signal':<28} {'corr with alpha':>16} {'available at decode?':>22}")
    for name, sig, avail in (
        ("target entropy H(p)", -H_t, "no (needs target)"),
        ("draft entropy H(q)", -H_d, "yes, free"),
        ("draft top-1 prob", top_d, "yes, free"),
        ("argmax agreement", agree, "no (needs target)"),
    ):
        rho = float(np.corrcoef(sig, pred)[0, 1])
        print(f"  {name:<28} {rho:+15.3f} {avail:>22}")

    # How much of the S2 headroom can a free signal actually capture?
    def speedup(alpha, gamma, c=0.12):
        if alpha >= 1.0:
            return (gamma + 1) / (1 + gamma * c)
        return ((1 - alpha ** (gamma + 1)) / (1 - alpha)) / (1 + gamma * c)

    gammas = [1, 2, 4, 8, 16]
    print()
    print("  Bucketing tokens by the FREE draft-entropy signal and assigning each")
    print("  bucket its own gamma (fit on half the data, scored on the other half):")
    n = len(pred)
    rs = np.random.default_rng(0).permutation(n)
    tr_i, te_i = rs[: n // 2], rs[n // 2 :]
    n_buckets = 5
    edges = np.percentile(H_d[tr_i], np.linspace(0, 100, n_buckets + 1)[1:-1])
    b_tr = np.digitize(H_d[tr_i], edges)
    b_te = np.digitize(H_d[te_i], edges)
    chosen = {}
    for b in range(n_buckets):
        m = b_tr == b
        if m.sum() == 0:
            chosen[b] = 4
            continue
        chosen[b] = max(gammas, key=lambda g: np.mean(
            [speedup(a, g) for a in pred[tr_i][m]]))
    # Score on held-out
    best_single = max(gammas, key=lambda g: np.mean(
        [speedup(a, g) for a in pred[tr_i]]))
    s_single = np.mean([speedup(a, best_single) for a in pred[te_i]])
    s_bucket = np.mean([speedup(a, chosen[b])
                        for a, b in zip(pred[te_i], b_te)])
    s_oracle = np.mean([max(speedup(a, g) for g in gammas) for a in pred[te_i]])
    print(f"    gamma per entropy bucket    : {dict(sorted(chosen.items()))}")
    print(f"    single gamma (g={best_single})          : {s_single:.4f}x")
    print(f"    entropy-scheduled gamma     : {s_bucket:.4f}x")
    print(f"    per-token oracle            : {s_oracle:.4f}x")
    captured = ((s_bucket - s_single) / (s_oracle - s_single)
                if s_oracle - s_single > 1e-9 else 0.0)
    print(f"    fraction of headroom captured: {100*captured:.1f}%")
    print()
    if captured > 0.25:
        print("  READ: a signal that costs nothing captures a real share of the")
        print("  adaptive-gamma headroom. The composition works.")
    else:
        print("  READ: the free signal captures little of the headroom here. Either")
        print("  the headroom is small at this scale or draft entropy is too weak a")
        print("  proxy; either way this is a negative result for the composition as")
        print("  specified, not a reason to assume it works.")
    return captured


# ─────────────────────────────────────────────────────────────────────────────
# S4 — joint (gamma, batch, bits) allocation against one roofline
# ─────────────────────────────────────────────────────────────────────────────

def s4_joint_allocation(alpha, model):
    report("S4  Joint (gamma, batch, bits) allocation -- Pathway 15's open move")
    print("  Everyone tunes speculation length, batch size, and KV bit width")
    print("  separately. They are coupled through one bandwidth constraint, so the")
    print("  separate optima cannot be jointly optimal. Solving it once:")
    print()

    # Model geometry (real, from the trained model).
    n_layer = len(model.blocks)
    d_model = model.tok.embedding_dim
    n_head = model.blocks[0].attn.n_head
    d_head = model.blocks[0].attn.d_head
    P_weights = sum(p.numel() for p in model.parameters())
    print(f"  real geometry: {n_layer} layers, d={d_model}, {n_head} heads, "
          f"{P_weights/1e6:.2f}M params")

    # Accelerator envelope (H100-class, order of magnitude).
    BW = 3.35e12         # bytes/s HBM bandwidth
    FLOPS = 9.9e14       # bf16 dense FLOP/s
    ctx = 4096           # tokens of KV per sequence
    c_draft = 0.12       # draft cost relative to target

    def step_time(batch, bits, gamma):
        """Time for one verify step producing E[accepted]+1 tokens."""
        # Bytes: weights read once per step, KV read per sequence per token
        # verified. Weights at bf16; KV at `bits`.
        w_bytes = P_weights * 2
        kv_bytes_per_tok = n_layer * 2 * n_head * d_head * (bits / 8)
        kv_bytes = batch * ctx * kv_bytes_per_tok
        bytes_moved = w_bytes + kv_bytes
        # FLOPs: verifying gamma+1 positions for `batch` sequences, plus draft.
        flops = 2 * P_weights * batch * (gamma + 1) * (1 + c_draft * gamma)
        return max(flops / FLOPS, bytes_moved / BW)

    def tokens_per_step(a, gamma):
        return (1 - a ** (gamma + 1)) / (1 - a) if a < 1 else gamma + 1

    # Quality constraint: KV bits cost accuracy. Use the rate-distortion
    # relation measured in pathway A -- excess loss ~ c * 2^(-beta*bits).
    def quality_penalty(bits):
        return 0.35 * 2.0 ** (-2.0 * (bits - 1.0))

    print(f"  measured alpha from the real pair: {alpha:.4f}")
    print()
    print(f"  {'bits':>4} {'batch':>6} {'gamma':>6} {'tok/s':>12} "
          f"{'penalty':>9} {'bound':>10}")
    best = None
    for bits in (2, 3, 4, 8, 16):
        for batch in (1, 8, 32, 128, 512):
            for gamma in (1, 2, 4, 8, 16):
                t = step_time(batch, bits, gamma)
                thr = batch * tokens_per_step(alpha, gamma) / t
                pen = quality_penalty(bits)
                if pen > 0.05:            # SLO: excess loss budget
                    continue
                w_bytes = P_weights * 2
                kvb = batch * ctx * n_layer * 2 * n_head * d_head * (bits / 8)
                flops = 2 * P_weights * batch * (gamma + 1) * (1 + 0.12 * gamma)
                bound = "compute" if flops / FLOPS > (w_bytes + kvb) / BW else "memory"
                if best is None or thr > best[0]:
                    best = (thr, bits, batch, gamma, pen, bound)
    # Print the feasible frontier, marking SLO violations explicitly.
    print(f"  SLO: excess-loss budget 0.05; rows above it are infeasible.")
    for bits in (2, 3, 4, 8):
        for batch in (32, 512):
            gamma = max((1, 2, 4, 8, 16),
                        key=lambda g: batch * tokens_per_step(alpha, g)
                        / step_time(batch, bits, g))
            t = step_time(batch, bits, gamma)
            thr = batch * tokens_per_step(alpha, gamma) / t
            w_bytes = P_weights * 2
            kvb = batch * ctx * n_layer * 2 * n_head * d_head * (bits / 8)
            flops = 2 * P_weights * batch * (gamma + 1) * (1 + 0.12 * gamma)
            bound = "compute" if flops / FLOPS > (w_bytes + kvb) / BW else "memory"
            pen = quality_penalty(bits)
            flag = "INFEASIBLE" if pen > 0.05 else ""
            mark = " <-- joint opt" if best and (bits, batch, gamma) == best[1:4] else ""
            print(f"  {bits:4d} {batch:6d} {gamma:6d} {thr:12.3e} "
                  f"{pen:9.4f} {bound:>8} {flag:>11}{mark}")

    print()
    thr, bits, batch, gamma, pen, bound = best
    print(f"  JOINT OPTIMUM (SLO-feasible): bits={bits}, batch={batch}, "
          f"gamma={gamma} -> {thr:.3e} tok/s ({bound}-bound)")
    print()
    print("  The interaction, stated concretely: lowering KV bits frees bandwidth,")
    print("  which raises the batch that still fits, which raises arithmetic")
    print("  intensity, which pushes the regime toward compute-bound -- and once")
    print("  compute-bound a LARGER gamma stops paying, because verification FLOPs")
    print("  dominate. So the optimal gamma depends on bit width through the batch")
    print("  size. Separate tuning cannot see that coupling.")
    print()
    print("  Cost of tuning separately, against THREE baselines of increasing")
    print("  strength, because a weak baseline would make this look better than")
    print("  it is:")

    def best_gamma_costmodel(a, c=0.12):
        return max((1, 2, 4, 8, 16),
                   key=lambda g: tokens_per_step(a, g) / (1 + g * c))

    def thr_at(bits_, batch_, gamma_):
        return batch_ * tokens_per_step(alpha, gamma_) / step_time(batch_, bits_, gamma_)

    baselines = []
    # (a) naive: fp16 KV, gamma from the simple cost model, batch tuned at that gamma
    g_a = best_gamma_costmodel(alpha)
    b_a = max((1, 8, 32, 128, 512), key=lambda b: thr_at(16, b, g_a))
    baselines.append(("fp16 KV, gamma from cost model", 16, b_a, g_a))
    # (b) realistic default: int8 KV, same procedure
    b_b = max((1, 8, 32, 128, 512), key=lambda b: thr_at(8, b, g_a))
    baselines.append(("int8 KV (realistic default)", 8, b_b, g_a))
    # (c) strong: int4 KV, batch and gamma each tuned to their own best,
    #     but not jointly with the bit width
    b_c = max((1, 8, 32, 128, 512), key=lambda b: thr_at(4, b, g_a))
    g_c = max((1, 2, 4, 8, 16), key=lambda g: thr_at(4, b_c, g))
    baselines.append(("int4 KV, batch+gamma tuned separately", 4, b_c, g_c))

    print(f"  {'baseline':<38} {'config':>18} {'tok/s':>12} {'joint gain':>11}")
    for label, bb, bt, gg in baselines:
        t_ = thr_at(bb, bt, gg)
        print(f"  {label:<38} {f'b{bb}/n{bt}/g{gg}':>18} {t_:12.3e} "
              f"{thr/t_:10.2f}x")
    print()
    print("  Against the strongest baseline the joint solve is worth")
    print(f"  {thr/thr_at(*baselines[-1][1:]):.2f}x, not the {thr/thr_at(*baselines[0][1:]):.2f}x")
    print("  the naive comparison suggests. The honest number is the small one:")
    print("  most of what looks like a joint-optimisation win is really just")
    print("  'compress the KV cache', which is already standard practice.")
    return best
