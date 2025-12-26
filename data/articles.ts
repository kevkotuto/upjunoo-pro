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
    title: "Nouvelle franchise a Bouake",
    excerpt:
      "Une nouvelle agence vient d'ouvrir ses portes a Bouake, renforcant notre presence nationale en Cote d'Ivoire.",
    content: `
## UPJUNOO PRO s'implante a Bouake

Nous sommes ravis d'annoncer l'ouverture de notre nouvelle franchise a Bouake, la deuxieme plus grande ville de Cote d'Ivoire. Cette expansion strategique marque une etape importante dans notre mission de rendre la mobilite accessible a tous les Ivoiriens.

### Une presence renforcee en Cote d'Ivoire

Avec cette nouvelle agence, UPJUNOO PRO compte desormais **5 points de presence** en Cote d'Ivoire, couvrant les principales zones urbaines du pays. Notre objectif est d'offrir un service de qualite a tous nos utilisateurs, ou qu'ils se trouvent.

### Des services adaptes aux besoins locaux

Notre equipe locale de Bouake est composee de professionnels formes a nos standards de qualite :

- **Plus de 50 chauffeurs** deja operationnels
- **Service de livraison express** disponible dans toute la ville
- **Location de vehicules** pour les particuliers et entreprises

### Rejoignez-nous !

Si vous souhaitez devenir chauffeur partenaire ou franchiseur dans votre region, n'hesitez pas a nous contacter. Ensemble, construisons la mobilite de demain en Afrique.
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
    title: "Application amelioree pour les franchises",
    excerpt:
      "Decouvrez le nouveau dashboard avec suivi des performances en temps reel, concu grace aux retours de nos partenaires.",
    content: `
## Un nouveau dashboard pour nos franchises

Suite aux retours precieux de nos partenaires franchises, nous avons entierement repense notre application de gestion. Le nouveau dashboard offre une experience plus intuitive et des fonctionnalites avancees pour optimiser vos operations.

### Les nouvelles fonctionnalites

Notre equipe produit a travaille d'arrache-pied pour vous offrir :

- **Suivi en temps reel** des performances de votre flotte
- **Tableaux de bord personnalisables** selon vos besoins
- **Rapports automatises** envoyes chaque semaine
- **Alertes intelligentes** pour anticiper les problemes

### Un design repense

L'interface a ete completement revue pour offrir :

- Navigation simplifiee
- Acces rapide aux KPIs essentiels
- Vue d'ensemble de votre activite en un coup d'oeil
- Mode sombre pour le confort visuel

### Comment mettre a jour ?

La mise a jour est automatique pour tous nos partenaires. Connectez-vous simplement a votre espace franchise pour decouvrir les nouvelles fonctionnalites.

Votre feedback est precieux ! N'hesitez pas a nous faire part de vos suggestions d'amelioration.
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
      "Notre participation au Salon de l'Innovation Urbaine Africaine a Abidjan nous a permis d'echanger avec les acteurs majeurs de la smart city.",
    content: `
## UPJUNOO PRO au coeur de l'innovation urbaine africaine

Du 1er au 3 decembre 2024, nous avons eu le plaisir de participer au Salon de l'Innovation Urbaine Africaine qui s'est tenu a Abidjan. Cet evenement majeur a reuni les principaux acteurs de la transformation digitale des villes africaines.

### Des echanges enrichissants

Notre stand a accueilli plus de **500 visiteurs** curieux de decouvrir nos solutions de mobilite. Les echanges ont ete nombreux et fructueux avec :

- Representants de municipalites
- Entrepreneurs du secteur tech
- Investisseurs
- Utilisateurs de nos services

### Des conferences inspirantes

Notre CEO a eu l'honneur de participer a une table ronde sur le theme "La mobilite durable en Afrique : defis et opportunites". Les discussions ont porte sur :

- L'integration des solutions de mobilite dans les plans d'urbanisme
- Le role de la technologie dans la reduction de l'empreinte carbone
- Les modeles economiques innovants pour la mobilite partagee

### Vers de nouveaux partenariats

Ces trois jours ont ete l'occasion de nouer des contacts prometteurs pour de futurs partenariats. Restez connectes pour les prochaines annonces !
    `,
    category: "Evenement",
    date: "5 Dec 2024",
    readTime: "5 min",
    image: "🎪",
    featured: false,
  },
  {
    id: 4,
    slug: "repenser-mobilite-urbaine-afrique",
    title: "Repenser la mobilite urbaine en Afrique",
    excerpt:
      "Les grandes villes africaines font face a une urbanisation rapide. Comment les nouvelles technologies transforment les transports.",
    content: `
## La mobilite urbaine africaine en pleine mutation

L'Afrique connait une urbanisation sans precedent. D'ici 2050, la population urbaine du continent devrait doubler, passant de 500 millions a plus d'un milliard d'habitants. Face a ce defi colossal, comment repenser la mobilite pour construire des villes plus vivables ?

### Les defis actuels

Les grandes metropoles africaines font face a de nombreux obstacles :

- **Congestion chronique** : Lagos, Nairobi, Le Caire figurent parmi les villes les plus embouteillees au monde
- **Infrastructures insuffisantes** : le reseau routier peine a suivre la croissance demographique
- **Pollution atmospherique** : les transports representent une part importante des emissions de CO2

### Le role de la technologie

Les solutions technologiques apportent des reponses concretes :

- **Applications de covoiturage** : optimisation des trajets et reduction du nombre de vehicules
- **Geolocalisation en temps reel** : meilleure gestion des flottes et des itineraires
- **Paiement mobile** : democratisation de l'acces aux services de transport

### La vision UPJUNOO PRO

Chez UPJUNOO PRO, nous croyons en une mobilite :

- **Accessible** : des tarifs adaptes a tous les budgets
- **Durable** : transition progressive vers des vehicules moins polluants
- **Inclusive** : couvrir les zones periurbaines souvent delaissees

### Conclusion

La transformation de la mobilite urbaine africaine est en marche. En combinant technologie, innovation et comprehension des realites locales, nous pouvons construire ensemble les villes de demain.
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
      "UPJUNOO PRO s'associe a Orange Money pour faciliter les paiements mobiles dans toute la region.",
    content: `
## UPJUNOO PRO x Orange Money : une alliance strategique

Nous sommes fiers d'annoncer notre partenariat avec Orange Money, le leader du paiement mobile en Afrique de l'Ouest. Cette collaboration vise a simplifier l'experience de paiement pour tous nos utilisateurs.

### Les avantages pour nos utilisateurs

Ce partenariat apporte de nombreux benefices :

- **Paiement simplifie** : payez vos courses directement depuis votre compte Orange Money
- **Pas besoin d'especes** : plus de soucis de monnaie ou de billets
- **Securite renforcee** : transactions protegees par les standards Orange
- **Historique detaille** : retrouvez tous vos paiements dans l'application

### Comment ca marche ?

1. Ouvrez l'application UPJUNOO PRO
2. Selectionnez Orange Money comme moyen de paiement
3. Confirmez avec votre code PIN
4. C'est fait !

### Disponibilite

Le paiement Orange Money est disponible des maintenant dans :

- Cote d'Ivoire
- Senegal
- Mali
- Burkina Faso

D'autres pays seront ajoutes progressivement.

### L'avenir du paiement mobile

Ce partenariat s'inscrit dans notre vision d'une mobilite accessible a tous. En facilitant le paiement, nous levons une barriere importante a l'adoption de nos services.
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

Grande nouvelle pour tous nos utilisateurs : le service de livraison express est officiellement lance ! Envoyez vos colis en moins d'une heure dans les principales villes couvertes par notre reseau.

### Un service adapte a vos besoins

Notre offre de livraison se decline en plusieurs formules :

- **Express** : livraison en moins d'1 heure (disponible dans les grandes villes)
- **Standard** : livraison dans la journee
- **Planifiee** : choisissez votre creneau de livraison

### Comment utiliser le service ?

L'envoi d'un colis n'a jamais ete aussi simple :

1. Ouvrez l'application UPJUNOO PRO
2. Selectionnez "Livraison"
3. Indiquez les adresses d'enlevement et de livraison
4. Choisissez votre formule
5. Suivez votre colis en temps reel !

### Nos garanties

- **Suivi GPS en temps reel** de votre colis
- **Notification** a chaque etape
- **Photo de preuve** a la livraison
- **Assurance** incluse jusqu'a 50 000 FCFA

### Tarification transparente

Le prix est calcule en fonction de :

- La distance
- La taille du colis
- La formule choisie

Vous connaissez le prix avant de confirmer, sans mauvaise surprise !

### Zones desservies

Le service est disponible a :

- Abidjan et sa peripherie
- Bouake
- Yamoussoukro
- San-Pedro

De nouvelles villes seront ajoutees chaque mois.
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
  "Evenement",
  "Partenariat",
  "Analyse",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleById(id: number): Article | undefined {
  return articles.find((article) => article.id === id);
}
