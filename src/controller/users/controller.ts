import { NextFunction, Request, Response } from 'express';
import IUserRead from '../../libs/Interface';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repository/user/UserRepository';
export class UserController {
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  private static instance: UserController;
  public get(req: IUserRead , res: Response, next: NextFunction) {
  console.log('1234567890', req.users);
  res.status(200).send(successHandler('200', 'Successfully Found', req.users));
  }
  public create(req: Request, res: Response, next: NextFunction) {
    const { name, email, role } = req.body;
    // const data = { name, email, role };
    console.log(req.body);
    if (name) {
      UserRepository.create(req.body);
      res.status(200).send(successHandler('200', 'Successfully Stored',  req.body ));
    } else {
      console.log('else of create');
      next({
      Message: 'Name or id is missing',
      error: 'Not Found',
      status: 404,
      });
    }
  }
  public modify(req: Request, res: Response, next: NextFunction) {
    console.log('1234567');
    // const {name , id}  = req.query;
    // const data = { name , id };
    const { dataToUpdate , id}  = req.body;
    const data = { dataToUpdate, id  };
    console.log('1234567890 ----------------------->>>>>>>>>', id , data);
    if (id) {
        UserRepository.genericCreateUpdate(data);
        console.log('after all');
        res
        .status(200)
        .send(successHandler('200', 'Successfully Modified', data));
    } else {
      next({ error: 'Not Found', status: 404, Message: 'Data is not present' });
    }
  }

  public erase(req: Request, res: Response, next: NextFunction) {
    console.log('inside erase' );
   // const id = {name : req.params.id};
    const id1 = req.params.id;
    console.log('inside erase', id1);
    // console.log('inside erase', id1.split('=')[1] );
    // const id = id1.split('=')[1];
    UserRepository.genericDelete(id1);
    res.status(200).send(successHandler('200', 'Successfully Deleted User', 'NULL'));
  }
}
export default UserController.getInstance();
