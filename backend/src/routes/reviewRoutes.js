const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewsController');

router.post('/reviews', ReviewController.createReview);
router.get('/reviews', ReviewController.getAllReviews);
router.delete('/reviews/:id', ReviewController.deleteReview);

module.exports = router;
