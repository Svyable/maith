import type { Question } from '../types';

// ── Contract Law ──
export const contractLawQuestions: Question[] = [
  {
    id: 84100,
    topic: 'contract-law',
    difficulty: 'easy',
    question: 'For a valid contract to exist, the essential elements include offer, acceptance, consideration, and:',
    options: [
      'Legal capacity of the parties',
      'A minimum monetary value of $100',
      'Notarization by a public notary',
      'Filing with a government agency',
    ],
    correctIndex: 0,
    explanation: 'A valid contract requires: offer, acceptance, consideration, capacity, and legality of purpose.',
    realWorld: 'Contracts with minors are voidable because they lack full legal capacity.',
    hint: 'Can everyone involved legally enter into the agreement?',
  },
  {
    id: 84101,
    topic: 'contract-law',
    difficulty: 'hard',
    question: 'The doctrine of promissory estoppel allows enforcement of a promise without consideration when:',
    options: [
      'The promisor should reasonably expect reliance, and injustice can only be avoided by enforcement',
      'Both parties are corporations',
      'The promise is made verbally in front of witnesses',
      'The contract has a merger clause',
    ],
    correctIndex: 0,
    explanation: 'Promissory estoppel (Restatement §90) substitutes for consideration when detrimental reliance would cause injustice.',
    realWorld: 'An employer promising a pension that an employee relies on may be estopped from revoking it.',
    hint: 'It\'s about preventing injustice when someone relied on a promise.',
  },
  {
    id: 84102,
    topic: 'contract-law',
    difficulty: 'sota',
    question: 'Smart contracts on blockchain raise legal issues primarily because:',
    options: [
      'Code-is-law execution may conflict with traditional contract doctrines like mistake, duress, and unconscionability',
      'They are always illegal',
      'They cannot process financial transactions',
      'Traditional courts have no jurisdiction over any digital agreements',
    ],
    correctIndex: 0,
    explanation: 'Automated execution removes human discretion, creating tension with equitable doctrines that require contextual judgment.',
    realWorld: 'The 2016 DAO hack showed how "code is law" conflicted with community expectations of fairness.',
    hint: 'What happens when code executes something a court would find unconscionable?',
  },
];

// ── Intellectual Property ──
export const ipLawQuestions: Question[] = [
  {
    id: 84200,
    topic: 'ip-law',
    difficulty: 'easy',
    question: 'A patent protects:',
    options: [
      'Novel, useful, and non-obvious inventions for a limited time',
      'Brand names and logos indefinitely',
      'Creative literary works automatically upon creation',
      'Trade secrets shared publicly',
    ],
    correctIndex: 0,
    explanation: 'Patents grant a 20-year monopoly (from filing) on inventions meeting novelty, utility, and non-obviousness requirements.',
    realWorld: 'Pharmaceutical patents protect drug formulations, enabling companies to recoup R&D costs.',
    hint: 'Patents are about inventions, not brands or creative works.',
  },
  {
    id: 84201,
    topic: 'ip-law',
    difficulty: 'hard',
    question: 'The fair use doctrine in copyright law considers four factors. Which is generally the most important?',
    options: [
      'The effect of the use on the potential market for the original work',
      'The color scheme used in the derivative work',
      'The nationality of the author',
      'The file format of the digital copy',
    ],
    correctIndex: 0,
    explanation: 'Courts often weight market effect most heavily — if the use substitutes for the original, it\'s less likely fair use.',
    realWorld: 'Google Books was found fair use because snippets didn\'t substitute for purchasing the full books.',
    hint: 'Does the use compete with or replace the original in the market?',
  },
  {
    id: 84202,
    topic: 'ip-law',
    difficulty: 'sota',
    question: 'AI-generated content raises IP questions because current copyright law generally requires:',
    options: [
      'Human authorship — works created solely by machines may not be copyrightable',
      'AI registration with the patent office',
      'Machine learning models to be open-sourced',
      'All AI outputs to be in the public domain by statute',
    ],
    correctIndex: 0,
    explanation: 'The US Copyright Office ruled that purely AI-generated works lack human authorship and are not copyrightable, though human-AI collaboration may qualify.',
    realWorld: 'The Thaler v. Perlmutter case confirmed AI cannot be an "author" under US copyright law.',
    hint: 'Who is the "author" — the human, the AI, or nobody?',
  },
];

// ── Regulatory Compliance ──
export const regulatoryQuestions: Question[] = [
  {
    id: 84300,
    topic: 'regulatory-compliance',
    difficulty: 'easy',
    question: 'GDPR (General Data Protection Regulation) primarily protects:',
    options: [
      'Personal data of individuals in the European Union',
      'Corporate trade secrets exclusively',
      'Government classified documents',
      'Social media algorithms',
    ],
    correctIndex: 0,
    explanation: 'GDPR grants EU residents rights over their personal data: access, erasure, portability, and consent requirements.',
    realWorld: 'Meta was fined €1.2 billion in 2023 for GDPR violations related to EU-US data transfers.',
    hint: 'It\'s the EU\'s landmark data privacy regulation.',
  },
  {
    id: 84301,
    topic: 'regulatory-compliance',
    difficulty: 'hard',
    question: 'Under Basel III, the Liquidity Coverage Ratio (LCR) requires banks to hold:',
    options: [
      'Enough high-quality liquid assets to cover 30 days of net cash outflows under stress',
      'Zero reserves as long as they are profitable',
      'Only government bonds with 10+ year maturity',
      'Cash equal to 100% of all deposits',
    ],
    correctIndex: 0,
    explanation: 'LCR = HQLA / 30-day net outflows ≥ 100%. It ensures banks survive short-term liquidity stress.',
    realWorld: 'SVB\'s 2023 failure highlighted how rapid deposit flight can overwhelm even well-capitalized banks.',
    hint: 'It\'s a 30-day liquidity stress test for banks.',
  },
  {
    id: 84302,
    topic: 'regulatory-compliance',
    difficulty: 'sota',
    question: 'The EU AI Act classifies AI systems by risk level. "High-risk" AI systems include:',
    options: [
      'AI used in hiring, credit scoring, law enforcement, and critical infrastructure',
      'Only military AI applications',
      'All chatbots regardless of use case',
      'AI used exclusively for entertainment',
    ],
    correctIndex: 0,
    explanation: 'The EU AI Act defines high-risk categories requiring conformity assessments, transparency, and human oversight.',
    realWorld: 'Companies deploying AI in HR screening must comply with EU AI Act high-risk requirements by 2026.',
    hint: 'Risk classification depends on the domain and potential for harm.',
  },
];
