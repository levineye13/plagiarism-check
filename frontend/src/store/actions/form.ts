import { SET_FIELD, CLEAR_FORM } from '../action-types';

interface IFormPayload {
  form: string;
  key: string;
  value: string | number;
}

interface ISetField {
  readonly type: typeof SET_FIELD;
  readonly payload: IFormPayload;
}

interface IClearForm {
  readonly type: typeof CLEAR_FORM;
  readonly payload: { form: string };
}

export type TForm = ISetField | IClearForm;

export const setField = ({ form, key, value }: IFormPayload): ISetField => ({
  type: SET_FIELD,
  payload: {
    form,
    key,
    value,
  },
});

export const clearForm = ({ form }: IFormPayload): IClearForm => ({
  type: CLEAR_FORM,
  payload: { form },
});
