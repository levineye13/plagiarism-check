import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { rootReducer } from './reducers';
import { TAuth, TMenu, TModal, TSelect, TForm, TTask } from './actions';
import { TTasks } from './actions/tasks';

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions =
  | TAuth
  | TMenu
  | TSelect
  | TModal
  | TForm
  | TTask
  | TTasks;

export type TAppDispatch = Dispatch<TAppActions>;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, TAppActions>
>;
//export type TAppThunk = ThunkDispatch<RootState, any, TAppActions>;
