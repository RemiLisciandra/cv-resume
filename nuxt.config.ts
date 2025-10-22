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
      path: '~/components/features/experience',
      pathPrefix: false
    },
    {
      path: '~/components/ui',
      pathPrefix: false
    }
  ],
  
  app: {
    head: {
      title: 'CV resume - RL',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Résumé du CV de Rémi Lisciandra' }
      ]
    }
  }
})
