import user from "./controller";
import { Router, Request, Response } from "express";
import validationHandler from '../../libs/routes/validationHandler'
import { authMiddleware } from "../../libs/routes/authMiddleWare";
import {  permissions} from "../../libs/constant"
const userRouter: Router = Router();

userRouter.get("/", authMiddleware('trainee','read'), user.get);
userRouter.post("/",authMiddleware('trainee','write'), user.create);
userRouter.put("/", authMiddleware('trainee','delete'),user.modify);
userRouter.delete("/:id",authMiddleware('trainee','write') ,user.erase);

export default userRouter;
