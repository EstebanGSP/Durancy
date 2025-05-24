const express = require('express');
const router = express.Router();
const tutorialController = require('../controllers/tutorialController');

// Créer un tutoriel
router.post('/', tutorialController.create);

// Voir tous les tutoriels
router.get('/', tutorialController.getAll);

// Voir un tutoriel à partir de l’ID du kit
router.get('/kit/:kitId', tutorialController.getByKitId);

// Modifier un tutoriel par son ID
router.put('/:id', tutorialController.update);

// Supprimer un tutoriel par son ID
router.delete('/:id', tutorialController.delete);

module.exports = router;
