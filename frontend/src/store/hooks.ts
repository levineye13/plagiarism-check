import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { RootState, TAppDispatch, TAppThunk } from './types';

export const useAppDispatch = () => useDispatch<TAppDispatch | TAppThunk>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
