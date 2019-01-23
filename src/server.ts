import * as express from "express";
export class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
  }
  public bootstrap() {
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const { app } = this;
    app.use("/health-check", (req, res) => {
      console.log("INSIDE SETUPROUTES");
      res.send("I AM OK");
    });
  }
  public run() {
    const {
      app,
      config: { port }
    } = this;
    app.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`APP is running on ,${port}`);
    });
  }
}
