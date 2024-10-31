import { Request, Response, Router } from 'express';
import PostUser from '../controllers/UserController/Post';
import GetId from '../controllers/UserController/get';
import Login from '../controllers/UserController/Login';
import DeleteUserController from '../controllers/UserController/Delete';
const router = Router();


router.post('/', PostUser.post);
router.post('/login', Login.loginUser)
router.get('/:id', GetId.get)
router.delete('/:id', DeleteUserController.deleteUser)



export default router;
