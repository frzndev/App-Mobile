'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Requisicaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      utilizador_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      equipamento_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Equipamentos',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      data_requisicao: {
        type: Sequelize.DATE
      },
      data_devolucao: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING
      },
      tempo_necessario: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER,
        references:{
          model: 'EstadoRequisicaos',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Requisicaos');
  }
};