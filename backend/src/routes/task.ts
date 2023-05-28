import { Router } from 'express';

import Task from '../controllers/tasks';
import { role } from '../middlewares';
import { Path, Role } from '../utils/constants';

const router = Router();

router.get(`${Path.tasks}/owner`, Task.getMyTasks);
router.get(Path.task, Task.getById);
router.get(Path.tasks, Task.getAll);
router.post(Path.tasks, role([Role.Admin, Role.Moderator]), Task.create);
router.delete(Path.tasks, role([Role.Admin, Role.Moderator]), Task.delete);

export default router;
