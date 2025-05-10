const Order = require('./Order');
const Kit = require('./Kit');
const OrderKit = require('./OrderKit');
const Cart = require('./Cart');
const CartKit = require('./CartKit');
const User = require('./User');
const Tutorial = require('./Tutorial'); 
const Review = require('./Review');

function setupAssociations() {
  // Commande - Kit (many-to-many)
  Order.belongsToMany(Kit, { through: OrderKit, foreignKey: 'order_id' });
  Kit.belongsToMany(Order, { through: OrderKit, foreignKey: 'kit_id' });

  // User - Cart (1:N)
  User.hasMany(Cart, { foreignKey: 'user_id' });
  Cart.belongsTo(User, { foreignKey: 'user_id' });

  // Cart - Kit (many-to-many)
  Cart.belongsToMany(Kit, { through: CartKit, foreignKey: 'cart_id' });
  Kit.belongsToMany(Cart, { through: CartKit, foreignKey: 'kit_id' });

  // Kit - Tutorial (1:1)
  Kit.hasOne(Tutorial, { foreignKey: 'kit_id' });
  Tutorial.belongsTo(Kit, { foreignKey: 'kit_id' });
 

  // Relation Review → User
  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User, { foreignKey: 'user_id' });

  // Relation Review → Tutorial
  Tutorial.hasMany(Review, { foreignKey: 'tutorial_id' });
  Review.belongsTo(Tutorial, { foreignKey: 'tutorial_id' });
}

module.exports = setupAssociations;
