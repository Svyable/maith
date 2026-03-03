import type { Question } from "../types";

export const sota2026Questions: Question[] = [
  // 1. AgentSkiller: Scaling Generalist Agents
  {
    id: 20260001,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "In AgentSkiller (arXiv:2602.09372), why does a DAG-based architecture with explicit state transitions enable reliable, privacy-safe data synthesis for agent training?",
    options: [
      "Deterministic state transitions $s_{t+1} = T(a_t, s_t)$ make trajectories verifiable and reproducible without real user data, and the DAG structure prevents cyclic reward hacking",
      "DAGs compress the action space, reducing GPU memory",
      "Explicit transitions allow the agent to skip failed steps automatically",
      "The DAG replaces the need for a reward signal entirely",
    ],
    correctIndex: 0,
    explanation:
      "The DAG-based environment uses deterministic transitions $P(\\text{success}) = \\prod_{t=1}^T \\mathbb{I}[s_{t+1} = T(a_t, s_t)]$, meaning every trajectory can be validated by replaying actions against the transition function. This eliminates the need for real user data (privacy-safe) and prevents the agent from exploiting cyclic paths to inflate rewards.",
    realWorld:
      "Based on [arXiv:2602.09372](https://arxiv.org/abs/2602.09372), AgentSkiller allows enterprise leaders like Salesforce to train automation agents without ever touching sensitive customer logs.",
    hint: 'Think about what "verifiable" means: if you know the transition function, you can check any trajectory without running it in the real world.',
  },
  // 2. ALMA: Meta-Learning Agentic Memory
  {
    id: 20260002,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "In ALMA (arXiv:2602.07755), how does expressing memory as searchable executable code allow it to outperform fixed human-designed memory modules across diverse domains?",
    options: [
      "The meta-agent explores a combinatorial space of memory schemas, retrieval logic, and update rules that no single hand-designed module can cover, adapting the memory architecture per task",
      "Executable code runs faster than neural memory modules",
      "Code-based memory eliminates the need for gradient-based optimisation",
      "It allows the memory to be stored in a SQL database instead of tensors",
    ],
    correctIndex: 0,
    explanation:
      "ALMA's meta-RL objective $J(\\pi_m) = \\mathbb{E}_{\\tau \\sim \\pi_m}[R(\\tau)]$ optimises over the space of executable memory designs. This allows the search to discover read/write patterns and retrieval heuristics tailored to each specific domain.",
    realWorld:
      "As detailed in [arXiv:2602.07755](https://arxiv.org/abs/2602.07755), ALMA-style adaptive memory allows personal AI to learn that a doctor needs patient histories while a dev needs code patterns—automatically.",
    hint: "Fixed designs are one point in design space; code search explores the entire space.",
  },
  // 3. LLaDA2.1: Token Editing for Diffusion LMs
  {
    id: 20260003,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "In LLaDA2.1 (arXiv:2602.08676), why does lowering the Mask-to-Token (M2T) threshold in Speedy Mode require Token-to-Token (T2T) editing to maintain generation quality?",
    options: [
      "Lower thresholds accept noisier M2T predictions for speed, and T2T editing corrects residual errors by refining token-level details — a quality/speed tradeoff managed by a two-stage pipeline",
      "Lower thresholds reduce the vocabulary size, requiring T2T to map back to full vocabulary",
      "T2T is needed to add punctuation that M2T cannot generate",
      "Lower thresholds cause the model to output embeddings instead of tokens",
    ],
    correctIndex: 0,
    explanation:
      'In Speedy Mode, the M2T acceptance threshold is lowered to increase generation speed. The T2T editing stage then acts as a "cleanup" pass, refining the noisy tokens to maintain SOTA quality at 800+ TPS.',
    realWorld:
      "According to [arXiv:2602.08676](https://arxiv.org/abs/2602.08676), LLaDA2.1 makes diffusion-based code generation fast enough for real-time pair programming, rivaling autoregressive speed.",
    hint: "Faster = noisier initial predictions. What cleans them up?",
  },
  // 4. InftyThink+: Infinite-Horizon Reasoning
  {
    id: 20260004,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'What "lost-in-the-middle" problem does InftyThink+ (arXiv:2602.06960) solve, and how does RL-based summarisation help?',
    options: [
      "Long chains of thought cause the model to lose track of early reasoning steps (attention dilution); RL learns when to summarise and resume, keeping the effective context focused",
      "The model forgets its system prompt after 1000 tokens; summarisation restates it",
      "Middle layers of the transformer become inactive; summarisation reactivates them",
      "The model generates contradictory statements; summarisation removes contradictions",
    ],
    correctIndex: 0,
    explanation:
      'InftyThink+ uses RL to decide when to "compress" its reasoning into a summary. This prevents attention dilution in massive chains of thought, allowing for effectively infinite-horizon logical processing.',
    realWorld:
      "Referencing [arXiv:2602.06960](https://arxiv.org/abs/2602.06960), this mimics how human mathematicians summarize sub-proofs before moving to the next stage of a complex problem.",
    hint: "Attention is finite. What happens to tokens from 5000 steps ago in a 10000-token chain of thought?",
  },
  // 5. EnvScaler: Scaling Tool Environments
  {
    id: 20260005,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "How does EnvScaler address data scarcity for long-horizon agent training through procedural environment generation?",
    options: [
      "It parameterically generates massive tool-interactive environments with complexity $C = |D| \\times |T| \\times H$ (domains × tools × horizons), providing unlimited diverse training scenarios",
      "It downloads real user interaction logs from production systems",
      "It uses GANs to generate synthetic screenshots of tool interfaces",
      "It simplifies all tasks to single-step interactions to avoid data issues",
    ],
    correctIndex: 0,
    explanation:
      "EnvScaler parameterises world generation via domain ontologies, creating a combinatorial explosion of training data ($|D| \\times |T| \\times H$) that allows agents to practice millions of unique tool-use scenarios.",
    realWorld:
      "EnvScaler (part of the [AgentSkiller Framework](https://arxiv.org/abs/2602.09372)) is the key to training agents that don't break when they encounter a new UI or API.",
    hint: "The product $|D| \\times |T| \\times H$ grows combinatorially — how many unique environments can you generate?",
  },
  // 6. Block Diffusion Scaling (LLaDA2.0)
  {
    id: 20260006,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "Why is parallel block diffusion faster than autoregressive generation for text, and what is the key tradeoff?",
    options: [
      "Multiple token positions are denoised simultaneously in parallel ($x_{t-1}$ for a block), trading sequential dependency for parallelism; the tradeoff is potential inter-token incoherence",
      "Block diffusion uses fewer parameters per token",
      "It eliminates the need for a tokeniser",
      "Autoregressive models cannot use GPU tensor cores",
    ],
    correctIndex: 0,
    explanation:
      'Standard models are $O(n)$ because they generate token-by-token. Block diffusion is $O(T_{diff})$ because it denoises the whole block at once, though it risks local "hallucinations" between tokens in the same block.',
    realWorld:
      'High-speed diffusion LMs (see [LLaDA](https://arxiv.org/abs/2602.08676)) enable "instant" document drafting where pages of text appear in seconds, not minutes.',
    hint: "Autoregressive = one token at a time. Diffusion = all tokens at once.",
  },
  // 7. Statelessness Bottleneck in Foundation Models
  {
    id: 20260007,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'Why does "statelessness" bottleneck foundation models in continual learning, and how does meta-learned memory (ALMA-style) address this?',
    options: [
      "Without persistent memory, each session starts from scratch — the model cannot accumulate task-specific knowledge over time; meta-learned memory modules maintain and update state across episodes",
      "Stateless models cannot process sequences longer than their context window",
      "Statelessness prevents the model from using attention mechanisms",
      "It causes the model to forget its pre-training data after fine-tuning",
    ],
    correctIndex: 0,
    explanation:
      'LLMs usually "forget" everything once the context window is cleared. ALMA-style memory gives the agent a "hard drive" that it learns to read and write to, allowing it to improve at its job over months.',
    realWorld:
      'While current bots are "goldfish," [ALMA-style modules](https://arxiv.org/abs/2602.07755) turn them into "elephants" that remember your team\'s specific jargon and workflows.',
    hint: "What's the difference between a goldfish and an elephant?",
  },
  // 8. RL for Diffusion LLMs (RLHF for dLLMs)
  {
    id: 20260008,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "What diffusion-specific challenges does RL (PPO) address when aligning diffusion language models like LLaDA2.1, compared to standard autoregressive RLHF?",
    options: [
      "Diffusion models denoise all tokens simultaneously, making credit assignment across positions harder; PPO's clipped objective $L^{CLIP}$ stabilises training despite the non-sequential generation process",
      "Diffusion models have no logits, so PPO must be replaced with evolutionary strategies",
      "The noise schedule conflicts with the KL penalty in standard RLHF",
      "Diffusion models cannot generate text, only images, so RL must bridge modalities",
    ],
    correctIndex: 0,
    explanation:
      'In diffusion, tokens aren\'t generated one-by-one, so standard reward attribution breaks. PPO-based alignment for dLLMs ensures the model learns which denoising steps actually led to a "good" final document.',
    realWorld:
      'Aligning diffusion LMs (see [LLaDA 2.1](https://arxiv.org/abs/2602.08676)) allows for AI writing tools that "sculpt" a draft into a finished piece rather than just predicting the next word.',
    hint: "Autoregressive = clear token-by-token credit. Diffusion = all tokens change simultaneously.",
  },
  // 9. Cross-Domain Agent Fusion
  {
    id: 20260009,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "In AgentSkiller's cross-domain fusion, how do Person-Centric Entity Graphs ensure semantic consistency when linking services?",
    options: [
      "Entity embeddings capture semantic meaning, so the learned link probability only connects entities with compatible roles/types across domains, preventing nonsensical cross-domain fusions",
      "The sigmoid function clips probabilities to prevent overflow",
      "Entity graphs replace the need for API documentation",
      "Person-centric means only human entities can be linked, simplifying the problem",
    ],
    correctIndex: 0,
    explanation:
      'The fusion logic uses embeddings to realize that a "Customer ID" in one app and a "Client Profile" in another represent the same entity, allowing the agent to move data safely between them.',
    realWorld:
      'Techniques from [arXiv:2602.09372](https://arxiv.org/abs/2602.09372) allow an agent to sync your flight booking with your office calendar without getting confused about who the "attendee" is.',
    hint: "The embeddings encode *meaning*. Do these two entities make sense together?",
  },
  // 10. Iterative Reasoning Optimisation (Quadratic Cost)
  {
    id: 20260010,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "Why does long chain-of-thought reasoning have quadratic cost in standard transformers, and how does iterative reasoning with summarisation fix this?",
    options: [
      "Self-attention is $O(n^2)$ in sequence length; iterative summarisation resets the context to a fixed-size summary, making each iteration $O(k^2)$ for summary size $k \\ll n$",
      "The cost is quadratic because each token requires two forward passes",
      "Quadratic cost comes from the MLP layers, not attention",
      "Summarisation replaces attention with convolution, which is linear",
    ],
    correctIndex: 0,
    explanation:
      "Self-attention scales quadratically. By breaking reasoning into chunks and summarising, models like InftyThink+ keep the active context small, avoiding the massive $O(n^2)$ slowdown of long reasoning chains.",
    realWorld:
      'Iterative reasoning ([InftyThink+](https://arxiv.org/abs/2602.06960)) is what will make "deep thinking" AI affordable for daily use instead of costing \$1.00 per query.',
    hint: "$n^2$ vs $m \\times k^2$. Which is smaller?",
  },
  {
    id: 20260011,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'In DeepMind\'s Unified Latents (arXiv:2602.17270), how does the "Information Density Seesaw" get resolved to achieve a SOTA 1.3 FVD on Kinetics-600?',
    options: [
      "By linking the deterministic encoder's fixed output noise to the diffusion prior's minimum noise level, providing a mathematically tight upper bound on latent bitrate",
      "By replacing the diffusion decoder with a GAN-based refiner to reduce high-frequency artifacts",
      "By using a variable noise schedule that allows the model to skip the first 50 denoising steps",
      "By training the encoder and decoder on pixel-space losses while the prior uses latent-space KL divergence",
    ],
    correctIndex: 0,
    explanation:
      "Unified Latents (UL) eliminates heuristic tuning by jointly regularizing the latent space with a diffusion prior. By using a fixed-noise information bound ($log-SNR$ of $\\lambda(0)=5$), it creates a principled reconstruction-modeling tradeoff that allows larger base models to effectively utilize higher bitrate latents without instability.",
    realWorld:
      "According to [arXiv:2602.17270](https://arxiv.org/abs/2602.17270), UL enables high-resolution video generation with significantly lower compute tax, making real-time 4K synthesis commercially viable.",
    hint: 'Think about how "fixed noise" acts as a physical cap on how much data can fit in the "bottle" of the latent space.',
  },
  // 12. ResearchGym: The Capability-Reliability Gap
  {
    id: 20260012,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "According to ResearchGym (arXiv:2602.15112), what is the primary reason frontier agents like GPT-5 struggle with autonomous AI research despite their high reasoning scores?",
    options: [
      'A "capability-reliability gap" where agents propose novel hypotheses but fail at long-horizon resource management and coordination of parallel experiments',
      "Insufficient context windows that prevent the agent from reading more than three papers at once",
      "The lack of access to GPU clusters for running synthetic experiments",
      'A "knowledge cutoff" that prevents agents from understanding papers published after 2025',
    ],
    correctIndex: 0,
    explanation:
      'ResearchGym identifies a sharp gap: while agents can occasionally surpass human SOTA (e.g., on ICML spotlight tasks), they are unreliable, completing only ~26.5% of sub-tasks. Failure modes include "impatience" and "overconfidence in weak hypotheses" during the long-horizon loop of hypothesis testing.',
    realWorld:
      'As detailed in [arXiv:2602.15112](https://arxiv.org/abs/2602.15112), this benchmark suggests that the next frontier in AI isn\'t better "intelligence," but better "stamina" and "project management" for autonomous discovery.',
    hint: 'It\'s not about how smart the agent is in one turn, but how it manages its "plan" over a thousand turns.',
  },
  // 13. HalluHard: Multi-Turn Hallucination Cascades
  {
    id: 20260013,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "How does the HalluHard benchmark (arXiv:2602.01031) differentiate itself from previous hallucination metrics like TruthfulQA?",
    options: [
      "It focuses on multi-turn dialogues where early minor errors cascade into massive factual hallucinations that are plausible-sounding but completely ungrounded",
      "It only tests the model on its ability to recite historical dates correctly",
      "It uses a static list of 100 multiple-choice questions with fixed answers",
      "It measures hallucination based on the sentiment of the model's response",
    ],
    correctIndex: 0,
    explanation:
      "HalluHard uses a judging pipeline that fetches and parses full-text PDFs to check inline citations. It reveals that even the strongest models (Opus-4.5) have a ~30% hallucination rate in complex multi-turn scenarios involving legal and medical research.",
    realWorld:
      '[arXiv:2602.01031](https://arxiv.org/abs/2602.01031) highlights that "groundedness" is the biggest hurdle for AI lawyers and doctors, where one wrong citation in Turn 1 ruins the entire Turn 10 conclusion.',
    hint: 'Think about a "lie" that grows bigger every time someone asks a follow-up question.',
  },
  // 14. CIR: Decoupling Logic from Math
  {
    id: 20260014,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "In the R2C framework (arXiv:2602.02029), how does the Canonical Intermediate Representation (CIR) improve optimization problem solving?",
    options: [
      "It decouples operational rule logic from mathematical instantiation by using constraint archetypes and modeling paradigms",
      "It converts all natural language into Python code which is then executed by a compiler",
      "It replaces the LLM with a symbolic solver for all reasoning steps",
      "It uses a vector database to store every math problem ever solved by humans",
    ],
    correctIndex: 0,
    explanation:
      'CIR acts as a "bridge" or schema. Instead of the LLM jumping straight to math (which leads to errors), it first maps rules to "constraint archetypes." This modularity allows for 47.2% accuracy on complex operational benchmarks where standard GPT-5-level models fail.',
    realWorld:
      "Based on [arXiv:2602.02029](https://arxiv.org/abs/2602.02029), CIR is the blueprint for the next generation of logistics and supply chain AIs that must handle thousands of conflicting business rules.",
    hint: 'If you can\'t solve the math yet, categorize the "rules" first. What is the middle step?',
  },
  // 15. First Proof: Preventing Data Contamination
  {
    id: 20260015,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'Why did the authors of "First Proof" (arXiv:2602.05192) choose to encrypt the answers to their research-level math questions for a short period?',
    options: [
      'To prevent the questions and answers from being ingested by LLM training crawlers (data contamination), ensuring a true "zero-shot" evaluation',
      "Because the researchers themselves hadn't figured out the answers yet",
      "To comply with international copyright laws regarding mathematical theorems",
      'To create a "pay-to-play" model for AI companies wanting to test their models',
    ],
    correctIndex: 0,
    explanation:
      'By keeping answers encrypted, researchers (including Fields Medalist Martin Hairer) ensure that any model solving them is actually "reasoning" rather than "reciting" from its training data. This is essential for evaluating "Frontier Reasoners" in 2026.',
    realWorld:
      "The [First Proof paper](https://arxiv.org/abs/2602.05192) represents the peak of AI evaluation, where models are tested on math that has never been seen on the public internet.",
    hint: "If a student has the answer key in their pocket, is it a fair test?",
  },
  // 16. International AI Safety Report 2026
  {
    id: 20260016,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'The "International AI Safety Report 2026" (arXiv:2602.21012), led by Yoshua Bengio, identifies which of these as a primary "Emerging Risk"?',
    options: [
      'Systemic destabilization caused by autonomous "agentic swarms" executing high-frequency financial or social manipulations',
      "The risk of AI models running out of electricity due to inefficient cooling",
      "A shortage of human-labeled data leading to model collapse",
      "The possibility of AI models refusing to answer harmless questions",
    ],
    correctIndex: 0,
    explanation:
      'The 2026 report, mandated by the Bletchley summit nations, focuses on "agentic risks"—situations where autonomous systems, once deployed, can manipulate systems faster than human oversight can intervene.',
    realWorld:
      'Referencing [arXiv:2602.21012](https://arxiv.org/abs/2602.21012), this report provides the scientific baseline for the 2026 Global AI Treaty, shifting focus from "chatbots" to "agents."',
    hint: "It's not about the AI making a mistake; it's about the AI taking a thousand actions before we notice.",
  },
  // 17. Empirical-MCTS: Dual Process Evolution
  {
    id: 20260017,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'In Empirical-MCTS (arXiv:2602.04248), how does "Dual Process" evolution enable agents to improve over time without manual fine-tuning?',
    options: [
      'By using a fast "intuitive" model for generation and a slow "search-based" model for evaluation, where the search results are distilled back into the fast model',
      "By running two identical models in parallel and picking the one with the higher temperature",
      "By alternating between training on text and training on images every 24 hours",
      "By allowing the user to vote on every single response generated by the agent",
    ],
    correctIndex: 0,
    explanation:
      'This mirrors the human "System 1 vs System 2" thinking. The agent uses MCTS (Monte Carlo Tree Search) to find "correct" paths, and then uses those paths to autonomously update its own policy (System 1), leading to "Continuous Agent Evolution."',
    realWorld:
      'Systems like [Empirical-MCTS](https://arxiv.org/abs/2602.04248) power 2026 agents that get "smarter" the more they work on a specific task, essentially training themselves on the job.',
    hint: 'Think: "Practice makes perfect." The model practices with search, then memorizes the results.',
  },
  // 18. LogicGraph: Multi-Path Reasoning
  {
    id: 20260018,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "What does the LogicGraph benchmark (arXiv:2602.21044) measure that traditional benchmarks like GSM8K miss?",
    options: [
      "Multi-path logical consistency: the ability of a model to reach the same correct conclusion through different starting premises or reasoning trajectories",
      "The speed at which a model can calculate basic arithmetic",
      "How many words a model can generate in under 5 seconds",
      "Whether a model can identify the main character in a short story",
    ],
    correctIndex: 0,
    explanation:
      'LogicGraph tests if a model is "brittle." Brittle models might solve a problem one way but fail if a different logical path is required. SOTA 2026 models like Gemini 3 and Claude 4.5 are tested on their "Graph Consistency" across these paths.',
    realWorld:
      'As seen in [LogicGraph](https://arxiv.org/abs/2602.21044), high-reliability AI must be able to "cross-check" its own logic, ensuring there are no contradictions in its internal reasoning.',
    hint: "If all roads lead to Rome, a smart traveler should be able to take any of them.",
  },
  // 19. Fast KV Compaction (Attention Matching)
  {
    id: 20260019,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'How does "Attention Matching" solve the memory bottleneck in long-context 2026 models (e.g., 10M+ tokens)?',
    options: [
      "It treats memory compaction as a mathematical puzzle solved directly in latent space, rather than using slow iterative training to condense information",
      "It deletes every second token in the Key-Value (KV) cache to save space",
      "It moves the entire memory to a slower SSD to save VRAM",
      "It requires the user to summarize their own conversation every 500 words",
    ],
    correctIndex: 0,
    explanation:
      'Attention Matching (part of the [2026 Latent Research](https://arxiv.org/abs/2602.17270) umbrella) allows models to "compress" their memory of a 10-hour video or a massive codebase into a tiny "latent puzzle" that preserves the most important attention weights.',
    realWorld:
      'This technique allows 2026 AI coding assistants to keep an entire 1-million-file repository in "active memory" without needing a \$10,000 GPU.',
    hint: 'Instead of summarizing with words, summarize with the "math of attention."',
  },
  // 20. GLM-5: Agentic Engineering
  {
    id: 20260020,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      'In the context of GLM-5 (Zhipu AI), what is the fundamental shift from "Vibe Coding" to "Agentic Engineering"?',
    options: [
      'Shifting from models that generate code snippets based on "vibes" to agents that autonomously design, test, and maintain entire software architectures end-to-end',
      "Changing the color scheme of the IDE to be more aesthetically pleasing",
      "Using voice commands instead of typing code",
      'Replacing all human engineers with a single "Vibe Manager" AI',
    ],
    correctIndex: 0,
    explanation:
      'GLM-5 represents the 2026 shift toward "Agentic Engineering," where the AI isn\'t just an autocomplete tool, but a colleague that manages the deployment pipeline, writes unit tests, and refactors code autonomously.',
    realWorld:
      "According to [2026 Industry Reports](https://arxiv.org/abs/2602.04248), Agentic Engineering has reduced the time to market for complex SaaS products by over 70% in early 2026.",
    hint: 'It\'s the difference between asking for a "cool website" and having an AI build, host, and fix that website.',
  },
];
