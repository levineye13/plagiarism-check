import dotenv from 'dotenv';

dotenv.config();

export const { SECRET_KEY = 'JWT_SECRET_KEY' } = process.env;
