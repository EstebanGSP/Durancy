const Tutorial = require('../models/Tutorial');
const Kit = require('../models/Kit');

class TutorialController {
  // Créer un tutoriel lié à un kit
  async create(req, res) {
    try {
      const { title, video_url, description, kit_id } = req.body;

      // Vérifie que le kit existe
      const kit = await Kit.findByPk(kit_id);
      if (!kit) return res.status(404).json({ error: "Kit non trouvé." });

      const tutorial = await Tutorial.create({ title, video_url, description, kit_id });
      res.status(201).json({ message: "Tutoriel créé avec succès", tutorial });
    } catch (error) {
      res.status(500).json({ error: "Erreur création tutoriel : " + error.message });
    }
  }

  // Voir tous les tutoriels
  async getAll(req, res) {
    try {
      const tutorials = await Tutorial.findAll({
        include: {
          model: Kit,
          attributes: ['id', 'name']
        }
      });
      res.status(200).json(tutorials);
    } catch (error) {
      res.status(500).json({ error: "Erreur récupération tutoriels : " + error.message });
    }
  }

  // Voir un tutoriel à partir de l’ID du kit
  async getByKitId(req, res) {
    try {
      const tutorial = await Tutorial.findOne({
        where: { kit_id: req.params.kitId },
        include: {
          model: Kit,
          as: 'kit',
          attributes: ['id', 'name']
        }
      });

      if (!tutorial) return res.status(404).json({ error: "Tutoriel non trouvé pour ce kit." });

      res.status(200).json(tutorial);
    } catch (error) {
      res.status(500).json({ error: "Erreur récupération : " + error.message });
    }
  }

  // Modifier un tutoriel
  async update(req, res) {
    try {
      const tutorial = await Tutorial.findByPk(req.params.id);
      if (!tutorial) return res.status(404).json({ error: "Tutoriel non trouvé." });

      const { title, video_url, description } = req.body;

      if (title) tutorial.title = title;
      if (video_url) tutorial.video_url = video_url;
      if (description) tutorial.description = description;

      await tutorial.save();
      res.status(200).json({ message: "Tutoriel mis à jour avec succès", tutorial });
    } catch (error) {
      res.status(500).json({ error: "Erreur mise à jour : " + error.message });
    }
  }

  // Supprimer un tutoriel
  async delete(req, res) {
    try {
      const tutorial = await Tutorial.findByPk(req.params.id);
      if (!tutorial) return res.status(404).json({ error: "Tutoriel non trouvé." });

      await tutorial.destroy();
      res.status(200).json({ message: "Tutoriel supprimé avec succès." });
    } catch (error) {
      res.status(500).json({ error: "Erreur suppression : " + error.message });
    }
  }
}

module.exports = new TutorialController();
