import { SET_LANGUAGE, SET_THEME } from '../action-types';
import { TLanguage, TTheme } from '../../utils/types';
import { LANGUAGE, THEME } from '../../utils/constants';

interface ISetTheme {
  readonly type: typeof SET_THEME;
  readonly payload: { theme: TTheme };
}

interface ISetLanguage {
  readonly type: typeof SET_LANGUAGE;
  readonly payload: { language: TLanguage };
}

export type TSelect = ISetTheme | ISetLanguage;

export const setTheme = (theme: TTheme): TTheme => THEME[theme];

export const setLanguage = (language: TLanguage): TLanguage =>
  LANGUAGE[language];
