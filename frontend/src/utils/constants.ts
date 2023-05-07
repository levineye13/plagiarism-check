import { TAppForm, TLanguage, TTheme } from './types';

export const ROUTES = {
  home: '/',
  profile: '/profile',
  users: '/users',
  user: '/users/:userId',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  subjects: '/subjects',
  subject: '/subjects/:subjectId',
  edit: '/subjects/:name/edit',
  tasks: '/tasks',
  task: '/tasks/:taskId',
  groups: '/groups',
  group: '/groups/:groupId',
  answers: '/answers',
  answer: '/answers/:answerId',
  compareList: '/compare-list',
  compare: '/compare',
  admin: '/admin',
};

export const THEME: {
  [theme in TTheme]: theme;
} = {
  light: 'light',
  'vs-dark': 'vs-dark',
};

export const LANGUAGE: {
  [language in TLanguage]: language;
} = {
  javascript: 'javascript',
  python: 'python',
  csharp: 'csharp',
  html: 'html',
  css: 'css',
  json: 'json',
};

export const formNames: { [formName in TAppForm]: formName } = {
  login: 'login',
  register: 'register',
  addAnswer: 'addAnswer',
  addGroup: 'addGroup',
  addTask: 'addTask',
  forgotPassword: 'forgotPassword',
  resetPassword: 'resetPassword',
};

export enum Fields {
  Email = 'email',
  Login = 'login',
  Group = 'group',
  Password = 'password',
  Confirm = 'confirm',
  Grade = 'grade',
  AddGroup = 'addGroup',
  AddTask = 'addTask',
}
