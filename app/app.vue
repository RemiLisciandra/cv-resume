<template>
  <div class="h-screen overflow-hidden bg-gray-900">
    <NuxtRouteAnnouncer />
    
    <!-- Layout à deux colonnes -->
    <div class="h-full flex flex-col md:flex-row">
      <!-- Partie gauche : Contenu principal scrollable -->
      <div class="flex-1 h-full overflow-hidden 2xl:order-1">
        <Main />
      </div>
      
      <!-- Partie droite : Hero Section fixe -->
      <div class="h-full md:w-1/3 lg:w-2/5 xl:w-1/3 overflow-hidden md:order-2">
        <HeroSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant racine de l'application
 * Layout split-screen : contenu scrollable à gauche, hero fixe à droite
 */
</script>
