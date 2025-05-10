const Order = require('../models/Order');
const OrderKit = require('../models/OrderKit');
const Kit = require('../models/Kit');

const orderController = {
  async create(req, res) {
    try {
      const { kits, delivery_fee = 0 } = req.body;
      const user_id = req.user.id;

      if (!Array.isArray(kits) || kits.length === 0) {
        return res.status(400).json({ error: "Vous devez ajouter au moins un kit à la commande." });
      }

      // 💰 Calcul du total
      let total = 0;
      for (const item of kits) {
        const kit = await Kit.findByPk(item.kit_id);
        if (!kit) return res.status(404).json({ error: `Kit avec ID ${item.kit_id} introuvable.` });
        total += kit.price * (item.quantity || 1);
      }
      total += parseFloat(delivery_fee || 0);

      // 📦 Création de la commande
      const newOrder = await Order.create({
        date_order: new Date(),
        total,
        delivery_fee,
        user_id
      });

      // 🧾 Insertion des kits commandés
      for (const item of kits) {
        await OrderKit.create({
          order_id: newOrder.id,
          kit_id: item.kit_id,
          quantity: item.quantity || 1
        });
      }

      res.status(201).json({ message: "Commande créée avec succès", order: newOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de la commande : " + error.message });
    }
  },
  // Supprimer une commande
  async delete(req, res) {
    try {
      const { id } = req.params;

      const order = await Order.findByPk(id);
      if (!order) return res.status(404).json({ error: "Commande introuvable." });

      // Supprimer d'abord les kits liés (table de liaison)
      await OrderKit.destroy({ where: { order_id: id } });

      // Puis supprimer la commande
      await order.destroy();

      res.status(200).json({ message: "Commande supprimée avec succès." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression : " + error.message });
    }
  },

  // Annuler une commande (changer le statut)
  async cancel(req, res) {
    try {
      const { id } = req.params;

      const order = await Order.findByPk(id);
      if (!order) return res.status(404).json({ error: "Commande introuvable." });

      order.status = 'annulée';
      await order.save();

      res.status(200).json({ message: "Commande annulée avec succès.", order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de l’annulation : " + error.message });
    }
  },
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        include: {
          model: Kit,
          through: { attributes: ['quantity'] }
        },
        order: [['createdAt', 'DESC']]
      });
  
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des commandes : " + error.message });
    }
  },
  async getMyOrders(req, res) {
    try {
      const user_id = req.user.id;
      const { status } = req.query;
  
      const whereClause = { user_id };
      if (status) {
        whereClause.status = status;
      }
  
      const orders = await Order.findAll({
        where: whereClause,
        include: {
          model: Kit,
          through: { attributes: ['quantity'] }
        },
        order: [['createdAt', 'DESC']]
      });
  
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération de vos commandes : " + error.message });
    }
  },
  
  async getByIdSecure(req, res) {
    try {
      const { id } = req.params;
  
      const order = await Order.findByPk(id, {
        include: {
          model: Kit,
          through: { attributes: ['quantity'] }
        }
      });
  
      if (!order) return res.status(404).json({ error: "Commande introuvable." });
  
      // 💡 Vérification des droits
      if (req.user.role !== 'admin' && req.user.id !== order.user_id) {
        return res.status(403).json({ error: "Accès interdit à cette commande." });
      }
  
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération : " + error.message });
    }
  }
  

};

module.exports = orderController;
