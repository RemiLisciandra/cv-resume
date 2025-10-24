import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LegalNotice from '~/components/features/hero/LegalNotice.vue'

describe('LegalNotice', () => {
  it('devrait afficher l\'année courante', () => {
    const wrapper = mount(LegalNotice, {
      props: {
        fullName: 'John Doe'
      }
    })

    const currentYear = new Date().getFullYear()
    expect(wrapper.text()).toContain(String(currentYear))
  })

  it('devrait afficher le nom complet', () => {
    const wrapper = mount(LegalNotice, {
      props: {
        fullName: 'Jane Smith'
      }
    })

    expect(wrapper.text()).toContain('Jane Smith')
  })

  it('devrait afficher "Tous droits réservés"', () => {
    const wrapper = mount(LegalNotice, {
      props: {
        fullName: 'Test User'
      }
    })

    expect(wrapper.text()).toContain('Tous droits réservés')
  })

  it('devrait avoir une bordure supérieure', () => {
    const wrapper = mount(LegalNotice, {
      props: {
        fullName: 'Test'
      }
    })

    const container = wrapper.find('.border-t')
    expect(container.exists()).toBe(true)
  })

  it('devrait centrer le texte', () => {
    const wrapper = mount(LegalNotice, {
      props: {
        fullName: 'Test'
      }
    })

    const text = wrapper.find('.text-center')
    expect(text.exists()).toBe(true)
  })
})
