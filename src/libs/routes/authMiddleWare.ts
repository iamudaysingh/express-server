import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as configuration from "../../config/configuration";
import hasPermission from "./hasPermission";

export function authMiddleware(moduleName: string, permissionType: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    const { key } = configuration.default;
    const user = jwt.verify(token, key);

    if (!user) {
      next({
        status: "Bad Request",
        message: `user is invalid or missing` || "Error Message"
      });
    }

    if (!hasPermission(moduleName, user.role, permissionType)) {
      console.log("no");
      next({
        status: "Bad Request",
        message: `${user.role}'s permission is denied` || "Error Message"
      });
    }
    next();
  };
}
