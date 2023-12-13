// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules:['@nuxt/image','nuxt-icon','vue3-carousel-nuxt'],

  css: ["bootstrap/dist/css/bootstrap.min.css","@/assets/scss/app1.scss"], // add
})
