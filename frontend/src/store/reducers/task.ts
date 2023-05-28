import { TTask } from '../actions/task';
import { TASK_SET, TASK_SET_TITLE } from '../action-types';

interface IInitialTask {
  readonly id: number;
  readonly description: string;
  readonly text: string;
  readonly language: string;
}

const initialTask: IInitialTask = {
  id: -1,
  text: '',
  description: '',
  language: '',
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
        id: payload.id,
        text: payload.text,
        description: payload.description,
        language: payload.language,
      };

    default:
      return state;
  }
};
