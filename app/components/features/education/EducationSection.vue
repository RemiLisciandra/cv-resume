<template>
  <div class="py-8 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Titre de la section -->
      <SectionTitle>Ma formation académique</SectionTitle>

      <!-- Grille des formations -->
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <EducationCard
          v-for="(education, index) in educations"
          :key="education.id"
          :school="education.school"
          :logo="education.logo"
          :degree="education.degree"
          :level="education.level"
          :period="education.period"
          :skills="education.skills"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { educations } from '~/data/education'

/**
 * Composant section des formations académiques
 * Affiche les diplômes et formations avec leurs compétences associées
 */
</script>
