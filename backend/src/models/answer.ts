import {
  Model,
  DataTypes,
  Optional,
  BelongsToSetAssociationMixin,
  Association,
  NonAttribute,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import { sequelize } from '../db';
import TaskModel from './task';

class Answer extends Model<
  InferAttributes<Answer>,
  InferCreationAttributes<Answer>
> {
  public id!: CreationOptional<number>;
  public taskId!: ForeignKey<TaskModel['id']>;
  public name!: string;
  public code!: string;
  public creatorId!: number;

  public setTask!: BelongsToSetAssociationMixin<TaskModel, number>;

  // public task?: NonAttribute<TaskModel>;

  // public static associations: {
  //   task: Association<Answer, TaskModel>;
  // };
}

Answer.init(
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
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Answers',
  }
);

export default Answer;
