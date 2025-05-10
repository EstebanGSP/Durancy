// src/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');
const { verifyToken, isAdmin } = require('../middlewares/auth');

// Voir les avis d’un tuto
router.get('/tutorial/:tutorial_id', ReviewController.getByTutorial);

// Poster un avis (client ou partenaire connecté)
router.post('/', verifyToken, ReviewController.create);

// Voir tous les avis (admin)
router.get('/', verifyToken, isAdmin, ReviewController.getAll);

// Supprimer un avis (admin)
router.delete('/:id', verifyToken, isAdmin, ReviewController.delete);

// Voir les meilleurs avis (public ou admin)
router.get('/top/best', ReviewController.getBest);

module.exports = router;
