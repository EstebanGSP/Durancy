const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

class Faq extends Model {}

Faq.init({
  user_id: { type: DataTypes.BIGINT, allowNull: false },
  question: { type: DataTypes.TEXT, allowNull: false },
  answer: { type: DataTypes.TEXT, allowNull: true }
}, {
  sequelize,
  modelName: 'Faq',
  tableName: 'faq',
  timestamps: true,
  underscored: true
});

module.exports = Faq;
