// Question: Pourquoi créer des services séparés ?
// Réponse: Créer des services séparés permet de favoriser la modularité, la réutilisabilité, la maintenance facilitée, ainsi qu'une meilleure gestion des dépendances et de l'évolutivité de l'application.

const { ObjectId } = require('mongodb');
const mongodb = require('../config/db');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
  await mongodb.connectMongo();
  const instance = mongodb.getdb();
  const collectionName = instance.collection(collection);
  return await collectionName.findOne({ _id: new ObjectId(id) });
}

async function insertOne(collectionName, document) {
  const dbInstance = mongodb.getdb();
  const collection = dbInstance.collection(collectionName);
  return await collection.insertOne(document);
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
  insertOne
};