import { Model, InferAttributes, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class UserTask extends Model<InferAttributes<UserTask>> {
  declare id: number;
}

UserTask.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'UserTask',
  }
);

export default UserTask;
