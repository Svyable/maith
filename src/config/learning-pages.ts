import { TOPICS, type TopicMeta } from './content-registry';
import { FIELDS, type FieldMeta } from './fields';
import { QUESTION_COUNTS } from './content-stats';
import { buildLearnFieldPath, buildLearnTopicPath } from './site-navigation';

export const MIN_INDEXABLE_TOPIC_QUESTIONS = 5;
export const MIN_INDEXABLE_FIELD_QUESTIONS = 15;
export const MIN_INDEXABLE_FIELD_TOPICS = 2;

export interface QuestionCountBreakdown {
  easy: number;
  hard: number;
  sota: number;
  total: number;
}

export interface LearningFieldPage {
  kind: 'field';
  path: string;
  field: FieldMeta;
  topics: LearningTopicPage[];
  questionCount: number;
  indexable: boolean;
  seoTitle: string;
  seoDescription: string;
}

export interface LearningTopicPage {
  kind: 'topic';
  path: string;
  topic: TopicMeta;
  field: FieldMeta;
  counts: QuestionCountBreakdown;
  indexable: boolean;
  seoTitle: string;
  seoDescription: string;
}

export type LearningPage = LearningFieldPage | LearningTopicPage;

const QUESTION_COUNT_MAP = QUESTION_COUNTS as unknown as Record<string, QuestionCountBreakdown>;

function trimMeta(text: string, max = 160): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max - 1);
  const boundary = slice.lastIndexOf(' ');
  return `${slice.slice(0, boundary > 90 ? boundary : slice.length)}…`;
}

function topicSeoTitle(label: string): string {
  const full = `${label} Quiz & Practice Questions | mAIth`;
  return full.length <= 65 ? full : `${label} Quiz | mAIth`;
}

function fieldSeoTitle(label: string): string {
  const full = `${label} Practice Quizzes & Questions | mAIth`;
  return full.length <= 65 ? full : `${label} Practice Quizzes | mAIth`;
}

function topicSeoDescription(topic: TopicMeta, counts: QuestionCountBreakdown): string {
  return trimMeta(
    `Practice ${topic.label} with ${counts.total} interactive questions covering ${topic.description}. Choose Easy, Hard, or SOTA difficulty and get immediate feedback.`,
  );
}

function fieldSeoDescription(field: FieldMeta, topics: TopicMeta[], questionCount: number): string {
  const examples = topics.slice(0, 4).map((topic) => topic.label).join(', ');
  return trimMeta(
    `Explore ${field.label} with ${questionCount} interactive questions across ${topics.length} topics, including ${examples}. Choose a difficulty and practice with immediate feedback.`,
  );
}

const FIELD_BY_SLUG = new Map(FIELDS.map((field) => [field.slug, field]));

export const LEARNING_TOPIC_PAGES: LearningTopicPage[] = TOPICS
  .map((topic) => {
    const field = FIELD_BY_SLUG.get(topic.field);
    if (!field) return null;

    const counts = QUESTION_COUNT_MAP[topic.slug] ?? { easy: 0, hard: 0, sota: 0, total: 0 };
    return {
      kind: 'topic' as const,
      path: buildLearnTopicPath(field.slug, topic.slug),
      topic,
      field,
      counts,
      indexable: counts.total >= MIN_INDEXABLE_TOPIC_QUESTIONS,
      seoTitle: topicSeoTitle(topic.label),
      seoDescription: topicSeoDescription(topic, counts),
    };
  })
  .filter((page): page is LearningTopicPage => page !== null);

const TOPICS_BY_FIELD = new Map<string, LearningTopicPage[]>();
for (const topicPage of LEARNING_TOPIC_PAGES) {
  const pages = TOPICS_BY_FIELD.get(topicPage.field.slug) ?? [];
  pages.push(topicPage);
  TOPICS_BY_FIELD.set(topicPage.field.slug, pages);
}

export const LEARNING_FIELD_PAGES: LearningFieldPage[] = FIELDS
  .filter((field) => field.slug !== 'all' && field.available)
  .map((field) => {
    const topics = TOPICS_BY_FIELD.get(field.slug) ?? [];
    const questionCount = topics.reduce((sum, topic) => sum + topic.counts.total, 0);
    const topicMeta = topics.map((topic) => topic.topic);
    const indexableTopicCount = topics.filter((topic) => topic.indexable).length;

    return {
      kind: 'field' as const,
      path: buildLearnFieldPath(field.slug),
      field,
      topics,
      questionCount,
      indexable:
        questionCount >= MIN_INDEXABLE_FIELD_QUESTIONS
        && indexableTopicCount >= MIN_INDEXABLE_FIELD_TOPICS,
      seoTitle: fieldSeoTitle(field.label),
      seoDescription: fieldSeoDescription(field, topicMeta, questionCount),
    };
  })
  .filter((page) => page.topics.length > 0);

export const LEARNING_PAGES: LearningPage[] = [
  ...LEARNING_FIELD_PAGES,
  ...LEARNING_TOPIC_PAGES,
];

export const LEARNING_PAGE_MAP: Record<string, LearningPage> = Object.fromEntries(
  LEARNING_PAGES.map((page) => [page.path, page]),
);

export const LEARNING_INDEXABLE_PAGES = LEARNING_PAGES.filter((page) => page.indexable);

export function getLearningPage(pathname: string): LearningPage | undefined {
  return LEARNING_PAGE_MAP[pathname.replace(/\/+$/, '') || '/'];
}

export function getLearningFieldPage(fieldSlug: string): LearningFieldPage | undefined {
  return LEARNING_FIELD_PAGES.find((page) => page.field.slug === fieldSlug);
}

export function getLearningTopicPage(fieldSlug: string, topicSlug: string): LearningTopicPage | undefined {
  return LEARNING_TOPIC_PAGES.find(
    (page) => page.field.slug === fieldSlug && page.topic.slug === topicSlug,
  );
}
