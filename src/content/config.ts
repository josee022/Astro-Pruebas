// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Define la coleccion de posts con un esquema de datos
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
