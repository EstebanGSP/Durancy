const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

const OrderKit = sequelize.define('OrderKit', {
  order_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  kit_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 1
  }
}, {
  tableName: 'order_kits',
  timestamps: true,
  underscored: true
});

module.exports = OrderKit;
