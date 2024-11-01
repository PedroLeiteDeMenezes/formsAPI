import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addColumn('users', 'permissions', {
      type: DataTypes.JSON, 
      allowNull: true,      
      defaultValue: {}      
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeColumn('users', 'permissions');
  }
};
