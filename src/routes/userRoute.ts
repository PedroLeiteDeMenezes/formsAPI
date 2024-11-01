import { Request, Response, Router } from 'express';
import DeleteUserController from '../controllers/UserController/Delete';
import { CheckUserPermission } from '../middlewares/checkUserPermission';
import LoginRequired from '../middlewares/loginRequired';

import PostUser from '../controllers/UserController/Post';
import GetId from '../controllers/UserController/get';
import Login from '../controllers/UserController/Login';
import update from '../controllers/UserController/update'
const router = Router();


router.post('/', PostUser.post);
router.post('/login', Login.loginUser)
router.get('/:id', GetId.get)
router.delete('/:id', LoginRequired.required, CheckUserPermission.check, DeleteUserController.deleteUser)
router.put('/:id', LoginRequired.required, CheckUserPermission.check, update.put )


export default router;
