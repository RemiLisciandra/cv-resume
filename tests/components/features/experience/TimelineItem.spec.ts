import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TimelineItem from '~/components/features/experience/TimelineItem.vue'

describe('TimelineItem', () => {
  const mockProps = {
    company: 'Destia',
    logo: '/destia-logo.png',
    position: 'Data Engineer',
    period: '2023 - Présent',
    contractType: 'CDI',
    isLast: false,
    index: 0
  }

  it('devrait afficher le nom de l\'entreprise', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('Destia')
  })

  it('devrait afficher le poste', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('Data Engineer')
  })

  it('devrait afficher la période', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('2023 - Présent')
  })

  it('devrait afficher le type de contrat dans un Badge', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: {
            template: '<span class="badge-stub"><slot /></span>'
          }
        }
      }
    })

    const badge = wrapper.find('.badge-stub')
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe('CDI')
  })

  it('devrait afficher le CompanyLogo', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: {
            template: '<div class="company-logo-stub"></div>',
            props: ['logo', 'alt', 'size']
          },
          Badge: true
        }
      }
    })

    expect(wrapper.find('.company-logo-stub').exists()).toBe(true)
  })

  it('devrait afficher la ligne verticale si pas dernier élément', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        ...mockProps,
        isLast: false
      },
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const verticalLine = wrapper.find('.bg-gradient-to-b')
    expect(verticalLine.exists()).toBe(true)
  })

  it('ne devrait pas afficher la ligne verticale si dernier élément', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        ...mockProps,
        isLast: true
      },
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const verticalLine = wrapper.find('.bg-gradient-to-b')
    expect(verticalLine.exists()).toBe(false)
  })

  it('devrait avoir un point de connexion', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const dot = wrapper.find('.rounded-full.border-2')
    expect(dot.exists()).toBe(true)
  })

  it('devrait avoir les classes hover', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const card = wrapper.find('.group\\/card')
    expect(card.exists()).toBe(true)
    const html = wrapper.html()
    expect(html).toContain('hover:bg-white/25')
  })

  it('devrait afficher une icône calendrier', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('devrait gérer index par défaut à 0', () => {
    const propsWithoutIndex = { ...mockProps }
    delete (propsWithoutIndex as any).index

    const wrapper = mount(TimelineItem, {
      props: propsWithoutIndex,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait avoir un effet de brillance au hover', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const shine = wrapper.find('.skew-x-12')
    expect(shine.exists()).toBe(true)
  })

  it('devrait avoir les classes de groupe pour les animations', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const container = wrapper.find('.group')
    expect(container.exists()).toBe(true)
  })

  it('devrait avoir un backdrop blur sur la carte', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const card = wrapper.find('.backdrop-blur-md')
    expect(card.exists()).toBe(true)
  })

  it('devrait centrer les éléments du point de connexion', () => {
    const wrapper = mount(TimelineItem, {
      props: mockProps,
      global: {
        stubs: {
          CompanyLogo: true,
          Badge: true
        }
      }
    })

    const dotContainer = wrapper.find('.items-center.justify-center')
    expect(dotContainer.exists()).toBe(true)
  })
})
