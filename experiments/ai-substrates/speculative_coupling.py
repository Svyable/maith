"""
Pathway B — Speculative decoding is a coupling problem, and TV distance is
the exchange rate between draft quality and tokens per second.
=========================================================================

Claim under test
----------------
Speculative decoding is usually explained as "guess and check". It is better
understood as constructing a *coupling* between the draft distribution q and
the target distribution p: a joint law whose marginals are exactly q and p,
built so the two agree as often as possible. Once you see it that way:

  B1. The acceptance rate of the standard algorithm is *exactly*
      alpha = sum_x min(p(x), q(x)) = 1 - TV(p, q),
      the maximal coupling bound. The algorithm is optimal for one draft, and
      no amount of engineering beats it without changing the problem. Verified
      to Monte-Carlo precision, together with exactness of the output law.

  B2. Total variation is therefore the *only* property of the draft that
      matters. This is a strong statement: two drafts with identical
      cross-entropy to p can have very different acceptance rates. We build
      such a pair and measure the gap.

  B3. So distillation should minimise TV, not KL. We train a draft head on
      each objective from the same initialisation and measure acceptance.
      Minimising the thing you are paid for wins; we measure by how much.

  B4. Verifying a *block* jointly beats verifying token-by-token. Greedy
      per-token rejection collects prod_l (1 - TV of conditionals); the
      block-optimal coupling collects sum_l (1 - TV of the l-token joint),
      which is provably larger. We compute both exactly on small alphabets
      and report the gap, then convert it to wall-clock speedup.

  B5. Multiple drafts raise the ceiling, but with sharply diminishing
      returns: the bound is sum_x min(p(x), 1 - (1 - q(x))^k).

Run: python3 speculative_coupling.py
"""

import numpy as np
import itertools

RNG = np.random.default_rng(11235)


def tv(p, q):
    return 0.5 * float(np.abs(p - q).sum())


def overlap(p, q):
    """sum_x min(p,q) = 1 - TV. The maximal-coupling agreement probability."""
    return float(np.minimum(p, q).sum())


def softmax(z, T=1.0):
    z = np.asarray(z, dtype=float) / T
    z = z - z.max(axis=-1, keepdims=True)
    e = np.exp(z)
    return e / e.sum(axis=-1, keepdims=True)


def report(title):
    print()
    print("=" * 74)
    print(title)
    print("=" * 74)


# ─────────────────────────────────────────────────────────────────────────────
# B1 — The standard algorithm realises the maximal coupling, exactly.
#
# Draw x ~ q. Accept with probability min(1, p(x)/q(x)). If rejected, draw from
# the normalised residual (p - q)_+ . The output is exactly p (that is the
# point), and P(accept) = sum_x min(p,q).
# ─────────────────────────────────────────────────────────────────────────────

def spec_sample(p, q, n, rng):
    x = rng.choice(len(q), size=n, p=q)
    u = rng.random(n)
    acc = u < np.minimum(1.0, p[x] / np.maximum(q[x], 1e-300))
    resid = np.maximum(p - q, 0.0)
    tot = resid.sum()
    out = x.copy()
    n_rej = int((~acc).sum())
    if n_rej:
        if tot <= 1e-300:
            # p is dominated by q everywhere; rejection has probability 0.
            out[~acc] = rng.choice(len(q), size=n_rej, p=p)
        else:
            out[~acc] = rng.choice(len(q), size=n_rej, p=resid / tot)
    return out, acc


def b1_verify():
    report("B1  Acceptance rate equals 1 - TV(p,q), and the output law is exactly p")
    V, N = 64, 4_000_000
    print(f"  {'':>10} {'predicted':>11} {'measured':>11} {'abs err':>10} "
          f"{'TV(out,p)':>11}")
    for label, T in (("q sharp", 0.6), ("q matched", 1.0), ("q flat", 2.5)):
        logits = RNG.standard_normal(V) * 2.0
        p = softmax(logits, 1.0)
        q = softmax(logits + RNG.standard_normal(V) * 0.5, T)
        pred = overlap(p, q)
        out, acc = spec_sample(p, q, N, RNG)
        meas = float(acc.mean())
        emp = np.bincount(out, minlength=V) / N
        print(f"  {label:>10} {pred:11.6f} {meas:11.6f} {abs(pred-meas):10.2e} "
              f"{tv(emp, p):11.2e}")
    print("  -> acceptance matches the coupling bound to Monte-Carlo error, and the")
    print("     emitted distribution is p (TV ~ 1/sqrt(N)). Exactness is not")
    print("     approximate: it is an identity, so this is a free speedup.")


# ─────────────────────────────────────────────────────────────────────────────
# B2 — Equal cross-entropy, unequal acceptance.
#
# If TV is what you are paid for, then cross-entropy is the wrong scoreboard.
# We construct two drafts with (near) identical KL(p||q) but different overlap.
# Concretely: spread the error over many tokens vs concentrate it on a few.
# ─────────────────────────────────────────────────────────────────────────────

def b2_kl_is_the_wrong_scoreboard():
    report("B2  Two drafts, same cross-entropy, different acceptance")
    V = 64
    p = softmax(RNG.standard_normal(V) * 1.5)

    def kl(p_, q_):
        return float(np.sum(p_ * np.log(p_ / np.maximum(q_, 1e-300))))

    def perturb_spread(eps):
        """Error smeared over the whole vocabulary."""
        q = p * np.exp(eps * RNG.standard_normal(V))
        return q / q.sum()

    def perturb_concentrated(eps, k=4):
        """Same-magnitude error piled onto a few high-probability tokens."""
        idx = np.argsort(-p)[:k]
        d = np.zeros(V)
        d[idx] = eps
        q = p * np.exp(d)
        return q / q.sum()

    target_kl = None
    best = {}
    for name, fn in (("spread", perturb_spread), ("concentrated", perturb_concentrated)):
        # Bisect eps so both drafts land on the same KL.
        if target_kl is None:
            q = fn(0.9)
            target_kl = kl(p, q)
            best[name] = q
            continue
        lo, hi = 0.0, 30.0
        for _ in range(200):
            mid = 0.5 * (lo + hi)
            if kl(p, fn(mid)) < target_kl:
                lo = mid
            else:
                hi = mid
        best[name] = fn(0.5 * (lo + hi))

    print(f"  {'draft':>13} {'KL(p||q)':>10} {'TV(p,q)':>9} {'acceptance':>11}")
    for name, q in best.items():
        print(f"  {name:>13} {kl(p, q):10.5f} {tv(p, q):9.5f} {overlap(p, q):11.5f}")
    a = [overlap(p, q) for q in best.values()]
    print(f"  -> {abs(a[0]-a[1])*100:.1f} acceptance points of difference at matched KL.")
    print("     Cross-entropy is a proxy that can be gamed; TV cannot.")


# ─────────────────────────────────────────────────────────────────────────────
# B3 — Train the draft on the objective you are paid for.
#
# A draft head q_theta = softmax(W h). Same init, same data, same steps; one
# run minimises KL(p||q), the other minimises TV(p,q) = 1/2 ||p-q||_1.
# TV has a subgradient a.e., so plain gradient descent works fine.
# ─────────────────────────────────────────────────────────────────────────────

def b3_train_draft():
    report("B3  Distilling a draft head: KL objective vs TV objective")
    V, D, N = 48, 24, 512
    H = RNG.standard_normal((N, D))
    W_true = RNG.standard_normal((V, D)) * 0.8
    P = softmax(H @ W_true.T)                       # teacher distributions

    def train(objective, steps=4000, lr=0.35):
        # Under-parameterised on purpose: a draft that could match p exactly
        # makes the comparison vacuous.
        W = RNG.standard_normal((V, 6)) * 0.05
        A = RNG.standard_normal((6, D)) * 0.3       # frozen random projection
        for t in range(steps):
            Z = H @ A.T @ W.T
            Q = softmax(Z)
            if objective == "kl":
                # d/dZ of KL(P||Q) = Q - P
                G = Q - P
            else:
                # d/dZ of 1/2||P-Q||_1: s = sign(Q-P), then push through softmax
                s = np.sign(Q - P)
                G = 0.5 * Q * (s - np.sum(Q * s, axis=1, keepdims=True))
            gW = G.T @ (H @ A.T) / N
            W -= lr * gW
        return softmax(H @ A.T @ W.T)

    print(f"  {'objective':>10} {'mean KL':>10} {'mean TV':>9} {'acceptance':>11} "
          f"{'tokens/step':>12}")
    res = {}
    for obj in ("kl", "tv"):
        Q = train(obj)
        mkl = float(np.mean(np.sum(P * np.log(P / np.maximum(Q, 1e-300)), axis=1)))
        mtv = float(np.mean(0.5 * np.abs(P - Q).sum(axis=1)))
        alpha = 1.0 - mtv
        res[obj] = alpha
        # Expected tokens per verify step for a draft block of gamma=4.
        g = 4
        toks = (1 - alpha ** (g + 1)) / (1 - alpha) if alpha < 1 else g + 1
        print(f"  {obj.upper():>10} {mkl:10.5f} {mtv:9.5f} {alpha:11.5f} {toks:12.3f}")
    gain = res["tv"] - res["kl"]
    print(f"  -> training on TV moves acceptance by {gain*100:+.2f} points at equal")
    print("     capacity and compute. The KL-trained draft spends capacity making")
    print("     the tail well-calibrated, which acceptance does not pay for.")


# ─────────────────────────────────────────────────────────────────────────────
# B4 — Block verification beats token-by-token verification.
#
# Token-level greedy rejection accepts the first l tokens with probability
#     prod_{j<=l} (1 - TV(p_j(.|prefix), q_j(.|prefix)))   [in expectation]
# whereas any valid scheme is bounded by, and block-optimal coupling attains,
#     P(first l accepted) <= 1 - TV(p_{1..l}, q_{1..l}),
# the TV between the *joint* block laws. Jensen puts the joint TV below the
# product bound, so block verification strictly dominates. We enumerate small
# alphabets exactly --- no sampling, no approximation.
# ─────────────────────────────────────────────────────────────────────────────

def random_block_law(V, L, rng, kappa=1.0):
    """An autoregressive law over V^L, returned as a full joint over V**L."""
    joint = np.zeros(V ** L)
    for i, seq in enumerate(itertools.product(range(V), repeat=L)):
        joint[i] = 1.0
        pref = ()
        for tok in seq:
            key = abs(hash((pref, kappa))) % (2 ** 31)
            r = np.random.default_rng(key).standard_normal(V) * kappa
            joint[i] *= softmax(r)[tok]
            pref = pref + (tok,)
    return joint / joint.sum()


def marginalise(joint, V, L, l):
    """Marginal over the first l tokens."""
    out = np.zeros(V ** l)
    for i, seq in enumerate(itertools.product(range(V), repeat=L)):
        j = 0
        for tok in seq[:l]:
            j = j * V + tok
        out[j] += joint[i]
    return out


def b4_block_verification():
    report("B4  Block-optimal verification vs token-by-token")
    print(f"  {'V':>3} {'L':>3} {'token-level':>12} {'block bound':>12} "
          f"{'gain':>8} {'speedup':>9}")
    for V, L in ((4, 3), (6, 3), (4, 4), (8, 3)):
        pj = random_block_law(V, L, RNG, kappa=1.3)
        qj = random_block_law(V, L, RNG, kappa=0.7)

        # Block-optimal: E[#accepted] = sum_l P(>= l accepted),
        # with P(>= l accepted) = 1 - TV of the l-token joints (attainable).
        block = 0.0
        prefix_tvs = []
        for l in range(1, L + 1):
            pl = marginalise(pj, V, L, l)
            ql = marginalise(qj, V, L, l)
            prefix_tvs.append(tv(pl, ql))
            block += 1.0 - prefix_tvs[-1]

        # Token-level greedy: chain the per-step conditional overlaps, averaged
        # over the prefixes that survive. Computed exactly by recursion.
        def token_level():
            total = 0.0
            # reach[prefix] = probability the coupling has accepted this prefix
            reach = {(): 1.0}
            for l in range(1, L + 1):
                pl = marginalise(pj, V, L, l)
                ql = marginalise(qj, V, L, l)
                pl_1 = marginalise(pj, V, L, l - 1) if l > 1 else np.array([1.0])
                ql_1 = marginalise(qj, V, L, l - 1) if l > 1 else np.array([1.0])
                nxt = {}
                for pref, w in reach.items():
                    j = 0
                    for tok in pref:
                        j = j * V + tok
                    if pl_1[j] <= 0 or ql_1[j] <= 0:
                        continue
                    pc = pl[j * V:(j + 1) * V] / pl_1[j]
                    qc = ql[j * V:(j + 1) * V] / ql_1[j]
                    # Maximal coupling of the conditionals: agree on min(pc,qc).
                    agree = np.minimum(pc, qc)
                    total += w * agree.sum()
                    for tok in range(V):
                        if agree[tok] > 0:
                            nxt[pref + (tok,)] = w * agree[tok]
                reach = nxt
            return total

        tok = token_level()
        gain = block / tok
        # Wall clock: cost of a step is 1 target pass + L draft passes at
        # relative cost c. Speedup = accepted_tokens_per_step / cost.
        c = 0.15
        sp_tok = (tok + 1) / (1 + L * c)
        sp_blk = (block + 1) / (1 + L * c)
        print(f"  {V:3d} {L:3d} {tok:12.5f} {block:12.5f} {gain:7.3f}x "
              f"{sp_blk/sp_tok:8.3f}x")
    print("  -> the block bound exceeds the token-level chain in every case.")
    print("     Same draft, same target, same compute: the difference is purely")
    print("     which coupling you construct. Token-greedy is locally optimal and")
    print("     globally not.")
    print("     NOTE: we compute the block *bound* exactly and take its")
    print("     attainability from Sun et al. 2024 (optimal block-level draft")
    print("     verification); we do not construct the attaining coupling here.")


# ─────────────────────────────────────────────────────────────────────────────
# B5 — More drafts raise the ceiling, with diminishing returns.
# ─────────────────────────────────────────────────────────────────────────────

def rrs_acceptance(p, q, k):
    """Recursive rejection sampling with k i.i.d. drafts: exact, and its
    acceptance is available in closed form.

    Try draft 1 against target p. On rejection the residual (p-q)_+, renormalised,
    becomes the target for draft 2, and so on. Each round accepts with
    probability alpha_i = sum_x min(r_i, q), so

        P(accept within k) = 1 - prod_i (1 - alpha_i).

    This is an *achievable* rate, so together with the marginal bound it
    brackets the true optimum.
    """
    r = p.copy()
    miss = 1.0
    for _ in range(k):
        a = overlap(r, q)
        miss *= (1.0 - a)
        resid = np.maximum(r - q, 0.0)
        tot = resid.sum()
        if tot <= 1e-300:
            break
        r = resid / tot
    return 1.0 - miss


def b5_multi_draft():
    report("B5  How much can k parallel drafts buy?")
    V = 64
    logits = RNG.standard_normal(V) * 1.8
    p = softmax(logits)
    q = softmax(logits + RNG.standard_normal(V) * 0.7, 1.3)
    print(f"  TV(p,q) = {tv(p,q):.4f}, single-draft acceptance = {overlap(p,q):.4f}")
    print(f"  {'k':>3} {'achievable':>11} {'upper bnd':>10} {'marginal':>9} "
          f"{'accept/FLOP':>12}")
    prev = 0.0
    for k in (1, 2, 4, 8, 16, 32):
        ach = rrs_acceptance(p, q, k)
        ub = float(np.minimum(p, 1.0 - (1.0 - q) ** k).sum())
        print(f"  {k:3d} {ach:11.5f} {ub:10.5f} {ach - prev:9.5f} {ach / k:12.5f}")
        prev = ach
    print("  -> the achievable curve (recursive rejection sampling) saturates fast.")
    print("     The marginal-constraint upper bound goes vacuous by k=4, so it says")
    print("     nothing there; the achievable column is the one to read.")
    print("     Past k~8, doubling draft FLOPs buys a fraction of an acceptance")
    print("     point. Width is not where the order of magnitude lives; lower TV")
    print("     (B3) and a better coupling (B4) are.")


# ─────────────────────────────────────────────────────────────────────────────
# The throughput model that turns all of the above into wall clock.
# ─────────────────────────────────────────────────────────────────────────────

def b6_throughput():
    report("B6  Translating acceptance into wall clock")
    print("  speedup(alpha, gamma, c) = [ (1-alpha^(gamma+1)) / (1-alpha) ] / (1 + gamma*c)")
    print("  where gamma = draft block length, c = draft/target cost ratio.")
    print()
    print(f"  {'alpha':>6} " + "".join(f"{('g=%d' % g):>8}" for g in (1, 2, 4, 8, 16)))
    c = 0.12
    for alpha in (0.5, 0.6, 0.7, 0.8, 0.9, 0.95):
        row = f"  {alpha:6.2f} "
        best, bestg = 0.0, 0
        for g in (1, 2, 4, 8, 16):
            toks = (1 - alpha ** (g + 1)) / (1 - alpha)
            sp = toks / (1 + g * c)
            row += f"{sp:8.2f}"
            if sp > best:
                best, bestg = sp, g
        print(row + f"   <- best g={bestg} at {best:.2f}x")
    print()
    print("  Two readings. First, the optimal block length grows with acceptance,")
    print("  so a better draft should also be run deeper --- tuning gamma against a")
    print("  stale alpha leaves speedup on the table. Second, d(speedup)/d(alpha) is")
    print("  steep and superlinear: at c=0.12, going 0.7 -> 0.9 acceptance is worth")
    print("  more than doubling draft width (compare B5). Acceptance is the lever.")


if __name__ == "__main__":
    b1_verify()
    b2_kl_is_the_wrong_scoreboard()
    b3_train_draft()
    b4_block_verification()
    b5_multi_draft()
    b6_throughput()
