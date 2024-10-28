 import { Router } from 'express';
 import UserPost from '../controllers/UserController/Post'

 const router = Router()

 router.post('/', UserPost.post)


 export default router;