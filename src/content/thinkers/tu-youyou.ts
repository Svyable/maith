import type { Question } from '../types';

export const tuYouyouQuestions: Question[] = [
  {
    id: 31500, topic: 'tu-youyou', difficulty: 'easy',
    question: 'Tu Youyou won the 2015 Nobel Prize in Physiology or Medicine for discovering which life-saving drug?',
    options: [
      'Artemisinin — an antimalarial compound extracted from sweet wormwood (Artemisia annua), a plant used in traditional Chinese medicine for over 2,000 years.',
      'Penicillin — the first broad-spectrum antibiotic derived from Penicillium mold cultures.',
      'Ivermectin — an antiparasitic compound isolated from soil bacteria Streptomyces avermitilis.',
      'Quinine — the original antimalarial alkaloid extracted from the bark of the South American cinchona tree.'
    ],
    correctIndex: 0,
    explanation: 'Tu Youyou\'s team screened thousands of traditional Chinese medicine recipes during Project 523 (a secret military program during the Vietnam War era). She found that low-temperature ether extraction of Artemisia annua yielded a compound — artemisinin ($\\text{C}_{15}\\text{H}_{22}\\text{O}_5$, MW = 282.33) — that killed malaria parasites with near-100% efficacy in animal models. The extraction yield follows: $Y = \\frac{m_{\\text{artemisinin}}}{m_{\\text{plant}}} \\times 100\\%$, typically $\\sim 0.01\\text{–}1\\%$ depending on cultivar.',
    realWorld: 'Artemisinin-based combination therapies (ACTs) have saved an estimated 6+ million lives since 2000, reducing malaria mortality by over 50% globally, particularly in sub-Saharan Africa.',
    hint: 'She found it in a 1,600-year-old Chinese medical text — but the key was using a cold extraction method.',
  },
  {
    id: 31501, topic: 'tu-youyou', difficulty: 'hard',
    question: 'Artemisinin\'s antimalarial mechanism depends on a unique chemical feature. What is the pharmacologically essential structural motif?',
    options: [
      'An endoperoxide bridge (C-O-O-C) within a sesquiterpene lactone scaffold. Iron(II) in the parasite\'s heme cleaves this bridge via Fenton-like chemistry, generating lethal carbon-centered free radicals.',
      'A quinoline ring system that intercalates into the parasite\'s DNA, blocking replication of the apicoplast genome.',
      'A sulfonamide group that competitively inhibits dihydropteroate synthase in the folate biosynthesis pathway.',
      'A macrolide ring that binds the 50S ribosomal subunit of the Plasmodium parasite, halting protein synthesis.'
    ],
    correctIndex: 0,
    explanation: 'Artemisinin contains an unusual 1,2,4-trioxane ring with an endoperoxide bridge. Inside the malaria parasite, $\\text{Fe}^{2+}$ from digested hemoglobin reductively cleaves the O–O bond via Fenton-like chemistry: $$\\text{R-O-O-R\'} + \\text{Fe}^{2+} \\rightarrow \\text{R-O}^\\bullet + \\text{R\'-O}^- + \\text{Fe}^{3+}$$ The carbon-centered radicals then alkylate parasite proteins, with a selectivity index $\\text{SI} = \\frac{\\text{CC}_{50}(\\text{host})}{\\text{IC}_{50}(\\text{parasite})} > 1000$.',
    realWorld: 'Understanding this mechanism led to the development of semi-synthetic derivatives (artesunate, artemether, dihydroartemisinin) with improved bioavailability for clinical use in ACT combinations.',
    hint: 'The drug is activated by iron inside the parasite — the same iron the parasite obtained by eating the host\'s hemoglobin.',
    formulaLinks: ['fenton-reaction'],
  },
  {
    id: 31502, topic: 'tu-youyou', difficulty: 'sota',
    question: 'Artemisinin resistance has emerged in Southeast Asia. The molecular marker most associated with resistance involves mutations in which parasite gene, and what is the proposed resistance mechanism?',
    options: [
      'Mutations in the $pfkelch13$ gene (K13 propeller domain). These mutations enhance the parasite\'s unfolded protein response (UPR) and increase PI3K-mediated signaling, allowing ring-stage parasites to enter a quiescent state that survives artemisinin exposure.',
      'Amplification of the $pfmdr1$ gene encoding P-glycoprotein, which pumps artemisinin out of the digestive vacuole before it can react with heme-iron.',
      'Point mutations in $pfcrt$ (chloroquine resistance transporter), altering the vacuolar pH so that the endoperoxide bridge cannot be activated by Fe²⁺.',
      'Deletion of the $pfhrp2$ gene, eliminating the histidine-rich protein that normally concentrates heme near artemisinin\'s endoperoxide bridge.'
    ],
    correctIndex: 0,
    explanation: 'K13 propeller mutations (e.g., C580Y) are the validated molecular markers for artemisinin resistance. The parasite clearance half-life follows: $$t_{1/2} = \\frac{\\ln 2}{k_{\\text{clear}}}$$ where resistant parasites show $t_{1/2} > 5\\text{ h}$ vs. $\\sim 2\\text{ h}$ for sensitive strains. They don\'t prevent drug activation but instead allow ring-stage parasites to enter quiescence during drug exposure. The mechanism involves upregulated PI3P lipid signaling and enhanced proteostasis (UPR) pathways.',
    realWorld: 'K13 mutations have spread across the Greater Mekong Subregion and have been detected in Africa. The WHO has declared artemisinin resistance a global health emergency, driving the search for next-generation antimalarials.',
    hint: 'A propeller-shaped protein domain — mutations let the parasite "play dead" during drug exposure and revive afterward.',
    formulaLinks: ['half-life'],
  },
];
