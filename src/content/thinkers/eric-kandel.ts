import type { Question } from '../types';

export const ericKandelQuestions: Question[] = [
  {
    id: 97150, topic: 'eric-kandel', difficulty: 'easy',
    question: 'Eric Kandel\'s Nobel Prize-winning work on Aplysia (sea slug) demonstrated that:',
    options: [
      'Short-term memory involves transient changes in synaptic strength (via cAMP/PKA signaling), while long-term memory requires new protein synthesis and structural synaptic growth',
      'Memory is stored in individual neurons rather than synapses',
      'All memories are stored in the hippocampus only',
      'Memory formation does not involve any molecular changes',
    ],
    correctIndex: 0,
    explanation: 'Kandel showed that sensitization in Aplysia involves serotonin → cAMP → PKA → CREB activation. Short-term: PKA phosphorylates K⁺ channels (minutes). Long-term: CREB-driven gene expression creates new synaptic connections (days).',
    realWorld: 'This molecular cascade (cAMP → PKA → CREB) is conserved from sea slugs to humans and is the target of memory-enhancing drug research for Alzheimer\'s disease.',
    hint: 'A sea slug taught us: short-term memory tweaks existing connections, long-term memory builds new ones.',
  },
  {
    id: 97151, topic: 'eric-kandel', difficulty: 'hard',
    question: 'Kandel\'s synaptic plasticity model for habituation follows:',
    options: [
      '$g_{Ca}(n) = g_{Ca}(0) \\cdot \\alpha^n$, where $0 < \\alpha < 1$ — repeated stimulation causes progressive calcium channel inactivation, reducing transmitter release exponentially with trial number $n$',
      '$g_{Ca}$ increases linearly with each stimulus',
      'Habituation only involves postsynaptic receptor changes',
      'Calcium channels are not involved in habituation',
    ],
    correctIndex: 0,
    explanation: 'Habituation: repeated stimulation → progressive inactivation of presynaptic Ca²⁺ channels → less Ca²⁺ influx → less vesicle fusion → reduced EPSPs. The decay constant $\\alpha$ depends on stimulus frequency and interstimulus interval.',
    realWorld: 'This exponential decay model explains why you stop noticing a ticking clock — and why habituation-based therapies work for anxiety disorders and tinnitus.',
    hint: 'Each repetition reduces calcium entry by a constant fraction — exponential decay of the response.',
  },
  {
    id: 97152, topic: 'eric-kandel', difficulty: 'sota',
    question: 'The molecular switch from short-term to long-term memory in Kandel\'s framework is modeled by CREB activation dynamics:',
    options: [
      '$\\frac{d[\\text{CREB}^*]}{dt} = k_{\\text{PKA}}[\\text{PKA}^*](1 - [\\text{CREB}^*]) - k_{\\text{PP}}[\\text{CREB}^*]$, with a bistable switch: when PKA activity exceeds a threshold, CREB locks into an active state driving gene expression',
      '$[\\text{CREB}^*]$ increases linearly without any threshold',
      'CREB activation is irreversible once started',
      'Protein phosphatases have no role in memory consolidation',
    ],
    correctIndex: 0,
    explanation: 'The CREB switch is bistable: below threshold PKA, phosphatases dominate (CREB off → short-term only). Above threshold, positive feedback (CREB → C/EBP → more CREB) locks the system into an "on" state, driving structural plasticity via CPEB prion-like aggregation.',
    realWorld: 'This bistable switch model inspired computational memory architectures and explains why spaced repetition (multiple sub-threshold PKA pulses that sum) is more effective than massed practice for long-term learning.',
    hint: 'A molecular toggle: below a threshold, memory fades; above it, genes turn on permanently.',
  },
];
