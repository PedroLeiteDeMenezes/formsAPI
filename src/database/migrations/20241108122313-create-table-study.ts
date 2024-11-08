import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
 up: async (queryInterface: QueryInterface) => {
   await queryInterface.createTable('study_sessions', {
     id:{
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
       allowNull: false
     },
     instructor:{
      type: DataTypes.STRING,
      allowNull: false
     },
     lab_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'labs',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
     },
     user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
   await queryInterface.dropTable('study_sessions')
 }
}