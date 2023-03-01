import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { rootReducer } from './reducers';
import { TAuth, TMenu, TSelect } from './actions';

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions = TAuth | TMenu | TSelect;

export type TAppDispatch = Dispatch<TAppActions>;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, TAppActions>
>;
