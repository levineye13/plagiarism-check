import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { menuReducer } from './menu';

export const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
});
