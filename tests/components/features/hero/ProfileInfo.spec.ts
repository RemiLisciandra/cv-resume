import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileInfo from '~/components/features/hero/ProfileInfo.vue'
import type { PersonalInfo } from '~/types/profile'

describe('ProfileInfo', () => {
  const mockPersonalInfo: PersonalInfo = {
    fullName: 'John Doe',
    title: 'Software Engineer',
    age: 30,
    location: 'Paris',
    email: 'john@example.com',
    imageUrl: '/me.png',
    imageAlt: 'John',
    description: 'Passionate about DATA'
  }

  it('devrait afficher le nom complet', () => {
    const wrapper = mount(ProfileInfo, {
      props: {
        personalInfo: mockPersonalInfo
      },
      global: {
        stubs: {
          HeroProfileMetadata: true,
          HeroProfileEmail: true,
          HeroProfileDescription: true
        }
      }
    })

    expect(wrapper.text()).toContain('John Doe')
  })

  it('devrait afficher le titre', () => {
    const wrapper = mount(ProfileInfo, {
      props: {
        personalInfo: mockPersonalInfo
      },
      global: {
        stubs: {
          HeroProfileMetadata: true,
          HeroProfileEmail: true,
          HeroProfileDescription: true
        }
      }
    })

    expect(wrapper.text()).toContain('Software Engineer')
  })

  it('devrait avoir une icône pour le titre', () => {
    const wrapper = mount(ProfileInfo, {
      props: {
        personalInfo: mockPersonalInfo
      },
      global: {
        stubs: {
          HeroProfileMetadata: true,
          HeroProfileEmail: true,
          HeroProfileDescription: true
        }
      }
    })

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('devrait afficher le composant ProfileMetadata', () => {
    const wrapper = mount(ProfileInfo, {
      props: {
        personalInfo: mockPersonalInfo
      },
      global: {
        stubs: {
          HeroProfileMetadata: {
            template: '<div class="metadata-stub"></div>',
            props: ['age', 'location']
          },
          HeroProfileEmail: true,
          HeroProfileDescription: true
        }
      }
    })

    expect(wrapper.find('.metadata-stub').exists()).toBe(true)
  })

  it('devrait afficher le composant ProfileEmail', () => {
    const wrapper = mount(ProfileInfo, {
      props: {
        personalInfo: mockPersonalInfo
      },
      global: {
        stubs: {
          HeroProfileMetadata: true,
          HeroProfileEmail: {
            template: '<div class="email-stub"></div>',
            props: ['email']
          },
          HeroProfileDescription: true
        }
      }
    })

    expect(wrapper.find('.email-stub').exists()).toBe(true)
  })

  it('devrait afficher le composant ProfileDescription', () => {
    const wrapper = mount(ProfileInfo, {
      props: {
        personalInfo: mockPersonalInfo
      },
      global: {
        stubs: {
          HeroProfileMetadata: true,
          HeroProfileEmail: true,
          HeroProfileDescription: {
            template: '<div class="description-stub"></div>',
            props: ['description']
          }
        }
      }
    })

    expect(wrapper.find('.description-stub').exists()).toBe(true)
  })
})
