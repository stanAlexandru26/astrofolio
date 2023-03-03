import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';
import tailwind from '@astrojs/tailwind';
import { SITE } from './src/AppConfig';
import image from '@astrojs/image';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import markdownConfig from './src/utils/markdownConfig.mjs';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',
  markdown: markdownConfig,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    compress(),
    sitemap(),
    mdx(markdownConfig),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
