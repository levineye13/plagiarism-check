import {
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_SET_AGREE,
  MODAL_SET_QUESTION,
  MODAL_SET_FORM,
} from '../action-types';

interface IModalOpen {
  readonly type: typeof MODAL_OPEN;
}

interface IModalClose {
  readonly type: typeof MODAL_CLOSE;
}

interface IModalSetAgree {
  readonly type: typeof MODAL_SET_AGREE;
  readonly payload: {
    agree: boolean;
  };
}

interface IModalSetQuestion {
  readonly type: typeof MODAL_SET_QUESTION;
  readonly payload: {
    question: string;
  };
}

interface IModalSetForm {
  readonly type: typeof MODAL_SET_FORM;
  readonly payload: {
    form: string;
  };
}

export type TModal =
  | IModalOpen
  | IModalClose
  | IModalSetAgree
  | IModalSetQuestion
  | IModalSetForm;

export const modalOpen = (): IModalOpen => ({ type: MODAL_OPEN });

export const modalClose = (): IModalClose => ({ type: MODAL_CLOSE });

export const modalSetAgree = (agree: boolean): IModalSetAgree => ({
  type: MODAL_SET_AGREE,
  payload: { agree },
});

export const modalSetQuestion = (question: string): IModalSetQuestion => ({
  type: MODAL_SET_QUESTION,
  payload: { question },
});

export const modalSetForm = (form: string): IModalSetForm => ({
  type: MODAL_SET_FORM,
  payload: { form },
});
