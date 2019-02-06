import { Router } from 'express';
import * as express from 'express';
import traineeRouter from './controller/trainee/routes';
import { userRouter } from './controller/users';
const router = express.Router();
router.use('/trainee', traineeRouter );
router.use('/user', userRouter);
export default router;
