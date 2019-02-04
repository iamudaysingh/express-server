import * as mongoose from 'mongoose';
import seedData from './seedData';

export default class Database {
  public static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true },
        )
        .then(() => {
          seedData();
          resolve('DATABASE CONNECTED');
          // seedData();
        })
        .catch((err) => {
          console.log('DATABASE NOT CONNECTED', err);
          reject('Error :DATABASE NOT CONNECTED');
        });
      /* @Sample Schema & Model for db connectivity check */
      // const schema = new mongoose.Schema({ name: String });
      // const cat = mongoose.model("cat", schema);
      // const kitty = new cat({ name: "jerry" });
      // kitty.save().then(() => console.log("meow"));
    });
  }
  public static disconnect(mongoUrl) {
    mongoose.connection.close();
  }
}
