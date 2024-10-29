import { Model, DataTypes, Sequelize } from 'sequelize';
import { IUser } from '../interface/IUser';

class User extends Model<IUser> implements IUser {
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password_hash!: string;

  static initialize(sequelize: Sequelize) {
    User.init(
      {
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
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }
}

export default User;
