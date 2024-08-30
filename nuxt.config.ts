// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/src/assets/styles/main.scss"],
  alias: {
    "@": resolve(__dirname, "src"),
  },
  dir: {
    pages: "src/pages",
  },
  components: [
    {
      path: "~/src/components",
    },
  ],
  runtimeConfig: {
    public: {},
  },
  router: {
    middleware: "auth",
  },
});
