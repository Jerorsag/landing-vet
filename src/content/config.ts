import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
  }),
});

const equipos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
  }),
});

export const collections = {
  services,
  equipos,
};