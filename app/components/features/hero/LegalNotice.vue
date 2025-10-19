<template>
  <div class="mt-auto pt-8 border-t border-gray-800">
    <p class="text-xs text-gray-500 text-center">
      © {{ currentYear }} {{ fullName }}. Tous droits réservés.
    </p>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant des mentions légales
 */

interface Props {
  fullName: string
}

defineProps<Props>()

const currentYear = new Date().getFullYear()
</script>
