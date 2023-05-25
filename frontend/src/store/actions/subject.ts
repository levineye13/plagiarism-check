import { api } from '../../utils/api';
import { Fields } from '../../utils/constants';
import { ISubject } from '../../utils/interfaces';
import {
  CREATE_SUBJECT,
  GET_ALL_SUBJECT,
  GET_ALL_SUBJECT_OWNER,
} from '../action-types/subject';
import { TAppDispatch, TAppThunk } from '../types';

interface ICreateSubject {
  readonly type: typeof CREATE_SUBJECT;
  readonly payload: { subject: ISubject };
}

interface IGetAllSubject {
  readonly type: typeof GET_ALL_SUBJECT;
  readonly payload: { subjects: ISubject[] };
}

interface IGetAllSubjectOwner {
  readonly type: typeof GET_ALL_SUBJECT_OWNER;
  readonly payload: { subjects: ISubject[] };
}

export type TSubject = ICreateSubject | IGetAllSubject | IGetAllSubjectOwner;

export const createSubject: TAppThunk =
  ({ addCourse, groups }: { addCourse: string; groups: string[] }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const subject = await api.subject.create(addCourse, groups);

      dispatch({ type: CREATE_SUBJECT, payload: { subject } });
    } catch (e) {
      console.error(e);
    }
  };

export const getAllSubjects: TAppThunk =
  () => async (dispatch: TAppDispatch) => {
    try {
      const subjects = await api.subject.getAll();

      dispatch({ type: GET_ALL_SUBJECT, payload: { subjects } });
    } catch (e) {
      console.error(e);
    }
  };

export const getAllSubjectsOwner: TAppThunk =
  () => async (dispatch: TAppDispatch) => {
    try {
      const subjects = await api.subject.getAllOwner();

      dispatch({ type: GET_ALL_SUBJECT_OWNER, payload: { subjects } });
    } catch (e) {
      console.error(e);
    }
  };
