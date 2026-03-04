import type { Question } from "../types";

const arxiv = (id: string) => `[arXiv:${id}](https://arxiv.org/abs/${id})`;

export const sota2026Questions: Question[] = [
  // 1) AgentSkiller: Scaling Generalist Agents
  {
    id: 20260001,
    topic: "sota-2026",
    difficulty: "sota",
    question: `In AgentSkiller (${arxiv(
      "2602.09372",
    )}), why does a DAG-based architecture with explicit state transitions enable reliable, privacy-safe data synthesis for agent training?`,
    options: [
      "Deterministic state transitions $s_{t+1} = T(a_t, s_t)$ make trajectories verifiable and reproducible without real user data, and the DAG structure prevents cyclic reward hacking",
      "DAGs compress the action space, reducing GPU memory",
      "Explicit transitions allow the agent to skip failed steps automatically",
      "The DAG replaces the need for a reward signal entirely",
    ],
    correctIndex: 0,
    explanation:
      "The DAG-based environment uses deterministic transitions (e.g., $s_{t+1} = T(a_t, s_t)$), meaning every trajectory can be validated by replaying actions against the transition function. This eliminates the need for real user data (privacy-safe) and reduces opportunities for cyclic “reward loops” that agents could exploit in loopy environments.",
    realWorld: `AgentSkiller (${arxiv(
      "2602.09372",
    )}) lets teams train tool-using agents on synthetic-but-verifiable interaction traces without ingesting sensitive customer logs.`,
    hint: `Think about what "verifiable" means: if you know the transition function, you can check any trajectory offline.`,
  },

  // 2) ALMA: Meta-Learning Agentic Memory
  {
    id: 20260002,
    topic: "sota-2026",
    difficulty: "sota",
    // Add GreekToMe links (standalone $\\pi$) + mapping
    symbolLinks: {
      "\\pi": "pi",
    },
    question: `In ALMA (${arxiv(
      "2602.07755",
    )}), how does expressing memory as searchable executable code allow it to outperform fixed human-designed memory modules across diverse domains?`,
    options: [
      "The meta-agent explores a combinatorial space of memory schemas, retrieval logic, and update rules that no single hand-designed module can cover, adapting the memory architecture per task",
      "Executable code runs faster than neural memory modules",
      "Code-based memory eliminates the need for gradient-based optimisation",
      "It allows the memory to be stored in a SQL database instead of tensors",
    ],
    correctIndex: 0,
    explanation:
      "ALMA optimizes over a *space of memory designs* (schemas + retrieval/update logic) rather than committing to one fixed module. In the paper’s framing, the meta-policy $\\pi$ chooses how memory should read/write, and learning searches for designs that match the task’s structure instead of relying on a one-size-fits-all human blueprint.",
    realWorld: `As detailed in ALMA (${arxiv(
      "2602.07755",
    )}), an assistant can learn that a clinician needs longitudinal patient histories while a developer needs code patterns—by *changing the memory program itself* per domain.`,
    hint: "Fixed designs are one point in a huge design space; code search explores the whole space.",
  },

  // 3) LLaDA2.1: Token Editing for Diffusion LMs
  {
    id: 20260003,
    topic: "sota-2026",
    difficulty: "sota",
    question: `In LLaDA2.1 (${arxiv(
      "2602.08676",
    )}), why does lowering the Mask-to-Token (M2T) threshold in Speedy Mode require Token-to-Token (T2T) editing to maintain generation quality?`,
    options: [
      "Lower thresholds accept noisier M2T predictions for speed, and T2T editing corrects residual errors by refining token-level details — a quality/speed tradeoff managed by a two-stage pipeline",
      "Lower thresholds reduce the vocabulary size, requiring T2T to map back to full vocabulary",
      "T2T is needed to add punctuation that M2T cannot generate",
      "Lower thresholds cause the model to output embeddings instead of tokens",
    ],
    correctIndex: 0,
    explanation:
      "In Speedy Mode, the M2T acceptance threshold is lowered to increase throughput, which means the first-pass tokens are noisier. The T2T stage then acts as a targeted “cleanup” pass that edits token-level mistakes to recover quality while keeping the overall pipeline fast.",
    realWorld: `According to LLaDA2.1 (${arxiv(
      "2602.08676",
    )}), diffusion-style generation can be fast enough for real-time authoring if you pair a coarse fast pass with a corrective edit pass.`,
    hint: "Faster = noisier initial predictions. What stage cleans them up?",
  },

  // 4) InftyThink+: Infinite-Horizon Reasoning
  {
    id: 20260004,
    topic: "sota-2026",
    difficulty: "sota",
    question: `What "lost-in-the-middle" problem does InftyThink+ (${arxiv(
      "2602.06960",
    )}) solve, and how does RL-based summarisation help?`,
    options: [
      "Long chains of thought cause the model to lose track of early reasoning steps (attention dilution); RL learns when to summarise and resume, keeping the effective context focused",
      "The model forgets its system prompt after 1000 tokens; summarisation restates it",
      "Middle layers of the transformer become inactive; summarisation reactivates them",
      "The model generates contradictory statements; summarisation removes contradictions",
    ],
    correctIndex: 0,
    explanation:
      "InftyThink+ uses RL to decide when to compress intermediate reasoning into a summary and continue from that compact state. This addresses “attention dilution” where early-but-important details become hard to retrieve as the chain grows.",
    realWorld: `InftyThink+ (${arxiv(
      "2602.06960",
    )}) mirrors how humans write sub-lemmas and summaries to keep long proofs manageable without rereading everything.`,
    hint: "Attention is finite. What happens to tokens from 5000 steps ago in a 10k-token chain?",
  },

  // 5) EnvScaler: Scaling Tool Environments
  {
    id: 20260005,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "How does EnvScaler address data scarcity for long-horizon agent training through procedural environment generation?",
    options: [
      "It parametrically generates massive tool-interactive environments with complexity $C = |D| \\times |T| \\times H$ (domains × tools × horizons), providing unlimited diverse training scenarios",
      "It downloads real user interaction logs from production systems",
      "It uses GANs to generate synthetic screenshots of tool interfaces",
      "It simplifies all tasks to single-step interactions to avoid data issues",
    ],
    correctIndex: 0,
    explanation:
      "EnvScaler parameterizes environment generation via domain ontologies and tool specs, creating a combinatorial explosion of scenarios (often summarized as $|D| \\times |T| \\times H$). This yields effectively unlimited training diversity without requiring real user traces.",
    realWorld: `EnvScaler is described as part of the AgentSkiller framework (${arxiv(
      "2602.09372",
    )}) for training agents that generalize to novel interfaces and workflows.`,
    hint: "The product $|D| \\times |T| \\times H$ grows combinatorially — what does that imply for variety?",
  },

  // 6) Block Diffusion Scaling (LLaDA2.0 / diffusion LMs)
  {
    id: 20260006,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "Why is parallel block diffusion faster than autoregressive generation for text, and what is the key tradeoff?",
    options: [
      "Multiple token positions are denoised simultaneously in parallel (a block update), trading sequential dependency for parallelism; the tradeoff is potential inter-token incoherence",
      "Block diffusion uses fewer parameters per token",
      "It eliminates the need for a tokeniser",
      "Autoregressive models cannot use GPU tensor cores",
    ],
    correctIndex: 0,
    explanation:
      "Autoregressive decoding is inherently sequential (token-by-token), making it $O(n)$ in sequence length. Block diffusion denoises many positions in parallel across a fixed number of diffusion steps, but the price is that local coherence between simultaneously-updated tokens can be harder to guarantee without strong refinement/editing.",
    realWorld: `High-speed diffusion LMs (see LLaDA2.1 ${arxiv(
      "2602.08676",
    )}) enable “instant” drafting where large chunks appear in seconds rather than minutes.`,
    hint: "Autoregressive = one token at a time. Diffusion = many tokens at once.",
  },

  // 7) Statelessness bottleneck + ALMA-style memory
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
      "Most LLM deployments reset state when the context window clears. Meta-learned memory gives an agent a persistent store it learns to read/write, enabling accumulation of task-specific knowledge across many episodes instead of starting over each session.",
    realWorld: `ALMA-style memory (${arxiv(
      "2602.07755",
    )}) is a path toward assistants that remember your org’s conventions and workflows over weeks/months without manual prompt scaffolding.`,
    hint: "What’s the difference between having short-term context and having long-term memory?",
  },

  // 8) RL for diffusion LLMs (PPO / diffusion credit assignment)
  {
    id: 20260008,
    topic: "sota-2026",
    difficulty: "sota",
    question:
      "What diffusion-specific challenges does RL (PPO) address when aligning diffusion language models like LLaDA2.1, compared to standard autoregressive RLHF?",
    options: [
      "Diffusion models denoise all tokens simultaneously, making credit assignment across positions harder; PPO's clipped objective stabilises training despite the non-sequential generation process",
      "Diffusion models have no logits, so PPO must be replaced with evolutionary strategies",
      "The noise schedule conflicts with the KL penalty in standard RLHF",
      "Diffusion models cannot generate text, only images, so RL must bridge modalities",
    ],
    correctIndex: 0,
    explanation:
      "In diffusion generation, many token positions change together rather than being produced sequentially, which complicates reward attribution (which denoising decisions mattered?). PPO-style objectives provide stability while learning preferences over non-sequential generation dynamics.",
    realWorld: `Aligning diffusion LMs (see LLaDA2.1 ${arxiv(
      "2602.08676",
    )}) supports tools that iteratively “sculpt” a draft into a final document rather than committing to a single left-to-right decode.`,
    hint: "Autoregressive = clear token-by-token credit. Diffusion = many tokens change at once.",
  },

  // 9) Cross-Domain Agent Fusion (AgentSkiller)
  {
    id: 20260009,
    topic: "sota-2026",
    difficulty: "sota",
    question: `In AgentSkiller’s cross-domain fusion (${arxiv(
      "2602.09372",
    )}), how do Person-Centric Entity Graphs ensure semantic consistency when linking services?`,
    options: [
      "Entity embeddings capture semantic meaning, so the learned link probability only connects entities with compatible roles/types across domains, preventing nonsensical cross-domain fusions",
      "The sigmoid function clips probabilities to prevent overflow",
      "Entity graphs replace the need for API documentation",
      "Person-centric means only human entities can be linked, simplifying the problem",
    ],
    correctIndex: 0,
    explanation:
      "The fusion mechanism relies on semantic representations so entities that “mean the same thing” across apps (e.g., “Customer ID” vs “Client Profile”) are linked, while incompatible entity types are unlikely to connect—preventing nonsensical merges.",
    realWorld: `Techniques in AgentSkiller (${arxiv(
      "2602.09372",
    )}) enable an agent to sync bookings with calendars or CRMs while maintaining entity consistency across different schemas.`,
    hint: "If embeddings encode meaning, what does that imply about which entities should connect?",
  },

  // 10) Iterative Reasoning Optimization (quadratic attention)
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
      "Self-attention compares every token to every other token, so compute/memory scale as $O(n^2)$. Iterative summarization keeps the active working context small (size $k$), so repeated steps cost about $m \\times O(k^2)$ rather than $O(n^2)$ for a massive uninterrupted chain.",
    realWorld: `Iterative reasoning techniques (e.g., InftyThink+ ${arxiv(
      "2602.06960",
    )}) are aimed at making “deep thinking” affordable by preventing huge quadratic slowdowns.`,
    hint: "$n^2$ vs $m \\times k^2$. Which stays small as $n$ grows?",
  },

  // 11) Unified Latents (symbol links for lambda)
  {
    id: 20260011,
    topic: "sota-2026",
    difficulty: "sota",
    symbolLinks: {
      "\\lambda": "lambda",
    },
    question: `In DeepMind’s Unified Latents (${arxiv(
      "2602.17270",
    )}), how does the "Information Density Seesaw" get resolved to achieve a SOTA 1.3 FVD on Kinetics-600?`,
    options: [
      "By linking the deterministic encoder's fixed output noise to the diffusion prior's minimum noise level, providing a mathematically tight upper bound on latent bitrate",
      "By replacing the diffusion decoder with a GAN-based refiner to reduce high-frequency artifacts",
      "By using a variable noise schedule that allows the model to skip the first 50 denoising steps",
      "By training the encoder and decoder on pixel-space losses while the prior uses latent-space KL divergence",
    ],
    correctIndex: 0,
    explanation:
      "Unified Latents removes heuristic tuning by jointly regularizing the latent space with a diffusion prior. It ties the prior’s minimum noise to a fixed-noise information bound using the symbol $\\lambda$ (e.g. $\\lambda(0)=5$), producing a principled reconstruction–modeling tradeoff that stabilizes higher-bitrate latents.",
    realWorld: `According to Unified Latents (${arxiv(
      "2602.17270",
    )}), this enables higher-quality video generation at lower compute cost, pushing toward real-time high-res synthesis.`,
    hint: "Think about how “fixed noise” acts like a cap on how much information a latent can carry.",
  },

  // 12) ResearchGym: Capability–Reliability Gap
  {
    id: 20260012,
    topic: "sota-2026",
    difficulty: "sota",
    question: `According to ResearchGym (${arxiv(
      "2602.15112",
    )}), what is the primary reason frontier agents struggle with autonomous AI research despite high reasoning scores?`,
    options: [
      'A "capability-reliability gap" where agents propose novel hypotheses but fail at long-horizon resource management and coordination of parallel experiments',
      "Insufficient context windows that prevent the agent from reading more than three papers at once",
      "The lack of access to GPU clusters for running synthetic experiments",
      'A "knowledge cutoff" that prevents agents from understanding papers published after 2025',
    ],
    correctIndex: 0,
    explanation:
      "ResearchGym highlights that agents can be impressive in isolated reasoning, yet unreliable in long-horizon loops: planning, coordinating parallel experiments, tracking resources, and recovering from mistakes. The benchmark emphasizes failure modes like impatience and overconfidence during extended research workflows.",
    realWorld: `ResearchGym (${arxiv(
      "2602.15112",
    )}) suggests the next frontier is less about one-shot IQ and more about multi-day “project management” reliability.`,
    hint: "It’s not about one-turn brilliance — it’s about staying correct across many turns.",
  },

  // 13) HalluHard: Multi-turn hallucination cascades
  {
    id: 20260013,
    topic: "sota-2026",
    difficulty: "sota",
    question: `How does the HalluHard benchmark (${arxiv(
      "2602.01031",
    )}) differentiate itself from previous hallucination metrics like TruthfulQA?`,
    options: [
      "It focuses on multi-turn dialogues where early minor errors cascade into massive factual hallucinations that are plausible-sounding but completely ungrounded",
      "It only tests the model on its ability to recite historical dates correctly",
      "It uses a static list of 100 multiple-choice questions with fixed answers",
      "It measures hallucination based on the sentiment of the model's response",
    ],
    correctIndex: 0,
    explanation:
      "HalluHard targets multi-turn settings where small early mistakes compound across follow-ups, producing confident, plausible-but-ungrounded outputs. The key is the *cascade* effect: one wrong citation or assumption early can corrupt the entire later conclusion.",
    realWorld: `HalluHard (${arxiv(
      "2602.01031",
    )}) stresses that “groundedness” is critical for legal/medical agents where one early error can poison many downstream steps.`,
    hint: "Think about a small lie that grows each time someone asks a follow-up.",
  },

  // 14) R2C / CIR: Decoupling logic from math instantiation
  {
    id: 20260014,
    topic: "sota-2026",
    difficulty: "sota",
    question: `In the R2C framework (${arxiv(
      "2602.02029",
    )}), how does the Canonical Intermediate Representation (CIR) improve optimization problem solving?`,
    options: [
      "It decouples operational rule logic from mathematical instantiation by using constraint archetypes and modeling paradigms",
      "It converts all natural language into Python code which is then executed by a compiler",
      "It replaces the LLM with a symbolic solver for all reasoning steps",
      "It uses a vector database to store every math problem ever solved by humans",
    ],
    correctIndex: 0,
    explanation:
      "CIR acts like a schema/bridge: before committing to equations, the solver identifies constraint archetypes and modeling paradigms that represent the rules. This modularity reduces early translation errors that commonly derail direct NL→math approaches.",
    realWorld: `R2C (${arxiv(
      "2602.02029",
    )}) is aimed at real logistics/supply-chain settings where rules are messy and mapping them cleanly to constraints is the hardest step.`,
    hint: "If you can’t solve the math yet, categorize the *rules* first—what intermediate structure helps?",
  },

  // 15) First Proof: Preventing evaluation contamination
  {
    id: 20260015,
    topic: "sota-2026",
    difficulty: "sota",
    question: `Why did the authors of "First Proof" (${arxiv(
      "2602.05192",
    )}) encrypt the answers to their research-level math questions for a short period?`,
    options: [
      "To prevent the questions and answers from being ingested by LLM training crawlers (data contamination), ensuring a true 'zero-shot' evaluation",
      "Because the researchers themselves hadn't figured out the answers yet",
      "To comply with international copyright laws regarding mathematical theorems",
      "To create a 'pay-to-play' model for AI companies wanting to test their models",
    ],
    correctIndex: 0,
    explanation:
      "Encrypting the answers prevents models from “learning the test” via training data ingestion. That preserves the integrity of zero-shot evaluation: if a model solves it, it’s more likely due to reasoning than memorization.",
    realWorld: `First Proof (${arxiv(
      "2602.05192",
    )}) represents a peak evaluation regime: problems whose solutions are intentionally withheld to avoid contamination.`,
    hint: "If the answer key is in the training set, is it still a fair test?",
  },

  // 16) International AI Safety Report 2026
  {
    id: 20260016,
    topic: "sota-2026",
    difficulty: "sota",
    question: `The "International AI Safety Report 2026" (${arxiv(
      "2602.21012",
    )}), led by Yoshua Bengio, identifies which of these as a primary "Emerging Risk"?`,
    options: [
      'Systemic destabilization caused by autonomous "agentic swarms" executing high-frequency financial or social manipulations',
      "The risk of AI models running out of electricity due to inefficient cooling",
      "A shortage of human-labeled data leading to model collapse",
      "The possibility of AI models refusing to answer harmless questions",
    ],
    correctIndex: 0,
    explanation:
      "The report emphasizes “agentic risks” where autonomous systems can act at machine speed across many channels (financial, informational, social) faster than human oversight can respond, increasing systemic instability risk.",
    realWorld: `The report (${arxiv(
      "2602.21012",
    )}) is positioned as a scientific baseline for governance that shifts concern from chatbots to deployed autonomous agents.`,
    hint: "It’s not one mistake—it’s a thousand actions before we notice.",
  },

  // 17) Empirical-MCTS: Dual-process evolution
  {
    id: 20260017,
    topic: "sota-2026",
    difficulty: "sota",
    question: `In Empirical-MCTS (${arxiv(
      "2602.04248",
    )}), how does "Dual Process" evolution enable agents to improve over time without manual fine-tuning?`,
    options: [
      'By using a fast "intuitive" model for generation and a slow "search-based" model for evaluation, where the search results are distilled back into the fast model',
      "By running two identical models in parallel and picking the one with the higher temperature",
      "By alternating between training on text and training on images every 24 hours",
      "By allowing the user to vote on every single response generated by the agent",
    ],
    correctIndex: 0,
    explanation:
      "Dual-process evolution mirrors System 1 vs System 2: a fast generator proposes candidates; a slower search/evaluator (e.g., MCTS) identifies better trajectories; then those improvements are distilled back into the fast policy so it improves continuously.",
    realWorld: `Empirical-MCTS (${arxiv(
      "2602.04248",
    )}) captures the “practice → evaluate → internalize” loop that enables agents to improve on the job.`,
    hint: "Practice with search, then “memorize” the best paths.",
  },

  // 18) LogicGraph: Multi-path reasoning consistency
  {
    id: 20260018,
    topic: "sota-2026",
    difficulty: "sota",
    question: `What does the LogicGraph benchmark (${arxiv(
      "2602.21044",
    )}) measure that traditional benchmarks like GSM8K miss?`,
    options: [
      "Multi-path logical consistency: the ability of a model to reach the same correct conclusion through different starting premises or reasoning trajectories",
      "The speed at which a model can calculate basic arithmetic",
      "How many words a model can generate in under 5 seconds",
      "Whether a model can identify the main character in a short story",
    ],
    correctIndex: 0,
    explanation:
      "LogicGraph evaluates brittleness by checking whether models remain consistent across different reasoning paths that should yield the same conclusion. A model that only succeeds along one narrow path can fail under equivalent reformulations.",
    realWorld: `LogicGraph (${arxiv(
      "2602.21044",
    )}) aligns with real reliability needs: agents must cross-check reasoning rather than getting lucky once.`,
    hint: "If all roads lead to Rome, can the model take more than one road?",
  },

  // 19) Attention Matching: KV compaction / long-context memory bottleneck
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
      "Attention Matching frames compression as preserving the most important attention structure (what the model would attend to) while reducing storage. The point is to keep downstream behavior similar while drastically shrinking memory footprint.",
    realWorld: `This kind of compaction is often discussed alongside long-context advances in the Unified Latents ecosystem (${arxiv(
      "2602.17270",
    )}).`,
    hint: "Instead of summarizing with words, preserve the *structure* of attention.",
  },

  // 20) GLM-5: Agentic Engineering shift
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
      "Agentic Engineering means the model is no longer just autocomplete; it operates as an agent that plans, executes, tests, iterates, and maintains systems over time (CI, unit tests, refactors, deploys), closing the loop from “idea” to “running product.”",
    realWorld: `This “continuous agent evolution” framing is discussed broadly in 2026 agent systems literature (e.g., Empirical-MCTS ${arxiv(
      "2602.04248",
    )}).`,
    hint: "It’s the difference between generating code and owning the whole lifecycle.",
  },
];
