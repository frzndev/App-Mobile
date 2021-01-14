'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Equipamento.hasMany(models.EstadoEquipamento);
      Equipamento.belongsTo(models.Requisicao);
    }
  };
  Equipamento.init({
    tipo_equipamento: DataTypes.INTEGER,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Equipamento',
  });
  return Equipamento;
};