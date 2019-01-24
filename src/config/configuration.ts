import { config } from "dotenv";
import { IConfig } from "./IConfig";
config();
const configuration: IConfig = Object.freeze({
  port: process.env.PORT
});
export default configuration;
