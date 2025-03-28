import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import UnFonts from "unplugin-fonts/vite";

export default defineConfig({
  integrations: [, mdx()],
  content: {
    collections: ["patterns", "principles"],
  },
  experimental: {
    svg: { mode: "sprite" },
  },
  vite: {
    plugins: [
      tailwindcss(),
      UnFonts({
        google: {
          families: [
            {
              name: "Noto Serif Bengali",
              styles: "wght@300;400;500;700",
            },
          ],
        },
      }),
    ],
  },
});
