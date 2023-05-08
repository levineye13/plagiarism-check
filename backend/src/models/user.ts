import { Model, DataTypes, Optional } from 'sequelize';

import { sequelize } from '../db';
import { TRole } from '../utils/types';
import { IUser } from '../utils/interfaces';
import { Role } from '../utils/constants';

class User
  extends Model<IUser, Optional<IUser, 'id' | 'role'>>
  implements IUser
{
  public id!: number;
  public role!: TRole;
  public email!: string;
  public name!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.ENUM(Role.Admin, Role.Moderator, Role.User),
      defaultValue: 'user',
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Users',
  }
);

export default User;
