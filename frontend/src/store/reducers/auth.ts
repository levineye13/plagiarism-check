import { REGISTER, LOGIN, LOGOUT } from '../action-types';

interface IAuthState {
  readonly isAuth: boolean;
  readonly user: {
    name: string;
    email: string;
    group: string;
  };
}

const initialState: IAuthState = {
  isAuth: false,
  user: { name: '', email: '', group: '' },
};

export const authReducer = (
  state = initialState,
  action: {
    type: string;
    payload: { name: string; email: string; group: string };
  }
): IAuthState => {
  switch (action.type) {
    case REGISTER:
      return { ...state, isAuth: true, user: action.payload };

    case LOGIN:
      return { ...state, isAuth: true, user: action.payload };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
