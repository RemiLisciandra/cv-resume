/**
 * Types pour les expériences professionnelles
 */

export interface InfoItem {
  term: string
  definition: string
}

export interface InfoContent {
  title: string
  items: InfoItem[]
}

export interface Experience {
  id: string
  company: string
  logo: string
  position: string
  period: string
  startDate: string
  endDate?: string
  infoContent?: InfoContent
}
