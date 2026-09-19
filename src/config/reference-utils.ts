export interface ReferenceBreadcrumb {
  name: string;
  path: string;
}

export interface ReferenceSeo {
  title: string;
  description: string;
  indexable: boolean;
  schemaType?: 'WebPage' | 'CollectionPage';
  breadcrumbs: ReferenceBreadcrumb[];
}

export function toSeoSlug(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();
}

export function plainTextForMeta(value: string): string {
  return value
    .replace(/\$+/g, '')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}_^]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function trimMeta(value: string, max = 160): string {
  const normalized = plainTextForMeta(value);
  if (normalized.length <= max) return normalized;

  const slice = normalized.slice(0, max - 1);
  const boundary = slice.lastIndexOf(' ');
  return (boundary > 90 ? slice.slice(0, boundary) : slice) + '…';
}

export function compactTitle(primary: string, suffix: string, fallback: string): string {
  const full = primary + suffix;
  return full.length <= 65 ? full : fallback;
}
