import { resolveTopicSlugs } from './content-registry';
import { FORMULA_REFERENCE_PAGES } from './formula-pages';
import { GLOSSARY_REFERENCE_PAGES } from './glossary-pages';
import { LEARNING_TOPIC_PAGES, type LearningTopicPage } from './learning-pages';
import { THINKER_REFERENCE_PAGES } from './thinker-pages';

export const MAX_TOPIC_FORMULA_LINKS = 4;
export const MAX_TOPIC_GLOSSARY_LINKS = 4;
export const MAX_TOPIC_THINKER_LINKS = 3;

export const MIN_FORMULA_CLUSTER_SCORE = 8;
export const MIN_GLOSSARY_CLUSTER_SCORE = 10;
export const MIN_THINKER_CLUSTER_SCORE = 7;

export type TopicReferenceKind = 'formula' | 'glossary' | 'thinker';

export interface TopicReferenceLink {
  kind: TopicReferenceKind;
  path: string;
  label: string;
  context: string;
  score: number;
}

export interface TopicReferenceCluster {
  topicPath: string;
  topicSlug: string;
  formulas: TopicReferenceLink[];
  glossary: TopicReferenceLink[];
  thinkers: TopicReferenceLink[];
}

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'the',
  'of',
  'to',
  'in',
  'for',
  'with',
  'on',
  'by',
  'from',
  'system',
  'systems',
  'method',
  'methods',
  'model',
  'models',
  'science',
  'engineering',
]);

const FIELD_ALIASES: Record<string, string> = {
  'computer-science': 'cs',
  'data-science': 'cs',
  economics: 'finance',
};

function normalize(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function tokens(value: string): string[] {
  return Array.from(
    new Set(
      normalize(value)
        .split(' ')
        .filter((token) => token.length >= 3 && !STOP_WORDS.has(token)),
    ),
  );
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^$()|[\]\\{}]/g, '\\$&');
}

function phraseMatch(haystack: string, needle: string): boolean {
  const normalizedNeedle = normalize(needle);
  return normalizedNeedle.length >= 4 && normalize(haystack).includes(normalizedNeedle);
}

function tokenScore(
  topic: LearningTopicPage,
  sources: Array<{ text: string; weight: number }>,
): number {
  const labelTokens = tokens(topic.topic.label);
  const descriptionTokens = tokens(topic.topic.description)
    .filter((token) => !labelTokens.includes(token))
    .slice(0, 8);

  let score = 0;

  for (const token of labelTokens) {
    const expression = new RegExp('(^|\\s)' + escapeRegex(token) + '(?=\\s|$)');
    for (const source of sources) {
      if (expression.test(normalize(source.text))) {
        score += source.weight;
      }
    }
  }

  for (const token of descriptionTokens) {
    const expression = new RegExp('(^|\\s)' + escapeRegex(token) + '(?=\\s|$)');
    if (sources.some((source) => expression.test(normalize(source.text)))) {
      score += 1;
    }
  }

  return score;
}

function canonicalField(field: string): string {
  return FIELD_ALIASES[field] ?? field;
}

function formulaScore(topic: LearningTopicPage, page: (typeof FORMULA_REFERENCE_PAGES)[number]): number {
  const equation = page.equation;
  const primaryText = [
    equation.name,
    equation.field,
    equation.subDomain,
    equation.tags.join(' '),
  ].join(' ');

  let score = 0;
  if (phraseMatch(primaryText, topic.topic.label)) score += 12;
  if (phraseMatch(equation.tags.join(' '), topic.topic.label)) score += 6;
  if (phraseMatch(equation.field, topic.topic.label)) score += 5;
  if (phraseMatch(equation.subDomain, topic.topic.label)) score += 5;

  score += tokenScore(topic, [
    { text: equation.name, weight: 4 },
    { text: equation.tags.join(' '), weight: 4 },
    { text: equation.field, weight: 3 },
    { text: equation.subDomain, weight: 3 },
    { text: equation.significance, weight: 1 },
    { text: equation.applications, weight: 1 },
  ]);

  return score;
}

function glossaryScore(topic: LearningTopicPage, page: (typeof GLOSSARY_REFERENCE_PAGES)[number]): number {
  const term = page.term;

  if (term.topic) {
    const resolved = resolveTopicSlugs(term.topic);
    if (resolved.includes(topic.topic.slug)) return 100;
  }

  if (canonicalField(term.field) !== canonicalField(topic.field.slug)) return 0;

  let score = 0;
  if (phraseMatch(term.term, topic.topic.label)) score += 12;
  if (phraseMatch(term.definition, topic.topic.label)) score += 7;

  score += tokenScore(topic, [
    { text: term.term, weight: 5 },
    { text: term.definition, weight: 2 },
    { text: term.example ?? '', weight: 1 },
  ]);

  return score;
}

function thinkerScore(topic: LearningTopicPage, page: (typeof THINKER_REFERENCE_PAGES)[number]): number {
  const thinker = page.thinker;
  const sameField = thinker.fields.some(
    (field) => canonicalField(field) === canonicalField(topic.field.slug),
  );

  const semanticText = [thinker.domain, thinker.description, thinker.tagline].join(' ');
  const exactTopicMatch = phraseMatch(semanticText, topic.topic.label);

  if (!sameField && !exactTopicMatch) return 0;

  let score = sameField ? 2 : 0;
  if (phraseMatch(thinker.domain, topic.topic.label)) score += 12;
  if (phraseMatch(thinker.description, topic.topic.label)) score += 8;
  if (phraseMatch(thinker.tagline, topic.topic.label)) score += 4;

  score += tokenScore(topic, [
    { text: thinker.domain, weight: 4 },
    { text: thinker.description, weight: 3 },
    { text: thinker.tagline, weight: 1 },
  ]);

  return score;
}

function sortLinks(a: TopicReferenceLink, b: TopicReferenceLink): number {
  return b.score - a.score || a.label.localeCompare(b.label);
}

function buildCluster(topic: LearningTopicPage): TopicReferenceCluster {
  const formulas = FORMULA_REFERENCE_PAGES
    .filter((page) => page.seo.indexable)
    .map((page) => ({
      kind: 'formula' as const,
      path: page.path,
      label: page.equation.name,
      context: page.equation.field + ' · ' + page.equation.discoverer,
      score: formulaScore(topic, page),
    }))
    .filter((link) => link.score >= MIN_FORMULA_CLUSTER_SCORE)
    .sort(sortLinks)
    .slice(0, MAX_TOPIC_FORMULA_LINKS);

  const glossary = GLOSSARY_REFERENCE_PAGES
    .filter((page) => page.seo.indexable)
    .map((page) => ({
      kind: 'glossary' as const,
      path: page.path,
      label: page.term.term,
      context: page.term.definition,
      score: glossaryScore(topic, page),
    }))
    .filter((link) => link.score >= MIN_GLOSSARY_CLUSTER_SCORE)
    .sort(sortLinks)
    .slice(0, MAX_TOPIC_GLOSSARY_LINKS);

  const thinkers = THINKER_REFERENCE_PAGES
    .filter((page) => page.seo.indexable)
    .map((page) => ({
      kind: 'thinker' as const,
      path: page.path,
      label: page.thinker.name,
      context: page.thinker.domain + ' · ' + page.thinker.era,
      score: thinkerScore(topic, page),
    }))
    .filter((link) => link.score >= MIN_THINKER_CLUSTER_SCORE)
    .sort(sortLinks)
    .slice(0, MAX_TOPIC_THINKER_LINKS);

  return {
    topicPath: topic.path,
    topicSlug: topic.topic.slug,
    formulas,
    glossary,
    thinkers,
  };
}

const clusterCache = new Map<string, TopicReferenceCluster>();

export function getTopicReferenceCluster(topicPath: string): TopicReferenceCluster | undefined {
  const cached = clusterCache.get(topicPath);
  if (cached) return cached;

  const topic = LEARNING_TOPIC_PAGES.find((page) => page.path === topicPath);
  if (!topic) return undefined;

  const cluster = buildCluster(topic);
  clusterCache.set(topicPath, cluster);
  return cluster;
}

export function getTopicReferenceClusterBySlug(topicSlug: string): TopicReferenceCluster | undefined {
  const topic = LEARNING_TOPIC_PAGES.find((page) => page.topic.slug === topicSlug);
  return topic ? getTopicReferenceCluster(topic.path) : undefined;
}

export function buildAllTopicReferenceClusters(): TopicReferenceCluster[] {
  return LEARNING_TOPIC_PAGES.flatMap((page) => {
    const cluster = getTopicReferenceCluster(page.path);
    return cluster ? [cluster] : [];
  });
}


export const MAX_REFERENCE_TOPIC_LINKS = 5;

export interface ReferenceTopicBacklink {
  path: string;
  topicSlug: string;
  label: string;
  fieldLabel: string;
  questionCount: number;
  score: number;
}

let referenceTopicBacklinkMap: Map<string, ReferenceTopicBacklink[]> | null = null;

function buildReferenceTopicBacklinkMap(): Map<string, ReferenceTopicBacklink[]> {
  if (referenceTopicBacklinkMap) return referenceTopicBacklinkMap;

  const next = new Map<string, ReferenceTopicBacklink[]>();

  for (const topic of LEARNING_TOPIC_PAGES) {
    if (!topic.indexable) continue;
    const cluster = getTopicReferenceCluster(topic.path);
    if (!cluster) continue;

    for (const reference of [...cluster.formulas, ...cluster.glossary, ...cluster.thinkers]) {
      const links = next.get(reference.path) ?? [];
      links.push({
        path: topic.path,
        topicSlug: topic.topic.slug,
        label: topic.topic.label,
        fieldLabel: topic.field.label,
        questionCount: topic.counts.total,
        score: reference.score,
      });
      next.set(reference.path, links);
    }
  }

  for (const links of next.values()) {
    links.sort(
      (a, b) =>
        b.score - a.score
        || b.questionCount - a.questionCount
        || a.label.localeCompare(b.label),
    );
  }

  referenceTopicBacklinkMap = next;
  return next;
}

export function getReferenceTopicBacklinks(referencePath: string): ReferenceTopicBacklink[] {
  return (buildReferenceTopicBacklinkMap().get(referencePath) ?? []).slice(0, MAX_REFERENCE_TOPIC_LINKS);
}

export function buildAllReferenceTopicBacklinks(): Map<string, ReferenceTopicBacklink[]> {
  return buildReferenceTopicBacklinkMap();
}
