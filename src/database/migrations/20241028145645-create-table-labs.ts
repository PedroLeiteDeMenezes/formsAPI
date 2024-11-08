import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
 up: async (queryInterface: QueryInterface) => {
   await queryInterface.createTable('labs', {
     id:{
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
       allowNull: false
     },
     name: {
       type: DataTypes.STRING,
       allowNull: false,
       unique: true
     },
     created_at:{
       type: DataTypes.DATE,
       allowNull: false,
       defaultValue: DataTypes.NOW
     },
     updated_at:{
       type: DataTypes.DATE,
       allowNull: false,
       defaultValue: DataTypes.NOW
     }
   })
 },

 down: async (queryInterface: QueryInterface) => {
   await queryInterface.dropTable('labs')
 }
}