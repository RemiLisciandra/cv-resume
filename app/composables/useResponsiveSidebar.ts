import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

/**
 * Composable pour gérer l'état et le comportement de la sidebar responsive
 * Gère les breakpoints et l'ouverture/fermeture du menu
 */

export const useResponsiveSidebar = () => {
  const isSidebarOpen = ref(false)
  const windowWidth = ref(0)

  // Breakpoints
  const DESKTOP_BREAKPOINT = 1280
  const MOBILE_FULLSCREEN_BREAKPOINT = 900

  const isDesktop = computed(() => windowWidth.value >= DESKTOP_BREAKPOINT)
  const isMobileFullscreen = computed(() => windowWidth.value < MOBILE_FULLSCREEN_BREAKPOINT)
  const showBurgerMenu = computed(() => windowWidth.value < DESKTOP_BREAKPOINT)

  /**
   * Toggle l'état de la sidebar
   */
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  /**
   * Ferme la sidebar
   */
  const closeSidebar = () => {
    isSidebarOpen.value = false
  }

  /**
   * Ouvre la sidebar
   */
  const openSidebar = () => {
    isSidebarOpen.value = true
  }

  /**
   * Met à jour la largeur de la fenêtre
   */
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
  }

  /**
   * Gère le passage sous le breakpoint desktop
   */
  const handleBreakpointChange = () => {
    if (windowWidth.value < DESKTOP_BREAKPOINT) {
      closeSidebar()
    }
  }

  // Initialisation au montage
  onMounted(() => {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    
    // Watch pour fermer automatiquement sous 1280px
    watch(windowWidth, (newWidth, oldWidth) => {
      if (oldWidth >= DESKTOP_BREAKPOINT && newWidth < DESKTOP_BREAKPOINT) {
        handleBreakpointChange()
      }
    })
  })

  // Nettoyage
  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth)
  })

  return {
    isSidebarOpen,
    isDesktop,
    isMobileFullscreen,
    showBurgerMenu,
    toggleSidebar,
    closeSidebar,
    openSidebar
  }
}
