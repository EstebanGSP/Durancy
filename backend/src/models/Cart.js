const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

const Cart = sequelize.define('Cart', {
  user_id: {
    type: DataTypes.INTEGER, // ✅ même type que User.id
    allowNull: false
  },
  kit_id: {
    type: DataTypes.INTEGER, // ✅ même type que Kit.id
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  tableName: 'carts',
  timestamps: true,
  underscored: true
});

module.exports = Cart;
