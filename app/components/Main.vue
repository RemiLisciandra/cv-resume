<template>
  <div class="relative h-full overflow-y-auto bg-gradient-to-br from-primary-600 to-accent-600" :class="{ 'animate-fade-in-left': isMounted }">
    <!-- Section métier actuel -->
    <CareerCurrentJobSection />
    
    <!-- Timeline des expériences -->
    <ExperienceTimeline />
    
    <!-- Section formations académiques -->
    <EducationSection />
  </div>
</template>

<script setup lang="ts">
/**
 * Composant du contenu principal scrollable
 */

// Activation de l'animation uniquement côté client pour éviter les erreurs d'hydratation
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  opacity: 0;
  animation: fade-in-left 0.8s ease-out forwards;
}
</style>
