import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenText, Brain, Sigma } from 'lucide-react';
import { getTopicReferenceCluster, type TopicReferenceLink } from '@/config/topic-reference-clusters';

function truncate(value: string, max = 120): string {
  if (value.length <= max) return value;
  const slice = value.slice(0, max - 1);
  const boundary = slice.lastIndexOf(' ');
  return (boundary > 70 ? slice.slice(0, boundary) : slice) + '…';
}

function ReferenceGroup({
  title,
  description,
  icon,
  links,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  links: TopicReferenceLink[];
}) {
  if (links.length === 0) return null;

  return (
    <section className="rounded-2xl border border-border/60 bg-card/75 p-4">
      <div className="mb-3 flex items-start gap-2.5">
        <span className="mt-0.5 text-primary" aria-hidden="true">{icon}</span>
        <div>
          <h3 className="font-display text-base font-bold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="group block rounded-xl border border-border/50 bg-background/50 p-3 transition-colors hover:border-primary/40 hover:bg-background"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-sm text-foreground group-hover:text-primary">
                  {link.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {truncate(link.context)}
                </p>
              </div>
              <span className="shrink-0 text-xs text-primary" aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function TopicReferenceClusterSection({
  topicPath,
  topicLabel,
}: {
  topicPath: string;
  topicLabel: string;
}) {
  const cluster = getTopicReferenceCluster(topicPath);
  if (!cluster) return null;

  const total = cluster.formulas.length + cluster.glossary.length + cluster.thinkers.length;
  if (total === 0) return null;

  return (
    <section className="mb-8" aria-labelledby="reference-cluster-heading">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Knowledge cluster</p>
        <h2 id="reference-cluster-heading" className="mt-1 text-xl font-display font-bold text-foreground">
          Study {topicLabel} from multiple angles
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Use the connected reference library to review key formulas, vocabulary, and people before or after the quiz.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <ReferenceGroup
          title="Key formulas"
          description="Equations and mathematical relationships tied to this topic."
          icon={<Sigma className="h-4 w-4" />}
          links={cluster.formulas}
        />
        <ReferenceGroup
          title="Glossary"
          description="Definitions, notation, and examples for important concepts."
          icon={<BookOpenText className="h-4 w-4" />}
          links={cluster.glossary}
        />
        <ReferenceGroup
          title="MasterMinds"
          description="People whose work shaped the topic."
          icon={<Brain className="h-4 w-4" />}
          links={cluster.thinkers}
        />
      </div>
    </section>
  );
}
