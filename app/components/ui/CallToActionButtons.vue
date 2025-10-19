<template>
  <div class="mt-8 flex flex-wrap gap-4">
    <CallToActionButton
      v-for="action in actions"
      :key="action.href"
      :label="action.label"
      :href="action.href"
      :variant="action.variant"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Composant conteneur pour les boutons d'action
 */

import type { CallToAction } from '~/types/profile'

interface Props {
  actions: CallToAction[]
}

defineProps<Props>()
</script>
