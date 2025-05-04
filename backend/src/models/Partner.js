const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

const Partner = sequelize.define('Partner', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // correspond à la table Users
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'partners',
  timestamps: true,
  underscored: true
});

module.exports = Partner;
