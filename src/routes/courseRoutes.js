// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Séparer les routes dans différents fichiers permet d'améliorer la lisibilité, la maintenabilité et la modularité du code, facilitant ainsi la gestion des fonctionnalités, le test des différentes parties de l'application et la collaboration entre développeurs.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Pour organiser les routes de manière cohérente, il est recommandé de les structurer par fonctionnalité ou ressource (par exemple, utilisateurs, produits), d'utiliser des conventions de nommage claires, d'appliquer des méthodes HTTP appropriées (GET, POST, PUT, DELETE), et de regrouper les routes similaires sous des préfixes ou des groupes pour améliorer la lisibilité et la maintenance.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);
router.get('/stats', courseController.getCourseStats);

module.exports = router;