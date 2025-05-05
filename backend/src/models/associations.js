const Order = require('./Order');
const Kit = require('./Kit');
const OrderKit = require('./OrderKit');
const Cart = require('./Cart');
const CartKit = require('./CartKit'); // ✅ tu l'avais oublié
const User = require('./User');

function setupAssociations() {
  // ✅ Relation Commande - Kit via OrderKit (many-to-many)
  Order.belongsToMany(Kit, { through: OrderKit, foreignKey: 'order_id' });
  Kit.belongsToMany(Order, { through: OrderKit, foreignKey: 'kit_id' });

  // ✅ Relation User - Cart (1:N)
  User.hasMany(Cart, { foreignKey: 'user_id' });
  Cart.belongsTo(User, { foreignKey: 'user_id' });

  // ✅ Relation Cart - Kit via CartKit (many-to-many)
  Cart.belongsToMany(Kit, { through: CartKit, foreignKey: 'cart_id' });
  Kit.belongsToMany(Cart, { through: CartKit, foreignKey: 'kit_id' });

}

module.exports = setupAssociations;
