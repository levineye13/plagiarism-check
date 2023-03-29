import type { TModal } from '../actions';
import {
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_SET_AGREE,
  MODAL_SET_QUESTION,
  MODAL_SET_FORM,
} from '../action-types';

interface IModalState {
  isOpen: boolean;
  agree: boolean;
  question: string;
  form: string;
}

const initialState: IModalState = {
  isOpen: false,
  agree: false,
  question: '',
  form: '',
};

export const modalReducer = (
  state = initialState,
  action: TModal
): IModalState => {
  const { type } = action;

  switch (type) {
    case MODAL_OPEN:
      return { ...state, isOpen: true, agree: false };

    case MODAL_CLOSE:
      return { ...state, isOpen: false, question: '' };

    case MODAL_SET_AGREE:
      return { ...state, agree: action.payload.agree };

    case MODAL_SET_QUESTION:
      return { ...state, question: action.payload.question };

    case MODAL_SET_FORM:
      return { ...state, form: action.payload.form };

    default:
      return { isOpen: false, agree: false, question: '', form: '' };
  }
};
