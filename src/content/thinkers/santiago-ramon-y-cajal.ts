import type { Question } from '../types';

export const santiagoRamonYCajalQuestions: Question[] = [
  {
    id: 97070, topic: 'santiago-ramon-y-cajal', difficulty: 'easy',
    question: 'Santiago Ramón y Cajal established the neuron doctrine, proving that:',
    options: ['The nervous system is composed of discrete individual cells (neurons) that communicate at specialized junctions, not a continuous network', 'Nerves are hollow tubes carrying fluid', 'The brain is a single continuous syncytium', 'All neurons are identical in structure'],
    correctIndex: 0,
    explanation: 'Using Golgi\'s silver staining method, Cajal showed neurons are individual units with cell bodies, dendrites, and axons — refuting the reticular theory of a continuous nerve net (ironically championed by Golgi himself).',
    realWorld: 'The neuron doctrine is the foundation of all neuroscience, from synaptic pharmacology to neural network AI architectures.',
    hint: 'He and Golgi shared a Nobel Prize but disagreed about whether the brain is continuous or made of separate cells.',
  },
  {
    id: 97071, topic: 'santiago-ramon-y-cajal', difficulty: 'hard',
    question: 'Cajal\'s law of dynamic polarization states that:',
    options: ['Information flows in one direction: dendrites → cell body → axon → synapse (unidirectional signal propagation)', 'Neurons can transmit signals in any direction equally', 'Only motor neurons follow directional flow', 'Signals travel from axon terminals back to dendrites'],
    correctIndex: 0,
    explanation: 'Cajal deduced from neuronal morphology that signals are received by dendrites, integrated at the soma, and transmitted along the axon to the terminal — establishing the input → integration → output model.',
    realWorld: 'This principle underlies the McCulloch-Pitts neuron model and all artificial neural network architectures.',
    hint: 'Signals flow like a river: tributaries (dendrites) → main channel (axon) → output.',
  },
  {
    id: 97072, topic: 'santiago-ramon-y-cajal', difficulty: 'sota',
    question: 'Modern connectomics extends Cajal\'s neuroanatomy. The Human Connectome Project maps structural connectivity using:',
    options: ['Diffusion tensor imaging (DTI) tractography, where fractional anisotropy $FA = \\sqrt{\\frac{3}{2}} \\frac{\\sqrt{(\\lambda_1-\\bar{\\lambda})^2+(\\lambda_2-\\bar{\\lambda})^2+(\\lambda_3-\\bar{\\lambda})^2}}{\\sqrt{\\lambda_1^2+\\lambda_2^2+\\lambda_3^2}}$ measures white matter integrity', 'Standard T1-weighted MRI only', 'Electroencephalography (EEG) alone', 'Positron emission tomography (PET) with FDG'],
    correctIndex: 0,
    explanation: 'DTI measures water diffusion anisotropy along axonal bundles. FA ranges from 0 (isotropic, CSF) to 1 (perfectly anisotropic, dense white matter tracts). Tractography reconstructs 3D neural pathways.',
    realWorld: 'Connectomics has revealed that brain networks follow small-world topology with hub regions, advancing understanding of neurological and psychiatric disorders.',
    hint: 'Water molecules diffuse preferentially along nerve fibers — that\'s how we trace them.',
  },
];
