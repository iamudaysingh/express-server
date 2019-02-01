import { userSchema, userModel } from "./UserModel";
import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";
export default class UserRepository {
  private model: mongoose.Model<IUserModel>;
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    this.model = userModel;
  }
  public create(data: any): Promise<IUserModel> {
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId()
    });
  }
  public delete(data: any)  {
    return this.model.deleteOne(data, err => {
      if (err) {
        console.log("Error",err);
      } else {
        console.log("Successfully Deleted");
      }
    });
  }
  public update(data: any, dataUp: any) {
    return this.model.updateOne(data, dataUp, err => {
      if (err) {
        console.log("Failure in update ", err);
      } else {
        console.log("Success in update");
      }
    });
  }
  // Update data using save
  //   var userModel1 = new userModel(data);
  //  return userModel1.save((err) => {
  //     if(err) {
  //       console.log("NOT created",err);

  //     }
  //     console.log("successfully created");
  //   })
  // }
  public view(data: any) {
    userModel
      .find({})
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
