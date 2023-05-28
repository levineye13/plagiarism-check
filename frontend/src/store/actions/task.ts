import { TASK_SET, TASK_SET_TITLE } from '../action-types';

interface ISetTask {
  readonly type: typeof TASK_SET;
  readonly payload: {
    id: number;
    description: string;
    text: string;
    language: string;
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
  id: number,
  description: string,
  text: string,
  language: string
): ISetTask => ({
  type: TASK_SET,
  payload: {
    id,
    description,
    text,
    language,
  },
});

export const setTitle = (title: string): ISetTitle => ({
  type: TASK_SET_TITLE,
  payload: {
    title,
  },
});
