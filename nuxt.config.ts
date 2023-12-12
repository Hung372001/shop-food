// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxt/image','nuxt-icon'],
  css: ["bootstrap/dist/css/bootstrap.min.css","@/assets/scss/app1.scss"], // add
})
