import type { Question } from '../types';

// ── Auditing & Attestation (AUD) ──
export const cpaAuditQuestions: Question[] = [
  {
    id: 81100,
    topic: 'cpa-auditing',
    difficulty: 'easy',
    question: 'An unmodified (clean) audit opinion means the auditor believes the financial statements:',
    options: [
      'Are presented fairly in all material respects in accordance with the applicable framework',
      'Have zero errors of any kind',
      'Will predict future performance accurately',
      'Are guaranteed to be free of fraud',
    ],
    correctIndex: 0,
    explanation: 'An unmodified opinion provides reasonable (not absolute) assurance that statements are free from material misstatement.',
    realWorld: 'The Big Four accounting firms issue thousands of audit opinions annually — most are unmodified.',
    hint: 'The key phrase is "material respects," not perfection.',
  },
  {
    id: 81101,
    topic: 'cpa-auditing',
    difficulty: 'hard',
    question: 'Under ISA 240, primary responsibility for preventing and detecting fraud lies with:',
    options: [
      'Those charged with governance and management of the entity',
      'The external auditor exclusively',
      'The tax authority',
      'The company\'s shareholders',
    ],
    correctIndex: 0,
    explanation: 'Auditors assess fraud risk but management and governance bear primary responsibility for anti-fraud controls.',
    realWorld: 'Post-Enron SOX reforms strengthened management\'s fraud prevention duties.',
    hint: 'Auditors detect, but who has primary responsibility?',
  },
  {
    id: 81102,
    topic: 'cpa-auditing',
    difficulty: 'sota',
    question: 'Continuous auditing using AI anomaly detection differs from traditional sampling because it:',
    options: [
      'Analyzes 100% of transactions in real-time, flagging statistical outliers',
      'Eliminates the need for any human judgment',
      'Only works for cash transactions',
      'Requires manual journal entry review',
    ],
    correctIndex: 0,
    explanation: 'AI-powered continuous auditing processes entire populations rather than samples, using ML to detect anomalous patterns.',
    realWorld: 'Deloitte\'s Omnia and EY\'s Helix use AI for full-population audit testing.',
    hint: 'Traditional auditing samples; AI can scan everything.',
  },
];

// ── Financial Accounting & Reporting (FAR) ──
export const cpaAccountingQuestions: Question[] = [
  {
    id: 81200,
    topic: 'cpa-accounting',
    difficulty: 'easy',
    question: 'Under GAAP, revenue is recognized when:',
    options: [
      'Performance obligations are satisfied (control transfers to customer)',
      'Cash is received regardless of delivery',
      'A contract is signed',
      'The fiscal year ends',
    ],
    correctIndex: 0,
    explanation: 'ASC 606 / IFRS 15 require revenue recognition when control of goods/services transfers, not necessarily when cash changes hands.',
    realWorld: 'SaaS companies recognize subscription revenue ratably over the service period under ASC 606.',
    hint: 'Think about the five-step revenue recognition model.',
  },
  {
    id: 81201,
    topic: 'cpa-accounting',
    difficulty: 'hard',
    question: 'A deferred tax liability arises when:',
    options: [
      'Taxable income is temporarily lower than book income (tax will be higher in future)',
      'The company has a permanent tax exemption',
      'Tax rates decrease to zero',
      'Revenue is never recognized',
    ],
    correctIndex: 0,
    explanation: 'Temporary differences where book income exceeds taxable income today create DTLs — future tax obligations.',
    realWorld: 'Accelerated depreciation for tax vs. straight-line for books is the classic DTL scenario.',
    hint: 'If you pay less tax now due to timing, you owe more later.',
  },
  {
    id: 81202,
    topic: 'cpa-accounting',
    difficulty: 'sota',
    question: 'Under ASC 842 (Lease Accounting), operating leases now require lessees to recognize:',
    options: [
      'A right-of-use asset and a lease liability on the balance sheet',
      'Only a footnote disclosure with no balance sheet impact',
      'An intangible asset equal to total future payments',
      'Immediate full expense in the income statement',
    ],
    correctIndex: 0,
    explanation: 'ASC 842 eliminated off-balance-sheet operating leases for lessees, requiring ROU asset and liability recognition.',
    realWorld: 'Airlines and retailers saw massive balance sheet changes when ASC 842 took effect in 2019.',
    hint: 'The big change was bringing operating leases onto the balance sheet.',
  },
];

// ── Regulation & Tax (REG) ──
export const cpaTaxQuestions: Question[] = [
  {
    id: 81300,
    topic: 'cpa-tax',
    difficulty: 'easy',
    question: 'A tax loss carryforward allows a corporation to:',
    options: [
      'Apply current year losses to reduce taxable income in future years',
      'Eliminate all future tax obligations permanently',
      'Transfer losses to unrelated companies',
      'Deduct losses from gross revenue retroactively without limit',
    ],
    correctIndex: 0,
    explanation: 'Net operating losses (NOLs) can be carried forward to offset future taxable income, subject to annual limitations.',
    realWorld: 'Amazon paid minimal federal taxes for years partly due to massive NOL carryforwards from early unprofitable years.',
    hint: 'Losses today can reduce taxes tomorrow.',
  },
  {
    id: 81301,
    topic: 'cpa-tax',
    difficulty: 'hard',
    question: 'Under IRC §1031, a like-kind exchange allows tax deferral on:',
    options: [
      'Real property held for business or investment exchanged for similar real property',
      'Any personal property including stocks and bonds',
      'Cryptocurrency exchanges only',
      'Inventory sales between related parties',
    ],
    correctIndex: 0,
    explanation: 'Post-TCJA (2017), §1031 applies only to real property. Gain is deferred, not eliminated — basis carries over.',
    realWorld: 'Commercial real estate investors chain 1031 exchanges to defer capital gains indefinitely.',
    hint: 'Post-2017, this only applies to real estate, not personal property.',
  },
  {
    id: 81302,
    topic: 'cpa-tax',
    difficulty: 'sota',
    question: 'The OECD Pillar Two Global Minimum Tax (GloBE) imposes a minimum effective tax rate of:',
    options: [
      '15% on MNEs with revenue above €750 million',
      '25% on all companies worldwide',
      '10% only on tech companies',
      '0% in participating jurisdictions',
    ],
    correctIndex: 0,
    explanation: 'Pillar Two ensures large multinationals pay at least 15% ETR in each jurisdiction via top-up taxes (IIR and UTPR).',
    realWorld: 'Over 140 countries agreed to GloBE rules, with many implementing in 2024-2025.',
    hint: 'It targets profit shifting to tax havens by large multinationals.',
  },
];
