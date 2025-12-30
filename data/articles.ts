export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "nouvelle-franchise-bouake",
    title: "Nouvelle franchise à Bouaké",
    excerpt:
      "Une nouvelle agence vient d'ouvrir ses portes à Bouaké, renforçant notre présence nationale en Côte d'Ivoire.",
    content: `
## UPJUNOO PRO s'implante à Bouaké

Nous sommes ravis d'annoncer l'ouverture de notre nouvelle franchise à Bouaké, la deuxième plus grande ville de Côte d'Ivoire. Cette expansion stratégique marque une étape importante dans notre mission de rendre la mobilité accessible à tous les Ivoiriens.

### Une présence renforcée en Côte d'Ivoire

Avec cette nouvelle agence, UPJUNOO PRO compte désormais **5 points de présence** en Côte d'Ivoire, couvrant les principales zones urbaines du pays. Notre objectif est d'offrir un service de qualité à tous nos utilisateurs, où qu'ils se trouvent.

### Des services adaptés aux besoins locaux

Notre équipe locale de Bouaké est composée de professionnels formés à nos standards de qualité :

- **Plus de 50 chauffeurs** déjà opérationnels
- **Service de livraison express** disponible dans toute la ville
- **Location de véhicules** pour les particuliers et entreprises

### Rejoignez-nous !

Si vous souhaitez devenir chauffeur partenaire ou franchiseur dans votre région, n'hésitez pas à nous contacter. Ensemble, construisons la mobilité de demain en Afrique.
    `,
    category: "Expansion",
    date: "15 Dec 2024",
    readTime: "3 min",
    image: "🏢",
    featured: true,
  },
  {
    id: 2,
    slug: "application-amelioree-franchises",
    title: "Application améliorée pour les franchises",
    excerpt:
      "Découvrez le nouveau dashboard avec suivi des performances en temps réel, conçu grâce aux retours de nos partenaires.",
    content: `
## Un nouveau dashboard pour nos franchises

Suite aux retours précieux de nos partenaires franchisés, nous avons entièrement repensé notre application de gestion. Le nouveau dashboard offre une expérience plus intuitive et des fonctionnalités avancées pour optimiser vos opérations.

### Les nouvelles fonctionnalités

Notre équipe produit a travaillé d'arrache-pied pour vous offrir :

- **Suivi en temps réel** des performances de votre flotte
- **Tableaux de bord personnalisables** selon vos besoins
- **Rapports automatisés** envoyés chaque semaine
- **Alertes intelligentes** pour anticiper les problèmes

### Un design repensé

L'interface a été complètement revue pour offrir :

- Navigation simplifiée
- Accès rapide aux KPIs essentiels
- Vue d'ensemble de votre activité en un coup d'oeil
- Mode sombre pour le confort visuel

### Comment mettre à jour ?

La mise à jour est automatique pour tous nos partenaires. Connectez-vous simplement à votre espace franchise pour découvrir les nouvelles fonctionnalités.

Votre feedback est précieux ! N'hésitez pas à nous faire part de vos suggestions d'amélioration.
    `,
    category: "Produit",
    date: "10 Dec 2024",
    readTime: "4 min",
    image: "📱",
    featured: true,
  },
  {
    id: 3,
    slug: "salon-innovation-urbaine",
    title: "UPJUNOO PRO au Salon de l'Innovation Urbaine",
    excerpt:
      "Notre participation au Salon de l'Innovation Urbaine Africaine à Abidjan nous a permis d'échanger avec les acteurs majeurs de la smart city.",
    content: `
## UPJUNOO PRO au coeur de l'innovation urbaine africaine

Du 1er au 3 décembre 2024, nous avons eu le plaisir de participer au Salon de l'Innovation Urbaine Africaine qui s'est tenu à Abidjan. Cet événement majeur a réuni les principaux acteurs de la transformation digitale des villes africaines.

### Des échanges enrichissants

Notre stand a accueilli plus de **500 visiteurs** curieux de découvrir nos solutions de mobilité. Les échanges ont été nombreux et fructueux avec :

- Représentants de municipalités
- Entrepreneurs du secteur tech
- Investisseurs
- Utilisateurs de nos services

### Des conférences inspirantes

Notre CEO a eu l'honneur de participer à une table ronde sur le thème "La mobilité durable en Afrique : défis et opportunités". Les discussions ont porté sur :

- L'intégration des solutions de mobilité dans les plans d'urbanisme
- Le rôle de la technologie dans la réduction de l'empreinte carbone
- Les modèles économiques innovants pour la mobilité partagée

### Vers de nouveaux partenariats

Ces trois jours ont été l'occasion de nouer des contacts prometteurs pour de futurs partenariats. Restez connectés pour les prochaines annonces !
    `,
    category: "Événement",
    date: "5 Dec 2024",
    readTime: "5 min",
    image: "🎪",
    featured: false,
  },
  {
    id: 4,
    slug: "repenser-mobilite-urbaine-afrique",
    title: "Repenser la mobilité urbaine en Afrique",
    excerpt:
      "Les grandes villes africaines font face à une urbanisation rapide. Comment les nouvelles technologies transforment les transports.",
    content: `
## La mobilité urbaine africaine en pleine mutation

L'Afrique connaît une urbanisation sans précédent. D'ici 2050, la population urbaine du continent devrait doubler, passant de 500 millions à plus d'un milliard d'habitants. Face à ce défi colossal, comment repenser la mobilité pour construire des villes plus vivables ?

### Les défis actuels

Les grandes métropoles africaines font face à de nombreux obstacles :

- **Congestion chronique** : Lagos, Nairobi, Le Caire figurent parmi les villes les plus embouteillées au monde
- **Infrastructures insuffisantes** : le réseau routier peine à suivre la croissance démographique
- **Pollution atmosphérique** : les transports représentent une part importante des émissions de CO2

### Le rôle de la technologie

Les solutions technologiques apportent des réponses concrètes :

- **Applications de covoiturage** : optimisation des trajets et réduction du nombre de véhicules
- **Géolocalisation en temps réel** : meilleure gestion des flottes et des itinéraires
- **Paiement mobile** : démocratisation de l'accès aux services de transport

### La vision UPJUNOO PRO

Chez UPJUNOO PRO, nous croyons en une mobilité :

- **Accessible** : des tarifs adaptés à tous les budgets
- **Durable** : transition progressive vers des véhicules moins polluants
- **Inclusive** : couvrir les zones périurbaines souvent délaissées

### Conclusion

La transformation de la mobilité urbaine africaine est en marche. En combinant technologie, innovation et compréhension des réalités locales, nous pouvons construire ensemble les villes de demain.
    `,
    category: "Analyse",
    date: "28 Nov 2024",
    readTime: "7 min",
    image: "🌍",
    featured: false,
  },
  {
    id: 5,
    slug: "partenariat-orange-money",
    title: "Partenariat avec Orange Money",
    excerpt:
      "UPJUNOO PRO s'associe à Orange Money pour faciliter les paiements mobiles dans toute la région.",
    content: `
## UPJUNOO PRO x Orange Money : une alliance stratégique

Nous sommes fiers d'annoncer notre partenariat avec Orange Money, le leader du paiement mobile en Afrique de l'Ouest. Cette collaboration vise à simplifier l'expérience de paiement pour tous nos utilisateurs.

### Les avantages pour nos utilisateurs

Ce partenariat apporte de nombreux bénéfices :

- **Paiement simplifié** : payez vos courses directement depuis votre compte Orange Money
- **Pas besoin d'espèces** : plus de soucis de monnaie ou de billets
- **Sécurité renforcée** : transactions protégées par les standards Orange
- **Historique détaillé** : retrouvez tous vos paiements dans l'application

### Comment ça marche ?

1. Ouvrez l'application UPJUNOO PRO
2. Sélectionnez Orange Money comme moyen de paiement
3. Confirmez avec votre code PIN
4. C'est fait !

### Disponibilité

Le paiement Orange Money est disponible dès maintenant dans :

- Côte d'Ivoire
- Sénégal
- Mali
- Burkina Faso

D'autres pays seront ajoutés progressivement.

### L'avenir du paiement mobile

Ce partenariat s'inscrit dans notre vision d'une mobilité accessible à tous. En facilitant le paiement, nous levons une barrière importante à l'adoption de nos services.
    `,
    category: "Partenariat",
    date: "20 Nov 2024",
    readTime: "3 min",
    image: "🤝",
    featured: false,
  },
  {
    id: 6,
    slug: "lancement-service-livraison-express",
    title: "Lancement du service livraison express",
    excerpt:
      "Notre nouveau service de livraison express permet d'envoyer vos colis en moins d'une heure dans les grandes villes.",
    content: `
## La livraison express arrive chez UPJUNOO PRO !

Grande nouvelle pour tous nos utilisateurs : le service de livraison express est officiellement lancé ! Envoyez vos colis en moins d'une heure dans les principales villes couvertes par notre réseau.

### Un service adapté à vos besoins

Notre offre de livraison se décline en plusieurs formules :

- **Express** : livraison en moins d'1 heure (disponible dans les grandes villes)
- **Standard** : livraison dans la journée
- **Planifiée** : choisissez votre créneau de livraison

### Comment utiliser le service ?

L'envoi d'un colis n'a jamais été aussi simple :

1. Ouvrez l'application UPJUNOO PRO
2. Sélectionnez "Livraison"
3. Indiquez les adresses d'enlèvement et de livraison
4. Choisissez votre formule
5. Suivez votre colis en temps réel !

### Nos garanties

- **Suivi GPS en temps réel** de votre colis
- **Notification** à chaque étape
- **Photo de preuve** à la livraison
- **Assurance** incluse jusqu'à 50 000 FCFA

### Tarification transparente

Le prix est calculé en fonction de :

- La distance
- La taille du colis
- La formule choisie

Vous connaissez le prix avant de confirmer, sans mauvaise surprise !

### Zones desservies

Le service est disponible à :

- Abidjan et sa périphérie
- Bouaké
- Yamoussoukro
- San-Pedro

De nouvelles villes seront ajoutées chaque mois.
    `,
    category: "Produit",
    date: "15 Nov 2024",
    readTime: "4 min",
    image: "📦",
    featured: false,
  },
];

export const categories = [
  "Tous",
  "Expansion",
  "Produit",
  "Événement",
  "Partenariat",
  "Analyse",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleById(id: number): Article | undefined {
  return articles.find((article) => article.id === id);
}
