import { IGroup } from '../../utils/interfaces';
import { GET_ALL_GROUP, GET_ALL_GROUP_OWNER } from '../action-types/group';

interface IGroupState {
  groups: IGroup[];
  ownGroups: IGroup[];
}

const initialState: IGroupState = {
  groups: [],
  ownGroups: [],
};

export const groupReducer = (
  state = initialState,
  action: {
    type: string;
    payload: { groups: IGroup[] };
  }
): IGroupState => {
  switch (action.type) {
    case GET_ALL_GROUP:
      return { ...state, groups: action.payload.groups };

    case GET_ALL_GROUP_OWNER:
      return { ...state, ownGroups: action.payload.groups };

    default:
      return state;
  }
};
