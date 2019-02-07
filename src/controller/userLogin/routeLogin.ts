import { Request, Response, Router } from 'express';
// import { permissions } from '../../libs/constants';
// import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validation';
import user from '../userLogin/controllerLogin';
const userLogin: Router = Router();
console.log('inside route login');
userLogin
// .get('/', authMiddleWare('getUsers', 'read'), user.get)
 // .post('/', validationHandler(validation.create), user.create);
  .post('/', user.create);
// .put('/', validationHandler(validation.update), user.update)
// .delete('/:id' , validationHandler(validation.delete), user.delete);
export default userLogin;
