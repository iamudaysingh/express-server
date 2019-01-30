import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundRoutes, errorHandler } from "./libs/routes";
import router from "./router";
import Database from "./libs/Database";
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
    app.use("/health-check", (req, res) => {
      console.log("INSIDE SETUPROUTES");
      res.send("I AM OK");
    });
    app.use("/api", router);
    app.use(notFoundRoutes);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port, mongoURL }
    } = this;
    Database.open(mongoURL)
      .then(() => {
        app.listen(port, err => {
          if (err) {
            throw err;
          }
          console.log(`APP is running on ,${port}`);
        });
      })
      .catch((err) => {
        console.log("ERROOOOOOOOOR");
        throw err;
      });
  }
}
