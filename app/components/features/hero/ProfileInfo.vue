<template>
  <div>
    <h2 class="text-base/7 font-semibold text-primary-400">
      {{ personalInfo.title }}
    </h2>
    <p class="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      {{ personalInfo.fullName }}
    </p>
    
    <!-- Métadonnées (âge et localisation) -->
    <div class="mt-4">
      <HeroProfileMetadata 
        :age="personalInfo.age" 
        :location="personalInfo.location" 
      />
    </div>
    
    <!-- Email -->
    <HeroProfileEmail :email="personalInfo.email" />
    
    <!-- Description avec animation -->
    <HeroProfileDescription />
  </div>
</template>

<script setup lang="ts">
/**
 * Composant d'affichage des informations de profil
 */

import type { PersonalInfo } from '~/types/profile'

interface Props {
  personalInfo: PersonalInfo
}

defineProps<Props>()
</script>
