import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CurrentJobSection from '~/components/features/career/CurrentJobSection.vue'

describe('CurrentJobSection', () => {
  it('devrait monter correctement', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait avoir le composant CompanyHeader', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: {
            template: '<div class="company-header-stub"></div>',
            props: ['description']
          },
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    expect(wrapper.find('.company-header-stub').exists()).toBe(true)
  })

  it('devrait avoir un SectionTitle', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: {
            template: '<h2 class="section-title-stub"><slot /></h2>'
          },
          CareerActivityCard: true
        }
      }
    })

    const title = wrapper.find('.section-title-stub')
    expect(title.exists()).toBe(true)
    expect(title.text()).toContain('Mes domaines d\'activité')
  })

  it('devrait avoir une grille responsive', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    const grid = wrapper.find('.grid')
    expect(grid.exists()).toBe(true)
    expect(grid.classes()).toContain('grid-cols-1')
    expect(grid.classes()).toContain('xl:grid-cols-3')
  })

  it('devrait avoir un espacement vertical', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    const container = wrapper.find('.py-8')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('sm:py-16')
  })

  it('devrait avoir un padding horizontal', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    const container = wrapper.find('.px-6')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('lg:px-8')
  })

  it('devrait avoir une largeur maximale', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    const container = wrapper.find('.max-w-7xl')
    expect(container.exists()).toBe(true)
  })

  it('devrait centrer le contenu', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    const container = wrapper.find('.mx-auto')
    expect(container.exists()).toBe(true)
  })

  it('devrait avoir un gap dans la grille', () => {
    const wrapper = mount(CurrentJobSection, {
      global: {
        stubs: {
          CareerCompanyHeader: true,
          SectionTitle: true,
          CareerActivityCard: true
        }
      }
    })

    const grid = wrapper.find('.gap-8')
    expect(grid.exists()).toBe(true)
  })
})
