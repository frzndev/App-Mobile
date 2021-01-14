'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Requisicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Requisicao.belongsTo(models.User);
      Requisicao.hasMany(models.Equipamento);
      Requisicao.hasMany(models.EstadoRequisicao);
    }
  };
  Requisicao.init({
    utilizador_id: DataTypes.INTEGER,
    equipamento_id: DataTypes.INTEGER,
    data_requisicao: DataTypes.DATE,
    data_devolucao: DataTypes.DATE,
    descricao: DataTypes.STRING,
    tempo_necessario: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Requisicao',
  });
  return Requisicao;
};