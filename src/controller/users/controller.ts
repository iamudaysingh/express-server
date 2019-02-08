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
  public async get(req: IUserRead, res: Response, next: NextFunction) {
    try {
      const { limit = 10, skip = 0 } = req.query;
      const skipLimit = { role: 'head-trainer', skip, limit };
      const allData = await UserRepository.get(skipLimit);
      const doc = await allData.length; // Number of documents according to skip & limit
      const originalDocuments = await UserRepository.count(); // Total number of documents in db
      const newData = {
        'Number of documents according to skip & limit': doc,
        'Total number of documents in db': originalDocuments,
        allData,
      };
      if (newData) {
        res
          .status(200)
          .send(successHandler('200', 'Successfully Found', newData));
      } else {
        next({
          error: 'Not Found',
          message: 'Not a valid request',
          status: 404,
        });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, role } = req.body;
      console.log(req.body);
      if (name && email && role) {
        UserRepository.create(req.body);
        res
          .status(200)
          .send(await successHandler('200', 'Successfully Stored', req.body));
      } else {
        console.log('else of create');
        next({
          error: 'Not Found',
          message: 'name or email or role is missing',
          status: 404,
        });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  public async modify(req: Request, res: Response, next: NextFunction) {
    try {
      const { dataToUpdate, id } = req.body;
      const data = { dataToUpdate, id };
      if (id) {
      const result = await UserRepository.genericCreateUpdate(data);
      console.log('after all' , result);
      res
          .status(200)
          .send(successHandler('200', 'Successfully Modified', data));
      } else {
        next({
          error: 'Not Found',
          message: 'Data is not present',
          status: 404,
        });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  public erase(req: Request, res: Response, next: NextFunction) {
    const id1 = req.params.id;
    UserRepository.genericDelete(id1);
    res
      .status(200)
      .send(successHandler('200', 'Successfully Deleted User', 'NULL'));
  }
}
export default UserController.getInstance();
