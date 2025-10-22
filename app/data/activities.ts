import type { InfoContent } from '~/types/experience'

export interface Activity {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  infoContent?: InfoContent
}

export const activities: Activity[] = [
  {
    id: 'architecture',
    title: 'Architecture logicielle',
    description: 'Conception et mise en œuvre de <span class="font-semibold text-primary-500">flux de données</span> entrants et sortants, développement d\'<span class="font-semibold text-primary-500">API robustes</span>, optimisation des <span class="font-semibold text-primary-500">bases de données</span> et des processus <span class="font-semibold text-primary-500">ETL</span> pour garantir <span class="font-semibold text-primary-500">performance</span> et <span class="font-semibold text-primary-500">scalabilité</span>.',
    icon: 'database',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'bi-epm',
    title: 'BI / EPM',
    description: 'Création de <span class="font-semibold text-primary-500">rapports analytiques</span>, conception de <span class="font-semibold text-primary-500">cubes dimensionnels</span> et développement de <span class="font-semibold text-primary-500">tableaux de bord interactifs</span> pour faciliter la prise de décision stratégique.',
    icon: 'chart',
    gradient: 'from-blue-500 to-cyan-600',
    infoContent: {
      title: 'Qu\'est-ce que la BI et l\'EPM ?',
      items: [
        {
          term: 'BI (Business Intelligence)',
          definition: "Ensemble de solutions permettant de collecter, transformer et visualiser les données afin d'aider les entreprises à prendre des décisions éclairées."
        },
        {
          term: 'EPM (Enterprise Performance Management)',
          definition: "Outils et processus visant à planifier, piloter et analyser la performance globale de l'entreprise pour aligner la stratégie sur les résultats opérationnels."
        }
      ]
    }
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: '<span class="font-semibold text-primary-500">Contrôle qualité</span> des données, analyses approfondies et mise en place de <span class="font-semibold text-primary-500">processus de validation</span> pour assurer l\'<span class="font-semibold text-primary-500">intégrité</span> et la <span class="font-semibold text-primary-500">fiabilité</span> des informations.',
    icon: 'search',
    gradient: 'from-emerald-500 to-teal-600'
  }
]
