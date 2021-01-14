'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mensagem.belongsTo(models.User);
    }
  };
  Mensagem.init({
    from: DataTypes.STRING,
    to: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mensagem',
  });
  return Mensagem;
};