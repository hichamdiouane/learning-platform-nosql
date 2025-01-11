// Question: Pourquoi créer des services séparés ?
// Réponse: Créer des services séparés permet de favoriser la modularité, la réutilisabilité, la maintenance facilitée, ainsi qu'une meilleure gestion des dépendances et de l'évolutivité de l'application.

const { ObjectId } = require('mongodb');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
};