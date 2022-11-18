import { Model, InferAttributes, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class UserSubject extends Model<InferAttributes<UserSubject>> {
  declare id: number;
}

UserSubject.init(
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
    tableName: 'UserSubjects',
  }
);

export default UserSubject;
