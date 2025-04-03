import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    lesson: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  patterns: blogCollection,
  principles: blogCollection,
  "react-patterns": blogCollection,
};
