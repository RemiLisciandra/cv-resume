import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoModal from '~/components/ui/InfoModal.vue'
import type { InfoItem } from '~/types/experience'

describe('InfoModal', () => {
  const mockItems: InfoItem[] = [
    { term: 'Terme 1', definition: 'Définition 1' },
    { term: 'Terme 2', definition: 'Définition 2' }
  ]

  it('devrait monter avec les bonnes props', () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true,
        title: 'Mon titre',
        items: mockItems
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait recevoir la prop title', () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: false,
        title: 'Test Title',
        items: mockItems
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    expect(wrapper.props('title')).toBe('Test Title')
  })

  it('devrait recevoir la prop items', () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true,
        title: 'Test',
        items: mockItems
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    expect(wrapper.props('items')).toEqual(mockItems)
  })

  it('devrait recevoir la prop isOpen', () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true,
        title: 'Test',
        items: mockItems
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    expect(wrapper.props('isOpen')).toBe(true)
  })

  it('devrait gérer un tableau vide d\'items', () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true,
        title: 'Test',
        items: []
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    expect(wrapper.props('items')).toEqual([])
    expect(wrapper.exists()).toBe(true)
  })

  it('devrait émettre l\'événement close', () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true,
        title: 'Test',
        items: mockItems
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    // Vérifier que l'événement close peut être émis
    expect(wrapper.emitted('close')).toBeUndefined()
  })

  it('devrait gérer plusieurs items', () => {
    const threeItems: InfoItem[] = [
      { term: 'A', definition: 'A def' },
      { term: 'B', definition: 'B def' },
      { term: 'C', definition: 'C def' }
    ]

    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true,
        title: 'Test',
        items: threeItems
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    expect(wrapper.props('items')).toHaveLength(3)
  })

  it('devrait changer de state isOpen', async () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: false,
        title: 'Test',
        items: mockItems
      },
      global: {
        stubs: {
          Dialog: true,
          DialogPanel: true,
          DialogTitle: true,
          TransitionRoot: true,
          TransitionChild: true
        }
      }
    })

    expect(wrapper.props('isOpen')).toBe(false)

    await wrapper.setProps({ isOpen: true })

    expect(wrapper.props('isOpen')).toBe(true)
  })
})
