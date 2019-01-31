import * as mongoose from "mongoose";
import UserSchema from "./UserSchema";
import IUserModel from "./IUserModel";
export const userSchema = new UserSchema({
  collection: "name"
});
export const userModel: mongoose.Model<IUserModel> = mongoose.model(
  "user",
  userSchema,
  "user",
  true
);
