import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CookieOptions } from 'express';

import { SECRET_KEY } from '../config';
import { Token, TOKEN_TYPE } from './constants';
import { TokenType, TRole, TPayload } from './types';

export const getPasswordHash = (password: string, salt: number): string => {
  let passwordHash = password;

  (async () => {
    const hash = await bcrypt.hash(password, salt);
    passwordHash = hash;
  })();

  return passwordHash;
};

export const generateToken = (
  id: number,
  role: TRole,
  expiresIn: string | number
): string => jwt.sign({ id, role }, SECRET_KEY, { expiresIn });

export const generateKeychain = (
  id: number,
  role: TRole
): { access: string; refresh: string } => {
  const access = `${TOKEN_TYPE} ${generateToken(id, role, 1000 * 60 * 20)}`;
  const refresh = generateToken(id, role, '7d');

  return {
    access,
    refresh,
  };
};

export const getCookieOptions = (tokenType: TokenType): CookieOptions => {
  let maxAge;

  if (tokenType === Token.Refresh) {
    maxAge = 1000 * 60 * 60 * 24 * 7;
  } else if (tokenType === Token.Access) {
    maxAge = 1000 * 60 * 20;
  }

  return {
    httpOnly: tokenType === Token.Access ? true : false,
    maxAge,
  };
};

export const extractJWTFromCookie = (cookieValue: string): string =>
  cookieValue.split(' ')[1];

export const checkJWTValidity = (JWToken: string): TPayload | never =>
  <TPayload>jwt.verify(JWToken, SECRET_KEY);
