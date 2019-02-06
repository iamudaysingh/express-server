import {  NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as configuration from '../../config/configuration';
import UserRepository from '../../repository/user/UserRepository';
import IUserRead from '../Interface';
import hasPermission from './hasPermission';
export function authMiddleware(moduleName: string, permissionType: string) {
  return (req: IUserRead, res: Response, next: NextFunction) => {
    const token = req.headers['abc'];
    console.log("token is ----<><><>", token);
    // console.log('---------------->>>', req.headers);
    const { key } = configuration.default;
    const user = jwt.verify(token, key);
    console.log(user);
    console.log('qd ', user.role);
    const { id } = user;
    console.log(id);
    // console.log(user.id);
    // const userRepo = new UserRepository();
    UserRepository
      .findOne({ _id: id })
      .then(
        (data) => {
          console.log('me', data);
          if (!hasPermission(moduleName, data.role, permissionType)) {
            console.log('no');
            next({
              message: `${user.role}'s permission is denied` || 'Error Message',
              status: 'Bad Request',
            });
          }
          else {
          console.log('********************');
          req.users = data;
          console.log('11111111111', req.users);
          }
          next();
        },
      )
    .catch((err) => {
        console.log('error', err);
    } );
  };
}
