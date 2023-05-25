import { api } from '../../utils/api';
import { ITask } from '../../utils/interfaces';
import { TAppDispatch, TAppThunk } from '../types';
import {
  ADD_TASK,
  DELETE_TASK,
  GET_ALL_TASKS,
  GET_ALL_TASKS_OWNER,
  SET_TASKS,
  SET_TASKS_OWNER,
} from './../action-types/tasks';

interface ISetTasks {
  readonly type: typeof SET_TASKS;
  readonly payload: { tasks: ITask[] };
}

interface ISetTasksOwner {
  readonly type: typeof SET_TASKS_OWNER;
  readonly payload: { tasks: ITask[] };
}

interface IAddTask {
  readonly type: typeof ADD_TASK;
  readonly payload: { task: ITask };
}

interface IDeleteTask {
  readonly type: typeof DELETE_TASK;
  readonly payload: { task: ITask };
}

interface IGetAllTask {
  readonly type: typeof GET_ALL_TASKS;
  readonly payload: { tasks: ITask[] };
}

interface IGetAllTaskOwner {
  readonly type: typeof GET_ALL_TASKS_OWNER;
  readonly payload: { tasks: ITask[] };
}

export type TTasks =
  | IAddTask
  | IDeleteTask
  | ISetTasks
  | ISetTasksOwner
  | IGetAllTask
  | IGetAllTaskOwner;

export const setTasks = (tasks: ITask[]): ISetTasks => ({
  type: SET_TASKS,
  payload: { tasks },
});

export const setTasksOwner = (tasks: ITask[]): ISetTasksOwner => ({
  type: SET_TASKS_OWNER,
  payload: { tasks },
});

export const addTask = (task: ITask): IAddTask => ({
  type: ADD_TASK,
  payload: { task },
});

export const deleteTask = (task: ITask): IDeleteTask => ({
  type: DELETE_TASK,
  payload: { task },
});

export const createTask: TAppThunk =
  ({
    addTask,
    description,
    language,
    courses,
  }: {
    addTask: string;
    description: string;
    language: string;
    courses: string[];
  }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const task = await api.task.create(
        addTask,
        description,
        language,
        courses
      );

      dispatch({ type: ADD_TASK, payload: { task } });
    } catch (e) {
      console.error(e);
    }
  };

export const getAllTask: TAppThunk = () => async (dispatch: TAppDispatch) => {
  try {
    const tasks = await api.task.getAll();

    dispatch({ type: SET_TASKS, payload: { tasks } });
  } catch (e) {
    console.error(e);
  }
};

export const getAllTaskOwner: TAppThunk =
  () => async (dispatch: TAppDispatch) => {
    try {
      const tasks = await api.task.getAllOwner();

      dispatch({ type: SET_TASKS_OWNER, payload: { tasks } });
    } catch (e) {
      console.error(e);
    }
  };
