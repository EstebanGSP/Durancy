const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

class Partner extends Model {}

Partner.init({
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: true },
  latitude: { type: DataTypes.FLOAT, allowNull: true },
  longitude: { type: DataTypes.FLOAT, allowNull: true },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' },
    onDelete: 'CASCADE'
  }
}, {
  sequelize,
  modelName: 'Partner',
  tableName: 'partners',
  timestamps: true,
  underscored: true
});

module.exports = Partner;
