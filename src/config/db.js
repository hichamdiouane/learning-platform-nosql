// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Créer un module séparé pour les connexions aux bases de données permet de centraliser la gestion des connexions, de faciliter la maintenance, d'améliorer la réutilisabilité du code, et de simplifier les modifications ou les mises à jour liées à la base de données sans affecter le reste de l'application.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : Pour gérer proprement la fermeture des connexions, il est essentiel de s'assurer que les connexions sont fermées dans un bloc `finally` ou à la fin d'un traitement, d'utiliser des gestionnaires de connexions ou des pools de connexions pour automatiser la gestion des ressources, et de vérifier régulièrement la fermeture des connexions dans les environnements de production pour éviter les fuites de ressources.

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  mongoClient = new MongoClient(config.mongodb.uri);
  try {
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("not connected from bd.js");
  }
  // Gérer les erreurs et les retries 
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  const redisClient = redis.createClient();
  try {
    await redisClient.connect({
      host: config.redis, port: config.port
    });
    console.log("data base connected");
  } catch (error) {
    console.log("data base not connected");
  }
  return redisClient;
}

function getdb() {
  if ((!db)) {
    throw new Error("mongodb not found not connected")
  } else {
    return db;
  }
}

// close connections
async function closeMongo() {
  await mongoClient.close();
  console.log("MongoDB connection closed");
}
async function closeRedis() {
  await redisClient.quit();
  console.log("Redis connection closed");
}



// Export des fonctions et clients
module.exports = {
  // TODO: Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  getdb,
  closeMongo,
  closeRedis,
};