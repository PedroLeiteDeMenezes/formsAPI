import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async  (queryInterface: QueryInterface) => {
    await queryInterface.createTable('labs', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
