import { Model, DataTypes, Optional } from 'sequelize';

import { sequelize } from '../db';
import { ITask } from '../utils/interfaces';

class Task extends Model<ITask, Optional<ITask, 'id'>> implements ITask {
  public id!: number;
  public description!: string;
  public text!: string;
  public creatorId!: number;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
    },
    creatorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: 'Tasks',
  }
);

export default Task;