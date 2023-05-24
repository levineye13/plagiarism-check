import { SET_FIELD, CLEAR_FORM, SET_FIELD_ERROR } from '../action-types';
import { TAppForm } from '../../utils/types';

export interface IFormPayload {
  form: TAppForm;
  key: string;
  value: string | number | boolean | string[];
}

export interface ISetField {
  readonly type: typeof SET_FIELD;
  readonly payload: IFormPayload;
}

interface ISetFieldError {
  readonly type: typeof SET_FIELD_ERROR;
  readonly payload: IFormPayload;
}

interface IClearForm {
  readonly type: typeof CLEAR_FORM;
  readonly payload: { form: TAppForm };
}

export type TForm = ISetField | IClearForm | ISetFieldError;

export const setField = ({ form, key, value }: IFormPayload): ISetField => ({
  type: SET_FIELD,
  payload: {
    form,
    key,
    value,
  },
});

export const setFieldError = ({
  form,
  key,
  value,
}: IFormPayload): ISetFieldError => ({
  type: SET_FIELD_ERROR,
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
