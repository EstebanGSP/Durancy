const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

class OrderKit extends Model {}

OrderKit.init({
  order_id: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
  kit_id: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
  quantity: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 1 }
}, {
  sequelize,
  modelName: 'OrderKit',
  tableName: 'order_kits',
  timestamps: true,
  underscored: true
});

module.exports = OrderKit;
