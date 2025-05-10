const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

class Tutorial extends Model {}

Tutorial.init({
  title: { type: DataTypes.STRING, allowNull: false },
  video_url: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  kit_id: { type: DataTypes.BIGINT, allowNull: false }
}, {
  sequelize,
  modelName: 'Tutorial',
  tableName: 'tutorials',
  timestamps: true,
  underscored: true
});

module.exports = Tutorial;
