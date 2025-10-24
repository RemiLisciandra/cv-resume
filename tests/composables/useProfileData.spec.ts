import { describe, it, expect } from 'vitest'
import { useProfileData } from '~/composables/useProfileData'
import { personalInfo, callToActions } from '~/data/profile'

describe('useProfileData', () => {
  it('devrait retourner les informations personnelles', () => {
    const { getPersonalInfo } = useProfileData()
    const result = getPersonalInfo()

    expect(result).toBeDefined()
    expect(result).toEqual(personalInfo)
  })

  it('devrait retourner les informations personnelles avec toutes les propriétés requises', () => {
    const { getPersonalInfo } = useProfileData()
    const result = getPersonalInfo()

    expect(result).toHaveProperty('fullName')
    expect(result).toHaveProperty('title')
    expect(result).toHaveProperty('age')
    expect(result).toHaveProperty('location')
    expect(result).toHaveProperty('email')
    expect(result).toHaveProperty('imageUrl')
    expect(result).toHaveProperty('imageAlt')
    expect(result).toHaveProperty('description')
  })

  it('devrait retourner les call to actions', () => {
    const { getCallToActions } = useProfileData()
    const result = getCallToActions()

    expect(result).toBeDefined()
    expect(result).toEqual(callToActions)
    expect(Array.isArray(result)).toBe(true)
  })

  it('devrait retourner au moins un call to action', () => {
    const { getCallToActions } = useProfileData()
    const result = getCallToActions()

    expect(result.length).toBeGreaterThan(0)
  })

  it('chaque call to action devrait avoir les propriétés requises', () => {
    const { getCallToActions } = useProfileData()
    const result = getCallToActions()

    result.forEach(action => {
      expect(action).toHaveProperty('label')
      expect(action).toHaveProperty('href')
      expect(action).toHaveProperty('variant')
      expect(['primary', 'secondary']).toContain(action.variant)
    })
  })

  it('devrait retourner des données immuables', () => {
    const { getPersonalInfo } = useProfileData()
    const result1 = getPersonalInfo()
    const result2 = getPersonalInfo()

    expect(result1).toBe(result2)
  })
})
