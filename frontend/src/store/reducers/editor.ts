import { SET_LANGUAGE, SET_THEME } from './../action-types/editor';
import { LANGUAGE, THEME } from '../../utils/constants';
import { TLanguage, TTheme } from '../../utils/types';
import { TSelect } from '../actions';

interface ISelectState {
  readonly theme: TTheme;
  readonly language: TLanguage;
}

const initialState: ISelectState = {
  theme: THEME['vs-dark'],
  language: LANGUAGE.python,
};

export const editorReducer = (
  state = initialState,
  action: TSelect
): ISelectState => {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME:
      return { ...state, theme: payload.theme };

    case SET_LANGUAGE:
      return { ...state, language: payload.language };

    default:
      return state;
  }
};
