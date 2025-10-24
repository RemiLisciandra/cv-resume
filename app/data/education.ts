import type { Education } from '~/types/education'

/**
 * Liste des formations académiques
 * Présentées de la plus ancienne à la plus récente
 */

export const educations: Education[] = [
  {
    id: 'aftec-dev',
    school: 'AFTEC',
    logo: '/work-study/aftec.png',
    degree: 'BTS Services Informatiques aux Organisations',
    level: 'Bac +2',
    period: '2017 - 2019',
    startDate: '2017-09',
    endDate: '2019-06',
    skills: [
      'Modélisation des besoins via MERISE',
      'Identifications des besoins via UML',
      'Gestion de projet',
      'Gestion de base de données'
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
      'DevOps et CI/CD',
      'Méthodologies Agile',
      'Sécurité des applications',
      'Tests et qualité logicielle',
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
      'Architecture logicielle',
      'Big Data',
      'Stratégie IT',
      'Transformation digitale'
    ]
  }
]
