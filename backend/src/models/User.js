const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../services/ConnexionDB');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'client',
    validate: {
      isIn: [['client', 'admin', 'partenaire']]
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nb_free_repairs: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
  underscored: true
});

module.exports = User;
