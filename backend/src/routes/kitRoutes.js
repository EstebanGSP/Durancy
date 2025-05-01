const express = require('express');
const router = express.Router();
const KitController = require('../controllers/KitsController');

router.get('/kits', KitController.getAllKits);
router.get('/kits/:id', KitController.getKitById);
router.post('/kits', KitController.createKit);
router.put('/kits/:id', KitController.updateKit);
router.delete('/kits/:id', KitController.deleteKit);

module.exports = router;
