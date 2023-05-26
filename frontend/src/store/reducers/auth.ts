import { REGISTER, LOGIN, LOGOUT, SET_USER } from '../action-types';

interface IAuthState {
  readonly isAuth: boolean;
  readonly user: {
    id: number;
    name: string;
    email: string;
    group: {
      id: number;
      name: string;
      subjects: Array<{ id: number; name: string }>;
    };
  };
}

const initialState: IAuthState = {
  isAuth: false,
  user: {
    id: -1,
    name: '',
    email: '',
    group: { id: -1, name: '', subjects: [] },
  },
};

export const authReducer = (
  state = initialState,
  action: {
    type: string;
    payload: {
      id: number;
      name: string;
      email: string;
      group: {
        id: number;
        name: string;
        subjects: Array<{
          id: number;
          name: string;
        }>;
      };
    };
  }
): IAuthState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isAuth: true,
        user: { ...state.user, ...action.payload },
      };

    case LOGIN:
      return {
        ...state,
        isAuth: true,
        user: { ...state.user, ...action.payload },
      };

    case LOGOUT:
      return initialState;

    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
