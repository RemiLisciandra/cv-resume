<template>
  <div class="flex flex-wrap items-center gap-4 text-sm text-gray-400">
    <!-- Âge -->
    <div class="flex items-center gap-2">
      <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
      <span>{{ age }} ans</span>
    </div>

    <!-- Localisation -->
    <div class="flex items-center gap-2">
      <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <span>{{ location }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant d'affichage des métadonnées du profil (âge, localisation)
 */

interface Props {
  age: number
  location: string
}

defineProps<Props>()
</script>
