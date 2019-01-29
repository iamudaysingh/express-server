import Trainee from "./controller";
import { Router, Request, Response } from "express";
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
const traineeRouter: Router = Router();

traineeRouter.get("/", validationHandler(validation.get), Trainee.get);
traineeRouter.post("/",validationHandler(validation.create), Trainee.create);
traineeRouter.put("/", validationHandler(validation.update),Trainee.modify);
traineeRouter.delete("/:id",validationHandler(validation.delete) ,Trainee.erase);

export default traineeRouter;
