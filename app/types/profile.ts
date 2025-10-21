/**
 * Types pour les données du profil utilisateur
 */

export interface PersonalInfo {
  fullName: string
  title: string
  age: number
  location: string
  email: string
  imageUrl: string
  imageAlt: string
  description: string
}

export interface CallToAction {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}
