import {
  Model,
  DataTypes,
  Optional,
  NonAttribute,
  Association,
} from 'sequelize';

import { sequelize } from '../db';
import { IGroup } from '../utils/interfaces';
import UserModel from './user';
import SubjectModel from './subject';

class Group extends Model<IGroup, Optional<IGroup, 'id'>> implements IGroup {
  public id!: number;
  public name!: string;
  public creatorId!: number;
  public addUser!: (user: UserModel) => void;
  public addSubject!: (subject: SubjectModel) => void;

  public subjects?: NonAttribute<SubjectModel[]>;

  public static associations: {
    subjects: Association<Group, SubjectModel>;
  };
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
    creatorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: 'Groups',
  }
);

export default Group;
