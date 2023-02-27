import { MENU_OPEN, MENU_CLOSE } from '../action-types';
import { TMenu } from '../actions';

interface IMenuState {
  isOpen: boolean;
}

const menuInitialState: IMenuState = {
  isOpen: false,
};

export const menuReducer = (
  state = menuInitialState,
  action: TMenu
): IMenuState => {
  switch (action.type) {
    case MENU_OPEN:
      return { isOpen: true };

    case MENU_CLOSE:
      return { isOpen: false };

    default:
      return state;
  }
};
