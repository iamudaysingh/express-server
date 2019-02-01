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
  public count(): mongoose.Query<number> {
    //console.log(this.model.countDocuments({}));
     return this.model.countDocuments({});
    }
  public findOne(query): mongoose.Query<IUserModel> {
    return this.model.findOne(query);

  }
  public create(data: any): Promise<IUserModel> {
    return this.model.create({
      ...data,
      _id: String(UserRepository.generateObjectId())
    });
  }
  public delete(data: any) {
    return this.model.deleteOne(data, err => {
      if (err) {
        console.log("Error", err);
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
  public view(data: any) {
    userModel
      .find({data})
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
