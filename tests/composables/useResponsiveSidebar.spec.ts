import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { useResponsiveSidebar } from '~/composables/useResponsiveSidebar'

// Composant wrapper pour tester le composable
const TestComponent = defineComponent({
  setup() {
    const sidebar = useResponsiveSidebar()
    return { sidebar }
  },
  render() {
    return h('div')
  }
})

describe('useResponsiveSidebar', () => {
  beforeEach(() => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1920
    })
  })

  it('devrait initialiser avec la sidebar fermée', () => {
    const wrapper = mount(TestComponent)
    const { sidebar } = wrapper.vm as any

    expect(sidebar.isSidebarOpen.value).toBe(false)
  })

  it('devrait ouvrir la sidebar avec openSidebar', () => {
    const wrapper = mount(TestComponent)
    const { sidebar } = wrapper.vm as any

    sidebar.openSidebar()
    expect(sidebar.isSidebarOpen.value).toBe(true)
  })

  it('devrait fermer la sidebar avec closeSidebar', () => {
    const wrapper = mount(TestComponent)
    const { sidebar } = wrapper.vm as any

    sidebar.openSidebar()
    expect(sidebar.isSidebarOpen.value).toBe(true)

    sidebar.closeSidebar()
    expect(sidebar.isSidebarOpen.value).toBe(false)
  })

  it('devrait toggle la sidebar avec toggleSidebar', () => {
    const wrapper = mount(TestComponent)
    const { sidebar } = wrapper.vm as any

    expect(sidebar.isSidebarOpen.value).toBe(false)

    sidebar.toggleSidebar()
    expect(sidebar.isSidebarOpen.value).toBe(true)

    sidebar.toggleSidebar()
    expect(sidebar.isSidebarOpen.value).toBe(false)
  })

  it('devrait détecter le mode desktop avec windowWidth >= 1280', () => {
    // Desktop
    window.innerWidth = 1920
    const wrapper1 = mount(TestComponent)
    expect((wrapper1.vm as any).sidebar.isDesktop.value).toBe(true)

    // Exactly 1280
    window.innerWidth = 1280
    const wrapper2 = mount(TestComponent)
    expect((wrapper2.vm as any).sidebar.isDesktop.value).toBe(true)

    // Below 1280
    window.innerWidth = 1279
    const wrapper3 = mount(TestComponent)
    expect((wrapper3.vm as any).sidebar.isDesktop.value).toBe(false)
  })

  it('devrait détecter le mode mobile fullscreen avec windowWidth < 900', () => {
    // Below 900
    window.innerWidth = 899
    const wrapper1 = mount(TestComponent)
    expect((wrapper1.vm as any).sidebar.isMobileFullscreen.value).toBe(true)

    // At 900
    window.innerWidth = 900
    const wrapper2 = mount(TestComponent)
    expect((wrapper2.vm as any).sidebar.isMobileFullscreen.value).toBe(false)
  })

  it('devrait afficher le burger menu quand windowWidth < 1280', () => {
    // Below 1280
    window.innerWidth = 1279
    const wrapper1 = mount(TestComponent)
    expect((wrapper1.vm as any).sidebar.showBurgerMenu.value).toBe(true)

    // At 1280
    window.innerWidth = 1280
    const wrapper2 = mount(TestComponent)
    expect((wrapper2.vm as any).sidebar.showBurgerMenu.value).toBe(false)
  })

  it('devrait gérer les breakpoints correctement', () => {
    // Desktop
    window.innerWidth = 1920
    const wrapper1 = mount(TestComponent)
    const sidebar1 = (wrapper1.vm as any).sidebar
    expect(sidebar1.isDesktop.value).toBe(true)
    expect(sidebar1.isMobileFullscreen.value).toBe(false)
    expect(sidebar1.showBurgerMenu.value).toBe(false)

    // Tablet
    window.innerWidth = 1024
    const wrapper2 = mount(TestComponent)
    const sidebar2 = (wrapper2.vm as any).sidebar
    expect(sidebar2.isDesktop.value).toBe(false)
    expect(sidebar2.isMobileFullscreen.value).toBe(false)
    expect(sidebar2.showBurgerMenu.value).toBe(true)

    // Mobile fullscreen
    window.innerWidth = 800
    const wrapper3 = mount(TestComponent)
    const sidebar3 = (wrapper3.vm as any).sidebar
    expect(sidebar3.isDesktop.value).toBe(false)
    expect(sidebar3.isMobileFullscreen.value).toBe(true)
    expect(sidebar3.showBurgerMenu.value).toBe(true)
  })
})
