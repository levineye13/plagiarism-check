import { ISubject } from '../../utils/interfaces';
import { TSubject } from '../actions';
import {
  GET_ALL_SUBJECT,
  GET_ALL_SUBJECT_OWNER,
} from './../action-types/subject';

interface IInitialSubject {
  all: ISubject[];
  owner: ISubject[];
}

const initialSubject: IInitialSubject = {
  all: [],
  owner: [],
};

export const subjectReducer = (
  state = initialSubject,
  action: TSubject
): IInitialSubject => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_SUBJECT:
      return {
        ...state,
        all: payload.subjects,
      };

    case GET_ALL_SUBJECT_OWNER:
      return {
        ...state,
        owner: payload.subjects,
      };

    default:
      return state;
  }
};
