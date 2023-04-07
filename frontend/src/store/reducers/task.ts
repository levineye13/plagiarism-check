import { TTask } from '../actions/task';
import { TASK_SET, TASK_SET_TITLE } from '../action-types';

interface IInitialTask {
  readonly title: string;
  readonly text: string;
  readonly description: string;
}

const initialTask: IInitialTask = {
  title: '',
  text: '',
  description: '',
};

export const taskReducer = (
  state = initialTask,
  action: TTask
): IInitialTask => {
  const { type, payload } = action;

  switch (type) {
    case TASK_SET:
      return {
        ...state,
        title: payload.title,
        text: payload.text,
        description: payload.description || '',
      };

    case TASK_SET_TITLE:
      return {
        ...state,
        title: payload.title,
      };

    default:
      return state;
  }
};
