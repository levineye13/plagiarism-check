import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { useSelector, useDispatch } from 'react-redux';

import { rootReducer } from './reducers';
import { TAuth, TMenu } from './actions';

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions = TAuth | TMenu;

export type TAppDispatch = Dispatch<TAppActions>;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, TAppActions>
>;

export const useAppDispatch = useDispatch<TAppDispatch>;
export const useAppSelector = useSelector<RootState>;
