<template>
  <div class="relative inline-block">
    <a 
      ref="buttonRef"
      :href="href" 
      :class="buttonClasses"
      :download="isDownloadLink ? '' : undefined"
      @click="handleClick"
    >
      {{ label }}
    </a>
    <SparkleEffect ref="sparkleEffect" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

/**
 * Composant bouton d'action réutilisable
 * Supporte les animations d'étoiles pour les téléchargements
 */

interface Props {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

const props = defineProps<Props>()
const sparkleEffect = ref<{ trigger: () => void } | null>(null)
const buttonRef = ref<HTMLAnchorElement | null>(null)

const isDownloadLink = computed(() => {
  return props.href.endsWith('.pdf') || props.href.endsWith('.doc') || props.href.endsWith('.docx')
})

const handleClick = () => {
  if (isDownloadLink.value && sparkleEffect.value) {
    sparkleEffect.value.trigger()
  }
}

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
