import { Sequelize } from 'sequelize';

export const sequelize: Sequelize = new Sequelize({
  //database: 'plagiarism_check',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1331',
  dialect: 'postgres',
});

export const postgresStart = async (): Promise<void> => {
  await sequelize.authenticate();
  await sequelize.sync();
};
