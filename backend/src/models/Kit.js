const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

const Kit = sequelize.define('Kit', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'kits',
  timestamps: true // pour createdAt et updatedAt
});

module.exports = Kit;
