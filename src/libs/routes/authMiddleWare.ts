import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as configuration from "../../config/configuration";
import hasPermission from "./hasPermission";
import UserRepository from "./../../repositorty/user/UserRepository";
import { IUserRead } from "./../Interface";
export function authMiddleware(moduleName: string, permissionType: string) {
  return (req: IUserRead , res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    console.log("---------------->>>", token);
    const { key } = configuration.default;
    const user = jwt.verify(token, key);
    console.log(user);
    console.log("qd ", user.role);
    const { id } = user;
    console.log(id);
    // console.log(user.id);
    const userRepo = new UserRepository();
    userRepo
      .findOne({ _id: id })
      .then(
        (data) => {
          console.log("me",data);
          if (!hasPermission(moduleName, user.role, permissionType)) {
            console.log("no");
            next({
              status: "Bad Request",
              message: `${user.role}'s permission is denied` || "Error Message"
            });
          }
          else {
          console.log("********************")
          req.users= data;
          console.log("11111111111",req.users);
          }
        },

      );

    // if (!user) {
    //   next({
    //     status: "Bad Request",
    //     message: `user is invalid or missing` || "Error Message"
    //   });
    // }

    // if (!hasPermission(moduleName, user.role, permissionType)) {
    //   console.log("no");
    //   next({
    //     status: "Bad Request",
    //     message: `${user.role}'s permission is denied` || "Error Message"
    //   });
    // }
    next();
  };
}
