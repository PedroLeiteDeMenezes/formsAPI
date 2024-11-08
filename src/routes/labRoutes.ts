import LoginRequired from '../middlewares/loginRequired';
import { Router } from 'express';

import PostLab from '../controllers/LabController/Post';

const router = Router()


router.post('/', LoginRequired.required, PostLab.post)

export default router