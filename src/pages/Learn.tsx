import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { SiteShell } from '@/components/layout/SiteShell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LEARNING_FIELD_PAGES,
  getLearningFieldPage,
  getLearningTopicPage,
} from '@/config/learning-pages';
import {
  APP_PATHS,
  buildFieldQuizHref,
  buildLearnFieldPath,
  buildTopicQuizHref,
} from '@/config/site-navigation';
import NotFound from './NotFound';

function Breadcrumbs({
  fieldLabel,
  fieldPath,
  topicLabel,
}: {
  fieldLabel?: string;
  fieldPath?: string;
  topicLabel?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
      <Link to={APP_PATHS.home} className="hover:text-foreground">mAIth</Link>
      <ChevronRight className="h-3 w-3" aria-hidden="true" />
      <Link to={APP_PATHS.learn} className="hover:text-foreground">Practice Library</Link>
      {fieldLabel && fieldPath && (
        <>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          {topicLabel ? (
            <Link to={fieldPath} className="hover:text-foreground">{fieldLabel}</Link>
          ) : (
            <span className="text-foreground">{fieldLabel}</span>
          )}
        </>
      )}
      {topicLabel && (
        <>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span className="text-foreground">{topicLabel}</span>
        </>
      )}
    </nav>
  );
}

function LearningHub() {
  const totalQuestions = LEARNING_FIELD_PAGES.reduce((sum, page) => sum + page.questionCount, 0);
  const totalTopics = LEARNING_FIELD_PAGES.reduce((sum, page) => sum + page.topics.length, 0);

  return (
    <>
      <Breadcrumbs />
      <section className="mb-8 max-w-3xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">🧭</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Practice Library</p>
            <h1 className="text-3xl font-display font-bold text-foreground md:text-4xl">
              Math, Science & AI Practice Topics
            </h1>
          </div>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Browse structured practice by field and topic. The library currently spans {totalTopics} standard
          topics and {totalQuestions} interactive questions across mathematics, physics, computer science,
          engineering, finance, and related technical fields.
        </p>
      </section>

      <section aria-labelledby="fields-heading">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 id="fields-heading" className="text-xl font-display font-bold text-foreground">Explore by field</h2>
            <p className="text-sm text-muted-foreground">Choose a field to see its practice topics and question coverage.</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {LEARNING_FIELD_PAGES.map((page) => (
            <Link
              key={page.field.slug}
              to={page.path}
              className="group rounded-2xl border border-border/60 bg-card/80 p-5 transition-colors hover:border-primary/50 hover:bg-card"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl" aria-hidden="true">{page.field.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-foreground">{page.field.label}</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{page.field.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>{page.topics.length} topics</span>
                    <span aria-hidden="true">·</span>
                    <span>{page.questionCount} questions</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function FieldLanding({ fieldSlug }: { fieldSlug: string }) {
  const page = getLearningFieldPage(fieldSlug);
  if (!page) return <NotFound />;

  return (
    <>
      <Breadcrumbs fieldLabel={page.field.label} fieldPath={page.path} />

      <section className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">{page.field.emoji}</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Practice Field</p>
            <h1 className="text-3xl font-display font-bold text-foreground md:text-4xl">
              {page.field.label} Practice Quizzes
            </h1>
          </div>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          {page.field.description}. Practice {page.questionCount} questions across {page.topics.length} focused
          topics, with Easy, Hard, and SOTA difficulty where available.
        </p>
        <div className="mt-4">
          <Button asChild>
            <Link to={buildFieldQuizHref(page.field.slug)}>
              Start a {page.field.label} quiz <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="mb-4 text-xl font-display font-bold text-foreground">
          {page.field.label} topics
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {page.topics.map((topicPage) => (
            <Link
              key={topicPage.topic.slug}
              to={topicPage.path}
              className="group rounded-2xl border border-border/60 bg-card/80 p-4 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">{topicPage.topic.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-foreground">{topicPage.topic.label}</h3>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{topicPage.topic.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <Badge variant="outline">{topicPage.counts.total} questions</Badge>
                    {topicPage.counts.easy > 0 && <Badge variant="secondary">{topicPage.counts.easy} Easy</Badge>}
                    {topicPage.counts.hard > 0 && <Badge variant="secondary">{topicPage.counts.hard} Hard</Badge>}
                    {topicPage.counts.sota > 0 && <Badge variant="secondary">{topicPage.counts.sota} SOTA</Badge>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function TopicLanding({ fieldSlug, topicSlug }: { fieldSlug: string; topicSlug: string }) {
  const page = getLearningTopicPage(fieldSlug, topicSlug);
  if (!page) return <NotFound />;

  const related = getLearningFieldPage(fieldSlug)?.topics
    .filter((candidate) => candidate.topic.slug !== topicSlug)
    .sort((a, b) => b.counts.total - a.counts.total)
    .slice(0, 6) ?? [];

  return (
    <>
      <Breadcrumbs
        fieldLabel={page.field.label}
        fieldPath={buildLearnFieldPath(page.field.slug)}
        topicLabel={page.topic.label}
      />

      <article>
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">{page.topic.emoji}</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{page.field.label}</p>
              <h1 className="text-3xl font-display font-bold text-foreground md:text-4xl">
                {page.topic.label} Quiz & Practice Questions
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Practice {page.topic.label} through {page.counts.total} interactive questions focused on {page.topic.description}.
            Choose the difficulty mix that fits your level and get immediate answer feedback.
          </p>
        </header>

        <section className="mb-8 grid gap-3 sm:grid-cols-3" aria-label="Question coverage">
          <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Easy</p>
            <p className="mt-1 text-2xl font-display font-bold text-foreground">{page.counts.easy}</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Hard</p>
            <p className="mt-1 text-2xl font-display font-bold text-foreground">{page.counts.hard}</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">SOTA</p>
            <p className="mt-1 text-2xl font-display font-bold text-foreground">{page.counts.sota}</p>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <div className="flex items-start gap-3">
            <BookOpen className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">What you’ll practice</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{page.topic.description}.</p>
              <Button asChild className="mt-4">
                <Link to={buildTopicQuizHref(page.topic.slug)}>
                  Start {page.topic.label} practice <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="mb-3 text-xl font-display font-bold text-foreground">
              Related {page.field.label} topics
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((candidate) => (
                <Link
                  key={candidate.topic.slug}
                  to={candidate.path}
                  className="rounded-xl border border-border/60 bg-card/70 p-3 text-sm transition-colors hover:border-primary/50"
                >
                  <span className="mr-2" aria-hidden="true">{candidate.topic.emoji}</span>
                  <span className="font-semibold text-foreground">{candidate.topic.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{candidate.counts.total} questions</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export default function Learn() {
  const { fieldSlug, topicSlug } = useParams<{ fieldSlug?: string; topicSlug?: string }>();

  let content;
  if (fieldSlug && topicSlug) {
    content = <TopicLanding fieldSlug={fieldSlug} topicSlug={topicSlug} />;
  } else if (fieldSlug) {
    content = <FieldLanding fieldSlug={fieldSlug} />;
  } else {
    content = <LearningHub />;
  }

  if (fieldSlug && topicSlug && !getLearningTopicPage(fieldSlug, topicSlug)) return <NotFound />;
  if (fieldSlug && !topicSlug && !getLearningFieldPage(fieldSlug)) return <NotFound />;

  return (
    <SiteShell>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        {content}
      </main>
    </SiteShell>
  );
}
