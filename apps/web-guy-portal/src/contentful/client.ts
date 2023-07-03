import { createClient } from 'contentful';
import { getEnv } from './get-env';

export function createContentfulClient() {
  const { VITE_CONTENTFUL_ENV, VITE_CONTENTFUL_SPACE_ID, VITE_CONTENTFUL_DELIVERY_TOKEN } = getEnv();

  return createClient({
    space: VITE_CONTENTFUL_SPACE_ID,
    environment: VITE_CONTENTFUL_ENV,
    accessToken: VITE_CONTENTFUL_DELIVERY_TOKEN,
    host: 'cdn.contentful.com',
  }).withoutUnresolvableLinks;
}
