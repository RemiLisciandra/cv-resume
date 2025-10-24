<template>
  <div class="relative" :class="containerClasses">
    <!-- Effet de glow en arrière-plan -->
    <div 
      class="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-50"
      :class="glowClasses"
    />
    
    <!-- Image de profil -->
    <img 
      :src="imageUrl" 
      :alt="imageAlt" 
      class="relative rounded-full object-cover border-4 shadow-2xl"
      :class="imageClasses"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Composant d'image de profil réutilisable
 */

interface Props {
  imageUrl: string
  imageAlt: string
  size?: 'large' | 'xlarge' | 'xxlarge'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large'
})

/**
 * Calcule les classes CSS en fonction de la taille demandée
 */
const getSizeClasses = () => {
  const sizeMap = {
    large: {
      image: 'size-32',
      glow: 'blur-xl',
      border: 'border-primary-500/30'
    },
    xlarge: {
      image: 'size-48',
      glow: 'blur-2xl',
      border: 'border-white/20'
    },
    xxlarge: {
      image: 'size-64',
      glow: 'blur-3xl',
      border: 'border-primary-500/30'
    }
  }
  
  return sizeMap[props.size]
}

const sizeClasses = getSizeClasses()

const containerClasses = computed(() => [
  sizeClasses.image
])

const glowClasses = computed(() => [
  sizeClasses.glow
])

const imageClasses = computed(() => [
  sizeClasses.image,
  sizeClasses.border
])
</script>
