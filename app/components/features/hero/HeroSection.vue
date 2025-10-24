<template>
  <div class="h-full flex flex-col bg-gray-900 p-8 lg:p-12">
    <!-- Photo de profil -->
    <div class="flex justify-center mb-8" :class="{ 'animate-fade-in-pop': isMounted }" style="animation-delay: 0.5s">
      <HeroProfileImage 
        :image-url="personalInfo.imageUrl" 
        :image-alt="personalInfo.imageAlt"
        size="xxlarge"
      />
    </div>
    
    <!-- Informations personnelles -->
    <div class="flex-1" :class="{ 'animate-fade-in-up': isMounted }" style="animation-delay: 0.35s">
      <HeroProfileInfo :personal-info="personalInfo" />
      
      <!-- Boutons d'action -->
      <div class="mt-8" :class="{ 'animate-fade-in-up': isMounted }" style="animation-delay: 0.65s">
        <ActionButtonGroup :actions="callToActions" />
      </div>
    </div>
    
    <!-- Mentions légales -->
    <div :class="{ 'animate-fade-in': isMounted }" style="animation-delay: 0.85s">
      <HeroLegalNotice :full-name="personalInfo.fullName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * Composant Hero Section (partie droite fixe)
 */

import { useProfileData } from '~/composables/useProfileData'

const { getPersonalInfo, getCallToActions } = useProfileData()

const personalInfo = getPersonalInfo()
const callToActions = getCallToActions()

// Activation des animations uniquement côté client pour éviter les erreurs d'hydratation
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
@keyframes fade-in-pop {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-pop {
  opacity: 0;
  animation: fade-in-pop 1.2s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 1s ease-out forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fade-in 1s ease-out forwards;
}
</style>
