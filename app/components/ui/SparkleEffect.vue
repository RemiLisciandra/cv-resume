<template>
  <div class="sparkle-container">
    <span 
      v-for="sparkle in sparkles" 
      :key="sparkle.id"
      class="sparkle"
      :style="{
        left: `${sparkle.x}px`,
        top: `${sparkle.y}px`,
        animationDelay: `${sparkle.delay}ms`
      }"
    >
      ✨
    </span>
  </div>
</template>

<script setup lang="ts">
/**
 * Composant d'effet d'étoiles scintillantes
 * Affiche des étoiles animées qui apparaissent et disparaissent
 */

interface Sparkle {
  id: number
  x: number
  y: number
  delay: number
}

interface Props {
  count?: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 12,
  duration: 1000
})

const sparkles = ref<Sparkle[]>([])
let sparkleId = 0

const createSparkles = () => {
  const newSparkles: Sparkle[] = []
  const radius = 60
  
  for (let i = 0; i < props.count; i++) {
    const angle = (Math.PI * 2 * i) / props.count
    const distance = radius + Math.random() * 20
    
    newSparkles.push({
      id: sparkleId++,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      delay: Math.random() * 200
    })
  }
  
  sparkles.value = newSparkles
  
  setTimeout(() => {
    sparkles.value = []
  }, props.duration)
}

defineExpose({
  trigger: createSparkles
})
</script>

<style scoped>
.sparkle-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
}

.sparkle {
  position: absolute;
  font-size: 1rem;
  animation: sparkle-float 1s ease-out forwards;
  opacity: 0;
}

@keyframes sparkle-float {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: translate(0, 0) scale(1.2) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: translate(0, -20px) scale(0.5) rotate(360deg);
  }
}
</style>
