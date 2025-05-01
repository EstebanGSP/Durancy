const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB'); 
const Faq = sequelize.define('Faq', {
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'faq',
  timestamps: true,
  underscored: true
});

module.exports = Faq;
