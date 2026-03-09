import type { Question } from '../types';

export const marieAnnePaulzeLavoisierQuestions: Question[] = [
  {
    id: 31650, topic: 'marie-anne-paulze-lavoisier', difficulty: 'easy',
    question: 'Marie-Anne Paulze Lavoisier was essential to the Chemical Revolution of the 18th century. What was her primary scientific contribution?',
    options: [
      'She translated key works from English (Priestley, Cavendish, Kirwan) into French, illustrated her husband\'s experiments with precise engravings, and maintained the detailed laboratory notebooks that documented the overthrow of phlogiston theory.',
      'She independently discovered oxygen by heating mercury calx and measuring the released gas with a pneumatic trough.',
      'She formulated the law of conservation of mass by performing thousands of quantitative combustion experiments alone.',
      'She invented the calorimeter used to measure the heat of chemical reactions, establishing thermochemistry as a field.'
    ],
    correctIndex: 0,
    explanation: 'Marie-Anne was far more than an assistant. She learned English specifically to translate Priestley\'s and Kirwan\'s phlogiston-theory papers, adding critical annotations that helped Antoine refute phlogiston. Her precise engravings of experimental apparatus are still reproduced in chemistry textbooks. She managed the laboratory, recorded data, and engaged scientifically with visiting researchers.',
    realWorld: 'After Antoine\'s execution during the Terror, Marie-Anne preserved and published his final manuscripts, ensuring that the quantitative chemical revolution survived the French Revolution.',
    hint: 'She translated, illustrated, and documented the experiments that killed phlogiston theory — the invisible partner of the Chemical Revolution.',
  },
  {
    id: 31651, topic: 'marie-anne-paulze-lavoisier', difficulty: 'hard',
    question: 'The Lavoisiers\' most famous experiment disproved the phlogiston theory. What quantitative result sealed phlogiston\'s fate?',
    options: [
      'When mercury calx (HgO) was heated, it released a gas (oxygen) and the combined mass of mercury + oxygen exactly equaled the original calx mass. Similarly, burning metals in sealed vessels showed mass was conserved — no mysterious "phlogiston" was gained or lost.',
      'Heating charcoal in pure oxygen produced carbon dioxide with a mass greater than the original charcoal, proving that combustion is combination with oxygen, not release of phlogiston.',
      'Dissolving metals in acids produced hydrogen gas whose mass, when added to the dissolved metal salt, exceeded the original acid mass by exactly the phlogiston-equivalent.',
      'Water decomposed by electricity into hydrogen and oxygen with a 1:8 mass ratio, showing water was a compound, not an element containing phlogiston.'
    ],
    correctIndex: 0,
    explanation: 'The Lavoisiers used precise balances (accurate to 0.001 g) to show that in all chemical reactions — combustion, calcination, respiration — mass is perfectly conserved. Phlogiston theory required that burning metals lose phlogiston, yet they gain weight. Lavoisier showed they gain weight because they combine with oxygen — a quantitative argument that demanded precise measurement, recorded in Marie-Anne\'s notebooks.',
    realWorld: 'The law of conservation of mass ($\\sum m_{\\text{reactants}} = \\sum m_{\\text{products}}$) is the foundation of stoichiometry and all quantitative chemistry.',
    hint: 'Metals get heavier when burned — the opposite of what phlogiston theory predicts — because they combine with a gas from the air.',
  },
  {
    id: 31652, topic: 'marie-anne-paulze-lavoisier', difficulty: 'sota',
    question: 'Marie-Anne\'s translation of Richard Kirwan\'s "Essay on Phlogiston" included her own critical annotations. What made her scientific critique historically significant?',
    options: [
      'She identified logical inconsistencies in Kirwan\'s phlogiston arguments and appended point-by-point rebuttals written with Lavoisier, Laplace, Berthollet, and Fourcroy — making the translated book itself a devastating anti-phlogiston manifesto that convinced Kirwan to publicly abandon his own theory.',
      'She corrected Kirwan\'s mathematical errors in gas density calculations, showing that phlogiston would need to have negative mass.',
      'She replicated every experiment Kirwan described and showed that his results were irreproducible under controlled conditions.',
      'She showed that Kirwan had plagiarized Priestley\'s results and misattributed the discovery of dephlogisticated air.'
    ],
    correctIndex: 0,
    explanation: 'Marie-Anne\'s 1788 translation of Kirwan\'s "Essay on Phlogiston" is one of the most remarkable scientific documents of the 18th century. She didn\'t just translate — she organized responses from France\'s top chemists into footnotes that systematically demolished every phlogiston argument. Kirwan read the French edition and conceded defeat in 1791, publicly adopting the oxygen theory.',
    realWorld: 'This is one of the earliest examples of scientific peer review through translation — Marie-Anne effectively crowdsourced expert rebuttals and published them alongside the original claims, a practice that anticipates modern open peer review.',
    hint: 'Her translation was a Trojan horse — she filled it with expert rebuttals so devastating that the author himself changed his mind.',
  },
];
