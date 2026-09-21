import { Link } from 'react-router-dom';
import { ArrowUpRight, Network } from 'lucide-react';
import { CONCEPTS, CONCEPT_MAP } from '@/config/concepts';
import { TOPIC_MAP } from '@/config/constants';
import { buildLearnTopicPath } from '@/config/site-navigation';

function prerequisiteHref(conceptId: string, currentTopic: string): string | null {
  const concept = CONCEPT_MAP[conceptId];
  const topicSlug = concept?.topics[0];
  if (!topicSlug || topicSlug === currentTopic) return null;

  const topic = TOPIC_MAP[topicSlug];
  return topic ? buildLearnTopicPath(topic.field, topic.slug) : null;
}

export default function TopicConceptMapSection({
  topicSlug,
  topicLabel,
}: {
  topicSlug: string;
  topicLabel: string;
}) {
  const concepts = CONCEPTS.filter(
    (concept) => concept.status === 'active' && concept.topics.includes(topicSlug),
  );

  if (concepts.length === 0) return null;

  return (
    <section className="mb-8" aria-labelledby="mastery-map-heading">
      <div className="mb-4 flex items-start gap-3">
        <Network className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Mastery map
          </p>
          <h2 id="mastery-map-heading" className="mt-1 text-xl font-display font-bold text-foreground">
            What mastery of {topicLabel} is built from
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            These concepts are the durable knowledge units behind mapped quiz evidence.
            Prerequisites show what to strengthen first when a later concept is blocking you.
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {concepts.map((concept) => (
          <article
            key={concept.id}
            className="rounded-2xl border border-border/60 bg-card/75 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-base font-bold text-foreground">
                  {concept.label}
                </h3>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground/70">
                  {concept.id}
                </p>
              </div>
              <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-1 text-[10px] font-bold text-primary">
                concept
              </span>
            </div>

            {concept.prerequisites.length > 0 ? (
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                  Prerequisites
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {concept.prerequisites.map((prerequisiteId) => {
                    const prerequisite = CONCEPT_MAP[prerequisiteId];
                    const href = prerequisiteHref(prerequisiteId, topicSlug);
                    const label = prerequisite?.label ?? prerequisiteId;

                    return href ? (
                      <Link
                        key={prerequisiteId}
                        to={href}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-2 py-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {label}
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    ) : (
                      <span
                        key={prerequisiteId}
                        className="rounded-full border border-border bg-background/70 px-2 py-1 text-[10px] font-semibold text-muted-foreground"
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-success">
                Foundation concept
              </p>
            )}

            {concept.applications && concept.applications.length > 0 && (
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                  Applications
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {concept.applications.join(' · ')}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
