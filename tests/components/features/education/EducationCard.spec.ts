import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EducationCard from '~/components/features/education/EducationCard.vue'

describe('EducationCard', () => {
  const mockProps = {
    school: 'Université Paris',
    logo: '/logo-paris.png',
    degree: 'Master Data Science',
    level: 'BAC+5',
    period: '2020 - 2022',
    skills: ['Python', 'Machine Learning', 'Big Data'],
    index: 0
  }

  it('devrait afficher le nom de l\'école', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('Université Paris')
  })

  it('devrait afficher le diplôme', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('Master Data Science')
  })

  it('devrait afficher la période', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('2020 - 2022')
  })

  it('devrait afficher le badge avec le niveau', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: {
            template: '<span class="badge-stub"><slot /></span>'
          }
        }
      }
    })

    const badge = wrapper.find('.badge-stub')
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe('BAC+5')
  })

  it('devrait afficher le logo de l\'école', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/logo-paris.png')
    expect(img.attributes('alt')).toBe('Université Paris')
  })

  it('devrait afficher toutes les compétences', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('Python')
    expect(wrapper.text()).toContain('Machine Learning')
    expect(wrapper.text()).toContain('Big Data')
  })

  it('devrait afficher le bon nombre de compétences', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const skills = wrapper.findAll('li')
    expect(skills).toHaveLength(3)
  })

  it('devrait afficher "Sujets étudiés"', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    expect(wrapper.text()).toContain('Sujets étudiés')
  })

  it('devrait avoir une icône de check pour chaque compétence', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const checkIcons = wrapper.findAll('svg')
    // Au moins 3 icônes (une par compétence)
    expect(checkIcons.length).toBeGreaterThanOrEqual(3)
  })

  it('devrait avoir les classes hover', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const card = wrapper.find('.group')
    expect(card.classes()).toContain('group')
    expect(card.classes()).toContain('hover:bg-white/25')
  })

  it('devrait avoir un séparateur', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const separator = wrapper.find('.bg-white\\/20')
    expect(separator.exists()).toBe(true)
  })

  it('devrait gérer index par défaut à 0', () => {
    const propsWithoutIndex = { ...mockProps }
    delete (propsWithoutIndex as any).index

    const wrapper = mount(EducationCard, {
      props: propsWithoutIndex,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait avoir le badge en position absolue top-right', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const badgeContainer = wrapper.find('.absolute')
    expect(badgeContainer.exists()).toBe(true)
    expect(badgeContainer.classes()).toContain('top-3')
    expect(badgeContainer.classes()).toContain('right-3')
  })

  it('devrait centrer le nom de l\'école', () => {
    const wrapper = mount(EducationCard, {
      props: mockProps,
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const schoolName = wrapper.find('h3')
    expect(schoolName.classes()).toContain('text-center')
  })

  it('devrait gérer une liste vide de compétences', () => {
    const wrapper = mount(EducationCard, {
      props: {
        ...mockProps,
        skills: []
      },
      global: {
        stubs: {
          Badge: true
        }
      }
    })

    const skills = wrapper.findAll('li')
    expect(skills).toHaveLength(0)
  })
})
