import { Router, Request, Response, NextFunction } from "express";
import { successHandler } from "./";
import { IUserRead } from "src/libs/Interface";
class TraineeController {
  private static instance: TraineeController;
  public static getInstance() {
    if (!TraineeController.instance) {
      TraineeController.instance = new TraineeController();
    }
    return TraineeController.instance;
  }
  get(req: IUserRead, res: Response, next: NextFunction) {
    // const data = [
    //   {
    //     name1: req.user.name,
    //     email : req.user.email,
    //     role : req.user.role
    //   },
    //   {
    //     name2: "trainee2",
    //     id: 102
    //   }
    // ];
    res.status(200).send(successHandler("200", "Successfully Found", req.users));
  }
  create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [
      {
        name1: name,
        id: id
      }
    ];
    if (name && id) {
      res.status(200).send(successHandler("200", "Successfully Stored", req.users));
    } else {
      next({
        error: "Not Found",
        status: 404,
        Message: "Name or id is missing"
      });
    }
  }
  modify(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [
      {
        name1: name,
        id: id
      }
    ];
    if (name && id) {
      res
        .status(200)
        .send(successHandler("200", "Successfully Modified", data));
    } else {
      next({ error: "Not Found", status: 404, Message: "Data is not present" });
    }
  }

  erase(req: Request, res: Response, next: NextFunction) {
    console.log("inside erase");
    const id = req.params.id;

    res.status(200).send(successHandler("200", "Successfully Deleted", "NULL"));
  }
}
//const singleton:TraineeController = new TraineeController();
//Object.freeze(singleton);
export default TraineeController.getInstance();
