import { ContentfulPage } from '../types/page-types';
import { createContentfulClient } from './client';
import { normalizeContentfulEntry } from './normalize';

export const getPage = async (): Promise<ContentfulPage | undefined> => {
  const entries = await createContentfulClient().getEntries({
    content_type: 'pgPage',
    include: 10,
  });

  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'ESP');
  }

  const pageEntry = entries.items[0];

  if (!pageEntry) return undefined;

  return normalizeContentfulEntry<ContentfulPage>(pageEntry);
};
