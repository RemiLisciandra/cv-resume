<template>
  <div class="py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Titre de la section -->
      <SectionTitle>Mon parcours professionnel</SectionTitle>
      
      <!-- Timeline -->
      <div class="mx-auto max-w-3xl mt-12">
        <TimelineItem
          v-for="(experience, index) in experiences"
          :key="experience.id"
          :company="experience.company"
          :logo="experience.logo"
          :position="experience.position"
          :period="experience.period"
          :is-last="index === experiences.length - 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant timeline des expériences professionnelles
 * Affiche le parcours professionnel de manière chronologique et moderne
 */

import { experiences } from '~/data/experiences'
</script>
