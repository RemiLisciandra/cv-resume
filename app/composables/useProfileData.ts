import type { PersonalInfo, CallToAction } from '~/types/profile'
import { personalInfo, callToActions } from '~/data/profile'

/**
 * Composable pour gérer les données du profil
 * Les données sont centralisées dans ~/data/profile.ts
 */
export const useProfileData = () => {
  const getPersonalInfo = (): PersonalInfo => {
    return personalInfo
  }

  const getCallToActions = (): CallToAction[] => {
    return callToActions
  }

  return {
    getPersonalInfo,
    getCallToActions
  }
}
