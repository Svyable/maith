import type { Question } from '../types';

// ── Anatomy & Physiology ──
export const anatomyQuestions: Question[] = [
  {
    id: 85100,
    topic: 'anatomy-physiology',
    difficulty: 'easy',
    question: 'The sinoatrial (SA) node is known as the heart\'s natural pacemaker because it:',
    options: [
      'Initiates the electrical impulse that triggers each heartbeat',
      'Pumps blood directly into the aorta',
      'Filters deoxygenated blood',
      'Produces red blood cells',
    ],
    correctIndex: 0,
    explanation: 'The SA node generates spontaneous action potentials at ~60-100 bpm, setting the heart rate.',
    realWorld: 'Artificial pacemakers mimic SA node function when it fails (sick sinus syndrome).',
    hint: 'It\'s the electrical spark that starts each cardiac cycle.',
  },
  {
    id: 85101,
    topic: 'anatomy-physiology',
    difficulty: 'hard',
    question: 'The Frank-Starling mechanism states that cardiac output increases when:',
    options: [
      'Ventricular end-diastolic volume increases (greater preload stretches myocytes)',
      'Heart rate decreases to zero',
      'Afterload is maximized',
      'Sympathetic stimulation is completely blocked',
    ],
    correctIndex: 0,
    explanation: 'Greater preload stretches sarcomeres to optimal actin-myosin overlap, increasing stroke volume.',
    realWorld: 'Heart failure occurs when the Frank-Starling curve flattens — the heart can\'t increase output with more preload.',
    hint: 'More stretch = more forceful contraction (up to a point).',
  },
  {
    id: 85102,
    topic: 'anatomy-physiology',
    difficulty: 'sota',
    question: 'Organ-on-a-chip microfluidic devices advance pharmacology by:',
    options: [
      'Recapitulating human organ-level physiology in vitro, reducing animal testing needs',
      'Replacing all clinical trials permanently',
      'Growing full-size organs for transplantation',
      'Eliminating the need for any in vivo studies',
    ],
    correctIndex: 0,
    explanation: 'These microdevices use human cells in physiological microenvironments with fluid flow, enabling drug response testing.',
    realWorld: 'The FDA Modernization Act 2.0 (2022) allows organ-on-chip data as alternatives to animal testing for drug approval.',
    hint: 'Miniature human organs on chips for drug testing.',
  },
];

// ── Pathology ──
export const pathologyQuestions: Question[] = [
  {
    id: 85200,
    topic: 'pathology',
    difficulty: 'easy',
    question: 'Inflammation\'s cardinal signs include redness, heat, swelling, pain, and:',
    options: [
      'Loss of function (functio laesa)',
      'Increased appetite',
      'Hair growth',
      'Improved vision',
    ],
    correctIndex: 0,
    explanation: 'Virchow added loss of function to Celsus\' four original signs: rubor, calor, tumor, dolor.',
    realWorld: 'Anti-inflammatory drugs (NSAIDs, corticosteroids) target these pathways to restore function.',
    hint: 'The fifth cardinal sign was added by Virchow.',
  },
  {
    id: 85201,
    topic: 'pathology',
    difficulty: 'hard',
    question: 'The Warburg effect in cancer cells describes their preference for:',
    options: [
      'Aerobic glycolysis over oxidative phosphorylation even when oxygen is available',
      'Complete oxidative phosphorylation only',
      'Anaerobic conditions exclusively',
      'Zero glucose consumption',
    ],
    correctIndex: 0,
    explanation: 'Cancer cells ferment glucose to lactate even with O₂, providing biosynthetic intermediates for rapid proliferation.',
    realWorld: 'PET scans exploit the Warburg effect — cancer cells take up more ¹⁸F-FDG due to high glycolytic rates.',
    hint: 'Cancer cells use an inefficient but fast metabolic pathway.',
  },
  {
    id: 85202,
    topic: 'pathology',
    difficulty: 'sota',
    question: 'Liquid biopsy for cancer detection analyzes:',
    options: [
      'Circulating tumor DNA (ctDNA), exosomes, and CTCs in blood samples',
      'Only solid tumor tissue from surgical biopsy',
      'Urine pH levels exclusively',
      'MRI contrast agent distribution',
    ],
    correctIndex: 0,
    explanation: 'Liquid biopsy detects tumor-derived biomarkers in blood, enabling non-invasive monitoring and early detection.',
    realWorld: 'Guardant Health\'s Shield test and GRAIL\'s Galleri are FDA-cleared multi-cancer early detection liquid biopsies.',
    hint: 'It\'s a blood test that finds traces of tumors.',
  },
];

// ── Biostatistics ──
export const biostatisticsQuestions: Question[] = [
  {
    id: 85300,
    topic: 'biostatistics',
    difficulty: 'easy',
    question: 'A p-value of 0.03 in a clinical trial means:',
    options: [
      'There is a 3% probability of observing results this extreme if the null hypothesis is true',
      'The treatment is 97% effective',
      'Only 3% of patients responded',
      'The study has 3% power',
    ],
    correctIndex: 0,
    explanation: 'The p-value is P(data|H₀), not P(H₀|data). It measures evidence against the null, not treatment efficacy.',
    realWorld: 'FDA typically requires p < 0.05 for drug approval, though clinical significance matters too.',
    hint: 'It\'s about the probability of the data under the null hypothesis.',
  },
  {
    id: 85301,
    topic: 'biostatistics',
    difficulty: 'hard',
    question: 'In a randomized controlled trial, intention-to-treat (ITT) analysis:',
    options: [
      'Analyzes all participants in their originally assigned groups regardless of compliance',
      'Excludes anyone who dropped out or switched groups',
      'Only includes patients who completed the full treatment',
      'Randomizes patients after the trial ends',
    ],
    correctIndex: 0,
    explanation: 'ITT preserves randomization benefits and avoids selection bias, even if some patients didn\'t comply with their assignment.',
    realWorld: 'ITT is the FDA\'s preferred primary analysis method for pivotal clinical trials.',
    hint: 'Once randomized, always analyzed in that group.',
  },
  {
    id: 85302,
    topic: 'biostatistics',
    difficulty: 'sota',
    question: 'Adaptive clinical trial designs (e.g., Bayesian adaptive randomization) improve efficiency by:',
    options: [
      'Modifying treatment allocation, sample size, or endpoints based on interim data while controlling type I error',
      'Eliminating the need for any statistical analysis',
      'Testing only one patient at a time',
      'Using historical data instead of enrolling new patients',
    ],
    correctIndex: 0,
    explanation: 'Adaptive designs learn from accumulating data, allocating more patients to promising arms and potentially stopping early.',
    realWorld: 'COVID-19 RECOVERY trial used adaptive design to rapidly identify dexamethasone as an effective treatment.',
    hint: 'The trial adapts as data accumulates, without losing rigor.',
  },
];
