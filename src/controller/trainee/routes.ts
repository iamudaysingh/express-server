import { Request, Response, Router } from 'express';
import {  permissions } from '../../libs/constant';
import { authMiddleware } from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import Trainee from './controller';
import validation from './validation';
const traineeRouter: Router = Router();

traineeRouter.get('/', authMiddleware('trainee', 'read'), Trainee.get);
traineeRouter.post('/', authMiddleware('trainee', 'write'), Trainee.create);
traineeRouter.put('/', authMiddleware('trainee', 'delete'), Trainee.modify);
traineeRouter.delete('/:id', authMiddleware('trainee', 'write') , Trainee.erase);

export default traineeRouter;
