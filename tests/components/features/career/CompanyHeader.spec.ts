import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CompanyHeader from '~/components/features/career/CompanyHeader.vue'

describe('CompanyHeader', () => {
  it('devrait afficher la description', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: 'Entreprise leader dans la data'
      },
      global: {
        stubs: {
          DestiaLogo: true
        }
      }
    })

    expect(wrapper.text()).toContain('Entreprise leader dans la data')
  })

  it('devrait avoir un DestiaLogo', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: 'Test description'
      },
      global: {
        stubs: {
          DestiaLogo: {
            template: '<div class="destia-logo-stub"></div>'
          }
        }
      }
    })

    expect(wrapper.find('.destia-logo-stub').exists()).toBe(true)
  })

  it('devrait centrer le logo', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: 'Test'
      },
      global: {
        stubs: {
          DestiaLogo: true
        }
      }
    })

    const logoContainer = wrapper.find('.flex.justify-center')
    expect(logoContainer.exists()).toBe(true)
  })

  it('devrait avoir le texte de description centré', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: 'Test'
      },
      global: {
        stubs: {
          DestiaLogo: true
        }
      }
    })

    const descriptionContainer = wrapper.find('.text-center')
    expect(descriptionContainer.exists()).toBe(true)
  })

  it('devrait avoir les bonnes classes de texte', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: 'Test'
      },
      global: {
        stubs: {
          DestiaLogo: true
        }
      }
    })

    const description = wrapper.find('p')
    expect(description.classes()).toContain('text-lg/8')
    expect(description.classes()).toContain('text-white/80')
  })

  it('devrait gérer une description vide', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: ''
      },
      global: {
        stubs: {
          DestiaLogo: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait avoir une largeur maximale pour le texte', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: 'Test'
      },
      global: {
        stubs: {
          DestiaLogo: true
        }
      }
    })

    const container = wrapper.find('.max-w-2xl')
    expect(container.exists()).toBe(true)
  })

  it('devrait avoir un espacement autour du logo', () => {
    const wrapper = mount(CompanyHeader, {
      props: {
        description: 'Test'
      },
      global: {
        stubs: {
          DestiaLogo: true
        }
      }
    })

    const logoContainer = wrapper.find('.mb-6')
    expect(logoContainer.exists()).toBe(true)
  })
})
