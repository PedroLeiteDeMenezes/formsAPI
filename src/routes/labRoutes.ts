import LoginRequired from '../middlewares/loginRequired';
import { Router } from 'express';

import PostLab from '../controllers/LabController/Post';
import DeleteLab from '../validations/validateLab/deleteLab';
import GetAll from '../controllers/LabController/GetAll';
import GetId from '../controllers/LabController/getById';

const router = Router()


router.post('/', LoginRequired.required, PostLab.post)
router.delete('/:id', LoginRequired.required, DeleteLab.delete)
router.get('/', LoginRequired.required, GetAll.getAll)
router.get('/:id', LoginRequired.required, GetId.get)

export default router