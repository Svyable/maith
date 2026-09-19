import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';
import { SiteShell } from '@/components/layout/SiteShell';
import { FIELD_MAP } from '@/config/fields';
import { getThinkerReferencePage } from '@/config/thinker-pages';
import {
  APP_PATHS,
  buildLearnFieldPath,
} from '@/config/site-navigation';
import NotFound from './NotFound';

export default function ThinkerDetail() {
  const { thinkerSlug = '' } = useParams<{ thinkerSlug: string }>();
  const page = getThinkerReferencePage(thinkerSlug);
  if (!page) return <NotFound />;

  const thinker = page.thinker;
  const knownFields = thinker.fields.flatMap((slug) => {
    const field = FIELD_MAP[slug];
    return field && field.slug !== 'all' ? [field] : [];
  });

  return (
    <SiteShell>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-4xl mx-auto w-full">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Link to={APP_PATHS.home} className="hover:text-foreground">mAIth</Link>
          <span aria-hidden="true">/</span>
          <Link to={APP_PATHS.thinkers} className="hover:text-foreground">MasterMinds</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{thinker.name}</span>
        </nav>

        <article className="space-y-6">
          <header className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="text-5xl" aria-hidden="true">{thinker.emoji}</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{thinker.archetype}</p>
                <h1 className="mt-1 text-3xl md:text-4xl font-display font-bold text-foreground">{thinker.name}</h1>
                <p className="mt-2 text-sm text-muted-foreground">{thinker.era} · {thinker.domain}</p>
              </div>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-foreground/90">{thinker.tagline}</p>
          </header>

          <section className="rounded-2xl border border-border/60 bg-card/70 p-5">
            <h2 className="font-display text-xl font-bold text-foreground">Known for</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{thinker.description}</p>
          </section>

          {thinker.funFact && (
            <section className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <h2 className="font-display text-lg font-bold text-foreground">A notable fact</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{thinker.funFact}</p>
            </section>
          )}

          {knownFields.length > 0 && (
            <section className="rounded-2xl border border-border/60 bg-card/70 p-5">
              <h2 className="font-display text-lg font-bold text-foreground">Practice related fields</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {knownFields.map((field) => (
                  <Link
                    key={field.slug}
                    to={buildLearnFieldPath(field.slug)}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {field.emoji} {field.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="flex flex-wrap gap-3">
            <Link
              to={APP_PATHS.thinkers}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> MasterMinds
            </Link>
            <Link
              to={APP_PATHS.thinkers + '?thinker=' + encodeURIComponent(thinker.slug)}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Brain className="h-4 w-4" /> Start {thinker.name} challenge
            </Link>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
