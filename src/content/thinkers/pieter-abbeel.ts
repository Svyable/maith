import type { Question } from '../types';

export const pieterAbbeelQuestions: Question[] = [
  {
    id: 32360, topic: 'pieter-abbeel', difficulty: 'easy',
    question: 'Pieter Abbeel pioneered apprenticeship learning and inverse reinforcement learning (IRL). What is inverse RL?',
    options: [
      'Given demonstrations of expert behavior $\\{\\tau_1, \\ldots, \\tau_N\\}$, infer the reward function $R^*(s, a)$ that the expert is optimizing, rather than being given $R$ directly. The key assumption: the expert is (approximately) optimal under some unknown reward: $$\\pi_{\\text{expert}} \\approx \\arg\\max_\\pi \\mathbb{E}_{\\pi}\\left[\\sum_t \\gamma^t R^*(s_t, a_t)\\right]$$ Once $R^*$ is recovered, train a policy via standard RL. This solves the "reward specification" problem — it\'s often easier to demonstrate desired behavior than to write a reward function.',
      'Reinforcement learning where the agent maximizes negative reward — learning to avoid bad states.',
      'A method for reversing a trained RL policy — unlearning behaviors that are no longer desired.',
      'Learning a policy by running episodes backwards in time — from terminal states to initial states.'
    ],
    correctIndex: 0,
    explanation: 'Abbeel and Ng (2004) formalized IRL using linear reward functions: $R(s) = w^\\top \\phi(s)$ where $\\phi(s)$ are state features. They showed the expert\'s feature expectations $\\mu_E = \\mathbb{E}[\\sum \\gamma^t \\phi(s_t)]$ constrain the reward weights. Maximum entropy IRL (Ziebart et al.) resolves ambiguity by choosing the reward that makes the expert\'s behavior most likely: $P(\\tau) \\propto \\exp(\\sum_t R(s_t, a_t))$. This is the mathematical foundation of RLHF (used in ChatGPT).',
    realWorld: 'IRL is used for autonomous driving (learn driving reward from human demonstrations), robot manipulation (learn task objectives from expert demos), and RLHF for language models (inferring human preferences from comparisons).',
    hint: 'Don\'t specify the reward — demonstrate the task, and let the algorithm figure out what you were optimizing.',
    formulaLinks: ['inverse-rl', 'reinforcement-learning'],
  },
  {
    id: 32361, topic: 'pieter-abbeel', difficulty: 'hard',
    question: 'Abbeel developed domain randomization for sim-to-real transfer in robotics. What is the key idea?',
    options: [
      'Train the policy in simulation with randomized physical parameters (friction, mass, lighting, textures, dynamics): $$\\pi^* = \\arg\\max_\\pi \\mathbb{E}_{\\xi \\sim p(\\xi)}\\left[\\mathbb{E}_{\\pi, \\text{env}(\\xi)}\\left[\\sum_t R(s_t, a_t)\\right]\\right]$$ where $\\xi$ are randomized environment parameters. If the training distribution $p(\\xi)$ is broad enough to include the real world as a sample, the learned policy transfers without any real-world training. The real world becomes "just another simulation."',
      'Train in a single high-fidelity simulation that perfectly replicates every physical detail of the real world.',
      'Train on real-world data only — simulation is too inaccurate to be useful for robotics.',
      'Use a GAN to generate photorealistic simulation images that are indistinguishable from real camera inputs.'
    ],
    correctIndex: 0,
    explanation: 'Abbeel\'s group demonstrated domain randomization for dexterous manipulation: training a Shadow Hand robot to solve a Rubik\'s Cube (OpenAI, 2019) entirely in simulation with aggressive randomization of friction coefficients ($\\pm 50\\%$), object size, gravity, and even action delays. The policy learned to be robust to all these variations, and transferred to the physical robot zero-shot. The key: randomization acts as a form of regularization.',
    realWorld: 'Domain randomization is now standard in robotics: warehouse robots (Amazon), drone navigation, autonomous vehicles (Waymo), and surgical robots all use sim-to-real transfer with randomized physics.',
    hint: 'Randomize everything in simulation — friction, colors, physics. If it works everywhere in sim, it works in reality.',
    formulaLinks: ['sim-to-real', 'domain-randomization'],
  },
  {
    id: 32362, topic: 'pieter-abbeel', difficulty: 'sota',
    question: 'Abbeel co-founded Covariant (robot learning) and contributed to the theory of meta-learning for RL. What is MAML and why does it matter for robotics?',
    options: [
      'Model-Agnostic Meta-Learning (MAML) learns an initialization $\\theta_0$ from which a few gradient steps on a new task $\\mathcal{T}_i$ produce good performance: $$\\theta_0^* = \\arg\\min_{\\theta_0} \\sum_{\\mathcal{T}_i} \\mathcal{L}_{\\mathcal{T}_i}\\left(\\theta_0 - \\alpha \\nabla_{\\theta_0} \\mathcal{L}_{\\mathcal{T}_i}(\\theta_0)\\right)$$ This is "learning to learn": the meta-learner finds a point in parameter space that is $K$ gradient steps away from optimal for any task in the distribution. For robotics: train on 100 manipulation tasks, then adapt to a new object with 5 demonstrations.',
      'MAML trains a single model that works on all tasks without any adaptation — a universal policy.',
      'MAML uses a memory bank of past experiences to retrieve relevant behaviors for new tasks — no gradient updates.',
      'MAML meta-learns the learning rate schedule rather than the initialization — using a fixed starting point.'
    ],
    correctIndex: 0,
    explanation: 'MAML (Finn, Abbeel, Levine, 2017) solved the "sample efficiency" problem in robot learning: real robots can\'t afford millions of training episodes per task. By meta-learning across a distribution of tasks, MAML enables few-shot adaptation. The bi-level optimization (inner loop: adapt to task, outer loop: optimize initialization) is differentiable end-to-end. For RL: the inner loop uses policy gradient on the new task, the outer loop backpropagates through the entire adaptation process.',
    realWorld: 'MAML and its descendants (Reptile, ANIL, ProtoNets) power few-shot learning in robotics (Covariant\'s warehouse robots adapt to new objects with ~5 demos), drug discovery (adapt to new molecular targets), and personalized AI (adapt to new users quickly).',
    hint: 'Don\'t learn a solution — learn a starting point from which any solution is just a few steps away.',
    formulaLinks: ['meta-learning', 'maml'],
  },
];
