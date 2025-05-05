const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); // si ton fichier est bien en minuscule
const { verifyToken } = require('../middlewares/auth');

// Routes panier
router.post('/panier/ajouter', verifyToken, cartController.add);
router.get('/panier', verifyToken, cartController.view);
router.put('/panier/modifier', verifyToken, cartController.update);
router.delete('/panier/supprimer', verifyToken, cartController.remove);
router.delete('/panier/vider', verifyToken, cartController.clear);
router.post('/panier/valider', verifyToken, cartController.validate);

module.exports = router;
