import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { RootState, TAppDispatch } from './types';

export const useAppDispatch = useDispatch<TAppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
