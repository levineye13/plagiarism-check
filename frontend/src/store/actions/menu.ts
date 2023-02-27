import { MENU_OPEN, MENU_CLOSE } from '../action-types';

interface IMenuOpen {
  readonly type: typeof MENU_OPEN;
}

interface IMenuClose {
  readonly type: typeof MENU_CLOSE;
}

export type TMenu = IMenuOpen | IMenuClose;

export const openMenu = (): IMenuOpen => ({ type: MENU_OPEN });

export const closeMenu = (): IMenuClose => ({ type: MENU_CLOSE });
