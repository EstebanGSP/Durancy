const Faq = require('../models/Faq');

const FaqController = {

  // Voir toutes les questions / réponses de la FAQ
  async getAllFaqs(req, res) {
    try {
      const faqs = await Faq.findAll();
      res.status(200).json(faqs);
    } catch (error) {
      console.error("Erreur récupération FAQ :", error);
      res.status(500).json({ message: "Erreur lors de la récupération de la FAQ." });
    }
  },

  // Poser une question à la FAQ (client)
  async createFaq(req, res) {
    try {
      const { user_id, question } = req.body;

      const newFaq = await Faq.create({
        user_id,
        question
      });

      res.status(201).json(newFaq);
    } catch (error) {
      console.error("Erreur création question FAQ :", error);
      res.status(500).json({ message: "Erreur lors de la création de la question." });
    }
  },

  // Répondre à une question (admin)
  async updateFaq(req, res) {
    try {
      const faqId = req.params.id;
      const { answer } = req.body;

      const faq = await Faq.findByPk(faqId);

      if (!faq) {
        return res.status(404).json({ message: "FAQ non trouvée." });
      }

      await faq.update({ answer });

      res.status(200).json({ message: "Réponse ajoutée avec succès.", faq });
    } catch (error) {
      console.error("Erreur mise à jour FAQ :", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour de la FAQ." });
    }
  },

  // Supprimer une question (admin)
  async deleteFaq(req, res) {
    try {
      const faqId = req.params.id;

      const faq = await Faq.findByPk(faqId);

      if (!faq) {
        return res.status(404).json({ message: "FAQ non trouvée." });
      }

      await faq.destroy();

      res.status(200).json({ message: "FAQ supprimée avec succès." });
    } catch (error) {
      console.error("Erreur suppression FAQ :", error);
      res.status(500).json({ message: "Erreur lors de la suppression de la FAQ." });
    }
  }

};

module.exports = FaqController;
