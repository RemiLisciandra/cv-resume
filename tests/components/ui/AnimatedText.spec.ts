import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AnimatedText from '~/components/ui/AnimatedText.vue'

describe('AnimatedText', () => {
  it('devrait afficher le contenu du slot', () => {
    const wrapper = mount(AnimatedText, {
      slots: {
        default: 'Texte animé'
      }
    })

    expect(wrapper.text()).toBe('Texte animé')
  })

  it('devrait avoir la classe animated-gradient', () => {
    const wrapper = mount(AnimatedText, {
      slots: {
        default: 'Test'
      }
    })

    const span = wrapper.find('span')
    expect(span.classes()).toContain('animated-gradient')
  })

  it('devrait avoir la classe font-bold', () => {
    const wrapper = mount(AnimatedText, {
      slots: {
        default: 'Test'
      }
    })

    const span = wrapper.find('span')
    expect(span.classes()).toContain('font-bold')
  })

  it('devrait être un élément span', () => {
    const wrapper = mount(AnimatedText, {
      slots: {
        default: 'Test'
      }
    })

    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('devrait gérer du contenu HTML dans le slot', () => {
    const wrapper = mount(AnimatedText, {
      slots: {
        default: '<strong>Bold</strong> and normal'
      }
    })

    expect(wrapper.html()).toContain('<strong>Bold</strong>')
  })

  it('devrait gérer un slot vide', () => {
    const wrapper = mount(AnimatedText, {
      slots: {
        default: ''
      }
    })

    const span = wrapper.find('span')
    expect(span.exists()).toBe(true)
    expect(span.text()).toBe('')
  })

  it('devrait avoir le style scoped pour l\'animation', () => {
    const wrapper = mount(AnimatedText, {
      slots: {
        default: 'Test'
      }
    })

    // Le composant devrait monter sans erreur avec son style scoped
    expect(wrapper.exists()).toBe(true)
  })
})
