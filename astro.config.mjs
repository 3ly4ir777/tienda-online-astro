import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({
      nesting: true, // Esto ayuda con PostCSS
    }), 
    react()
  ],
});