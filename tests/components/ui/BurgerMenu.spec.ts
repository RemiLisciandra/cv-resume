import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BurgerMenu from '~/components/ui/BurgerMenu.vue'

describe('BurgerMenu', () => {
  it('devrait afficher l\'état hamburger quand isOpen est false', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    // Vérifier que l'état hamburger est visible (v-if="!isOpen")
    const html = wrapper.html()
    expect(html).toContain('gap-[3px]')
  })

  it('devrait afficher l\'état croix quand isOpen est true', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: true
      }
    })

    // Vérifier que l'état croix est visible (v-else)
    const html = wrapper.html()
    expect(html).toContain('rotate-45')
    expect(html).toContain('-rotate-45')
  })

  it('devrait émettre l\'événement toggle au clic', async () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted('toggle')).toBeTruthy()
    expect(wrapper.emitted('toggle')).toHaveLength(1)
  })

  it('devrait avoir un aria-label', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    const button = wrapper.find('button')
    expect(button.attributes('aria-label')).toBe('Toggle menu')
  })

  it('devrait avoir les classes de style du bouton', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('rounded-lg')
    expect(button.classes()).toContain('bg-white/5')
    expect(button.classes()).toContain('hover:bg-white/10')
  })

  it('devrait basculer visuellement entre les états', async () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    // État initial : hamburger
    let hamburgerState = wrapper.find('span span:nth-child(1)')
    expect(hamburgerState.exists()).toBe(true)

    // Changer l'état
    await wrapper.setProps({ isOpen: true })

    // Nouvel état : croix
    let crossState = wrapper.find('span span:nth-child(2)')
    expect(crossState.exists()).toBe(true)
  })

  it('devrait avoir les bonnes dimensions', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('w-9')
    expect(button.classes()).toContain('h-9')
  })

  it('devrait être un bouton de type button', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    const button = wrapper.find('button')
    expect(button.element.tagName).toBe('BUTTON')
  })

  it('les lignes du hamburger devraient avoir la bonne classe de couleur', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: false
      }
    })

    const lines = wrapper.findAll('.bg-white\\/90')
    expect(lines.length).toBeGreaterThan(0)
  })

  it('les lignes de la croix devraient avoir les bonnes rotations', () => {
    const wrapper = mount(BurgerMenu, {
      props: {
        isOpen: true
      }
    })

    const html = wrapper.html()
    expect(html).toContain('rotate-45')
    expect(html).toContain('-rotate-45')
  })
})
