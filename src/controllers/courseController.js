// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Une route définit l'URL et la méthode HTTP associée (GET, POST, etc.) qui déclenche l'exécution d'une action spécifique, tandis qu'un contrôleur contient la logique métier associée à cette action, en traitant les requêtes et en renvoyant les réponses appropriées.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de maintenir un code plus propre, modulaire et réutilisable, de faciliter les tests unitaires, d'améliorer la lisibilité des routes et de rendre l'application plus évolutive et facile à maintenir.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
};