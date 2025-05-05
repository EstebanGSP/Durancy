// models/CartKit.js
const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB'); 

class CartKit extends Model {}

CartKit.init({
  cart_id: { type: DataTypes.INTEGER, allowNull: false },
  kit_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
}, { sequelize, modelName: 'CartKit' });

module.exports = CartKit;
