<template>
  <p class="mt-6 text-base/7 text-gray-300">
    {{ descriptionBeforeKeyword }}<AnimatedText>DATA</AnimatedText>{{ descriptionAfterKeyword }}
  </p>
</template>

<script setup lang="ts">
/**
 * Composant d'affichage de la description du profil avec animation
 * La description provient de ~/data/profile.ts
 */

interface Props {
  description: string
}

const props = defineProps<Props>()

// Découper la description autour du mot "DATA" pour l'animation
const parts = props.description.split(/\bDATA\b/i)
const descriptionBeforeKeyword = parts[0] || ''
const descriptionAfterKeyword = parts[1] || ''
</script>
