import {
  Model,
  InferAttributes,
  DataTypes,
  CreationOptional,
  InferCreationAttributes,
  NonAttribute,
  Association,
} from 'sequelize';

import { sequelize } from '../db';
import Task from './task';

class Subject extends Model<
  InferAttributes<Subject, { omit: 'tasks' }>,
  InferCreationAttributes<Subject, { omit: 'tasks' }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare creatorId: number;
  public addTask!: (task: Task) => void;

  public tasks?: NonAttribute<Task[]>;

  public static associations: {
    tasks: Association<Subject, Task>;
  };
}

Subject.init(
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
    creatorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: 'Subjects',
  }
);

export default Subject;
