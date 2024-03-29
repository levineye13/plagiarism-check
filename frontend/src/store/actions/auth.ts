import { TAppThunk, TAppDispatch } from '../types';

import { REGISTER, LOGIN, LOGOUT, SET_USER } from '../action-types';
import { api } from '../../utils/api/';
import { IUser } from '../../utils/interfaces';
import { TUser } from '../reducers/auth';

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

interface ISetUser {
  readonly type: typeof SET_USER;
  readonly payload: TUser;
}

export type TAuth = IRegister | ILogin | ILogout | ISetUser;

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

export const getMe: TAppThunk = () => async (dispatch: TAppDispatch) => {
  try {
    const user = await api.user.getUser();

    dispatch({ type: SET_USER, payload: user });
  } catch (e) {
    console.error(e);
  }
};
