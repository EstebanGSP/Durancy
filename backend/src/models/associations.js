const Order = require('./Order');
const Kit = require('./Kit');
const OrderKit = require('./OrderKit');
const Cart = require('./Cart');
const User = require('./User');

function setupAssociations() {
  // ✅ Relation Commande - Kit via OrderKit (many-to-many)
  Order.belongsToMany(Kit, { through: OrderKit, foreignKey: 'order_id' });
  Kit.belongsToMany(Order, { through: OrderKit, foreignKey: 'kit_id' });

  // ✅ Relation Panier (Cart) → Kit + User (many-to-one)
  User.hasMany(Cart, { foreignKey: 'user_id' });
  Cart.belongsTo(User, { foreignKey: 'user_id' });

  Kit.hasMany(Cart, { foreignKey: 'kit_id' });
  Cart.belongsTo(Kit, { foreignKey: 'kit_id' });
}

// ✅ Très important pour que app.js fonctionne :
module.exports = setupAssociations;
