import { Model, InferAttributes, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class Subject extends Model<InferAttributes<Subject>> {
  declare id: number;
  declare name: string;
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
  },
  {
    sequelize,
    tableName: 'Subjects',
  }
);

export default Subject;
