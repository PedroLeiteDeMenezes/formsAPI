import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async  (queryInterface: QueryInterface) => {
    await queryInterface.createTable('labs', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING, // ou DataTypes.TEXT se você espera textos longos
        allowNull: false, // ou true, dependendo da sua necessidade
      },
      description: {
        type: DataTypes.TEXT, // ou DataTypes.STRING se o texto não for muito longo
        allowNull: true, // ou false, dependendo se é um campo obrigatório
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Usando o valor padrão do Sequelize
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Usando o valor padrão do Sequelize
      },
    });  
  },

  down: async (queryInterface:QueryInterface) =>  {
    await queryInterface.dropTable('labs');
  }
};
