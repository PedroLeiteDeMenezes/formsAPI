import { Model, DataTypes, Sequelize } from 'sequelize';
import { ILab } from '../interface/ILab';
import { Models } from '../types/models';

class Lab extends Model<ILab> implements ILab{
  public id?: number;
  public name!: string;
  created_at?: Date;
  updated_at?: Date;

  static associate(models: Models): void {
    this.hasMany(models.Study, {
      foreignKey: 'lab_id',
      as: 'study_sessions'
    })
  }

  static initialize(sequelize: Sequelize){
    Lab.init({
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
    },
    {
      sequelize,
      createdAt: 'created_at', 
      updatedAt: 'updated_at', 
      timestamps: true,
      tableName: 'labs'
    }
  )
  }
}

export default Lab;