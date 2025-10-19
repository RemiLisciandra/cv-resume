import type { PersonalInfo, CallToAction } from '~/types/profile'

/**
 * Composable pour gérer les données du profil
 */
export const useProfileData = () => {
  const getPersonalInfo = (): PersonalInfo => {
    return {
      fullName: 'Rémi LISCIANDRA',
      title: 'Data Engineer',
      age: 24,
      location: 'Orléans',
      email: 'remi.lisciandra@icloud.com',
      imageUrl: '/me.png',
      imageAlt: 'Rémi Lisciandra'
    }
  }

  const getCallToActions = (): CallToAction[] => {
    return [
      {
        label: 'Me contacter',
        href: '#contact',
        variant: 'primary'
      },
      {
        label: '2ème bouton',
        href: '#jsp',
        variant: 'secondary'
      }
    ]
  }

  return {
    getPersonalInfo,
    getCallToActions
  }
}
