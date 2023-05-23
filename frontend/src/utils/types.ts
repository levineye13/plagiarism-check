import { FC, PropsWithChildren } from 'react';

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>;

export type TLanguage =
  | 'javascript'
  | 'python'
  | 'csharp'
  | 'html'
  | 'css'
  | 'json';

export type TTheme = 'light' | 'vs-dark';

export type TTask = {
  id: number;
  title: string;
  description?: string;
  text: string;
};

export type TAppForm =
  | 'addAnswer'
  | 'addGroup'
  | 'addTask'
  | 'addCourse'
  | 'register'
  | 'login'
  | 'forgotPassword'
  | 'resetPassword';
