import { Model, DataTypes, Optional } from 'sequelize';

import { sequelize } from '../db';
import { IGroup } from '../utils/interfaces';
import UserModel from './user';

class Group extends Model<IGroup, Optional<IGroup, 'id'>> implements IGroup {
  public id!: number;
  public name!: string;
  public addUser!: (user: UserModel) => void;
}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Groups',
  }
);

export default Group;
