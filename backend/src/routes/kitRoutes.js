const express = require('express');
const router = express.Router();
const KitController = require('../controllers/kitController');
const { verifyToken, isAdmin } = require('../middlewares/auth');
const uploadKitImage = require('../middlewares/uploadKitImage'); 

// utilise uploadKitImage.single('image') pour gérer l'upload de fichier
router.post(
  '/',
  verifyToken,
  isAdmin,
  uploadKitImage.single('image'), 
  KitController.create
);

router.put('/:id', verifyToken, isAdmin, KitController.update);
router.delete('/:id', verifyToken, isAdmin, KitController.delete);
router.get('/', KitController.getAll);
router.get('/:id', KitController.getById);

module.exports = router;
