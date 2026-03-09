import type { Question } from '../types';

export const charlesSherringtonQuestions: Question[] = [
  {
    id: 97130, topic: 'charles-sherrington', difficulty: 'easy',
    question: 'Charles Sherrington coined the term "synapse" and established that:',
    options: ['Neurons communicate at specialized junctions (synapses) where signals are transmitted with a measurable delay, supporting chemical rather than purely electrical transmission', 'All neurons are directly connected without gaps', 'Synapses only exist in the brain, not the spinal cord', 'Reflexes bypass the nervous system entirely'],
    correctIndex: 0,
    explanation: 'Sherrington\'s spinal reflex experiments showed synaptic delay (~0.5 ms), one-way conduction, temporal and spatial summation, and inhibition — all properties explained by chemical transmission at synapses.',
    realWorld: 'His work laid the foundation for understanding how neural circuits process information, leading to modern neuropharmacology.',
    hint: 'He named the tiny gap between neurons and showed signals take time to cross it.',
  },
  {
    id: 97131, topic: 'charles-sherrington', difficulty: 'hard',
    question: 'Sherrington discovered reciprocal inhibition in spinal reflexes, meaning:',
    options: ['When an agonist muscle is activated by a reflex, the antagonist muscle is simultaneously inhibited via an inhibitory interneuron', 'Both agonist and antagonist muscles contract simultaneously', 'Inhibition only occurs in voluntary movements', 'Reflexes always involve only one muscle'],
    correctIndex: 0,
    explanation: 'Reciprocal inhibition: Ia afferent → excites α motor neuron (agonist) AND activates inhibitory interneuron → inhibits antagonist α motor neuron. This enables coordinated movement.',
    realWorld: 'This principle is used in physical therapy (PNF stretching) and explains pathological co-contraction in upper motor neuron lesions.',
    hint: 'When your biceps contracts in a reflex, your triceps must relax — and vice versa.',
  },
  {
    id: 97132, topic: 'charles-sherrington', difficulty: 'sota',
    question: 'Modern computational neuroscience models synaptic integration as described by Sherrington. The integrate-and-fire neuron sums inputs according to:',
    options: ['$\\tau_m \\frac{dV}{dt} = -(V - V_{rest}) + R_m \\sum_i w_i \\delta(t - t_i)$, firing when $V \\geq V_{threshold}$, with membrane time constant $\\tau_m = R_m C_m$', '$V = IR$ (Ohm\'s law only)', '$V(t) = V_0 \\sin(\\omega t)$ (oscillatory)', '$\\frac{dV}{dt} = 0$ (static equilibrium)'],
    correctIndex: 0,
    explanation: 'The leaky integrate-and-fire (LIF) model captures Sherrington\'s temporal summation ($\\tau_m \\approx 10–20$ ms determines integration window) and spatial summation (weighted sum of inputs $w_i$). It fires when membrane potential reaches threshold.',
    realWorld: 'LIF neurons are the basis of spiking neural networks (SNNs) and neuromorphic computing chips (Intel Loihi, IBM TrueNorth).',
    hint: 'A leaky capacitor that fires a spike when voltage crosses a threshold.',
  },
];
