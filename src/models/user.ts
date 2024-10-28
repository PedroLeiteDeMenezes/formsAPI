import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
import { IUser } from '../interface/IUser';

export type UserCreationAttributes = Optional<IUser, 'id'>;

class User extends Model<IUser, UserCreationAttributes> implements IUser {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password_hash!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
        },
        password_hash: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }
}

export default User;
