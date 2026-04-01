import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    stack: z.array(z.string()).min(1),
    outcome: z.string(),
    coverImage: z.string(),
    screens: z.array(z.string()).optional(),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    featured: z.boolean().default(false),
    visibility: z.enum(["public-case-study", "private-summary"]),
    order: z.number(),
  }),
});

export const collections = { projects };
