import * as express from 'express';
import traineeRouter from './controller/trainee/routes';
import userLogin from './controller/userLogin/routeLogin';
import { userRouter } from './controller/users';
const router = express.Router();
router.use('/trainee', traineeRouter );
router.use('/user', userRouter);
console.log('inside main router');
router.use('/userLogin', userLogin);
export default router;
