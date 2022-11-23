import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../config';
import { TOKEN_TYPE } from './constants';

export const getPasswordHash = (password: string, salt: number): string => {
  let passwordHash = password;

  (async () => {
    const hash = await bcrypt.hash(password, salt);
    passwordHash = hash;
  })();

  return passwordHash;
};

export const generateToken = (id: number, expiresIn: string | number): string =>
  jwt.sign(`${id}`, SECRET_KEY, { expiresIn });

export const generateKeychain = (
  id: number
): { access: string; refresh: string } => {
  const access = `${TOKEN_TYPE} ${generateToken(id, 1000 * 60 * 20)}`;
  const refresh = generateToken(id, '7d');

  return {
    access,
    refresh,
  };
};
