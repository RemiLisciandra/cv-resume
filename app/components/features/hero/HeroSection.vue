<template>
  <div class="h-full flex flex-col bg-gray-900 p-8 lg:p-12">
    <!-- Photo de profil -->
    <div class="flex justify-center mb-8" :class="{ 'animate-fade-in-up': isMounted }" style="animation-delay: 0.1s">
      <HeroProfileImage 
        :image-url="personalInfo.imageUrl" 
        :image-alt="personalInfo.imageAlt"
        size="xxlarge"
      />
    </div>
    
    <!-- Informations personnelles -->
    <div class="flex-1" :class="{ 'animate-fade-in-up': isMounted }" style="animation-delay: 0.2s">
      <HeroProfileInfo :personal-info="personalInfo" />
      
      <!-- Boutons d'action -->
      <div class="mt-8" :class="{ 'animate-fade-in-up': isMounted }" style="animation-delay: 0.4s">
        <CallToActionButtons :actions="callToActions" />
      </div>
    </div>
    
    <!-- Mentions légales -->
    <div :class="{ 'animate-fade-in': isMounted }" style="animation-delay: 0.5s">
      <HeroLegalNotice :full-name="personalInfo.fullName" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
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

.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fade-in 0.6s ease-out forwards;
}
</style>
