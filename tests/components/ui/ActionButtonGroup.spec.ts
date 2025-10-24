import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ActionButtonGroup from '~/components/ui/ActionButtonGroup.vue'
import type { CallToAction } from '~/types/profile'

describe('ActionButtonGroup', () => {
  const mockActions: CallToAction[] = [
    {
      label: 'Contact',
      href: 'mailto:test@example.com',
      variant: 'primary'
    },
    {
      label: 'Download CV',
      href: '/cv.pdf',
      variant: 'secondary'
    }
  ]

  it('devrait afficher le bon nombre de boutons', () => {
    const wrapper = mount(ActionButtonGroup, {
      props: {
        actions: mockActions
      },
      global: {
        stubs: {
          ActionButton: {
            template: '<a>{{ label }}</a>',
            props: ['label', 'href', 'variant']
          }
        }
      }
    })

    expect(wrapper.findAll('a')).toHaveLength(2)
  })

  it('devrait passer les bonnes props aux boutons', () => {
    const wrapper = mount(ActionButtonGroup, {
      props: {
        actions: mockActions
      },
      global: {
        stubs: {
          ActionButton: {
            template: '<a :href="href">{{ label }}</a>',
            props: ['label', 'href', 'variant']
          }
        }
      }
    })

    const buttons = wrapper.findAll('a')
    expect(buttons[0].text()).toBe('Contact')
    expect(buttons[1].text()).toBe('Download CV')
  })

  it('devrait gérer un tableau vide', () => {
    const wrapper = mount(ActionButtonGroup, {
      props: {
        actions: []
      },
      global: {
        stubs: {
          ActionButton: true
        }
      }
    })

    expect(wrapper.findAll('[class*="ActionButton"]')).toHaveLength(0)
  })

  it('devrait avoir les classes de conteneur flex', () => {
    const wrapper = mount(ActionButtonGroup, {
      props: {
        actions: mockActions
      },
      global: {
        stubs: {
          ActionButton: true
        }
      }
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('flex')
    expect(container.classes()).toContain('flex-wrap')
    expect(container.classes()).toContain('gap-4')
  })

  it('devrait utiliser href comme key pour v-for', () => {
    const actionsWithSameLabel: CallToAction[] = [
      { label: 'Link', href: '/link1', variant: 'primary' },
      { label: 'Link', href: '/link2', variant: 'secondary' }
    ]

    const wrapper = mount(ActionButtonGroup, {
      props: {
        actions: actionsWithSameLabel
      },
      global: {
        stubs: {
          ActionButton: {
            template: '<a :href="href">{{ label }}</a>',
            props: ['label', 'href', 'variant']
          }
        }
      }
    })

    const buttons = wrapper.findAll('a')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].attributes('href')).toBe('/link1')
    expect(buttons[1].attributes('href')).toBe('/link2')
  })
})
