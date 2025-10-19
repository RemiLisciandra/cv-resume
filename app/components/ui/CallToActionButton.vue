<template>
  <a 
    :href="href" 
    :class="buttonClasses"
  >
    {{ label }}
  </a>
</template>

<script setup lang="ts">
/**
 * Composant bouton d'action réutilisable
 */

interface Props {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

const props = defineProps<Props>()

/**
 * Retourne les classes CSS selon le variant du bouton
 */
const getVariantClasses = (variant: Props['variant']): string => {
  const variantMap: Record<Props['variant'], string> = {
    primary: 'bg-primary-600 hover:bg-primary-500 shadow-lg focus-visible:outline-primary-600',
    secondary: 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
  }
  
  return variantMap[variant]
}

const baseClasses = 'inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 transition-all'

const buttonClasses = computed(() => [
  baseClasses,
  getVariantClasses(props.variant)
])
</script>
