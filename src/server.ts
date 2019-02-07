import * as bodyParser from 'body-parser';
import * as express from 'express';
import Database from './libs/Database';
import {  errorHandler , notFoundRoutes } from './libs/routes';
import seedData from './libs/seedData';
import router from './router';
export class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
  }
  public initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const { app } = this;
    app.use('/health-check', (req, res) => {
      console.log('INSIDE SETUPROUTES');
      res.send('I AM OK');
    });
    app.use('/api', router);
    app.use(notFoundRoutes);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port, mongoUrl },
    } = this;
    Database.open(mongoUrl)
      .then((result) => {
        console.log(result);
        app.listen(port, (err) => {
          if (err) {
            throw err;
          }
          console.log(`APP is running on ,${port}`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
