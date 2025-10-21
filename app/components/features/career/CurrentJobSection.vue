<template>
  <div class="py-6 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Logo Destia -->
      <div class="flex justify-center mb-6">
        <DestiaLogo />
      </div>

      <!-- Description -->
      <div class="mx-auto max-w-2xl text-center mb-6">
        <p class="text-lg/8 text-white/80">{{ companyInfo.description }}</p>
      </div>

      <!-- Titre des domaines -->
      <div class="flex items-center justify-center mb-6">
        <div class="flex-grow h-px bg-white/20 max-w-xs"></div>
        <h2 class="px-6 text-xl font-bold text-white tracking-wide">Mes domaines d'activité</h2>
        <div class="flex-grow h-px bg-white/20 max-w-xs"></div>
      </div>

      <!-- Cards -->
      <div class="mx-auto max-w-2xl xl:max-w-none">
        <div class="grid grid-cols-1 gap-8 xl:grid-cols-3 place-items-center xl:place-items-stretch">
          <div 
            v-for="activity in activities" 
            :key="activity.id" 
            class="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
          >
            <div class="flex items-center gap-x-4 mb-6">
              <div 
                class="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg"
                :class="`bg-gradient-to-br ${activity.gradient}`"
              >
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="getIconPath(activity.icon)" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ activity.title }}</h3>
            </div>
            <p class="text-base leading-7 text-gray-600" v-html="activity.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { activities } from '~/data/activities'
import { destiaInfo } from '~/data/company'

/**
 * Composant de présentation du métier actuel
 * Les données sont centralisées dans ~/data/activities.ts et ~/data/company.ts
 */

const companyInfo = destiaInfo

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
