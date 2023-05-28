import { api } from '../../utils/api';
import { IAnswer } from '../../utils/interfaces';
import { CREATE_ANSWER } from '../action-types';
import { TAppDispatch, TAppThunk } from '../types';

interface ICreateAnswer {
  readonly type: typeof CREATE_ANSWER;
  readonly payload: { answer: IAnswer };
}

interface IGettAllAnswers {
  readonly type: typeof CREATE_ANSWER;
  readonly payload: { answers: IAnswer[] };
}

export type TTasks = ICreateAnswer | IGettAllAnswers;

export const createAnswer: TAppThunk =
  ({ name, code, taskId }: { name: string; code: string; taskId: number }) =>
  async (dispatch: TAppDispatch) => {
    try {
      await api.answer.create(name, code, taskId);
    } catch (e) {
      console.error(e);
    }
  };

export const getAllAnswers: TAppThunk =
  (taskId: number) => async (dispatch: TAppDispatch) => {
    try {
      await api.answer.getAll(taskId);
    } catch (e) {
      console.error(e);
    }
  };
