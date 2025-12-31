/**
 * Source unique de vérité pour tous les KPIs et statistiques UPJUNOO PRO
 * Modifier ce fichier pour mettre à jour les chiffres sur tout le site
 */

export const kpis = {
  // Couverture géographique
  pays: {
    value: 15,
    suffix: "",
    label: "Pays",
    description: "Dans le monde entier",
  },
  villes: {
    value: 50,
    suffix: "+",
    label: "Villes couvertes",
    description: "Et ça continue",
  },

  // Utilisateurs et activité
  utilisateurs: {
    value: 100000,
    suffix: "+",
    label: "Utilisateurs actifs",
    description: "Font confiance à UPJUNOO PRO",
  },
  telechargements: {
    value: 250000,
    suffix: "+",
    label: "Téléchargements",
    description: "Sur les stores",
  },
  coursesParJour: {
    value: 5000,
    suffix: "+",
    label: "Courses/jour",
    description: "En moyenne",
  },

  // Partenaires
  chauffeurs: {
    value: 500,
    suffix: "+",
    label: "Chauffeurs partenaires",
    description: "Professionnels vérifiés",
  },
  franchises: {
    value: 15,
    suffix: "+",
    label: "Franchises",
    description: "Partenaires locaux",
  },
  partenaires: {
    value: 100,
    suffix: "+",
    label: "Partenaires actifs",
    description: "Entreprises partenaires",
  },

  // Qualité de service
  satisfaction: {
    value: 4.8,
    suffix: "/5",
    label: "Satisfaction",
    description: "Note moyenne sur les stores",
  },
  satisfactionPourcentage: {
    value: 98,
    suffix: "%",
    label: "Satisfaction",
    description: "Clients satisfaits",
  },

  // Location
  vehiculesLocation: {
    value: 100,
    suffix: "+",
    label: "Véhicules disponibles",
    description: "Prêts à louer",
  },
  pointsRetrait: {
    value: 15,
    suffix: "+",
    label: "Points de retrait",
    description: "Dans vos villes",
  },

  // Support
  support: {
    value: "24/7",
    suffix: "",
    label: "Support",
    description: "Disponible à tout moment",
  },
} as const;

// Statuts de deploiement
export type DeploymentStatus = "available" | "launching" | "coming_soon";

export const deploymentStatusLabels: Record<DeploymentStatus, string> = {
  available: "Disponible",
  launching: "En lancement",
  coming_soon: "Bientôt",
};

export const deploymentStatusColors: Record<DeploymentStatus, { bg: string; text: string; dot: string }> = {
  available: { bg: "bg-green-500/10", text: "text-green-600", dot: "bg-green-500" },
  launching: { bg: "bg-amber-500/10", text: "text-amber-600", dot: "bg-amber-500" },
  coming_soon: { bg: "bg-blue-500/10", text: "text-blue-500", dot: "bg-blue-400" },
};

// Donnees regionales pour la carte des implantations (legacy)
export const regionsData = [
  { name: "Afrique de l'Ouest", flag: "🇨🇮", cities: 35, status: "available" as DeploymentStatus, countries: ["Côte d'Ivoire", "Sénégal", "Mali", "Burkina Faso", "Bénin", "Ghana", "Guinée", "Niger", "Togo"] },
  { name: "Afrique Centrale", flag: "🇨🇲", cities: 15, status: "available" as DeploymentStatus, countries: ["Cameroun", "Gabon", "Congo-Brazzaville", "Congo RDC", "Tchad", "Guinée équatoriale"] },
];

// Les 15 pays où UPJUNOO PRO est présent (affichage individuel)
export const countriesData = [
  { name: "Burkina Faso", flag: "🇧🇫", code: "BF" },
  { name: "Bénin", flag: "🇧🇯", code: "BJ" },
  { name: "Congo-Brazzaville", flag: "🇨🇬", code: "CG" },
  { name: "Côte d'Ivoire", flag: "🇨🇮", code: "CI" },
  { name: "Cameroun", flag: "🇨🇲", code: "CM" },
  { name: "Gabon", flag: "🇬🇦", code: "GA" },
  { name: "Ghana", flag: "🇬🇭", code: "GH" },
  { name: "Guinée", flag: "🇬🇳", code: "GN" },
  { name: "Mali", flag: "🇲🇱", code: "ML" },
  { name: "Niger", flag: "🇳🇪", code: "NE" },
  { name: "Congo RDC", flag: "🇨🇩", code: "CD" },
  { name: "Sénégal", flag: "🇸🇳", code: "SN" },
  { name: "Tchad", flag: "🇹🇩", code: "TD" },
  { name: "Togo", flag: "🇹🇬", code: "TG" },
  { name: "Guinée équatoriale", flag: "🇬🇶", code: "GQ" },
];

// Fonction utilitaire pour formater les nombres
export function formatKpiValue(value: number | string, suffix: string = ""): string {
  if (typeof value === "string") return value + suffix;

  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(".0", "") + "M" + suffix;
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(0) + "k" + suffix;
  }
  return value.toString() + suffix;
}

// Export des valeurs formatees pour usage direct
export const formattedKpis = {
  pays: `${kpis.pays.value}${kpis.pays.suffix}`,
  villes: `${kpis.villes.value}${kpis.villes.suffix}`,
  utilisateurs: formatKpiValue(kpis.utilisateurs.value, kpis.utilisateurs.suffix),
  telechargements: formatKpiValue(kpis.telechargements.value, kpis.telechargements.suffix),
  coursesParJour: formatKpiValue(kpis.coursesParJour.value, kpis.coursesParJour.suffix),
  chauffeurs: `${kpis.chauffeurs.value}${kpis.chauffeurs.suffix}`,
  franchises: `${kpis.franchises.value}${kpis.franchises.suffix}`,
  partenaires: `${kpis.partenaires.value}${kpis.partenaires.suffix}`,
  satisfaction: `${kpis.satisfaction.value}${kpis.satisfaction.suffix}`,
  satisfactionPourcentage: `${kpis.satisfactionPourcentage.value}${kpis.satisfactionPourcentage.suffix}`,
  vehiculesLocation: `${kpis.vehiculesLocation.value}${kpis.vehiculesLocation.suffix}`,
  pointsRetrait: `${kpis.pointsRetrait.value}${kpis.pointsRetrait.suffix}`,
  support: kpis.support.value,
} as const;

export type KpiKey = keyof typeof kpis;
export type FormattedKpiKey = keyof typeof formattedKpis;
