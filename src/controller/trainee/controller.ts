import { NextFunction, Request, Response  } from 'express';
import { successHandler } from './';

class TraineeController  {
  public static getInstance() {
    if (!TraineeController.instance) {
      TraineeController.instance = new TraineeController();
    }
    return TraineeController.instance;
  }
  private static instance: TraineeController;
  public get(req: Request, res: Response, next: NextFunction) {
    console.log('Inside trainee get');
    const data = [
      {
        id: '101' ,
        name1: 'uday',
      },
    ];
    console.log('1111111111', data);
    res.status(200).send(successHandler('200', 'Successfully Found', data));
  }
  public create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [
      {
        id: ({id}),
        name1: name,
      },
    ];
    if (name && id) {
      res.status(200).send(successHandler('200', 'Successfully Stored', req.users));
    } else {
      next({
        Message: 'Name or id is missing',
        error: 'Not Found',
        status: 404,
      });
    }
  }
  public modify(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [
      {
        id1: id,
        name1: name,
      },
    ];
    if (name && id) {
      res
        .status(200)
        .send(successHandler('200', 'Successfully Modified', data));
    } else {
      next({ error: 'Not Found', status: 404, Message: 'Data is not present' });
    }
  }

  public erase(req: Request, res: Response, next: NextFunction) {
    console.log('inside erase');
    const id = req.params.id;
    res.status(200).send(successHandler('200', 'Successfully Deleted', 'NULL'));
  }
}
export default TraineeController.getInstance();
