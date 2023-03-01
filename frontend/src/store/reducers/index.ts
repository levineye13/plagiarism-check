import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { menuReducer } from './menu';
import { editorReducer } from './editor';

export const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  editor: editorReducer,
});
