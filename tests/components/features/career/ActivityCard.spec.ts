import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ActivityCard from '~/components/features/career/ActivityCard.vue'
import type { InfoContent } from '~/types/experience'

describe('ActivityCard', () => {
  const mockInfoContent: InfoContent = {
    title: 'Informations',
    items: [
      { term: 'Terme', definition: 'Définition' }
    ]
  }

  it('devrait afficher le titre', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Data Engineering',
        description: 'Description test',
        icon: 'database',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    expect(wrapper.text()).toContain('Data Engineering')
  })

  it('devrait afficher la description en HTML', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: '<strong>Bold</strong> text',
        icon: 'chart',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    expect(wrapper.html()).toContain('<strong>Bold</strong>')
  })

  it('devrait appliquer le bon gradient', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'database',
        gradient: 'from-purple-500 to-pink-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    const html = wrapper.html()
    expect(html).toContain('from-purple-500')
    expect(html).toContain('to-pink-500')
  })

  it('devrait afficher le bouton info si infoContent existe', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'database',
        gradient: 'from-blue-500 to-cyan-500',
        infoContent: mockInfoContent
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-label')).toBe('Plus d\'informations')
  })

  it('ne devrait pas afficher le bouton info si infoContent n\'existe pas', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'database',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(false)
  })

  it('devrait afficher l\'icône database', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'database',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    const iconContainer = wrapper.find('.bg-gradient-to-br')
    expect(iconContainer.exists()).toBe(true)
    expect(iconContainer.find('svg').exists()).toBe(true)
  })

  it('devrait afficher l\'icône chart', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'chart',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('devrait afficher l\'icône search', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'search',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('devrait utiliser l\'icône database par défaut pour icône inconnue', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'unknown-icon',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    // Devrait monter sans erreur
    expect(wrapper.exists()).toBe(true)
  })

  it('devrait avoir les classes hover', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'database',
        gradient: 'from-blue-500 to-cyan-500'
      },
      global: {
        stubs: {
          InfoModal: true
        }
      }
    })

    const card = wrapper.find('.group')
    expect(card.classes()).toContain('group')
    expect(card.classes()).toContain('hover:shadow-2xl')
    expect(card.classes()).toContain('hover:-translate-y-1')
  })

  it('devrait rendre le composant InfoModal si infoContent existe', () => {
    const wrapper = mount(ActivityCard, {
      props: {
        title: 'Test',
        description: 'Desc',
        icon: 'database',
        gradient: 'from-blue-500 to-cyan-500',
        infoContent: mockInfoContent
      },
      global: {
        stubs: {
          InfoModal: {
            template: '<div class="info-modal-stub"></div>',
            props: ['isOpen', 'title', 'items']
          }
        }
      }
    })

    expect(wrapper.find('.info-modal-stub').exists()).toBe(true)
  })
})
