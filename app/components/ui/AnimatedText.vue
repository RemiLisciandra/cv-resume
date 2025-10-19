<template>
  <span class="animated-gradient font-bold">
    <slot />
  </span>
</template>

<script setup lang="ts">
/**
 * Composant de texte avec animation de gradient
 */
</script>

<style scoped>
.animated-gradient {
  background: linear-gradient(
    90deg,
    #8b5cf6,
    #d946ef,
    #8b5cf6,
    #d946ef
  );
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
