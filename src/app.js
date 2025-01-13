// Question: Comment organiser le point d'entrée de l'application ?
// Réponse: Le point d'entrée de l'application doit être clairement défini, généralement dans un fichier principal (comme `main.py` ou `index.js`), où les composants essentiels sont initialisés et les routes ou flux de l'application sont définis.
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// Reponse: La meilleure façon de gérer le démarrage de l'application est d'utiliser un gestionnaire de configuration ou un fichier d'initialisation centralisé qui charge les paramètres nécessaires, initialise les services et démarre les processus requis de manière ordonnée.

const express = require('express');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');

const app = express();

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux base de donnees
    await db.connectMongo();
    await db.connectRedis();
    // TODO: Configurer les middlewares Express
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // TODO: Monter les routes
    app.use('/api', courseRoutes);

    // TODO: Démarrer le serveur
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
  try {
    await db.closeMongo();
    await db.closeRedis();
    console.log('Server shutting down...');
  } catch (error) {
    console.error('Failed to shutdown server:', error);
  }
});

startServer();