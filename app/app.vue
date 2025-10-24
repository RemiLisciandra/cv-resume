<template>
  <div class="h-screen overflow-hidden bg-gray-900 relative">
    <NuxtRouteAnnouncer />
    
    <!-- Bouton burger (visible < 1280px) -->
    <div 
      v-if="showBurgerMenu" 
      class="fixed top-4 right-4 z-50"
    >
      <BurgerMenu 
        :is-open="isSidebarOpen" 
        @toggle="toggleSidebar"
      />
    </div>
    
    <!-- Layout -->
    <div class="h-full flex flex-col md:flex-row relative">
      <!-- Contenu principal -->
      <div 
        class="flex-1 h-full overflow-hidden transition-all duration-300"
        :class="[
          isDesktop ? '2xl:order-1' : '',
          !isDesktop && isSidebarOpen && isMobileFullscreen ? 'hidden' : ''
        ]"
      >
        <Main />
      </div>
      
      <!-- Overlay (visible quand sidebar ouverte sur mobile) -->
      <Transition name="fade">
        <div 
          v-if="!isDesktop && isSidebarOpen && !isMobileFullscreen"
          class="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          @click="closeSidebar"
        />
      </Transition>
      
      <!-- Sidebar Hero Section -->
      <Transition :name="isMobileFullscreen ? 'slide-fullscreen' : 'slide'">
        <div 
          v-if="isDesktop || isSidebarOpen"
          class="h-full overflow-hidden bg-gray-900 transition-all duration-300"
          :class="[
            isDesktop ? 'md:w-1/3 lg:w-2/5 xl:w-1/3 md:order-2 relative' : '',
            !isDesktop ? 'fixed right-0 top-0 z-40 shadow-2xl' : '',
            !isDesktop && !isMobileFullscreen ? 'w-80 max-w-[80vw]' : '',
            !isDesktop && isMobileFullscreen ? 'w-full' : ''
          ]"
        >
          <HeroSection />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant racine de l'application
 * Layout responsive : split-screen sur desktop, sidebar avec burger menu sur mobile
 * - >= 1280px : Layout côte à côte classique
 * - < 1280px : Sidebar avec burger menu
 * - < 900px : Sidebar en plein écran
 */

const { 
  isSidebarOpen, 
  isDesktop, 
  isMobileFullscreen, 
  showBurgerMenu,
  toggleSidebar,
  closeSidebar
} = useResponsiveSidebar()
</script>

<style scoped>
/* Transition fade pour l'overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Transition slide pour la sidebar (< 900px) */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Transition slide fullscreen pour la sidebar (>= 900px) */
.slide-fullscreen-enter-active,
.slide-fullscreen-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-fullscreen-enter-from,
.slide-fullscreen-leave-to {
  transform: translateX(100%);
}
</style>
