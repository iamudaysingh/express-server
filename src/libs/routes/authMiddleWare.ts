import {  NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as configuration from '../../config/configuration';
import UserRepository from '../../repository/user/UserRepository';
import IUserRead from '../Interface';
import hasPermission from './hasPermission';
export function authMiddleware(moduleName: string, permissionType: string) {
  return (req: IUserRead, res: Response, next: NextFunction) => {
    const token = req.headers['abc'];
    const { key } = configuration.default;
    const user = jwt.verify(token, key);
    const { id } = user;
    UserRepository
      .findOne({ _id: id })
      .then(
        (data) => {
          if (!hasPermission(moduleName, data.role, permissionType)) {
            console.log('no');
            next({
              message: `${user.role}'s permission is denied` || 'Error Message',
              status: 'Bad Request',
            });
          }
          else {
          req.users = data;
          }
          next();
        },
      )
    .catch((err) => {
        console.log('error', err);
    } );
  };
}
