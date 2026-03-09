import type { Question } from '../types';

export const wilderPenfieldQuestions: Question[] = [
  {
    id: 97170, topic: 'wilder-penfield', difficulty: 'easy',
    question: 'Wilder Penfield\'s intraoperative brain stimulation experiments revealed that:',
    options: [
      'The cerebral cortex has a topographic map (homunculus) where body regions are represented proportionally to their sensory/motor precision, not their physical size',
      'All body parts have equal cortical representation',
      'The brain cannot be stimulated electrically',
      'Motor and sensory functions are distributed randomly across the cortex',
    ],
    correctIndex: 0,
    explanation: 'Penfield stimulated over 1,000 conscious patients during epilepsy surgery (1930s–1960s), mapping somatotopic organization. Hands, lips, and tongue occupy disproportionately large cortical areas reflecting their fine motor control and sensory acuity.',
    realWorld: 'The Penfield homunculus is still the foundation of neurosurgical planning, brain-computer interface electrode placement, and understanding phantom limb pain after amputation.',
    hint: 'His map of the brain\'s surface showed that hands and lips get far more brain real estate than legs.',
  },
  {
    id: 97171, topic: 'wilder-penfield', difficulty: 'hard',
    question: 'The cortical magnification factor $M$ that Penfield\'s mapping quantified is defined as:',
    options: [
      '$M(x) = \\frac{d\\ell_{\\text{cortex}}}{d\\ell_{\\text{body}}}$ — the ratio of cortical surface distance to body surface distance, where $M_{\\text{fingers}} \\approx 15\\text{–}25\\, \\text{mm/cm}$ versus $M_{\\text{trunk}} \\approx 1\\text{–}2\\, \\text{mm/cm}$',
      '$M$ is constant across all body regions',
      '$M = \\frac{\\text{body area}}{\\text{brain volume}}$ (a simple ratio)',
      '$M$ only applies to the visual cortex, not somatosensory',
    ],
    correctIndex: 0,
    explanation: 'Cortical magnification $M$ is the derivative of the cortex-to-body mapping. High $M$ regions (fingertips: ~25 mm cortex per cm skin) have dense receptor innervation and small receptive fields (~1 mm²). Low $M$ regions (back: ~1 mm/cm) have large receptive fields (~50 cm²).',
    realWorld: 'This quantitative framework predicts two-point discrimination thresholds across the body and guides prosthetic sensory feedback design — artificial fingertips need more electrodes than artificial torsos.',
    hint: 'How many millimeters of brain surface per centimeter of skin? That ratio varies 25-fold across your body.',
  },
  {
    id: 97172, topic: 'wilder-penfield', difficulty: 'sota',
    question: 'Modern extensions of Penfield\'s cortical mapping use information-theoretic measures. The optimal somatotopic map maximizes:',
    options: [
      '$I(S; R) = \\int p(s) \\int p(r|s) \\log_2 \\frac{p(r|s)}{p(r)} \\, dr \\, ds$, where $S$ is the stimulus location and $R$ is the cortical response — subject to a constraint on total cortical area $A$ and metabolic cost',
      'The total number of neurons regardless of information content',
      'The physical size of each body part\'s representation',
      'The speed of signal transmission only',
    ],
    correctIndex: 0,
    explanation: 'The infomax principle: cortical magnification $M(x)$ is proportional to $\\sqrt{\\rho(x)}$ where $\\rho$ is receptor density. This maximizes mutual information $I(S;R)$ under area constraints — explaining why Penfield\'s homunculus distortions are information-theoretically optimal.',
    realWorld: 'This framework explains cortical reorganization after amputation (phantom limbs), predicts optimal electrode spacing for brain-computer interfaces, and has been validated with high-resolution fMRI mapping.',
    hint: 'The brain allocates cortex like a data compression algorithm — more bits where the signal is richest.',
  },
];
