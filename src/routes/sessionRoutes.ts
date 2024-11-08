import LoginRequired from '../middlewares/loginRequired';
import { Router } from 'express';

import PostStudy from '../controllers/StudySessionController/Post';

const router = Router()

router.post('/:labId', LoginRequired.required, PostStudy.post)

export default router