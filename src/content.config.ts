import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/data/essay' }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'he']),
    translationKey: z.string(),
    publicationStatus: z.enum(['published', 'forthcoming', 'private']),
    originalPublicationDate: z.coerce.date().optional(),
    sourceUrl: z.url().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { essays };
