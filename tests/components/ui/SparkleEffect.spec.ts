import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SparkleEffect from '~/components/ui/SparkleEffect.vue'

describe('SparkleEffect', () => {
  it('devrait initialiser sans sparkles', () => {
    const wrapper = mount(SparkleEffect)

    const sparkles = wrapper.findAll('.sparkle')
    expect(sparkles).toHaveLength(0)
  })

  it('devrait avoir la prop count par défaut à 12', async () => {
    const wrapper = mount(SparkleEffect)

    // Appeler la méthode trigger via l'API exposée
    if (wrapper.vm.trigger) {
      wrapper.vm.trigger()
      await wrapper.vm.$nextTick()

      const sparkles = wrapper.findAll('.sparkle')
      expect(sparkles).toHaveLength(12)
    }
  })

  it('devrait créer le bon nombre de sparkles avec count personnalisé', async () => {
    const wrapper = mount(SparkleEffect, {
      props: {
        count: 5
      }
    })

    if (wrapper.vm.trigger) {
      wrapper.vm.trigger()
      await wrapper.vm.$nextTick()

      const sparkles = wrapper.findAll('.sparkle')
      expect(sparkles).toHaveLength(5)
    }
  })

  it('devrait avoir un conteneur avec la classe sparkle-container', () => {
    const wrapper = mount(SparkleEffect)

    const container = wrapper.find('.sparkle-container')
    expect(container.exists()).toBe(true)
  })

  it('devrait exposer la méthode trigger', () => {
    const wrapper = mount(SparkleEffect)

    expect(wrapper.vm.trigger).toBeDefined()
    expect(typeof wrapper.vm.trigger).toBe('function')
  })

  it('les sparkles devraient avoir des positions en style inline', async () => {
    const wrapper = mount(SparkleEffect, {
      props: {
        count: 3
      }
    })

    if (wrapper.vm.trigger) {
      wrapper.vm.trigger()
      await wrapper.vm.$nextTick()

      const sparkles = wrapper.findAll('.sparkle')
      sparkles.forEach(sparkle => {
        const style = sparkle.attributes('style')
        expect(style).toBeDefined()
        expect(style).toContain('left')
        expect(style).toContain('top')
      })
    }
  })

  it('les sparkles devraient avoir un emoji étoile', async () => {
    const wrapper = mount(SparkleEffect, {
      props: {
        count: 2
      }
    })

    if (wrapper.vm.trigger) {
      wrapper.vm.trigger()
      await wrapper.vm.$nextTick()

      const sparkles = wrapper.findAll('.sparkle')
      sparkles.forEach(sparkle => {
        expect(sparkle.text()).toBe('✨')
      })
    }
  })

  it('devrait nettoyer les sparkles après la durée', async () => {
    vi.useFakeTimers()
    
    const wrapper = mount(SparkleEffect, {
      props: {
        duration: 100
      }
    })

    if (wrapper.vm.trigger) {
      wrapper.vm.trigger()
      await wrapper.vm.$nextTick()

      // Devrait avoir des sparkles
      let sparkles = wrapper.findAll('.sparkle')
      expect(sparkles.length).toBeGreaterThan(0)

      // Avancer le temps
      vi.advanceTimersByTime(150)
      await wrapper.vm.$nextTick()

      // Les sparkles devraient être nettoyées
      sparkles = wrapper.findAll('.sparkle')
      expect(sparkles).toHaveLength(0)
    }

    vi.useRealTimers()
  })

  it('devrait pouvoir être trigger plusieurs fois', async () => {
    const wrapper = mount(SparkleEffect)

    if (wrapper.vm.trigger) {
      // Premier trigger
      wrapper.vm.trigger()
      await wrapper.vm.$nextTick()
      let sparkles = wrapper.findAll('.sparkle')
      const firstCount = sparkles.length

      // Deuxième trigger
      wrapper.vm.trigger()
      await wrapper.vm.$nextTick()
      sparkles = wrapper.findAll('.sparkle')
      
      // Devrait avoir des sparkles à nouveau
      expect(sparkles.length).toBe(firstCount)
    }
  })
})
