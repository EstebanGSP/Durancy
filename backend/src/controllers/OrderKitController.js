const OrderKit = require('../models/OrderKit');

const OrderKitController = {
  async addKitToOrder(req, res) {
    try {
      const { order_id, kit_id, quantity } = req.body;
      const orderKit = await OrderKit.create({ order_id, kit_id, quantity });
      res.status(201).json(orderKit);
    } catch (error) {
      console.error('Erreur ajout kit à la commande :', error);
      res.status(500).json({ message: 'Erreur serveur.' });
    }
  },

  async getKitsByOrder(req, res) {
    try {
      const { orderId } = req.params;
      const kits = await OrderKit.findAll({ where: { order_id: orderId } });
      res.status(200).json(kits);
    } catch (error) {
      console.error('Erreur récupération kits par commande :', error);
      res.status(500).json({ message: 'Erreur serveur.' });
    }
  },

  async removeKitFromOrder(req, res) {
    try {
      const { orderId, kitId } = req.params;
      const deleted = await OrderKit.destroy({
        where: { order_id: orderId, kit_id: kitId }
      });

      if (deleted) {
        res.status(200).json({ message: 'Kit supprimé de la commande.' });
      } else {
        res.status(404).json({ message: 'Kit non trouvé dans la commande.' });
      }
    } catch (error) {
      console.error('Erreur suppression kit commande :', error);
      res.status(500).json({ message: 'Erreur serveur.' });
    }
  }
};

module.exports = OrderKitController;
