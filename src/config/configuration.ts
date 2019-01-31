import { config } from "dotenv";
import { IConfig } from "./IConfig";
config();
const configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  key: process.env.key,
  mongoUrl : process.env.MONGO_URL
});
export default configuration;
