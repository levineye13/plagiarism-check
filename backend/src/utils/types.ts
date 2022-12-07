import jwt from 'jsonwebtoken';

export type TRole = 'admin' | 'moderator' | 'user';
export type TokenType = 'refresh' | 'access';
export type TPayload = jwt.JwtPayload & { id: number; role: TRole };
