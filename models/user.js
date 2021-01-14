'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Mensagem);
      User.hasMany(models.Requisicao);
    }
  };
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    escola: DataTypes.STRING,
    tipodeutilizador: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};