import type { Question } from '../types';

export const andreasVesaliusQuestions: Question[] = [
  {
    id: 97010, topic: 'andreas-vesalius', difficulty: 'easy',
    question: 'Andreas Vesalius revolutionized anatomy by:',
    options: ['Performing systematic human dissections and publishing "De Humani Corporis Fabrica" (1543) with accurate anatomical illustrations', 'Relying exclusively on animal dissections like Galen', 'Using X-rays to study internal organs', 'Theorizing anatomy from philosophical principles alone'],
    correctIndex: 0,
    explanation: 'Vesalius corrected over 200 errors in Galen\'s anatomy (which was based on animal dissection) by performing meticulous human cadaver dissections and commissioning detailed woodcut illustrations.',
    realWorld: 'His work established anatomy as an empirical science and is the foundation of modern surgical training.',
    hint: 'He actually opened human bodies instead of trusting ancient texts.',
  },
  {
    id: 97011, topic: 'andreas-vesalius', difficulty: 'hard',
    question: 'Vesalius corrected Galen\'s major anatomical error regarding:',
    options: ['The interventricular septum — proving it has no visible pores (blood cannot pass directly between ventricles)', 'The number of bones in the human body', 'The location of the appendix', 'The structure of the inner ear'],
    correctIndex: 0,
    explanation: 'Galen claimed blood passed through invisible pores in the septum between left and right ventricles. Vesalius showed the septum is solid, paving the way for Harvey\'s discovery of pulmonary circulation.',
    realWorld: 'This correction was essential for understanding that blood must travel through the lungs to move between heart chambers.',
    hint: 'Galen said blood seeped through the wall between the heart\'s chambers.',
  },
  {
    id: 97012, topic: 'andreas-vesalius', difficulty: 'sota',
    question: 'Modern cross-sectional anatomy extends Vesalius\'s work through imaging modalities. CT attenuation is measured in Hounsfield units (HU) defined as:',
    options: ['$HU = 1000 \\times \\frac{\\mu_{tissue} - \\mu_{water}}{\\mu_{water} - \\mu_{air}}$, where $\\mu$ is the linear attenuation coefficient', '$HU = \\frac{\\mu_{tissue}}{\\mu_{bone}} \\times 100$', '$HU = \\log\\left(\\frac{I_0}{I}\\right)$ directly', '$HU = \\mu_{tissue} \\times thickness$'],
    correctIndex: 0,
    explanation: 'Water = 0 HU, air = −1000 HU, dense bone ≈ +1000 HU. This standardized scale allows quantitative tissue characterization across different CT scanners.',
    realWorld: 'Hounsfield units guide radiological diagnosis: distinguishing hemorrhage (+50–70 HU) from edema (+10–20 HU) in brain CT.',
    hint: 'Water is the reference point at zero on this scale.',
  },
];
