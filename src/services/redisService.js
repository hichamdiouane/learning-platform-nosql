// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Pour gérer efficacement le cache avec Redis, il est important de définir des politiques de gestion de la durée de vie (TTL), de tirer parti des structures de données adaptées (comme les listes, ensembles ou hachages) et d'optimiser les stratégies de remplacement (comme LRU ou LFU) pour minimiser les accès au stockage persistant.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Les bonnes pratiques pour les clés Redis incluent l'utilisation de noms de clés clairs et cohérents, la gestion de la taille des clés pour éviter une surcharge mémoire, l'ajout de préfixes pour éviter les conflits de noms, l'utilisation de TTL appropriés pour limiter la durée de vie des données en cache et la gestion de l'expiration des clés pour éviter l'accumulation de données obsolètes.

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
    const redisClient = await redisdb.connectRedis();
    try {
      await redisClient.set(key, JSON.stringify(data), { EX: ttl });
  
    } catch (error) {
      console.error("Error caching data:", error);
    }
}

async function getCachedData(key) {
  // get cash data implemenatation
  const redisClient = await redisdb.connectRedis();
  try {
    const data = await redisClient.get(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error("Error getting cached data:", error);
    return null;
  }

}
  
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  cacheData,
  getCachedData
};