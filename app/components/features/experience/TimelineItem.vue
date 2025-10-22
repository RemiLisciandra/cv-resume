<template>
  <div class="relative flex gap-6 group">
    <!-- Ligne verticale et point -->
    <div class="relative flex flex-col items-center">
      <!-- Point de connexion -->
      <div 
        class="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 border-gray-900 transition-all duration-300"
        :class="isLast ? 'bg-primary-500' : 'bg-white/20 group-hover:bg-primary-500'"
      >
        <div 
          v-if="!isLast" 
          class="h-2 w-2 rounded-full transition-all duration-300"
          :class="isLast ? '' : 'bg-transparent group-hover:bg-white'"
        />
      </div>
      
      <!-- Ligne verticale (pas affichée pour le dernier élément) -->
      <div 
        v-if="!isLast" 
        class="w-0.5 flex-1 bg-gradient-to-b from-white/20 to-transparent"
      />
    </div>
    
    <!-- Contenu de la carte -->
    <div class="flex-1 pb-12">
      <div 
        class="group/card relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10"
      >
        <!-- Header avec logo et infos -->
        <div class="flex items-start gap-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <CompanyLogo 
              :logo="logo" 
              :alt="company"
              size="medium"
            />
          </div>
          
          <!-- Informations -->
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-bold text-white mb-1 group-hover/card:text-primary-400 transition-colors">
              {{ position }}
            </h3>
            <p class="text-base text-white/70 mb-2">
              {{ company }}
            </p>
            <div class="flex items-center gap-2 text-sm text-white/50">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>{{ period }}</span>
            </div>
          </div>
        </div>
        
        <!-- Effet de brillance au hover -->
        <div class="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out">
          <div class="h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant élément de timeline pour une expérience professionnelle
 * Affiche le logo de l'entreprise, le poste et la période avec un design moderne
 */

interface Props {
  company: string
  logo: string
  position: string
  period: string
  isLast?: boolean
}

defineProps<Props>()
</script>
