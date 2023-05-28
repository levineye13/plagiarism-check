import {
  Model,
  DataTypes,
  Optional,
  NonAttribute,
  Association,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasManyAddAssociationMixin,
} from 'sequelize';

import { sequelize } from '../db';
import { ITask } from '../utils/interfaces';
import Answer from './answer';

class Task extends Model<
  InferAttributes<Task, { omit: 'answers' }>,
  InferCreationAttributes<Task, { omit: 'answers' }>
> {
  public id!: CreationOptional<number>;
  public description!: string;
  public text!: string;
  public language!: string;
  public creatorId!: number;

  public addAnswer!: HasManyAddAssociationMixin<Answer, number>;

  public answers?: NonAttribute<Answer[]>;

  public static associations: {
    answers: Association<Task, Answer>;
  };
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
      unique: true,
    },
    text: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
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
