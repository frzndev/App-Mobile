'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoEquipamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EstadoEquipamento.belongsTo(models.Equipamento);
    }
  };
  EstadoEquipamento.init({
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstadoEquipamento',
  });
  return EstadoEquipamento;
};