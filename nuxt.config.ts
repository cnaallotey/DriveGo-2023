// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
  ],

  eslint: {
    extends: ['plugin:vue/vue3-recommended']
  }
})
