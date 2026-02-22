import type { Question } from '../types';

export const neuroscienceQuestions: Question[] = [
  {
    id: 40501, topic: 'neuroscience', difficulty: 'easy',
    question: 'Neurons communicate across synapses by:',
    options: [
      'Releasing neurotransmitters that bind to receptors on the postsynaptic neuron, triggering ion channel opening and electrical signal propagation',
      'Direct electrical contact between all neurons',
      'Sending radio waves through the brain',
      'Sharing DNA between connected neurons',
    ],
    correctIndex: 0,
    explanation: 'Chemical synapses dominate: an action potential triggers vesicle fusion, releasing neurotransmitters (glutamate, GABA, dopamine) into the synaptic cleft. These bind receptors on the target neuron, opening ion channels that excite or inhibit it.',
    realWorld: 'Understanding synaptic transmission led to SSRIs (antidepressants), L-DOPA (Parkinson\'s), and inspired artificial neural networks — though biological neurons are far more complex than their computational analogues.',
    hint: 'Chemical messengers cross the tiny gap between neurons.',
  },
  {
    id: 40502, topic: 'neuroscience', difficulty: 'hard',
    question: 'Hebbian learning ("neurons that fire together wire together") formalizes as:',
    options: [
      '$\\Delta w_{ij} = \\eta \\cdot x_i \\cdot x_j$ — the synaptic weight increases when pre- and post-synaptic neurons are simultaneously active',
      'Neurons randomly strengthen and weaken connections',
      'Only inhibitory connections are strengthened',
      'Learning only occurs during sleep',
    ],
    correctIndex: 0,
    explanation: 'Hebb (1949) proposed that correlated neural activity strengthens connections. This was later confirmed biologically as Long-Term Potentiation (LTP). The mathematical form inspired backpropagation and self-organizing maps.',
    realWorld: 'LTP is the biological basis of memory formation. Disruption of LTP is implicated in Alzheimer\'s disease. Hebbian rules also underpin unsupervised ML algorithms like competitive learning.',
    hint: 'If two neurons activate at the same time, the connection between them gets stronger.',
  },
  {
    id: 40503, topic: 'neuroscience', difficulty: 'sota',
    question: 'Connectomics — mapping complete neural wiring diagrams — recently achieved:',
    options: [
      'A complete synapse-resolution connectome of the adult Drosophila (fruit fly) brain with ~140,000 neurons and 50 million synapses, using electron microscopy and AI segmentation',
      'Mapping every neuron in the human brain at single-synapse resolution',
      'Proving that brains don\'t use electrical signals',
      'Showing all brains have identical wiring',
    ],
    correctIndex: 0,
    explanation: 'The FlyWire project (2024) completed the first whole-brain connectome of an adult animal with complex behavior. AI (flood-filling networks) automated 99% of the neuron tracing from petabytes of EM imagery.',
    realWorld: 'Connectomics reveals circuit motifs that may inspire new neural network architectures. The fly brain\'s navigation circuits are already informing robotics research and neuromorphic chip design.',
    hint: 'A complete wiring diagram of an insect brain — every neuron, every connection.',
  },
];
