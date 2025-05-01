const express = require('express');
const router = express.Router();
const FaqController = require('../controllers/FaqController');

router.get('/faq', FaqController.getAllFaq);
router.post('/faq', FaqController.createFaq);
router.put('/faq/:id', FaqController.updateFaq);
router.delete('/faq/:id', FaqController.deleteFaq);

module.exports = router;
