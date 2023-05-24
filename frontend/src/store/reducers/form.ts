import type { TForm } from '../actions';
import { CLEAR_FORM, SET_FIELD, SET_FIELD_ERROR } from '../action-types';
import { TAppForm } from '../../utils/types';

type IState = {
  [formName in TAppForm]: {
    [key: string]: { value: string | string[]; error: string };
  };
};

const initialForm: IState = {
  login: {},
  register: {},
  addAnswer: {},
  addGroup: {},
  addTask: {},
  addCourse: { groups: { value: [], error: '' } },
  forgotPassword: {},
  resetPassword: {},
};

export const formReducer = (state = initialForm, action: TForm) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FIELD: {
      const { form, key, value } = payload;

      return {
        ...state,
        [form]: {
          ...state[form],
          [key]: {
            ...state[form][key],
            value,
          },
        },
      };
    }

    case SET_FIELD_ERROR: {
      const { form, key, value } = payload;

      return {
        ...state,
        [form]: {
          ...state[form],
          [key]: {
            ...state[form][key],
            error: value,
          },
        },
      };
    }

    case CLEAR_FORM:
      return {
        ...state,
        [payload.form]: { errors: {} },
      };

    default:
      return state;
  }
};
