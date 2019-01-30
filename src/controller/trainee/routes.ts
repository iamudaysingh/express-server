import Trainee from "./controller";
import { Router, Request, Response } from "express";
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import { authMiddleware } from "../../libs/routes/authMiddleWare";
import { getTrainee , head_trainer, trainer, trainee, permissions} from "../../libs/constant"
const traineeRouter: Router = Router();

traineeRouter.get("/", validationHandler(validation.get), Trainee.get);
traineeRouter.post("/",authMiddleware(getTrainee,'write'), Trainee.create);
traineeRouter.put("/", validationHandler(validation.update),Trainee.modify);
traineeRouter.delete("/:id",validationHandler(validation.delete) ,Trainee.erase);

export default traineeRouter;
