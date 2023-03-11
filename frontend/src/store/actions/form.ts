import { SET_FIELD } from '../action-types';

interface IFormPayload {
  form: string;
  key: string;
  value: string | number;
}

interface ISetField {
  readonly type: typeof SET_FIELD;
  readonly payload: IFormPayload;
}

export type TForm = ISetField;

export const setField = ({ form, key, value }: IFormPayload): ISetField => ({
  type: SET_FIELD,
  payload: {
    form,
    key,
    value,
  },
});
