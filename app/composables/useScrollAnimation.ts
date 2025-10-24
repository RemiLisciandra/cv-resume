import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable pour gérer les animations au scroll avec IntersectionObserver
 * Utilisé pour animer les éléments lorsqu'ils entrent dans le viewport
 */

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px'
  } = options

  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Une fois visible, on peut arrêter d'observer
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }

    onUnmounted(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    })
  })

  return {
    elementRef,
    isVisible
  }
}
