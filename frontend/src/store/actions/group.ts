import { api } from '../../utils/api';
import { IGroup } from '../../utils/interfaces';
import {
  CREATE_GROUP,
  GET_ALL_GROUP,
  GET_ALL_GROUP_OWNER,
} from '../action-types/group';
import { TAppDispatch, TAppThunk } from '../types';

interface ICreateGroup {
  readonly type: typeof CREATE_GROUP;
  readonly payload: { group: IGroup };
}

interface IGetAllGroup {
  readonly type: typeof GET_ALL_GROUP;
  readonly payload: { groups: IGroup[] };
}

interface IGetAllGroupOwner {
  readonly type: typeof GET_ALL_GROUP_OWNER;
  readonly payload: { groups: IGroup[] };
}

export type TGroup = ICreateGroup | IGetAllGroup | IGetAllGroupOwner;

export const createGroup: TAppThunk =
  ({ name }) =>
  async (dispatch: TAppDispatch) => {
    try {
      const group = await api.group.create(name);

      dispatch({ type: CREATE_GROUP, payload: { group } });
    } catch (e) {
      console.error(e);
    }
  };

export const getAllGroups: TAppThunk = () => async (dispatch: TAppDispatch) => {
  try {
    const groups = await api.group.getAll();

    dispatch({ type: GET_ALL_GROUP, payload: { groups } });
  } catch (e) {
    console.error(e);
  }
};

export const getAllGroupsOwner: TAppThunk =
  () => async (dispatch: TAppDispatch) => {
    try {
      const groups = await api.group.getAllOwner();

      dispatch({ type: GET_ALL_GROUP_OWNER, payload: { groups } });
    } catch (e) {
      console.error(e);
    }
  };
