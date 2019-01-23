//import { config } from 'dotenv';
import config from './config/configuration'
import  {Server } from './server'
console.log( 'inside config', config);
const server = new Server(config);
server.bootstrap().run();
