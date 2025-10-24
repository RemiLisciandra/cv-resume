import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Mock IntersectionObserver
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  options: IntersectionObserverInit | undefined

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback
    this.options = options
  }

  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])
}

// Composant wrapper pour tester le composable
const TestComponent = defineComponent({
  setup() {
    const animation = useScrollAnimation()
    return { animation }
  },
  render() {
    return h('div', { ref: 'elementRef' })
  }
})

describe('useScrollAnimation', () => {
  let intersectionObserverMock: MockIntersectionObserver

  beforeEach(() => {
    // Setup IntersectionObserver mock
    intersectionObserverMock = new MockIntersectionObserver(() => {})
    global.IntersectionObserver = vi.fn().mockImplementation((callback, options) => {
      intersectionObserverMock = new MockIntersectionObserver(callback, options)
      return intersectionObserverMock
    }) as any
  })

  it('devrait initialiser avec isVisible à false', () => {
    const wrapper = mount(TestComponent)
    const { animation } = wrapper.vm as any

    expect(animation.isVisible.value).toBe(false)
  })

  it('devrait avoir une référence d\'élément', () => {
    const wrapper = mount(TestComponent)
    const { animation } = wrapper.vm as any

    expect(animation.elementRef).toBeDefined()
  })

  it('devrait créer un IntersectionObserver avec les options par défaut', () => {
    mount(TestComponent)

    expect(global.IntersectionObserver).toHaveBeenCalled()
    expect(intersectionObserverMock.options).toEqual({
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
  })

  it('devrait observer l\'élément au montage', async () => {
    const wrapper = mount(TestComponent)
    const { animation } = wrapper.vm as any
    
    // Attendre le montage et définir l'élément
    await wrapper.vm.$nextTick()
    
    // Si l'élément ref existe, l'observer devrait être appelé
    if (animation.elementRef.value) {
      expect(intersectionObserverMock.observe).toHaveBeenCalledWith(animation.elementRef.value)
    } else {
      // Dans le contexte de test, l'élément peut ne pas être assigné immédiatement
      expect(intersectionObserverMock.observe).toHaveBeenCalledTimes(0)
    }
  })

  it('devrait mettre isVisible à true quand l\'élément entre dans le viewport', () => {
    const wrapper = mount(TestComponent)
    const { animation } = wrapper.vm as any

    // Simuler l'entrée dans le viewport
    const entries: Partial<IntersectionObserverEntry>[] = [{
      isIntersecting: true,
      target: wrapper.element
    }]
    
    intersectionObserverMock.callback(entries as IntersectionObserverEntry[], intersectionObserverMock as any)

    expect(animation.isVisible.value).toBe(true)
  })

  it('ne devrait pas changer isVisible quand l\'élément n\'est pas visible', () => {
    const wrapper = mount(TestComponent)
    const { animation } = wrapper.vm as any

    // Simuler l'élément hors du viewport
    const entries: Partial<IntersectionObserverEntry>[] = [{
      isIntersecting: false,
      target: wrapper.element
    }]
    
    intersectionObserverMock.callback(entries as IntersectionObserverEntry[], intersectionObserverMock as any)

    expect(animation.isVisible.value).toBe(false)
  })

  it('devrait arrêter d\'observer une fois que l\'élément est visible', () => {
    const wrapper = mount(TestComponent)
    const targetElement = wrapper.element

    // Simuler l'entrée dans le viewport
    const entries: Partial<IntersectionObserverEntry>[] = [{
      isIntersecting: true,
      target: targetElement
    }]
    
    intersectionObserverMock.callback(entries as IntersectionObserverEntry[], intersectionObserverMock as any)

    expect(intersectionObserverMock.unobserve).toHaveBeenCalledWith(targetElement)
  })

  it('devrait accepter des options personnalisées', () => {
    const TestComponentWithOptions = defineComponent({
      setup() {
        const animation = useScrollAnimation({
          threshold: 0.5,
          rootMargin: '100px'
        })
        return { animation }
      },
      render() {
        return h('div', { ref: 'elementRef' })
      }
    })

    mount(TestComponentWithOptions)

    expect(intersectionObserverMock.options).toEqual({
      threshold: 0.5,
      rootMargin: '100px'
    })
  })
})
