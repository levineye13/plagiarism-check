import { apiUser } from './user';
import { apiGroup } from './group';
import { apiSubject } from './subject';
import { apiTask } from './task';
import { apiAnswer } from './answer';

export const api = {
  user: apiUser,
  group: apiGroup,
  subject: apiSubject,
  task: apiTask,
  answer: apiAnswer,
};
