import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DestiaLogo from '~/components/ui/DestiaLogo.vue'

describe('DestiaLogo', () => {
  it('devrait être un lien externe', () => {
    const wrapper = mount(DestiaLogo)

    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })

  it('devrait avoir un href vers le site de l\'entreprise', () => {
    const wrapper = mount(DestiaLogo)

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBeDefined()
    expect(link.attributes('href')).toBeTruthy()
  })

  it('devrait avoir un aria-label', () => {
    const wrapper = mount(DestiaLogo)

    const link = wrapper.find('a')
    expect(link.attributes('aria-label')).toBeDefined()
  })

  it('devrait contenir un SVG', () => {
    const wrapper = mount(DestiaLogo)

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('le SVG devrait avoir les bonnes dimensions', () => {
    const wrapper = mount(DestiaLogo)

    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('129')
    expect(svg.attributes('height')).toBe('46')
  })

  it('devrait avoir les classes de style du lien', () => {
    const wrapper = mount(DestiaLogo)

    const link = wrapper.find('a')
    expect(link.classes()).toContain('inline-flex')
    expect(link.classes()).toContain('items-center')
    expect(link.classes()).toContain('justify-center')
    expect(link.classes()).toContain('bg-white')
    expect(link.classes()).toContain('rounded-full')
  })

  it('devrait avoir une ombre', () => {
    const wrapper = mount(DestiaLogo)

    const link = wrapper.find('a')
    expect(link.classes()).toContain('shadow-xl')
  })

  it('devrait avoir les bonnes dimensions du conteneur', () => {
    const wrapper = mount(DestiaLogo)

    const link = wrapper.find('a')
    expect(link.classes()).toContain('w-32')
    expect(link.classes()).toContain('h-32')
  })

  it('le SVG devrait avoir la classe h-10', () => {
    const wrapper = mount(DestiaLogo)

    const svg = wrapper.find('svg')
    expect(svg.classes()).toContain('h-10')
    expect(svg.classes()).toContain('w-auto')
  })
})
