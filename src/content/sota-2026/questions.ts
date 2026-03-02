import type { Question } from '../types';

export const sota2026Questions: Question[] = [
  // 1. AgentSkiller: Scaling Generalist Agents
  {
    id: 491001,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'In AgentSkiller (arXiv:2602.09372), why does a DAG-based architecture with explicit state transitions enable reliable, privacy-safe data synthesis for agent training?',
    options: [
      'Deterministic state transitions $s_{t+1} = T(a_t, s_t)$ make trajectories verifiable and reproducible without real user data, and the DAG structure prevents cyclic reward hacking',
      'DAGs compress the action space, reducing GPU memory',
      'Explicit transitions allow the agent to skip failed steps automatically',
      'The DAG replaces the need for a reward signal entirely',
    ],
    correctIndex: 0,
    explanation: 'The DAG-based environment uses deterministic transitions $P(\\text{success}) = \\prod_{t=1}^T \\mathbb{I}[s_{t+1} = T(a_t, s_t)]$, meaning every trajectory can be validated by replaying actions against the transition function. This eliminates the need for real user data (privacy-safe) and prevents the agent from exploiting cyclic paths to inflate rewards. The explicit structure also enables automated quality filtering of synthesized training data.',
    realWorld: 'AgentSkiller enables companies like Salesforce and Microsoft to train tool-using AI agents (CRM automation, code assistants) without exposing customer data during training.',
    hint: 'Think about what "verifiable" means: if you know the transition function, you can check any trajectory without running it in the real world.',
  },
  // 2. ALMA: Meta-Learning Agentic Memory
  {
    id: 491002,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'In ALMA (arXiv:2602.07755), how does expressing memory as searchable executable code allow it to outperform fixed human-designed memory modules across diverse domains?',
    options: [
      'The meta-agent explores a combinatorial space of memory schemas, retrieval logic, and update rules that no single hand-designed module can cover, adapting the memory architecture per task',
      'Executable code runs faster than neural memory modules',
      'Code-based memory eliminates the need for gradient-based optimisation',
      'It allows the memory to be stored in a SQL database instead of tensors',
    ],
    correctIndex: 0,
    explanation: 'ALMA\'s meta-RL objective $J(\\pi_m) = \\mathbb{E}_{\\tau \\sim \\pi_m}[R(\\tau)]$ optimises over the space of executable memory designs (schemas + retrieval/update code), where $\\tau$ includes memory operations over episodes. This is strictly more expressive than any fixed design: the search can discover read/write patterns, compression strategies, and retrieval heuristics tailored to each domain, composing them in ways humans would not anticipate.',
    realWorld: 'ALMA-style adaptive memory could enable personal AI assistants that automatically learn what to remember about each user — a doctor\'s assistant remembers patient histories differently than a programmer\'s assistant remembers code patterns.',
    hint: 'Fixed designs are one point in design space; code search explores the entire space.',
  },
  // 3. LLaDA2.1: Token Editing for Diffusion LMs
  {
    id: 491003,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'In LLaDA2.1 (arXiv:2602.08676), why does lowering the Mask-to-Token (M2T) threshold in Speedy Mode require Token-to-Token (T2T) editing to maintain generation quality?',
    options: [
      'Lower thresholds accept noisier M2T predictions for speed, and T2T editing corrects residual errors by refining token-level details — a quality/speed tradeoff managed by a two-stage pipeline',
      'Lower thresholds reduce the vocabulary size, requiring T2T to map back to full vocabulary',
      'T2T is needed to add punctuation that M2T cannot generate',
      'Lower thresholds cause the model to output embeddings instead of tokens',
    ],
    correctIndex: 0,
    explanation: 'In Speedy Mode, the M2T acceptance threshold $\\tau_{M2T}$ is lowered: $\\hat{x}_t = z_t$ if $\\|z_t - m_t\\| < \\tau_{M2T}$, else $\\text{edit}(z_t, m_t)$. A lower threshold accepts more M2T predictions (faster, fewer diffusion steps) but some are noisy. The T2T editing stage then refines these token-level errors, achieving 800+ TPS on coding benchmarks while preserving quality. It\'s a principled speed-quality tradeoff where two stages complement each other.',
    realWorld: 'LLaDA2.1 achieves 800+ tokens per second on coding benchmarks — fast enough for real-time pair programming, making diffusion-based code generation competitive with autoregressive models like GPT-4.',
    hint: 'Faster = noisier initial predictions. What cleans them up?',
  },
  // 4. InftyThink+: Infinite-Horizon Reasoning
  {
    id: 491004,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'What "lost-in-the-middle" problem does InftyThink+ (arXiv:2602.06960) solve, and how does RL-based summarisation help?',
    options: [
      'Long chains of thought cause the model to lose track of early reasoning steps (attention dilution); RL learns when to summarise and resume, keeping the effective context focused',
      'The model forgets its system prompt after 1000 tokens; summarisation restates it',
      'Middle layers of the transformer become inactive; summarisation reactivates them',
      'The model generates contradictory statements; summarisation removes contradictions',
    ],
    correctIndex: 0,
    explanation: 'In long CoT, transformers suffer "lost-in-the-middle" — attention over very long sequences dilutes focus on earlier reasoning steps, causing logical breaks. InftyThink+ uses RL with $a_t \\in \\{\\text{think}, \\text{summarise}\\}$ actions to learn optimal iteration boundaries. When the model summarises, it compresses prior reasoning into a compact state, then resumes with fresh context. This beats monolithic long CoT on math benchmarks while reducing latency.',
    realWorld: 'This mirrors how human mathematicians work: they don\'t hold entire proofs in working memory but periodically summarise progress and restart from the summary — InftyThink+ teaches LLMs the same strategy.',
    hint: 'Attention is finite. What happens to tokens from 5000 steps ago in a 10000-token chain of thought?',
  },
  // 5. EnvScaler: Scaling Tool Environments
  {
    id: 491005,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'How does EnvScaler address data scarcity for long-horizon agent training through procedural environment generation?',
    options: [
      'It parameterically generates massive tool-interactive environments with complexity $C = |D| \\times |T| \\times H$ (domains × tools × horizons), providing unlimited diverse training scenarios',
      'It downloads real user interaction logs from production systems',
      'It uses GANs to generate synthetic screenshots of tool interfaces',
      'It simplifies all tasks to single-step interactions to avoid data issues',
    ],
    correctIndex: 0,
    explanation: 'EnvScaler procedurally generates environments with hierarchical complexity scaling: $C = |D| \\times |T| \\times H$, where $|D|$ is the number of domains, $|T|$ the number of tools, and $H$ the horizon length. By parameterising world generation via domain ontologies and API specifications, it creates an effectively unlimited supply of diverse, multi-step training scenarios without requiring real user data.',
    realWorld: 'EnvScaler-style procedural generation is how companies like Anthropic and OpenAI create training environments for tool-using agents without access to millions of real user interaction traces.',
    hint: 'The product $|D| \\times |T| \\times H$ grows combinatorially — how many unique environments can you generate?',
  },
  // 6. Block Diffusion Scaling (LLaDA2.0)
  {
    id: 491006,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'Why is parallel block diffusion faster than autoregressive generation for text, and what is the key tradeoff?',
    options: [
      'Multiple token positions are denoised simultaneously in parallel ($x_{t-1}$ for a block), trading sequential dependency for parallelism; the tradeoff is potential inter-token incoherence',
      'Block diffusion uses fewer parameters per token',
      'It eliminates the need for a tokeniser',
      'Autoregressive models cannot use GPU tensor cores',
    ],
    correctIndex: 0,
    explanation: 'In autoregressive generation, each token depends on all previous tokens — inherently sequential ($O(n)$ serial steps). Block diffusion denoises all positions in a block simultaneously using $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}(x_t - \\frac{1-\\alpha_t}{\\sqrt{1-\\bar{\\alpha}_t}}\\epsilon_\\theta(x_t, t))$, achieving $O(T_{diff})$ steps regardless of sequence length. The tradeoff: tokens within a block are denoised without seeing each other\'s final values, risking local incoherence.',
    realWorld: 'At 100B parameters, block diffusion LMs could generate entire code files or essays in seconds rather than minutes — enabling real-time long-form content creation.',
    hint: 'Autoregressive = one token at a time. Diffusion = all tokens at once. What\'s gained and what\'s lost?',
  },
  // 7. Statelessness Bottleneck in Foundation Models
  {
    id: 491007,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'Why does "statelessness" bottleneck foundation models in continual learning, and how does meta-learned memory (ALMA-style) address this?',
    options: [
      'Without persistent memory, each session starts from scratch — the model cannot accumulate task-specific knowledge over time; meta-learned memory modules maintain and update state across episodes',
      'Stateless models cannot process sequences longer than their context window',
      'Statelessness prevents the model from using attention mechanisms',
      'It causes the model to forget its pre-training data after fine-tuning',
    ],
    correctIndex: 0,
    explanation: 'Standard LLMs are stateless: each conversation starts fresh with no accumulated experience. For continual learning (e.g., an agent improving at a job over weeks), this is a fundamental bottleneck. ALMA-style meta-learned memory provides persistent, updatable state modules — the meta-RL objective discovers memory schemas that accumulate useful information across episodes while discarding noise, enabling genuine continual improvement.',
    realWorld: 'This is why your AI assistant doesn\'t remember your preferences between sessions (stateless), while ALMA-style systems could learn your coding style, communication preferences, and domain knowledge over months.',
    hint: 'What\'s the difference between a goldfish and an elephant? Now apply that to AI agents across sessions.',
  },
  // 8. RL for Diffusion LLMs (RLHF for dLLMs)
  {
    id: 491008,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'What diffusion-specific challenges does RL (PPO) address when aligning diffusion language models like LLaDA2.1, compared to standard autoregressive RLHF?',
    options: [
      'Diffusion models denoise all tokens simultaneously, making credit assignment across positions harder; PPO\'s clipped objective $L^{CLIP}$ stabilises training despite the non-sequential generation process',
      'Diffusion models have no logits, so PPO must be replaced with evolutionary strategies',
      'The noise schedule conflicts with the KL penalty in standard RLHF',
      'Diffusion models cannot generate text, only images, so RL must bridge modalities',
    ],
    correctIndex: 0,
    explanation: 'In autoregressive RLHF, credit assignment is natural: each token has a clear sequential position and log-probability. In diffusion LMs, tokens are denoised in parallel across multiple diffusion steps — credit must be assigned across both token positions and denoising timesteps simultaneously. The PPO clipped objective $L^{CLIP} = \\mathbb{E}[\\min(r_t A_t, \\text{clip}(r_t, 1-\\epsilon, 1+\\epsilon)A_t)]$ stabilises gradients in this more complex setting, preventing destructive updates.',
    realWorld: 'Aligning diffusion LMs with human preferences could unlock a new class of AI writing tools that generate and revise entire documents holistically — like a human author who drafts, then edits, rather than writing word by word.',
    hint: 'Autoregressive = clear token-by-token credit. Diffusion = all tokens change simultaneously across steps. Where does the reward "go"?',
  },
  // 9. Cross-Domain Agent Fusion (Person-Centric Entity Graphs)
  {
    id: 491009,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'In AgentSkiller\'s cross-domain fusion, how do Person-Centric Entity Graphs with $P(\\text{link}) = \\sigma(W \\cdot [e_u; e_v])$ ensure semantic consistency when linking services?',
    options: [
      'Entity embeddings $e_u, e_v$ capture semantic meaning, so the learned link probability only connects entities with compatible roles/types across domains, preventing nonsensical cross-domain fusions',
      'The sigmoid function clips probabilities to prevent overflow',
      'Entity graphs replace the need for API documentation',
      'Person-centric means only human entities can be linked, simplifying the problem',
    ],
    correctIndex: 0,
    explanation: 'The fusion probability $P(\\text{link}) = \\sigma(W \\cdot [e_u; e_v])$ uses learned entity embeddings that encode semantic role, type, and domain context. The linear layer $W$ learns which entity pairs are semantically compatible for cross-domain linking (e.g., a "customer" in a CRM and a "payer" in a billing system). The sigmoid ensures a calibrated probability, and training on valid/invalid pairs teaches the model to reject nonsensical fusions.',
    realWorld: 'This enables AI agents that can book a flight (travel domain), charge a corporate card (finance domain), and update a calendar (productivity domain) in one coherent workflow — the entity graph ensures "traveler = cardholder = calendar owner."',
    hint: 'The embeddings encode *meaning*. Concatenation + learned weights = "do these two entities make sense together?"',
  },
  // 10. Iterative Reasoning Optimisation (Quadratic Cost)
  {
    id: 491010,
    topic: 'sota-2026',
    difficulty: 'sota',
    question: 'Why does long chain-of-thought reasoning have quadratic cost in standard transformers, and how does iterative reasoning with summarisation fix this?',
    options: [
      'Self-attention is $O(n^2)$ in sequence length; iterative summarisation resets the context to a fixed-size summary, making each iteration $O(k^2)$ for summary size $k \\ll n$',
      'The cost is quadratic because each token requires two forward passes',
      'Quadratic cost comes from the MLP layers, not attention',
      'Summarisation replaces attention with convolution, which is linear',
    ],
    correctIndex: 0,
    explanation: 'Standard transformer self-attention computes all pairwise token interactions: $O(n^2)$ for sequence length $n$. A 10,000-token CoT costs $O(10^8)$ attention operations. Iterative reasoning with summarisation breaks this into chunks: reason for $k$ tokens, summarise to a compact state, then resume. Each iteration costs $O(k^2)$ where $k \\ll n$, and the total cost scales as $O(m \\cdot k^2)$ for $m$ iterations — potentially much less than $O((mk)^2)$.',
    realWorld: 'This is why current reasoning models (o1, DeepSeek-R1) become extremely slow on hard math problems — their 50,000-token chains of thought hit quadratic attention costs. Iterative approaches could make the same quality reasoning 10-100× cheaper.',
    hint: '$n^2$ vs $m \\times k^2$ where $n = m \\times k$. Which is smaller?',
  },
];
