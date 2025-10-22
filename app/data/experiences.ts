import type { Experience } from '~/types/experience'

/**
 * Liste des expériences professionnelles
 * Affichées dans la timeline du parcours
 */

export const experiences: Experience[] = [
  {
    id: 'labo',
    company: 'Laboratoire',
    logo: '/companies/labo.jpg',
    position: 'Stage Data Analyst',
    period: '2020 - 2021',
    startDate: '2020-09',
    endDate: '2021-06'
  },
  {
    id: 'vh',
    company: 'VH Consulting',
    logo: '/companies/vh.jpg',
    position: 'Consultant BI',
    period: '2021 - 2023',
    startDate: '2021-06',
    endDate: '2023-01'
  },
  {
    id: 'tx2',
    company: 'TX2 Concept',
    logo: '/companies/tx2.png',
    position: 'Data Engineer',
    period: '2023 - Aujourd\'hui',
    startDate: '2023-01',
    endDate: undefined
  }
]
