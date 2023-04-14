import { TTask } from '../../utils/types';
import { ADD_TASK, DELETE_TASK, SET_TASKS } from '../action-types/tasks';
import { TTasks } from '../actions/tasks';

interface IInitialTasks {
  readonly tasks: TTask[];
}

const initialTasks: IInitialTasks = {
  tasks: [],
};

export const tasksReducer = (state = initialTasks, action: TTasks) => {
  const { type } = action;

  switch (type) {
    case SET_TASKS:
      return { tasks: action.payload.tasks };

    case ADD_TASK:
      return { tasks: [...state.tasks, action.payload.task] };

    case DELETE_TASK: {
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.task.id
      );

      return { tasks: newTasks };
    }

    default:
      return state;
  }
};
