import { z, defineCollection } from 'astro:content';

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date().or(z.string()).optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    icons: z.string().array().optional(),
    canonical: z.string().url().optional(),
  }),
});

const info = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date().or(z.string()).optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    canonical: z.string().url().optional(),
  }),
});
export const collections = {
  project: project,
  info: info,
};
