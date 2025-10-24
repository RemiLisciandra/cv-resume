<template>
  <div 
    class="flex items-center justify-center rounded-2xl bg-white p-3 shadow-md transition-transform duration-300 hover:scale-105"
    :class="sizeClasses"
  >
    <img 
      :src="logo" 
      :alt="alt" 
      class="w-full h-full object-contain"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Composant logo d'entreprise avec fond blanc arrondi
 * Affiche un logo avec un conteneur blanc stylisé et effet hover
 */

interface Props {
  logo: string
  alt: string
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const sizeClasses = computed(() => {
  const sizes = {
    small: 'h-12 w-12',
    medium: 'h-16 w-16',
    large: 'h-20 w-20'
  }
  return sizes[props.size]
})
</script>
