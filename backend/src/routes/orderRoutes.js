const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { verifyToken, isAdmin } = require('../middlewares/auth');

// Créer une commande (user connecté)
router.post('/', verifyToken, orderController.create);

//  Supprimer une commande (admin uniquement)
router.delete('/:id', verifyToken, isAdmin, orderController.delete);

//  Annuler une commande (admin uniquement)
router.patch('/:id/cancel', verifyToken, isAdmin, orderController.cancel);
//  Voir toutes les commandes (admin uniquement)
router.get('/', verifyToken, isAdmin, orderController.getAll);
// 👤 Voir les commandes de l'utilisateur connecté (client)
router.get('/me', verifyToken, orderController.getMyOrders);

router.get('/:id', verifyToken, orderController.getByIdSecure); 
// Nouvelle route pour mise à jour du statut
router.patch('/:id/status', verifyToken, isAdmin, orderController.updateStatus);
//confirm from le client 
router.patch('/:id/confirm-delivery', verifyToken, orderController.markAsDelivered);






module.exports = router;
