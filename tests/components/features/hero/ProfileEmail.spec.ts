import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileEmail from '~/components/features/hero/ProfileEmail.vue'

describe('ProfileEmail', () => {
  it('devrait afficher l\'email', () => {
    const wrapper = mount(ProfileEmail, {
      props: {
        email: 'test@example.com'
      }
    })

    expect(wrapper.text()).toContain('test@example.com')
  })

  it('devrait avoir un lien mailto', () => {
    const wrapper = mount(ProfileEmail, {
      props: {
        email: 'contact@domain.com'
      }
    })

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('mailto:contact@domain.com')
  })

  it('devrait avoir une icône email', () => {
    const wrapper = mount(ProfileEmail, {
      props: {
        email: 'test@example.com'
      }
    })

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('devrait avoir les classes hover', () => {
    const wrapper = mount(ProfileEmail, {
      props: {
        email: 'test@example.com'
      }
    })

    const link = wrapper.find('a')
    expect(link.classes()).toContain('hover:text-primary-400')
  })
})
