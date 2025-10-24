<template>
  <div 
    ref="cardElement"
    class="group relative rounded-3xl p-8 ring-2 ring-white/30 bg-white/[0.15] backdrop-blur-md border border-white/20 shadow-xl shadow-black/30 hover:bg-white/25 hover:ring-white/40 hover:border-white/30 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary-400/20 hover:scale-[1.02] xl:p-10"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }"
  >
    <!-- Badge niveau d'études en haut à droite -->
    <div class="absolute top-3 right-3 sm:top-4 sm:right-4">
      <Badge>{{ level }}</Badge>
    </div>

    <!-- Logo de l'école -->
    <div class="flex items-center justify-center mb-6">
      <div class="relative w-28 h-28 rounded-2xl overflow-hidden bg-white p-4 shadow-xl ring-2 ring-gray-300/50 group-hover:ring-primary-300/50 transition-all duration-300">
        <img 
          :src="logo" 
          :alt="school"
          class="w-full h-full object-contain"
        />
      </div>
    </div>

    <!-- Nom de l'école -->
    <h3 class="text-xl font-semibold text-white text-center mb-2">
      {{ school }}
    </h3>

    <!-- Titre du diplôme -->
    <p class="text-base font-semibold text-white text-center mb-4 min-h-[3rem] flex items-center justify-center">
      {{ degree }}
    </p>

    <!-- Période -->
    <p class="text-sm text-white/70 text-center mb-6 font-semibold">
      {{ period }}
    </p>

    <!-- Séparateur -->
    <div class="w-full h-px bg-white/20 mb-6"></div>

    <!-- Liste des compétences -->
    <div class="space-y-3">
      <p class="text-sm font-bold text-white mb-3">
        Sujets étudiés
      </p>
      <ul role="list" class="space-y-3 text-sm text-white/80">
        <li 
          v-for="skill in skills" 
          :key="skill" 
          class="flex items-start gap-x-3"
        >
          <svg 
            class="h-5 w-5 flex-none text-emerald-400 mt-0.5" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            aria-hidden="true"
            stroke="currentColor"
            stroke-width="0.5"
          >
            <path 
              fill-rule="evenodd" 
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" 
              clip-rule="evenodd" 
            />
          </svg>
          <span class="leading-tight">{{ skill }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '~/composables/useScrollAnimation'

/**
 * Composant carte de formation académique
 * Affiche les détails d'une formation avec logo, diplôme et compétences
 */

interface Props {
  school: string
  logo: string
  degree: string
  level: string
  period: string
  skills: string[]
  index?: number
}

const props = withDefaults(defineProps<Props>(), {
  index: 0
})

// Animation d'apparition au scroll
const { elementRef: cardElement, isVisible } = useScrollAnimation()
</script>
