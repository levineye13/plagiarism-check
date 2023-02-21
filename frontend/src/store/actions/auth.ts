import { TAppThunk, TAppDispatch } from './../../utils/types';

import { REGISTER } from '../action-types';

export interface IRegister {
  readonly type: typeof REGISTER;
  readonly payload: { login: string; email: string };
}

export type TAuth = IRegister;

export const register: TAppThunk =
  ({ email, login, password }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const user: { email: string; login: string } = { email: '', login: '' };

      dispatch({ type: REGISTER, payload: user });
    } catch (e) {
      console.error(e);
    }
  };
