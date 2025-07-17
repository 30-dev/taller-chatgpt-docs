// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  output: "server",
  adapter: vercel({}),
  vite: {
    plugins: [tailwindcss()],
  },
});