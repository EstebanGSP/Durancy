const Tutorial = require('../models/Tutorial');

const TutorialsController = {

  // Créer un tutoriel
  async createTutorial(req, res) {
    try {
      const { title, video_url, description, kit_id } = req.body;

      const newTutorial = await Tutorial.create({
        title,
        video_url,
        description,
        kit_id
      });

      res.status(201).json(newTutorial);
    } catch (error) {
      console.error("Erreur création tutoriel :", error);
      res.status(500).json({ message: "Erreur lors de la création du tutoriel." });
    }
  },

  // Récupérer tous les tutoriels
  async getAllTutorials(req, res) {
    try {
      const tutorials = await Tutorial.findAll();
      res.status(200).json(tutorials);
    } catch (error) {
      console.error("Erreur récupération tutoriels :", error);
      res.status(500).json({ message: "Erreur lors de la récupération des tutoriels." });
    }
  },

  // Modifier un tutoriel
  async updateTutorial(req, res) {
    try {
      const tutorialId = req.params.id;
      const updatedData = req.body;

      const tutorial = await Tutorial.findByPk(tutorialId);

      if (!tutorial) {
        return res.status(404).json({ message: "Tutoriel non trouvé." });
      }

      await tutorial.update(updatedData);

      res.status(200).json({ message: "Tutoriel mis à jour avec succès.", tutorial });
    } catch (error) {
      console.error("Erreur mise à jour tutoriel :", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour du tutoriel." });
    }
  }

};

module.exports = TutorialsController;
