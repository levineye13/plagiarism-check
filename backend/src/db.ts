import { Sequelize } from 'sequelize';

export const sequelize: Sequelize = new Sequelize({
  host: '127.0.0.1',
  port: 4000,
  username: 'root',
  password: '12345',
  dialect: 'postgres',
});

export const postgresStart = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
