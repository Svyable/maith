import { readFile, writeFile } from 'node:fs/promises';
import { allQuestions } from '../src/content/index';
import { allBonafideQuestions } from '../src/content/bonafides/index';
import { allThinkerQuestions } from '../src/content/thinkers/index';
import { vaultQuestions } from '../src/content/vault/index';
import { allGlossaryTerms } from '../src/content/glossary/index';
import { EQUATIONS } from '../src/config/equations';
import { CONTENT_TOPICS } from '../src/config/content-registry';
import type { Question } from '../src/content/types';

type Severity = 'error' | 'warning';

interface QualityIssue {
  severity: Severity;
  code: string;
  pool: string;
  questionId?: number;
  relatedQuestionId?: number;
  topic?: string;
  detail: string;
}

interface PoolSummary {
  questions: number;
  errors: number;
  warnings: number;
  duplicateIds: number;
  exactDuplicateQuestions: number;
}

const pools: Record<string, Question[]> = {
  standard: allQuestions,
  bonafide: allBonafideQuestions,
  thinker: allThinkerQuestions,
  vault: vaultQuestions,
};

const issues: QualityIssue[] = [];
const add = (issue: QualityIssue) => issues.push(issue);

function normalizeText(value: string): string {
  return value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/\\([a-zA-Z]+)/g, ' $1 ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function tokens(value: string): Set<string> {
  return new Set(normalizeText(value).split(' ').filter((token) => token.length > 2));
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
}

function obviousLatexMismatch(value: string): boolean {
  const dollars = (value.match(/\$/g) ?? []).length;
  const openParen = (value.match(/\\\(/g) ?? []).length;
  const closeParen = (value.match(/\\\)/g) ?? []).length;
  const openBracket = (value.match(/\\\[/g) ?? []).length;
  const closeBracket = (value.match(/\\\]/g) ?? []).length;
  return dollars % 2 !== 0 || openParen !== closeParen || openBracket !== closeBracket;
}

const glossaryIds = new Set(allGlossaryTerms.map((term) => term.id));
const formulaKeys = new Set<string>();
for (const equation of EQUATIONS) {
  formulaKeys.add(equation.name);
  formulaKeys.add(slugify(equation.name));
}
const canonicalTopics = new Set(CONTENT_TOPICS.map((topic) => topic.slug));
const allowedDifficulties = new Set(['easy', 'hard', 'sota']);

const poolSummaries: Record<string, PoolSummary> = {};

for (const [poolName, questions] of Object.entries(pools)) {
  const idCounts = new Map<number, number>();
  const textMap = new Map<string, Question[]>();

  for (const q of questions) {
    idCounts.set(q.id, (idCounts.get(q.id) ?? 0) + 1);
    const normalized = normalizeText(q.question);
    if (normalized) textMap.set(normalized, [...(textMap.get(normalized) ?? []), q]);

    if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.options.length) {
      add({ severity: 'error', code: 'INVALID_CORRECT_INDEX', pool: poolName, questionId: q.id, topic: q.topic, detail: `correctIndex ${q.correctIndex} is invalid for ${q.options.length} options` });
    }
    if (q.options.length < 2) {
      add({ severity: 'error', code: 'TOO_FEW_OPTIONS', pool: poolName, questionId: q.id, topic: q.topic, detail: `Only ${q.options.length} answer option(s)` });
    } else if (q.options.length !== 4) {
      add({ severity: 'warning', code: 'NONSTANDARD_OPTION_COUNT', pool: poolName, questionId: q.id, topic: q.topic, detail: `${q.options.length} options; four is the editorial default` });
    }

    const normalizedOptions = q.options.map(normalizeText);
    const uniqueOptions = new Set(normalizedOptions);

    const correctOptionLength = normalizedOptions[q.correctIndex]?.length ?? 0;
    const distractorLengths = normalizedOptions
      .filter((_, index) => index !== q.correctIndex)
      .map((option) => option.length)
      .sort((a, b) => a - b);
    const medianDistractorLength = distractorLengths.length
      ? distractorLengths[Math.floor(distractorLengths.length / 2)]
      : 0;
    if (
      correctOptionLength >= 16 &&
      medianDistractorLength > 0 &&
      correctOptionLength - medianDistractorLength >= 10 &&
      correctOptionLength >= medianDistractorLength * 1.6
    ) {
      add({
        severity: 'warning',
        code: 'CORRECT_OPTION_LENGTH_OUTLIER',
        pool: poolName,
        questionId: q.id,
        topic: q.topic,
        detail: `Correct option length ${correctOptionLength} is conspicuously above distractor median ${medianDistractorLength}`,
      });
    }

    if (uniqueOptions.size !== normalizedOptions.length) {
      add({ severity: 'error', code: 'DUPLICATE_OPTIONS', pool: poolName, questionId: q.id, topic: q.topic, detail: 'Two or more answer options are identical after normalization' });
    }

    for (const [field, value] of [
      ['question', q.question],
      ['explanation', q.explanation],
      ['hint', q.hint],
      ['realWorld', q.realWorld],
    ] as const) {
      if (!value?.trim()) add({ severity: 'error', code: 'EMPTY_REQUIRED_TEXT', pool: poolName, questionId: q.id, topic: q.topic, detail: `${field} is empty` });
      if (value && obviousLatexMismatch(value)) add({ severity: 'warning', code: 'LATEX_DELIMITER_MISMATCH', pool: poolName, questionId: q.id, topic: q.topic, detail: `${field} has an obvious unmatched LaTeX delimiter` });
    }
    q.options.forEach((option, index) => {
      if (!option?.trim()) add({ severity: 'error', code: 'EMPTY_OPTION', pool: poolName, questionId: q.id, topic: q.topic, detail: `Option ${index + 1} is empty` });
      if (option && obviousLatexMismatch(option)) add({ severity: 'warning', code: 'LATEX_DELIMITER_MISMATCH', pool: poolName, questionId: q.id, topic: q.topic, detail: `Option ${index + 1} has an obvious unmatched LaTeX delimiter` });
    });

    if (!allowedDifficulties.has(q.difficulty)) {
      add({ severity: 'error', code: 'INVALID_DIFFICULTY', pool: poolName, questionId: q.id, topic: q.topic, detail: `Unknown difficulty ${String(q.difficulty)}` });
    }
    if (poolName === 'standard' && !canonicalTopics.has(q.topic)) {
      add({ severity: 'error', code: 'UNKNOWN_TOPIC', pool: poolName, questionId: q.id, topic: q.topic, detail: 'Question topic is not in the canonical content registry' });
    }

    if (q.explanation.trim().length < 40) {
      add({ severity: 'warning', code: 'SHORT_EXPLANATION', pool: poolName, questionId: q.id, topic: q.topic, detail: `Explanation is only ${q.explanation.trim().length} characters` });
    }

    const correct = normalizeText(q.options[q.correctIndex] ?? '');
    const hint = normalizeText(q.hint);
    if (correct.length >= 4 && hint.includes(correct)) {
      add({ severity: 'warning', code: 'HINT_REVEALS_ANSWER', pool: poolName, questionId: q.id, topic: q.topic, detail: 'Hint contains the normalized correct answer verbatim' });
    }

    for (const glossaryId of q.glossaryLinks ?? []) {
      if (!glossaryIds.has(glossaryId)) {
        add({ severity: 'warning', code: 'BROKEN_GLOSSARY_LINK', pool: poolName, questionId: q.id, topic: q.topic, detail: `Unknown glossary term id: ${glossaryId}` });
      }
    }
    for (const formulaLink of q.formulaLinks ?? []) {
      if (!formulaKeys.has(formulaLink) && !formulaKeys.has(slugify(formulaLink))) {
        add({ severity: 'warning', code: 'BROKEN_FORMULA_LINK', pool: poolName, questionId: q.id, topic: q.topic, detail: `No equation name/slug matches: ${formulaLink}` });
      }
    }
    for (const [symbol, target] of Object.entries(q.symbolLinks ?? {})) {
      if (!symbol.trim() || !/^[a-z0-9-]+$/i.test(target)) {
        add({ severity: 'warning', code: 'SUSPICIOUS_SYMBOL_LINK', pool: poolName, questionId: q.id, topic: q.topic, detail: `Symbol link ${symbol} -> ${target} is empty or not slug-like` });
      }
    }

    if (q.difficulty === 'sota' && !q.paper && !(q.sources?.length)) {
      add({ severity: 'warning', code: 'SOTA_MISSING_PROVENANCE', pool: poolName, questionId: q.id, topic: q.topic, detail: 'SOTA question has neither paper metadata nor general sources' });
    }
    if (q.sources?.some((source) => !/^https?:\/\//.test(source.url))) {
      add({ severity: 'warning', code: 'SOURCE_URL_INVALID', pool: poolName, questionId: q.id, topic: q.topic, detail: 'One or more source URLs are not absolute http(s) URLs' });
    }
  }

  for (const [id, count] of idCounts) {
    if (count > 1) add({ severity: 'error', code: 'DUPLICATE_ID', pool: poolName, questionId: id, detail: `ID appears ${count} times in this pool` });
  }
  for (const duplicates of textMap.values()) {
    if (duplicates.length > 1) {
      for (let i = 1; i < duplicates.length; i += 1) {
        add({
          severity: 'error',
          code: 'EXACT_DUPLICATE_QUESTION',
          pool: poolName,
          questionId: duplicates[i].id,
          relatedQuestionId: duplicates[0].id,
          topic: duplicates[i].topic,
          detail: 'Question text duplicates another question in the same pool',
        });
      }
    }
  }

  poolSummaries[poolName] = {
    questions: questions.length,
    errors: 0,
    warnings: 0,
    duplicateIds: [...idCounts.values()].filter((count) => count > 1).length,
    exactDuplicateQuestions: [...textMap.values()].filter((group) => group.length > 1).length,
  };
}

// Same-topic near duplicates in the standard pool.
const byTopic = new Map<string, Question[]>();
for (const q of allQuestions) byTopic.set(q.topic, [...(byTopic.get(q.topic) ?? []), q]);

for (const [topic, questions] of byTopic) {
  if (questions.length < 8) continue;
  const positionCounts = [0, 0, 0, 0];
  for (const question of questions) {
    if (question.correctIndex >= 0 && question.correctIndex < positionCounts.length) {
      positionCounts[question.correctIndex] += 1;
    }
  }
  const maxPositionCount = Math.max(...positionCounts);
  if (maxPositionCount / questions.length >= 0.55) {
    add({
      severity: 'warning',
      code: 'ANSWER_POSITION_BIAS',
      pool: 'standard',
      topic,
      detail: `Correct-answer positions are concentrated: [${positionCounts.join(', ')}] across ${questions.length} questions`,
    });
  }
}

for (const [topic, questions] of byTopic) {
  for (let i = 0; i < questions.length; i += 1) {
    const aTokens = tokens(questions[i].question);
    if (aTokens.size < 6) continue;
    for (let j = i + 1; j < questions.length; j += 1) {
      const bTokens = tokens(questions[j].question);
      if (bTokens.size < 6) continue;
      const similarity = jaccard(aTokens, bTokens);
      if (similarity >= 0.9 && normalizeText(questions[i].question) !== normalizeText(questions[j].question)) {
        add({
          severity: 'warning',
          code: 'NEAR_DUPLICATE_QUESTION',
          pool: 'standard',
          questionId: questions[i].id,
          relatedQuestionId: questions[j].id,
          topic,
          detail: `Token similarity ${similarity.toFixed(2)}`,
        });
      }
    }
  }
}

// Exact text reused across pool boundaries is suspicious even when IDs differ.
const crossPoolText = new Map<string, Array<{ pool: string; q: Question }>>();
for (const [pool, questions] of Object.entries(pools)) {
  for (const q of questions) {
    const normalized = normalizeText(q.question);
    if (normalized) crossPoolText.set(normalized, [...(crossPoolText.get(normalized) ?? []), { pool, q }]);
  }
}
for (const group of crossPoolText.values()) {
  const poolNames = new Set(group.map((entry) => entry.pool));
  if (poolNames.size > 1) {
    const [first, ...rest] = group;
    for (const entry of rest) {
      if (entry.pool === first.pool) continue;
      add({
        severity: 'warning',
        code: 'CROSS_POOL_DUPLICATE_TEXT',
        pool: entry.pool,
        questionId: entry.q.id,
        relatedQuestionId: first.q.id,
        topic: entry.q.topic,
        detail: `Question text is also present in the ${first.pool} pool`,
      });
    }
  }
}

for (const issue of issues) {
  poolSummaries[issue.pool] ??= { questions: 0, errors: 0, warnings: 0, duplicateIds: 0, exactDuplicateQuestions: 0 };
  poolSummaries[issue.pool][issue.severity === 'error' ? 'errors' : 'warnings'] += 1;
}

const topicQuality = [...byTopic.entries()].map(([topic, questions]) => {
  const topicIssues = issues.filter((issue) => issue.pool === 'standard' && issue.topic === topic);
  const counts = {
    easy: questions.filter((q) => q.difficulty === 'easy').length,
    hard: questions.filter((q) => q.difficulty === 'hard').length,
    sota: questions.filter((q) => q.difficulty === 'sota').length,
  };
  return {
    topic,
    total: questions.length,
    ...counts,
    errors: topicIssues.filter((issue) => issue.severity === 'error').length,
    warnings: topicIssues.filter((issue) => issue.severity === 'warning').length,
    provenance: questions.filter((q) => q.paper || q.sources?.length).length,
  };
}).sort((a, b) => a.total - b.total || a.topic.localeCompare(b.topic));

const report = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  summary: {
    pools: poolSummaries,
    errors: issues.filter((issue) => issue.severity === 'error').length,
    warnings: issues.filter((issue) => issue.severity === 'warning').length,
    standardTopics: topicQuality.length,
    standardQuestions: allQuestions.length,
  },
  topics: topicQuality,
  issues,
};

await writeFile(new URL('../docs/content-quality.json', import.meta.url), `${JSON.stringify(report, null, 2)}\n`);

const underCovered = topicQuality.filter((topic) => topic.total < 9).slice(0, 30);
const missingSotaProvenance = issues.filter((issue) => issue.code === 'SOTA_MISSING_PROVENANCE').length;
const brokenCrossLinks = issues.filter((issue) => issue.code === 'BROKEN_GLOSSARY_LINK' || issue.code === 'BROKEN_FORMULA_LINK').length;
const nearDuplicates = issues.filter((issue) => issue.code === 'NEAR_DUPLICATE_QUESTION').length;

const markdown = `# Content enhancement report

Generated: ${report.generatedAt}

## Quality gate

- Standard questions: ${allQuestions.length}
- Standard topics: ${topicQuality.length}
- Hard defects: ${report.summary.errors}
- Warnings: ${report.summary.warnings}
- Near-duplicate candidates: ${nearDuplicates}
- Broken cross-link warnings: ${brokenCrossLinks}
- SOTA questions missing provenance: ${missingSotaProvenance}

## Lowest-coverage visible topics

| Topic | Easy | Hard | SOTA | Total | Warnings |
| --- | ---: | ---: | ---: | ---: | ---: |
${underCovered.map((topic) => `| ${topic.topic} | ${topic.easy} | ${topic.hard} | ${topic.sota} | ${topic.total} | ${topic.warnings} |`).join('\n')}

## Augmentation order

1. Fix every hard quality defect before adding questions.
2. Resolve exact/near duplicates and broken cross-links in the topics being expanded.
3. Raise visible topics below 9 questions toward a minimum of 3 per difficulty where the difficulty genuinely fits the subject.
4. Prioritize topics with only 2–3 questions before already-deep packs.
5. For SOTA additions, require a real source and factual-as-of date when the claim can become stale.
6. Expand one field at a time so editorial review remains tractable.

## Taxonomy review

Do not merge similarly named topics by label alone. Consolidate only when the underlying questions have materially overlapping scope; otherwise clarify descriptions and ownership. Legacy slugs should remain aliases rather than duplicate selectable topics.

## Provenance

The Question schema supports optional \`sources\`, \`reviewedAt\`, and \`factualAsOf\`. Existing content is not backfilled automatically: provenance should be added during substantive review so citations are real rather than synthetic.
`;

await writeFile(new URL('../docs/content-enhancement-report.md', import.meta.url), markdown);

for (const issue of issues) {
  const label = issue.severity === 'error' ? 'ERROR' : 'WARN';
  console[issue.severity === 'error' ? 'error' : 'warn'](`${label} [${issue.code}] ${issue.pool}${issue.questionId ? ` #${issue.questionId}` : ''}: ${issue.detail}`);
}

const useBaseline = process.argv.includes('--allow-baseline');
let allowedErrors = 0;
let allowedWarnings = 0;

if (useBaseline) {
  const baseline = JSON.parse(
    await readFile(new URL('./content-quality-baseline.json', import.meta.url), 'utf8'),
  );
  allowedErrors = baseline.maxErrors;
  allowedWarnings = baseline.maxWarnings;

  if (!Number.isInteger(allowedErrors) || allowedErrors < 0) {
    console.error('Invalid content-quality baseline: maxErrors must be a non-negative integer.');
    process.exit(1);
  }
  if (!Number.isInteger(allowedWarnings) || allowedWarnings < 0) {
    console.error('Invalid content-quality baseline: maxWarnings must be a non-negative integer.');
    process.exit(1);
  }
}

console.log(`Quality audit: ${report.summary.errors} errors, ${report.summary.warnings} warnings across ${allQuestions.length} standard questions and ${vaultQuestions.length} Vault questions.`);

if (report.summary.errors > allowedErrors) {
  console.error(
    useBaseline
      ? `Quality audit regression: ${report.summary.errors} errors exceeds baseline ${allowedErrors}.`
      : `Quality audit failed: ${report.summary.errors} hard errors remain.`,
  );
  process.exit(1);
}
if (useBaseline && report.summary.warnings > allowedWarnings) {
  console.error(
    `Quality audit warning regression: ${report.summary.warnings} warnings exceeds baseline ${allowedWarnings}.`,
  );
  process.exit(1);
}

if (useBaseline && report.summary.errors < allowedErrors) {
  console.warn(
    `Quality audit improved to ${report.summary.errors} errors; lower baseline from ${allowedErrors}.`,
  );
}
if (useBaseline && report.summary.warnings < allowedWarnings) {
  console.warn(
    `Quality warning debt improved to ${report.summary.warnings}; lower warning baseline from ${allowedWarnings}.`,
  );
}
