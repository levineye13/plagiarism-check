import { TASK_SET, TASK_SET_TITLE } from '../action-types';

interface ISetTask {
  readonly type: typeof TASK_SET;
  readonly payload: {
    title: string;
    description?: string;
    text: string;
  };
}

interface ISetTitle {
  readonly type: typeof TASK_SET_TITLE;
  readonly payload: {
    title: string;
  };
}

export type TTask = ISetTask | ISetTitle;

export const setTask = (
  title: string,
  text: string,
  description?: string
): ISetTask => ({
  type: TASK_SET,
  payload: {
    title,
    description,
    text,
  },
});

export const setTitle = (title: string): ISetTitle => ({
  type: TASK_SET_TITLE,
  payload: {
    title,
  },
});
