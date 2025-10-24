import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '~/components/features/hero/HeroSection.vue'

describe('HeroSection', () => {
  it('devrait monter correctement', () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          HeroProfileImage: true,
          HeroProfileInfo: true,
          ActionButtonGroup: true,
          HeroLegalNotice: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait afficher le composant ProfileImage', () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          HeroProfileImage: {
            template: '<div class="image-stub"></div>',
            props: ['imageUrl', 'imageAlt', 'size']
          },
          HeroProfileInfo: true,
          ActionButtonGroup: true,
          HeroLegalNotice: true
        }
      }
    })

    expect(wrapper.find('.image-stub').exists()).toBe(true)
  })

  it('devrait afficher le composant ProfileInfo', () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          HeroProfileImage: true,
          HeroProfileInfo: {
            template: '<div class="info-stub"></div>',
            props: ['personalInfo']
          },
          ActionButtonGroup: true,
          HeroLegalNotice: true
        }
      }
    })

    expect(wrapper.find('.info-stub').exists()).toBe(true)
  })

  it('devrait afficher le ActionButtonGroup', () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          HeroProfileImage: true,
          HeroProfileInfo: true,
          ActionButtonGroup: {
            template: '<div class="buttons-stub"></div>',
            props: ['actions']
          },
          HeroLegalNotice: true
        }
      }
    })

    expect(wrapper.find('.buttons-stub').exists()).toBe(true)
  })

  it('devrait afficher le composant LegalNotice', () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          HeroProfileImage: true,
          HeroProfileInfo: true,
          ActionButtonGroup: true,
          HeroLegalNotice: {
            template: '<div class="legal-stub"></div>',
            props: ['fullName']
          }
        }
      }
    })

    expect(wrapper.find('.legal-stub').exists()).toBe(true)
  })

  it('devrait avoir un fond gris foncé', () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          HeroProfileImage: true,
          HeroProfileInfo: true,
          ActionButtonGroup: true,
          HeroLegalNotice: true
        }
      }
    })

    const container = wrapper.find('.bg-gray-900')
    expect(container.exists()).toBe(true)
  })

  it('devrait être en flex column full height', () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          HeroProfileImage: true,
          HeroProfileInfo: true,
          ActionButtonGroup: true,
          HeroLegalNotice: true
        }
      }
    })

    const container = wrapper.find('.h-full')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('flex')
    expect(container.classes()).toContain('flex-col')
  })
})
