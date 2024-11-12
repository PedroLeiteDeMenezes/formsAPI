import LoginRequired from '../middlewares/loginRequired';
import { Router } from 'express';

import PostStudy from '../controllers/StudySessionController/Post';
import GetAll from '../controllers/StudySessionController/getAll';
import DeleteSessionController from '../controllers/StudySessionController/Delete';

const router = Router()

router.post('/:labId', LoginRequired.required, PostStudy.post)
router.get('/', LoginRequired.required, GetAll.getAll)
router.delete('/:id', LoginRequired.required, DeleteSessionController.DeleteSession)

export default router