import { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SiteShell } from '@/components/layout/SiteShell';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Badge } from '@/components/ui/badge';
import { getFormulaReferencePage } from '@/config/formula-pages';
import { APP_PATHS } from '@/config/site-navigation';
import NotFound from './NotFound';

const ReferencePracticeBacklinks = lazy(
  () => import('@/components/learn/ReferencePracticeBacklinks'),
);

export default function FormulaDetail() {
  const { formulaSlug = '' } = useParams<{ formulaSlug: string }>();
  const page = getFormulaReferencePage(formulaSlug);
  if (!page) return <NotFound />;

  const eq = page.equation;

  return (
    <SiteShell>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-4xl mx-auto w-full">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Link to={APP_PATHS.home} className="hover:text-foreground">mAIth</Link>
          <span aria-hidden="true">/</span>
          <Link to={APP_PATHS.formulas} className="hover:text-foreground">Formulas</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{eq.name}</span>
        </nav>

        <article className="space-y-6">
          <header className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl" aria-hidden="true">{eq.domainEmoji}</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {eq.domain} · #{eq.rank}
                </p>
                <h1 className="mt-1 text-3xl md:text-4xl font-display font-bold text-foreground">
                  {eq.name}
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  {eq.discoverer} · {eq.year} · {eq.field}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-primary/20 bg-background/70 p-6 text-center">
              <LatexRenderer text={'$' + eq.equation + '$'} className="text-xl md:text-2xl text-foreground" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline">{eq.subDomain}</Badge>
              <Badge variant="secondary">{eq.difficulty}</Badge>
              <Badge variant="secondary">Beauty {eq.beauty}/10</Badge>
              {eq.millenniumProblem && <Badge variant="outline">Millennium Prize Problem</Badge>}
              {eq.nobelPrize && <Badge variant="outline">Nobel connection</Badge>}
              {eq.unsolved && <Badge variant="outline">Open problem</Badge>}
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/70 p-5">
              <h2 className="font-display text-xl font-bold text-foreground">Why it matters</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{eq.significance}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/70 p-5">
              <h2 className="font-display text-xl font-bold text-foreground">Applications</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{eq.applications}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-border/60 bg-card/70 p-5">
            <h2 className="font-display text-xl font-bold text-foreground">Symbols & variables</h2>
            <p className="mt-2 font-mono-code text-sm leading-relaxed text-muted-foreground">{eq.constants}</p>
          </section>

          {eq.tags.length > 0 && (
            <section className="rounded-2xl border border-border/60 bg-card/70 p-5">
              <h2 className="font-display text-lg font-bold text-foreground">Related concepts</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {eq.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={APP_PATHS.formulas + '?q=' + encodeURIComponent(tag)}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <Suspense fallback={null}>
            <ReferencePracticeBacklinks referencePath={page.path} referenceLabel={eq.name} />
          </Suspense>

          <div className="flex flex-wrap gap-3">
            <Link
              to={APP_PATHS.formulas}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Formula library
            </Link>
            <Link
              to={APP_PATHS.learn}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Practice technical topics <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
