import type { TForm } from '../actions';
import { CLEAR_FORM, SET_FIELD } from '../action-types';
import { TAppForm } from '../../utils/types';

type IState = {
  [formName in TAppForm]: {
    [key: string]: string | number;
  };
};

const initialForm: IState = {
  login: {},
  register: {},
  addAnswer: {},
  addGroup: {},
  addTask: {},
};

export const formReducer = (state = initialForm, action: TForm) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FIELD:
      return {
        ...state,
        [payload.form]: {
          ...state[payload.form],
          [payload.key]: payload.value,
        },
      };

    case CLEAR_FORM:
      return {
        ...state,
        [payload.form]: {},
      };

    default:
      return state;
  }
};
