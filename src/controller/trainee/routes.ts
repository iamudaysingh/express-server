import Trainee from "./controller";
import { Router, Request, Response } from "express";
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import { authMiddleware } from "../../libs/routes/authMiddleWare";
import {  permissions} from "../../libs/constant"
const traineeRouter: Router = Router();

traineeRouter.get("/", authMiddleware('trainee','read'), Trainee.get);
traineeRouter.post("/",authMiddleware('trainee','write'), Trainee.create);
traineeRouter.put("/", authMiddleware('trainee','delete'),Trainee.modify);
traineeRouter.delete("/:id",authMiddleware('trainee','write') ,Trainee.erase);

export default traineeRouter;
