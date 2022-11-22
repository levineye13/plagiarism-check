import { Model, DataTypes, Optional } from 'sequelize';

import { sequelize } from '../db';
import { TRole } from '../utils/types';
import { IUser } from '../utils/interfaces';

class User
  extends Model<IUser, Optional<IUser, 'id' | 'role'>>
  implements IUser
{
  declare id: number;
  declare role: TRole;
  declare email: string;
  declare name: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.ENUM('admin', 'moderator', 'user'),
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
