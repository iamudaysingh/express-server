import Trainee from "./controller";
import { Router, Request, Response } from "express";
const traineeRouter: Router = Router();

traineeRouter.get("/", Trainee.get);
traineeRouter.post("/", Trainee.create);
traineeRouter.put("/", Trainee.modify);
traineeRouter.delete("/:id", Trainee.erase);

export default traineeRouter;
