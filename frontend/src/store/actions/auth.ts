import { TAppThunk, TAppDispatch } from '../types';

import { REGISTER, LOGIN, LOGOUT } from '../action-types';
import { api } from '../../utils/api/';
import { IUser } from '../../utils/interfaces';

interface IRegister {
  readonly type: typeof REGISTER;
  readonly payload: { name: string; email: string };
}

interface ILogin {
  readonly type: typeof LOGIN;
  readonly payload: { name: string; email: string };
}

interface ILogout {
  readonly type: typeof LOGOUT;
}

export type TAuth = IRegister | ILogin | ILogout;

export const register: TAppThunk =
  ({ email, login, group, password }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const user: IUser = await api.user.register({
        email,
        name: login,
        group,
        password,
      });

      dispatch({ type: REGISTER, payload: user });
    } catch (e) {
      console.error(e);
    }
  };

export const login: TAppThunk =
  ({ email, password }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const user: IUser = await api.user.login({
        email,
        password,
      });

      dispatch({ type: LOGIN, payload: user });
    } catch (e) {
      console.error(e);
    }
  };

export const logout: TAppThunk = () => async (dispatch: TAppDispatch) => {
  try {
    await api.user.logout();

    dispatch({ type: LOGOUT });
  } catch (e) {
    console.error(e);
  }
};
