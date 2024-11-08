import { Model, DataTypes, Sequelize } from 'sequelize';
import { IUser } from '../interface/IUser';
import bcryptjs from 'bcryptjs'
import { iUserPermissions } from '../interface/Ipermissions';
import { Models } from '../types/models';

class User extends Model<IUser> implements IUser {
  public id!: number 
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password_hash!: string;
  public password?: string;
  public permissions!: iUserPermissions ;

  static associate(models: Models): void {
    this.hasMany(models.Study, {
      foreignKey: 'user_id',
      as: 'study_sessions'
    })
  }

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
        },
        password: {
          type: DataTypes.VIRTUAL,
          validate: {
            len: [6, 50]
          },
        },
        permissions: {
          type: DataTypes.JSON, 
          allowNull: false,
          defaultValue: {
            general: {canDeleteUsers:false, canEditUsers: false},
            self:{canDeleteOwnAccount: true, canEditOwnAccount: true}
          },
          get() {
            const rawValue = this.getDataValue('permissions');
            return typeof rawValue === 'string' ? JSON.parse(rawValue) : rawValue
          },
          set(value : iUserPermissions){
            this.setDataValue('permissions', value)
          }
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
    this.addHook('beforeSave', async (user: User) => {
        if(user.password){
          user.password_hash = await bcryptjs.hash(user.password, 10)
        }
    })
    return this;
  }

  passwordIsValid(password : string): Promise<boolean>{
    return bcryptjs.compare(password, this.password_hash)
  }
}

export default User;
