import { createContentfulClient } from './client';
import { normalizeContentfulEntry } from './normalize';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: unknown;
  modules?: unknown;
  footer?: unknown;
}

export const getPage = async (): Promise<ContentfulPage | undefined> => {
  const entries = await createContentfulClient().getEntries({
    content_type: 'pgPage',
    include: 10,
  });

  const pageEntry = entries.items[0];

  if (!pageEntry) return undefined;

  return normalizeContentfulEntry<ContentfulPage>(pageEntry);
};
