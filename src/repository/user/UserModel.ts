import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import UserSchema from './UserSchema';
export const userSchema = new UserSchema({
  collection: 'name',
});
export const userModel: mongoose.Model<IUserModel> = mongoose.model(
  'user',
  userSchema,
  'user',
  true,
);
