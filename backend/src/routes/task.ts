import { Router } from 'express';

import Task from '../controllers/tasks';
import { role } from '../middlewares';
import { Path, Role } from '../utils/constants';

const router = Router();

router.get(Path.subjects, Task.getAll);
router.post(Path.subjects, role([Role.Admin, Role.Moderator]), Task.create);
router.delete(Path.subjects, role([Role.Admin, Role.Moderator]), Task.delete);

export default router;
