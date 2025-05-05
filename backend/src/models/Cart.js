const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB'); 

class Cart extends Model {}

Cart.init({
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'en cours' }, // ou "validé"
}, { sequelize, modelName: 'Cart' });

module.exports = Cart;
