import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [, mdx()],
  content: {
    collections: ["patterns", "principles"],
  },
  experimental: {
    svg: { mode: "sprite" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
