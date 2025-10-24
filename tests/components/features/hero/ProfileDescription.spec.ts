import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileDescription from '~/components/features/hero/ProfileDescription.vue'

describe('ProfileDescription', () => {
  it('devrait afficher la description avec DATA animé', () => {
    const wrapper = mount(ProfileDescription, {
      props: {
        description: 'Passionné par la DATA et les technologies'
      },
      global: {
        stubs: {
          AnimatedText: {
            template: '<span class="animated-stub"><slot /></span>'
          }
        }
      }
    })

    expect(wrapper.text()).toContain('Passionné par la')
    expect(wrapper.text()).toContain('et les technologies')
  })

  it('devrait isoler le mot DATA dans AnimatedText', () => {
    const wrapper = mount(ProfileDescription, {
      props: {
        description: 'Expert DATA scientist'
      },
      global: {
        stubs: {
          AnimatedText: {
            template: '<span class="animated-stub"><slot /></span>'
          }
        }
      }
    })

    const animated = wrapper.find('.animated-stub')
    expect(animated.exists()).toBe(true)
    expect(animated.text()).toBe('DATA')
  })

  it('devrait gérer une description sans DATA', () => {
    const wrapper = mount(ProfileDescription, {
      props: {
        description: 'Développeur passionné'
      },
      global: {
        stubs: {
          AnimatedText: true
        }
      }
    })

    expect(wrapper.text()).toContain('Développeur passionné')
  })

  it('devrait avoir les bonnes classes de texte', () => {
    const wrapper = mount(ProfileDescription, {
      props: {
        description: 'Test DATA description'
      },
      global: {
        stubs: {
          AnimatedText: true
        }
      }
    })

    const paragraph = wrapper.find('p')
    expect(paragraph.classes()).toContain('text-gray-300')
  })
})
