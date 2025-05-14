const Kit = require('../models/Kit');
const Tutorial = require('../models/Tutorial');

class KitController {
  async create(req, res) {
  try {
    const { name, description, price, stock, category } = req.body;
    const image = req.file ? req.file.path : null; // récupère le chemin du fichier uploadé

    if (!name || !description || !price || !image) {
      return res.status(400).json({ error: "Nom, description, prix et image sont requis." });
    }

    const kit = await Kit.create({
      name,
      description,
      price,
      stock,
      category,
      image
    });

    res.status(201).json({ message: "Kit créé avec succès", kit });
  } catch (error) {
    res.status(500).json({ error: "Erreur création kit : " + error.message });
  }
}

  async update(req, res) {
    try {
      const kit = await Kit.findByPk(req.params.id);
      if (!kit) return res.status(404).json({ error: "Kit non trouvé." });

      const { name, description, price, stock, category, image } = req.body;

      if (name) kit.name = name;
      if (description) kit.description = description;
      if (price) kit.price = price;
      if (stock !== undefined) kit.stock = stock;
      if (category) kit.category = category;
      if (image) kit.image = image;

      await kit.save();
      res.status(200).json({ message: "Kit mis à jour avec succès", kit });
    } catch (error) {
      res.status(500).json({ error: "Erreur mise à jour : " + error.message });
    }
  }

  async delete(req, res) {
    try {
      const kit = await Kit.findByPk(req.params.id);
      if (!kit) return res.status(404).json({ error: "Kit non trouvé." });

      await kit.destroy();
      res.status(200).json({ message: "Kit supprimé avec succès." });
    } catch (error) {
      res.status(500).json({ error: "Erreur suppression : " + error.message });
    }
  }

async getAll(req, res) {
  try {
    const kits = await Kit.findAll({
      include: {
        model: Tutorial,
        attributes: ['id', 'title', 'video_url', 'description']
      }
    });
    res.status(200).json(kits);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur : " + error.message });
  }
}

  async getById(req, res) {
    try {
      const kit = await Kit.findByPk(req.params.id, {
        include: {
          model: Tutorial, 
          attributes: ['id', 'title', 'video_url', 'description']
        }
      });
  
      if (!kit) return res.status(404).json({ error: "Kit non trouvé." });
  
      res.status(200).json(kit);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur : " + error.message });
    }
  }
}

module.exports = new KitController();
