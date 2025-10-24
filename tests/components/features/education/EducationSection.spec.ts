import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EducationSection from '~/components/features/education/EducationSection.vue'

describe('EducationSection', () => {
  it('devrait monter correctement', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait avoir un SectionTitle', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: {
            template: '<h2 class="section-title-stub"><slot /></h2>'
          },
          EducationCard: true
        }
      }
    })

    const title = wrapper.find('.section-title-stub')
    expect(title.exists()).toBe(true)
    expect(title.text()).toContain('Mon parcours de formation')
  })

  it('devrait avoir une grille de formations', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const grid = wrapper.find('.grid')
    expect(grid.exists()).toBe(true)
  })

  it('devrait avoir une grille responsive', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const grid = wrapper.find('.grid')
    expect(grid.classes()).toContain('grid-cols-1')
    expect(grid.classes()).toContain('lg:grid-cols-3')
  })

  it('devrait avoir un espacement vertical', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const container = wrapper.find('.py-8')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('sm:py-16')
  })

  it('devrait avoir un padding horizontal', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const container = wrapper.find('.px-6')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('lg:px-8')
  })

  it('devrait avoir une largeur maximale', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const container = wrapper.find('.max-w-7xl')
    expect(container.exists()).toBe(true)
  })

  it('devrait centrer le contenu avec mx-auto', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const container = wrapper.find('.mx-auto')
    expect(container.exists()).toBe(true)
  })

  it('devrait avoir un gap dans la grille', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const grid = wrapper.find('.gap-8')
    expect(grid.exists()).toBe(true)
  })

  it('devrait avoir un margin-top sur la grille', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const grid = wrapper.find('.mt-10')
    expect(grid.exists()).toBe(true)
  })

  it('devrait avoir la classe isolate sur la grille', () => {
    const wrapper = mount(EducationSection, {
      global: {
        stubs: {
          SectionTitle: true,
          EducationCard: true
        }
      }
    })

    const grid = wrapper.find('.isolate')
    expect(grid.exists()).toBe(true)
  })
})
