import type { Question } from '../types';

export const kilbyQuestions: Question[] = [
  {
    id: 11141,
    topic: 'jack-kilby',
    difficulty: 'easy',
    question: 'Jack Kilby\'s integrated circuit (1958) was revolutionary because:',
    options: [
      'It combined multiple transistors, resistors, and capacitors on a single piece of semiconductor — eliminating hand-wired connections between discrete components',
      'It was the first circuit to use silicon instead of germanium',
      'It operated at higher frequencies than any previous electronic device',
      'It was the first digital circuit to perform Boolean logic operations',
    ],
    correctIndex: 0,
    explanation: 'Before Kilby, circuits were assembled by hand-soldering individual components together — the "tyranny of numbers" problem. His IC put everything on one germanium chip. Robert Noyce independently invented a silicon version with planar interconnects (the basis of modern ICs). Kilby won the 2000 Nobel Prize.',
    realWorld: 'Modern processors contain over 100 billion transistors on a chip the size of a fingernail. The IC enabled the entire digital revolution — computers, smartphones, internet, AI.',
    hint: 'Instead of wiring thousands of separate parts together, put them all on one piece of material.',
  },
  {
    id: 11142,
    topic: 'jack-kilby',
    difficulty: 'hard',
    question: 'Moore\'s Law, observed since the IC\'s invention, states that:',
    options: [
      'The number of transistors on an IC doubles approximately every two years — an exponential trend sustained for over 50 years through continuous innovation',
      'The clock speed of processors doubles every 18 months',
      'The cost of computing halves every year',
      'The power consumption of chips decreases by 50% with each generation',
    ],
    correctIndex: 0,
    explanation: 'Gordon Moore (1965) observed transistor counts doubling every ~2 years. From Kilby\'s single transistor (1958) to Apple M2\'s 20 billion (2022): roughly 34 doublings in 64 years. This required innovations in lithography, materials (high-κ dielectrics, FinFETs, GAA transistors), and design.',
    realWorld: 'Moore\'s Law drove exponential cost reduction: a transistor cost ~$1 in 1965 and ~$0.000000001 today. This enabled AI (GPUs with billions of transistors), smartphones, and cloud computing.',
    hint: 'Exponential doubling over decades — from one transistor to billions on a single chip.',
  },
  {
    id: 11143,
    topic: 'jack-kilby',
    difficulty: 'sota',
    question: 'Modern IC fabrication at nodes below 7nm uses EUV (Extreme Ultraviolet) lithography because:',
    options: [
      'EUV light at 13.5nm wavelength can pattern features smaller than the 193nm wavelength of previous deep-UV lithography, which hit its diffraction limit',
      'EUV light passes through silicon while DUV is absorbed',
      'EUV reduces manufacturing cost by eliminating multiple patterning steps entirely',
      'EUV improves transistor performance by annealing the silicon crystal structure during exposure',
    ],
    correctIndex: 0,
    explanation: 'Resolution $\\sim \\lambda/(2\\text{NA})$: shorter wavelength = finer features. DUV (193nm) with multi-patterning reached practical limits around 7nm. EUV (13.5nm) enables single-exposure patterning of sub-5nm features, but requires tin-droplet plasma light sources producing 250W of in-band EUV power and Mo/Si multilayer mirrors with ~70% reflectivity.',
    realWorld: 'ASML is the sole EUV lithography manufacturer. Each machine costs ~$200M, weighs 180 tonnes, and is critical for producing Apple, Nvidia, and AMD\'s latest chips. Semiconductor geopolitics revolves around EUV access.',
    hint: 'Smaller wavelength → smaller features you can print. 13.5nm is 14× shorter than the previous 193nm.',
  },
];
