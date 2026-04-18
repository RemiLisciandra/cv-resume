<template>
  <div class="py-8 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header avec pipeline -->
      <CareerCompanyHeader />

      <!-- Titre de la section -->
      <SectionTitle>Mes domaines d'activité</SectionTitle>

      <!-- Grille des activités -->
      <div class="mx-auto max-w-2xl xl:max-w-none">
        <div
          class="grid grid-cols-1 gap-8 xl:grid-cols-3 place-items-center xl:place-items-stretch"
        >
          <CareerActivityCard
            v-for="activity in activities"
            :key="activity.id"
            :title="activity.title"
            :description="activity.description"
            :icon="activity.icon"
            :gradient="activity.gradient"
            :info-content="activity.infoContent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { activities } from "~/data/activities";
</script>
