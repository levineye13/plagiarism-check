import type { TForm } from '../actions';
import {
  CLEAR_COURSES_AND_GROUP,
  CLEAR_FORM,
  SET_FIELD,
  SET_FIELD_ERROR,
} from '../action-types';
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
  addTask: { courses: { value: [], error: '' } },
  addCourse: { groups: { value: [], error: '' } },
  forgotPassword: {},
  resetPassword: {},
};

export const formReducer = (state = initialForm, action: TForm) => {
  const { type } = action;

  switch (type) {
    case SET_FIELD: {
      const { form, key, value } = action.payload;

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
      const { form, key, value } = action.payload;

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
        [action.payload.form]: {},
      };

    case CLEAR_COURSES_AND_GROUP:
      return {
        ...state,
        addTask: { courses: { value: [], error: '' } },
        addCourse: { groups: { value: [], error: '' } },
      };

    default:
      return state;
  }
};
