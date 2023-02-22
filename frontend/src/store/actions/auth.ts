import { TAppThunk, TAppDispatch } from './../../utils/types';

import { REGISTER, LOGIN, LOGOUT } from '../action-types';
import { apiUser } from '../../utils/api/';
import { IUser } from '../../utils/interfaces';

export interface IRegister {
  readonly type: typeof REGISTER;
  readonly payload: { login: string; email: string };
}

export interface ILogin {
  readonly type: typeof LOGIN;
  readonly payload: { login: string; email: string };
}

export interface ILogout {
  readonly type: typeof LOGOUT;
}

export type TAuth = IRegister | ILogin | ILogout;

export const register: TAppThunk =
  ({ email, login, password }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const user: IUser = await apiUser.register({ email, login, password });

      dispatch({ type: REGISTER, payload: user });
    } catch (e) {
      console.error(e);
    }
  };

export const login: TAppThunk =
  ({ email, password }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const user: IUser = await apiUser.login({
        email,
        password,
      });

      dispatch({ type: LOGIN, payload: user });
    } catch (e) {
      console.error(e);
    }
  };

export const logout: TAppThunk =
  ({ email, password }) =>
  async (dispatch: TAppDispatch) => {
    try {
      await apiUser.logout();

      dispatch({ type: LOGOUT });
    } catch (e) {
      console.error(e);
    }
  };
