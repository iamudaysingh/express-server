import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import user from '../userLogin/controllerLogin';
import validation from './validation';
const userLogin: Router = Router();
console.log('inside route login');
userLogin
.post('/', validationHandler(validation.create), user.create);
export default userLogin;
