import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  content: {
    collections: ["patterns", "principles"],
  },
});
