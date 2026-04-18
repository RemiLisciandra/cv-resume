import type { Experience } from "~/types/experience";

/**
 * Liste des expériences professionnelles
 * Affichées dans la timeline du parcours
 */

export const experiences: Experience[] = [
  {
    id: "destia",
    company: "Destia",
    logo: "/companies/destia.png",
    position: "Data Engineer",
    period: "Juin 2025 - Aujourd'hui",
    contractType: "CDI",
    startDate: "2025-06",
  },
  {
    id: "tx2",
    company: "TX2 Concept",
    logo: "/companies/tx2.png",
    position: "Consultant EDI",
    period: "Octobre 2024 - Juin 2025",
    contractType: "CDI",
    startDate: "2024-10",
    endDate: "2025-06",
  },
  {
    id: "vh",
    company: "Valloire Habitat",
    logo: "/companies/vh.jpg",
    position: "Développeur Full Stack / Responsable Projet",
    period: "Septembre 2021 - Septembre 2024",
    contractType: "Apprentissage",
    startDate: "2021-09",
    endDate: "2024-09",
  },
  {
    id: "labo",
    company: "Lab'O Village by CA",
    logo: "/companies/labo.jpg",
    position: "Développeur Web et Mobile",
    period: "Août 2019 - Septembre 2021",
    contractType: "Apprentissage",
    startDate: "2019-08",
    endDate: "2021-09",
  },
];
