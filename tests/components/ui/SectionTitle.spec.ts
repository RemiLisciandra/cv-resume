import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionTitle from '~/components/ui/SectionTitle.vue'

describe('SectionTitle', () => {
  it('devrait afficher le contenu du slot', () => {
    const wrapper = mount(SectionTitle, {
      slots: {
        default: 'Mon titre de section'
      }
    })

    expect(wrapper.text()).toContain('Mon titre de section')
  })

  it('devrait avoir un titre h2', () => {
    const wrapper = mount(SectionTitle, {
      slots: {
        default: 'Test Title'
      }
    })

    const heading = wrapper.find('h2')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('Test Title')
  })

  it('devrait avoir les classes de style pour le titre', () => {
    const wrapper = mount(SectionTitle, {
      slots: {
        default: 'Test'
      }
    })

    const heading = wrapper.find('h2')
    expect(heading.classes()).toContain('text-xl')
    expect(heading.classes()).toContain('font-bold')
    expect(heading.classes()).toContain('text-white')
  })

  it('devrait afficher les lignes de séparation', () => {
    const wrapper = mount(SectionTitle, {
      slots: {
        default: 'Test'
      }
    })

    const separators = wrapper.findAll('.bg-white\\/20')
    expect(separators.length).toBe(2)
  })

  it('devrait avoir un conteneur flex centré', () => {
    const wrapper = mount(SectionTitle, {
      slots: {
        default: 'Test'
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('flex')
    expect(container.classes()).toContain('items-center')
    expect(container.classes()).toContain('justify-center')
  })

  it('devrait gérer du contenu HTML dans le slot', () => {
    const wrapper = mount(SectionTitle, {
      slots: {
        default: '<span class="highlight">Highlighted Title</span>'
      }
    })

    expect(wrapper.html()).toContain('highlight')
    expect(wrapper.text()).toContain('Highlighted Title')
  })

  it('devrait gérer un slot vide', () => {
    const wrapper = mount(SectionTitle, {
      slots: {
        default: ''
      }
    })

    const heading = wrapper.find('h2')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('')
  })
})
