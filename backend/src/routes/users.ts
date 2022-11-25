import { Router } from 'express';

import User from '../controllers/users';
import { Path } from '../utils/constants';

const router = Router();

router.get(Path.users, User.getAll);
router.get(Path.me, User.getMe);
router.get(Path.user, User.getById);
router.delete(Path.user, User.delete);

export default router;
