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
  groups = '/groups',
  group = '/groups/:id',
  subjects = '/subjects',
  subject = '/subjects/:id',
  tasks = '/tasks',
  task = 'tasks/:id',
}

export enum Role {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
}

const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000'];

const allowedMethods = 'HEAD,GET,PUT,PATCH,POST,DELETE,OPTIONS';

export const corsConfig = {
  origin: allowedOrigins,
  methods: allowedMethods,
  credentials: true,
};
