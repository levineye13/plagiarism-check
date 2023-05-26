import { REGISTER, LOGIN, LOGOUT, SET_USER } from '../action-types';

export type TUser = {
  id: number;
  name: string;
  email: string;
  group: {
    id: number;
    name: string;
    subjects: Array<{
      id: number;
      name: string;
      tasks: Array<{
        id: number;
        description: string;
        text: string;
        language: string;
      }>;
    }>;
  };
};

interface IAuthState {
  readonly isAuth: boolean;
  readonly user: TUser;
}

const initialState: IAuthState = {
  isAuth: true,
  user: {
    id: -1,
    name: '',
    email: '',
    group: {
      id: -1,
      name: '',
      subjects: [],
    },
  },
};

export const authReducer = (
  state = initialState,
  action: {
    type: string;
    payload: TUser;
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
