import { Request, Response, Router } from 'express';
import PostUser from '../controllers/UserController/Post';
import GetId from '../controllers/UserController/get';
import Login from '../controllers/UserController/Login';

const router = Router();


router.post('/', PostUser.post);
router.post('/login', Login.loginUser)
router.get('/:id', GetId.get)



export default router;
