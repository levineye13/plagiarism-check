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
