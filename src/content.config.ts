import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    status: z.enum(["DRAFT", "PLANNED", "PUBLISHED"]),
    description: z.string(),
  }),
});

export const collections = { posts };
