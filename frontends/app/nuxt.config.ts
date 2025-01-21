// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../base"],
  components: {
    dirs: [
      {
        path: "../base/components",
        pathPrefix: false,
      },
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },

  modules: ["@nuxt/ui"],
  compatibilityDate: "2025-01-21",
});
