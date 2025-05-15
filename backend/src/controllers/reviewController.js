const Review = require('../models/Review');
const Tutorial = require('../models/Tutorial');
const User = require('../models/User');

class ReviewController {
  // Créer un avis
  async create(req, res) {
    try {
      const { tutorial_id, content, rating } = req.body;
      const user_id = req.user.id;

      if (!tutorial_id || !rating) {
        return res.status(400).json({ error: "ID du tuto et note obligatoires." });
      }

      // Vérifie que le tuto existe
      const tutorial = await Tutorial.findByPk(tutorial_id);
      if (!tutorial) return res.status(404).json({ error: "Tutoriel introuvable." });

      const review = await Review.create({ tutorial_id, user_id, content, rating });

      res.status(201).json({ message: "Avis ajouté avec succès", review });
    } catch (error) {
      res.status(500).json({ error: "Erreur création avis : " + error.message });
    }
  }

  // Voir les avis d’un tuto
  async getByTutorial(req, res) {
    try {
      const { tutorial_id } = req.params;
      const reviews = await Review.findAll({
        where: { tutorial_id },
        include: { model: User, attributes: ['username', 'role'] },
        order: [['createdAt', 'DESC']]
      });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Erreur récupération avis : " + error.message });
    }
  }

  // Voir tous les avis (admin)
  async getAll(req, res) {
    try {
      const reviews = await Review.findAll({
        include: [
          { model: User, attributes: ['username', 'role'] },
          { model: Tutorial, attributes: ['title'] }
        ],
        order: [['createdAt', 'DESC']]
      });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur : " + error.message });
    }
  }

  // 4Supprimer un avis (admin)
  async delete(req, res) {
    try {
      const { id } = req.params;
      const review = await Review.findByPk(id);
      if (!review) return res.status(404).json({ error: "Avis introuvable." });

      await review.destroy();
      res.status(200).json({ message: "Avis supprimé." });
    } catch (error) {
      res.status(500).json({ error: "Erreur suppression : " + error.message });
    }
  }

  // 5️⃣ Voir les meilleurs avis (optionnel)
  async getBest(req, res) {
    try {
      const reviews = await Review.findAll({
        where: { rating: 5 },
        limit: 5,
        order: [['createdAt', 'DESC']],
        include: { model: User, attributes: ['username'] }
      });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Erreur récupération top avis : " + error.message });
    }
  }
}

module.exports = new ReviewController();
