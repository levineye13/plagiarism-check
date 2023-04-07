import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { rootReducer } from './reducers';
import { TAuth, TMenu, TModal, TSelect, TForm, TTask } from './actions';

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions = TAuth | TMenu | TSelect | TModal | TForm | TTask;

export type TAppDispatch = Dispatch<TAppActions>;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, TAppActions>
>;
