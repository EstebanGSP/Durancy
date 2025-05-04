// src/controllers/KitController.js
const Kit = require('../models/Kit');

class KitController {
  async create(req, res) {
    try {
      const { name, description, price } = req.body;
      if (!name || !description || !price) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
      }
      const kit = await Kit.create({ name, description, price });
      res.status(201).json({ message: "Kit créé avec succès", kit });
    } catch (error) {
      res.status(500).json({ error: "Erreur création kit : " + error.message });
    }
  }

  async update(req, res) {
    try {
      const kit = await Kit.findByPk(req.params.id);
      if (!kit) return res.status(404).json({ error: "Kit non trouvé." });
      const { name, description, price } = req.body;
      if (name) kit.name = name;
      if (description) kit.description = description;
      if (price) kit.price = price;
      await kit.save();
      res.json({ message: "Kit mis à jour", kit });
    } catch (error) {
      res.status(500).json({ error: "Erreur mise à jour : " + error.message });
    }
  }

  async delete(req, res) {
    try {
      const kit = await Kit.findByPk(req.params.id);
      if (!kit) return res.status(404).json({ error: "Kit non trouvé." });
      await kit.destroy();
      res.json({ message: "Kit supprimé." });
    } catch (error) {
      res.status(500).json({ error: "Erreur suppression : " + error.message });
    }
  }

  async getAll(req, res) {
    try {
      const kits = await Kit.findAll();
      res.json(kits);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur : " + error.message });
    }
  }

  async getById(req, res) {
    try {
      const kit = await Kit.findByPk(req.params.id);
      if (!kit) return res.status(404).json({ error: "Kit non trouvé." });
      res.json(kit);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur : " + error.message });
    }
  }
}

module.exports = new KitController();
