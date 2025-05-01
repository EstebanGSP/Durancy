const Review = require('../models/Review');

const ReviewsController = {

  // Créer un avis sur un tutoriel
  async createReview(req, res) {
    try {
      const { tutorial_id, user_id, content, rating } = req.body;

      const newReview = await Review.create({
        tutorial_id,
        user_id,
        content,
        rating
      });

      res.status(201).json(newReview);
    } catch (error) {
      console.error("Erreur création avis :", error);
      res.status(500).json({ message: "Erreur lors de la création de l'avis." });
    }
  },

  // Voir tous les avis
  async getAllReviews(req, res) {
    try {
      const reviews = await Review.findAll();
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Erreur récupération avis :", error);
      res.status(500).json({ message: "Erreur lors de la récupération des avis." });
    }
  },

  // Supprimer un avis (admin uniquement ou l'auteur)
  async deleteReview(req, res) {
    try {
      const reviewId = req.params.id;

      const review = await Review.findByPk(reviewId);

      if (!review) {
        return res.status(404).json({ message: "Avis non trouvé." });
      }

      await review.destroy();

      res.status(200).json({ message: "Avis supprimé avec succès." });
    } catch (error) {
      console.error("Erreur suppression avis :", error);
      res.status(500).json({ message: "Erreur lors de la suppression de l'avis." });
    }
  }

};

module.exports = ReviewsController;
