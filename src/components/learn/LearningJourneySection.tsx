import { ArrowRight, Route } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  LEARNING_JOURNEYS,
  getLearningJourneyStages,
} from '@/config/learning-journeys';

export default function LearningJourneySection() {
  return (
    <section className="mb-10" aria-labelledby="guided-journeys-heading">
      <div className="mb-4 flex items-start gap-3">
        <Route className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Guided journeys
          </p>
          <h2 id="guided-journeys-heading" className="mt-1 text-xl font-display font-bold text-foreground">
            Learn toward an outcome
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Follow an ordered path through fully mapped mastery topics. Each stage builds on concepts
            that can unlock the next one.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {LEARNING_JOURNEYS.map((journey) => {
          const stages = getLearningJourneyStages(journey);
          const totalConcepts = stages.reduce((sum, stage) => sum + stage.conceptCount, 0);
          const first = stages[0];

          return (
            <article
              key={journey.id}
              className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/80 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl" aria-hidden="true">{journey.emoji}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{journey.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {journey.description}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {journey.outcome}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-border bg-background/70 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                  {stages.length} stages
                </span>
                <span className="rounded-full border border-border bg-background/70 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                  {totalConcepts} mapped concepts
                </span>
              </div>

              <ol className="mt-4 space-y-2">
                {stages.map((stage) => (
                  <li key={stage.topic.slug}>
                    <Link
                      to={stage.path}
                      className="group flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 px-3 py-2 text-sm transition-colors hover:border-primary/40"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                        {stage.index + 1}
                      </span>
                      <span className="min-w-0 flex-1 truncate font-semibold text-foreground group-hover:text-primary">
                        {stage.topic.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {stage.conceptCount} concepts
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>

              {first && (
                <Link
                  to={first.path}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  Start with {first.topic.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
