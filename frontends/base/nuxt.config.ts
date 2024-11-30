import fs from 'node:fs'
import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/why-influencers': { prerender: true },
    '/pricing': { prerender: true },
    '/how-it-works': { prerender: true },
  },
  modules: [
    '@nuxt/ui',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@unlazy/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],
  lodash: {
    alias: [
      ['get', 'getByPath'],
    ],
  },
  colorMode: {
    preference: 'light',
  },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
  imports: {
    dirs: ['interfaces/**/**', 'composables/**/**', 'store'],
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  runtimeConfig: {
    public: {
      customerDomain: '',
      adminDomain: '',
    },
  },
  vite: {
    server: process.env.APP_ENV === 'production'
      ? undefined
      : {
          https: {
            key: fs.readFileSync(`../../certs/${process.env.NUXT_PUBLIC_APP_DOMAIN}.key`),
            cert: fs.readFileSync(`../../certs/${process.env.NUXT_PUBLIC_APP_DOMAIN}.crt`),
          },
          hmr: {
            clientPort: 443,
          },
        },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    },
    display: 'swap',
    download: true,
    inject: true,
    text: 'Why Influencers? Pricing How it Works Book A Demo Login Reach new audiences Boost restaurant traffic with local food influencers Restaurant marketing redefined for the social media age. Try it for free Learn More 270% 1.1M 15.6K Get matched with local, trusted food influencers. Ready to post about your business',
  },
  pinia: {
    storesDirs: ['./store/**'],
  },
})
