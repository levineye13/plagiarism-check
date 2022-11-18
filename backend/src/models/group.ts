import { Model, InferAttributes, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class Group extends Model<InferAttributes<Group>> {
  declare id: number;
  declare name: string;
}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
