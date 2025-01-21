// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt";

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
});
