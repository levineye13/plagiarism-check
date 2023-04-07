export type { TAuth } from './auth';
export type { TMenu } from './menu';
export type { TSelect } from './editor';
export type { TModal } from './modal';
export type { TForm } from './form';
export type { TTask } from './task';

export { register, login, logout } from './auth';
export { openMenu, closeMenu } from './menu';
export { setTheme, setLanguage } from './editor';
export {
  modalOpen,
  modalClose,
  modalSetAgree,
  modalSetForm,
  modalSetQuestion,
} from './modal';
export { setTitle } from './task';
