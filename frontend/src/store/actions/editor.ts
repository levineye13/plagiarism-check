import { SET_LANGUAGE, SET_THEME } from '../action-types';
import { TLanguage, TTheme } from '../../utils/types';

interface ISetTheme {
  readonly type: typeof SET_THEME;
  readonly payload: { theme: TTheme };
}

interface ISetLanguage {
  readonly type: typeof SET_LANGUAGE;
  readonly payload: { language: TLanguage };
}

export type TSelect = ISetTheme | ISetLanguage;

export const setTheme = (theme: TTheme): ISetTheme => ({
  type: SET_THEME,
  payload: { theme },
});

export const setLanguage = (language: TLanguage): ISetLanguage => ({
  type: SET_LANGUAGE,
  payload: { language },
});
