import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server', 
  integrations: [
    tailwind(), 
    sanity({
      projectId: 'izt4cyej',
      dataset: 'production',
      useCdn: false, 
      apiVersion: "2026-03-01", 
      studioBasePath: '/studio'
    }), 
    react()
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ['tslib'],
      },
    },
  },
});