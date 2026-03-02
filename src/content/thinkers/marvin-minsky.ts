import type { Question } from '../types';

export const minskyQuestions: Question[] = [
  {
    id: 31005,
    topic: 'marvin-minsky',
    difficulty: 'hard',
    question: 'In their highly influential 1969 book "Perceptrons," Minsky and Papert mathematically proved that single-layer neural networks could NOT compute which fundamental logic function?',
    options: [
      'The exclusive-OR (XOR) function, because it is not linearly separable.',
      'The logical-AND (AND) function, because it requires non-linear activation.',
      'The logical-NOT (NOT) function, because perceptrons only add inputs.',
      'The exclusive-NOR (XNOR) function, due to the vanishing gradient problem.'
    ],
    correctIndex: 0,
    explanation: 'They proved single-layer perceptrons can only solve linearly separable problems. Since XOR (0,0->0; 1,1->0; 1,0->1; 0,1->1) cannot be separated by a single straight line, the model failed, accidentally triggering the first "AI Winter."',
    realWorld: 'This limitation was eventually bypassed by adding "hidden layers" and using backpropagation, unlocking the modern deep learning revolution.',
    hint: 'If both inputs are the same, the output is 0. If they are different, the output is 1.',
  },
  {
    id: 31006,
    topic: 'marvin-minsky',
    difficulty: 'hard',
    question: 'Before defining modern AI, Minsky invented and patented the SNARC in 1951. What was it?',
    options: [
      'The first hardware neural network simulator built using vacuum tubes.',
      'A mechanical robotic arm designed to catch randomly bouncing objects.',
      'A software program that could solve introductory calculus equations.',
      'The first digital synthesizer capable of generating human-like speech.'
    ],
    correctIndex: 0,
    explanation: 'The Stochastic Neural Analog Reinforcement Calculator (SNARC) was an interconnected web of 40 vacuum tubes and motors that simulated a 40-neuron network, successfully learning to navigate a physical maze.',
    realWorld: 'While today we simulate billions of neurons on GPUs, SNARC proved that the concept of Hebbian learning (reinforcement) could be physically engineered.',
    hint: 'It simulated biological brain activity using analog electronics.',
  },
  {
    id: 31007,
    topic: 'marvin-minsky',
    difficulty: 'sota',
    question: 'In his landmark 1986 book "The Society of Mind," Minsky theorized that human intelligence is not a single unified system, but rather:',
    options: [
      'An emergent property of billions of simple, unintelligent "agents" interacting.',
      'A single, massively complex global optimization algorithm running in the cortex.',
      'A purely statistical pattern-matching engine driven by external sensory data.',
      'A rigid hierarchy of symbolic logic processors governed by a central controller.'
    ],
    correctIndex: 0,
    explanation: 'Minsky argued that "minds are what brains do," theorizing that intelligence emerges from the chaotic, competitive interaction of simple, highly specialized agents that individually possess zero intelligence.',
    realWorld: 'This philosophy directly mirrors modern "mixture of experts" (MoE) architectures used in advanced LLMs like GPT-4, where different sub-networks handle different tasks.',
    hint: 'Think of intelligence not as a monarch, but as a bustling, chaotic city.',
  },
  {
    id: 31008,
    topic: 'marvin-minsky',
    difficulty: 'hard',
    question: 'In 1974, Minsky introduced the concept of "Frames" to Artificial Intelligence. What does a Frame represent in this context?',
    options: [
      'A structured data container for representing stereotyped situations and knowledge.',
      'A mathematical matrix used to transform 3D spatial coordinates into 2D visions.',
      'A specific time-step in a reinforcement learning algorithm’s training loop.',
      'A physical boundary limit programmed into early robotic spatial awareness.'
    ],
    correctIndex: 0,
    explanation: 'A Frame is an AI data structure designed to capture contextual knowledge. For example, a "Birthday Party Frame" automatically loads expectations: presents, cake, guests, and singing, allowing AI to make rapid assumptions.',
    realWorld: 'Frames heavily influenced object-oriented programming (classes/properties) and modern knowledge graphs used by search engines to understand context.',
    hint: 'It is a mental outline or template that helps you understand a specific type of scenario.',
  },
  {
    id: 31009,
    topic: 'marvin-minsky',
    difficulty: 'easy',
    question: 'Outside of computer science, Minsky held a patent for an optical invention that fundamentally changed biological research. What was it?',
    options: [
      'The confocal scanning microscope, which creates high-resolution 3D images.',
      'The electron tunneling microscope, which allows atomic-level visualization.',
      'The first digital fiber-optic endoscope used in non-invasive surgeries.',
      'The polarized laser-interferometer used to detect gravitational waves.'
    ],
    correctIndex: 0,
    explanation: 'Minsky invented the confocal microscope in 1957. By using a pinhole to block out-of-focus light, it allowed scientists to reconstruct highly detailed 3D structures of thick biological specimens.',
    realWorld: 'Confocal microscopy is now a standard, indispensable tool in molecular biology, neuroscience, and medical pathology.',
    hint: 'It eliminates the "blur" from thick biological samples by focusing on one highly specific point of light at a time.',
  }
];