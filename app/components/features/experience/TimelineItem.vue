<template>
  <div class="relative flex gap-6 group">
    <!-- Ligne verticale et point -->
    <div class="relative flex flex-col items-center">
      <!-- Point de connexion -->
      <div 
        class="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white/30 border-white/40 transition-all duration-300 group-hover:bg-primary-500 group-hover:border-primary-300 group-hover:shadow-lg group-hover:shadow-primary-500/50"
      >
        <div 
          class="h-2.5 w-2.5 rounded-full bg-transparent transition-all duration-300 group-hover:bg-white group-hover:animate-pulse"
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
        class="group/card relative overflow-hidden rounded-2xl bg-white/[0.15] backdrop-blur-md border border-white/30 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/25 hover:border-white/50 hover:shadow-2xl hover:shadow-primary-400/20 hover:scale-[1.02]"
      >
        <!-- Header avec logo et infos -->
        <div class="flex items-start gap-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <CompanyLogo 
              :logo="logo" 
              :alt="company"
              size="large"
            />
          </div>
          
          <!-- Informations -->
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-bold text-white mb-1 transition-colors">
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
          <div class="h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
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
