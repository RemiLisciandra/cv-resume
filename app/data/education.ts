import type { Education } from '~/types/education'

/**
 * Liste des formations académiques
 * Présentées de la plus ancienne à la plus récente
 */

export const educations: Education[] = [
  {
    id: 'aftec',
    school: 'AFTEC',
    logo: '/work-study/aftec.png',
    degree: 'BTS Services Informatiques aux Organisations',
    level: 'Bac +2',
    period: '2017 - 2019',
    startDate: '2017-09',
    endDate: '2019-06',
    skills: [
      'Développement d\'applications',
      'Gestion de bases de données',
      'Administration système',
      'Support technique',
      'Gestion de projet'
    ]
  },
  {
    id: 'cesi-bachelor',
    school: 'CESI',
    logo: '/work-study/cesi.jpg',
    degree: 'Bachelor Responsable en Ingénierie des Logiciels',
    level: 'Bac +3',
    period: '2019 - 2021',
    startDate: '2019-09',
    endDate: '2021-09',
    skills: [
      'Architecture logicielle',
      'Développement web et mobile',
      'Méthodologies Agile',
      'Tests et qualité logicielle',
      'DevOps et CI/CD'
    ]
  },
  {
    id: 'cesi-manager',
    school: 'CESI',
    logo: '/work-study/cesi.jpg',
    degree: 'Manager en Architecture Logicielles des SI',
    level: 'Bac +5',
    period: '2022 - 2024',
    startDate: '2022-09',
    endDate: '2024-09',
    skills: [
      'Management d\'équipe',
      'Architecture d\'entreprise',
      'Stratégie IT',
      'Innovation technologique',
      'Transformation digitale'
    ]
  }
]
