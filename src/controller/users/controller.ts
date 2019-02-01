import { Router, Request, Response, NextFunction } from "express";
import  successHandler  from "../../libs/routes/successHandler";
import  {default as UserRepository} from"../../repositorty/user/UserRepository"
class UserController {
  private static instance: UserController;
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  get(req: Request, res: Response, next: NextFunction) {
    // const data = [
    //   {
    //     name1: ,
    //     id: 101
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
      res.status(200).send(successHandler("200", "Successfully Stored", data));
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
    const id = {name : req.params.id};
    new UserRepository().delete(id)

    res.status(200).send(successHandler("200", "Successfully Deleted User", "NULL"));
  }
}
//const singleton:UserController = new UserController();
//Object.freeze(singleton);
export default UserController.getInstance();
