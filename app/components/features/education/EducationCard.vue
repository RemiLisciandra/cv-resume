<template>
  <div 
    class="group relative rounded-3xl p-8 ring-2 ring-white/30 bg-white/[0.15] backdrop-blur-md border border-white/20 shadow-xl shadow-black/30 hover:bg-white/25 hover:ring-white/40 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-400/20 hover:scale-[1.02] xl:p-10"
  >
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

    <!-- Badge niveau d'études -->
    <div class="flex justify-center mb-4">
      <Badge>{{ level }}</Badge>
    </div>

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
        Compétences acquises
      </p>
      <ul role="list" class="space-y-3 text-sm text-white/80">
        <li 
          v-for="skill in skills" 
          :key="skill" 
          class="flex items-start gap-x-3"
        >
          <svg 
            class="h-5 w-5 flex-none text-indigo-400 mt-0.5" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            aria-hidden="true"
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
}

defineProps<Props>()
</script>
