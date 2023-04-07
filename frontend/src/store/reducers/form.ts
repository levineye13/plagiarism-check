import type { TForm } from '../actions';
import { CLEAR_FORM, SET_FIELD } from '../action-types';

interface IState {
  [formName: string]: {
    [key: string]: string | number;
  };
}

const initialForm: IState = {
  login: {},
  register: {},
  addAnswer: {},
};

export const formReducer = (state = initialForm, action: TForm) => {
  const { type, payload } = action;
  const { form } = payload;

  switch (type) {
    case SET_FIELD:
      return {
        ...state,
        [form]: {
          ...state[form],
          [payload.key]: payload.value,
        },
      };

    case CLEAR_FORM:
      return {
        ...state,
        [form]: {},
      };

    default:
      break;
  }
};
