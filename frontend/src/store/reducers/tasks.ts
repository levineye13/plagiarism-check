import { ITask } from '../../utils/interfaces';
import { SET_TASKS, SET_TASKS_OWNER } from '../action-types/tasks';
import { TTasks } from '../actions/tasks';

interface IInitialTasks {
  readonly all: ITask[];
  readonly allOwner: ITask[];
}

const initialTasks: IInitialTasks = {
  all: [],
  allOwner: [],
};

export const tasksReducer = (state = initialTasks, action: TTasks) => {
  const { type } = action;

  switch (type) {
    case SET_TASKS:
      return { ...state, all: action.payload.tasks };

    case SET_TASKS_OWNER:
      return { ...state, allOwner: action.payload.tasks };

    default:
      return state;
  }
};
