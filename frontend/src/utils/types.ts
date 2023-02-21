import { FC, PropsWithChildren } from 'react';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { rootReducer } from '../store/reducers';
import { TAuth } from '../store/actions';

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions = TAuth;

export type TAppDispatch = Dispatch<TAppActions>;

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, TAppActions>
>;
