<template>
  <span 
    class="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-white/90 text-primary-600 border border-white shadow-sm whitespace-nowrap"
    :class="customClass"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
/**
 * Composant Badge réutilisable
 * Design unifié pour les badges de type de contrat, niveau d'études, etc.
 */

interface Props {
  customClass?: string
}

defineProps<Props>()
</script>
