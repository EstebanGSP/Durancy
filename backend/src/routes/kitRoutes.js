// src/routes/kitRoutes.js
const express = require('express');
const router = express.Router();
const KitController = require('../controllers/kitController');
const { verifyToken, isAdmin } = require('../middlewares/auth');

router.post('/', verifyToken, isAdmin, KitController.create);
router.put('/:id', verifyToken, isAdmin, KitController.update);
router.delete('/:id', verifyToken, isAdmin, KitController.delete);
router.get('/', KitController.getAll);
router.get('/:id', KitController.getById);

module.exports = router;
