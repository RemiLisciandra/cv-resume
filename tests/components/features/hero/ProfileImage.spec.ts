import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileImage from '~/components/features/hero/ProfileImage.vue'

describe('ProfileImage', () => {
  it('devrait afficher l\'image avec le bon src', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'John Doe'
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/me.png')
  })

  it('devrait afficher l\'alt text', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'John Doe'
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('John Doe')
  })

  it('devrait utiliser la taille large par défaut', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'Test'
      }
    })

    const container = wrapper.find('.relative')
    expect(container.classes()).toContain('size-32')
  })

  it('devrait appliquer la taille xlarge', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'Test',
        size: 'xlarge'
      }
    })

    const container = wrapper.find('.relative')
    expect(container.classes()).toContain('size-48')
  })

  it('devrait appliquer la taille xxlarge', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'Test',
        size: 'xxlarge'
      }
    })

    const container = wrapper.find('.relative')
    expect(container.classes()).toContain('size-64')
  })

  it('devrait avoir un effet de glow', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'Test'
      }
    })

    const glow = wrapper.find('.bg-gradient-to-br')
    expect(glow.exists()).toBe(true)
  })

  it('devrait avoir une image ronde', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'Test'
      }
    })

    const img = wrapper.find('img')
    expect(img.classes()).toContain('rounded-full')
  })

  it('devrait avoir une bordure', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        imageUrl: '/me.png',
        imageAlt: 'Test'
      }
    })

    const img = wrapper.find('img')
    expect(img.classes()).toContain('border-4')
  })
})
