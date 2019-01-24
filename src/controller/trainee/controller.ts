import { Router, Request, Response, nextFunction } from "express";
import { successHandler } from "./";
 class TraineeController {

  instance: any = null;
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }
  }
 get(req: Request, res: Response, next: nextFunction) {
    const data = [
      {
        name1: "trainee1",
        id: 101
      },
      {
        name2: "trainee2",
        id: 102
      }
    ];
    res.status(200).send(successHandler("200", "Successfully Found", data));
  }
  create(req: Request, res: Response, next) {
    const { name, id } = req.body;
    const data = [
      {
        name1: name,
        id: id
      }
    ];
    if (name && id) {
      res.status(200).send(successHandler("200", "Successfully Stored", data));
    } else {
      next({
        error: "Not Found",
        status: 404,
        Message: "Name or id is missing"
      });
    }
  }
  modify(req: Request, res: Response, next: nextFunction) {
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

  erase(req: Request, res: Response, next: nextFunction) {
    const { name, id } = req.body;
    const data = "NULL";
    if (name && id) {
      res.status(200).send(successHandler("200", "Successfully Deleted", data));
    } else {
      next({ error: "Not Found", status: 404, Message: "Data is not present" });
    }
  }
}
const singleton:TraineeController = new TraineeController();
Object.freeze(singleton);
export { TraineeController }
