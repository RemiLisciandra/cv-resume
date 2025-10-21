import type { PersonalInfo, CallToAction } from '~/types/profile'

export const personalInfo: PersonalInfo = {
  fullName: 'Rémi LISCIANDRA',
  title: 'Data Engineer',
  age: 24,
  location: 'Orléans',
  email: 'remi.lisciandra@icloud.com',
  imageUrl: '/me.png',
  imageAlt: 'Rémi Lisciandra',
  description: 'Passionné par la DATA et les architectures logicielles, j\'aime donner du sens aux flux de données.'
}

export const callToActions: CallToAction[] = [
  {
    label: 'Me contacter',
    href: '#contact',
    variant: 'primary'
  },
  {
    label: 'Télécharger mon CV',
    href: '/cv.pdf',
    variant: 'secondary'
  }
]
