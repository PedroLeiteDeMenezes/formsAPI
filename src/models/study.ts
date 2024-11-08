import { Model, DataTypes, Sequelize, } from 'sequelize';
import { Models } from '../types/models';
import { IStudy } from '../interface/IStudy';

class Study extends Model<IStudy> implements IStudy{
  public id?: number;
  public instructor!: string;
  lab_id?: number;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;

  static associate(models: Models): void{
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    this.belongsTo(models.Lab, {
      foreignKey: 'lab_id',
      as: 'lab'
    })
  }

  static initialize(sequelize: Sequelize){
    Study.init({
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
    }, 
    {
      sequelize,
      createdAt: 'created_at', 
      updatedAt: 'updated_at', 
      timestamps: true,
      tableName: 'study_sessions'
    }
  )
  }
}

export default Study