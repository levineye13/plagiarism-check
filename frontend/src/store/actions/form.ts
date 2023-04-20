import { SET_FIELD, CLEAR_FORM } from '../action-types';
import { TAppForm } from '../../utils/types';

interface IFormPayload {
  form: TAppForm;
  key: string;
  value: string | number | boolean;
}

interface ISetField {
  readonly type: typeof SET_FIELD;
  readonly payload: IFormPayload;
}

interface IClearForm {
  readonly type: typeof CLEAR_FORM;
  readonly payload: { form: TAppForm };
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
