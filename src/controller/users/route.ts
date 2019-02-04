import {  Request, Response , Router } from 'express';

// import  permissions  from '../../libs/constant';

import { authMiddleware } from '../../libs/routes/authMiddleWare';
import { UserController } from './controller';
// import validationHandler from '../../libs/routes/validationHandler';
const user = new UserController();
const userRouter: Router = Router();
userRouter.get('/',  authMiddleware('trainee', 'read'), user.get);
userRouter.post('/', authMiddleware('trainee', 'write'), user.create);
userRouter.put('/',  authMiddleware('trainee', 'delete'), user.modify);
userRouter.delete('/:id', authMiddleware('trainee', 'write'), user.erase);
export default userRouter;
