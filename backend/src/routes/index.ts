import { Router } from 'express';

import userRouter from './users';
import groupRouter from './group';
import subjectRouter from './subject';
import taskRouter from './task';
import { Path } from '../utils/constants';
import User from '../controllers/users';
import { auth } from '../middlewares';

const router = Router();

router.post(Path.signin, User.login);
router.post(Path.signup, User.register);
router.use(auth);
router.use(userRouter);
router.use(groupRouter);
router.use(subjectRouter);
router.use(taskRouter);

export default router;
