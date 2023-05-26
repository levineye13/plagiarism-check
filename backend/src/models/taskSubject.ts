import { Model, InferAttributes, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class TaskSubject extends Model<InferAttributes<TaskSubject>> {
  declare id: number;
}

TaskSubject.init(
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
    tableName: 'TaskSubjects',
  }
);

export default TaskSubject;
