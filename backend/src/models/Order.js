const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

const Order = sequelize.define('Order', {
  date_order: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'en_attente'
  },
  delivery_fee: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  tableName: 'orders',
  timestamps: true,
  underscored: true
});

module.exports = Order;
