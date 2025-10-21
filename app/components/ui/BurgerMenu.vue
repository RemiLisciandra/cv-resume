<template>
  <button
    @click="$emit('toggle')"
    class="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-400/50"
    aria-label="Toggle menu"
  >
    <div class="relative w-5 h-5">
      <!-- État hamburger -->
      <span 
        v-if="!isOpen"
        class="absolute inset-0 flex flex-col items-center justify-center gap-[3px]"
      >
        <span class="w-full h-[1.5px] bg-white/90 rounded-full transition-all duration-300" />
        <span class="w-full h-[1.5px] bg-white/90 rounded-full transition-all duration-300" />
        <span class="w-full h-[1.5px] bg-white/90 rounded-full transition-all duration-300" />
      </span>
      
      <!-- État croix -->
      <span 
        v-else
        class="absolute inset-0 flex items-center justify-center"
      >
        <span class="absolute w-full h-[1.5px] bg-white/90 rounded-full rotate-45 transition-all duration-300" />
        <span class="absolute w-full h-[1.5px] bg-white/90 rounded-full -rotate-45 transition-all duration-300" />
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
/**
 * Composant bouton burger menu animé
 * Affiche un menu hamburger qui s'anime en X lorsqu'il est ouvert
 */

interface Props {
  isOpen: boolean
}

defineProps<Props>()
defineEmits<{
  toggle: []
}>()
</script>
