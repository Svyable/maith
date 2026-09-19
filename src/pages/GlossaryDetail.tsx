import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SiteShell } from '@/components/layout/SiteShell';
import { LatexRenderer } from '@/components/LatexRenderer';
import { TermMeta } from '@/components/glossary/TermMeta';
import {
  GLOSSARY_REFERENCE_PAGE_MAP,
  getGlossaryReferencePage,
} from '@/config/glossary-pages';
import {
  APP_PATHS,
  buildFormulaPath,
  buildGlossaryTermPath,
  buildThinkerPath,
} from '@/config/site-navigation';
import { toSeoSlug } from '@/config/reference-utils';
import NotFound from './NotFound';

export default function GlossaryDetail() {
  const { termId = '' } = useParams<{ termId: string }>();
  const page = getGlossaryReferencePage(termId);
  if (!page) return <NotFound />;

  const term = page.term;
  const relatedTerms = (term.related ?? []).flatMap((id) => {
    const related = GLOSSARY_REFERENCE_PAGE_MAP[id];
    return related ? [related] : [];
  });

  return (
    <SiteShell>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-4xl mx-auto w-full">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Link to={APP_PATHS.home} className="hover:text-foreground">mAIth</Link>
          <span aria-hidden="true">/</span>
          <Link to={APP_PATHS.glossary} className="hover:text-foreground">Glossary</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{term.term}</span>
        </nav>

        <article className="space-y-6">
          <header className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Glossary term</p>
            <h1 className="mt-1 text-3xl md:text-4xl font-display font-bold text-foreground">
              <LatexRenderer text={term.term} />
            </h1>
            <div className="mt-3">
              <TermMeta field={term.field as any} topic={term.topic ?? null} />
            </div>

            {term.formula && (
              <div className="mt-6 rounded-2xl border border-primary/20 bg-background/70 p-6 text-center">
                <LatexRenderer text={term.formula} className="text-xl text-foreground" />
              </div>
            )}
          </header>

          <section className="rounded-2xl border border-border/60 bg-card/70 p-5">
            <h2 className="font-display text-xl font-bold text-foreground">Definition</h2>
            <div className="mt-2 text-base leading-relaxed text-muted-foreground">
              <LatexRenderer text={term.definition} />
            </div>
            {term.example && (
              <div className="mt-4 rounded-xl bg-muted/40 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Example</p>
                <div className="mt-1 text-sm leading-relaxed text-foreground/90">
                  <LatexRenderer text={term.example} />
                </div>
              </div>
            )}
          </section>

          {(term.latex || term.code) && (
            <section className="grid gap-4 md:grid-cols-2">
              {term.latex && (
                <div className="rounded-2xl border border-border/60 bg-card/70 p-5">
                  <h2 className="font-display text-lg font-bold text-foreground">LaTeX</h2>
                  <pre className="mt-3 overflow-auto rounded-xl bg-muted/50 p-4 text-xs whitespace-pre-wrap">{term.latex}</pre>
                </div>
              )}
              {term.code && (
                <div className="rounded-2xl border border-border/60 bg-card/70 p-5">
                  <h2 className="font-display text-lg font-bold text-foreground">Code / formal form</h2>
                  <pre className="mt-3 overflow-auto rounded-xl bg-muted/50 p-4 text-xs whitespace-pre-wrap">{term.code}</pre>
                </div>
              )}
            </section>
          )}

          {(relatedTerms.length > 0 || term.formulaLinks?.length || term.thinkerLinks?.length) && (
            <section className="rounded-2xl border border-border/60 bg-card/70 p-5">
              <h2 className="font-display text-lg font-bold text-foreground">Explore related references</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedTerms.map((related) => (
                  <Link
                    key={related.term.id}
                    to={buildGlossaryTermPath(related.term.id)}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    📖 {related.term.term}
                  </Link>
                ))}
                {term.formulaLinks?.map((formula) => (
                  <Link
                    key={formula}
                    to={buildFormulaPath(toSeoSlug(formula))}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    📐 {formula}
                  </Link>
                ))}
                {term.thinkerLinks?.map((thinker) => (
                  <Link
                    key={thinker}
                    to={buildThinkerPath(thinker)}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    🧠 {thinker.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <Link
            to={APP_PATHS.glossary}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Glossary
          </Link>
        </article>
      </main>
    </SiteShell>
  );
}
