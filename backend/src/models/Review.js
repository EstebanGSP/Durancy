const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB'); 

const Review = sequelize.define('Review', {
  tutorial_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  rating: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  tableName: 'reviews',
  timestamps: true,
  underscored: true
});

module.exports = Review;
