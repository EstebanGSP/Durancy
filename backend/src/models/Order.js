const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

class Order extends Model {}

Order.init({
  date_order: { type: DataTypes.DATEONLY, allowNull: false },
  total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'en_attente' },
  delivery_fee: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
  user_id: { type: DataTypes.BIGINT, allowNull: false }
}, {
  sequelize,
  modelName: 'Order',
  tableName: 'orders',
  timestamps: true,
  underscored: true
});

module.exports = Order;
