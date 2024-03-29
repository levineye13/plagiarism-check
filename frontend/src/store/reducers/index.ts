import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { menuReducer } from './menu';
import { editorReducer } from './editor';
import { modalReducer } from './modal';
import { taskReducer } from './task';
import { tasksReducer } from './tasks';
import { formReducer } from './form';
import { groupReducer } from './group';
import { subjectReducer } from './subject';

export const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  editor: editorReducer,
  modal: modalReducer,
  task: taskReducer,
  tasks: tasksReducer,
  form: formReducer,
  groups: groupReducer,
  subject: subjectReducer,
});
