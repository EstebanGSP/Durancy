const Cart = require('../models/Cart');
const CartKit = require('../models/CartKit');
const Kit = require('../models/Kit');
const Order = require('../models/Order');
const OrderKit = require('../models/OrderKit');

class CartController {
  // 1️⃣ Ajouter un kit au panier
  async add(req, res) {
    try {
      const user_id = req.user.id;
      const { kit_id, quantity = 1 } = req.body;

      // 🔍 Vérification du kit et du stock
      const kit = await Kit.findByPk(kit_id);
      if (!kit) return res.status(404).json({ error: "Kit introuvable." });
      if (kit.stock < quantity) {
        return res.status(400).json({ error: "Stock insuffisant pour ce kit." });
      }

      let cart = await Cart.findOne({ where: { user_id, status: 'en cours' } });
      if (!cart) cart = await Cart.create({ user_id });

      const [cartKit, created] = await CartKit.findOrCreate({
        where: { cart_id: cart.id, kit_id },
        defaults: { quantity }
      });

      if (!created) {
        if (kit.stock < cartKit.quantity + quantity) {
          return res.status(400).json({ error: "Quantité totale dépassant le stock disponible." });
        }
        cartKit.quantity += quantity;
        await cartKit.save();
      }

      res.status(200).json({ message: "Kit ajouté au panier", cart_id: cart.id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur ajout panier : " + err.message });
    }
  }

  // 2️⃣ Voir son panier
  async view(req, res) {
    try {
      const user_id = req.user.id;
      const cart = await Cart.findOne({
        where: { user_id, status: 'en cours' },
        include: {
          model: Kit,
          through: { attributes: ['quantity'] }
        }
      });

      if (!cart) return res.status(404).json({ error: "Panier introuvable." });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ error: "Erreur lecture panier : " + err.message });
    }
  }

  // 3️⃣ Modifier la quantité d’un kit
  async update(req, res) {
    try {
      const user_id = req.user.id;
      const { kit_id, quantity } = req.body;

      const kit = await Kit.findByPk(kit_id);
      if (!kit) return res.status(404).json({ error: "Kit introuvable." });
      if (kit.stock < quantity) {
        return res.status(400).json({ error: "Stock insuffisant." });
      }

      const cart = await Cart.findOne({ where: { user_id, status: 'en cours' } });
      if (!cart) return res.status(404).json({ error: "Panier introuvable." });

      const cartKit = await CartKit.findOne({ where: { cart_id: cart.id, kit_id } });
      if (!cartKit) return res.status(404).json({ error: "Kit non trouvé dans le panier." });

      cartKit.quantity = quantity;
      await cartKit.save();

      res.status(200).json({ message: "Quantité mise à jour." });
    } catch (err) {
      res.status(500).json({ error: "Erreur modification quantité : " + err.message });
    }
  }

  // 4️⃣ Supprimer un kit du panier
  async remove(req, res) {
    try {
      const user_id = req.user.id;
      const { kit_id } = req.body;

      const cart = await Cart.findOne({ where: { user_id, status: 'en cours' } });
      if (!cart) return res.status(404).json({ error: "Panier introuvable." });

      await CartKit.destroy({ where: { cart_id: cart.id, kit_id } });

      res.status(200).json({ message: "Kit supprimé du panier." });
    } catch (err) {
      res.status(500).json({ error: "Erreur suppression : " + err.message });
    }
  }

  // 5️⃣ Vider le panier
  async clear(req, res) {
    try {
      const user_id = req.user.id;
      const cart = await Cart.findOne({ where: { user_id, status: 'en cours' } });
      if (!cart) return res.status(404).json({ error: "Panier introuvable." });

      await CartKit.destroy({ where: { cart_id: cart.id } });

      res.status(200).json({ message: "Panier vidé." });
    } catch (err) {
      res.status(500).json({ error: "Erreur vidage panier : " + err.message });
    }
  }

  // 6️⃣ Valider le panier → créer une commande
  async validate(req, res) {
    try {
      const user_id = req.user.id;
      const { delivery_fee = 0 } = req.body;

      const cart = await Cart.findOne({
        where: { user_id, status: 'en cours' },
        include: {
          model: Kit,
          through: { attributes: ['quantity'] }
        }
      });

      if (!cart || cart.Kits.length === 0) {
        return res.status(400).json({ error: "Panier vide." });
      }

      let total = 0;
      for (const kit of cart.Kits) {
        total += kit.price * kit.CartKit.quantity;
      }
      total += parseFloat(delivery_fee);

      const order = await Order.create({
        user_id,
        total,
        delivery_fee,
        status: 'payé',
        date_order: new Date()
      });

      for (const kit of cart.Kits) {
        await OrderKit.create({
          order_id: order.id,
          kit_id: kit.id,
          quantity: kit.CartKit.quantity
        });
      }

      await CartKit.destroy({ where: { cart_id: cart.id } });
      cart.status = 'validé';
      await cart.save();

      res.status(201).json({ message: "Commande créée depuis panier", order });
    } catch (err) {
      res.status(500).json({ error: "Erreur validation : " + err.message });
    }
  }
}

module.exports = new CartController();
