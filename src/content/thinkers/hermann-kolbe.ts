import type { Question } from '../types';

export const hermannKolbeQuestions: Question[] = [
  {
    id: 21401, topic: 'hermann-kolbe', difficulty: 'easy',
    question: 'Hermann Kolbe\'s synthesis of acetic acid from inorganic precursors (carbon disulfide → carbon tetrachloride → acetic acid) demonstrated:',
    options: ['That organic compounds obey the same chemical laws as inorganic ones and can be built from simple elements', 'That acetic acid can only be made by fermentation', 'That organic synthesis requires enzymes', 'That carbon disulfide is an organic compound'],
    correctIndex: 0,
    explanation: 'Kolbe\'s 1845 synthesis traced a path from pure elements (C, S, Cl) through inorganic intermediates to acetic acid — an "organic" compound. This cemented the fall of vitalism begun by Wöhler.',
    realWorld: 'The principle that organic = ordinary chemistry enabled the entire synthetic chemical industry, from plastics to pharmaceuticals.',
    hint: 'He built an "organic" molecule step-by-step from elements, proving no vital force was needed.',
  },
  {
    id: 21402, topic: 'hermann-kolbe', difficulty: 'hard',
    question: 'The Kolbe electrolysis reaction involves:',
    options: ['Electrolytic decarboxylation of carboxylate salts to form alkane dimers: $2\\text{RCOO}^- \\xrightarrow{\\text{electrolysis}} \\text{R-R} + 2\\text{CO}_2$', 'Reduction of aldehydes at the cathode', 'Electroplating of metals onto organic substrates', 'Electrolysis of water to produce hydrogen'],
    correctIndex: 0,
    explanation: 'In the Kolbe electrolysis, carboxylate anions are oxidized at the anode, losing CO₂ to form radicals that couple to give symmetric alkanes. It\'s a classic electrochemical C–C bond formation.',
    realWorld: 'Kolbe electrolysis is used in the industrial synthesis of long-chain hydrocarbons and has been studied for sustainable fuel production.',
    hint: 'Remove CO₂ from two carboxylate ions at the anode, and the remaining carbon fragments join together.',
  },
  {
    id: 21403, topic: 'hermann-kolbe', difficulty: 'sota',
    question: 'The Kolbe-Schmitt reaction, used industrially to synthesize salicylic acid, involves:',
    options: ['Carboxylation of sodium phenoxide with CO₂ under pressure: $\\text{C}_6\\text{H}_5\\text{ONa} + \\text{CO}_2 \\xrightarrow{125°C, 100\\text{atm}} \\text{o-HOC}_6\\text{H}_4\\text{COONa}$', 'Hydrogenation of benzoic acid', 'Nitration of phenol with HNO₃', 'Friedel-Crafts alkylation of benzene'],
    correctIndex: 0,
    explanation: 'The Kolbe-Schmitt reaction carboxylates phenoxide with CO₂, giving salicylic acid regioselectively at the ortho position. This is the industrial route to aspirin\'s precursor.',
    realWorld: 'Nearly all aspirin (acetylsalicylic acid) in the world starts from salicylic acid made by the Kolbe-Schmitt reaction — one of the highest-volume named reactions in industry.',
    hint: 'Sodium phenoxide + carbon dioxide under heat and pressure → the precursor to aspirin.',
  },
];
