import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CompanyLogo from '~/components/ui/CompanyLogo.vue'

describe('CompanyLogo', () => {
  it('devrait afficher l\'image avec le bon src', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Company Logo'
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/logo.png')
  })

  it('devrait afficher l\'alt text correct', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Mon entreprise'
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('Mon entreprise')
  })

  it('devrait utiliser la taille medium par défaut', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Logo'
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('h-16')
    expect(container.classes()).toContain('w-16')
  })

  it('devrait appliquer la taille small', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Logo',
        size: 'small'
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('h-12')
    expect(container.classes()).toContain('w-12')
  })

  it('devrait appliquer la taille large', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Logo',
        size: 'large'
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('h-20')
    expect(container.classes()).toContain('w-20')
  })

  it('devrait avoir les classes de style de base', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Logo'
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('flex')
    expect(container.classes()).toContain('items-center')
    expect(container.classes()).toContain('justify-center')
    expect(container.classes()).toContain('rounded-2xl')
    expect(container.classes()).toContain('bg-white')
  })

  it('devrait avoir l\'effet hover scale', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Logo'
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('hover:scale-105')
  })

  it('l\'image devrait avoir object-contain', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Logo'
      }
    })

    const img = wrapper.find('img')
    expect(img.classes()).toContain('object-contain')
  })

  it('devrait avoir une ombre', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        logo: '/logo.png',
        alt: 'Logo'
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('shadow-md')
  })
})
