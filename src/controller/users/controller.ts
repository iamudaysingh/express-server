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
    const { name, id } = req.body;
    const data = [
      {
        id1: id,
        name1: name,
      },
    ];
    if (name && id) {
      res.status(200).send(successHandler('200', 'Successfully Stored', data));
    } else {
      next({
      Message: 'Name or id is missing',
      error: 'Not Found',
      status: 404,
      });
    }
  }
  public modify(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [
      {
        id1: id,
        name1: name,
      },
    ];
    if (name && id) {
      res
        .status(200)
        .send(successHandler('200', 'Successfully Modified', data));
    } else {
      next({ error: 'Not Found', status: 404, Message: 'Data is not present' });
    }
  }

  public erase(req: Request, res: Response, next: NextFunction) {
    console.log('inside erase');
    const id = {name : req.params.id};
    new UserRepository().delete(id);
    res.status(200).send(successHandler('200', 'Successfully Deleted User', 'NULL'));
  }
}
export default UserController.getInstance();
