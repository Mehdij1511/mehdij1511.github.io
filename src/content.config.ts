import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    course: z.string(),
    year: z.string(),
    role: z.string(),
    order: z.number(),
    repo: z.string().url(),
    stack: z.array(z.string()),
    cover: z.string().optional(),
    coverKind: z.enum(['image', 'graphic']).default('image'),
    accent: z.string().default('#e8590c'),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    team: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
