"""
Shared harness: a real transformer, trained from scratch on a real corpus.
=========================================================================

Everything in dossier v1 ran on synthetic matrices. That was the biggest
caveat in the document, and this module removes it. It provides:

  * a word-level tokenizer over a real technical-English corpus harvested
    from this repository's own content files
  * a compact but genuine GPT (pre-LN, causal attention, GELU MLP, tied
    embeddings) that actually trains and converges
  * both AdamW and Muon optimizers, so the "do Muon-trained models quantize
    better?" composition can be tested at matched loss
  * activation capture, so downstream experiments see real activation
    covariance rather than a synthetic Wishart draw

Frontier models are larger. But "learned weights with real activation
statistics" is a categorically different regime from "random matrices,"
and every identity under test here is scale-free.

Not run directly; imported by the experiment scripts. To train and cache
checkpoints:  python3 real_model.py
"""

from __future__ import annotations

import math
import os
import pathlib
import pickle
import re

import torch
import torch.nn as nn
import torch.nn.functional as F

torch.manual_seed(20260726)

SCRATCH = pathlib.Path(
    os.environ.get("AI_SUBSTRATE_CACHE", "/tmp/ai-substrates-cache")
)
SCRATCH.mkdir(parents=True, exist_ok=True)

VOCAB_SIZE = 8192
BLOCK = 128


# ─────────────────────────────────────────────────────────────────────────────
# Corpus + tokenizer
# ─────────────────────────────────────────────────────────────────────────────

_FIELD = re.compile(
    r"(?:definition|explanation|realWorld|significance|example|question|hint"
    r"|applications|constants|description|tagline|funFact)\s*:\s*"
    r"(`([^`]*)`|'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\")",
    re.S,
)

_WORD = re.compile(r"[A-Za-z]+|[0-9]+|[^\sA-Za-z0-9]")


def build_corpus(repo_root: pathlib.Path) -> str:
    """Harvest human-written technical prose from the repo's content files."""
    texts: list[str] = []
    for p in list((repo_root / "src").rglob("*.ts")) + list(
        (repo_root / "docs").rglob("*.md")
    ):
        try:
            s = p.read_text(errors="ignore")
        except OSError:
            continue
        if p.suffix == ".md":
            texts.append(s)
            continue
        for m in _FIELD.finditer(s):
            v = m.group(2) or m.group(3) or m.group(4) or ""
            v = (
                v.replace("\\'", "'")
                .replace('\\"', '"')
                .replace("\\n", " ")
                .replace("\\\\", "\\")
            )
            if len(v) > 25:
                texts.append(v)
    corpus = "\n".join(texts)
    return re.sub(r"[ \t]+", " ", corpus)


class WordTokenizer:
    """Word-level with a character fallback, so coverage stays high without
    the cost of training BPE. Vocabulary is Zipfian, as real ones are."""

    def __init__(self, corpus: str, vocab_size: int = VOCAB_SIZE):
        from collections import Counter

        toks = _WORD.findall(corpus)
        counts = Counter(toks)
        # Reserve slots for single characters so rare words degrade to
        # characters rather than collapsing into one UNK.
        chars = sorted({c for c in corpus if not c.isspace()})[:200]
        specials = ["<pad>", "<unk>"] + [f"<c:{c}>" for c in chars]
        keep = [w for w, _ in counts.most_common(vocab_size - len(specials))]
        self.itos = specials + keep
        self.stoi = {s: i for i, s in enumerate(self.itos)}
        self.vocab_size = len(self.itos)

    def encode(self, text: str) -> list[int]:
        out = []
        for t in _WORD.findall(text):
            i = self.stoi.get(t)
            if i is not None:
                out.append(i)
            else:
                for c in t:
                    out.append(self.stoi.get(f"<c:{c}>", 1))
        return out

    def decode(self, ids: list[int]) -> str:
        parts = []
        for i in ids:
            s = self.itos[i] if 0 <= i < len(self.itos) else "<unk>"
            parts.append(s[3:-1] if s.startswith("<c:") else s)
        return " ".join(parts)


# ─────────────────────────────────────────────────────────────────────────────
# Model
# ─────────────────────────────────────────────────────────────────────────────

class CausalSelfAttention(nn.Module):
    def __init__(self, d_model: int, n_head: int):
        super().__init__()
        assert d_model % n_head == 0
        self.n_head = n_head
        self.d_head = d_model // n_head
        self.q = nn.Linear(d_model, d_model, bias=False)
        self.k = nn.Linear(d_model, d_model, bias=False)
        self.v = nn.Linear(d_model, d_model, bias=False)
        self.proj = nn.Linear(d_model, d_model, bias=False)
        # Captured for downstream experiments (KV sensitivity, Hessians).
        self.last_k = None
        self.last_v = None
        self.capture = False

    def forward(self, x):
        B, T, C = x.shape
        q = self.q(x).view(B, T, self.n_head, self.d_head).transpose(1, 2)
        k = self.k(x).view(B, T, self.n_head, self.d_head).transpose(1, 2)
        v = self.v(x).view(B, T, self.n_head, self.d_head).transpose(1, 2)
        if self.capture:
            self.last_k, self.last_v = k.detach(), v.detach()
        y = F.scaled_dot_product_attention(q, k, v, is_causal=True)
        y = y.transpose(1, 2).contiguous().view(B, T, C)
        return self.proj(y)


class Block(nn.Module):
    def __init__(self, d_model: int, n_head: int, mlp_mult: int = 4):
        super().__init__()
        self.ln1 = nn.LayerNorm(d_model)
        self.attn = CausalSelfAttention(d_model, n_head)
        self.ln2 = nn.LayerNorm(d_model)
        self.fc = nn.Linear(d_model, mlp_mult * d_model, bias=False)
        self.fc_out = nn.Linear(mlp_mult * d_model, d_model, bias=False)

    def forward(self, x):
        x = x + self.attn(self.ln1(x))
        x = x + self.fc_out(F.gelu(self.fc(self.ln2(x))))
        return x


class TinyGPT(nn.Module):
    def __init__(self, vocab_size, d_model=192, n_head=6, n_layer=4, block=BLOCK):
        super().__init__()
        self.block_size = block
        self.tok = nn.Embedding(vocab_size, d_model)
        self.pos = nn.Embedding(block, d_model)
        self.blocks = nn.ModuleList(
            [Block(d_model, n_head) for _ in range(n_layer)]
        )
        self.ln_f = nn.LayerNorm(d_model)
        self.head = nn.Linear(d_model, vocab_size, bias=False)
        self.head.weight = self.tok.weight  # tied, as in real LMs
        self.apply(self._init)

    @staticmethod
    def _init(m):
        if isinstance(m, nn.Linear):
            nn.init.normal_(m.weight, std=0.02)
        elif isinstance(m, nn.Embedding):
            nn.init.normal_(m.weight, std=0.02)

    def forward(self, idx, targets=None, capture=False):
        B, T = idx.shape
        for b in self.blocks:
            b.attn.capture = capture
        x = self.tok(idx) + self.pos(torch.arange(T, device=idx.device))[None]
        for b in self.blocks:
            x = b(x)
        x = self.ln_f(x)
        logits = self.head(x)
        loss = None
        if targets is not None:
            loss = F.cross_entropy(
                logits.view(-1, logits.size(-1)), targets.reshape(-1)
            )
        return logits, loss

    def linear_layers(self):
        """(name, module) for every 2D weight worth quantizing."""
        out = []
        for i, b in enumerate(self.blocks):
            out += [
                (f"block{i}.attn.q", b.attn.q),
                (f"block{i}.attn.k", b.attn.k),
                (f"block{i}.attn.v", b.attn.v),
                (f"block{i}.attn.proj", b.attn.proj),
                (f"block{i}.mlp.fc", b.fc),
                (f"block{i}.mlp.fc_out", b.fc_out),
            ]
        return out


# ─────────────────────────────────────────────────────────────────────────────
# Muon: steepest descent under a spectral-norm trust region.
#
# The update direction is UV^T for gradient G = U S V^T -- keep the gradient's
# directions, discard its singular values. Newton-Schulz gives a cheap
# approximate orthogonalization without ever forming an SVD.
# ─────────────────────────────────────────────────────────────────────────────

def newton_schulz(G: torch.Tensor, steps: int = 5, eps: float = 1e-7):
    """Approximate G -> UV^T. Quintic iteration; coefficients from Jordan's
    Muon, chosen to push singular values toward 1 fast rather than to
    converge exactly."""
    a, b, c = 3.4445, -4.7750, 2.0315
    X = G.float()
    transposed = X.size(0) > X.size(1)
    if transposed:
        X = X.T
    X = X / (X.norm() + eps)
    for _ in range(steps):
        A = X @ X.T
        B = b * A + c * A @ A
        X = a * X + B @ X
    return (X.T if transposed else X).to(G.dtype)


class Muon(torch.optim.Optimizer):
    """Muon on 2D hidden weights; the caller keeps embeddings/norms on AdamW,
    which is how Muon is used in practice."""

    def __init__(self, params, lr=0.02, momentum=0.95, nesterov=True, ns_steps=5):
        super().__init__(
            list(params),
            dict(lr=lr, momentum=momentum, nesterov=nesterov, ns_steps=ns_steps),
        )

    @torch.no_grad()
    def step(self):
        for group in self.param_groups:
            for p in group["params"]:
                if p.grad is None:
                    continue
                st = self.state[p]
                buf = st.get("mom")
                if buf is None:
                    buf = st["mom"] = torch.zeros_like(p.grad)
                buf.mul_(group["momentum"]).add_(p.grad)
                g = (
                    p.grad.add(buf, alpha=group["momentum"])
                    if group["nesterov"]
                    else buf
                )
                upd = newton_schulz(g, steps=group["ns_steps"])
                # Scale so the update's RMS is comparable across shapes,
                # which is what makes the learning rate width-independent.
                scale = math.sqrt(max(1.0, p.size(0) / p.size(1)))
                p.add_(upd, alpha=-group["lr"] * scale)


# ─────────────────────────────────────────────────────────────────────────────
# Training
# ─────────────────────────────────────────────────────────────────────────────

def get_batch(data, batch_size, block, device="cpu", generator=None):
    ix = torch.randint(len(data) - block - 1, (batch_size,), generator=generator)
    x = torch.stack([data[i : i + block] for i in ix]).to(device)
    y = torch.stack([data[i + 1 : i + 1 + block] for i in ix]).to(device)
    return x, y


@torch.no_grad()
def evaluate(model, data, batch_size=16, iters=20, seed=1234):
    model.eval()
    g = torch.Generator().manual_seed(seed)
    tot = 0.0
    for _ in range(iters):
        x, y = get_batch(data, batch_size, model.block_size, generator=g)
        tot += model(x, y)[1].item()
    model.train()
    return tot / iters


def train(
    model,
    train_data,
    val_data,
    optimizer_name="adamw",
    steps=1500,
    batch_size=32,
    lr=None,
    log_every=250,
    seed=0,
):
    """Returns a history of (step, val_loss)."""
    torch.manual_seed(seed)
    hidden, other = [], []
    for n, p in model.named_parameters():
        if p.ndim == 2 and "tok" not in n and "pos" not in n:
            hidden.append(p)
        else:
            other.append(p)

    if optimizer_name == "adamw":
        opt = torch.optim.AdamW(
            [
                {"params": hidden, "lr": lr or 3e-3},
                {"params": other, "lr": lr or 3e-3},
            ],
            betas=(0.9, 0.95),
            weight_decay=0.01,
        )
        opts = [opt]
    elif optimizer_name == "muon":
        # Muon on hidden 2D weights, AdamW on embeddings/norms.
        opts = [
            Muon(hidden, lr=lr or 0.02, momentum=0.95),
            torch.optim.AdamW(other, lr=3e-3, betas=(0.9, 0.95), weight_decay=0.01),
        ]
    else:
        raise ValueError(optimizer_name)

    g = torch.Generator().manual_seed(seed + 1)
    hist = []
    model.train()
    for step in range(1, steps + 1):
        x, y = get_batch(train_data, batch_size, model.block_size, generator=g)
        _, loss = model(x, y)
        for o in opts:
            o.zero_grad(set_to_none=True)
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        for o in opts:
            o.step()
        if step % log_every == 0 or step == steps:
            vl = evaluate(model, val_data)
            hist.append((step, vl))
            print(f"    [{optimizer_name}] step {step:5d}  val loss {vl:.4f}")
    return hist


# ─────────────────────────────────────────────────────────────────────────────
# Cached artifacts
# ─────────────────────────────────────────────────────────────────────────────

def repo_root() -> pathlib.Path:
    return pathlib.Path(__file__).resolve().parents[2]


def load_data():
    cache = SCRATCH / "data.pkl"
    if cache.exists():
        with open(cache, "rb") as f:
            tok, tr, va = pickle.load(f)
        return tok, tr, va
    corpus = build_corpus(repo_root())
    tok = WordTokenizer(corpus)
    ids = torch.tensor(tok.encode(corpus), dtype=torch.long)
    n = int(0.9 * len(ids))
    tr, va = ids[:n], ids[n:]
    with open(cache, "wb") as f:
        pickle.dump((tok, tr, va), f)
    return tok, tr, va


CONFIGS = {
    # name:      (d_model, n_head, n_layer)
    "target": (192, 6, 4),
    "draft": (96, 4, 2),
}


def get_model(name="target", optimizer_name="adamw", steps=1500, force=False):
    """Train (or load) a checkpoint. Cached by (name, optimizer, steps)."""
    tok, tr, va = load_data()
    ckpt = SCRATCH / f"{name}_{optimizer_name}_{steps}.pt"
    d, h, L = CONFIGS[name]
    model = TinyGPT(tok.vocab_size, d_model=d, n_head=h, n_layer=L)
    if ckpt.exists() and not force:
        model.load_state_dict(torch.load(ckpt, weights_only=True))
        model.eval()
        return model, tok, tr, va, None
    n_params = sum(p.numel() for p in model.parameters())
    print(f"  training '{name}' ({optimizer_name}): d={d} heads={h} layers={L} "
          f"params={n_params/1e6:.2f}M")
    hist = train(model, tr, va, optimizer_name=optimizer_name, steps=steps)
    torch.save(model.state_dict(), ckpt)
    model.eval()
    return model, tok, tr, va, hist


@torch.no_grad()
def capture_activations(model, data, n_batches=8, batch_size=8, seed=7):
    """Real activation matrices, keyed by layer name: X with shape (d_in, N).

    These are the inputs each linear layer actually sees, which is what the
    layerwise Hessian H = 2 X X^T is built from.
    """
    acts: dict[str, list[torch.Tensor]] = {}
    handles = []

    def mk(name):
        def hook(mod, inp, out):
            acts.setdefault(name, []).append(
                inp[0].detach().reshape(-1, inp[0].shape[-1])
            )
        return hook

    for name, mod in model.linear_layers():
        handles.append(mod.register_forward_hook(mk(name)))

    g = torch.Generator().manual_seed(seed)
    for _ in range(n_batches):
        x, y = get_batch(data, batch_size, model.block_size, generator=g)
        model(x, y, capture=True)

    for h in handles:
        h.remove()
    return {k: torch.cat(v, 0).T.contiguous() for k, v in acts.items()}


if __name__ == "__main__":
    tok, tr, va = load_data()
    print(f"corpus: vocab={tok.vocab_size} train_tokens={len(tr)} val_tokens={len(va)}")
    unk = (tr == 1).float().mean().item()
    print(f"UNK rate: {unk*100:.2f}%")
    for name in ("target", "draft"):
        m, *_ , hist = get_model(name, "adamw", steps=1500)
        print(f"  {name}: final val loss {evaluate(m, va):.4f}")
