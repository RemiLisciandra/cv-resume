import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ActionButton from '~/components/ui/ActionButton.vue'

describe('ActionButton', () => {
  it('devrait afficher le label correctement', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Click me',
        href: '/test',
        variant: 'primary'
      }
    })

    expect(wrapper.text()).toContain('Click me')
  })

  it('devrait avoir le href correct', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Test',
        href: 'https://example.com',
        variant: 'primary'
      }
    })

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('https://example.com')
  })

  it('devrait appliquer les classes du variant primary', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Test',
        href: '/test',
        variant: 'primary'
      }
    })

    const link = wrapper.find('a')
    expect(link.classes()).toContain('bg-primary-600')
    expect(link.classes()).toContain('hover:bg-primary-500')
  })

  it('devrait appliquer les classes du variant secondary', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Test',
        href: '/test',
        variant: 'secondary'
      }
    })

    const link = wrapper.find('a')
    expect(link.classes()).toContain('bg-white/10')
    expect(link.classes()).toContain('hover:bg-white/20')
  })

  it('devrait détecter un lien de téléchargement PDF', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Download',
        href: '/cv.pdf',
        variant: 'primary'
      }
    })

    const link = wrapper.find('a')
    expect(link.attributes('download')).toBeDefined()
  })

  it('devrait détecter un lien de téléchargement DOC', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Download',
        href: '/document.doc',
        variant: 'primary'
      }
    })

    const link = wrapper.find('a')
    expect(link.attributes('download')).toBeDefined()
  })

  it('devrait détecter un lien de téléchargement DOCX', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Download',
        href: '/document.docx',
        variant: 'primary'
      }
    })

    const link = wrapper.find('a')
    expect(link.attributes('download')).toBeDefined()
  })

  it('ne devrait pas avoir d\'attribut download pour un lien normal', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Link',
        href: 'https://example.com',
        variant: 'primary'
      }
    })

    const link = wrapper.find('a')
    expect(link.attributes('download')).toBeUndefined()
  })

  it('devrait avoir les classes de base', () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Test',
        href: '/test',
        variant: 'primary'
      }
    })

    const link = wrapper.find('a')
    expect(link.classes()).toContain('inline-flex')
    expect(link.classes()).toContain('items-center')
    expect(link.classes()).toContain('rounded-lg')
    expect(link.classes()).toContain('text-white')
  })

  it('devrait gérer le clic sans erreur', async () => {
    const wrapper = mount(ActionButton, {
      props: {
        label: 'Link',
        href: 'https://example.com',
        variant: 'primary'
      },
      global: {
        stubs: {
          SparkleEffect: true
        }
      }
    })

    const link = wrapper.find('a')
    await link.trigger('click')

    // Le composant devrait gérer le clic sans erreur
    expect(wrapper.exists()).toBe(true)
  })
})
