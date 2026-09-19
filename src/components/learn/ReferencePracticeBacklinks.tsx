import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenCheck } from 'lucide-react';
import { getReferenceTopicBacklinks } from '@/config/topic-reference-clusters';

export default function ReferencePracticeBacklinks({
  referencePath,
  referenceLabel,
}: {
  referencePath: string;
  referenceLabel: string;
}) {
  const topics = getReferenceTopicBacklinks(referencePath);
  if (topics.length === 0) return null;

  return (
    <section className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
      <div className="flex items-start gap-3">
        <BookOpenCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Practice connection</p>
          <h2 className="mt-1 font-display text-lg font-bold text-foreground">
            Practice topics connected to {referenceLabel}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Reinforce this reference through the strongest matching interactive practice topics.
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.path}
                to={topic.path}
                className="group rounded-xl border border-border/60 bg-card/80 p-3 transition-colors hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary">
                      {topic.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {topic.fieldLabel} · {topic.questionCount} questions
                    </p>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
