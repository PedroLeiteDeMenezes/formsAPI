import { Request, Response, Router } from 'express';
import PostUser from '../controllers/UserController/Post';
import GetId from '../controllers/UserController/get';

const router = Router();


router.post('/', PostUser.post);

router.get('/:id', (req: Request, res: Response) => GetId.get(req, res))

export default router;
