import type { Question } from '../types';

export const paulEhrlichQuestions: Question[] = [
  {
    id: 97040, topic: 'paul-ehrlich', difficulty: 'easy',
    question: 'Paul Ehrlich\'s concept of the "magic bullet" ($Zauberkugel$) proposed that:',
    options: ['Chemical compounds could be designed to selectively target and destroy pathogens without harming host cells', 'Bullets could be sterilized for surgical use', 'All diseases are caused by a single toxin', 'Antibiotics work by boosting the immune system'],
    correctIndex: 0,
    explanation: 'Ehrlich systematically tested hundreds of arsenic compounds, finding compound #606 (Salvarsan/arsphenamine) effective against syphilis — the first targeted chemotherapy.',
    realWorld: 'His concept directly led to modern targeted drug design, monoclonal antibodies, and antibody-drug conjugates in cancer therapy.',
    hint: 'He numbered hundreds of compounds until one hit the target — #606.',
  },
  {
    id: 97041, topic: 'paul-ehrlich', difficulty: 'hard',
    question: 'Ehrlich\'s side-chain theory of immunity proposed that:',
    options: ['Cells have surface receptors ("side chains") that bind antigens; stimulated cells overproduce and release these receptors as antibodies', 'Immunity comes from phagocytic cells engulfing pathogens', 'Antibodies are produced by the liver', 'White blood cells directly kill all foreign organisms'],
    correctIndex: 0,
    explanation: 'Ehrlich\'s model — cells bearing diverse receptors, with antigen selecting and amplifying specific ones — anticipated clonal selection theory by 60 years. The released receptors = antibodies.',
    realWorld: 'His framework is remarkably close to the modern understanding of B-cell receptor diversity and clonal expansion.',
    hint: 'Cells have many locks; the right key causes mass production of that lock.',
  },
  {
    id: 97042, topic: 'paul-ehrlich', difficulty: 'sota',
    question: 'Modern antibody-drug conjugates (ADCs) extend Ehrlich\'s magic bullet. ADC efficacy depends on:',
    options: ['Drug-to-antibody ratio (DAR), linker stability ($t_{1/2}$ in plasma vs. tumor), and antigen internalization rate ($k_{int}$)', 'Only the cytotoxicity of the payload drug', 'The antibody\'s Fc region binding to complement', 'Total serum antibody concentration'],
    correctIndex: 0,
    explanation: 'ADC pharmacokinetics: $C(t) = C_0 e^{-k_{el}t}$, where payload release follows $\\frac{d[Drug]}{dt} = k_{int} \\cdot [ADC_{bound}] \\cdot f_{release}$. Optimal DAR ≈ 3.5–4 balances efficacy with pharmacokinetics.',
    realWorld: 'ADCs like trastuzumab emtansine (T-DM1) and enfortumab vedotin have transformed cancer treatment, achieving Ehrlich\'s vision.',
    hint: 'The antibody delivers the poison specifically to cancer cells.',
  },
];
