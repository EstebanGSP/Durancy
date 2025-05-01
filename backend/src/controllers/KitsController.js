const Kit = require('../models/Kit');

const KitsController = {

  // Créer un nouveau kit
  async createKit(req, res) {
    try {
      const { name, description, price, stock, category } = req.body;

      const newKit = await Kit.create({
        name,
        description,
        price,
        stock,
        category
      });

      res.status(201).json(newKit);
    } catch (error) {
      console.error('Erreur lors de la création du kit :', error);
      res.status(500).json({ message: "Erreur lors de la création du kit." });
    }
  },

  // Récupérer tous les kits
  async getAllKits(req, res) {
    try {
      const kits = await Kit.findAll();
      res.status(200).json(kits);
    } catch (error) {
      console.error('Erreur lors de la récupération des kits :', error);
      res.status(500).json({ message: "Erreur lors de la récupération des kits." });
    }
  },

  // Modifier un kit
  async updateKit(req, res) {
    try {
      const kitId = req.params.id;
      const updatedData = req.body;

      const kit = await Kit.findByPk(kitId);

      if (!kit) {
        return res.status(404).json({ message: "Kit non trouvé." });
      }

      await kit.update(updatedData);

      res.status(200).json({ message: "Kit mis à jour avec succès.", kit });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du kit :", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour du kit." });
    }
  }

};

module.exports = KitsController;
