import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenText, Brain, Sigma } from 'lucide-react';
import {
  getFieldReferenceCluster,
  type FieldReferenceLink,
} from '@/config/topic-reference-clusters';

function ReferenceShelf({
  title,
  description,
  icon,
  links,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  links: FieldReferenceLink[];
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
                  Connected to {link.topicCount} {link.topicCount === 1 ? 'topic' : 'topics'}
                  {link.topicLabels.length > 0 ? ': ' + link.topicLabels.slice(0, 3).join(', ') : ''}
                  {link.topicLabels.length > 3 ? '…' : ''}
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

export default function FieldReferenceClusterSection({
  fieldPath,
  fieldLabel,
}: {
  fieldPath: string;
  fieldLabel: string;
}) {
  const cluster = getFieldReferenceCluster(fieldPath);
  if (!cluster) return null;

  const total = cluster.formulas.length + cluster.glossary.length + cluster.thinkers.length;
  if (total === 0) return null;

  return (
    <section className="mt-8" aria-labelledby="field-reference-heading">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Field knowledge hub</p>
        <h2 id="field-reference-heading" className="mt-1 text-xl font-display font-bold text-foreground">
          Core {fieldLabel} references
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Review the formulas, vocabulary, and people most strongly connected to the practice topics in this field.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <ReferenceShelf
          title="Key formulas"
          description="High-signal equations shared across the field."
          icon={<Sigma className="h-4 w-4" />}
          links={cluster.formulas}
        />
        <ReferenceShelf
          title="Glossary"
          description="Core concepts and definitions linked to field topics."
          icon={<BookOpenText className="h-4 w-4" />}
          links={cluster.glossary}
        />
        <ReferenceShelf
          title="MasterMinds"
          description="People whose work connects across this field."
          icon={<Brain className="h-4 w-4" />}
          links={cluster.thinkers}
        />
      </div>
    </section>
  );
}
