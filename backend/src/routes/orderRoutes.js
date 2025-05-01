const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrdersController');

router.post('/orders', OrderController.createOrder);
router.get('/orders/:userId', OrderController.getOrdersByUser);
router.get('/orders', OrderController.getAllOrders);
router.delete('/orders/:id', OrderController.deleteOrder); // Suppression par admin

module.exports = router;
