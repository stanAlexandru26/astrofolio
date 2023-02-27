import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

import tailwind from '@astrojs/tailwind';
import { SITE } from '@/AppConfig';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
