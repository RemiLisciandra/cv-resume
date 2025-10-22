<template>
  <div class="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
    <!-- Bouton Info (si infoContent existe) -->
    <button
      v-if="infoContent"
      @click.stop="showModal = true"
      class="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 border-1 border-gray-300 hover:border-primary-500 transition-all duration-300 shadow-sm hover:shadow-md z-10"
      aria-label="Plus d'informations"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>
    </button>
    <div class="flex items-center gap-x-4 mb-6">
      <div 
        class="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg"
        :class="`bg-gradient-to-br ${gradient}`"
      >
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" :d="getIconPath(icon)" />
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
    </div>
    <p class="text-base leading-7 text-gray-600" v-html="description"></p>
    
    <!-- Modal Info -->
    <InfoModal
      v-if="infoContent"
      :is-open="showModal"
      :title="infoContent.title"
      :items="infoContent.items"
      @close="showModal = false"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Composant carte d'activité avec icône, titre et description
 * Affiche une activité professionnelle avec un style moderne et des animations
 */

import type { InfoContent } from '~/types/experience'

interface Props {
  title: string
  description: string
  icon: string
  gradient: string
  infoContent?: InfoContent
}

defineProps<Props>()

const showModal = ref(false)

/**
 * Mapping des noms d'icônes vers leurs chemins SVG
 */
const iconPaths: Record<string, string> = {
  database: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  chart: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  search: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
}

const getIconPath = (iconName: string): string => {
  return iconPaths[iconName] ?? iconPaths['database']!
}
</script>
