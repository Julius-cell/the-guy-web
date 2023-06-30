import { z } from 'zod';

const env = z.object({
  VITE_CONTENTFUL_ENV: z.optional(z.string()).default('master'),
  VITE_CONTENTFUL_SPACE_ID: z.string(),
  VITE_CONTENTFUL_DELIVERY_TOKEN: z.string(),
});

// cache the env parsing, since it only needs to occur once
let parsedEnv: z.infer<typeof env>;

export function getEnv() {
  // this will throw error if required values are missing

  if (!parsedEnv) parsedEnv = env.parse(import.meta.env);
  return parsedEnv;
}
