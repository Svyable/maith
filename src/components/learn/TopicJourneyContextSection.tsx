import { ArrowLeft, ArrowRight, Route } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getJourneysForTopic,
  getLearningJourneyStages,
} from '@/config/learning-journeys';

export default function TopicJourneyContextSection({
  topicSlug,
}: {
  topicSlug: string;
}) {
  const journeys = getJourneysForTopic(topicSlug);
  if (journeys.length === 0) return null;

  return (
    <section className="mb-8" aria-labelledby="journey-context-heading">
      <div className="mb-3 flex items-start gap-2.5">
        <Route className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Learning journey
          </p>
          <h2 id="journey-context-heading" className="mt-1 text-xl font-display font-bold text-foreground">
            Where this topic can take you
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        {journeys.map((journey) => {
          const stages = getLearningJourneyStages(journey);
          const currentIndex = stages.findIndex((stage) => stage.topic.slug === topicSlug);
          if (currentIndex < 0) return null;

          const previous = stages[currentIndex - 1];
          const next = stages[currentIndex + 1];

          return (
            <article
              key={journey.id}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold text-foreground">
                    <span className="mr-2" aria-hidden="true">{journey.emoji}</span>
                    {journey.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Stage {currentIndex + 1} of {stages.length} · {journey.outcome}
                  </p>
                </div>
              </div>

              <ol className="mt-4 flex flex-wrap gap-1.5" aria-label={journey.label + ' stages'}>
                {stages.map((stage) => {
                  const current = stage.topic.slug === topicSlug;
                  return (
                    <li key={stage.topic.slug}>
                      <Link
                        to={stage.path}
                        aria-current={current ? 'step' : undefined}
                        className={
                          'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold transition-colors ' +
                          (current
                            ? 'border-primary/40 bg-primary/15 text-primary'
                            : 'border-border bg-background/70 text-muted-foreground hover:border-primary/40 hover:text-primary')
                        }
                      >
                        {stage.index + 1}. {stage.topic.label}
                      </Link>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-4 flex flex-wrap gap-2">
                {previous && (
                  <Link
                    to={previous.path}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/70 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    {previous.topic.label}
                  </Link>
                )}
                {next && (
                  <Link
                    to={next.path}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/15"
                  >
                    Next: {next.topic.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
