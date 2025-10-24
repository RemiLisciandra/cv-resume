import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from '~/components/ui/Badge.vue'

describe('Badge', () => {
  it('devrait afficher le contenu du slot', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'CDI'
      }
    })

    expect(wrapper.text()).toBe('CDI')
  })

  it('devrait avoir les classes de base', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Test'
      }
    })

    const badge = wrapper.find('span')
    expect(badge.classes()).toContain('inline-flex')
    expect(badge.classes()).toContain('items-center')
    expect(badge.classes()).toContain('rounded-md')
    expect(badge.classes()).toContain('bg-white/90')
    expect(badge.classes()).toContain('text-primary-600')
  })

  it('devrait appliquer la customClass si fournie', () => {
    const wrapper = mount(Badge, {
      props: {
        customClass: 'my-custom-class'
      },
      slots: {
        default: 'Test'
      }
    })

    const badge = wrapper.find('span')
    expect(badge.classes()).toContain('my-custom-class')
  })

  it('ne devrait pas appliquer customClass si non fournie', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Test'
      }
    })

    const badge = wrapper.find('span')
    expect(badge.attributes('class')).not.toContain('undefined')
  })

  it('devrait avoir les bonnes tailles de texte responsive', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Test'
      }
    })

    const badge = wrapper.find('span')
    const classes = badge.classes().join(' ')
    expect(classes).toContain('text-[10px]')
    expect(classes).toContain('sm:text-xs')
  })

  it('devrait avoir whitespace-nowrap', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Long text that should not wrap'
      }
    })

    const badge = wrapper.find('span')
    expect(badge.classes()).toContain('whitespace-nowrap')
  })

  it('devrait afficher du contenu HTML dans le slot', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: '<strong>Bold</strong> Text'
      }
    })

    expect(wrapper.html()).toContain('<strong>Bold</strong>')
    expect(wrapper.text()).toContain('Bold Text')
  })

  it('devrait avoir une bordure et une ombre', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Test'
      }
    })

    const badge = wrapper.find('span')
    expect(badge.classes()).toContain('border')
    expect(badge.classes()).toContain('border-white')
    expect(badge.classes()).toContain('shadow-sm')
  })
})
