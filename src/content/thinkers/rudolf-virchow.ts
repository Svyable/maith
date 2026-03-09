import type { Question } from '../types';

export const rudolfVirchowQuestions: Question[] = [
  {
    id: 97060, topic: 'rudolf-virchow', difficulty: 'easy',
    question: 'Rudolf Virchow\'s principle "Omnis cellula e cellula" means:',
    options: ['Every cell arises from a pre-existing cell — establishing cellular pathology as the basis of disease', 'All organisms are made of cells', 'Cells contain a nucleus', 'Disease is caused by imbalanced humors'],
    correctIndex: 0,
    explanation: 'Virchow\'s 1858 "Cellularpathologie" argued that disease originates at the cellular level — not in tissues, organs, or humors. Every pathological change begins with altered cell behavior.',
    realWorld: 'Cellular pathology is the foundation of modern histopathology, cancer biology, and precision medicine.',
    hint: 'He traced all disease back to individual cells going wrong.',
  },
  {
    id: 97061, topic: 'rudolf-virchow', difficulty: 'hard',
    question: 'Virchow\'s triad describes the three factors predisposing to venous thrombosis:',
    options: ['Endothelial injury, venous stasis (reduced blood flow), and hypercoagulability', 'Infection, inflammation, and fever', 'Hypertension, diabetes, and smoking', 'Arterial stenosis, plaque rupture, and platelet activation'],
    correctIndex: 0,
    explanation: 'Virchow identified that thrombosis requires: (1) vessel wall damage, (2) abnormal blood flow, and (3) altered blood composition. Risk = f(endothelial damage, stasis, coagulability).',
    realWorld: 'Virchow\'s triad guides DVT/PE risk assessment: immobilization (stasis), surgery (endothelial injury), and cancer (hypercoagulability).',
    hint: 'Three conditions must align for a blood clot to form in a vein.',
  },
  {
    id: 97062, topic: 'rudolf-virchow', difficulty: 'sota',
    question: 'Modern coagulation follows the cell-based model extending Virchow\'s framework. Thrombin generation is described by:',
    options: ['A three-phase model: initiation (TF/VIIa → Xa), amplification (thrombin activates platelets/V/VIII/XI), and propagation (burst of thrombin on platelet surface)', 'A simple linear cascade from XII → XI → IX → X → thrombin', 'Platelet aggregation alone without protein factors', 'Fibrinolysis as the primary hemostatic mechanism'],
    correctIndex: 0,
    explanation: 'The cell-based model replaces the intrinsic/extrinsic cascade: TF-bearing cells initiate, activated platelets amplify, and propagation produces a thrombin burst. Peak thrombin ≈ 200–400 nM in normal hemostasis.',
    realWorld: 'Thrombin generation assays (TGA) and thromboelastography (TEG/ROTEM) now guide transfusion in trauma and surgery.',
    hint: 'Three phases on cell surfaces, not a simple waterfall cascade.',
  },
];
