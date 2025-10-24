import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileMetadata from '~/components/features/hero/ProfileMetadata.vue'

describe('ProfileMetadata', () => {
  it('devrait afficher l\'âge', () => {
    const wrapper = mount(ProfileMetadata, {
      props: {
        age: 25,
        location: 'Paris'
      }
    })

    expect(wrapper.text()).toContain('25 ans')
  })

  it('devrait afficher la localisation', () => {
    const wrapper = mount(ProfileMetadata, {
      props: {
        age: 30,
        location: 'Lyon'
      }
    })

    expect(wrapper.text()).toContain('Lyon')
  })

  it('devrait avoir deux icônes SVG', () => {
    const wrapper = mount(ProfileMetadata, {
      props: {
        age: 25,
        location: 'Paris'
      }
    })

    const svgs = wrapper.findAll('svg')
    expect(svgs).toHaveLength(2)
  })

  it('devrait avoir une disposition flex', () => {
    const wrapper = mount(ProfileMetadata, {
      props: {
        age: 25,
        location: 'Paris'
      }
    })

    const container = wrapper.find('.flex')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('flex-wrap')
  })
})
