import {
  Model,
  DataTypes,
  BelongsToSetAssociationMixin,
  Association,
  NonAttribute,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import { sequelize } from '../db';
import { TRole } from '../utils/types';
import { Role } from '../utils/constants';
import Group from './group';

class User extends Model<
  InferAttributes<User, { omit: 'group' }>,
  InferCreationAttributes<User, { omit: 'group' }>
> {
  public id!: CreationOptional<number>;
  public role!: TRole;
  public email!: string;
  public name!: string;
  public password!: string;
  public groupName!: string;

  public setGroup!: BelongsToSetAssociationMixin<Group, number>;

  public group?: NonAttribute<Group>;

  public static associations: {
    group: Association<User, Group>;
  };
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
      defaultValue: Role.User,
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
    groupName: {
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
