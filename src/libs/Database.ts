import * as mongoose from "mongoose";
import { promises } from "fs";
import { resolve } from "dns";
import { rejects } from "assert";

export default class Database {
  static open(mongoURL) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoURL,
          { useNewUrlParser: true }
        )
        .then(()=> {
          console.log("DATABASE CONNECTED");
           resolve();
        })
        .catch((err)=> {
          console.log("DATABASE NOT CONNECTED");
         reject();
        });
    });
  }
  static disconnect(mongoURL){
    mongoose.connection.close();
  }

}
