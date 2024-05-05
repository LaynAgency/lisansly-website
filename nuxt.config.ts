export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/seo"],
  css: ["~/assets/css/main.css"],
  site: {
    url: "https://lisansly.com",
    name: "Lisansly",
    description:
      "Lisansly, uygulamanızı tercih edeceğiniz yöntem ile lisanslamak için geliştirilmiş bir SaaS çözümüdür.",
    defaultLocale: "tr",
  },
});
