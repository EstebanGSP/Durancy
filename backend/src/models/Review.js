const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

class Review extends Model {}

Review.init({
  tutorial_id: { type: DataTypes.BIGINT, allowNull: false },
  user_id: { type: DataTypes.BIGINT, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: true },
  rating: { type: DataTypes.BIGINT, allowNull: false }
}, {
  sequelize,
  modelName: 'Review',
  tableName: 'reviews',
  timestamps: true,
  underscored: true
});

module.exports = Review;
