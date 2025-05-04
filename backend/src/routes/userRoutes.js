const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // version orientée objet
const { verifyToken, isAdmin } = require('../middlewares/auth');

// Routes publiques
router.post('/register', userController.register);
router.post('/login', userController.login);

// Routes privées (utilisateur connecté ou admin)
router.get('/me', verifyToken, userController.getMe);
router.put('/me', verifyToken, userController.updateMe);
router.delete('/me', verifyToken, userController.deleteMe);

// Routes admin uniquement
router.get('/', verifyToken, isAdmin, userController.getAll);
router.put('/:id', verifyToken, userController.update);     // modif par admin ou propriétaire
router.delete('/:id', verifyToken, userController.delete);  // suppression par admin ou proprio

module.exports = router;
