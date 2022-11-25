export const TOKEN_TYPE = 'Bearer';

export enum Token {
  Access = 'access',
  Refresh = 'refresh',
}

export enum Path {
  users = '/users',
  user = '/users/:id',
  signin = '/signin',
  signup = '/signup',
  me = '/users/me',
}
