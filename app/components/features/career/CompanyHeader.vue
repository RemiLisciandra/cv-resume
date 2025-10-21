<template>
  <div>
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <DestiaLogo />
    </div>

    <!-- Description -->
    <div class="mx-auto max-w-2xl text-center mb-6">
      <p class="text-lg/8 text-white/80">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant header d'entreprise avec logo et description
 * Affiche les informations de présentation de l'entreprise actuelle
 */

interface Props {
  description: string
}

defineProps<Props>()
</script>
