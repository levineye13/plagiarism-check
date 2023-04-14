import { TTask } from '../../utils/types';
import { ADD_TASK, DELETE_TASK, SET_TASKS } from './../action-types/tasks';

interface ISetTasks {
  readonly type: typeof SET_TASKS;
  readonly payload: { tasks: TTask[] };
}

interface IAddTask {
  readonly type: typeof ADD_TASK;
  readonly payload: { task: TTask };
}

interface IDeleteTask {
  readonly type: typeof DELETE_TASK;
  readonly payload: { task: TTask };
}

export type TTasks = IAddTask | IDeleteTask | ISetTasks;

export const setTasks = (tasks: TTask[]): ISetTasks => ({
  type: SET_TASKS,
  payload: { tasks },
});

export const addTask = (task: TTask): IAddTask => ({
  type: ADD_TASK,
  payload: { task },
});

export const deleteTask = (task: TTask): IDeleteTask => ({
  type: DELETE_TASK,
  payload: { task },
});
