import { THINKERS, type ThinkerMeta } from './thinkers';
import { APP_PATHS, buildThinkerPath } from './site-navigation';
import { compactTitle, trimMeta, type ReferenceSeo } from './reference-utils';

export const MIN_INDEXABLE_THINKER_CONTENT = 160;

export interface ThinkerReferencePage {
  kind: 'thinker';
  path: string;
  thinker: ThinkerMeta;
  seo: ReferenceSeo;
}

function thinkerSeo(thinker: ThinkerMeta): ReferenceSeo {
  const contentLength =
    thinker.description.length
    + thinker.tagline.length
    + (thinker.funFact?.length ?? 0);

  return {
    title: compactTitle(
      thinker.name,
      ': ' + thinker.domain + ' | mAIth',
      thinker.name + ': Profile | mAIth',
    ),
    description: trimMeta(
      thinker.name + ' (' + thinker.era + ') — ' + thinker.tagline
        + ' Explore contributions in ' + thinker.description + '.',
    ),
    indexable: contentLength >= MIN_INDEXABLE_THINKER_CONTENT,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'mAIth', path: APP_PATHS.home },
      { name: 'MasterMinds', path: APP_PATHS.thinkers },
      { name: thinker.name, path: buildThinkerPath(thinker.slug) },
    ],
  };
}

export const THINKER_REFERENCE_PAGES: ThinkerReferencePage[] = THINKERS.map((thinker) => ({
  kind: 'thinker' as const,
  path: buildThinkerPath(thinker.slug),
  thinker,
  seo: thinkerSeo(thinker),
}));

export const THINKER_REFERENCE_PAGE_MAP: Record<string, ThinkerReferencePage> = Object.fromEntries(
  THINKER_REFERENCE_PAGES.map((page) => [page.thinker.slug, page]),
);

export function getThinkerReferencePage(thinkerSlug: string): ThinkerReferencePage | undefined {
  return THINKER_REFERENCE_PAGE_MAP[thinkerSlug];
}
