import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

export default defineConfig({
  output: 'static', 
  integrations: [
    tailwind(), 
    sanity({
      projectId: 'izt4cyej',
      dataset: 'production',
      useCdn: false, 
      apiVersion: "2026-04-01", 
      studioBasePath: '/studio',
      logClientRequests: 'always'
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