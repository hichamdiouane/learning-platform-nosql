// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Valider les variables d'environnement au démarrage est important pour s'assurer que l'application dispose de toutes les configurations nécessaires, prévenir les erreurs de configuration, garantir la sécurité en évitant l'utilisation de valeurs manquantes ou incorrectes, et faciliter le déploiement dans différents environnements.
// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : Si une variable requise est manquante, l'application peut rencontrer des erreurs de configuration, échouer au démarrage, ou se comporter de manière imprévisible, ce qui peut entraîner des problèmes de performance, de sécurité ou de fonctionnalité.

const dotenv = require('dotenv');
dotenv.config();

const requiredEnvVars = [
  'MONGODB_URI',
  'MONGODB_DB_NAME',
  'REDIS_URI'
];

// Validation des variables d'environnement
function validateEnv() {
  // TODO: Implémenter la validation
  // Si une variable manque, lever une erreur explicative
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME
  },
  redis: {
    uri: process.env.REDIS_URI
  },
  port: process.env.PORT || 3000
};