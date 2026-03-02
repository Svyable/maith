// leeuwenhoek.ts
import type { Question } from '../types';

export const leeuwenhoekQuestions: Question[] = [
  {
    id: 50000,
    topic: 'antonie-leeuwenhoek',
    difficulty: 'easy',
    question: 'Leeuwenhoek first observed what with self-ground lenses?',
    options: [
      'Microorganisms ("animalcules") in pond water ($\\times 270$ magnification)',
      'Bacterial spores',
      'DNA double helix',
      'Blood cell nuclei'
    ],
    correctIndex: 0,
    explanation: 'Single-lens microscopes (1mm focal length) revealed bacteria, protozoa, sperm in 1670s.',
    realWorld: 'First to see microbial world; foundation of microbiology.',
    hint: 'Pond water teeming with invisible life.',
  },
  {
    id: 50001,
    topic: 'antonie-leeuwenhoek',
    difficulty: 'hard',
    question: 'Leeuwenhoek measured what blood phenomenon?',
    options: [
      'Capillary blood flow ($v\\approx 1$ mm/s in mouse tail)',
      'Red blood cell diameter ($\\approx 7\\mu m$)',
      'Platelet aggregation',
      'White blood cell phagocytosis'
    ],
    correctIndex: 0,
    explanation: 'Live observation of blood circulating through capillaries; disproved "humors" theory.',
    realWorld: 'Direct ancestor of modern capillary microscopy.',
    hint: 'Watched blood flow in living tissue.',
  },
  {
    id: 50002,
    topic: 'antonie-leeuwenhoek',
    difficulty: 'sota',
    question: 'Leeuwenhoek\'s lens quality achieved?',
    options: [
      'Spherical aberration $\\lambda/4$ via precision glass grinding',
      'Compound microscope (2+ lenses)',
      'Oil immersion ($n=1.5$)',
      'Achromatic correction'
    ],
    correctIndex: 0,
    explanation: '$\\times270$ from $\\approx 1mm$ droplets; better than 100-year compound microscopes.',
    realWorld: 'Single lens designs still used for ultra-high resolution.',
    hint: 'Tiny perfect sphere beats multi-lens mess.',
  }
];
