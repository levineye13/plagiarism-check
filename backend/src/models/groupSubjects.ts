import { Model, InferAttributes, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class GroupSubject extends Model<InferAttributes<GroupSubject>> {
  declare id: number;
}

GroupSubject.init(
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
    tableName: 'GroupSubjects',
  }
);

export default GroupSubject;
