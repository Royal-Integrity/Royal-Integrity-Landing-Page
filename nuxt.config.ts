// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_main.scss";',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
      minify: 'esbuild',
    },
  },

  modules: ['nuxt-icon', '@element-plus/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],

  i18n: {
    vueI18n: resolve('./config/i18n.config.ts'),
    strategy: 'prefix_and_default',
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
    ],
    customRoutes: 'config',
    pages: {
      homepage: {
        en: '/home',
        es: '/inicio',
      },
      about: {
        en: '/about-us',
        es: '/acerca-de-nosotros',
      },
      energytech: {
        en: '/royalIntegrity-energytech',
        es: '/energytech-royalIntegrity',
      },
      logtech: {
        en: '/royalIntegrity-logtech',
        es: '/logtech-royalIntegrity',
      },
      legaltech: {
        en: '/royalIntegrity-legaltech',
        es: '/legaltech-royalIntegrity',
      },
      stories: {
        en: '/success-stories',
        es: '/casos-de-exito',
      },
      contacts: {
        en: '/contact-us',
        es: '/contactanos',
      },
    },
    lazy: true,
    langDir: 'locales',
  },

  build: {
    transpile: ['gsap'],
  },

  components: false,
  app: {
    head: {
      title: 'royal integrity',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'chartset', content: 'UTF-8' },
        {
          name: 'description',
          content:
            'Software con inteligencia artificial, machine learning, soluciones energéticas, automatización de procesos y vision computacional',
        },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'android-chrome-icon',
          sizes: '192x192',
          href: '/android-chrome-icon-120x120.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap',
          as: 'style',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap',
          media: 'print',
          onload: "this.media='all'",
        },
      ],
      /* script: [
        {
          type: 'module',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js',
          defer: true,
        },
      ], */
    },
  },

  compatibilityDate: '2024-09-26',
});
