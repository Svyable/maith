import type { Question } from '../types';

export const williamHarveyQuestions: Question[] = [
  {
    id: 97001, topic: 'william-harvey', difficulty: 'easy',
    question: 'William Harvey\'s 1628 "De Motu Cordis" demonstrated that blood:',
    options: ['Circulates in a closed loop, pumped by the heart through arteries and returning via veins', 'Is produced fresh by the liver and consumed by organs', 'Flows only in one direction without returning', 'Moves by spontaneous heat generation in the body'],
    correctIndex: 0,
    explanation: 'Harvey measured cardiac output: ~72 beats/min × ~60 mL/stroke = ~4,320 mL/min — far more blood than the body contains, proving recirculation rather than continuous production.',
    realWorld: 'His discovery is the foundation of cardiology, cardiac surgery, and modern hemodynamics.',
    hint: 'He calculated how much blood the heart pumps per hour — too much to be made fresh.',
  },
  {
    id: 97002, topic: 'william-harvey', difficulty: 'hard',
    question: 'Harvey proved venous blood flows toward the heart by:',
    options: ['Ligating veins and showing blood accumulates on the distal side (away from heart), proving unidirectional venous valves', 'Injecting dye into arteries and watching it return in veins', 'Measuring venous pressure with a manometer', 'Observing capillary flow under a microscope'],
    correctIndex: 0,
    explanation: 'Harvey\'s tourniquet experiments on forearm veins showed swelling below the ligature (distal side), demonstrating that venous valves enforce one-way flow toward the heart — $Q = A \\cdot v$, where flow $Q$ is unidirectional.',
    realWorld: 'Understanding venous return is critical for treating heart failure, designing CPR protocols, and managing shock.',
    hint: 'He tied off veins and watched which side swelled.',
  },
  {
    id: 97003, topic: 'william-harvey', difficulty: 'sota',
    question: 'Modern hemodynamics extends Harvey\'s work using the Frank-Starling law. Which equation describes the relationship between ventricular preload and cardiac output?',
    options: ['$SV \\propto EDV$ (stroke volume increases with end-diastolic volume up to a plateau, following the length-tension relationship of cardiac myocytes)', '$CO = HR \\times SV$ only, independent of preload', '$\\Delta P = Q \\times R$ (Ohm\'s law analog for flow)', '$EF = \\frac{SV}{EDV}$ defines contractility alone'],
    correctIndex: 0,
    explanation: 'The Frank-Starling mechanism: increased venous return → greater sarcomere stretch → more actin-myosin overlap → stronger contraction. $SV = EDV - ESV$, and the relationship plateaus at excessive preload.',
    realWorld: 'The Frank-Starling curve guides fluid resuscitation in ICUs and explains why heart failure patients develop pulmonary edema.',
    hint: 'The heart pumps harder when it\'s stretched more — up to a point.',
  },
];
