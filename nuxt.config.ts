// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
    {
      path: '~/components/features/hero',
      prefix: 'Hero',
      pathPrefix: false
    },
    {
      path: '~/components/features/career',
      prefix: 'Career',
      pathPrefix: false
    },
    {
      path: '~/components/ui',
      pathPrefix: false
    }
  ],
  
  app: {
    head: {
      title: 'CV - Rémi Lisciandra',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'CV de Rémi Lisciandra - Data Engineer' }
      ]
    }
  }
})
