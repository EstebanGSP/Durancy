const express = require('express');
const router = express.Router();
const FaqController = require('../controllers/faqController');
const { verifyToken, isAdmin } = require('../middlewares/auth');

// Voir toutes les FAQs (public)
router.get('/', FaqController.getAll);

// Ajouter une nouvelle FAQ (admin uniquement)
router.post('/', verifyToken, isAdmin, FaqController.create);

// Modifier une réponse (admin uniquement)
router.put('/:id', verifyToken, isAdmin, FaqController.update);

// Supprimer une FAQ (admin uniquement)
router.delete('/:id', verifyToken, isAdmin, FaqController.delete);

module.exports = router;
