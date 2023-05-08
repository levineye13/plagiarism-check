import { Router } from 'express';

import Subject from '../controllers/subjects';
import { role } from '../middlewares';
import { Path, Role } from '../utils/constants';

const router = Router();

router.get(Path.subjects, Subject.getAll);
router.post(Path.subjects, role([Role.Admin, Role.Moderator]), Subject.create);
router.delete(
  Path.subjects,
  role([Role.Admin, Role.Moderator]),
  Subject.delete
);

export default router;
