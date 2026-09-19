import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SiteShell } from '@/components/layout/SiteShell';
import { LatexRenderer } from '@/components/LatexRenderer';
import { TermMeta } from '@/components/glossary/TermMeta';
import {
  getGlossaryReferencePage,
  resolveGlossaryReference,
} from '@/config/glossary-pages';
import {
  resolveFormulaRouteSlug,
  resolveThinkerRouteSlug,
} from '@/config/reference-aliases';
import {
  APP_PATHS,
  buildFormulaPath,
  buildThinkerPath,
} from '@/config/site-navigation';
import NotFound from './NotFound';

export default function GlossaryDetail() {
  const { termId = '' } = useParams<{ termId: string }>();
  const page = getGlossaryReferencePage(termId);
  if (!page) return <NotFound />;

  const term = page.term;
  const relatedTerms = (term.related ?? []).flatMap((id) => {
    const related = resolveGlossaryReference(id);
    return related ? [related] : [];
  });
  const formulaReferences = (term.formulaLinks ?? []).flatMap((reference) => {
    const slug = resolveFormulaRouteSlug(reference);
    return slug ? [{ reference, path: buildFormulaPath(slug) }] : [];
  });
  const thinkerReferences = (term.thinkerLinks ?? []).flatMap((reference) => {
    const slug = resolveThinkerRouteSlug(reference);
    return slug ? [{ reference, path: buildThinkerPath(slug) }] : [];
  });

  const hasRelatedReferences =
    relatedTerms.length > 0
    || formulaReferences.length > 0
    || thinkerReferences.length > 0;

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

          {hasRelatedReferences && (
            <section className="rounded-2xl border border-border/60 bg-card/70 p-5">
              <h2 className="font-display text-lg font-bold text-foreground">Explore related references</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedTerms.map((related) => (
                  <Link
                    key={related.path}
                    to={related.path}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    📖 {related.term.term}
                  </Link>
                ))}
                {formulaReferences.map(({ reference, path }) => (
                  <Link
                    key={'formula-' + reference}
                    to={path}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    📐 {reference}
                  </Link>
                ))}
                {thinkerReferences.map(({ reference, path }) => (
                  <Link
                    key={'thinker-' + reference}
                    to={path}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    🧠 {reference.replace(/-/g, ' ')}
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
