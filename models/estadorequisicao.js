'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoRequisicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EstadoRequisicao.belongsTo(models.Requisicao);
    }
  };
  EstadoRequisicao.init({
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstadoRequisicao',
  });
  return EstadoRequisicao;
};