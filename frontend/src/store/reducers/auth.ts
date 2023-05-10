import { REGISTER, LOGIN, LOGOUT } from '../action-types';

interface IAuthState {
  readonly isAuth: boolean;
  readonly login: string;
  readonly email: string;
  readonly group: string;
}

const initialState: IAuthState = {
  isAuth: true,
  login: '',
  email: '',
  group: '',
};

export const authReducer = (
  state = initialState,
  action: { type: string; payload?: { login: string; email: string } }
): IAuthState => {
  switch (action.type) {
    case REGISTER:
      return { ...state, isAuth: true, ...action.payload };

    case LOGIN:
      return { ...state, isAuth: true, ...action.payload };

    case LOGOUT:
      return { ...state, isAuth: false };

    default:
      return state;
  }
};
