import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Replace with your actual GitHub username
  site: 'https://marcravel.github.io/engineering_portfolio', 
  
  // IF your repository is named something like "portfolio" instead of "username.github.io", 
  // you MUST include the base property matching the repo name exactly:
  base: '/engineering_portfolio', 

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