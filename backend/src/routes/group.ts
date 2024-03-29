import { Router } from 'express';

import Group from '../controllers/groups';
import { role } from '../middlewares';
import { Path, Role } from '../utils/constants';

const router = Router();

router.get(`${Path.groups}/owner`, Group.getMyGroups);
router.get(Path.group, Group.getById);
router.get(Path.groups, Group.getAll);
router.post(Path.groups, role([Role.Admin, Role.Moderator]), Group.create);
router.patch(Path.groups, Group.addUser);
//router.patch(Path.groups, Group.addSubject);
router.delete(Path.groups, role([Role.Admin, Role.Moderator]), Group.delete);

export default router;
