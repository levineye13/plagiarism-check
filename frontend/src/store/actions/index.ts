export type { TAuth } from './auth';
export type { TMenu } from './menu';
export type { TSelect } from './editor';
export type { TModal } from './modal';
export type { TForm } from './form';
export type { TTask } from './task';
export type { TTasks } from './tasks';
export type { TGroup } from './group';
export type { TSubject } from './subject';

export { register, login, logout, getMe } from './auth';
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
export {
  setTasks,
  addTask,
  deleteTask,
  createTask,
  getAllTask,
  getAllTaskOwner,
} from './tasks';
export {
  setField,
  setFieldError,
  clearForm,
  clearCoursesAndGroups,
} from './form';
export { getAllGroups, getAllGroupsOwner, createGroup } from './group';
export { getAllSubjects, getAllSubjectsOwner, createSubject } from './subject';
