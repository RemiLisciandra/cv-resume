import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ExperienceTimeline from '~/components/features/experience/ExperienceTimeline.vue'

describe('ExperienceTimeline', () => {
  it('devrait monter correctement', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: true,
          TimelineItem: true
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('devrait avoir un SectionTitle', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: {
            template: '<h2 class="section-title-stub"><slot /></h2>'
          },
          TimelineItem: true
        }
      }
    })

    const title = wrapper.find('.section-title-stub')
    expect(title.exists()).toBe(true)
    expect(title.text()).toContain('Mon parcours professionnel')
  })

  it('devrait avoir un espacement vertical', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: true,
          TimelineItem: true
        }
      }
    })

    const container = wrapper.find('.py-8')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('sm:py-16')
  })

  it('devrait avoir un padding horizontal', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: true,
          TimelineItem: true
        }
      }
    })

    const container = wrapper.find('.px-6')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('lg:px-8')
  })

  it('devrait avoir une largeur maximale', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: true,
          TimelineItem: true
        }
      }
    })

    const container = wrapper.find('.max-w-7xl')
    expect(container.exists()).toBe(true)
  })

  it('devrait centrer le contenu', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: true,
          TimelineItem: true
        }
      }
    })

    const container = wrapper.find('.mx-auto')
    expect(container.exists()).toBe(true)
  })

  it('devrait avoir une largeur max pour la timeline', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: true,
          TimelineItem: true
        }
      }
    })

    const timeline = wrapper.find('.max-w-3xl')
    expect(timeline.exists()).toBe(true)
  })

  it('devrait avoir un margin-top sur la timeline', () => {
    const wrapper = mount(ExperienceTimeline, {
      global: {
        stubs: {
          SectionTitle: true,
          TimelineItem: true
        }
      }
    })

    const timeline = wrapper.find('.mt-8')
    expect(timeline.exists()).toBe(true)
    expect(timeline.classes()).toContain('sm:mt-12')
  })
})
