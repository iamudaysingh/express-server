import Trainee from "./controller";
import { Router, Request, Response } from "express";
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
const traineeRouter: Router = Router();

traineeRouter.get("/", validationHandler(validation.get), Trainee.get);
traineeRouter.post("/",validationHandler(validation.create), Trainee.create);
traineeRouter.put("/", Trainee.modify);
traineeRouter.delete("/:id", Trainee.erase);

export default traineeRouter;
