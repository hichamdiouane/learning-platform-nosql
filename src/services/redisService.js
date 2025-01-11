// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Pour gérer efficacement le cache avec Redis, il est important de définir des politiques de gestion de la durée de vie (TTL), de tirer parti des structures de données adaptées (comme les listes, ensembles ou hachages) et d'optimiser les stratégies de remplacement (comme LRU ou LFU) pour minimiser les accès au stockage persistant.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Les bonnes pratiques pour les clés Redis incluent l'utilisation de noms de clés clairs et cohérents, la gestion de la taille des clés pour éviter une surcharge mémoire, l'ajout de préfixes pour éviter les conflits de noms, l'utilisation de TTL appropriés pour limiter la durée de vie des données en cache et la gestion de l'expiration des clés pour éviter l'accumulation de données obsolètes.

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
  }
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
  };