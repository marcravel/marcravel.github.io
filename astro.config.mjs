import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marcravel.github.io',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'tr'],
    routing: {
        prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
          tr: 'tr-TR'
        }
      }
    })
  ]
});