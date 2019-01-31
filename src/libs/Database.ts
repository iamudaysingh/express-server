import * as mongoose from "mongoose";
import { promises } from "fs";
import { resolve } from "dns";
import { rejects } from "assert";

export default class Database {
  static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true }
        )
        .then(result => {
          resolve("DATABASE CONNECTED");
        })
        .catch(err => {
          console.log("DATABASE NOT CONNECTED");
          reject("Error :DATABASE NOT CONNECTED");
        });
      const schema = new mongoose.Schema({ name: String });
      const cat = mongoose.model("cat", schema);
      const kitty = new cat({ name: "jerry" });
      kitty.save().then(() => console.log("meow"));
    });
  }
  static disconnect(mongoUrl) {
    mongoose.connection.close();
  }
}
