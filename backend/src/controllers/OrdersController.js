const Order = require('../models/Order');

const OrdersController = {

  // Créer une nouvelle commande
  async createOrder(req, res) {
    try {
      const { date_order, total, status, delivery_fee, user_id } = req.body;

      const newOrder = await Order.create({
        date_order,
        total,
        status,
        delivery_fee,
        user_id
      });

      res.status(201).json(newOrder);
    } catch (error) {
      console.error('Erreur création commande :', error);
      res.status(500).json({ message: "Erreur lors de la création de la commande." });
    }
  },

  // Récupérer toutes les commandes
  async getAllOrders(req, res) {
    try {
      const orders = await Order.findAll();
      res.status(200).json(orders);
    } catch (error) {
      console.error('Erreur récupération commandes :', error);
      res.status(500).json({ message: "Erreur lors de la récupération des commandes." });
    }
  },

  // Modifier le statut d'une commande
  async updateOrderStatus(req, res) {
    try {
      const orderId = req.params.id;
      const { status } = req.body;

      const order = await Order.findByPk(orderId);

      if (!order) {
        return res.status(404).json({ message: "Commande non trouvée." });
      }

      await order.update({ status });

      res.status(200).json({ message: "Statut de la commande mis à jour.", order });
    } catch (error) {
      console.error("Erreur mise à jour statut commande :", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour de la commande." });
    }
  }

};

module.exports = OrdersController;
