import { Router } from 'express';

import Answer from '../controllers/answer';
import { Path } from '../utils/constants';

const router = Router();

router.post(Path.answers, Answer.create);
router.get(Path.answers, Answer.getAnswersByTaskId);

export default router;
