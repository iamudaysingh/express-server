import { TraineeController } from "./";
import { Router, Request, Response } from "express";
const traineeRouter: Router = Router();
const Trainee = new TraineeController();

traineeRouter.get("/", Trainee.get);
traineeRouter.post("/", Trainee.create);
traineeRouter.put("/", Trainee.modify);
traineeRouter.delete("/", Trainee.erase);

export default traineeRouter;
