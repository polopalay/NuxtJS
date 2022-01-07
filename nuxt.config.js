export default {
  // mode: "spa",//Đổi sang single page application
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Learning Languages By Flash Card Online",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // loading: { color: "#fff", height: "5px" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/rhpteam.min.css", "~/assets/css/external.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/core-component.js", "@/plugins/modals/v-modal.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/axios"],

  //Sử dụng luôn modul axios mà nuxt cung cấp => k cần phải import vào. Và nó có thể sd như một plugin global
  axios: {
    baseApiUrl:
      process.env.BASE_API_URL ||
      "https://nuxt-learning-english-2bb5d-default-rtdb.asia-southeast1.firebasedatabase.app",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: "static",

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    baseApiUrl:
      process.env.BASE_API_URL ||
      "https://nuxt-learning-english-2bb5d-default-rtdb.asia-southeast1.firebasedatabase.app",
  },

  //Middleware global
  router: {
    middleware: "router-log",
  },
};
